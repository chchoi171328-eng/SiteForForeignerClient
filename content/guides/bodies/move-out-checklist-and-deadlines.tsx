// Guide body: Move-Out Checklist and Deadlines
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #16).
// Reuses statutes verified for guides 1/2/10; new items (repair-reserve refund,
// 15-day sojourn-address rule) verified this round — see REVIEW-GUIDES.md.

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

export default function MoveOutChecklistAndDeadlines() {
  return (
    <>
      <Image
        src="/assets/guides/move-out-hero.jpg"
        alt="Sealed moving boxes by the door of a Korean apartment — moving out of a Korean lease has an order of operations"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Moving out of a Korean lease is an <strong>order of operations</strong>: notice on
            time, money settled, deposit secured — <em>then</em> keys and registration move.
          </li>
          <li>
            Your non-renewal notice is due <strong>no later than 2 months before expiry</strong>,
            in provable form.
          </li>
          <li>
            Apartment dwellers: reclaim the <strong>long-term repair reserve</strong>{' '}
            <span lang="ko">(장기수선충당금)</span> you paid inside the management fees — it was
            the owner&rsquo;s bill, and it is refundable at move-out.
          </li>
          <li>
            On the day: <strong>deposit in your account before keys out of your hand</strong>,
            with photos, meter readings, and nothing broad signed in a hurry.
          </li>
          <li>
            After the move, foreign residents report the new address{' '}
            <strong>within 15 days</strong> — and if the deposit is unpaid, the registration
            order comes <em>before</em> any address change.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Moving out of a Korean lease is where several separate systems — notice rules, deposit
        protections, building management, immigration paperwork — all demand attention in the
        same two weeks. Each is simple alone; missed together they cost real money, and one of
        them (moving your registration too early) can cost the deposit itself.
      </p>
      <p className={P}>
        This guide is the checklist, in time order, with the deadlines attached. The deep dives
        live elsewhere: the deposit-recovery machine in{' '}
        <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
          Getting Your Housing Deposit Back
        </Link>{' '}
        and the move-with-protection procedure in{' '}
        <Link href="/guides/real-estate-lease-disputes/lease-registration-order" className={LINK}>
          Lease Registration Order
        </Link>
        .
      </p>

      <GuideToc
        items={[
          { href: '#order-of-operations', label: '1. The order of operations' },
          { href: '#two-months-out', label: '2. Two months out: end the lease properly' },
          { href: '#final-weeks', label: "3. Final weeks: money owed both ways" },
          { href: '#move-out-day', label: '4. Move-out day' },
          { href: '#after-you-move', label: '5. After you move: the two registrations' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="order-of-operations" className={H2}>
        1. The order of operations
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'T minus 2 months (or more): notice',
            body: 'Tell the landlord, provably, that you are leaving — or the lease renews itself on the same terms.',
          },
          {
            title: 'Final weeks: settle the money map',
            body: 'Repair reserve, management fees, utilities, internet — what you are owed and what you owe, itemized before the last day.',
          },
          {
            title: 'The day: simultaneous exchange',
            body: 'Deposit confirmed in your account against keys and possession — photographed, metered, and documented.',
          },
          {
            title: 'After: registrations and reports',
            body: 'New address registered — 15 days for the foreigner sojourn report — and any unresolved deposit claim already secured before you left.',
          },
        ]}
      />
      <Callout variant="warning" title="The one unbreakable rule">
        Your deposit protections live on your occupancy and your registered address. If any part
        of the deposit is unpaid, do not surrender the unit or move your registration until a
        lease registration order is completed on the property register — that sequencing rule
        outranks every other item on this page.
      </Callout>

      <h2 id="two-months-out" className={H2}>
        2. Two months out: end the lease properly
      </h2>
      <p className={P}>
        The lease only owes you the deposit when it actually ends — and Korean leases renew
        silently. Your non-renewal notice must reach the landlord{' '}
        <strong>no later than 2 months before expiry</strong>; on a lease that already renewed
        implicitly, your termination takes effect <strong>3 months after notice arrives</strong>
        (Housing Lease Protection Act arts. 6, 6-2). Send it provably — certified mail, or a
        message thread with the landlord&rsquo;s reply — and calendar the date it was received.
      </p>
      <p className={P}>
        This is also the moment to read the landlord&rsquo;s financial weather. Slow replies,
        &ldquo;after the next tenant&rdquo; talk, a register newly heavy with loans — any of
        these means starting the{' '}
        <Link href="/guides/real-estate-lease-disputes/lease-registration-order" className={LINK}>
          registration-order
        </Link>{' '}
        paperwork early, while your move-out date is still flexible.
      </p>

      <p className={P}>
        The same clock runs against the landlord: their non-renewal notice is due between 6 and
        2 months before expiry, and silence on both sides renews the lease automatically on the
        old terms. If you receive a landlord&rsquo;s notice, date-stamp it the way you would your
        own — whether it arrived inside the window decides whether it counts at all.
      </p>
      <p className={P}>
        Notice is also a fork in the road, not just a formality: if you would rather stay, the
        same window — 6 to 2 months before expiry — is when your once-per-lease renewal demand
        must be made, with its 5% cap on increases. Decide deliberately which letter you are
        sending, because the two are opposites and both expire on the same day. The renewal
        mechanics live in{' '}
        <Link href="/guides/real-estate-lease-disputes/jeonse-explained" className={LINK}>
          Jeonse, Explained
        </Link>
        .
      </p>

      <h2 id="final-weeks" className={H2}>
        3. Final weeks: money owed both ways
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Reclaim the repair reserve.</strong> In managed apartment complexes, the{' '}
          <Term ko="장기수선충당금">long-term repair reserve</Term> is legally the{' '}
          <em>owner&rsquo;s</em> burden (Multi-Family Housing Management Act art. 30), but
          tenants pay it inside the monthly management fee. At lease end you can claim it back
          from the owner (Enforcement Decree art. 31(8)) — the management office prints the paid
          total on request, and over a few years it is commonly hundreds of thousands of won.
        </li>
        <li>
          <strong>Settle the management fees</strong> — final-month proration, and a statement
          from the office confirming nothing outstanding; landlords deduct claimed arrears from
          deposits, so close this in writing.
        </li>
        <li>
          <strong>Close out utilities</strong> — electricity and water settle by meter reading;
          city gas needs a <em>booked disconnection visit</em>, so call days ahead, not on the
          morning of the move.
        </li>
        <li>
          <strong>Internet and TV</strong> — contract terms decide the early-termination fee;
          moving the contract to the new address often beats cancelling. Handle it before the
          equipment is buried in a box.
        </li>
      </ul>

      <h2 id="move-out-day" className={H2}>
        4. Move-out day
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/move-out-meter.jpg"
          alt="Photographing the utility meter on move-out day from a Korean apartment"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Ten minutes of photographs — every room, every meter, the keys changing hands — is the
          cheapest legal protection on this page.
        </Caption>
      </figure>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Simultaneous exchange.</strong> The deposit and the unit are owed at the same
          time: confirm the transfer has <em>landed</em> in your account before the keys leave
          your hand. &ldquo;This afternoon, promise&rdquo; is not a transfer.
        </li>
        <li>
          <strong>Walk through together.</strong> Photograph every room, record the meters, and
          agree on the condition in the landlord&rsquo;s presence — the same photos that answer a
          damage claim also prove the state you left.
        </li>
        <li>
          <strong>Restoration means damage, not use.</strong> You return the unit in its state
          allowing for ordinary wear — practice does not make tenants repaint every sun-faded
          wall. Genuine damage is a settlement item; resolve it as a number in writing, not a
          vague deduction later.
        </li>
        <li>
          <strong>Read before signing anything.</strong> A &ldquo;final settlement&rdquo; paper
          can waive more than it says out loud. If the deposit is short by even one claimed
          deduction you dispute, sign nothing that reads like closure.
        </li>
      </ul>

      <p className={P}>
        The small hardware matters too: access cards for the lobby and parking, remote controls,
        mailbox keys, and the resident parking sticker all belong in the handover, counted and
        noted on the settlement paper. Unreturned cards are a classic late deduction — and a
        classic thing to photograph in the landlord&rsquo;s hands.
      </p>

      <h2 id="after-you-move" className={H2}>
        5. After you move: the two registrations
      </h2>
      <p className={P}>
        With the deposit safely returned, move your address promptly — the protections you no
        longer need at the old unit are the ones you now want at the new one. For foreign
        residents that means the <Term ko="체류지 변경신고">sojourn-address change report</Term>:
        registered foreigners must report a change of residence{' '}
        <strong>within 15 days of moving in</strong>, at the local district office or immigration
        office (Immigration Act art. 36). It doubles as the move-in report that starts your new
        lease&rsquo;s opposing power, and missing it risks fines and needless visa friction.
      </p>
      <p className={P}>
        If the deposit was <em>not</em> fully returned, the order flips — registration order
        first, address move second — and if you are leaving Korea entirely, the checklist gains
        one more line: get the claim secured and a Korean attorney authorized{' '}
        <em>before</em> the flight, while documents and signatures are easy. Deposit-guarantee
        policyholders should also notify their insurer on the timeline the policy sets (see{' '}
        <Link href="/guides/real-estate-lease-disputes/jeonse-explained" className={LINK}>
          Jeonse, Explained
        </Link>
        ).
      </p>

      <p className={P}>
        Round out the address change beyond the legal registers: banking and card apps, mobile
        carrier, employer HR, the post office&rsquo;s mail-forwarding service, and any visa
        paperwork that lists your residence. For a foreign resident these records feed each other
        — immigration filings, bank verification, and deliveries all read from the same address —
        and one stale entry has a talent for surfacing at the least convenient moment.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Moving the registration first</strong> &ldquo;to get the kids into
          school&rdquo; — and discovering what it cost only when the deposit dispute starts.
        </li>
        <li>
          <strong>Leaving the repair reserve behind.</strong> It is not a tip for the landlord;
          ask the management office for the total and claim it.
        </li>
        <li>
          <strong>Skipping the gas appointment</strong> — safety checks and final billing need
          the visit, and the missed slot becomes moving-day chaos.
        </li>
        <li>
          <strong>No photographs.</strong> Ten minutes with a phone camera at move-in and
          move-out is the cheapest legal protection in this entire guide.
        </li>
        <li>
          <strong>Settling repairs verbally.</strong> &ldquo;Just leave 200,000 for the
          wallpaper&rdquo; needs a line on paper, or it becomes a different number in a month.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '2 months before expiry',
            what: 'Last day for your provable non-renewal notice (art. 6); on an implicitly renewed lease, termination lands 3 months after notice (art. 6-2).',
          },
          {
            when: 'Before you vacate',
            what: 'If any deposit is unpaid: lease registration order completed on the register — verified with a fresh extract — before keys or registration move.',
          },
          {
            when: 'Move-out day',
            what: 'Simultaneous exchange — deposit landed, keys handed, photos and meter readings taken, settlement in writing.',
          },
          {
            when: '15 days from moving in',
            what: 'Foreign residents report the new address (Immigration Act art. 36) — which also starts the new lease’s protections.',
          },
        ]}
      />
      <p className={P}>
        Start by writing two dates where you can see them: the lease expiry, and two months
        before it. The entire checklist hangs between those.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'The landlord wants money for repainting and "cleaning." Do I owe it?',
            a: (
              <p>
                Not automatically. Restoration covers damage beyond ordinary wear — holes,
                breakage, stains you caused — while sun-faded wallpaper and the traces of normal
                life are generally the cost of renting the place out. Contracts sometimes add
                specific cleaning clauses, so read yours; where a claimed deduction feels like a
                tax on living there, ask for the itemized basis in writing before agreeing to
                anything.
              </p>
            ),
          },
          {
            q: 'I lived in a small villa, not an apartment complex. Do I still get the repair reserve back?',
            a: (
              <p>
                The reserve system belongs to professionally managed multi-family housing — if
                your monthly bills never itemized a long-term repair reserve, there is nothing to
                reclaim. Check your management-fee statements: if the line item is there, the
                refund right follows it; if your villa billed only simple shared costs, this item
                does not apply to you.
              </p>
            ),
          },
          {
            q: "I'm leaving Korea for good. What must happen before the flight?",
            a: (
              <p>
                Three things, in order: the deposit either returned or secured by a completed
                registration order; a Korean attorney authorized in writing if any claim remains
                to run; and your banking kept alive to receive money later. Distance does not
                kill a deposit claim — the 10-year clock is long — but evidence, signatures, and
                leverage all get harder to arrange from abroad, so arrange them while you are
                still here.
              </p>
            ),
          },
          {
            q: 'My new landlord needs the deposit before my old one returns it. How do people bridge that?',
            a: (
              <p>
                Common bridges: aligning both contracts&rsquo; dates during negotiation, moving a
                jeonse loan from one unit to the other through the bank, or a short-term loan
                against the confirmed return date. What does <em>not</em> work is handing back
                the old unit early on a promise — once possession and registration are gone, your
                leverage goes with them. Structure the dates first; the deep dive is in the
                deposit guide.
              </p>
            ),
          },
          {
            q: 'When exactly should the deposit hit my account?',
            a: (
              <p>
                On the day you hand over the unit — the two obligations are owed simultaneously,
                which is why the working ritual is transfer-confirmed-then-keys. If the landlord
                cannot pay on the day, do not leave empty-handed and hopeful: that is precisely
                the situation the registration order exists for, and the escalation ladder from
                demand letter to lawsuit is mapped in{' '}
                <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
                  Getting Your Housing Deposit Back
                </Link>
                .
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
