import type { Metadata } from 'next'
import { Cinzel, Lato } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import GoogleAnalytics from '../components/GoogleAnalytics'
import { CONTACT_INFO } from '../constants'
import { Icons } from '../components/Icons'

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'SOL & LUNA Law Firm',
  image: 'https://sllaw.co.kr/assets/logo.png',
  '@id': 'https://sllaw.co.kr',
  url: 'https://sllaw.co.kr',
  telephone: '031-658-6100',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1029-1 Pyeongnam-ro, Pyeongtaek-si',
    addressLocality: 'Gyeonggi-do',
    addressCountry: 'KR'
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sllaw.co.kr'),
  title: {
    default: 'SOL & LUNA Law Firm | Expert Legal Services in Korea',
    template: '%s | SOL & LUNA Law Firm',
  },
  description: 'Trusted legal partner for expatriates and international businesses in Pyeongtaek and Gyeonggi-do.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sllaw.co.kr',
    siteName: 'SOL & LUNA Law Firm',
    title: 'SOL & LUNA Law Firm | Expert Legal Services in Korea',
    description: 'Trusted legal partner for expatriates and international businesses in Pyeongtaek and Gyeonggi-do.',
    images: [{ url: '/assets/logo.png', width: 512, height: 512, alt: 'SOL & LUNA Law Firm Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOL & LUNA Law Firm | Expert Legal Services in Korea',
    description: 'Trusted legal partner for expatriates and international businesses in Pyeongtaek and Gyeonggi-do.',
    images: ['/assets/logo.png'],
  },
  alternates: {
    canonical: 'https://sllaw.co.kr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`} suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-800 antialiased font-sans min-h-screen flex flex-col" suppressHydrationWarning>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#D4AF37] focus:text-[#0f172a] focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
        {/* Sticky Call Buttons logic */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-4">
          <a
            href="https://blog.naver.com/natural_born"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#03C75A] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#02b351] transition-colors"
            style={{ width: '56px', height: '56px' }}
            aria-label="Visit Naver Blog"
          >
            <span className="font-black text-2xl font-sans" style={{ marginTop: '2px', lineHeight: 1 }}>N</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.PHONE}`}
            className="bg-[#C5A028] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#B49120] transition-colors"
            aria-label={`Call us now at ${CONTACT_INFO.PHONE}`}
          >
            <Icons.Phone className="w-6 h-6" />
          </a>
        </div>
      </body>
    </html>
  )
}
