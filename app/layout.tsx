import type { Metadata } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Noor Clinic | Precision Aesthetic Medicine · Business Bay, Dubai',
  description:
    'DHA-licensed aesthetic clinic in Business Bay, Dubai. Botox & fillers, laser resurfacing, IV drips, PRP hair restoration, body sculpting, skin brightening. Board-certified doctors. Book same-day.',
  keywords:
    'aesthetic clinic dubai, botox dubai, fillers dubai, laser resurfacing dubai, IV drip dubai, PRP hair restoration dubai, body sculpting dubai, skin brightening dubai, DHA licensed clinic, Business Bay aesthetic clinic',
  metadataBase: new URL('https://noor-clinic.vercel.app'),
  alternates: {
    canonical: 'https://noor-clinic.vercel.app',
  },
  openGraph: {
    title: 'Noor Clinic | Precision Aesthetics · Business Bay, Dubai',
    description:
      'Precision aesthetics. Visible results. DHA-licensed clinic in Business Bay, Dubai. Botox, fillers, laser, IV drips, PRP & body sculpting.',
    url: 'https://noor-clinic.vercel.app',
    siteName: 'Noor Clinic Dubai',
    images: [
      {
        url: 'https://noor-clinic.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noor Clinic — Precision Aesthetic Medicine, Business Bay Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Clinic | Precision Aesthetics · Business Bay, Dubai',
    description:
      'DHA-licensed aesthetic clinic. Botox, fillers, laser resurfacing, IV drips, PRP & body sculpting. Business Bay, Dubai.',
    images: ['https://noor-clinic.vercel.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* GA4 */}
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
        {/* Inline SVG favicon */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%23B5927A'/><text x='50%25' y='56%25' dominant-baseline='middle' text-anchor='middle' font-size='20' font-family='Georgia,serif' fill='%23FFFFFF'>N</text></svg>"
        />
      </head>
      <body className="font-sans bg-white text-charcoal">{children}</body>
    </html>
  )
}
