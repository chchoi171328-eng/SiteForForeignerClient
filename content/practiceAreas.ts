// Single source of truth for practice-area content.
//
// The template at app/practice-areas/[slug]/page.tsx renders each section only
// when it has content, so entries can be filled in incrementally. Sections that
// state legal procedure, deadlines, required documents, or step-by-step actions
// are intentionally left EMPTY until attorney-reviewed copy is provided — do not
// invent legal content to fill them.

import type { Icons } from '@/components/Icons'

export type FAQ = {
  question: string
  answer: string
}

export type PracticeArea = {
  slug: string
  /** Full display title, e.g. for the detail page H1 and cards. */
  title: string
  /** Icon key from components/Icons. */
  icon: keyof typeof Icons
  /** One-line description used on cards and grids. */
  cardDescription: string
  /** <title>/meta description for the detail page. */
  metaDescription: string
  /** Whether to show this area in the home-page practice grid. */
  showOnHome: boolean

  // --- Detail page sections (guideline §10). Optional; hidden when empty. ---
  /** Section 1 — Overview paragraphs. */
  overview?: string[]
  /** Section 2 — Common situations we handle (factual case types). */
  commonSituations?: string[]
  /** Section 3 — How the Korean legal procedure works. NEEDS ATTORNEY COPY. */
  koreanProcedure?: string[]
  /** Section 4 — Immediate steps to take. NEEDS ATTORNEY COPY. */
  immediateSteps?: string[]
  /** Section 5 — Documents and evidence to prepare. NEEDS ATTORNEY COPY. */
  documents?: string[]
  /** Section 6 — Risks and deadlines. NEEDS ATTORNEY COPY. */
  risks?: string[]
  /** Section 7 — How the attorney assists. Falls back to a shared default. */
  attorneyAssistance?: string[]
  /** Section 8 — Frequently asked questions. */
  faqs?: FAQ[]
}

/** Shared default for "How the attorney assists" when an entry omits it. */
export const DEFAULT_ATTORNEY_ASSISTANCE: string[] = [
  'A single attorney handles your matter from the first consultation through to court, so nothing is lost in handoffs.',
  'We assess the realistic outcome honestly before you commit to litigation.',
  'Consultations are conducted directly in English.',
]

/** Shared disclaimer shown at the bottom of every practice-area page. */
export const PRACTICE_DISCLAIMER =
  'This page provides general information only and is not legal advice. Outcomes depend on the specific facts of each case. No attorney–client relationship is created by viewing this page or submitting an inquiry.'

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    icon: 'Shield',
    cardDescription:
      'Defense representation for foreign residents in Korean criminal cases and police investigations.',
    metaDescription:
      'Criminal defense for foreign residents in Korea — police investigations, assault, DUI, fraud, and other charges. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Facing a criminal investigation or charge in Korea is stressful, especially when the process is conducted in a language and system you are not familiar with.',
      'We represent foreign residents at every stage — from an initial police summons through investigation and, where necessary, trial.',
    ],
    commonSituations: [
      'Summoned for police questioning',
      'Charged with assault or injury',
      'Accused of drunk driving or refusing a breath test',
      'Under investigation for fraud',
    ],
  },
  {
    slug: 'civil-litigation',
    title: 'Civil Litigation',
    icon: 'Scale',
    cardDescription: 'Resolving disputes involving contracts, property, and damages before Korean courts.',
    metaDescription:
      'Civil litigation for foreign residents in Korea — contract, property, and damages disputes before Korean courts. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Civil disputes over contracts, money, and property can be difficult to resolve without an understanding of how Korean courts weigh evidence and claims.',
      'We advise on the realistic prospects of a claim before litigation and represent clients through the court process when it is worth pursuing.',
    ],
    commonSituations: [
      'Breach of contract disputes',
      'Claims for damages or compensation',
      'Property and ownership disputes',
    ],
  },
  {
    slug: 'real-estate-lease-disputes',
    title: 'Real Estate & Lease Disputes',
    icon: 'Building',
    cardDescription: 'Assistance with housing leases, deposit recovery, and real estate disputes in Korea.',
    metaDescription:
      'Real estate and lease dispute help for foreigners in Korea — jeonse/wolse deposit recovery and housing disputes. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Housing leases in Korea involve deposit structures (jeonse and wolse) and legal protections that are often unfamiliar to foreign tenants.',
      'We help tenants and landlords resolve deposit and lease disputes, including recovering deposits that are not returned.',
    ],
    commonSituations: [
      'A landlord will not return your deposit',
      'Disputes over lease terms or renewal',
      'Property condition or repair disputes',
    ],
  },
  {
    slug: 'debt-collection',
    title: 'Debt Collection',
    icon: 'Banknote',
    cardDescription: 'Recovering unpaid debts and enforcing claims and judgments in Korea.',
    metaDescription:
      'Debt collection for foreign residents and businesses in Korea — recovering unpaid debts and enforcing judgments. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Recovering money owed to you in Korea often requires formal legal steps, from a demand through to enforcement of a judgment.',
      'We assess whether a debt is realistically collectable and pursue recovery through the appropriate legal process.',
    ],
    commonSituations: [
      'Unpaid loans between individuals',
      'Unpaid invoices or business debts',
      'Enforcing a judgment you have already won',
    ],
  },
  {
    slug: 'divorce-family-law',
    title: 'Divorce & Family Law',
    icon: 'Users',
    cardDescription: 'Handling international divorce, child custody, and inheritance matters.',
    metaDescription:
      'Divorce and family law for foreigners in Korea — international divorce, child custody, and inheritance. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Family matters involving a foreign spouse or cross-border elements raise questions of which law applies and how Korean courts handle them.',
      'We assist with divorce, child custody, and inheritance matters with attention to the international dimension of each case.',
    ],
    commonSituations: [
      'International divorce',
      'Child custody and support',
      'Inheritance disputes',
    ],
  },
  {
    slug: 'labor-employment',
    title: 'Labor & Employment',
    icon: 'Briefcase',
    cardDescription:
      'Guidance on Korean labor laws, unfair dismissal, and wage disputes for employees and employers.',
    metaDescription:
      'Labor and employment law for foreigners in Korea — unfair dismissal, unpaid wages, and workplace disputes. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Employment disputes in Korea are governed by labor laws that protect both employees and employers, but the procedures are not always obvious to those unfamiliar with them.',
      'We advise employees and employers on dismissal, wage, and workplace disputes.',
    ],
    commonSituations: [
      'Unfair dismissal',
      'Unpaid wages or severance',
      'Workplace disputes',
    ],
  },
  {
    slug: 'korean-police-investigation',
    title: 'Korean Police Investigation',
    icon: 'Shield',
    cardDescription:
      'Support for foreign residents summoned or questioned by Korean police.',
    metaDescription:
      'Help for foreigners facing a Korean police investigation — what a summons means and how an attorney can assist. English consultations in Pyeongtaek.',
    showOnHome: false,
    overview: [
      'Being contacted or summoned by the Korean police is alarming, particularly when you are unsure of your rights or what the process involves.',
      'We help foreign residents understand what a police investigation means for them and represent them during questioning where appropriate.',
    ],
    commonSituations: [
      'You received a police summons',
      'You have been asked to attend questioning',
      'You are named as a suspect or a witness',
    ],
  },
]

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return PRACTICE_AREAS.find((area) => area.slug === slug)
}

export const HOME_PRACTICE_AREAS = PRACTICE_AREAS.filter((area) => area.showOnHome)
