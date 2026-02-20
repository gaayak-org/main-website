import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import BrandingThemeProvider from "@/theme/BrandingThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CourseCorrect | Your Upskilling Partner",
  description: "We search 1000+ courses across platforms to find the one that fits your goals so you don’t waste time or money.",
  metadataBase: new URL('https://coursecorrect.fyi'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coursecorrect.fyi',
    siteName: 'coursecorrect.fyi',
    title: 'CourseCorrect | Your Upskilling Partner',
    description: "We search 1000+ courses across platforms to find the one that fits your goals so you don’t waste time or money.",
    images: [
      {
        url: '/images/og-image-light.jpg',
        width: 1200,
        height: 630,
        alt: 'CourseCorrect - Find your perfect course with our trusted AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CourseCorrect | Your Upskilling Partner',
    description: "We search 1000+ courses across platforms to find the one that fits your goals so you don’t waste time or money.",
    images: ['/images/og-image-light.jpg'],
    creator: '@coursecorrect',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <GoogleTagManager />
        <InitColorSchemeScript defaultMode="system" attribute="data-mui-color-scheme" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <BrandingThemeProvider>
            <PageViewTracker />
            {children}
          </BrandingThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}