import type { Metadata } from 'next'
import Link from 'next/link'
import { ATTORNEY, CONSULTATION, CONTACT_INFO } from '@/constants'
import { Icons } from '@/components/Icons'

const PAGE_URL = 'https://www.lsfp.co.kr/attorneys/cheolho-choi'

export const metadata: Metadata = {
  title: 'Cheolho Choi | English-Speaking Korean Attorney in Pyeongtaek',
  description:
    'Cheolho Choi (최철호), Representative Attorney at SOL & LUNA Law Firm in Pyeongtaek. KBA-registered specialist in Civil and Criminal Law, with in-house counsel experience at GS and Lotte E&C. Consultations conducted in English.',
  openGraph: {
    title: 'Cheolho Choi | English-Speaking Korean Attorney in Pyeongtaek',
    description:
      'Representative Attorney at SOL & LUNA Law Firm. KBA-registered specialist in Civil and Criminal Law. English consultations available.',
    url: PAGE_URL,
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Cheolho Choi | English-Speaking Korean Attorney in Pyeongtaek',
    description:
      'Representative Attorney at SOL & LUNA Law Firm. KBA-registered specialist in Civil and Criminal Law.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: ATTORNEY.nameEn,
    alternateName: ATTORNEY.nameKr,
    jobTitle: ATTORNEY.titleEn,
    worksFor: {
      '@type': 'LegalService',
      name: ATTORNEY.firmEn,
      url: 'https://www.lsfp.co.kr',
    },
    knowsAbout: ['Criminal Defense', 'Civil Litigation', 'Real Estate Law', 'Debt Collection', 'Family Law', 'Labor Law'],
    knowsLanguage: ['en', 'ko'],
    sameAs: [ATTORNEY.koreanProfileUrl],
  },
}

const RELATED_AREAS = [
  { name: 'Criminal Defense', icon: 'Shield' as const },
  { name: 'Civil Litigation', icon: 'Scale' as const },
  { name: 'Real Estate & Lease Disputes', icon: 'Building' as const },
  { name: 'Debt Collection', icon: 'Banknote' as const },
  { name: 'Divorce & Family Law', icon: 'Users' as const },
  { name: 'Labor & Employment', icon: 'Briefcase' as const },
]

export default function AttorneyProfilePage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">Cheolho Choi</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <p className="text-gold-600 font-bold uppercase tracking-widest mb-2">{ATTORNEY.titleEn}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-3">
            {ATTORNEY.nameEn} <span className="text-gray-400 font-light">({ATTORNEY.nameKr})</span>
          </h1>
          <p className="text-lg text-gray-600">{ATTORNEY.firmEn} · Pyeongtaek, Korea</p>

          <div className="mt-6 inline-flex items-center gap-2 bg-navy-50 text-navy-900 px-4 py-2 rounded-full text-sm font-medium">
            <Icons.Shield className="w-4 h-4 text-gold-600" aria-hidden="true" />
            KBA-Registered Specialist — {ATTORNEY.kbaSpecialties.join(' & ')}
          </div>
        </header>

        {/* English service */}
        <section className="mb-12 bg-white border-l-4 border-gold-400 p-6 shadow-sm rounded-r-lg">
          <h2 className="text-xl font-bold text-navy-900 mb-2 flex items-center gap-2">
            <Icons.Globe className="w-5 h-5 text-gold-600" aria-hidden="true" />
            English Consultation
          </h2>
          <p className="text-gray-700 leading-relaxed">{ATTORNEY.englishService}</p>
        </section>

        {/* Two-column: Education & Career */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Education</h2>
            <ul className="space-y-3">
              {ATTORNEY.education.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Experience</h2>
            <ul className="space-y-3">
              {ATTORNEY.career.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Background note (factual, from firm profile) */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Background</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Attorney Choi served as in-house counsel at GS Engineering &amp; Construction and Lotte
            Engineering &amp; Construction, gaining firsthand experience of how companies use and
            respond to the law from the inside.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Having studied both computer science and law, he is trained to break down complex case
            structures and analyze them methodically — an approach he applies to disputes involving
            multiple parties and overlapping issues.
          </p>
        </section>

        {/* Practice areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Main Practice Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {RELATED_AREAS.map((area) => {
              const IconComponent = Icons[area.icon] || Icons.Scale
              return (
                <div key={area.name} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <IconComponent className="w-5 h-5 text-navy-900 shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-navy-900">{area.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Consultation policy */}
        <section className="mb-12 bg-navy-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Consultation</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Initial consultations are paid and available by appointment. A {CONSULTATION.DURATION_MIN}-minute
            consultation is {CONSULTATION.FEE_KRW_LABEL} ({CONSULTATION.FEE_USD_APPROX_LABEL})
            {CONSULTATION.VAT_INCLUDED ? ', VAT included' : ''}. English consultations are conducted
            directly by the attorney.
          </p>
          <p className="text-gray-400 text-sm mb-6">{CONTACT_INFO.HOURS_EN}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Calendar className="w-5 h-5" aria-hidden="true" />
              Request a Paid Consultation
            </Link>
            <a
              href={`tel:${CONTACT_INFO.PHONE}`}
              className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Phone className="w-5 h-5" aria-hidden="true" />
              {CONTACT_INFO.PHONE}
            </a>
          </div>
        </section>

        {/* Korean profile link */}
        <p className="text-gray-600">
          A Korean-language profile is available on the firm&apos;s Korean site:{' '}
          <a
            href={ATTORNEY.koreanProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-600 font-medium underline hover:text-gold-700"
          >
            법무법인 명 (Korean)
          </a>
          .
        </p>
      </div>
    </div>
  )
}
