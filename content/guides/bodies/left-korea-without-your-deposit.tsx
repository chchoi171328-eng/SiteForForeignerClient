// Guide body: You Left Korea Without Your Deposit
// Authored via the english-guide-writer skill workflow (#31, from-abroad series).
// Statute references verified against casenote.kr / law.go.kr — see REVIEW-GUIDES.md.

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
const TH = 'border border-gray-200 bg-slate-50 px-3 py-2 text-left text-sm font-bold text-navy-900'
const TD = 'border border-gray-200 px-3 py-2 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function LeftKoreaWithoutYourDeposit() {
  return (
    <>
      <Image
        src="/assets/guides/deposit-abroad-hero.jpg"
        alt="Keys left in the lock of a Korean apartment door with a packed suitcase beside it — a tenant who left Korea still holds a claim for the unpaid deposit"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            <strong>The claim survives your departure.</strong> A deposit-return claim is an
            ordinary money claim with a <strong>10-year</strong> limitation period (Civil Act
            art. 162); leaving Korea does not forfeit it.
          </li>
          <li>
            What you may have lost is <strong>leverage, not the right</strong>: once you moved
            out and deregistered, the priority that attached to your occupancy ended — unless a
            lease registration order was completed first.
          </li>
          <li>
            That order can still be applied for <strong>after you have left</strong>, through a
            representative; it records your claim on the property from the day of registration
            (Housing Lease Protection Act art. 3-3).
          </li>
          <li>
            Demand letter, payment order, lawsuit, enforcement — <strong>all run from abroad</strong>{' '}
            under a power of attorney, on Korea&rsquo;s electronic filing system. Statutory
            interest rises to <strong>12%</strong> once a complaint is served.
          </li>
          <li>
            For a small deposit, fees can exceed recovery; for a jeonse-scale one, pursuing it is
            usually rational. The amount, the landlord&rsquo;s assets, and the property register
            decide which you are in.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The move happened on a deadline — a posting ended, a contract finished, a flight was
        booked — and the landlord said the deposit would follow &ldquo;once the next tenant
        comes in.&rdquo; Now you are in another country, the next tenant has apparently never
        come, and the messages have thinned out. The question underneath is simple: is money you
        left behind in Korea money you have lost?
      </p>
      <p className={P}>
        No. The deposit <Term ko="보증금">(bojeunggeum)</Term> is a debt the landlord owes you
        under the lease and the Housing Lease Protection Act{' '}
        <span lang="ko">(주택임대차보호법)</span>, and a debt does not evaporate because the
        creditor changed address. What changed when you left is the <em>strength of your
        position</em>, and the honest work of this guide is to show exactly what weakened, what
        can be rebuilt, and what it costs to collect from a distance.
      </p>
      <p className={P}>
        If you are still in Korea with the keys in your hand, stop here and read{' '}
        <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
          Getting Your Housing Deposit Back
        </Link>{' '}
        instead — the order of moves there is what this guide is written for people who missed.
      </p>

      <GuideToc
        items={[
          { href: '#what-survives', label: '1. What survived your departure — and what didn’t' },
          { href: '#registration-after', label: '2. The lease registration order, after you’ve left' },
          { href: '#demand-to-court', label: '3. From demand to court, from abroad' },
          { href: '#worth-it', label: '4. Is a lawyer worth it? It depends on the amount' },
          { href: '#from-abroad', label: '5. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="what-survives" className={H2}>
        1. What survived your departure — and what didn&rsquo;t
      </h2>
      <p className={P}>
        <strong>The claim itself.</strong> A deposit becomes repayable when the lease ends, and
        the right to demand it lasts 10 years (Civil Act art. 162). Nothing about leaving Korea,
        deregistering, or closing your Korean bank account touches that. A lease signed and paid
        for is evidence; so are the transfer records and the messages in which the landlord
        acknowledged what is owed.
      </p>
      <p className={P}>
        <strong>The two protections tied to living there.</strong> A tenant in occupation who
        is registered at the address holds{' '}
        <Term ko="대항력">opposing power</Term> — the lease binds anyone who buys the building —
        and, with a fixed-date stamp, <Term ko="우선변제권">priority repayment</Term> from
        auction proceeds (arts. 3, 3-2). For a foreign tenant, foreigner registration and the
        place-of-sojourn report stood in for resident registration. Both protections assume you
        still occupy and remain registered. When you handed back the keys and your registration
        at that address ended, so — unless you had completed a lease registration order first —
        did they.
      </p>
      <p className={P}>
        What that loss means in practice: if the landlord sells, the buyer is treated as
        stepping into the landlord&rsquo;s shoes only toward a tenant who held opposing power at
        the time (art. 3(4)) — a departed, deregistered tenant is generally left with a claim
        against the <em>old</em> owner alone. And if the property is auctioned, you no longer
        stand in the priority line. Your claim is intact; your place in the queue is not. Section
        2 is about getting a place back.
      </p>

      <h2 id="registration-after" className={H2}>
        2. The lease registration order, after you&rsquo;ve left
      </h2>
      <p className={P}>
        The <Term ko="임차권등기명령">lease registration order</Term> is the court order that
        writes your lease and deposit claim onto the property&rsquo;s register. Its condition is
        simply that the lease has ended and the deposit remains unpaid (Housing Lease Protection
        Act art. 3-3(1)) — not that you are still living there. A tenant abroad can apply through
        a representative, with the lease, proof the lease ended, and the registration history.
      </p>
      <p className={P}>
        The effect depends on timing, and the statute is candid about it. A tenant who completes
        the registration <em>before</em> giving up occupancy keeps the opposing power and priority
        already held (art. 3-3(5)). A tenant who registers <em>after</em> leaving acquires them
        afresh — from the registration, not retroactively — so any mortgage or creditor
        recorded in between ranks ahead. That is a real disadvantage, and it is also far better
        than nothing: from the registration date you are back on the register, a buyer takes the
        building subject to your claim, and anyone who later rents the unit forfeits the
        small-deposit super-priority (art. 3-3(6)) — which is exactly why a registered claim
        pushes a landlord who wants to re-let to settle with you first. Procedure and documents
        are covered in{' '}
        <Link href="/guides/real-estate-lease-disputes/lease-registration-order" className={LINK}>
          Lease Registration Order (임차권등기명령)
        </Link>
        .
      </p>

      <h2 id="demand-to-court" className={H2}>
        3. From demand to court, from abroad
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Power of attorney',
            body: 'Signed where you live — notarised locally and apostilled, or certified at a Korean consulate — so a representative in Korea can act. Start it first; it is the slowest document.',
          },
          {
            title: 'Certified content mail',
            body: 'A formal demand that creates a dated record and starts statutory interest; it sometimes prompts payment but cannot compel it. Sent from Korea by your representative, stating the amount, deadline, and account.',
          },
          {
            title: 'Payment order — or lawsuit',
            body: "A payment order is fast and inexpensive if the landlord doesn't contest; an objection within 2 weeks turns it into an ordinary lawsuit, so choose it only if you're prepared for that. Either way your attorney files and appears electronically.",
          },
          {
            title: 'Freeze if the landlord looks shaky',
            body: 'A provisional attachment on the property or accounts stops a landlord from selling or moving assets while the case runs — the step to take before the demand letter when that risk is real.',
          },
          {
            title: 'Enforce',
            body: 'A final order or judgment supports seizure of the landlord’s bank accounts, rent income, or the property itself; proceeds are paid to your account, or to your representative’s on your behalf.',
          },
        ]}
      />
      <p className={P}>
        Two numbers travel with this sequence. Once you have vacated and the landlord is in
        delay, the deposit carries civil statutory interest of <strong>5% per year</strong>{' '}
        (Civil Act art. 379), and from the day after a court complaint is served it rises to{' '}
        <strong>12% per year</strong> (Act on Special Cases Concerning Expedition of Legal
        Proceedings art. 3). On a deposit of tens of millions of won, a landlord who stalls for a
        year is paying for the privilege — a point worth putting in the demand letter.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/deposit-abroad-desk.jpg"
          alt="Printed blank photographs of an empty apartment beside a lease folder and a pen on a desk abroad — the move-out record a departed tenant builds a deposit claim on"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The file you can build from abroad: lease, transfer records, move-out photos, the
          landlord&rsquo;s messages — and the property register, which anyone can pull online.
        </Caption>
      </figure>
      <p className={P}>
        The landlord&rsquo;s usual answer — deductions for cleaning, repairs, unpaid bills — is
        harder to contest from a distance, which is why the move-out photographs and the final
        utility statements matter so much. The detailed treatment of the court stage, including
        costs, is in{' '}
        <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
          Payment Orders (지급명령)
        </Link>{' '}
        and{' '}
        <Link href="/guides/debt-collection/provisional-attachment" className={LINK}>
          Provisional Attachment
        </Link>
        .
      </p>

      <h2 id="worth-it" className={H2}>
        4. Is a lawyer worth it? It depends on the amount
      </h2>
      <p className={P}>
        <strong>A monthly-rent deposit of a few million won.</strong> Honesty first: attorney fees
        for a contested case can exceed what you recover, and from abroad the cheaper routes have
        real limits. The Housing Lease Dispute Mediation Committee{' '}
        <span lang="ko">(주택임대차분쟁조정위원회)</span> is low-cost — a filing fee of ₩10,000
        for claims under ₩100 million — and a representative can handle it, but mediation needs
        both sides: a landlord who ignores it ends it without a result. The small-claims track
        (₩30 million or less) is a simplified court procedure, and a representative may appear
        for you, but it is still a lawsuit with a defendant who can simply not pay. A sharply
        worded demand with the interest figures, a payment order, and a willingness to let a
        small sum go if the landlord has nothing — that is the realistic frame.
      </p>
      <p className={P}>
        <strong>A jeonse-scale deposit.</strong> Here the arithmetic usually turns. Tens of
        millions of won, interest at 12% from service, and a landlord who owns the very property
        you can register against make representation a reasonable cost against the sum at stake
        — and the lease registration order in section 2 is worth filing on its own. The honest
        exception is a landlord who is genuinely insolvent with a property already mortgaged
        beyond its value; the register will tell you, and we&rsquo;ll tell you at the
        consultation if it isn&rsquo;t worth it.
      </p>

      <h2 id="from-abroad" className={H2}>
        5. What can be done from abroad — and what needs you in Korea
      </h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr>
              <th className={TH}>Step</th>
              <th className={TH}>From abroad</th>
              <th className={TH}>Needs you in Korea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>Power of attorney</td>
              <td className={TD}>Notary and apostille where you live, or a Korean consulate (appointment required).</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Lease registration order</td>
              <td className={TD}>Applied for and completed by your representative.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Demand letter, payment order, lawsuit</td>
              <td className={TD}>Drafted, filed, and argued electronically by your attorney.</td>
              <td className={TD}>No — hearings are attended by counsel.</td>
            </tr>
            <tr>
              <td className={TD}>Mediation committee</td>
              <td className={TD}>A representative can attend; sessions may also be arranged remotely.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Enforcement and payment</td>
              <td className={TD}>Seizure runs through the court; funds are paid to your account or your representative&rsquo;s.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Condition disputes about the unit</td>
              <td className={TD}>Your move-out photos, final bills, and the landlord&rsquo;s messages.</td>
              <td className={TD}>No — but what you did not document is hard to prove now.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The one thing distance genuinely costs you is time: a power of attorney legalised abroad
        takes weeks, and every step after it waits for that document. Start it the day you
        decide to pursue the deposit, not the day the landlord stops replying.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Accepting &ldquo;when the next tenant comes&rdquo; as a condition.</strong> It is
          the landlord&rsquo;s cash-flow plan, not a term of your lease. The deposit was due when
          the lease ended.
        </li>
        <li>
          <strong>Waiting for the landlord to sell.</strong> Without a registered claim, a sale
          can leave you chasing a former owner — register first, then wait if you must.
        </li>
        <li>
          <strong>Letting the evidence scatter.</strong> Korean phone number cancelled, chat
          history gone, bank app closed. Export the messages and statements before any of that
          happens.
        </li>
        <li>
          <strong>Signing a settlement that waives interest and costs.</strong> A reduced lump
          sum paid now is often sensible; one that forgives everything for a promise is not.
        </li>
        <li>
          <strong>Sending a friend with no authority.</strong> A visit from someone with no power
          of attorney changes nothing legally and tells the landlord how far away you are.
        </li>
      </ul>
      <Callout variant="warning" title="Don't trade the claim for a threat">
        Messages like &ldquo;pay or I&rsquo;ll report you&rdquo; — to tax authorities, the
        police, anyone — can create separate legal problems for you and weaken a clean money
        claim. The leverage that works from abroad is the registered claim, the interest figures,
        and a court filing; use those.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '10 years',
            what: 'The limitation period for the deposit-return claim (Civil Act art. 162) — generous, but the evidence ages faster than the right.',
          },
          {
            when: 'From the registration date',
            what: 'When a lease registration order completed after departure takes effect — priority runs from then, not from your original move-in (Housing Lease Protection Act art. 3-3(5)).',
          },
          {
            when: '2 weeks from service',
            what: "The landlord's window to object to a payment order; silence makes it final (Civil Procedure Act art. 470).",
          },
          {
            when: 'From the day after service',
            what: 'Statutory interest on the unpaid deposit rises from 5% to 12% per year (Expedition Act art. 3).',
          },
        ]}
      />
      <p className={P}>
        Start with three documents you can obtain from anywhere: your lease, your transfer
        records, and the property register. Together they say whether the claim is worth the
        chase.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'The landlord says the deposit is only paid when a new tenant moves in. Is that legal?',
            a: (
              <p>
                It is not a condition the law recognises. The deposit is due when the lease ends
                and you hand the unit back; the landlord&rsquo;s need to raise it from the next
                tenant is their financing problem. Say so in writing, with the interest figures
                — and if the landlord is genuinely trying to re-let, a registered claim on the
                property is what makes that re-letting depend on paying you.
              </p>
            ),
          },
          {
            q: 'The landlord is deducting for cleaning and damage I don’t think existed. What can I do from abroad?',
            a: (
              <p>
                Ask for an itemised statement with receipts, and put your move-out photographs and
                final utility bills against it. Ordinary wear is not deductible; actual damage
                and unpaid bills are. What you cannot do from abroad is inspect the unit now, so
                the dispute is decided on what each side can show — which is why the photos
                taken on the day you left are the most valuable file you have.
              </p>
            ),
          },
          {
            q: 'The building has been sold since I left. Who owes me the deposit?',
            a: (
              <p>
                A buyer takes over the landlord&rsquo;s obligations toward a tenant who held
                opposing power at the time of the sale (Housing Lease Protection Act art. 3(4)).
                If you had deregistered without a lease registration order before the sale, your
                claim as a rule remains against the former owner; if a registration was in
                place, the new owner is bound. The register shows the dates, and they decide the
                defendant.
              </p>
            ),
          },
          {
            q: 'Can a friend in Korea handle this for me instead of a lawyer?',
            a: (
              <p>
                A friend can collect documents, pull the register, and deliver a demand letter
                you wrote. What they generally cannot do is represent you in court — Korean civil
                procedure limits lay representation, with narrow exceptions such as close family
                in small-claims cases — or sign away your rights without a proper power of
                attorney. For anything past the demand stage, the question becomes whether the
                amount justifies counsel, which section 4 is about.
              </p>
            ),
          },
          {
            q: 'How does the money actually reach me abroad?',
            a: (
              <p>
                A landlord who pays voluntarily can remit to your foreign account, and a
                judgment enforced in Korea is paid out through the court to the account you
                designate — commonly your attorney&rsquo;s client account, then on to you.
                International transfers carry bank-side paperwork on both ends; agree the route
                in writing before the first won moves so a payment is not delayed by a form.
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of October 2026. Updated when laws change.
      </p>
    </>
  )
}
