'use client';

import Hero from '@/components/home/Hero';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout isHomePage>
      <Hero />
    </MainLayout>
  );
}
