// Guide body: Lease Registration Order (임차권등기명령)
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #10).
// Split out from the deposit-return guide (#1); statute references verified against
// casenote.kr / law.go.kr / moj.go.kr — see REVIEW-GUIDES.md.
// Self-filing is stated factually — this topic is the skill's named honesty exception.

import Image from 'next/image'
import Link from 'next/link'
import {
  GuideSummary,
  GuideToc,
  Term,
  Caption,
  Callout,
  GuideFlow,
  GuideDeadlines,
  GuideFaq,
} from '@/components/guide/GuideComponents'

const H2 = 'text-2xl font-serif font-bold text-navy-900 mt-12 mb-4 scroll-mt-28'
const P = 'text-gray-700 leading-relaxed mb-4'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function LeaseRegistrationOrder() {
  return (
    <>
      <Image
        src="/assets/guides/lease-registration-hero.jpg"
        alt="A key left on a windowsill of an empty Korean apartment — the lease registration order protects your deposit rights after you move out"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A <Term ko="임차권등기명령">lease registration order</Term> records your lease and
            unpaid deposit <strong>directly on the property&rsquo;s register</strong> — so you
            can move out without losing your priority.
          </li>
          <li>
            You qualify when two things are true: the lease <strong>has ended</strong>, and the
            deposit <strong>has not been returned</strong> (in full).
          </li>
          <li>
            File at the district court for the property — <strong>on paper or online</strong> —
            and since a 2023 amendment the registration can be completed{' '}
            <strong>even if the landlord cannot be reached</strong>.
          </li>
          <li>
            The rule that saves deposits: <strong>move only after the registration actually
            appears on the register</strong> — a filed application is not yet protection.
          </li>
          <li>
            Costs are modest and <strong>legally recoverable from the landlord</strong>, and the
            procedure is genuinely manageable without a representative.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The lease registration order exists to solve one specific trap in Korean tenancy law. The
        protections that secure your deposit — opposing power and priority repayment — live on
        your <em>occupancy</em>: staying in the unit, registered at that address. The day you move
        out and re-register elsewhere, they can evaporate, which hands an unpaid landlord a
        perverse advantage: wait long enough and the tenant who needs to leave loses leverage by
        leaving.
      </p>
      <p className={P}>
        The order (Housing Lease Protection Act art. 3-3) breaks that trap: a court records the
        lease and the unpaid deposit on the property&rsquo;s public register, and from then on
        your rights survive your departure. This guide covers when you qualify, how to file —
        which tenants routinely do themselves — what it costs, and what to check before handing
        back the keys.
      </p>

      <GuideToc
        items={[
          { href: '#what-it-does', label: '1. What the order does' },
          { href: '#when-to-apply', label: '2. When you can apply' },
          { href: '#how-to-file', label: '3. How to file, step by step' },
          { href: '#cost-and-time', label: '4. What it costs and how long it takes' },
          { href: '#after', label: '5. After the registration' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="what-it-does" className={H2}>
        1. What the order does
      </h2>
      <p className={P}>
        Once the registration is completed, the law says two things (art. 3-3(5)): a tenant who
        did not yet have opposing power and priority acquires them — and a tenant who had them{' '}
        <strong>keeps them even after giving up the apartment and the address
        registration</strong>. Your place in the queue against the landlord&rsquo;s other
        creditors is frozen as of your original move-in and fixed-date stamp, not lost with your
        departure.
      </p>
      <p className={P}>
        The register entry also works on the landlord in a second way: any buyer, lender, or
        prospective tenant who pulls the property&rsquo;s register sees an unpaid deposit recorded
        in black and white — and a tenant who rents the unit <em>after</em> your registration
        cannot claim the small-deposit top-priority protection there (art. 3-3(6)). An apartment
        with a lease registration on it is hard to re-rent and hard to refinance, which is
        precisely the pressure that gets deposits paid.
      </p>

      <p className={P}>
        The stakes scale with the deposit, which is why this procedure matters most to{' '}
        <Term ko="전세">jeonse</Term> tenants — where the sum at risk can be a family&rsquo;s
        entire savings. If you are still choosing or structuring a lease, the protections this
        order preserves are explained from the start in{' '}
        <Link href="/guides/real-estate-lease-disputes/jeonse-explained" className={LINK}>
          Jeonse, Explained
        </Link>
        ; this guide is for the moment those protections must survive your departure.
      </p>

      <h2 id="when-to-apply" className={H2}>
        2. When you can apply
      </h2>
      <p className={P}>
        Article 3-3(1) sets two conditions: the lease has <strong>ended</strong>, and the deposit
        has <strong>not been returned</strong>. Partial repayment does not disqualify you — an
        order can secure the unpaid remainder. The court that hears it is the district court (or
        branch, or municipal court) for the <em>property&rsquo;s</em> location, wherever you now
        live.
      </p>
      <p className={P}>
        &ldquo;Ended&rdquo; is where applications stumble. A lease ends at its term only if
        renewal was properly headed off — otherwise it renewed itself, and a renewed lease is not
        an ended one. The notice mechanics (your 2-month window, the 3-month rule after implied
        renewal) are covered in{' '}
        <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
          Getting Your Housing Deposit Back
        </Link>{' '}
        — confirm the lease is genuinely over, with provable notice, before you file.
      </p>

      <h2 id="how-to-file" className={H2}>
        3. How to file, step by step
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Assemble the documents',
            body: 'The lease contract (ideally with the fixed-date stamp), proof the lease ended (your notice and its receipt — certified mail, messages), proof of the unpaid deposit, the property register extract, and your residence-registration history — for foreign tenants, your foreigner registration and place-of-sojourn records.',
          },
          {
            title: 'File at the court for the property — on paper or online',
            body: "A standardized application form filed at the district court for the unit's location; electronic filing through the court e-filing system is also available in practice.",
          },
          {
            title: 'The court issues the order',
            body: 'The review is documentary — no hearing to attend. Expect the order in rough terms within a few weeks, longer if the court asks for supplements.',
          },
          {
            title: 'The registration is recorded — landlord unreachable or not',
            body: 'Since the 2023 amendment to art. 3-3, the registration can be entrusted before the decision is even served on the landlord — a landlord who dodges mail no longer stalls the process.',
          },
          {
            title: 'Verify the entry, then move',
            body: 'Pull a fresh register extract and see the lease registration recorded on it. That printout — not the filing receipt — is your green light to vacate.',
          },
        ]}
      />
      <Callout variant="warning" title="Filed is not registered">
        The protection dates from the registration appearing on the register, not from your
        application. People lose priority by moving out in the gap. Do not surrender the unit, and
        do not transfer your address registration, until you have seen the entry with your own
        eyes.
      </Callout>

      <figure className="my-6">
        <Image
          src="/assets/guides/lease-registration-registry.jpg"
          alt="Printing a fresh property register extract to verify the lease registration order was recorded"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          A fresh register extract costs under ₩1,000 and is issued online or at kiosks — the
          printout showing your lease registration entry is the document that clears you to move.
        </Caption>
      </figure>

      <h2 id="cost-and-time" className={H2}>
        4. What it costs and how long it takes
      </h2>
      <p className={P}>
        The out-of-pocket costs — stamp fees, service costs, registration fees — run to tens of
        thousands of won in total, not millions, and the statute makes them the landlord&rsquo;s
        problem in the end: the tenant may charge the costs of the application and the
        registration to the landlord (art. 3-3(8)), typically collected together with the deposit
        claim.
      </p>
      <p className={P}>
        On timing, plan in weeks: assembling documents is usually the slow part, the
        court&rsquo;s documentary review follows, and the register entry lands after the
        decision. If your move-out date is fixed — a flight, a new lease — file early enough that
        the registration can complete first, and let the timeline in section 3 drive your
        schedule rather than the other way around.
      </p>

      <h2 id="after" className={H2}>
        5. After the registration
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Move, hand over, and document.</strong> With the entry verified, vacate and
          return the keys with a record of when and how — the handover date matters for interest.
        </li>
        <li>
          <strong>Interest starts working for you.</strong> Once you have vacated, the landlord is
          in plain delay: statutory interest accrues, rising to 12% a year once a court complaint
          is served — the escalation path (payment order, lawsuit, enforcement) is in the{' '}
          <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
            deposit guide
          </Link>
          .
        </li>
        <li>
          <strong>The registration is not the money.</strong> It preserves rights and applies
          pressure; it does not collect by itself. If payment does not follow the pressure, the
          court route converts your preserved priority into actual won.
        </li>
        <li>
          <strong>Removal comes after repayment.</strong> Landlords ask for the registration to be
          cleared first &ldquo;so we can get a new tenant in to pay you.&rdquo; Practice treats
          repayment of the deposit as coming first — do not cancel a registration against a
          promise. The entry is your security; trade it only for cleared funds.
        </li>
      </ul>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Moving out on the filing receipt.</strong> The single most expensive
          misunderstanding — the register entry is the protection, and the gap between filing and
          registration is real.
        </li>
        <li>
          <strong>Filing before the lease has ended.</strong> An application on a lease that
          quietly renewed gets rejected and burns weeks. Check the notice dates first.
        </li>
        <li>
          <strong>Treating the order as the endgame.</strong> It is the hinge between staying and
          suing — pair it with the demand letter and, if needed, the court route, or the file just
          sits there preserving rights on a deposit nobody is paying.
        </li>
        <li>
          <strong>Canceling the entry on a promise</strong> — or signing move-out paperwork that
          quietly commits you to. Read anything the landlord asks you to sign at handover.
        </li>
        <li>
          <strong>Losing the paper trail.</strong> The stamped contract, the notice receipts, the
          register extracts — the same file that won the order wins the lawsuit later. Keep it
          together, including after you leave Korea.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: 'Before you vacate',
            what: 'The registration must be completed on the register — verified by a fresh extract — before you surrender the unit or move your address (art. 3-3(5)).',
          },
          {
            when: 'Before the term ends',
            what: 'The notice windows that make the lease actually end (2 months before expiry; 3 months after notice on an implied-renewed lease) — an order needs an ended lease.',
          },
          {
            when: '10 years',
            what: 'The outer limit to sue on the deposit claim itself (Civil Act art. 162) — the registration preserves priority, not forever-patience.',
          },
        ]}
      />
      <p className={P}>
        Start with the register: pull the property&rsquo;s current extract today. It tells you
        what is already recorded ahead of you — and it is the same document you will watch your
        own registration appear on.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Can I really file this myself, without a lawyer?',
            a: (
              <p>
                Yes — the forms are standardized, the review is documentary, and tenants file
                these routinely; hiding that would be dishonest. Where help earns its fee is the
                judgment around the filing: whether the lease actually ended, what to do when the
                court asks for supplements, and running the money-collection steps that follow.
                Plenty of people file the order themselves and bring in a lawyer for the lawsuit
                stage.
              </p>
            ),
          },
          {
            q: 'Does my foreigner registration count for the residence requirement?',
            a: (
              <p>
                Yes — your foreigner registration and place-of-sojourn reporting stand in for the
                resident registration the Act refers to (Immigration Act art. 88-3), for the
                original protections and for this procedure. Bring your registration records for
                the address history; they are part of showing what priority you hold.
              </p>
            ),
          },
          {
            q: 'The landlord has disappeared entirely. Does that block the order?',
            a: (
              <p>
                No — this is exactly what the 2023 amendment fixed. The registration can now be
                completed before the decision is served on the landlord, so an owner who ignores
                mail, has left the country, or simply cannot be found no longer freezes the
                process. An unreachable landlord is a reason to file promptly, not a reason it
                won&rsquo;t work.
              </p>
            ),
          },
          {
            q: 'The landlord returned part of the deposit. Can I still register?',
            a: (
              <p>
                Yes — the order is available where the deposit has not been returned in full, and
                it secures the outstanding remainder. Document what was repaid and when, so the
                registered amount and your later claim line up cleanly.
              </p>
            ),
          },
          {
            q: "I've already left Korea without registering. Is it too late?",
            a: (
              <p>
                The order itself may no longer help — its point is to preserve rights{' '}
                <em>before</em> you give up occupancy, and what was lost by moving out is not
                revived by registering afterward. But the deposit claim survives: the money can
                still be pursued through a payment order or lawsuit from abroad through a Korean
                attorney. Have the file assessed; the answer depends on what was recorded before
                you left.
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
