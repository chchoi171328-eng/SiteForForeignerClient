// Landing-page content (single source of truth).
//
// Guideline §7 requires these three pages to answer DISTINCT questions so they do
// not read as doorway pages. Each entry below states its central question and is
// written to answer only that question — do not copy/recombine paragraphs across
// entries. If two pages start to overlap, cut content rather than duplicating it.

export type LandingSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LandingPage = {
  slug: string
  /** Internal note: the single question this page exists to answer. */
  centralQuestion: string
  /** H1 on the page. */
  title: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string
  sections: LandingSection[]
  /** Camp Humphreys page must show the non-affiliation disclaimer. */
  disclaimer?: string
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: 'english-speaking-lawyer-pyeongtaek',
    centralQuestion: 'Is there a lawyer in Pyeongtaek I can consult with in English?',
    title: 'English-Speaking Lawyer in Pyeongtaek',
    metaTitle: 'English-Speaking Lawyer in Pyeongtaek | SOL & LUNA',
    metaDescription:
      'Consult a Korean lawyer in English in Pyeongtaek. Paid consultations conducted directly by the attorney, by appointment. Fees, process, and office details.',
    heroSubtitle:
      'Consult a Korean attorney in English, in Pyeongtaek — by appointment, directly with the attorney.',
    sections: [
      {
        heading: 'Consultation in English',
        paragraphs: [
          'At SOL & LUNA Law Firm, consultations are conducted directly by the attorney in English. You speak with the lawyer who will handle your matter, not an intermediary.',
        ],
      },
      {
        heading: 'How a Consultation Works',
        bullets: [
          'Send a brief description of your situation through the contact form or by phone.',
          'Book a paid consultation at a scheduled time.',
          'The attorney explains the realistic options and outcomes honestly.',
          'The same attorney continues with your matter if you proceed.',
        ],
      },
      {
        heading: 'Consultation Fee',
        paragraphs: [
          'Initial consultations are paid and by appointment. A 30-minute consultation is ₩100,000 (approx. US$70), VAT included.',
        ],
      },
      {
        heading: 'Office & Hours',
        bullets: [
          '5F, SJ Plaza, 1029-1 Pyeongnam-ro, Pyeongtaek-si, Gyeonggi-do',
          'Weekdays 09:00–18:00 · Weekends and public holidays by appointment',
          'Phone: 031-658-6100',
        ],
      },
    ],
  },
  {
    slug: 'camp-humphreys-legal-help',
    centralQuestion:
      'I live near Camp Humphreys and have a legal problem in Korea — what should I do?',
    title: 'Legal Help Near Camp Humphreys',
    metaTitle: 'Legal Help Near Camp Humphreys | SOL & LUNA Law Firm',
    metaDescription:
      'Legal help for residents near Camp Humphreys. A Korean law firm in Pyeongtaek handling police, traffic, lease, civil, labor, and family matters. Independent, not affiliated with USFK.',
    heroSubtitle:
      'A Korean law firm in Pyeongtaek, near the Camp Humphreys area, for foreign residents facing legal problems in Korea.',
    sections: [
      {
        heading: 'Where We Are',
        paragraphs: [
          'SOL & LUNA Law Firm is located in Pyeongtaek, within general reach of the Camp Humphreys area. Consultations are by appointment at our office.',
        ],
      },
      {
        heading: 'Matters We Handle',
        bullets: [
          'Korean police investigations',
          'Traffic and criminal matters',
          'Lease and deposit disputes',
          'Civil claims',
          'Labor and employment issues',
          'Divorce and family disputes',
        ],
      },
      {
        heading: 'How to Request a Consultation',
        paragraphs: [
          'Send a brief description of your situation through the contact form or by phone. Initial consultations are paid and by appointment — 30 minutes for ₩100,000 (approx. US$70), VAT included, conducted directly by the attorney in English.',
        ],
      },
    ],
    disclaimer:
      'SOL & LUNA Law Firm is an independent Korean law firm and is not affiliated with, endorsed by, or officially connected to USFK or Camp Humphreys.',
  },
  {
    slug: 'lawyer-for-foreigners-korea',
    centralQuestion:
      'How is the Korean legal system different, and why do I need a Korean lawyer?',
    title: 'A Lawyer for Foreigners in Korea',
    metaTitle: 'Lawyer for Foreigners in Korea | SOL & LUNA Law Firm',
    metaDescription:
      'Why foreign residents need a Korean lawyer — how Korean litigation and investigation differ, language and cultural barriers, interpretation, and the types of cases we handle.',
    heroSubtitle:
      'Understanding why the Korean legal system works differently — and how a Korean attorney helps foreign residents navigate it.',
    sections: [
      {
        heading: 'How the Korean System Differs',
        paragraphs: [
          'Korean litigation and criminal investigation follow procedures that are often unfamiliar to those from other legal systems. Documents, deadlines, and the way evidence is presented can differ significantly from what you may expect.',
          'A Korean attorney bridges that gap — explaining what is happening, what is required, and what is realistic under Korean law.',
        ],
      },
      {
        heading: 'Language & Cultural Barriers',
        paragraphs: [
          'Legal processes conducted in Korean can be difficult to follow even with everyday fluency. Misunderstandings at an early stage — during questioning or in a written statement — can have lasting consequences.',
        ],
      },
      {
        heading: 'Interpretation & Translation',
        paragraphs: [
          'Where necessary, we address language barriers so that you understand the proceedings and your position is accurately represented. Consultations themselves are conducted directly in English by the attorney.',
        ],
      },
      {
        heading: 'Types of Cases We Handle',
        bullets: [
          'Criminal defense and police investigations',
          'Civil litigation',
          'Real estate and lease disputes',
          'Debt collection',
          'Divorce and family matters',
          'Labor and employment',
        ],
      },
    ],
  },
]

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
