import About from '@/components/About'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SOL & LUNA Law Firm, a Korean law firm in Pyeongtaek assisting foreign residents with criminal, civil, real estate, debt, labor, and family matters.',
  openGraph: {
    title: 'About Us | SOL & LUNA Law Firm',
    description: 'Learn more about SOL & LUNA Law Firm — providing dedicated legal services for the international community in Korea.',
    url: 'https://www.lsfp.co.kr/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us | SOL & LUNA Law Firm',
    description: 'Learn more about SOL & LUNA Law Firm — providing dedicated legal services for the international community in Korea.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <About />
    </div>
  )
}
