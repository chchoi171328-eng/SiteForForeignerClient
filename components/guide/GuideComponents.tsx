// Building blocks for Legal Guides (guide-production PART A §3).
//
// All server-compatible (no hooks). Styling follows the site tone: serif
// headings, restrained navy/charcoal, gold accents. Guide bodies compose these;
// the english-guide-writer skill defines how they are used.

import type { ReactNode } from 'react'
import { Icons } from '@/components/Icons'

/** Top-of-guide summary box: the answer in three or four lines. */
export function GuideSummary({ children }: { children: ReactNode }) {
  return (
    <div className="mb-10 bg-slate-50 border-l-4 border-gold-400 rounded-r-lg p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3">In short</p>
      <div className="text-navy-900 leading-relaxed space-y-2 [&_ul]:space-y-2 [&_li]:leading-relaxed">
        {children}
      </div>
    </div>
  )
}

/** "On this page" anchor list. Pass [{href:'#...', label}]. */
export function GuideToc({ items }: { items: { href: string; label: string }[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="On this page" className="mb-10 border border-gray-200 rounded-lg p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">On this page</p>
      <ol className="space-y-1.5">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="text-sm text-navy-900 hover:text-gold-600 transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/**
 * Korean legal term, shown once with its Korean form so readers can recognise
 * it on documents: <Term ko="합의">settlement</Term> → settlement (합의).
 */
export function Term({ ko, children }: { ko: string; children: ReactNode }) {
  return (
    <span>
      {children} <span className="text-gray-500" lang="ko">({ko})</span>
    </span>
  )
}

/** Small caption under an image or block. */
export function Caption({ children }: { children: ReactNode }) {
  return <p className="text-xs text-gray-500 mt-2 leading-snug">{children}</p>
}

/** Note / warning box. */
export function Callout({
  variant = 'note',
  title,
  children,
}: {
  variant?: 'note' | 'warning'
  title?: string
  children: ReactNode
}) {
  const styles =
    variant === 'warning'
      ? 'border-red-300 bg-red-50 text-red-900'
      : 'border-navy-900/20 bg-navy-50 text-navy-900'
  return (
    <div role="note" className={`my-6 border rounded-lg p-5 leading-relaxed ${styles}`}>
      {title && <p className="font-bold mb-1">{title}</p>}
      <div className="text-sm leading-relaxed [&_p+p]:mt-2">{children}</div>
    </div>
  )
}

/** Numbered procedure flow. Pass [{title, body}]. */
export function GuideFlow({ steps }: { steps: { title: string; body: ReactNode }[] }) {
  return (
    <ol className="my-6 space-y-5">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span
            className="shrink-0 w-8 h-8 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <div>
            <p className="font-bold text-navy-900 mb-1">{step.title}</p>
            <div className="text-gray-700 leading-relaxed text-sm">{step.body}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

/** Deadlines box — the dates readers must not miss. Pass [{when, what}]. */
export function GuideDeadlines({ items }: { items: { when: string; what: ReactNode }[] }) {
  return (
    <div className="my-6 border-2 border-gold-400 rounded-lg overflow-hidden">
      <p className="bg-gold-400 text-navy-900 font-bold text-sm px-5 py-2 flex items-center gap-2">
        <Icons.Calendar className="w-4 h-4" aria-hidden="true" />
        Deadlines
      </p>
      <ul className="divide-y divide-gray-200">
        {items.map((d) => (
          <li key={d.when} className="px-5 py-3 flex flex-col sm:flex-row sm:gap-4">
            <span className="font-bold text-navy-900 sm:w-44 shrink-0">{d.when}</span>
            <span className="text-gray-700 text-sm leading-relaxed">{d.what}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** FAQ list. Pass [{q, a}]. */
export function GuideFaq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="my-6 space-y-6">
      {items.map((f) => (
        <div key={f.q}>
          <h3 className="font-bold text-navy-900 mb-1">{f.q}</h3>
          <div className="text-gray-700 leading-relaxed">{f.a}</div>
        </div>
      ))}
    </div>
  )
}
