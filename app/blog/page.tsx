import type { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPosts, readingTimeMinutes } from '@/content/blog'
import { Icons } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Legal insights and practical guides on Korean law for foreign residents — from SOL & LUNA Law Firm in Pyeongtaek.',
  openGraph: {
    title: 'Blog | SOL & LUNA Law Firm',
    description: 'Legal insights and practical guides on Korean law for foreign residents.',
    url: 'https://www.lsfp.co.kr/blog',
  },
  twitter: {
    card: 'summary',
    title: 'Blog | SOL & LUNA Law Firm',
    description: 'Legal insights and practical guides on Korean law for foreign residents.',
  },
  alternates: {
    canonical: 'https://www.lsfp.co.kr/blog',
  },
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogRootPage() {
  const posts = getSortedPosts()

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="text-center mb-14">
          <h1 className="text-4xl font-serif font-bold text-navy-900 mb-4">Legal Insights & Guides</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical information on Korean law for foreign residents.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600">
            Articles will be available soon. Please check back later.
          </p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug} className="border-b border-gray-100 pb-8">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-2">{post.category}</p>
                  <h2 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">{post.description}</p>
                  <div className="flex items-center gap-x-3 text-sm text-gray-500">
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{readingTimeMinutes(post)} min read</span>
                    <span className="text-gold-600 font-medium inline-flex items-center gap-1 ml-auto group-hover:gap-2 transition-all">
                      Read <Icons.ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
