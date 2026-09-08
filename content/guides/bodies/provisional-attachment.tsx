// Guide body: Provisional Attachment (가압류)
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #25).
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
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function ProvisionalAttachment() {
  return (
    <>
      <Image
        src="/assets/guides/attachment-hero.jpg"
        alt="A heavy padlock resting on stacked documents — a Korean provisional attachment freezes a debtor's assets before the lawsuit is decided"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A provisional attachment freezes a debtor&rsquo;s assets — bank accounts, real
            estate, deposits — <strong>before your case is decided</strong>, so there is
            something left to collect when you win (Civil Execution Act art. 276).
          </li>
          <li>
            The court decides <strong>on paper, without a hearing</strong>, and the freeze can
            be executed <strong>before the debtor is served</strong> — the debtor typically
            learns of it from the bank or the property register (arts. 280, 292).
          </li>
          <li>
            You must show two things at a preliminary level: a <strong>money claim</strong> and
            a real risk that enforcing a later judgment would <strong>fail or become very
            difficult</strong> without the freeze (art. 277).
          </li>
          <li>
            The filing stamp is <strong>₩10,000</strong>, but the court will require{' '}
            <strong>security</strong> for the debtor&rsquo;s potential loss — commonly a surety
            bond of 1/10 of the claim for real estate, 2/5 for bank-account attachments. It
            comes back when the case ends.
          </li>
          <li>
            A freeze preserves; it does not collect. The main lawsuit still has to follow — an
            attachment left <strong>3 years</strong> without one can be cancelled on the
            debtor&rsquo;s application (art. 288).
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The hardest moment in a Korean money dispute is the gap between knowing you are right
        and holding a judgment that says so. Months can pass between the two — and a debtor who
        sees the claim coming can spend that gap emptying accounts, selling the car, or moving
        the deposit. If you win on paper and there is nothing left to take, you have won
        nothing.
      </p>
      <p className={P}>
        The tool built for that gap is the <strong>provisional attachment</strong>{' '}
        <Term ko="가압류">(gaapryu)</Term> — a court order under the Civil Execution Act{' '}
        <span lang="ko">(민사집행법)</span> that freezes specific assets of the debtor while
        the main case is prepared or fought. Frozen property cannot be effectively sold or paid
        away against your claim; it waits for the judgment.
      </p>
      <p className={P}>
        What decides these applications is speed and paperwork, in that order. This guide
        covers what you must show, what it costs, how the procedure runs — and, because many
        readers arrive from the other side, what to do when it is <em>your</em> account that
        was suddenly frozen.
      </p>

      <GuideToc
        items={[
          { href: '#what-it-is', label: '1. What a provisional attachment does' },
          { href: '#requirements', label: '2. What you have to show the court' },
          { href: '#costs', label: '3. What it costs: the stamp and the security deposit' },
          { href: '#procedure', label: '4. The procedure, start to finish' },
          { href: '#if-frozen', label: '5. If it’s your account that was frozen' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="what-it-is" className={H2}>
        1. What a provisional attachment does
      </h2>
      <p className={P}>
        A provisional attachment secures the future enforcement of a money claim — or a claim
        convertible into money — against the debtor&rsquo;s movable and immovable property
        (Civil Execution Act art. 276(1)). The claim does not even have to be due yet: a
        conditional or not-yet-matured claim can support one (art. 276(2)). What the order does
        in practice is simple: the bank blocks the account balance up to the attached amount, or
        the property register records the attachment so any later buyer takes subject to your
        claim.
      </p>
      <p className={P}>
        Two features make it work. First, the court may decide the application{' '}
        <strong>without any oral hearing</strong> (art. 280(1)) — the debtor is not asked.
        Second, the freeze can be executed <strong>before the order is even served on the
        debtor</strong> (art. 292(3)). Surprise is not a side effect; it is the design. An
        attachment announced in advance would protect nothing.
      </p>
      <p className={P}>
        Understand equally what it is not. A provisional attachment pays you nothing and
        decides nothing about who is right — it only holds assets still while the ordinary
        machinery runs. The map of that machinery, from demand letter to court title to
        enforcement, is in{' '}
        <Link href="/guides/debt-collection/someone-owes-you-money-in-korea" className={LINK}>
          Someone Owes You Money in Korea
        </Link>
        ; the attachment is the step you take first when assets might not wait for it.
      </p>

      <h2 id="requirements" className={H2}>
        2. What you have to show the court
      </h2>
      <p className={P}>
        Two elements, both stated in your written application (art. 279). The first is the{' '}
        <strong>claim itself</strong>: what is owed, by whom, and on what basis. The second is
        the <strong>need for preservation</strong> — grounds to fear that without the freeze, a
        later judgment could not be enforced or only with great difficulty (art. 277). A debtor
        listing their apartment for sale, winding down a business, dodging contact after
        promising payment, or juggling several pressing creditors is the kind of picture courts
        look for.
      </p>
      <p className={P}>
        The standard of proof is deliberately lighter than at trial. You need{' '}
        <Term ko="소명">somyeong — a prima facie showing</Term>: documents that make the claim
        and the risk plausible, not certain. Loan agreements, bank transfer records, invoices,
        KakaoTalk messages acknowledging the debt, a screenshot of the property listing — the
        same paper record that will later win the main case is assembled here first, in
        condensed form.
      </p>
      <p className={P}>
        As for targets, anything enforcement could later reach can usually be frozen: real
        estate, cars, bank deposits, a tenant&rsquo;s jeonse deposit held by their landlord,
        business receivables, wages. Two cautions. Some assets are partly or wholly exempt from
        seizure — notably, half of wage-type income is protected, with a higher floor for low
        incomes set by presidential decree (art. 246(1)). And the choice of target drives the
        security deposit in the next section, so it is a strategic decision, not a formality.
      </p>

      <h2 id="costs" className={H2}>
        3. What it costs: the stamp and the security deposit
      </h2>
      <p className={P}>
        The court fees are almost symbolic: a <strong>₩10,000</strong> revenue stamp on the
        application regardless of the claim&rsquo;s size, plus a small advance for service of
        documents. The real number is the <strong>security</strong>.
      </p>
      <p className={P}>
        Because the debtor is frozen without being heard, the court conditions the order on you
        securing the debtor&rsquo;s potential loss (art. 280(2)–(3)). In standard practice the
        security for a <strong>real-estate</strong> attachment (also cars, construction
        machinery, small ships) can be provided as a surety-insurance bond of{' '}
        <strong>1/10 of the claim amount</strong> — a policy premium, not cash out. For{' '}
        <strong>monetary claims</strong> such as ordinary bank accounts, the pre-approved bond
        route covers <strong>2/5 of the claim</strong>; wage claims and business bank accounts
        sit outside that scheme, and the court sets security for them case by case — it may
        order a cash deposit instead.
      </p>
      <p className={P}>
        The security is not a fee. When the matter ends — you win, settle, or release the
        attachment — a security-cancellation procedure returns the deposit or ends the bond. It
        exists to answer for the debtor&rsquo;s damage if the freeze turns out to have been
        unjustified, which is also why the next number matters: what you freeze, and for how
        much, should match what you can prove. Costs of the main lawsuit itself are a separate
        subject, covered in{' '}
        <Link href="/guides/civil-litigation/what-litigation-costs" className={LINK}>
          What Litigation Costs
        </Link>
        .
      </p>

      <h2 id="procedure" className={H2}>
        4. The procedure, start to finish
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'File the application',
            body: 'In writing, at the district court where the asset sits or the court that would hear the main case (art. 278) — stating the claim, the preservation grounds, and the documentary showing for both (arts. 277, 279).',
          },
          {
            title: 'Provide the security',
            body: 'The court fixes the security and the method — cash deposit or surety-insurance bond (art. 280). For standard targets the bond route above applies; the order issues once security is in place.',
          },
          {
            title: 'The order issues — without a hearing',
            body: 'The court decides on the papers (art. 280(1)). The debtor is not notified of the application and has no opportunity to object beforehand.',
          },
          {
            title: 'Execute within 2 weeks',
            body: 'The freeze must be put into effect within 2 weeks of the order being notified to you (art. 292(2)): registration against real estate, an order served on the bank for deposits. Execution may precede service on the debtor (art. 292(3)).',
          },
          {
            title: 'Fight the main case',
            body: 'The attachment holds the assets while the ordinary route runs — payment order or lawsuit, then enforcement against the frozen property once you hold a final title.',
          },
        ]}
      />
      <figure className="my-6">
        <Image
          src="/assets/guides/attachment-frozen.jpg"
          alt="A bank card held motionless in a block of ice — an attached Korean bank account stays frozen up to the claimed amount until the attachment is lifted or enforced"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          An attached account is blocked up to the claimed amount — the debtor keeps whatever
          sits above it, and exempt income stays protected even inside it.
        </Caption>
      </figure>
      <p className={P}>
        Note what the sequence implies for tactics. A demand letter is normally the cheap first
        step of debt recovery — but it also warns the debtor. Where the preservation risk is
        real, the attachment comes first and the{' '}
        <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
          demand letter
        </Link>{' '}
        after, once there is nothing left to move.
      </p>

      <h2 id="if-frozen" className={H2}>
        5. If it&rsquo;s your account that was frozen
      </h2>
      <p className={P}>
        Many foreign residents meet this procedure from the receiving end: the bank app stops
        working, the branch mentions a court document, and nothing arrived in advance. That is,
        as section 1 explained, how the procedure lawfully works — but being frozen without a
        hearing is the beginning, not the end, of your rights. Four tools exist, and they can be
        combined.
      </p>
      <p className={P}>
        <strong>Objection</strong> <Term ko="이의신청">(ui-i sincheong)</Term>. You can ask the
        court that issued the order to reconsider it with both sides heard, arguing the claim or
        the preservation need was never there (art. 283). There is no fixed deadline, though the
        objection alone does not suspend the freeze while it is decided.
      </p>
      <p className={P}>
        <strong>Order to sue</strong>. You can force the creditor&rsquo;s hand: on your
        application, the court orders them to file the main lawsuit within a set period of{' '}
        <strong>at least 2 weeks</strong> and prove it. If they let the period pass, the court
        must cancel the attachment on your application (art. 287). A creditor using a freeze as
        pure pressure, with no intention of litigating, tends to be exposed here.
      </p>
      <p className={P}>
        <strong>The release deposit</strong>. Every attachment order must state a sum —{' '}
        <Term ko="가압류해방금액">the release amount (gaapryu haebang geum-aek)</Term> — that
        you can deposit with the court to lift the execution from the frozen asset (art. 282).
        The dispute then continues over the deposited money instead of your account, which can
        matter when the frozen asset is the one you live from.
      </p>
      <p className={P}>
        <strong>Cancellation for changed circumstances</strong>. If the grounds fall away, if
        you provide court-set security, or if <strong>3 years</strong> pass after execution
        without the creditor filing the main case, you can apply to have the attachment
        cancelled (art. 288(1)). And if the creditor ultimately loses the main case, the freeze
        they obtained can ground a damages claim of your own — the security they posted exists
        to answer for exactly that.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Warning the debtor first.</strong> A demand letter or an angry message
          announcing &ldquo;I&rsquo;ll freeze everything&rdquo; is a head start for exactly the
          asset movement the attachment exists to prevent. Sequence matters: freeze, then talk.
        </li>
        <li>
          <strong>Treating the freeze as the victory.</strong> An attachment collects nothing
          and decides nothing. Creditors who stop after the freeze discover the 3-year
          cancellation — and hand the debtor a damages argument.
        </li>
        <li>
          <strong>Freezing more than the proof supports.</strong> Attaching every account and
          the apartment for a thinly documented claim invites the objection procedure, raises
          the security, and enlarges your exposure if the main case falters.
        </li>
        <li>
          <strong>Missing the 2-week execution window.</strong> The order is perishable:
          execution more than 2 weeks after it was notified to you is barred (art. 292(2)), and
          the work must be redone.
        </li>
        <li>
          <strong>Ignoring exemptions.</strong> Freezing a salary account does not reach the
          protected half of wage income (art. 246(1)) — plan the recovery around what is
          actually seizable, not the headline balance.
        </li>
      </ul>
      <Callout variant="warning" title="A freeze is leverage with a price tag">
        Because the debtor is not heard first, the law balances the surprise afterwards: if
        your claim fails in the main case, the attachment you obtained can make you liable for
        the debtor&rsquo;s losses under general tort principles (Civil Act art. 750), and the
        security you posted answers first. Apply for what you can prove, against assets that
        matter — not as punishment.
      </Callout>

      <GuideDeadlines
        items={[
          {
            when: '2 weeks',
            what: 'From notification of the attachment order to you — the window in which it must be executed (Civil Execution Act art. 292(2)).',
          },
          {
            when: '2 weeks or more',
            what: 'The period the court sets under an order to sue — the creditor must file the main case within it and prove the filing, or the attachment is cancelled on the debtor’s application (art. 287).',
          },
          {
            when: '3 years',
            what: 'After execution without a main lawsuit — the point from which the debtor (or an interested party) can have the attachment cancelled (art. 288(1)).',
          },
        ]}
      />
      <p className={P}>
        Start from the asset you are worried about — the account, the property, the deposit —
        and work backwards: what can be shown on paper today, and what security would the
        freeze require. Those two answers decide whether this tool fits your case.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'My Korean bank account was frozen with no warning at all. Is that even legal?',
            a: (
              <p>
                Yes — the procedure is designed to reach the bank before it reaches you (arts.
                280, 292). What you are entitled to is everything that comes after: the court
                file identifying the creditor and the claimed amount, the objection procedure,
                the order to sue, and the release deposit in section 5. The first practical
                step is getting the case number — from the document the court serves on you, or
                from the bank — so the file can be read and the response chosen.
              </p>
            ),
          },
          {
            q: 'Will the debtor find out I applied before the freeze takes effect?',
            a: (
              <p>
                Not from the court — the application is decided without a hearing, and
                execution can precede service on the debtor. The leaks come from the
                creditor&rsquo;s side: demand letters, warnings, mutual acquaintances. If
                surprise matters to your case, protect it until the registration or the
                bank-service is done.
              </p>
            ),
          },
          {
            q: 'I no longer live in Korea. Can an attachment be applied for from abroad?',
            a: (
              <p>
                The procedure is documentary from start to finish — there is no hearing to
                attend — so it can be conducted through a representative in Korea while you are
                elsewhere. What needs preparation from abroad is the paperwork around
                authority: a power of attorney and identity documents in the form Korean courts
                accept, which varies by country. Build in time for that before the asset
                situation becomes urgent.
              </p>
            ),
          },
          {
            q: 'Do I get the security deposit back?',
            a: (
              <p>
                In the normal course, yes. The security exists to answer for the debtor&rsquo;s
                potential damage from the freeze; once the matter is resolved — judgment in
                your favour, settlement, or release of the attachment — a security-cancellation
                procedure returns a cash deposit or terminates the bond. Where the surety-bond
                route applied, what you actually spent was only the premium.
              </p>
            ),
          },
          {
            q: 'Can wages or a pension be frozen completely?',
            a: (
              <p>
                No. Half of wage-type income — salary, pension, severance-type payments — is
                exempt from seizure, and for low incomes a decree sets a higher protected floor
                (art. 246(1)). Certain benefit payments are wholly exempt. An attachment that
                lands on a salary account still cannot reach the protected portion, on either
                side of the dispute.
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
