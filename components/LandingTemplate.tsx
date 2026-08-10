import Link from 'next/link'
import Image from 'next/image'
import type { LandingPage } from '@/content/landingPages'
import { CONTACT_INFO } from '@/constants'
import { Icons } from './Icons'
import ConsultationFees from './ConsultationFees'

const BASE = 'https://www.lsfp.co.kr'

/**
 * Shared presentation for all landing pages. Content differentiation lives in
 * content/landingPages.ts; this component only lays it out.
 */
export default function LandingTemplate({ page }: { page: LandingPage }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.metaDescription,
    url: `${BASE}/${page.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: page.title, item: `${BASE}/${page.slug}` },
      ],
    },
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">{page.title}</span>
        </nav>

        {/* Header — decorative textured banner (readability overlay over image) */}
        <header className="mb-12 relative rounded-xl overflow-hidden">
          <Image
            src="/assets/texture-section.png"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-navy-900/85" aria-hidden="true" />
          <div className="relative z-10 p-8 md:p-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
              {page.title}
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">{page.heroSubtitle}</p>
          </div>
        </header>

        {/* Non-affiliation disclaimer (shown prominently near the top when set) */}
        {page.disclaimer && (
          <div
            role="note"
            className="mb-12 border-l-4 border-gold-400 bg-slate-50 p-5 text-sm text-gray-700 leading-relaxed rounded-r-lg"
          >
            {page.disclaimer}
          </div>
        )}

        {/* Content sections */}
        {page.sections.map((section, i) => (
          <section key={section.heading ?? i} className="mb-10">
            {section.heading && (
              <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">{section.heading}</h2>
            )}
            {section.paragraphs?.map((p) => (
              <p key={p} className="text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-3">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Consultation CTA */}
        <section className="bg-navy-900 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Request a Consultation</h2>
          <div className="mb-6">
            <ConsultationFees variant="dark" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Icons.Calendar className="w-5 h-5" aria-hidden="true" />
              Request a Consultation
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
      </div>
    </div>
  )
}
