'use client';

import { usePageViewTracking } from "@/hooks/use-analytics";
import { Suspense } from 'react';

function PageViewTrackerInner() {
  usePageViewTracking();
  return null;
}

export default function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
} 