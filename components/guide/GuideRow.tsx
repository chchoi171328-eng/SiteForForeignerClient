// One guide as a scannable list row: small 16:9 thumbnail, title, one-line
// summary, review month. No field label — the surrounding section heading
// carries that. Server-compatible; shared by /guides and the practice-area
// "Guides in this area" blocks.

import Image from 'next/image'
import Link from 'next/link'
import { guidePath, type GuideMeta } from '@/content/guides/registry'

export default function GuideRow({ guide }: { guide: GuideMeta }) {
  return (
    <li>
      <Link
        href={guidePath(guide)}
        className="group flex items-center gap-4 sm:gap-5 py-4"
      >
        <Image
          src={guide.thumbnail}
          alt=""
          width={320}
          height={180}
          sizes="(min-width: 640px) 160px, 112px"
          className="w-28 sm:w-40 aspect-video object-cover rounded-md shrink-0 bg-slate-100"
        />
        <div className="min-w-0">
          <h3 className="font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors leading-snug">
            {guide.listingTitle}
          </h3>
          <p className="text-sm text-gray-600 truncate mt-0.5">{guide.metaDescription}</p>
          <p className="text-xs text-gray-400 mt-1">Reviewed {guide.reviewed}</p>
        </div>
      </Link>
    </li>
  )
}
