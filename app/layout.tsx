import type { Metadata } from 'next'
import Link from 'next/link'
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
  image: 'https://www.lsfp.co.kr/assets/logo.png',
  '@id': 'https://www.lsfp.co.kr',
  url: 'https://www.lsfp.co.kr',
  telephone: '031-658-6100',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5F, SJ Plaza, 1029-1 Pyeongnam-ro',
    addressLocality: 'Pyeongtaek-si',
    addressRegion: 'Gyeonggi-do',
    addressCountry: 'KR'
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lsfp.co.kr'),
  title: {
    default: 'English-Speaking Korean Lawyer in Pyeongtaek | SOL & LUNA',
    template: '%s | SOL & LUNA Law Firm',
  },
  description: 'SOL & LUNA Law Firm assists foreign residents in Korea with criminal defense, civil litigation, real estate and lease disputes, debt recovery, labor issues, and family matters. Paid consultations are available by appointment in Pyeongtaek.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lsfp.co.kr',
    siteName: 'SOL & LUNA Law Firm',
    title: 'English-Speaking Korean Lawyer in Pyeongtaek | SOL & LUNA',
    description: 'SOL & LUNA Law Firm assists foreign residents in Korea with criminal defense, civil litigation, real estate and lease disputes, debt recovery, labor issues, and family matters.',
    images: [{ url: '/assets/logo.png', width: 512, height: 512, alt: 'SOL & LUNA Law Firm Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'English-Speaking Korean Lawyer in Pyeongtaek | SOL & LUNA',
    description: 'SOL & LUNA Law Firm assists foreign residents in Korea with criminal defense, civil litigation, real estate and lease disputes, debt recovery, labor issues, and family matters.',
    images: ['/assets/logo.png'],
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr',
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
        {/* Sticky conversion buttons — this slot points into the site, not out of it */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.PHONE}`}
            className="bg-[#C5A028] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#B49120] transition-colors"
            aria-label={`Call us now at ${CONTACT_INFO.PHONE}`}
          >
            <Icons.Phone className="w-6 h-6" />
          </a>
          <Link
            href="/contact"
            className="bg-navy-900 text-white pl-5 pr-6 py-4 rounded-full shadow-2xl inline-flex items-center gap-2 font-bold text-sm hover:bg-navy-800 transition-colors"
          >
            <Icons.Calendar className="w-5 h-5 shrink-0" aria-hidden="true" />
            Request a Consultation
          </Link>
        </div>
      </body>
    </html>
  )
}
