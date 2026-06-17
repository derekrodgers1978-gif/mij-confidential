import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIJ Confidential — Japanese Guitar Podcast & Book by Derek Rodgers',
  description: 'The definitive podcast and book on Made in Japan guitars. ESP, Navigator, Tokai, Greco, Burny, Fender Japan and more. Hosted by Derek Rodgers.',
  keywords: ['Made in Japan guitars', 'MIJ guitars', 'Japanese guitars', 'Navigator guitars', 'Tokai guitars', 'Greco guitars', 'ESP guitars', 'vintage Japanese guitars', 'guitar podcast', 'Derek Rodgers'],
  openGraph: {
    title: 'MIJ Confidential',
    description: 'Japanese guitars. Real stories. No fluff.',
    siteName: 'MIJ Confidential',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIJ Confidential',
    description: 'The definitive podcast on Made in Japan guitars.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
