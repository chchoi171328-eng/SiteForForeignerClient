import type { Metadata } from 'next'
import Link from 'next/link'
import { RETAINER_RANGES } from '@/content/fees'
import { CONTACT_INFO } from '@/constants'
import { Icons } from '@/components/Icons'
import ConsultationFees from '@/components/ConsultationFees'

const PAGE_URL = 'https://www.lsfp.co.kr/fees'

export const metadata: Metadata = {
  title: 'Legal Fees',
  description:
    'SOL & LUNA legal fees for foreign residents in Korea — how retainers and success fees work, retainer ranges by practice area, and the flat consultation fee. Quoted in writing before you sign.',
  openGraph: {
    title: 'Legal Fees | SOL & LUNA Law Firm',
    description:
      'How legal fees work in Korea, retainer ranges by practice area, and the flat consultation fee — quoted in writing before you sign.',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'Legal Fees | SOL & LUNA Law Firm',
    description:
      'How legal fees work in Korea, retainer ranges by practice area, and the flat consultation fee.',
  },
  alternates: { canonical: PAGE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Legal Fees',
  url: PAGE_URL,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.lsfp.co.kr' },
      { '@type': 'ListItem', position: 2, name: 'Legal Fees', item: PAGE_URL },
    ],
  },
}

export default function FeesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">Legal Fees</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Legal Fees</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We tell you the cost from the start.<br />
            It does not suddenly grow mid-case.
          </p>
          <p className="text-gray-600 leading-relaxed">
            An exact quote follows a review of your case. The price you are told at the consultation is the
            price — it does not change at signing.
          </p>
        </header>

        {/* How legal fees work in Korea */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">How legal fees work in Korea</h2>
          <p className="text-gray-700 leading-relaxed">
            Korean litigation fees typically have two parts. The retainer (착수금) is paid when you engage the
            firm and covers the work of running your case. A success fee (성공보수), agreed in writing before
            you sign, is paid only if the outcome defined in your engagement letter is achieved. Both are set
            out in your engagement letter before you commit — nothing is added mid-case.
          </p>
        </section>

        {/* Retainer ranges */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Retainer ranges</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-navy-900">
                  <th className="py-3 pr-4 font-bold text-navy-900">Practice area</th>
                  <th className="py-3 pr-4 font-bold text-navy-900 whitespace-nowrap">Retainer range</th>
                  <th className="py-3 font-bold text-navy-900">Depends on</th>
                </tr>
              </thead>
              <tbody>
                {RETAINER_RANGES.map((r) => (
                  <tr key={r.area} className="border-b border-gray-200 align-top">
                    <td className="py-3 pr-4 font-medium text-navy-900">{r.area}</td>
                    <td className="py-3 pr-4 text-gray-700 whitespace-nowrap">{r.range}</td>
                    <td className="py-3 text-gray-600 text-sm">{r.dependsOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mt-4">
            Retainer amounts are subject to VAT (10%), which is not included in the figures above. The
            consultation fee below includes VAT.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Where your case falls within a range depends on its stage, its complexity, and the scope of work —
            including work conducted in English. The exact figure is quoted in writing before you sign.
          </p>
        </section>

        {/* Consultation fee block (shared standard block) */}
        <section className="mb-12 bg-navy-900 text-white p-8 rounded-xl">
          <ConsultationFees variant="dark" />
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
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

        {/* What we will tell you before you pay anything */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
            What we will tell you before you pay anything
          </h2>
          <ul className="space-y-3">
            {[
              'If we think your chances are poor, we will not recommend engaging us. That assessment is what the consultation fee buys.',
              'Which situations can create additional costs during a case — and which cannot — explained before you sign, not discovered after.',
              'Case record review and document analysis are quoted separately and agreed in advance.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gray-700 leading-relaxed">
            Ready to book?{' '}
            <Link href="/contact" className="font-bold text-gold-600 hover:text-gold-700 underline underline-offset-2">
              Send a consultation request
            </Link>{' '}
            — we&apos;ll reply with available times.
          </p>
        </section>
      </div>
    </div>
  )
}
