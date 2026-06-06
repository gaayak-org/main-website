'use client';

import { getCourseById } from "@/api/courses";
import { Course } from "@/types/course";
import { useQueryClient } from "@tanstack/react-query";

// Maximum number of IDs to fetch in a single request
const BATCH_SIZE = 20;

/**
 * Custom hook to manage course cache and batch fetch courses by IDs
 * This is a simplified version that doesn't use reactive hooks
 */
export function useCourseCache() {
  const queryClient = useQueryClient();

  /**
   * Fetch multiple courses by IDs
   */
  const fetchCoursesByIds = async (ids: string[]) => {
    if (!ids.length) return [];

    // Create the URL with comma-separated IDs
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = `${baseUrl}/api/v1/courses`;

    const response = await fetch(`${endpoint}?ids=${ids.join(',')}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }

    const data = await response.json();
    return data.data || [];
  };

  /**
   * Process course IDs in batches and add to cache
   */
  const processCourseIds = async (courseIds: string[]) => {
    if (!courseIds.length) return;

    // Filter out IDs that are already in the cache
    const uncachedIds = courseIds.filter(id => {
      const cachedData = queryClient.getQueryData(['course', id]);
      return !cachedData;
    });

    if (!uncachedIds.length) return;

    // Process in batches
    for (let i = 0; i < uncachedIds.length; i += BATCH_SIZE) {
      const batchIds = uncachedIds.slice(i, i + BATCH_SIZE);
      try {
        const batchData = await fetchCoursesByIds(batchIds);

        // Update cache for each course
        batchData.forEach((course: Course) => {
          queryClient.setQueryData(['course', course._id], {
            data: course
          });
        });
      } catch (error) {
        console.error('Error fetching batch of courses:', error);
      }
    }
  };

  /**
   * Get a course from cache or fetch it if not in cache
   */
  const getCourse = async (courseId: string) => {
    if (!courseId) return null;

    // Check if course is in cache
    const cachedCourse: any = queryClient.getQueryData(['course', courseId]);
    if (cachedCourse) return cachedCourse.data;

    // If not in cache, fetch it
    try {
      const courseData = await getCourseById(courseId);

      // If the API returned null or undefined data
      if (!courseData || !courseData.data) {
        throw new Error(`Course ${courseId} not found in API`);
      }

      // Add to cache
      queryClient.setQueryData(['course', courseId], courseData);

      return courseData.data;
    } catch (error) {
      console.error(`Error fetching course ${courseId}:`, error);
      return null;
    }
  };

  return {
    getCourse,
    processCourseIds,
  };
}
