'use client';

import { getCourseById } from "@/api/courses";
import { useQuery } from "@tanstack/react-query";

export function useCourseDetails(id: string) {
  return useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      if (!id) return { data: { dataResult: [] } };
      return getCourseById(id);
    },
    // Keep previous data while fetching new data
    placeholderData: (previousData) => previousData,
    // Only fetch if we have a course ID
    enabled: !!id,
  });
}