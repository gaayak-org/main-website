import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'gaayak.org — Making Indian Singing Education Clear, Balanced, and Accessible',
  description: 'Because learning to sing shouldn\'t mean memorizing without understanding. Join us as we build a structured, balanced approach to Indian singing education.',
  keywords: ['Indian singing', 'music education', 'singing lessons', 'Hindi music', 'vocal training'],
  authors: [{ name: 'gaayak.org' }],
  openGraph: {
    title: 'gaayak.org — Making Indian Singing Education Clear, Balanced, and Accessible',
    description: 'Because learning to sing shouldn\'t mean memorizing without understanding.',
    url: 'https://gaayak.org',
    siteName: 'gaayak.org',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gaayak.org — Making Indian Singing Education Clear, Balanced, and Accessible',
    description: 'Because learning to sing shouldn\'t mean memorizing without understanding.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}