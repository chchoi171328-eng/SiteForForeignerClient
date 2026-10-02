// Guides carrying a given audience tag, as a dense GuideRow list under a
// heading. Renders nothing while no guide carries the tag, so a situation page
// can mount it before its guides exist (from-abroad brief §1-6: the list fills
// in as tagged guides are published).

import { GUIDES, toGuideMeta } from '@/content/guides/registry'
import GuideRow from '@/components/guide/GuideRow'

export default function TaggedGuides({ tag, heading }: { tag: string; heading: string }) {
  const items = GUIDES.filter((g) => g.tags?.includes(tag)).map(toGuideMeta)
  if (items.length === 0) return null

  return (
    <section aria-labelledby={`tagged-${tag}-heading`} className="mb-12">
      <h2
        id={`tagged-${tag}-heading`}
        className="text-2xl font-serif font-bold text-navy-900 pb-3 border-b-2 border-gold-400"
      >
        {heading}
      </h2>
      <ul className="divide-y divide-gray-200">
        {items.map((g) => (
          <GuideRow key={g.slug} guide={g} />
        ))}
      </ul>
    </section>
  )
}
