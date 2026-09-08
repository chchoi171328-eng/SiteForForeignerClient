// Guide body: Enforcing a Judgment (강제집행)
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #26).
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
const TD = 'border border-gray-200 px-3 py-2 text-sm text-gray-700 leading-relaxed'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function EnforcingAJudgment() {
  return (
    <>
      <Image
        src="/assets/guides/enforcement-hero.jpg"
        alt="A blank official document beside a brass seal and key on a dark desk — a Korean judgment becomes money only through the enforcement procedures of the Civil Execution Act"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A Korean judgment does not pay itself. Turning it into money is a separate procedure
            — <strong>compulsory execution</strong> under the Civil Execution Act — that you
            must apply for, asset by asset.
          </li>
          <li>
            You need an <strong>enforceable title</strong>: a final judgment with an execution
            clause, a finalized payment order (no clause needed), a court settlement, or a
            notarial deed with an enforcement consent (arts. 28–30, 56, 58).
          </li>
          <li>
            <strong>The procedure follows the asset</strong>: bank accounts and wages go through
            seizure and collection orders, real estate through a court auction, household and
            business goods through the bailiff.
          </li>
          <li>
            For seized claims you choose between a <strong>collection order</strong> and an{' '}
            <strong>assignment order</strong> (art. 229) — a genuine strategic fork, because the
            assignment order shifts the third party&rsquo;s insolvency risk onto you.
          </li>
          <li>
            Enforcement costs are ultimately <strong>the debtor&rsquo;s to bear</strong> and are
            repaid first out of the proceeds (art. 53) — but you advance them, so they belong in
            the maths from the start.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The judgment arrived, the appeal period passed, and the debtor still has not paid. This
        is the moment many foreign creditors discover a fact nobody warned them about: in Korea,
        as in most systems, winning and collecting are two different procedures. The court that
        decided you are right will not move a single won on its own.
      </p>
      <p className={P}>
        Collecting is the job of <strong>compulsory execution</strong>{' '}
        <Term ko="강제집행">(gangje jiphaeng)</Term> under the Civil Execution Act{' '}
        <span lang="ko">(민사집행법)</span> — a toolbox of procedures that seize what the debtor
        owns and convert it into payment. The single organising idea is that{' '}
        <strong>enforcement is asset-shaped</strong>: you do not enforce &ldquo;against the
        debtor&rdquo; in general, you enforce against a bank balance, a salary, an apartment, a
        car — each through its own route.
      </p>
      <p className={P}>
        This guide maps those routes. It assumes you already hold, or are about to hold, a court
        title — the earlier steps are covered in{' '}
        <Link href="/guides/debt-collection/someone-owes-you-money-in-korea" className={LINK}>
          Someone Owes You Money in Korea
        </Link>
        , and freezing assets before judgment in{' '}
        <Link href="/guides/debt-collection/provisional-attachment" className={LINK}>
          Provisional Attachment
        </Link>
        .
      </p>

      <GuideToc
        items={[
          { href: '#the-title', label: '1. The enforceable title: what you need in hand' },
          { href: '#choosing-route', label: '2. Enforcement is asset-shaped: choosing the route' },
          { href: '#claims', label: '3. Bank accounts, wages, and other claims' },
          { href: '#auction', label: '4. Real estate auctions and movable property' },
          { href: '#debtor-side', label: '5. What the debtor can — and cannot — do' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-title" className={H2}>
        1. The enforceable title: what you need in hand
      </h2>
      <p className={P}>
        Every enforcement starts from an <strong>enforceable title</strong>{' '}
        <Term ko="집행권원">(jiphaeng gwonwon)</Term> — a document the law accepts as proof that
        the debt may be collected by force. The main ones (arts. 24, 56): a{' '}
        <strong>judgment</strong> that is final or carries a provisional-enforcement
        declaration; a <strong>finalized payment order</strong>; a <strong>court settlement or
        acknowledged claim</strong> recorded in the protocol; and a <strong>notarial
        deed</strong> for a fixed sum in which the debtor consented to enforcement — the reason
        well-drafted Korean loan documents are often notarised.
      </p>
      <p className={P}>
        For a judgment, you additionally need the <strong>execution clause</strong>{' '}
        <Term ko="집행문">(jiphaengmun)</Term>: a certification stamped onto your certified copy
        by the court clerk, issued once the judgment is final or provisionally enforceable
        (arts. 28–30). A finalized{' '}
        <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
          payment order
        </Link>{' '}
        is simpler still — it can be enforced on its original copy without any clause (art.
        58(1)), one more reason it is the workhorse of small debt collection.
      </p>

      <h2 id="choosing-route" className={H2}>
        2. Enforcement is asset-shaped: choosing the route
      </h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className={TH}>What the debtor owns</th>
              <th className={TH}>Procedure</th>
              <th className={TH}>Basis (Civil Execution Act)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>Bank deposits, receivables, a jeonse deposit</td>
              <td className={TD}>Seizure order + collection or assignment order, served on the third party</td>
              <td className={TD}>arts. 223, 227, 229</td>
            </tr>
            <tr>
              <td className={TD}>Salary and similar recurring income</td>
              <td className={TD}>Same claim-seizure route, continuing against each payday — subject to the wage exemption</td>
              <td className={TD}>arts. 229, 246(1)4</td>
            </tr>
            <tr>
              <td className={TD}>Real estate</td>
              <td className={TD}>Compulsory auction (or compulsory administration of its income) through the court</td>
              <td className={TD}>art. 78</td>
            </tr>
            <tr>
              <td className={TD}>Household or business goods, vehicles on site</td>
              <td className={TD}>Seizure by the court bailiff, then public sale</td>
              <td className={TD}>art. 189</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Which route to take is only half the question; the other half is knowing what exists.
        If you do not know where the debtor banks or what sits in their name, the court-ordered
        disclosure and inquiry tools — sworn asset lists, direct searches of banks and
        registries — are covered in section 4 of{' '}
        <Link href="/guides/debt-collection/someone-owes-you-money-in-korea" className={LINK}>
          Someone Owes You Money in Korea
        </Link>
        . Running them first usually costs less than enforcing against guesses.
      </p>

      <h2 id="claims" className={H2}>
        3. Bank accounts, wages, and other claims
      </h2>
      <p className={P}>
        Money the debtor is owed by someone else — the bank that holds their deposits, the
        employer that owes their salary, the landlord holding their jeonse deposit — is seized
        by a court <strong>seizure order</strong> served on that third party (art. 227). From
        service, the third party may no longer pay the debtor. Then comes the fork (art. 229):
      </p>
      <p className={P}>
        <strong>The collection order</strong> <Term ko="추심명령">(chusim myeongnyeong)</Term>{' '}
        authorises you to collect the seized claim directly from the third party, without any
        further procedure (art. 229(2)). The claim stays the debtor&rsquo;s; other creditors can
        still join and share. It is the flexible, low-risk default.
      </p>
      <p className={P}>
        <strong>The assignment order</strong> <Term ko="전부명령">(jeonbu myeongnyeong)</Term>{' '}
        transfers the seized claim to you outright, in place of payment, at face value (art.
        229(3)). That exclusivity is its power — later creditors are shut out — and its price:
        if the third party cannot actually pay, that loss is now yours, because your claim
        against the debtor was extinguished up to the transferred amount. It is also void if
        another creditor seized or attached the same claim before your order reached the third
        party (art. 229(5)), and it takes effect only once final — after the 1-week
        immediate-appeal period passes (arts. 229(7), 15(2)).
      </p>
      <p className={P}>
        Wages deserve their own note. A salary seizure keeps working payday after payday until
        the debt is cleared — steady and hard to evade — but{' '}
        <strong>half of wage-type income is exempt</strong>, with a higher protected floor for
        low incomes set by presidential decree (art. 246(1)4). Calculate what a monthly
        instalment actually yields before choosing this route for a large claim.
      </p>

      <h2 id="auction" className={H2}>
        4. Real estate auctions and movable property
      </h2>
      <p className={P}>
        Real estate is enforced through a <strong>compulsory auction</strong>{' '}
        <Term ko="강제경매">(gangje gyeongmae)</Term> run by the court (art. 78): the court
        registers the seizure against the property, has it appraised, sells it at public
        auction, and distributes the proceeds among the creditors entitled to share. It is the
        heavyweight route — months rather than weeks, with costs advanced along the way — and
        also the one that reaches the largest asset most debtors own. Where the property
        produces income, the law offers compulsory administration of that income as an
        alternative or supplement (art. 78(2)–(3)).
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/enforcement-auction.jpg"
          alt="A brass key and tag resting on a small wooden house model — a Korean compulsory auction converts a debtor's real estate into distributable proceeds through the court"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Auction proceeds are distributed by the court among entitled creditors — enforcement
          costs come back to you first out of the proceeds (art. 53).
        </Caption>
      </figure>
      <p className={P}>
        <strong>Movables</strong> — furniture, equipment, stock, a vehicle on the premises — are
        seized physically by the court bailiff taking possession or sealing them (art. 189).
        Honest expectations help here: essential household goods are exempt (art. 195), used
        goods sell cheaply, and the yield is often modest. In practice the bailiff&rsquo;s visit
        works as much through its seriousness as through the sale price — many instalment
        agreements date from that morning.
      </p>
      <p className={P}>
        On costs: enforcement expenses are borne by the debtor and repaid{' '}
        <strong>first</strong> out of the enforcement proceeds (art. 53(1)). But you advance
        them — filing fees, appraisal, bailiff — so weigh each route&rsquo;s cost against what
        it can realistically recover, with the framework in{' '}
        <Link href="/guides/civil-litigation/what-litigation-costs" className={LINK}>
          What Litigation Costs
        </Link>
        .
      </p>

      <h2 id="debtor-side" className={H2}>
        5. What the debtor can — and cannot — do
      </h2>
      <p className={P}>
        If you are reading this from the other side — wages garnished, a bailiff&rsquo;s seal on
        the door — the system leaves you defined lanes, not general mercy. What is protected is
        protected by law: exempt movables (art. 195), the exempt share of wages and certain
        benefits (art. 246). Within those lanes, three tools matter.
      </p>
      <p className={P}>
        A <strong>suit of objection to the claim</strong>{' '}
        <Term ko="청구이의의 소">(cheonggu ui-i ui so)</Term> attacks the debt behind the title
        — typically because something happened after the judgment: you paid, you settled, the
        claim was extinguished (art. 44). A <strong>third-party objection suit</strong> protects
        property seized in the enforcement that actually belongs to someone else — a
        flatmate&rsquo;s laptop, a spouse&rsquo;s separately owned goods (art. 48). Both are
        real lawsuits, and filing one does not by itself stop the enforcement — a separate
        court order suspending it must be sought (art. 46).
      </p>
      <p className={P}>
        The third tool is the oldest: payment. Enforcement ends when the debt, with costs, is
        satisfied — and creditors mid-enforcement are often more open to a realistic instalment
        agreement than the silence before it suggested. If you negotiate one, get the
        suspension or withdrawal of the enforcement in writing as part of it.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Enforcing against guesses.</strong> Seizure orders aimed at banks the debtor
          left years ago burn fees and warn the debtor. Run the disclosure and inquiry tools
          first; enforce second.
        </li>
        <li>
          <strong>Taking an assignment order against a shaky third party.</strong> The
          exclusivity is tempting, but if the employer or company owing the seized claim is
          itself near insolvency, the assignment converts your court-confirmed claim into their
          credit risk.
        </li>
        <li>
          <strong>Ignoring the exemption maths.</strong> A garnishment that nets a small
          fraction of each paycheck may take years against a large claim — sometimes right, but
          it should be a calculation, not a surprise.
        </li>
        <li>
          <strong>Spending route costs a small claim cannot repay.</strong> An auction makes
          sense against an apartment, rarely against a debt of a few million won. Match the
          route&rsquo;s cost to the claim, knowing costs come back only if the enforcement
          actually yields proceeds.
        </li>
        <li>
          <strong>Letting the title sleep.</strong> A judgment-confirmed claim lasts 10 years
          and can be renewed by a fresh action — patience is legitimate strategy, but only if
          someone is watching the calendar.
        </li>
      </ul>
      <Callout variant="warning" title="Enforcement is not self-help">
        Only the court and its bailiff may seize. Taking the debtor&rsquo;s property yourself,
        blocking their business, or pressuring them through their employer or community can
        create separate legal problems for you — and hands a debtor who owes you money a claim
        of their own. Every tool in this guide runs through the court; keep it that way.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '1 week',
            what: 'The immediate-appeal period against enforcement-court decisions — and the clock an assignment order must outlive before it takes effect (Civil Execution Act arts. 15(2), 229(7)).',
          },
          {
            when: '6 months',
            what: "After the title becomes final without payment — the point from which the debtor can be entered on the defaulters' list, covered in the debt-recovery map guide (art. 70).",
          },
          {
            when: '10 years',
            what: 'The life of a claim confirmed by judgment or finalized payment order (Civil Act art. 165) — renewable by a fresh action before it runs out.',
          },
        ]}
      />
      <p className={P}>
        Start from the asset list — real or still to be discovered — and match each entry to its
        route and its cost. That one page of planning is what separates enforcement that
        collects from enforcement that merely certifies you were right.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I have a judgment from a court in my home country. Can I enforce it in Korea?',
            a: (
              <p>
                Not directly — a foreign judgment must first pass through a Korean{' '}
                <strong>enforcement-judgment</strong> proceeding in which a Korean court permits
                its execution (Civil Execution Act arts. 26–27). Korean law recognises foreign
                judgments that meet statutory conditions, including proper service and
                reciprocity with the country in question, and whether yours qualifies is
                exactly the assessment to make before planning around Korean assets.
              </p>
            ),
          },
          {
            q: 'The debtor moved abroad but still has assets in Korea. Does enforcement work?',
            a: (
              <p>
                Yes — enforcement runs against the assets, not the debtor&rsquo;s presence. A
                Korean bank balance, deposit, or property can be seized while the debtor lives
                elsewhere; documents are served through the prescribed channels, which adds
                time but not impossibility. The practical constraint is the usual one: knowing
                what remains in Korea, which is what the inquiry tools are for.
              </p>
            ),
          },
          {
            q: 'The bank or employer received my collection order but is not paying. Now what?',
            a: (
              <p>
                A third party who ignores a collection order can be sued directly — a
                collection suit by you against them on the seized claim. Before escalating,
                check the common innocent explanations: the account held less than expected,
                the exempt share of wages, or an earlier competing seizure. A written demand
                citing the served order resolves many of these without another case.
              </p>
            ),
          },
          {
            q: 'Can the debtor simply empty the account before my seizure order lands?',
            a: (
              <p>
                Until the order is served on the bank, yes — which is why timing and surprise
                matter, and why a creditor who saw the risk coming freezes first with a
                provisional attachment while the main case is still running. Once served, the
                seizure catches the balance then present and, depending on its terms, sums
                credited afterwards.
              </p>
            ),
          },
          {
            q: 'How long does a compulsory real-estate auction take, and do I control it?',
            a: (
              <p>
                Expect a process measured in months: registration of the seizure, appraisal,
                scheduled sale dates — sometimes several if bidding fails — then distribution.
                The court, not the creditor, conducts it; your role is the application,
                advancing costs, and claiming your share at distribution. Other creditors with
                rights in the property share according to their priority, so the proceeds are
                not automatically yours alone.
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
