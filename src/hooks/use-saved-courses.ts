// src/hooks/use-saved-courses.ts
import { addCourseToShortlist, ERR_NO_AUTH_TOKEN, ERR_PERMISSION_DENIED, ERR_SESSION_EXPIRED, getSavedCourses, MAX_SAVED_COURSES, removeCourseFromShortlist } from '@/api/courses';
import { Course, SavedCoursesResponse } from '@/types/course';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

interface SaveCourseOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useSavedCourses(options?: SaveCourseOptions) {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();
  const isAuthenticated = status === 'authenticated' && !!session?.user;

  const MAX_REACHED_MSG = `You can shortlist up to ${MAX_SAVED_COURSES} courses. Please remove some courses before adding more.`;
  const ERR_NOT_LOGGED_IN = 'Please log in to view your shortlisted courses';

  // Add a helper method to check if we can add more courses
  const canAddMoreCourses = useMemo(() => {
    const currentData = queryClient.getQueryData<SavedCoursesResponse>(['saved-courses']);
    const currentCount = currentData?.data?.fetchItems?.length ?? 0;
    return currentCount < MAX_SAVED_COURSES;
  }, [queryClient]);

  const query = useQuery({
    queryKey: ['saved-courses'],
    queryFn: async () => {
      // Don't make the API call if user is not logged in
      if (!session?.user) {
        throw new Error(ERR_NOT_LOGGED_IN);
      }

      const token = (session as any)?.backendTokens?.token;
      return getSavedCourses(token);
    },
    // Only run query if auth status is determined (not 'loading')
    enabled: status !== 'loading',
    // Don't retry on auth errors
    retry: (failureCount, error) => {
      if (error instanceof Error) {
        // Don't retry for auth-related messages
        return error.message !== ERR_NO_AUTH_TOKEN &&
          error.message !== ERR_NOT_LOGGED_IN &&
          error.message !== ERR_SESSION_EXPIRED &&
          error.message !== ERR_PERMISSION_DENIED;
      }
      return failureCount < 2;
    },
  });

  // Add mutation for saving/removing courses
  const saveMutation = useMutation({
    mutationFn: async (courseId: string) => {
      const token = (session as any)?.backendTokens?.token;
      if (!token) throw new Error(ERR_NO_AUTH_TOKEN);

      if (!canAddMoreCourses) {
        throw new Error(MAX_REACHED_MSG);
      }

      return addCourseToShortlist(token, courseId);
    },
    onMutate: async (courseId) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['saved-courses'] });

      // Snapshot the previous value
      const previousData = queryClient.getQueryData<SavedCoursesResponse>(['saved-courses']);

      // Check limit before optimistic update
      const currentCount = previousData?.data?.fetchItems?.length ?? 0;
      if (currentCount >= MAX_SAVED_COURSES) {
        throw new Error(MAX_REACHED_MSG);
      }

      // Optimistically update to the new value
      if (previousData) {
        queryClient.setQueryData<SavedCoursesResponse>(['saved-courses'], {
          ...previousData,
          data: {
            ...previousData.data,
            fetchItems: [...previousData.data.fetchItems, { _id: courseId } as Course],
          },
        });
      }

      return { previousData };
    },
    onError: (err, courseId, context) => {
      // Revert back to the previous state if there's an error
      if (context?.previousData) {
        queryClient.setQueryData(['saved-courses'], context.previousData);
      }
      options?.onError?.(err as Error);
    },
    onSettled: () => {
      // Always refetch after error or success to ensure data consistency
      queryClient.invalidateQueries({ queryKey: ['saved-courses'] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (courseId: string) => {
      const token = (session as any)?.backendTokens?.token;

      return removeCourseFromShortlist(token, courseId);
    },
    onMutate: async (courseId) => {
      await queryClient.cancelQueries({ queryKey: ['saved-courses'] });
      const previousData = queryClient.getQueryData<SavedCoursesResponse>(['saved-courses']);

      if (previousData) {
        const newItems = previousData.data.fetchItems.filter(
          course => course._id !== courseId
        );

        // Update with new items array (can be empty)
        queryClient.setQueryData<SavedCoursesResponse>(['saved-courses'], {
          ...previousData,
          data: {
            ...previousData.data,
            fetchItems: newItems,
            totalCount: newItems.length,
          },
        });
      }

      return { previousData };
    },
    onError: (err, courseId, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['saved-courses'], context.previousData);
      }
      options?.onError?.(err as Error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['saved-courses'] });
    },
  });

  return {
    ...query,
    isAuthenticated,
    saveCourse: saveMutation.mutate,
    removeCourse: removeMutation.mutate,
    isMutating: saveMutation.isPending || removeMutation.isPending,
    canAddMoreCourses,
  };
}