// Guide body: Settlement (합의) in Criminal Cases
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #4).
// Statute references verified against law.go.kr / casenote.kr — see REVIEW-GUIDES.md.

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
const TH = 'text-left text-xs font-bold uppercase tracking-wider text-gray-500 px-4 py-3'
const TD = 'px-4 py-3 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function HapuiSettlementInCriminalCases() {
  return (
    <>
      <Image
        src="/assets/guides/hapui-hero.jpg"
        alt="Two chairs across a quiet meeting table — hapui, the settlement that shapes Korean criminal cases"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            <Term ko="합의">Hapui</Term> is a <strong>private settlement between suspect and
            victim</strong> — typically compensation in exchange for a written statement that the
            victim does not want punishment.
          </li>
          <li>
            For a small set of offenses, that statement <strong>ends the case outright</strong>.
            For everything else it does not end anything — but it is one of the{' '}
            <strong>strongest factors</strong> at every decision point, from charging to
            sentencing.
          </li>
          <li>
            The hard deadline: for offenses that cannot be punished against the victim&rsquo;s
            will, the statement must reach the court{' '}
            <strong>before the first-instance judgment</strong>.
          </li>
          <li>
            <strong>Never approach the victim directly.</strong> Contact that feels like pressure
            can create separate legal problems — settlements are negotiated through counsel.
          </li>
          <li>
            If the victim refuses or cannot be reached, a{' '}
            <strong>criminal deposit</strong> <span lang="ko">(형사공탁)</span> is the fallback
            that still shows the court the harm was addressed.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Somewhere early in a Korean criminal case — from a lawyer, an investigator, or a
        Korean-speaking friend — you will hear the word <Term ko="합의">hapui</Term>. Understanding
        hapui settlement in a Korean criminal case is genuinely foreign to most English-speaking
        readers: a private agreement with the victim, usually involving money, that the state
        openly takes into account when deciding what happens to you.
      </p>
      <p className={P}>
        It is not a bribe and it is not a plea bargain. Korean criminal practice treats repairing
        the victim&rsquo;s harm as a core measure of how a case should end, and settlement is the
        standard proof of repair. The system is built to expect it: prosecutors ask whether you
        have settled, and sentencing takes the circumstances after the offense into account
        (Criminal Act art. 51).
      </p>
      <p className={P}>
        What matters is knowing which of two very different roles a settlement plays in your case
        — case-ending or merely case-shaping — and timing it accordingly. This guide covers both,
        plus the mechanics, the deadline, and the standard mistakes.
      </p>

      <GuideToc
        items={[
          { href: '#what-is-hapui', label: '1. What hapui is' },
          { href: '#two-tiers', label: '2. When settlement ends the case — and when it only helps' },
          { href: '#what-it-contains', label: '3. What a settlement agreement contains' },
          { href: '#timing', label: '4. Timing: the decision points and the deadline' },
          { href: '#how-much', label: '5. How much money is a settlement?' },
          { href: '#criminal-deposit', label: "6. If the victim won't settle: the criminal deposit" },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="what-is-hapui" className={H2}>
        1. What hapui is
      </h2>
      <p className={P}>
        A hapui is a civil contract: the suspect (or defendant) compensates the victim, and the
        victim signs a document — commonly called a{' '}
        <Term ko="처벌불원서">statement of no desire for punishment</Term> — declaring that they
        have settled, do not wish the person punished, and (typically) waive further civil claims.
        That document is then filed with whoever currently holds the case: police, prosecutor, or
        court.
      </p>
      <p className={P}>
        The settlement itself happens entirely outside the courtroom. No judge approves it, no
        prosecutor signs it. Its power comes from what the system does with it afterward — and
        that depends on the offense.
      </p>

      <h2 id="two-tiers" className={H2}>
        2. When settlement ends the case — and when it only helps
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[560px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Offense category</th>
              <th className={TH}>Effect of settlement</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <Term ko="반의사불벌죄">Offenses not punishable against the victim&rsquo;s
                will</Term>{' '}
                — e.g., simple assault
              </td>
              <td className={TD}>
                <strong>Ends the case.</strong> Once the victim formally declares they do not want
                punishment, prosecution cannot proceed.
              </td>
              <td className={TD}>Criminal Act art. 260(3); Criminal Procedure Act art. 232</td>
            </tr>
            <tr>
              <td className={TD}>
                <Term ko="친고죄">Complaint-required offenses</Term> — e.g., insult
              </td>
              <td className={TD}>
                <strong>Ends the case</strong> if the complaint is withdrawn — and a withdrawn
                complaint cannot be filed again.
              </td>
              <td className={TD}>Criminal Procedure Act art. 232</td>
            </tr>
            <tr>
              <td className={TD}>All other offenses — the majority, including DUI and most fraud</td>
              <td className={TD}>
                Does <strong>not</strong> end anything, but weighs heavily: toward lighter charging
                decisions, suspended dispositions, and reduced sentences.
              </td>
              <td className={TD}>Criminal Act art. 51 (sentencing factors)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The first question to ask about any settlement strategy is therefore: <em>which row am I
        in?</em> In the first two, a settlement is close to the whole game and its deadline is
        absolute. In the third, it is a powerful mitigating card to be played at the right moment
        — and paying for it does not entitle you to any particular outcome.
      </p>

      <h2 id="what-it-contains" className={H2}>
        3. What a settlement agreement contains
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>The parties and the case</strong> — identified precisely enough to match the
          police or court file.
        </li>
        <li>
          <strong>The amount and payment terms</strong> — almost always paid in full at signing;
          promises to pay later make weak settlements.
        </li>
        <li>
          <strong>The no-punishment clause</strong> — the victim&rsquo;s declaration that they do
          not wish the suspect punished, the sentence the criminal file cares about.
        </li>
        <li>
          <strong>A waiver of further claims</strong> — civil and criminal, so the same incident
          cannot be re-monetized later.
        </li>
        <li>
          <strong>Practical clauses</strong> — confidentiality, no-contact, and who submits the
          document to the authorities, and when.
        </li>
      </ul>
      <p className={P}>In practice, a settlement comes together in a fairly fixed sequence:</p>
      <GuideFlow
        steps={[
          {
            title: 'First contact — through counsel',
            body: "Your lawyer reaches the victim (or the victim's lawyer), often via the investigator, and confirms whether they are open to settling at all.",
          },
          {
            title: 'Terms are negotiated',
            body: 'Amount, scope of the waiver, confidentiality and no-contact terms. Expect a few rounds; written drafts beat phone summaries.',
          },
          {
            title: 'Simultaneous exchange',
            body: 'Payment is transferred and the agreement plus the no-punishment statement are signed in the same sitting, with identity verified.',
          },
          {
            title: 'Filing with the case',
            body: 'The signed statement is submitted to whoever holds the case — police, prosecutor, or court — so it actually enters the decision.',
          },
        ]}
      />
      <Callout title="Payment and paper move together">
        The standard failure is paying first and chasing the signed statement afterward. Exchange
        them simultaneously — transfer confirmed, statement signed and handed over in the same
        sitting, ideally at a lawyer&rsquo;s office with identification verified.
      </Callout>

      <h2 id="timing" className={H2}>
        4. Timing: the decision points and the deadline
      </h2>
      <p className={P}>
        A criminal case passes through a series of decisions — the police&rsquo;s referral
        decision, the prosecutor&rsquo;s charging decision, the court&rsquo;s sentence. A
        settlement reached before a decision point can shape that decision; one reached after it
        can only shape the next. Earlier is structurally better, and for the case-ending
        categories there is a legal cut-off:
      </p>
      <GuideDeadlines
        items={[
          {
            when: 'Before 1st-instance judgment',
            what: 'The absolute deadline for withdrawing a complaint or declaring no desire for punishment in the case-ending categories (Criminal Procedure Act art. 232). After the judgment, the declaration has no case-ending effect.',
          },
          {
            when: 'Before charging decision',
            what: 'The practical sweet spot in all other cases — a settlement in the file when the prosecutor decides can tip the outcome toward a lighter disposition.',
          },
          {
            when: 'Before sentencing',
            what: 'The last useful moment in an indicted case — courts routinely adjourn briefly where a settlement is genuinely close.',
          },
        ]}
      />
      <p className={P}>
        Start by confirming with your lawyer which category your offense falls into — that single
        fact sets both the deadline and the negotiating leverage on each side.
      </p>

      <h2 id="how-much" className={H2}>
        5. How much money is a settlement?
      </h2>
      <p className={P}>
        There is no table and no formula. Amounts turn on the seriousness of the harm, medical
        costs and lost income where there is injury, the strength of the evidence, how badly each
        side needs the settlement, and what the suspect can actually pay. The victim is not
        obliged to settle at all, which is their leverage; the defendant&rsquo;s leverage is that a
        refused reasonable offer can still be shown to the court by other means (section 6).
      </p>
      <p className={P}>
        Be wary of anchoring on numbers from internet forums — amounts in reported anecdotes vary
        wildly with facts that rarely travel with the number. A lawyer who handles criminal work
        in your region can give you a realistic band for your specific situation, and a realistic
        band is the single most useful input to this negotiation.
      </p>

      <h2 id="criminal-deposit" className={H2}>
        6. If the victim won&rsquo;t settle: the criminal deposit
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/hapui-deposit.jpg"
          alt="A settlement document folder and pen on a lawyer's desk — preparing a criminal deposit when hapui fails in Korea"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          A criminal deposit is filed with the court&rsquo;s deposit office — since a statutory
          amendment it can be made even without the victim&rsquo;s personal details, using the case
          number instead.
        </Caption>
      </figure>
      <p className={P}>
        Some victims refuse every offer; some cannot be contacted at all. The fallback is the{' '}
        <Term ko="형사공탁">criminal deposit</Term>: paying the compensation into the court&rsquo;s
        deposit office for the victim to collect (Deposit Act art. 5-2). A defendant in a pending
        criminal case may deposit even without knowing the victim&rsquo;s identity details,
        identifying them through the case number and court instead.
      </p>
      <p className={P}>
        A deposit is not a settlement — the victim has made no declaration, and courts weigh a
        deposit more cautiously than a genuine agreement, sometimes asking for the victim&rsquo;s
        view. But it converts &ldquo;he never even tried to make it right&rdquo; into an
        objectively recorded attempt at repair, which matters at sentencing. It is the second-best
        tool, used when the best one is unavailable.
      </p>

      <h2 id="common-mistakes" className={H2}>
        7. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Contacting the victim directly.</strong> An unsolicited apology text from the
          person under investigation reads as pressure and can create separate legal problems —
          particularly where the alleged offense is against that person. Route every approach
          through counsel.
        </li>
        <li>
          <strong>Paying without the signed statement.</strong> Money sent &ldquo;as a gesture&rdquo;
          with paperwork to follow is how people pay twice.
        </li>
        <li>
          <strong>Signing a scope you didn&rsquo;t read.</strong> As the paying side you want the
          waiver broad; as a victim signing one, understand you are usually giving up both the
          criminal complaint and future civil claims in one signature.
        </li>
        <li>
          <strong>Assuming settlement equals dismissal.</strong> Outside the case-ending
          categories, no one can promise that a settlement produces any specific result — treat
          anyone who guarantees an outcome for a fee as a red flag.
        </li>
        <li>
          <strong>Missing the art. 232 deadline.</strong> In the case-ending categories, a
          settlement concluded a week after the first-instance judgment is a very expensive
          document that changes nothing about the conviction.
        </li>
      </ul>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Is settling an admission of guilt?',
            a: (
              <p>
                Formally, a settlement is compensation for claimed harm, not a confession, and
                people do settle weak cases to end them cheaply. But context matters: paying a
                large sum while insisting on complete innocence sends a mixed message, and in a
                case you intend to fight, the decision of whether and when to settle is strategy,
                not etiquette. Make it with counsel, not by feel.
              </p>
            ),
          },
          {
            q: "The victim is demanding an amount that seems enormous. Do I have to pay it?",
            a: (
              <p>
                No. A demand is an opening position, not a tariff. If it stays unreasonable, the
                criminal deposit route exists precisely so that one person&rsquo;s refusal to be
                reasonable cannot monopolize your sentencing picture. What you should not do is
                match an emotional demand with an emotional refusal — have counsel test what the
                realistic band is first.
              </p>
            ),
          },
          {
            q: "I don't speak Korean. How do I negotiate a hapui at all?",
            a: (
              <p>
                Through your lawyer — which is how Koreans do it too. The agreement will be drafted
                in Korean because it must work in a Korean file; insist on understanding every
                clause before signing, through your lawyer or a translation you trust. Never sign a
                settlement you cannot read on the promise that it &ldquo;says what we
                discussed.&rdquo;
              </p>
            ),
          },
          {
            q: "I'm the victim. Should I accept a settlement offer?",
            a: (
              <p>
                That is a genuine choice, not an obligation — declining is your right and the case
                proceeds. Before signing, be clear on what you are giving up: usually both the
                wish for punishment and future civil claims. If your losses are still growing —
                ongoing treatment, for example — settling early at a fixed number may be against
                your interest. The same advice applies in mirror image: decide with advice, not
                under pressure.
              </p>
            ),
          },
          {
            q: 'Will settling protect my visa or my stay in Korea?',
            a: (
              <p>
                A criminal outcome can affect your stay in Korea, and a settlement that improves
                the outcome can matter to that — but no one should promise you a specific
                immigration result from a settlement. Factor your stay into the strategy from the
                start and get your situation assessed specifically.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        If the settlement question has arrived because you were called in for questioning, start
        with{' '}
        <Link href="/guides/criminal-defense/received-a-police-summons" className={LINK}>
          Received a Police Summons
        </Link>{' '}
        — timing a settlement well depends on knowing where your case stands in that sequence.
      </p>

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
