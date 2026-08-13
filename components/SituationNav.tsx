'use client';

import React from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { trackEvent } from '../lib/gtag';

/**
 * "What's your situation?" — situation-based navigation (city-pages brief §A).
 *
 * Sixteen sentence rows grouped under non-clickable signpost headers, always
 * fully expanded (no accordion), each row an individual link to its practice
 * area, plus a visually separated catch-all box linking to /contact. Mirrors
 * the equivalent component on the firm's Korean-site home.
 */

type SituationRow = {
  /** GA event label (situation_click). */
  id: string
  sentence: string
  href: string
  /** Small practice-area label shown desktop-only on the row's right. */
  field: string
}

type SituationGroup = {
  header: string
  rows: SituationRow[]
}

const GROUPS: SituationGroup[] = [
  {
    header: 'Police & Criminal',
    rows: [
      {
        id: 'criminal-summons',
        sentence: "The police have contacted me, or I've received a summons.",
        href: '/practice-areas/criminal-defense',
        field: 'Criminal Defense',
      },
      {
        id: 'criminal-family-arrested',
        sentence: 'Someone in my family has been arrested or is being investigated.',
        href: '/practice-areas/criminal-defense',
        field: 'Criminal Defense',
      },
      {
        id: 'criminal-dui',
        sentence: 'I was stopped for drunk driving.',
        href: '/practice-areas/criminal-defense',
        field: 'Criminal Defense',
      },
      {
        id: 'criminal-assault',
        sentence: "I'm being accused after a fight or an argument that got physical.",
        href: '/practice-areas/criminal-defense',
        field: 'Criminal Defense',
      },
    ],
  },
  {
    header: 'Money',
    rows: [
      {
        id: 'money-lent',
        sentence: "I lent money and I'm not getting it back.",
        href: '/practice-areas/debt-collection',
        field: 'Debt Collection',
      },
      {
        id: 'money-scam',
        sentence: 'I was scammed, and I want my money back.',
        href: '/practice-areas/debt-collection',
        field: 'Debt Collection',
      },
      {
        id: 'civil-court-papers',
        sentence: "I've received court papers — a complaint or a payment order.",
        href: '/practice-areas/civil-litigation',
        field: 'Civil Litigation',
      },
      {
        id: 'civil-contract',
        sentence: 'I have a contract dispute with a business or a person.',
        href: '/practice-areas/civil-litigation',
        field: 'Civil Litigation',
      },
    ],
  },
  {
    header: 'Home & Housing',
    rows: [
      {
        id: 'housing-deposit',
        sentence: "My landlord won't return my deposit.",
        href: '/practice-areas/real-estate-lease-disputes',
        field: 'Real Estate & Lease',
      },
      {
        id: 'housing-moveout',
        sentence: "I'm moving out and worried about what I'll get back.",
        href: '/practice-areas/real-estate-lease-disputes',
        field: 'Real Estate & Lease',
      },
      {
        id: 'housing-landlord',
        sentence: "My landlord is threatening me, or won't fix serious problems.",
        href: '/practice-areas/real-estate-lease-disputes',
        field: 'Real Estate & Lease',
      },
    ],
  },
  {
    header: 'Family',
    rows: [
      {
        id: 'family-divorce',
        sentence: "I'm thinking about divorce, or my spouse is demanding one.",
        href: '/practice-areas/divorce-family-law',
        field: 'Divorce & Family',
      },
      {
        id: 'family-custody',
        sentence: "We've separated — now it's about the kids and support.",
        href: '/practice-areas/divorce-family-law',
        field: 'Divorce & Family',
      },
      {
        id: 'family-inheritance',
        sentence: "Someone died, and I'm worried about Korean inheritance — or their debts.",
        href: '/practice-areas/divorce-family-law',
        field: 'Divorce & Family',
      },
    ],
  },
  {
    header: 'Work',
    rows: [
      {
        id: 'work-wages',
        sentence: "My wages or severance haven't been paid.",
        href: '/practice-areas/labor-employment',
        field: 'Labor & Employment',
      },
      {
        id: 'work-dismissal',
        sentence: "I've been dismissed and it doesn't feel right.",
        href: '/practice-areas/labor-employment',
        field: 'Labor & Employment',
      },
    ],
  },
]

const SituationNav: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mb-3">
        What&apos;s your situation?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        Pick the sentence closest to yours. You don&apos;t need to know what kind of case it is —
        that&apos;s our job.
      </p>

      {GROUPS.map((group) => (
        <div key={group.header} className="mb-6">
          {/* Signpost only — intentionally not a link, not a toggle. */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 px-1">
            {group.header}
          </p>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {group.rows.map((row) => (
              <li key={row.id}>
                <Link
                  href={row.href}
                  onClick={() => trackEvent('situation_click', { label: row.id })}
                  className="group flex items-center justify-between gap-4 min-h-[44px] py-3 px-1 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-gray-800 leading-snug">&ldquo;{row.sentence}&rdquo;</span>
                  <span className="flex items-center gap-3 shrink-0">
                    <span className="hidden md:inline text-xs text-gray-400 group-hover:text-gold-600 transition-colors whitespace-nowrap">
                      {row.field}
                    </span>
                    <Icons.ArrowRight
                      className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Catch-all — the one box that is clickable as a whole. */}
      <Link
        href="/contact"
        onClick={() => trackEvent('situation_click', { label: 'catchall' })}
        className="group flex items-center justify-between gap-4 min-h-[44px] mt-8 p-5 rounded-lg border border-gold-400/60 bg-gold-400/5 hover:bg-gold-400/15 transition-colors"
      >
        <span>
          <span className="block text-navy-900 font-bold leading-snug">
            &ldquo;I&apos;m not sure what kind of problem this is.&rdquo;
          </span>
          <span className="block text-gray-600 text-sm mt-1 leading-snug">
            You don&apos;t need to classify it. Just tell us what happened.
          </span>
        </span>
        <Icons.ArrowRight
          className="w-5 h-5 text-gold-500 shrink-0 group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        />
      </Link>
    </div>
  )
}

export default SituationNav;
