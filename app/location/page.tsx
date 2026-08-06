import Image from 'next/image'
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

      {/* Wayfinding photos — kept in their original portrait ratio */}
      <div className="container mx-auto px-6 max-w-5xl mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              src: '/assets/building-exterior.jpg',
              alt: 'SJ Plaza building in central Pyeongtaek, home of SOL & LUNA Law Firm',
            },
            {
              src: '/assets/street-to-court.jpg',
              alt: 'Street view of our building — the Pyeongtaek courthouse is directly across the road',
            },
            {
              src: '/assets/entrance.jpg',
              alt: 'Entrance nameplate at the SOL & LUNA Law Firm office',
            },
          ].map((photo) => (
            <div key={photo.src} className="rounded-lg overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <LocationSection />
    </div>
  )
}
