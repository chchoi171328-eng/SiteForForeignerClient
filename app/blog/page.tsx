import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest articles and updates regarding Korean law and legal tips for foreigners.',
  openGraph: {
    title: 'Blog | SOL & LUNA Law Firm',
    description: 'Legal insights and news — Korean law articles and tips for foreigners.',
    url: 'https://www.lsfp.co.kr/blog',
  },
  twitter: {
    card: 'summary',
    title: 'Blog | SOL & LUNA Law Firm',
    description: 'Legal insights and news — Korean law articles and tips for foreigners.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/blog',
  },
}

export default function BlogRootPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 text-center">
      <h1 className="text-4xl font-serif font-bold text-navy-900 mb-6">Legal Insights & News</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Blog posts will be available soon. Stay tuned for legal insights and updates.
      </p>
    </div>
  )
}
