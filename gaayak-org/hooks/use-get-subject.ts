import { searchCourses, SearchFilters } from '@/api/courses';
import { useQuery } from '@tanstack/react-query';
import { getSubjectBySlug } from '@/api/subjects';

export function useGetSubject(query: string, filters: SearchFilters) {
  const subjectQuery = query.replace(/-/g, " ");

  const fetchCombinedData = async () => {
    const [subjectDetail, subjectCourses] = await Promise.all([
      getSubjectBySlug(query),
      searchCourses(subjectQuery, filters),
    ]);

    const combined = {
      subjectDetail,
      subjectCourses,
    };

    console.log("combined: ", combined)

    return combined;
  }

  return useQuery({
    queryKey: ['get-subject', query, filters],
    queryFn: fetchCombinedData,
    // Keep previous data while fetching new data
    placeholderData: (previousData) => previousData,
    // Only fetch if we have a query
    enabled: !!query,
  });
}
