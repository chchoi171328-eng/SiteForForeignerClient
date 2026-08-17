import PracticeAreaCards from '@/components/PracticeAreaCards'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Criminal defense, civil litigation, real estate and lease disputes, debt collection, divorce and family law, and labor matters for foreign residents in Korea.',
  openGraph: {
    title: 'Practice Areas | SOL & LUNA Law Firm',
    description: 'Legal representation across criminal defense, civil litigation, real estate, debt collection, family law, and labor matters in Pyeongtaek, Korea.',
    url: 'https://www.lsfp.co.kr/practice-areas',
  },
  twitter: {
    card: 'summary',
    title: 'Practice Areas | SOL & LUNA Law Firm',
    description: 'Legal representation across criminal defense, civil litigation, real estate, debt collection, family law, and labor matters.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/practice-areas',
  },
}

export default function PracticeAreasPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* The index keeps the field card grid; the situation-based navigation
          stays on the home page and the For-Foreigners landings. */}
      <PracticeAreaCards />
    </div>
  )
}
