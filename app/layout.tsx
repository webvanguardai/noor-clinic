import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noor Clinic | Premium Aesthetic Medicine & Wellness · Business Bay, Dubai',
  description:
    'Dubai\'s premier aesthetic medicine clinic in Business Bay. Botox & fillers, laser skin resurfacing, IV vitamin drips, PRP hair restoration, body sculpting & skin brightening. Book your consultation.',
  keywords:
    'aesthetic clinic dubai, botox dubai, fillers dubai, laser skin resurfacing dubai, IV drip dubai, PRP hair restoration dubai, body sculpting dubai, emsculpt dubai, skin brightening dubai, medical aesthetics business bay, luxury clinic dubai',
  metadataBase: new URL('https://noor-clinic.vercel.app'),
  alternates: {
    canonical: 'https://noor-clinic.vercel.app',
  },
  openGraph: {
    title: 'Noor Clinic | Premium Aesthetic Medicine & Wellness · Dubai',
    description:
      'Dubai\'s premier aesthetic medicine clinic. Botox, fillers, laser resurfacing, IV drips, PRP & body sculpting. Experience the art of radiance in Business Bay.',
    url: 'https://noor-clinic.vercel.app',
    siteName: 'Noor Clinic Dubai',
    images: [
      {
        url: 'https://noor-clinic.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noor Clinic — Premium Aesthetic Medicine, Business Bay Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Clinic | Premium Aesthetic Medicine & Wellness · Dubai',
    description:
      'Dubai\'s premier aesthetic medicine clinic. Botox, fillers, laser resurfacing, IV drips, PRP & body sculpting. Business Bay.',
    images: ['https://noor-clinic.vercel.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PLACEHOLDER');
        `}</Script>

        {/* SVG Favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230A0A0F'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='18' font-family='serif' fill='%23C9A96E'>N</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
