// Blog content (single source of truth).
//
// Static, file-based posts — no CMS or database. Each post carries the fields the
// guideline requires (author, reviewedBy, dates, category, tags, related practice
// area, disclaimer). Body is written as simple blocks so no markdown/MDX runtime
// dependency is needed; richer formatting can be added later if required.
//
// Do not publish legal-advice content without attorney review — set `reviewedBy`
// only when an attorney has actually reviewed the post.

export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string
  /** ISO date (YYYY-MM-DD); omit if never updated. */
  updatedAt?: string
  author: string
  /** Reviewing attorney; shown only when set. */
  reviewedBy?: string
  category: string
  tags: string[]
  /** Slug of a related practice area (see content/practiceAreas.ts). */
  relatedPracticeArea?: string
  featuredImage?: { src: string; alt: string }
  body: BlogBlock[]
}

export const BLOG_DISCLAIMER =
  'This article provides general information only and is not legal advice. Outcomes depend on the specific facts of each case. No attorney–client relationship is created by reading this article.'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-prepare-for-a-legal-consultation',
    title: 'How to Prepare for a Legal Consultation in Korea',
    description:
      'A practical checklist for foreign residents preparing for a paid legal consultation in Korea — what to bring and how to make the most of your time.',
    publishedAt: '2026-07-15',
    author: 'SOL & LUNA Law Firm',
    category: 'Guides',
    tags: ['consultation', 'getting started', 'foreigners in Korea'],
    relatedPracticeArea: 'civil-litigation',
    body: [
      {
        type: 'p',
        text: 'A focused consultation helps your attorney understand your situation quickly and give you a realistic assessment. A little preparation goes a long way, especially when you are dealing with an unfamiliar legal system.',
      },
      { type: 'h2', text: 'Bring a Short Summary of Your Situation' },
      {
        type: 'p',
        text: 'Write down what happened in the order it happened, with dates where you can. Keep it brief — a clear timeline is more useful than a long narrative.',
      },
      { type: 'h2', text: 'Gather Relevant Documents' },
      {
        type: 'ul',
        items: [
          'Contracts, agreements, or lease documents',
          'Messages, emails, or letters related to the matter',
          'Any official notices you have received',
          'Photos or records that support your account',
        ],
      },
      { type: 'h2', text: 'Note Your Questions and Goals' },
      {
        type: 'p',
        text: 'Decide what outcome matters most to you, and list the questions you want answered. This helps the attorney focus the consultation on what is important to you.',
      },
      { type: 'h2', text: 'A Note on Sensitive Information' },
      {
        type: 'p',
        text: 'You do not need to bring resident registration numbers or highly sensitive evidence to an initial consultation. Avoid including other people’s personal details where they are not necessary.',
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

/** Posts newest-first. */
export function getSortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

/** Rough reading time in minutes from a post body (~200 words/min). */
export function readingTimeMinutes(post: BlogPost): number {
  const words = post.body.reduce((n, block) => {
    if (block.type === 'ul') return n + block.items.join(' ').split(/\s+/).length
    return n + block.text.split(/\s+/).length
  }, 0)
  return Math.max(1, Math.round(words / 200))
}
