import type { Metadata } from 'next'
import { GUIDES, toGuideMeta } from '@/content/guides/registry'
import GuidesList from '@/components/guide/GuidesList'

const PAGE_URL = 'https://www.lsfp.co.kr/guides'

export const metadata: Metadata = {
  title: 'Legal Guides',
  description:
    'Practical guides to Korean law for foreign residents — deposits, police procedure, divorce, wages, and more. Written to be useful whether or not you ever contact us.',
  openGraph: {
    title: 'Legal Guides | SOL & LUNA Law Firm',
    description:
      'Practical guides to Korean law for foreign residents — deposits, police procedure, divorce, wages, and more.',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary',
    title: 'Legal Guides | SOL & LUNA Law Firm',
    description:
      'Practical guides to Korean law for foreign residents.',
  },
  alternates: { canonical: PAGE_URL },
}

export default function GuidesPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">Legal Guides</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical guides to Korean law for foreign residents — written to be useful whether or not
            you ever contact us.
          </p>
        </header>

        <GuidesList guides={GUIDES.map(toGuideMeta)} />
      </div>
    </div>
  )
}
