// Guide body: Exit Bans During Investigation
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #27).
// Wording levels agreed with the user 2026-09 (decree thresholds unstated; private-debt
// point made list-based; emergency bans covered briefly; status-checking kept general).
// Statute references verified against law.go.kr / wikisource / lbox — see REVIEW-GUIDES.md.

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

export default function ExitBansDuringInvestigation() {
  return (
    <>
      <Image
        src="/assets/guides/exit-ban-hero.jpg"
        alt="A single suitcase standing in an empty airport corridor by a window — a Korean departure suspension stops a foreigner at the border, sometimes without advance notice"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Korea restricts departure through a defined legal mechanism: an{' '}
            <strong>exit ban</strong> for nationals and a <strong>departure suspension</strong>{' '}
            for foreigners, ordered by the Minister of Justice on statutory grounds
            (Immigration Act arts. 4, 29).
          </li>
          <li>
            The grounds are a <strong>closed list</strong>: a pending criminal trial, an
            unserved sentence, unpaid fines or taxes above decree-set thresholds, and being
            under criminal investigation. <strong>Private civil debt is not on the list.</strong>
          </li>
          <li>
            Bans are <strong>time-limited</strong> — up to 6 months in general, and an
            investigation-purpose ban is limited to 1 month unless a statutory exception
            applies — but they are renewable while the ground persists (arts. 4, 4-2).
          </li>
          <li>
            You are entitled to <strong>written notice</strong>, but the law allows notice to be
            withheld in defined cases, including where it would obstruct an investigation —
            which is how some people first learn of a ban at the airport (art. 4-4).
          </li>
          <li>
            The direct remedy is an <strong>objection within 10 days</strong> of learning of
            the ban (art. 4-5) — and when the underlying ground disappears, the ban must be
            lifted (art. 4-3).
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Few things unsettle a foreign resident like the thought behind this search: an
        investigation or a dispute is running, a flight is booked, and somewhere a decision may
        exist that you cannot see — one that stops you at the departure gate. The fear is
        usually bigger than the law. What Korea actually has is a defined, reviewable
        mechanism, with a short list of grounds and fixed time limits.
      </p>
      <p className={P}>
        Two terms cover it. For Korean nationals the Immigration Act{' '}
        <span lang="ko">(출입국관리법)</span> provides the <strong>exit ban</strong>{' '}
        <Term ko="출국금지">(chulguk geumji)</Term>; for foreigners, the{' '}
        <strong>departure suspension</strong> <Term ko="출국정지">(chulguk jeongji)</Term> —
        art. 29 applies the same grounds and procedures to foreigners that art. 4 sets for
        nationals. This guide uses &ldquo;ban&rdquo; for both and reads everything from the
        foreign resident&rsquo;s side.
      </p>
      <p className={P}>
        What matters most is knowing which side of the list you are on. So we start there.
      </p>

      <GuideToc
        items={[
          { href: '#the-mechanism', label: '1. One mechanism, two names' },
          { href: '#the-grounds', label: '2. The grounds: who can actually be stopped' },
          { href: '#private-debt', label: '3. What private debt cannot do' },
          { href: '#how-long', label: '4. How long a ban lasts' },
          { href: '#finding-out', label: '5. Finding out — and fighting back' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-mechanism" className={H2}>
        1. One mechanism, two names
      </h2>
      <p className={P}>
        A ban is an administrative decision of the <strong>Minister of Justice</strong>, made on
        request of an agency — an investigating agency, a prosecution office, the tax authority — or on the
        Ministry&rsquo;s own assessment (arts. 4, 29). It is not automatic. No case type
        carries a built-in travel ban; someone must request one, and the Ministry must order
        it, on a ground the statute names.
      </p>
      <p className={P}>
        That design cuts both ways. It means most people under investigation are{' '}
        <em>not</em> banned — the tool is used, not presumed. It also means the decision
        happens in an office you cannot see into, which is why section 5, on notice and
        remedies, matters as much as the grounds themselves.
      </p>

      <h2 id="the-grounds" className={H2}>
        2. The grounds: who can actually be stopped
      </h2>
      <p className={P}>
        The statutory grounds (art. 4(1)–(2), applied to foreigners by art. 29) are, in
        everyday terms:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>A criminal trial is pending</strong> against you in a Korean court.
        </li>
        <li>
          <strong>A prison sentence has not been served</strong> — you were sentenced and the
          execution is outstanding.
        </li>
        <li>
          <strong>Unpaid criminal fines or forfeiture penalties</strong> above a threshold set
          by presidential decree.
        </li>
        <li>
          <strong>Unpaid national, customs, or local taxes</strong> above a decree-set
          threshold, without justifiable cause.
        </li>
        <li>
          <strong>You are under criminal investigation</strong> — the ground with the shortest
          time limit, covered in section 4.
        </li>
        <li>
          Other narrow categories defined by statute and decree — including, for nationals,
          certain confirmed child-support defaulters and publicly listed wage-arrears
          employers.
        </li>
      </ul>
      <p className={P}>
        Notice what the list is made of: obligations to the <strong>state</strong> — criminal
        process, sentences, fines, taxes. That shape is the key to the next section.
      </p>

      <h2 id="private-debt" className={H2}>
        3. What private debt cannot do
      </h2>
      <p className={P}>
        The fear this guide most often meets: &ldquo;I owe money — can my creditor have me
        stopped at the airport?&rdquo; Look back at the list.{' '}
        <strong>Private civil debt, as such, does not appear on it.</strong> An unpaid loan, an
        unreturned deposit, a lost lawsuit — none of these is a statutory ground on which the
        Minister of Justice orders a ban. A private creditor&rsquo;s lawful tools are the civil
        ones:{' '}
        <Link href="/guides/debt-collection/provisional-attachment" className={LINK}>
          freezing assets
        </Link>{' '}
        and{' '}
        <Link href="/guides/debt-collection/enforcing-a-judgment" className={LINK}>
          enforcing against them
        </Link>{' '}
        — your property, not your person.
      </p>
      <p className={P}>
        Two honest caveats keep that reassurance accurate. First, <strong>tax debt is
        different</strong>: arrears above the decree threshold are on the list, and a business
        dispute that leaves unpaid taxes behind can reach you through that lane. Second, a
        dispute can <strong>change lanes</strong>: a creditor who files a criminal fraud
        complaint converts the matter into an investigation — and investigations are on the
        list. Whether such a complaint has substance is its own question, covered in the debt
        guides; the point here is that the lane, not the label &ldquo;debt,&rdquo; decides
        exposure.
      </p>

      <h2 id="how-long" className={H2}>
        4. How long a ban lasts
      </h2>
      <p className={P}>
        Every ban is ordered for a fixed period. The general ceiling is <strong>6
        months</strong> (art. 4(1)). A ban for <strong>criminal investigation</strong> purposes
        is tighter — <strong>1 month</strong> — with statutory exceptions allowing up to 3
        months, or the validity period of a warrant, in defined situations (art. 4(2)).
      </p>
      <p className={P}>
        Fixed does not mean final: periods can be <strong>extended</strong> while the ground
        persists, on a renewed request before the period ends (art. 4-2). The mirror image is
        just as important — when the ground disappears, the law is not discretionary: the
        requesting agency must seek the lifting, and the Minister{' '}
        <strong>must lift the ban immediately</strong> (art. 4-3). Paying the fine, resolving
        the tax arrears, or the case ending is not just progress; it is the legal trigger for
        release.
      </p>

      <h2 id="finding-out" className={H2}>
        5. Finding out — and fighting back
      </h2>
      <p className={P}>
        The rule is <strong>written notice</strong> to the person banned (art. 4-4). The
        exceptions are the part to understand: notice may be withheld where it would seriously
        endanger public interests, where it would <strong>obstruct an investigation</strong>,
        or where your whereabouts are unknown — though an investigation-based silence has its
        own limit, and notice becomes mandatory once the ban runs past 3 months. This is the
        legal reason the airport-counter surprise exists: in a live investigation, the ban may
        lawfully arrive before the letter does.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/exit-ban-gate.jpg"
          alt="An empty airport departure-gate seating area at dusk with an unmarked plane on the tarmac — in a live Korean investigation, notice of a departure suspension may lawfully be withheld"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Notice is the rule and silence the exception — but the exception is real, so a person
          with a live case checks before the gate, not at it.
        </Caption>
      </figure>
      <p className={P}>
        If you have concrete reason to wonder — an investigation you know of, a large tax
        issue, travel you cannot afford to gamble — the practical step is to{' '}
        <strong>ask before flying</strong>: your own status can be inquired into through the
        immigration authorities, and a lawyer handling the underlying case will usually check
        as a matter of course. Be honest with yourself about the limits: where notice is
        lawfully withheld, confirmation can be hard to obtain, and certainty may only come from
        resolving the underlying matter.
      </p>
      <p className={P}>
        Against a ban you believe is wrong, the statute gives one direct remedy: an{' '}
        <strong>objection</strong> <Term ko="이의신청">(ui-i sincheong)</Term> to the Minister
        of Justice within <strong>10 days</strong> of receiving notice or learning of the ban;
        a decision is due within 15 days, extendable once (art. 4-5). Beyond it, the decision
        is an administrative act, and administrative challenges exist for the cases that
        warrant them. In parallel — often more productively — work the ground itself: the
        fine, the tax, the case. Section 4&rsquo;s mandatory-lifting rule makes that the
        surest road out.
      </p>
      <p className={P}>
        One special variant deserves a paragraph: the <strong>emergency ban</strong> (art.
        4-6). For a suspect in a crime carrying death, life, or 3 or more years&rsquo;
        imprisonment, investigators can act at the border first and seek approval afterwards —
        the Minister must approve within tight statutory hours or the measure is released.
        It is an exceptional tool for serious cases, not the ordinary experience of this
        guide&rsquo;s reader — but it explains how a stop can happen with no order existing the
        day before.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Assuming any open case means a ban.</strong> It does not — bans are ordered
          case by case, on request. Treating yourself as trapped when nothing has been ordered
          costs opportunities; treating yourself as free when a ground exists costs a missed
          flight, or worse.
        </li>
        <li>
          <strong>Booking non-refundable travel mid-investigation without checking.</strong>{' '}
          If a case you know of is live, spend the inquiry before the ticket.
        </li>
        <li>
          <strong>Ignoring the small fine.</strong> An unpaid criminal fine above the threshold
          is a ground. The cheapest ban to prevent is the one triggered by an amount you could
          simply pay — see{' '}
          <Link href="/guides/criminal-defense/summary-orders-and-formal-trial" className={LINK}>
            Summary Orders
          </Link>{' '}
          for how fines commonly arrive.
        </li>
        <li>
          <strong>Missing the 10-day objection window.</strong> If notice reaches you and the
          ban looks wrong, the clock is short and the remedy is specific.
        </li>
        <li>
          <strong>Leaving the underlying case unattended.</strong> A ban is a symptom. The
          investigation or debt behind it is the disease, and resolving it is what the law
          rewards with mandatory lifting.
        </li>
      </ul>
      <Callout variant="warning" title="Don't try to route around a ban">
        Attempting departure through misstated identity or another person&rsquo;s documents
        turns an administrative restriction into new criminal exposure. If a ban is blocking
        something urgent — a family emergency, a contract abroad — the lawful pressure points
        are the objection, the underlying case, and the agencies involved, not the border
        itself.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '10 days',
            what: 'From receiving notice of a ban, or learning of it — the objection window to the Minister of Justice (Immigration Act art. 4-5).',
          },
          {
            when: '1 month',
            what: 'The ceiling on an investigation-purpose ban, unless a statutory exception (up to 3 months, or a warrant’s validity) applies (art. 4(2)).',
          },
          {
            when: '3 months',
            what: 'The point past which a ban can no longer be kept unnotified on investigation grounds — notice becomes mandatory (art. 4-4).',
          },
          {
            when: '6 months',
            what: 'The general ceiling of a single ban period — renewable while the ground persists, and subject to immediate lifting when it ends (arts. 4(1), 4-2, 4-3).',
          },
        ]}
      />
      <p className={P}>
        If travel is on your calendar and a case is in your life, put the two next to each
        other early — the list in section 2 tells you whether they can collide.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I’m under investigation but have received no ban notice. Can I leave Korea?',
            a: (
              <p>
                Departure is restricted only through the ban mechanism — there is no general
                rule confining everyone under investigation. But treat the question with care:
                notice can be lawfully withheld in a live investigation, so silence is not
                proof of freedom, and leaving mid-case has consequences of its own — an
                investigation can proceed to a suspension that follows you, and an unresolved
                case can surface at any future entry. Confirm your status and take advice on
                the case before relying on the gate being open.
              </p>
            ),
          },
          {
            q: 'Does a DUI or an assault case automatically trigger a departure suspension?',
            a: (
              <p>
                No case type triggers one automatically. Investigation is a statutory ground,
                but a ban still requires an agency&rsquo;s request and the Ministry&rsquo;s
                order, made case by case — factors like severity and flight concern drive it in
                practice. What is predictable is the fine lane: if a case ends in a fine and
                the fine goes unpaid past the threshold, that unpaid amount is its own ground.
              </p>
            ),
          },
          {
            q: 'I was stopped at the airport with no warning at all. How is that possible?',
            a: (
              <p>
                Two lawful routes lead there. A ban may have existed with notice withheld on
                investigation grounds — the section 5 scenario. Or, in a serious case, an
                emergency ban may have been imposed at the border itself, subject to rapid
                ministerial approval or release (art. 4-6). In either event the response is the
                same: identify the ground through the authorities or counsel, then use the
                objection and the underlying case to attack it.
              </p>
            ),
          },
          {
            q: 'I’m covered by SOFA. Does any of this apply to me?',
            a: (
              <p>
                Departure procedures and case handling can differ depending on your status,
                including for SOFA personnel — this guide describes the general Immigration
                Act mechanism, and how it interacts with a particular status is exactly what to
                clarify first, through your chain&rsquo;s legal resources or Korean counsel,
                before assuming either exposure or exemption.
              </p>
            ),
          },
          {
            q: 'Will a departure suspension affect my visa or my ability to stay in Korea?',
            a: (
              <p>
                A suspension restricts leaving; it is not, in itself, a decision about your
                stay. But the matters behind one — a criminal case, serious tax arrears — can
                affect your status in Korea, and outcomes there can matter at extensions or
                future entries. Factor the whole picture into decisions from the start rather
                than treating the travel restriction as the only stake.
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of September 2026. Updated when laws change.
      </p>
    </>
  )
}
