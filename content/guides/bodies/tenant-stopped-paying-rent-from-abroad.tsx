// Guide body: Your Tenant in Korea Stopped Paying Rent — and You're Abroad
// Authored via the english-guide-writer skill workflow (#29, from-abroad series).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr — see REVIEW-GUIDES.md.

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

export default function TenantStoppedPayingRentFromAbroad() {
  return (
    <>
      <Image
        src="/assets/guides/rent-abroad-hero.jpg"
        alt="An empty Korean apartment at dusk with keys left on the counter — a landlord abroad can terminate, evict, and collect through a Korean attorney without flying in"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Once unpaid rent reaches <strong>two months&rsquo; worth</strong> (cumulative, not
            necessarily consecutive), you may terminate the lease (Civil Act art. 640) — and the
            tenant loses the right to demand renewal (Housing Lease Protection Act art. 6-3).
          </li>
          <li>
            The deposit is your security, not your solution: arrears are deducted from it at the
            end, so every month you wait is a month of <strong>security consumed</strong>.
          </li>
          <li>
            A tenant who will not leave is removed only through an <strong>eviction lawsuit</strong>{' '}
            and bailiff enforcement — changing locks or cutting utilities yourself creates
            separate legal problems.
          </li>
          <li>
            <strong>Nearly all of this runs from abroad</strong>: your attorney terminates,
            files, appears, and attends the enforcement under a power of attorney, with Korean
            litigation on an electronic filing system.
          </li>
          <li>
            If the arrears are small and the tenant is leaving anyway, the honest answer is often
            to deduct and stop — fees can exceed what a lawsuit recovers.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        You own an apartment or a house in Korea — bought while you lived here, inherited, or kept
        when you left — and the rent has stopped. Messages go unanswered, or come back with
        promises. From another time zone, every option looks slow and every month costs you
        money. The Korean system does give a landlord real tools; the point of this guide is to
        show which ones work from where you are, in what order, and where they genuinely require
        someone in Korea.
      </p>
      <p className={P}>
        The framework is the <strong>Civil Act</strong> <span lang="ko">(민법)</span> on leases,
        the <strong>Housing Lease Protection Act</strong>{' '}
        <span lang="ko">(주택임대차보호법)</span> that overlays it for homes, and the Civil
        Execution Act for the end of the road. Tenants in Korea are well protected — but the
        protections have a clear edge, and unpaid rent is where it sits.
      </p>
      <p className={P}>
        One idea organises everything below: <strong>the deposit is a clock</strong>. Act while
        it still covers you.
      </p>

      <GuideToc
        items={[
          { href: '#the-deposit', label: '1. What the deposit does — and doesn’t' },
          { href: '#terminating', label: '2. Terminating the lease: the two-months’ rent rule' },
          { href: '#eviction', label: '3. Getting the tenant out: the eviction lawsuit' },
          { href: '#the-money', label: '4. Getting the money — and whether it’s worth it' },
          { href: '#from-abroad', label: '5. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-deposit" className={H2}>
        1. What the deposit does — and doesn&rsquo;t
      </h2>
      <p className={P}>
        A Korean lease deposit <Term ko="보증금">(bojeunggeum)</Term> secures the tenant&rsquo;s
        obligations: unpaid rent, unpaid utilities, damage beyond normal wear. When the lease
        ends, those sums are deducted and the balance returned. That is the deposit&rsquo;s whole
        job — and it is why a stopped rent is less alarming than it feels at first: for a while,
        you are being paid out of money already in your hands.
      </p>
      <p className={P}>
        It is also why waiting is expensive. A <Term ko="월세">wolse</Term> deposit on a monthly
        lease is often only a few months&rsquo; rent; once arrears exceed it, every further month
        is an unsecured debt against a tenant who has already shown they do not pay. The deposit
        does not oblige you to wait until it runs out, and nothing in the law treats a tenant as
        current while the deposit absorbs the shortfall. Watch the ratio of arrears to deposit —
        it is the number that should drive your timing.
      </p>

      <h2 id="terminating" className={H2}>
        2. Terminating the lease: the two-months&rsquo; rent rule
      </h2>
      <p className={P}>
        For a building lease, the landlord may terminate once the tenant&rsquo;s arrears{' '}
        <strong>reach the amount of two periods&rsquo; rent</strong> (Civil Act art. 640). The
        test is the total, not a streak: a tenant who pays half for four months reaches two
        months&rsquo; worth just as surely as one who pays nothing for two. Reaching it is what
        unlocks termination; it is not automatic — you must declare termination, and the
        declaration must reach the tenant to take effect (Civil Act art. 111).
      </p>
      <p className={P}>
        The same threshold removes the tenant&rsquo;s strongest protections. A tenant who has
        fallen two months&rsquo; rent behind cannot force a renewal (Housing Lease Protection
        Act art. 6-3(1)1), and the automatic renewal that normally catches a silent landlord
        does not apply to them (art. 6(3)). In practice this means a landlord abroad who missed
        the usual notice window is not trapped in another term by a non-paying tenant.
      </p>
      <p className={P}>
        Send the termination in a form that proves receipt — in Korea that is{' '}
        <Term ko="내용증명">certified content mail</Term>, which your attorney can send from
        Korea on your behalf: a formal declaration that creates a dated record of termination
        and demand; it sometimes prompts payment or a move-out, but it cannot compel either. Its
        drafting and effects are covered in{' '}
        <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
          Certified Content Mail (내용증명)
        </Link>
        .
      </p>

      <h2 id="eviction" className={H2}>
        3. Getting the tenant out: the eviction lawsuit
      </h2>
      <p className={P}>
        A terminated lease does not empty the apartment. If the tenant stays, the only lawful
        route is a <Term ko="명도소송">suit for delivery of the premises (myeongdo sosong)</Term>{' '}
        — a civil lawsuit asking the court to order the tenant to hand the property back, usually
        combined with the claim for arrears. Korean civil litigation runs through an electronic
        filing system, and your attorney conducts it under a power of attorney; your presence is
        not required for the filing or the hearings.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Freeze the occupancy first',
            body: 'A provisional disposition prohibiting transfer of possession (점유이전금지가처분, Civil Execution Act art. 300) stops the tenant from passing the unit to someone else mid-case — without it, a new occupant can force you to start over.',
          },
          {
            title: 'File the suit for delivery, with the money claim',
            body: 'Termination, arrears, and compensation for occupation after termination in one case. Expect months rather than weeks; a tenant who does not respond shortens it.',
          },
          {
            title: 'Judgment — then the bailiff',
            body: 'A final judgment is executed by the court bailiff, who takes possession from the tenant and hands it to you (art. 258(1)). The creditor or a representative must attend the execution (art. 258(2)) — your attorney can.',
          },
          {
            title: 'The tenant’s belongings',
            body: 'Goods left behind are removed by the bailiff and handed to the tenant or a household member; if nobody is there, they are stored at the tenant’s cost and, if unclaimed, sold with court permission (art. 258(3)–(6)). You do not get to dispose of them yourself.',
          },
        ]}
      />
      <Callout variant="warning" title="Don't change the locks">
        Changing locks, cutting electricity or water, or moving a tenant&rsquo;s belongings out
        yourself — however justified it feels after months of silence — can create separate
        legal problems for you and hand the tenant a claim of their own. Possession is recovered
        by the bailiff on a judgment, not by the landlord on a Tuesday.
      </Callout>

      <h2 id="the-money" className={H2}>
        4. Getting the money — and whether it&rsquo;s worth it
      </h2>
      <p className={P}>
        Rent arrears are an ordinary money claim. For a tenant who has already left, a{' '}
        <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
          payment order
        </Link>{' '}
        is fast and inexpensive if the tenant does not contest; if they object, it becomes an
        ordinary lawsuit — worth starting only if you are prepared for that. For a tenant still
        in the unit, the money claim rides inside the eviction suit. A final title then opens
        enforcement against the tenant&rsquo;s bank accounts or wages, covered in{' '}
        <Link href="/guides/debt-collection/enforcing-a-judgment" className={LINK}>
          Enforcing a Judgment
        </Link>
        . Rent claims expire after <strong>3 years</strong> (Civil Act art. 163) — a long enough
        window, but not an invitation to let the matter drift.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/rent-abroad-desk.jpg"
          alt="A desk in a home office abroad at night with a Korean house key on blank documents — the arithmetic of arrears, deposit, and fees decides whether suing a former tenant is worth it"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Before suing a departed tenant, set three numbers side by side: what is owed, what the
          deposit already covered, and what the tenant could actually pay.
        </Caption>
      </figure>
      <p className={P}>
        <strong>Is a lawyer worth it? It depends on the amount.</strong> Where the arrears are a
        few million won and the deposit covers most of them, attorney fees for a contested claim
        can exceed what you recover — the honest move is often to deduct, document, and stop,
        keeping the small-claims track (claims of ₩30 million or less, a simplified procedure
        that may require attendance in person) in reserve. Where a tenant is still occupying, or
        the arrears have outgrown the deposit on a larger property, representation is usually a
        reasonable cost against what is at stake — the eviction itself is what stops the loss
        growing. We&rsquo;ll tell you at the consultation if it isn&rsquo;t worth it.
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
              <td className={TD}>
                Signed where you live — notarised locally and apostilled, or certified at a
                Korean consulate (appointment required). Your attorney sends the checklist for
                your country.
              </td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Termination notice and demand</td>
              <td className={TD}>Drafted and sent from Korea by your attorney.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Provisional disposition, eviction suit, money claim</td>
              <td className={TD}>Filed and argued electronically by your attorney.</td>
              <td className={TD}>No — hearings are attended by counsel.</td>
            </tr>
            <tr>
              <td className={TD}>Bailiff enforcement</td>
              <td className={TD}>Your attorney attends as your representative (art. 258(2)).</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Re-letting or selling afterwards</td>
              <td className={TD}>
                A management company can be appointed and supervised; a sale can proceed under
                power of attorney.
              </td>
              <td className={TD}>No — though some buyers and agents prefer to meet.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Two things are genuinely yours to carry from abroad. The paperwork: a power of attorney
        in the form Korean courts accept takes time to notarise and legalise in your country, so
        start it before the tenant&rsquo;s silence becomes an emergency. And the decisions: your
        attorney can act, but the choice between a settlement offer and a judgment, or between
        re-letting and selling, is one only you can make — which is why updates by email at each
        step matter more than they would for a client down the road.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Waiting for the deposit to run out.</strong> The two-months&rsquo; rule unlocks
          termination long before the deposit is gone; the deposit is security for the end, not
          a reason to delay the beginning.
        </li>
        <li>
          <strong>Terminating by chat message.</strong> A termination you cannot prove reached
          the tenant is a termination that may not exist. Use certified content mail.
        </li>
        <li>
          <strong>Accepting partial payments without a written reservation.</strong> Taking money
          is fine; taking it in a way that reads as agreeing to a new arrangement is not. Keep
          the arrears calculation and your position in writing.
        </li>
        <li>
          <strong>Skipping the provisional disposition.</strong> A tenant who sublets or hands
          the keys to a friend during the case can leave you with a judgment against the wrong
          person.
        </li>
        <li>
          <strong>Self-help.</strong> Locks, utilities, belongings — see the callout above. Every
          month of patience a court process costs is cheaper than a counterclaim.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: "Two months' rent",
            what: 'The arrears threshold that unlocks termination (Civil Act art. 640) and removes the tenant’s renewal rights (Housing Lease Protection Act arts. 6(3), 6-3(1)1) — a total, not a streak.',
          },
          {
            when: '6 to 2 months before expiry',
            what: 'The ordinary window to refuse renewal (art. 6(1)) — unnecessary against a tenant two months behind, but the clean route against one who merely pays late.',
          },
          {
            when: '2 weeks from service',
            what: "A former tenant's window to object to a payment order; silence makes it final (Civil Procedure Act art. 470).",
          },
          {
            when: '3 years',
            what: 'The limitation period for rent claims (Civil Act art. 163) — the outer limit for suing on arrears.',
          },
        ]}
      />
      <p className={P}>
        Start with two figures — the arrears so far, and the deposit — and the date the tenant
        last paid. The sections above follow from them.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'The tenant says they will catch up next month. Should I wait?',
            a: (
              <p>
                You can, but do it on paper: confirm the arrears figure and the date in writing,
                and state that the lease is not being renewed or varied. Waiting costs nothing
                if the tenant pays, and keeps the termination right intact if they do not — the
                mistake is informal patience that later reads as agreement.
              </p>
            ),
          },
          {
            q: 'The tenant has disappeared but their belongings are still inside. Can I clear the unit?',
            a: (
              <p>
                Not on your own. Even an abandoned-looking unit is legally in the tenant&rsquo;s
                possession until it is handed back or recovered through the bailiff, who handles
                belongings under a set procedure (Civil Execution Act art. 258). A tenant who
                cannot be found still has to be sued — the court has procedures for serving an
                absent defendant — and then the enforcement clears the unit lawfully.
              </p>
            ),
          },
          {
            q: 'Can I refuse to return any of the deposit?',
            a: (
              <p>
                You may deduct what the tenant actually owes — arrears, unpaid utilities,
                compensation for occupation after termination, and damage beyond ordinary wear
                — with an itemised calculation. Withholding more than that invites a claim the
                other way. Keep the condition records and bills that support each line.
              </p>
            ),
          },
          {
            q: 'Do I need to come to Korea for the eviction itself?',
            a: (
              <p>
                No. The enforcement requires the creditor or a representative to be present, and
                your attorney attends in that role; keys and possession are handed over to them
                on your behalf. What you will need to arrange from abroad is what happens next —
                a management company, a new tenant, or a sale.
              </p>
            ),
          },
          {
            q: 'What about tax on the rent while I live abroad?',
            a: (
              <p>
                Rental income from Korean property carries Korean tax obligations whether or not
                you live here, and the rules for non-residents have their own mechanics. That is
                a separate question from the dispute, and a tax professional&rsquo;s territory —
                but a stopped rent is a good moment to check that side is in order too.
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
