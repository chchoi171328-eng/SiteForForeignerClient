// Guide body: What Litigation Costs in Korea
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #23).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr / klac.or.kr — see REVIEW-GUIDES.md.

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

export default function WhatLitigationCosts() {
  return (
    <>
      <Image
        src="/assets/guides/litigation-costs-hero.jpg"
        alt="A calculator and a plain document folder on a desk — Korean litigation costs are made of filing fees, service deposits, expenses, and attorney fees"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Court costs in Korea are <strong>calculated, not quoted</strong>. The filing fee comes
            from a published formula based on the amount you claim — for a ₩50,000,000 claim it is{' '}
            <strong>₩230,000</strong>.
          </li>
          <li>
            Filing <strong>electronically saves 10%</strong> of that fee. An appeal costs{' '}
            <strong>1.5×</strong> the first-instance fee; a final appeal, <strong>2×</strong>.
          </li>
          <li>
            You also prepay <strong>service deposits</strong> (a per-round postal cost multiplied by
            the parties) and any <strong>appraisal or expert fees</strong> — the item most likely to
            surprise you.
          </li>
          <li>
            <strong>The loser pays the costs</strong> (Civil Procedure Act art. 98) — but attorney
            fees are recovered only up to a court-rule ceiling, which is usually well below what
            representation actually costs.
          </li>
          <li>
            If money is the obstacle, <strong>litigation aid</strong> can defer or waive court
            costs, and some disputes have free routes that come before any lawsuit.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        &ldquo;How much will this cost?&rdquo; is usually the second question, right after whether
        the case is winnable. In Korea the answer has an unusually precise part and an unusually
        variable part, and confusing the two is what leads people to either overestimate the
        barrier or walk into a bill they did not expect.
      </p>
      <p className={P}>
        The precise part is what the court charges: the stamp fee{' '}
        <Term ko="인지대">(injidae)</Term> and the service deposit{' '}
        <Term ko="송달료">(songdallyo)</Term>, both set by published rules. The variable part is
        everything else — appraisals, expert work, and legal representation. This guide covers each
        in turn, then the loser-pays rule and what it does and does not get back for you.
      </p>

      <GuideToc
        items={[
          { href: '#four-costs', label: '1. The four things you pay for' },
          { href: '#filing-fee', label: '2. The filing fee, calculated' },
          { href: '#deposits', label: '3. Service deposits and case expenses' },
          { href: '#loser-pays', label: '4. "The loser pays" — and its limits' },
          { href: '#cheaper-routes', label: '5. Cheaper routes and litigation aid' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="four-costs" className={H2}>
        1. The four things you pay for
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[600px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Cost</th>
              <th className={TH}>Who sets it</th>
              <th className={TH}>When you pay</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <strong>Filing fee</strong> <span lang="ko">(인지대)</span>
              </td>
              <td className={TD}>A statutory formula tied to the amount claimed.</td>
              <td className={TD}>With the complaint — the case does not start without it.</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Service deposit</strong> <span lang="ko">(송달료)</span>
              </td>
              <td className={TD}>
                A fixed per-round postal cost, multiplied by the number of parties and expected
                rounds.
              </td>
              <td className={TD}>Prepaid at filing; topped up if the case runs long.</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Case expenses</strong>
              </td>
              <td className={TD}>
                Appraisers, expert witnesses, document production, witness allowances — priced by
                the work.
              </td>
              <td className={TD}>When the step is ordered, usually by the party who asked for it.</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Attorney fees</strong>
              </td>
              <td className={TD}>
                Your engagement letter — a retainer, and a success fee if the agreed outcome is
                achieved.
              </td>
              <td className={TD}>
                On engagement and at the agreed points. Our own ranges are on the{' '}
                <Link href="/fees" className={LINK}>
                  fees page
                </Link>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Only the first two are unavoidable. The third depends on what the case needs to prove, and
        the fourth on whether you are represented — which is a decision worth making on the
        strength of the case rather than the size of the filing fee.
      </p>

      <h2 id="filing-fee" className={H2}>
        2. The filing fee, calculated
      </h2>
      <p className={P}>
        The fee is a percentage of the <Term ko="소가">amount in dispute (soga)</Term>, and the
        percentage falls as the claim grows (Stamp Act for Civil Litigation art. 2). The formula
        is public, so you can work out your own number before speaking to anyone:
      </p>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[620px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Amount claimed</th>
              <th className={TH}>Filing fee</th>
              <th className={TH}>Worked example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>Under ₩10,000,000</td>
              <td className={TD}>claim × 0.5%</td>
              <td className={TD}>₩5,000,000 → ₩25,000</td>
            </tr>
            <tr>
              <td className={TD}>₩10,000,000 – ₩100,000,000</td>
              <td className={TD}>claim × 0.45% + ₩5,000</td>
              <td className={TD}>₩50,000,000 → ₩230,000</td>
            </tr>
            <tr>
              <td className={TD}>₩100,000,000 – ₩1,000,000,000</td>
              <td className={TD}>claim × 0.4% + ₩55,000</td>
              <td className={TD}>₩200,000,000 → ₩855,000</td>
            </tr>
            <tr>
              <td className={TD}>₩1,000,000,000 and above</td>
              <td className={TD}>claim × 0.35% + ₩555,000</td>
              <td className={TD}>₩2,000,000,000 → ₩7,555,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Three adjustments matter. Filing through the <strong>electronic litigation system</strong>{' '}
        costs <strong>90%</strong> of the figure above — a straight 10% saving for doing what most
        represented parties do anyway. An <strong>appeal</strong> costs 1.5× the first-instance
        fee and a <strong>final appeal</strong> 2×, so the price of continuing rises with each
        level. And the arithmetic is rounded: amounts under ₩1,000 become ₩1,000, and above that
        the last hundreds are dropped.
      </p>
      <p className={P}>
        Two related economies are worth noting. A{' '}
        <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
          payment order
        </Link>{' '}
        costs a tenth of the equivalent lawsuit fee, which is why undisputed money claims usually
        start there. And claims up to ₩30,000,000 run on the small-claims track, which is faster
        and lighter, though the filing fee follows the same formula.
      </p>
      <p className={P}>
        One complication: not every case has an obvious number. Where you are asking for something
        other than money — possession of a property, a registration corrected, an act performed —
        the amount in dispute is worked out under separate valuation rules rather than picked by
        you, and the filing fee follows that figure. If your claim is not simply &ldquo;pay me
        ₩X,&rdquo; treat the fee as something to be calculated rather than estimated from the
        table above.
      </p>

      <h2 id="deposits" className={H2}>
        3. Service deposits and case expenses
      </h2>
      <p className={P}>
        On top of the stamp fee, the court collects a deposit for posting documents. The
        calculation is mechanical — a fixed cost per delivery round, multiplied by the number of
        parties and by the rounds a case of that type is expected to need (fewer for small claims
        than for ordinary suits). For a two-party case the sum is usually tens of thousands of won,
        not a barrier; if the case runs longer than expected, the court asks you to top it up.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/litigation-costs-desk.jpg"
          alt="Receipts and a bank transfer slip beside a pen on a desk — Korean court costs are prepaid and later apportioned between the parties"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Court costs are paid up front by whoever takes the step, and only redistributed at the
          end — so keep every receipt from the day you file.
        </Caption>
      </figure>
      <p className={P}>
        The expenses that actually move the total are evidentiary. A property appraisal, a
        handwriting or accounting expert, a medical assessment — these are ordered when the case
        needs them, priced by the work, and paid in advance by the party who requested the step.
        In construction, boundary, and injury disputes they can exceed the filing fee several times
        over, so ask early whether your case is likely to need one.
      </p>
      <Callout variant="warning" title="Pay the court's corrections on time">
        If the stamp fee or deposit is short, the court issues a correction order with a deadline
        attached. Ignore it and the complaint can be rejected without anyone reaching the merits —
        an avoidable way to lose, and one that can put a limitation deadline back in play.
      </Callout>

      <h2 id="loser-pays" className={H2}>
        4. &ldquo;The loser pays&rdquo; — and its limits
      </h2>
      <p className={P}>
        Korea follows the loser-pays principle: litigation costs are borne by the losing party
        (Civil Procedure Act art. 98). Where each side wins part of the case, the court apportions
        the costs between them — a judgment commonly says something like &ldquo;70% to the
        defendant, 30% to the plaintiff.&rdquo;
      </p>
      <p className={P}>
        The limit is in what &ldquo;costs&rdquo; includes. Filing fees, deposits, and case
        expenses are recoverable as spent. Attorney fees are recoverable only{' '}
        <strong>up to a ceiling set by Supreme Court rule</strong> (art. 109) — a scale that rises
        with the amount in dispute but at a shrinking rate, so the recoverable figure is typically
        well under what competent representation costs. Winning outright does not usually make you
        whole on legal fees; it recovers a defined slice.
      </p>
      <p className={P}>
        And recovery is its own step. The judgment fixes the <em>ratio</em>; the actual sum is
        settled afterwards in a cost-determination procedure where you submit the receipts (art.
        110). If you never file it, the ratio in the judgment stays theoretical — which is why the
        receipt discipline in section 3 pays off at the end.
      </p>
      <p className={P}>
        There is also a solvency question behind all of it. A costs award against someone with no
        seizable assets is worth what any other judgment against them is worth: it must still be
        enforced, and enforcement has its own expenses. Before spending heavily on a case, it is
        worth asking not only whether you would win but whether the other side could actually pay —
        the same question that decides whether the underlying claim is worth pursuing at all.
      </p>

      <h2 id="cheaper-routes" className={H2}>
        5. Cheaper routes and litigation aid
      </h2>
      <p className={P}>
        Before pricing a lawsuit, check whether your dispute has a cheaper first step. Unpaid wages
        have a free labour-office complaint and a government wage fund — the sequence in{' '}
        <Link href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit" className={LINK}>
          Unpaid Wages
        </Link>
        . Undisputed debts have the payment order. Many disputes settle after a{' '}
        <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
          certified demand letter
        </Link>{' '}
        costing a few thousand won. Court-annexed mediation, where the court proposes it, costs
        nothing extra and ends cases early.
      </p>
      <p className={P}>
        Where the costs themselves are the obstacle, the court can grant{' '}
        <Term ko="소송구조">litigation aid (sosong guhjo)</Term> — deferring or waiving court costs
        for a party who lacks the means, on application or on the court&rsquo;s own initiative,
        unless the case is clearly bound to lose (art. 128). Separately, the Korea Legal Aid
        Corporation provides free or subsidised representation to people who meet its criteria,
        which is worth checking before concluding that a claim is unaffordable.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Inflating the claim to look serious.</strong> The fee scales with the amount
          claimed, so padding the number costs you money at filing — and costs follow the outcome,
          so the padded portion you lose comes back at you.
        </li>
        <li>
          <strong>Assuming winning is free.</strong> Attorney fees come back only to the rule&rsquo;s
          ceiling; budget on the gap, not on full recovery.
        </li>
        <li>
          <strong>Forgetting the appeal multiplier.</strong> A case you might appeal is a case
          whose court costs are 1.5× again at the next level, and 2× at the last.
        </li>
        <li>
          <strong>Not asking about appraisals early.</strong> If your case needs an expert, that is
          usually the largest court-side number — and knowing it before filing changes the
          calculation about whether to sue at all.
        </li>
        <li>
          <strong>Winning and never claiming the costs.</strong> The cost-determination step is
          separate from the judgment; skip it and you keep the ratio but not the money.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: 'The court’s correction deadline',
            what: 'If the filing fee or service deposit is short, the court sets a date to fix it — miss it and the complaint can be rejected outright.',
          },
          {
            when: 'Before or during the case',
            what: 'Litigation aid can be applied for when the means are lacking (Civil Procedure Act art. 128); asking early is better than discovering the deposit at filing.',
          },
          {
            when: 'After the judgment',
            what: 'Costs are quantified in a separate cost-determination procedure on the receipts you submit (art. 110) — the judgment alone fixes only the ratio.',
          },
        ]}
      />
      <p className={P}>
        Start with one number: the amount you would actually claim. The filing fee, the track, and
        most of the cost conversation follow from it.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Do I have to pay the other side’s legal fees if I lose?',
            a: (
              <p>
                Generally yes, within limits: the losing party bears the litigation costs, and the
                other side&rsquo;s attorney fees are included up to the court-rule ceiling rather
                than whatever they actually agreed to pay. Where the result is split, the court
                apportions the costs by proportion. That exposure is one reason an honest
                assessment of your chances is worth more than an optimistic one.
              </p>
            ),
          },
          {
            q: 'Is it cheaper to sue in small claims?',
            a: (
              <p>
                The filing fee follows the same formula, so the saving is not in the stamp — it is
                in speed and simplicity, since the track is designed for claims up to
                ₩30,000,000 to be resolved quickly. For an undisputed debt, the payment order is
                usually cheaper still at a tenth of the lawsuit fee.
              </p>
            ),
          },
          {
            q: 'I live abroad. Does that add costs?',
            a: (
              <p>
                It can. Serving documents on a party outside Korea takes longer and costs more than
                domestic service, and translation of foreign-language evidence is an expense the
                court may require. Neither is usually decisive, but both belong in the budget from
                the start rather than as surprises later.
              </p>
            ),
          },
          {
            q: 'Can I get the filing fee back if the case settles?',
            a: (
              <p>
                Settlements normally deal with costs as part of the deal — often each side bearing
                its own, sometimes one side reimbursing the other. Separately, a portion of the
                stamp fee can be refundable where a case ends at an early stage; ask the court or
                your representative about it rather than assuming the money is simply spent.
              </p>
            ),
          },
          {
            q: 'How do the firm’s fees fit into all of this?',
            a: (
              <p>
                They are the fourth item in section 1 and entirely separate from what the court
                charges. Our retainer ranges by practice area, how success fees are set, and the
                consultation fee are published on the{' '}
                <Link
                  href="/fees"
                  className="text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600"
                >
                  fees page
                </Link>
                , and an exact quote follows a review of your case — in writing, before you sign.
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
