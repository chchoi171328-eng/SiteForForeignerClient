import LocationSection from '@/components/LocationSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location & Office',
  description: 'Visit the SOL & LUNA Law Firm office located in Pyeongtaek, Gyeonggi-do. Providing reliable legal representation for foreigners in Korea.',
  openGraph: {
    title: 'Location & Office | SOL & LUNA Law Firm',
    description: 'Find our office in Pyeongtaek — conveniently located to serve the international community near Camp Humphreys.',
    url: 'https://www.lsfp.co.kr/location',
  },
  twitter: {
    card: 'summary',
    title: 'Location & Office | SOL & LUNA Law Firm',
    description: 'Find our office in Pyeongtaek — conveniently located to serve the international community.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/location',
  },
}

export default function LocationPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <LocationSection />
    </div>
  )
}
