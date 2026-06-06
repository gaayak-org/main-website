'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/utils/analytics';

export const usePageViewTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pageName = pathname === '/' ? 'home' : pathname.slice(1);
    const query = searchParams?.get('q');

    trackPageView(pageName, query ? { search_query: query } : {});
  }, [pathname, searchParams]);
};