// Guide body: Child Custody in International Marriages
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #12).
// Statute references verified against casenote.kr / law.go.kr / moj.go.kr — see REVIEW-GUIDES.md.
// Jurisdiction article verified as Private International Law Act art. 59 (art. 61 is guardianship).

import Image from 'next/image'
import Link from 'next/link'
import {
  GuideSummary,
  GuideToc,
  Term,
  Caption,
  Callout,
  GuideDeadlines,
  GuideFaq,
} from '@/components/guide/GuideComponents'

const H2 = 'text-2xl font-serif font-bold text-navy-900 mt-12 mb-4 scroll-mt-28'
const P = 'text-gray-700 leading-relaxed mb-4'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function ChildCustodyInInternationalMarriages() {
  return (
    <>
      <Image
        src="/assets/guides/custody-hero.jpg"
        alt="A child's shoes beside an adult's at a Korean apartment entryway — custody in international marriages turns on the child's life, not the parents' passports"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korean law splits parenting into two rights —{' '}
            <strong>custody</strong> (day-to-day raising) and{' '}
            <strong>parental authority</strong> (legal decisions) — usually awarded together, but
            not always.
          </li>
          <li>
            Courts decide by the <strong>child&rsquo;s welfare</strong>: continuity of care and
            stability, not nationality. Children <strong>13 and older must be heard</strong>.
          </li>
          <li>
            Korean courts can hear the custody case when{' '}
            <strong>the child&rsquo;s daily life is based in Korea</strong> — the practical rule
            is to litigate where the child lives.
          </li>
          <li>
            The non-custodial parent has a statutory <strong>visitation right</strong>, and
            cross-border schedules are workable when written concretely.
          </li>
          <li>
            Taking a child across a border unilaterally triggers the{' '}
            <strong>Hague Abduction Convention</strong>, which Korea applies in both directions —
            and the clock matters.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Child custody in an international marriage carries a fear the purely domestic case never
        has: that the border itself will decide — that the foreign parent loses by default, or
        that one flight can put a child beyond reach. Korean law answers both fears better than
        most people expect, but only for parents who understand the framework before acting on
        instinct.
      </p>
      <p className={P}>
        The framework sits in the Civil Act — custody arrangements on divorce (art. 837, applied
        to judicial divorces by art. 843), visitation (art. 837-2), and parental-authority
        designation (art. 909) — with the international layer supplied by the Private
        International Law Act and the Hague Abduction Convention, which Korea has applied since
        2013. This guide walks the domestic rules first, then the two cross-border questions:
        which court, and what happens when a parent moves a child unilaterally.
      </p>

      <GuideToc
        items={[
          { href: '#custody-vs-parental-authority', label: '1. Two rights, not one' },
          { href: '#how-courts-decide', label: '2. How Korean courts decide custody' },
          { href: '#which-court', label: '3. The international layer: which court' },
          { href: '#visitation', label: '4. Visitation across borders' },
          { href: '#abduction', label: '5. Unilateral removal and the Hague Convention' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="custody-vs-parental-authority" className={H2}>
        1. Two rights, not one
      </h2>
      <p className={P}>
        <Term ko="양육권">Custody</Term> is the right and duty to raise the child day to day —
        where the child lives, eats, and goes to school.{' '}
        <Term ko="친권">Parental authority</Term> is the legal representation of the child:
        signing for the passport, the school transfer, the bank account, medical consents. On
        divorce, both must be settled — by the parents&rsquo; agreement or by the family court
        (arts. 837, 909(4)).
      </p>
      <p className={P}>
        They usually go to the same parent, but they can be split, and the distinction bites in
        international life: a custodial parent without parental authority can hit walls at the
        passport office and the immigration counter. When you negotiate, negotiate both — and if
        you are the parent likely to handle the child&rsquo;s paperwork across two countries, say
        so explicitly.
      </p>

      <h2 id="how-courts-decide" className={H2}>
        2. How Korean courts decide custody
      </h2>
      <p className={P}>
        In a consensual divorce the parents must file a written agreement covering custody, child
        support, and visitation — the court reviews it and can refuse confirmation if it sells
        the children short (see{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          the divorce guide
        </Link>
        ). When parents cannot agree, the family court decides, and the standard is the
        child&rsquo;s welfare.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Continuity of care</strong> — who has actually been raising the child, and what
          arrangement disturbs the child&rsquo;s settled life least.
        </li>
        <li>
          <strong>Capacity and environment</strong> — housing, time, health, support network;
          family-court investigators visit and report, so the record is built from facts, not
          adjectives.
        </li>
        <li>
          <strong>The child&rsquo;s own view</strong> — a child 13 or older must be heard by the
          court (Family Litigation Rules art. 100, with a welfare exception), and younger
          children&rsquo;s views reach the court through the investigators.
        </li>
        <li>
          <strong>Not the passport.</strong> Being the foreign parent is not a disqualification —
          courts decide on caregiving facts, and foreign parents do receive custody. What can hurt
          is what hurts any parent: absence, instability, or using the child as leverage.
        </li>
      </ul>
      <p className={P}>
        Arrangements are not carved in stone: the court can later change custody, authority, and
        visitation where the child&rsquo;s welfare requires it — which cuts both ways, and is one
        more reason to keep being, visibly, the parent who shows up.
      </p>

      <h2 id="which-court" className={H2}>
        3. The international layer: which court
      </h2>
      <p className={P}>
        For custody, parental authority, and visitation, Korean courts have international
        jurisdiction when <strong>the child&rsquo;s habitual residence is in Korea</strong> — and
        also where <strong>one parent and the child are both Korean nationals</strong> (Private
        International Law Act art. 59). The center of gravity is deliberately the child&rsquo;s
        life, not the parents&rsquo; nationalities or where the marriage was celebrated.
      </p>
      <p className={P}>
        The practical corollary: litigate where the child actually lives. A custody order from the
        child&rsquo;s home court reaches the school, the clinic, and the other parent&rsquo;s
        daily reality; a foreign order must first travel through recognition — the framework
        covered in{' '}
        <Link href="/guides/divorce-family-law/which-countrys-court-international-divorce" className={LINK}>
          Which Country&rsquo;s Court?
        </Link>{' '}
        — before it moves anything in Korea.
      </p>

      <h2 id="visitation" className={H2}>
        4. Visitation across borders
      </h2>
      <p className={P}>
        The parent who does not raise the child has a statutory right of{' '}
        <Term ko="면접교섭">visitation</Term> with the child (Civil Act art. 837-2) — and the
        child has it toward that parent. Courts set the terms when parents cannot, and can
        restrict them only where the child&rsquo;s welfare demands it.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/custody-calendar.jpg"
          alt="A blank calendar and a toy airplane — cross-border visitation survives on concrete schedules"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          A cross-border visitation clause is a logistics document: vacation blocks, tickets,
          time-zoned calls, and consent letters — named, dated, and assigned.
        </Caption>
      </figure>
      <p className={P}>
        Across borders, generic schedules fail; concrete ones survive. A workable international
        clause names the school-vacation blocks and who buys the tickets, fixes the video-call
        rhythm and time zone, covers passports and consent letters for each trip, and says what
        happens when a flight is missed. Write it like logistics, not like sentiment — the
        sentiment survives precisely when the logistics hold.
      </p>

      <p className={P}>
        A visitation order is also enforceable: where a custodial parent simply refuses handovers,
        the family court can order compliance and back the order with sanctions — and sustained
        obstruction feeds back into the custody question itself. The reverse discipline applies
        too: a visiting parent who returns the child late, or not at all, is building the record
        that shrinks their own schedule. Across borders, credibility is the currency; both parents
        are spending or earning it with every exchange.
      </p>

      <h2 id="abduction" className={H2}>
        5. Unilateral removal and the Hague Convention
      </h2>
      <p className={P}>
        Korea has applied the Hague Convention on the Civil Aspects of International Child
        Abduction since 2013. Its rule of thumb: a child wrongfully removed from — or kept away
        from — the country of habitual residence is to be <strong>returned promptly</strong>, so
        that custody itself is decided by the courts of the child&rsquo;s home country. It works
        in both directions: children taken from Korea, and children brought to Korea.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Where to go</strong> — applications route through each country&rsquo;s central
          authority (in Korea, the Ministry of Justice), and return cases here are heard{' '}
          <strong>exclusively by the Seoul Family Court</strong> (Implementation Act art. 11).
        </li>
        <li>
          <strong>Why speed matters</strong> — once a year passes, the case can turn on whether
          the child is now settled in the new environment (Convention art. 12). Every month of
          waiting builds the other side&rsquo;s argument.
        </li>
        <li>
          <strong>Prevention beats litigation</strong> — written travel consents with return
          dates, both parents recorded on the school and passport files, and court-ordered
          arrangements rather than informal ones. Where risk is concrete, protective orders can
          be sought through the family court before travel, not after.
        </li>
      </ul>
      <Callout variant="warning" title="Do not become the abducting parent by accident">
        &ldquo;Taking the kids home to my family&rdquo; without the other parent&rsquo;s consent
        is, in Convention terms, how removal cases start — whichever passport the children carry,
        and however good the reasons feel. It can force the children&rsquo;s return, create
        separate legal problems, and color every later custody decision. Get consent in writing,
        or get a court order first.
      </Callout>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Setting facts by moving.</strong> Relocating the child — abroad or across Korea
          — to strengthen a future custody claim reads to courts as instability, and across a
          border it reads as removal.
        </li>
        <li>
          <strong>Custody by rumor.</strong> Deciding not to seek custody because &ldquo;the
          Korean parent always wins&rdquo; concedes a case the welfare standard never decided.
        </li>
        <li>
          <strong>Leaving the agreement vague.</strong> &ldquo;Reasonable visitation&rdquo; means
          nothing at 9,000 kilometers. Name the weeks, the calls, the tickets, the consents.
        </li>
        <li>
          <strong>Blocking contact to punish the other parent.</strong> Courts treat sustained,
          unjustified obstruction of visitation as a welfare problem — one that can support
          changing the arrangement.
        </li>
        <li>
          <strong>Negotiating custody but forgetting parental authority</strong> — then
          discovering at the passport office whose signature the form wants.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: 'At the divorce',
            what: 'In a consensual divorce, the written custody/support/visitation agreement must be filed for the court’s confirmation — it is a precondition, not paperwork for later.',
          },
          {
            when: 'Within 1 year',
            what: 'File a Hague return application promptly — after a year, the case can turn on the child’s new settled life (Convention art. 12).',
          },
          {
            when: 'Before any trip',
            what: 'Written travel consent with return dates, or a court order where risk is real — prevention is the only cheap stage of an abduction case.',
          },
        ]}
      />
      <p className={P}>
        Start from the child&rsquo;s calendar, not the parents&rsquo; grievances: where the child
        wakes up, goes to school, and sees each parent this year. Every rule above is aimed at
        keeping that calendar whole.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Does the Korean parent always get custody?',
            a: (
              <p>
                No. The standard is the child&rsquo;s welfare, and its heaviest factor is who has
                actually been doing the caregiving — foreign parents win custody on that record.
                Language and in-country support matter only as practical parts of the caregiving
                picture, and they cut whichever way the facts cut. If you have been the primary
                parent, build the record of it rather than conceding to folklore.
              </p>
            ),
          },
          {
            q: 'Can I take my child abroad for a family visit?',
            a: (
              <p>
                With the other parent&rsquo;s written consent and a clear return date — normally
                yes, and that paper protects <em>you</em>: it is the difference between a holiday
                and a removal allegation. Travel against the other parent&rsquo;s known objection,
                or open-ended &ldquo;visits,&rdquo; are how Convention cases begin. When consent
                is refused unreasonably, the family court — not the airport — is the move.
              </p>
            ),
          },
          {
            q: 'My ex took our child to Korea without my agreement. What do I do?',
            a: (
              <p>
                Move quickly. File a Hague return application through your country&rsquo;s central
                authority (or directly toward Korea&rsquo;s — the Ministry of Justice); return
                proceedings here run before the Seoul Family Court. Keep evidence of the
                child&rsquo;s habitual residence and your custody rights, and get Korean counsel
                engaged early — the one-year settled-life clock is the other side&rsquo;s best
                friend.
              </p>
            ),
          },
          {
            q: "How much does my child's own opinion count?",
            a: (
              <p>
                From 13, the court must hear the child — with an exception where hearing them
                would itself harm their welfare — and the older the child, the more the stated
                preference weighs. Below that, views reach the court through the family
                investigators&rsquo; interviews. What courts discount sharply is a preference that
                looks coached; pressuring a child to choose tends to damage the pressuring parent.
              </p>
            ),
          },
          {
            q: 'Will custody affect my right to stay in Korea?',
            a: (
              <p>
                Your stay and the custody outcome can interact — raising a Korean child is among
                the circumstances immigration decisions can take into account — but no custody
                result guarantees or forfeits a visa by itself. Factor your status into the
                strategy from the start and have your specific situation assessed, rather than
                litigating custody on an immigration assumption in either direction.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        Custody rarely travels alone — the money that follows the children is covered next in the
        cluster, and the process around both lives in{' '}
        <Link href="/guides/divorce-family-law/divorce-in-korea-consensual-vs-judicial" className={LINK}>
          Divorce in Korea: Consensual vs. Judicial
        </Link>
        {/* TODO: internal link to child-support guide (production list #13) once published */}
        .
      </p>

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
