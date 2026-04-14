import PracticeAreas from '@/components/PracticeAreas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Explore our areas of expertise including Criminal Defense, Divorce & Family Law, Corporate Law, Labor & Employment, and Civil Litigation.',
  openGraph: {
    title: 'Practice Areas | SOL & LUNA Law Firm',
    description: 'Expert legal representation across Criminal Defense, Family Law, Corporate Law, and more in Pyeongtaek, Korea.',
    url: 'https://sllaw.co.kr/practice-areas',
  },
  twitter: {
    card: 'summary',
    title: 'Practice Areas | SOL & LUNA Law Firm',
    description: 'Expert legal representation across Criminal Defense, Family Law, Corporate Law, and more.',
  },
  alternates: {
    canonical: 'https://sllaw.co.kr/practice-areas',
  },
}

export default function PracticeAreasPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <PracticeAreas />
    </div>
  )
}
