import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import BrandingThemeProvider from "@/theme/BrandingThemeProvider";
import { DEFAULT_COLOR_MODE } from "@/theme/defaultColorMode";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gaayak.org | Where singers and creators grow together",
  description: "Where singers and creators grow together",
  metadataBase: new URL('https://gaayak.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gaayak.org',
    siteName: 'gaayak.org',
    title: 'gaayak.org | Where singers and creators grow together',
    description: "Where singers and creators grow together",
    images: [
      {
        url: '/images/logos/gaayak-logo-v0.png',
        width: 1200,
        height: 630,
        alt: 'gaayak.org',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gaayak.org | Where singers and creators grow together',
    description: "Where singers and creators grow together",
    images: ['/images/logos/gaayak-logo-v0.png'],
    creator: '@gaayak.org',
  },
  icons: {
    icon: '/images/logos/gaayak-logo-v0.png',
    apple: '/images/logos/gaayak-logo-v0.png',
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
        <InitColorSchemeScript defaultMode={DEFAULT_COLOR_MODE} attribute="data-mui-color-scheme" />
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