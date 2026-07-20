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
      <div className="container mx-auto px-6 max-w-3xl mb-4">
        <p className="text-gray-700 leading-relaxed text-lg">
          Our office is on the 5th floor of SJ Plaza in central Pyeongtaek, minutes from Pyeongtaek
          District Court and the District Prosecutors&apos; Office — the buildings where local cases are
          actually decided. Consultations are by appointment.
        </p>
      </div>
      <LocationSection />
    </div>
  )
}
