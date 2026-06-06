import { searchCourses, SearchFilters } from '@/api/courses';
import { useQuery } from '@tanstack/react-query';

export function useSearchCourses(query: string, filters: SearchFilters) {
  return useQuery({
    queryKey: ['search', query, filters],
    queryFn: async () => {
      if (!query) return { data: { dataResult: [] } };
      return searchCourses(query, filters);
    },
    // Keep previous data while fetching new data
    placeholderData: (previousData) => previousData,
    // Only fetch if we have a query
    enabled: !!query,
  });
}