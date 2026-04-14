import About from '@/components/About'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about SOL & LUNA Law Firm and our commitment to providing expert legal solutions in Korea for expatriates and international businesses.',
  openGraph: {
    title: 'About Us | SOL & LUNA Law Firm',
    description: 'Learn more about SOL & LUNA Law Firm — providing dedicated legal services for the international community in Korea.',
    url: 'https://sllaw.co.kr/about',
  },
  twitter: {
    card: 'summary',
    title: 'About Us | SOL & LUNA Law Firm',
    description: 'Learn more about SOL & LUNA Law Firm — providing dedicated legal services for the international community in Korea.',
  },
  alternates: {
    canonical: 'https://sllaw.co.kr/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <About />
    </div>
  )
}
