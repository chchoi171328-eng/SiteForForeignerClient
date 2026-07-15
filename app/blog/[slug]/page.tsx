import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  BLOG_POSTS,
  BLOG_DISCLAIMER,
  getBlogPost,
  getSortedPosts,
  readingTimeMinutes,
} from '@/content/blog'
import { getPracticeArea } from '@/content/practiceAreas'
import { Icons } from '@/components/Icons'

const BASE = 'https://www.lsfp.co.kr'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const url = `${BASE}/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${post.title} | SOL & LUNA Law Firm`,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      ...(post.featuredImage ? { images: [{ url: post.featuredImage.src }] } : {}),
    },
    twitter: { card: 'summary', title: post.title, description: post.description },
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const url = `${BASE}/blog/${post.slug}`
  const minutes = readingTimeMinutes(post)
  const relatedArea = post.relatedPracticeArea ? getPracticeArea(post.relatedPracticeArea) : undefined
  const relatedPosts = getSortedPosts().filter((p) => p.slug !== post.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: post.author },
    ...(post.reviewedBy ? { reviewedBy: { '@type': 'Person', name: post.reviewedBy } } : {}),
    publisher: { '@type': 'Organization', name: 'SOL & LUNA Law Firm', url: BASE },
    mainEntityOfPage: url,
    ...(post.featuredImage ? { image: post.featuredImage.src } : {}),
  }

  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="container mx-auto px-6 max-w-3xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gold-600">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <Link href="/blog" className="hover:text-gold-600">Blog</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-gray-800">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <p className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-3">{post.category}</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
            <span>By {post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated {formatDate(post.updatedAt)}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{minutes} min read</span>
          </div>
          {post.reviewedBy && (
            <p className="text-sm text-gray-500 mt-2">Reviewed by {post.reviewedBy}</p>
          )}
        </header>

        {post.featuredImage && (
          <div className="mb-10 rounded-lg overflow-hidden">
            <Image
              src={post.featuredImage.src}
              alt={post.featuredImage.alt}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div className="prose-content">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="text-2xl font-serif font-bold text-navy-900 mt-8 mb-3">
                  {block.text}
                </h2>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="space-y-2 mb-4">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <Icons.ArrowRight className="w-4 h-4 text-gold-500 mt-1.5 shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">{block.text}</p>
            )
          })}
        </div>

        {/* Tags + related practice area */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-gray-600 px-3 py-1 rounded-full">#{tag}</span>
          ))}
          {relatedArea && (
            <Link
              href={`/practice-areas/${relatedArea.slug}`}
              className="text-sm text-gold-600 font-medium underline ml-auto"
            >
              Related: {relatedArea.title}
            </Link>
          )}
        </div>

        {/* Consultation CTA */}
        <section className="mt-10 bg-navy-900 text-white p-8 rounded-xl">
          <h2 className="text-xl font-serif font-bold mb-3">Have a related legal question?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Initial consultations are paid and by appointment, conducted directly by the attorney in English.
          </p>
          <Link
            href="/contact"
            className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-3 rounded-sm font-bold transition-colors inline-flex items-center gap-2"
          >
            <Icons.Calendar className="w-5 h-5" aria-hidden="true" />
            Request a Paid Consultation
          </Link>
        </section>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 leading-relaxed mt-8">{BLOG_DISCLAIMER}</p>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">More Articles</h2>
            <ul className="space-y-4">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <span className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {p.title}
                    </span>
                    <span className="block text-sm text-gray-500">{p.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}
