// Guide body: Jeonse, Explained
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #2).
// Statute references verified against elaw.klri.re.kr / law.go.kr — see REVIEW-GUIDES.md.

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
const TH = 'text-left text-xs font-bold uppercase tracking-wider text-gray-500 px-4 py-3'
const TD = 'px-4 py-3 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function JeonseExplained() {
  return (
    <>
      <Image
        src="/assets/guides/jeonse-hero.jpg"
        alt="Korean apartment buildings at morning — the housing market where jeonse, Korea's lump-sum deposit lease, operates"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            <Term ko="전세">Jeonse</Term> is a lease where you pay one large refundable deposit —
            often hundreds of millions of won — <strong>instead of monthly rent</strong>. The
            landlord uses the money for the term and must return it in full when you leave.
          </li>
          <li>
            The deposit is legally <strong>an unsecured loan to your landlord</strong> until you
            take the protective steps: move in, register your address, and get a{' '}
            <strong>fixed-date stamp</strong> on the contract.
          </li>
          <li>
            Before signing, read the <strong>property register</strong> — a mortgage recorded
            before you rank ahead of your deposit in any auction.
          </li>
          <li>
            Deposit <strong>guarantee insurance</strong> exists and typically must be bought in the
            first half of the lease term.
          </li>
          <li>
            These protections apply to registered foreign residents — your immigration filings
            stand in for Korean resident registration.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Jeonse in Korea surprises almost every foreigner who meets it: instead of paying rent each
        month, you hand your landlord a deposit that can approach the price of the home itself —
        and pay nothing monthly at all. Two years later you are supposed to get every won back.
        Understanding how that bargain works, and where it can fail, is the point of this guide.
      </p>
      <p className={P}>
        <Term ko="전세">Jeonse</Term> is a lump-sum deposit lease unique to Korea. The deposit
        commonly runs 50–80% of the property&rsquo;s value; the landlord invests or borrows against
        it, and that return substitutes for rent. The arrangement is governed mainly by the{' '}
        <strong>Housing Lease Protection Act</strong> <span lang="ko">(주택임대차보호법)</span>,
        which exists to protect the tenant&rsquo;s deposit.
      </p>
      <p className={P}>
        The one idea to hold onto: jeonse is safe in proportion to the steps you take at the start.
        This guide covers what the system is, how it compares to your alternatives, and the checks
        that decide whether your money comes back easily or through the courts.
      </p>

      <GuideToc
        items={[
          { href: '#what-is-jeonse', label: '1. What jeonse is — and why Korea does it this way' },
          { href: '#jeonse-vs-wolse', label: '2. Jeonse, wolse, banjeonse: the three ways to rent' },
          { href: '#protect-your-deposit', label: '3. Your deposit is a loan — until you take three steps' },
          { href: '#before-you-sign', label: '4. Before you sign: the checks that matter' },
          { href: '#during-the-lease', label: '5. During the lease: the rights you keep' },
          { href: '#when-jeonse-goes-wrong', label: '6. When jeonse goes wrong' },
        ]}
      />

      <h2 id="what-is-jeonse" className={H2}>
        1. What jeonse is — and why Korea does it this way
      </h2>
      <p className={P}>
        In a jeonse lease, the tenant&rsquo;s deposit works as the landlord&rsquo;s capital.
        Historically, when bank credit was scarce, jeonse let property owners raise money without a
        bank and let tenants build savings instead of burning rent. The deposit is returned at the
        end of the term — in principle in full, with no deductions except actual damage or unpaid
        amounts.
      </p>
      <p className={P}>
        That origin explains the system&rsquo;s behavior today. Jeonse prices move with interest
        rates and property expectations: when rates are low and prices are rising, landlords accept
        large deposits happily; when either reverses, deposits become harder to hand back, because
        the money is not sitting in a vault — it is invested, lent onward, or locked inside the
        building itself. Nothing about that is illegal. It simply means the tenant, not a bank, is
        the landlord&rsquo;s creditor, and creditors are wise to act like it.
      </p>
      <p className={P}>
        Most jeonse is a contract right, not a registered property right. A separately registered{' '}
        <Term ko="전세권">jeonse right</Term> under the Civil Act (art. 303) does exist and is
        recorded on the property register, but landlords rarely agree to it. Instead, tenants rely
        on the Housing Lease Protection Act, which gives an unregistered tenant nearly equivalent
        protection — <em>if</em> the steps in section 3 are taken.
      </p>

      <h2 id="jeonse-vs-wolse" className={H2}>
        2. Jeonse, wolse, banjeonse: the three ways to rent
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Type</th>
              <th className={TH}>How it works</th>
              <th className={TH}>What to watch</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <strong>Jeonse</strong> <span lang="ko">(전세)</span>
              </td>
              <td className={TD}>
                One large refundable deposit, no monthly rent. Term typically 2 years.
              </td>
              <td className={TD}>
                Your exposure is the full deposit — the protections in section 3 are essential.
              </td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Wolse</strong> <span lang="ko">(월세)</span>
              </td>
              <td className={TD}>
                Smaller deposit plus monthly rent — the format most foreigners know from home.
              </td>
              <td className={TD}>
                Lower deposit risk, higher running cost. The same legal protections still apply to
                the deposit you do pay.
              </td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Banjeonse</strong> <span lang="ko">(반전세)</span>
              </td>
              <td className={TD}>
                A hybrid: a substantial deposit plus reduced monthly rent.
              </td>
              <td className={TD}>
                Treated legally like any housing lease; deposit protection matters in proportion to
                its size.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Which is better depends on your cash and your horizon. What does not change across the
        three is the law: all housing leases fall under the same Act, the same notice rules, and
        the same deposit protections.
      </p>

      <h2 id="protect-your-deposit" className={H2}>
        3. Your deposit is a loan — until you take three steps
      </h2>
      <p className={P}>
        Until you protect it, a jeonse deposit is simply money you lent a stranger. Korean law
        offers three layers of protection, and the first two cost almost nothing:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Move in and register your address.</strong> Delivery of the house plus residence
          registration gives you <Term ko="대항력">opposing power</Term> from the next day — your
          lease then binds whoever later buys the building (Housing Lease Protection Act art. 3).
          For foreign residents, foreigner registration and place-of-sojourn reporting count in
          place of Korean resident registration (Immigration Act art. 88-3).
        </li>
        <li>
          <strong>
            Get a <Term ko="확정일자">fixed-date stamp</Term> on the contract.
          </strong>{' '}
          A same-day formality at the community service center or by e-registration. Combined with
          the step above it creates <Term ko="우선변제권">priority repayment</Term>: if the
          property is ever auctioned, you are paid before creditors who registered after you (art.
          3-2).
        </li>
        <li>
          <strong>Consider deposit guarantee insurance</strong>{' '}
          <span lang="ko">(전세보증금반환보증)</span>. A guarantor such as HUG repays you if the
          landlord does not, then chases the landlord itself. Premiums scale with the deposit, and
          applications are generally accepted only during the first half of the lease term — so
          decide early, not when trouble starts.
        </li>
      </ul>
      <Callout variant="warning" title="Do the first two steps on moving day">
        Opposing power and priority both date from your registration, not from the contract. Every
        day between moving in and registering is a day someone else&rsquo;s mortgage can slip ahead
        of your deposit.
      </Callout>

      <h2 id="before-you-sign" className={H2}>
        4. Before you sign: the checks that matter
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/jeonse-register-check.jpg"
          alt="Reviewing a Korean property register before signing a jeonse lease contract"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The property register (등기부등본) is public — anyone can pull it online for under
          ₩1,000, and it shows every mortgage that would outrank your deposit.
        </Caption>
      </figure>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Pull the property register</strong> <span lang="ko">(등기부등본)</span> yourself,
          dated the day you sign. Check who owns the unit and what is already recorded against it.
          A large pre-existing mortgage plus your deposit exceeding the property&rsquo;s value is
          the classic shape of a deposit that never comes back.
        </li>
        <li>
          <strong>Compare deposit to market value.</strong> When the deposit plus senior debt
          approaches what the home would fetch at auction, tenants call it a{' '}
          <Term ko="깡통전세">tin-can jeonse</Term> — an empty shell. Guarantee insurers refuse
          these ratios for a reason; use their standards as your own.
        </li>
        <li>
          <strong>Verify you are paying the owner.</strong> The name on the register, the contract,
          and the bank account should match. Pay by transfer, never cash.
        </li>
        <li>
          <strong>Use a licensed broker</strong> <span lang="ko">(공인중개사)</span> and keep the
          confirmation documents they must issue — brokers carry professional liability for
          misexplained deals.
        </li>
        <li>
          <strong>Have the contract read before you sign it</strong> — special clauses{' '}
          <span lang="ko">(특약)</span> are where landlords quietly shift risk. If your Korean
          isn&rsquo;t contract-grade, that is not a character flaw; it is a reason to get the
          document reviewed. The full pre-signing walkthrough — register, clauses, the
          landlord&rsquo;s tax certificates — is in{' '}
          <Link href="/guides/real-estate-lease-disputes/reading-a-korean-lease-before-signing" className={LINK}>
            Reading a Korean Lease Before Signing
          </Link>
          .
        </li>
      </ul>

      <h2 id="during-the-lease" className={H2}>
        5. During the lease: the rights you keep
      </h2>
      <p className={P}>
        The Act tilts the ongoing relationship toward the tenant, and its rules override contrary
        contract terms:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Two years, even if the contract says less.</strong> A term left blank or set
          under two years counts as two years — though you may hold the landlord to a shorter
          agreed term if that suits you (art. 4(1)).
        </li>
        <li>
          <strong>One renewal on demand.</strong> Between 6 and 2 months before expiry you may
          require renewal once, for two more years; the landlord can refuse only on listed grounds,
          such as genuinely moving in (art. 6-3).
        </li>
        <li>
          <strong>Increases are capped.</strong> On renewal under the Act, the landlord cannot
          raise the deposit or rent by more than one-twentieth — 5% — and not again within a year
          (art. 7).
        </li>
        <li>
          <strong>The lease survives until you are paid.</strong> Even after the term ends, the
          lease relationship continues until the deposit is actually returned (art. 4(2)).
        </li>
      </ul>

      <h2 id="when-jeonse-goes-wrong" className={H2}>
        6. When jeonse goes wrong
      </h2>
      <p className={P}>
        Jeonse fails in two shapes. The slow shape: the term ends, the landlord stalls —
        &ldquo;when the next tenant comes in&rdquo; — and your move-out plans hang on someone
        else&rsquo;s cash flow. The fast shape: the property was over-leveraged from the start, and
        an auction or the landlord&rsquo;s insolvency puts your deposit behind a bank&rsquo;s
        mortgage.
      </p>
      <p className={P}>
        Both shapes have the same first aid: do not move out or deregister before your position is
        secured, put your demand in provable writing, and if you must leave, complete a{' '}
        <Term ko="임차권등기명령">lease registration order</Term> first. The full sequence — demand
        letter, registration order, payment order, lawsuit, and the 12% statutory interest that
        starts running once a complaint is served — is covered step by step in{' '}
        <Link href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back" className={LINK}>
          Getting Your Housing Deposit Back
        </Link>
        .
      </p>

      <GuideDeadlines
        items={[
          {
            when: 'Moving day',
            what: 'Register your address and get the fixed-date stamp — your priority dates from these, not from the contract (arts. 3, 3-2).',
          },
          {
            when: 'First half of the term',
            what: 'The usual window to buy deposit guarantee insurance — check the current conditions with the guarantor (e.g., HUG).',
          },
          {
            when: '6 to 2 months before expiry',
            what: 'The window to demand renewal (art. 6-3) — and the landlord’s window to refuse renewal (art. 6).',
          },
          {
            when: '2 months before expiry',
            what: 'Your last day to give notice that you are leaving; silence renews the lease on the same terms (art. 6).',
          },
        ]}
      />
      <p className={P}>
        Start by checking what is recorded on the property register today — everything else about
        jeonse safety follows from what you find there.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Can a foreigner sign a jeonse lease at all?',
            a: (
              <p>
                Yes — there is no nationality requirement in the Housing Lease Protection Act, and
                the protective steps have foreigner equivalents: your foreigner registration and
                place-of-sojourn reporting stand in for resident registration (Immigration Act art.
                88-3). The practical hurdles are financial rather than legal — Korean banks&rsquo;
                jeonse loan products often have their own eligibility conditions.
              </p>
            ),
          },
          {
            q: 'Is my jeonse deposit safer in an apartment than a villa?',
            a: (
              <p>
                The building type is a proxy, not the point. Large apartment complexes have deep
                resale markets, so auction values are predictable; single-owner villas and
                officetels are where over-leveraged properties cluster. The register tells you more
                than the façade: senior debt against realistic value is the number that decides.
              </p>
            ),
          },
          {
            q: 'The landlord wants to raise the deposit at renewal. How much can they ask?',
            a: (
              <p>
                If you renew under the Act — by demanding renewal, or by implied renewal — the
                increase is capped at 5%, once per year (arts. 6-3, 7). A landlord asking more at a
                renewal you are entitled to is asking for something the Act does not give them. A
                genuinely new lease after your renewal rights are used is a different negotiation.
              </p>
            ),
          },
          {
            q: 'My landlord changed while I lived here. Who owes me the deposit?',
            a: (
              <p>
                If you had opposing power — moved in and registered — the buyer of the building
                steps into the landlord&rsquo;s shoes by law, deposit obligation included (art.
                3(4)). This is exactly why the moving-day steps matter: without them, you may be
                left chasing a seller who has already spent your money.
              </p>
            ),
          },
          {
            q: 'Should I insist on registering a jeonse right (전세권) instead?',
            a: (
              <p>
                A registered jeonse right (Civil Act art. 303) lets you auction the property
                directly if the deposit is unpaid, and it does not depend on you living there. But
                most landlords refuse it, and for a tenant who actually resides in the unit, the
                Act&rsquo;s protections plus a fixed-date stamp reach nearly the same place at no
                cost. It is worth pressing for mainly when you will not occupy the unit —
                registration there is not enough without residence.
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
