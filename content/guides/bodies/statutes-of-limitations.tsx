// Guide body: Statutes of Limitations
// Authored via the english-guide-writer skill workflow (guide-production Phase 3, #22).
// Statute references verified against law.go.kr / casenote.kr / lbox.kr — see REVIEW-GUIDES.md.

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

export default function StatutesOfLimitations() {
  return (
    <>
      <Image
        src="/assets/guides/limitations-hero.jpg"
        alt="Aging document boxes and faded folders on a shelf — in Korea every civil claim has a limitation period after which it can no longer be enforced"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Every civil claim in Korea has an expiry date. The general rule is{' '}
            <strong>10 years</strong>, but the shorter periods are the ones that catch people:{' '}
            <strong>5 years</strong> for commercial claims, <strong>3 years</strong> for wages and
            professional fees, <strong>1 year</strong> for some everyday debts.
          </li>
          <li>
            Injury and damage claims run on a double clock:{' '}
            <strong>3 years from when you learned</strong> of the harm and who caused it, and{' '}
            <strong>10 years from the act itself</strong> — whichever ends first.
          </li>
          <li>
            The clock generally starts when you <strong>could first have enforced</strong> the
            claim — not when you got angry, and not when you last asked for payment.
          </li>
          <li>
            Only three things stop it: <strong>a court step, an attachment, or the debtor&rsquo;s
            acknowledgment</strong>. A demand letter alone buys 6 months, and only if you file
            within them.
          </li>
          <li>
            Expiry is a <strong>defense, not an automatic deletion</strong> — the other side has
            to raise it. And a debtor who pays a little or signs anything can <strong>restart the
            whole period</strong>.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The question arrives late, usually. Someone has been meaning to deal with an unpaid loan
        for a couple of years; a former employer still owes wages from a job that ended a while
        ago; a deposit dispute has been quietly unresolved since the last apartment. The first
        thing a Korean lawyer will check is not whether the claim is good. It is whether the claim
        is still alive.
      </p>
      <p className={P}>
        <Term ko="소멸시효">Somyeol sihyo</Term> — extinctive prescription — is the rule that a
        right you do not exercise for long enough stops being enforceable. It sits mostly in the{' '}
        <strong>Civil Act</strong> <span lang="ko">(민법)</span>, with a shorter period for
        commercial dealings in the <strong>Commercial Act</strong> <span lang="ko">(상법)</span>.
      </p>
      <p className={P}>
        Two things make this worth reading before you need it. The periods are shorter than most
        newcomers assume, and the ways to stop the clock are narrower. This guide covers how long
        you have, when the clock starts, what actually stops it, and what remains possible after
        the deadline has passed.
      </p>

      <GuideToc
        items={[
          { href: '#how-long', label: '1. How long you have' },
          { href: '#when-it-starts', label: '2. When the clock starts' },
          { href: '#stopping-it', label: '3. What actually stops the clock' },
          { href: '#acknowledgment', label: '4. Acknowledgment: the trap and the opportunity' },
          { href: '#after-expiry', label: '5. If the deadline has passed' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="how-long" className={H2}>
        1. How long you have
      </h2>
      <p className={P}>
        There is no single number. The period depends on what kind of claim it is, and the
        shortest applicable one governs.
      </p>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[620px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Period</th>
              <th className={TH}>Typical claims</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <strong>10 years</strong>
              </td>
              <td className={TD}>
                The default for ordinary claims — private loans between individuals, deposit
                returns, most contract claims that are not commercial.
              </td>
              <td className={TD}>Civil Act art. 162(1)</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>5 years</strong>
              </td>
              <td className={TD}>
                Claims arising from commercial transactions — where a business is on either side,
                this often displaces the 10-year rule.
              </td>
              <td className={TD}>Commercial Act art. 64</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>3 years</strong>
              </td>
              <td className={TD}>
                Anything payable in periods of a year or less (rent, interest, salaries),
                goods sold by producers and merchants, construction and design work, and the fees
                of doctors, lawyers, and other listed professionals. Wages and severance sit here
                under labor law.
              </td>
              <td className={TD}>Civil Act art. 163; Labor Standards Act art. 49</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>1 year</strong>
              </td>
              <td className={TD}>
                Hotel, restaurant, and entertainment-venue charges; rental of clothing and movable
                goods; wages of day labourers and performers; tuition and board owed to schools
                and teachers.
              </td>
              <td className={TD}>Civil Act art. 164</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>3 years / 10 years</strong>
              </td>
              <td className={TD}>
                Damages for a wrongful act — assault, a traffic accident, fraud, property damage.
                Three years from learning of both the harm and the person responsible, and in any
                event 10 years from the act.
              </td>
              <td className={TD}>Civil Act art. 766</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>10 years (reset)</strong>
              </td>
              <td className={TD}>
                A claim confirmed by a final judgment or a finalized payment order — even one that
                originally had a short period.
              </td>
              <td className={TD}>Civil Act art. 165</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        Notice what the table does to a familiar case. Unpaid wages feel like an ordinary debt,
        but they expire in <strong>3 years</strong>, not 10 — the deadline in{' '}
        <Link href="/guides/labor-employment/unpaid-wages-labor-office-vs-lawsuit" className={LINK}>
          Unpaid Wages
        </Link>
        . A housing deposit, by contrast, is an ordinary contract claim on the 10-year clock. Two
        disputes that feel equally stale can be years apart in reality.
      </p>

      <h2 id="when-it-starts" className={H2}>
        2. When the clock starts
      </h2>
      <p className={P}>
        The period runs from the moment the claim could first have been enforced — the day the
        loan fell due, the day the lease ended and the deposit became returnable, the payday the
        wages were not paid. Not from the argument that followed, and not from the last time you
        asked politely.
      </p>
      <p className={P}>
        Wrongful-act claims are the exception worth memorizing. Their short clock starts when you
        knew <em>both</em> the damage and who was responsible, which can be much later than the
        event — but the long 10-year clock runs from the act itself regardless of what you knew,
        and it stops everything when it expires. Where an injury surfaces years afterwards, or the
        culprit is identified late, the interaction of those two clocks is exactly the kind of
        question to put to a lawyer rather than estimate yourself.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/limitations-timeline.jpg"
          alt="Long morning shadows across a desk holding a closed document folder — a Korean limitation period runs from the day a claim first became enforceable"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The date that matters is rarely the one people remember. It is the day the claim first
          became enforceable — the due date, the end of the lease, the missed payday.
        </Caption>
      </figure>

      <h2 id="stopping-it" className={H2}>
        3. What actually stops the clock
      </h2>
      <p className={P}>
        Prescription is interrupted by exactly three categories of event (art. 168), and the
        practical difference between them is large.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>A claim asserted properly</strong> — in practice, filing. A lawsuit or a{' '}
          <Link href="/guides/civil-litigation/payment-orders" className={LINK}>
            payment order
          </Link>{' '}
          interrupts prescription. A demand letter counts only as an informal demand{' '}
          <Term ko="최고">(choego)</Term>: it holds the clock for <strong>6 months</strong>, and
          the interruption evaporates unless you file within them (art. 174) — the rule explained
          in{' '}
          <Link href="/guides/civil-litigation/certified-content-mail" className={LINK}>
            Certified Content Mail
          </Link>
          .
        </li>
        <li>
          <strong>Attachment or provisional attachment</strong> — seizing or freezing assets
          interrupts prescription as well as securing the money.
        </li>
        <li>
          <strong>The debtor&rsquo;s acknowledgment</strong> — the cheapest interruption of all,
          and the subject of the next section.
        </li>
      </ul>
      <p className={P}>
        Two refinements matter. First, interruption is not a pause: once the interrupting event
        ends, <strong>the full period starts again from zero</strong> (art. 178) — which is why a
        judgment is worth so much more than a promise. Second, a lawsuit that is dismissed,
        rejected, or withdrawn does not interrupt anything (art. 170); filing badly and
        withdrawing can leave you exactly where you started, minus the time.
      </p>

      <h2 id="acknowledgment" className={H2}>
        4. Acknowledgment: the trap and the opportunity
      </h2>
      <p className={P}>
        A debtor who admits the debt restarts the clock — and admission does not require a formal
        document. Paying part of what is owed, paying only the interest, asking in writing for
        more time, signing a repayment schedule: each is ordinarily treated as acknowledging the
        debt, and the full limitation period begins again from that day.
      </p>
      <p className={P}>
        Which side of that rule you are on changes everything. If you are owed money and the
        deadline is approaching, a partial payment or a written admission may be easier to obtain
        than a lawsuit is to file — and it buys the whole period again. If you are the one being
        chased over an old debt you believed long expired, a small goodwill payment can revive a
        claim that was days from dying.
      </p>
      <Callout variant="warning" title="Don't pay a little on an old debt to buy peace">
        Collection calls about aged debts often ask for a token payment or a signed schedule.
        Either can restart the limitation period on the entire amount — turning a claim that was
        nearly unenforceable into one with years of life left. If a debt is old enough that expiry
        is plausible, get the dates checked before you pay anything or sign anything.
      </Callout>

      <h2 id="after-expiry" className={H2}>
        5. If the deadline has passed
      </h2>
      <p className={P}>
        Expiry does not make the claim vanish from the court&rsquo;s file. It gives the other side
        a <strong>defense they must actually raise</strong>. A creditor can still file on an
        expired claim, and if the debtor never appears, never answers, and never mentions
        prescription, a judgment can be entered — which is one more reason not to ignore court
        papers, as{' '}
        <Link href="/guides/civil-litigation/youve-been-served-first-30-days" className={LINK}>
          You&rsquo;ve Been Served
        </Link>{' '}
        sets out.
      </p>
      <p className={P}>
        Read that in both directions. As a defendant, prescription is one of the strongest
        defenses available — but only if you raise it in the proceedings, on time. As a creditor
        with a stale claim, the position is weak rather than hopeless: the debtor may not raise
        it, may have acknowledged the debt more recently than you remember, or the claim may sit
        on a longer clock than you assumed. What decides all of it is dates and documents, not
        impressions.
      </p>
      <p className={P}>
        The suspension rules are narrow and worth knowing only for what they exclude. The Civil
        Act pauses expiry in a short list of situations — for people without legal capacity or a
        representative, between spouses until the marriage ends, over inherited estates until the
        heirs or administrator are settled, and where a natural disaster made interruption
        impossible (arts. 179–182). Being abroad is not on that list.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Assuming every debt gets 10 years.</strong> The claim you are most likely to
          have — unpaid wages, a professional&rsquo;s bill, goods sold by a business — is often on
          the 3-year or 5-year clock instead.
        </li>
        <li>
          <strong>Treating repeated demands as protection.</strong> Ten letters do not stop the
          clock any better than one; only the filing that follows within 6 months does.
        </li>
        <li>
          <strong>Counting from the wrong day.</strong> The start is the day the claim became
          enforceable, which is often earlier than the day the relationship broke down.
        </li>
        <li>
          <strong>Negotiating up to the deadline.</strong> Talks do not extend anything. File
          first if the date is close — a case can settle just as well after filing.
        </li>
        <li>
          <strong>Winning and then waiting.</strong> A judgment resets the clock to 10 years, not
          forever. If enforcement is not possible now, diarize the date rather than assume the
          title keeps indefinitely.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '1 / 3 / 5 / 10 years',
            what: 'The limitation period, depending on the claim (Civil Act arts. 162–164; Commercial Act art. 64). The shortest applicable period governs — check yours before anything else.',
          },
          {
            when: '3 years and 10 years',
            what: 'Wrongful-act damages: 3 years from learning of the harm and the person responsible, and 10 years from the act itself (Civil Act art. 766).',
          },
          {
            when: '6 months',
            what: 'After a formal demand such as certified content mail — file a lawsuit, payment order, or attachment within this window or the interruption is lost (art. 174).',
          },
          {
            when: '10 years, restarted',
            what: 'A claim confirmed by judgment or a finalized payment order runs afresh for 10 years (art. 165); any interruption likewise restarts the full period from zero (art. 178).',
          },
        ]}
      />
      <p className={P}>
        Two dates decide your options: the day your claim became enforceable, and today. Everything
        in this guide is the distance between them.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I left Korea for two years. Did that pause the clock on my claim?',
            a: (
              <p>
                No. Prescription is suspended only in the narrow situations the Civil Act lists —
                incapacity without a representative, claims between spouses, unsettled estates,
                natural disasters — and living abroad is not among them. Distance also does not
                prevent you from acting: a Korean lawyer can file for you while you are overseas,
                which is often the practical answer when a deadline is approaching and you cannot
                travel.
              </p>
            ),
          },
          {
            q: 'The person who owes me money has left Korea. Is my claim finished?',
            a: (
              <p>
                Their departure does not stop your clock either, so the deadline keeps running
                whether or not you can find them. A case can proceed even when a defendant cannot
                be served personally, including by public notice, though enforcement against
                someone with no Korean assets is a separate and harder question. If the money
                matters, get the claim filed before the period runs — locating assets can happen
                afterwards.
              </p>
            ),
          },
          {
            q: 'How does this relate to the deadline for reporting a crime?',
            a: (
              <p>
                They are different systems on different clocks. What this guide covers is the
                civil claim for money or damages; prosecution deadlines for criminal offenses run
                under criminal procedure and vary by offense. One matter can involve both — a
                fraud, for instance — and the two deadlines rarely line up, so treat them as
                separate questions and check each.
              </p>
            ),
          },
          {
            q: 'My old debt is from a contract governed by my home country’s law. Which period applies?',
            a: (
              <p>
                Then the answer is not automatically Korean law. Where a contract has a foreign
                element, which country&rsquo;s law governs — and therefore which limitation period
                applies — is itself a legal question that depends on the agreement and the
                circumstances. Bring the contract to the assessment rather than assuming either
                system&rsquo;s deadline.
              </p>
            ),
          },
          {
            q: 'The other side just offered me a small payment on a very old debt. Should I take it?',
            a: (
              <p>
                As the creditor, that offer is often worth more than the money: a partial payment
                is ordinarily treated as acknowledging the debt and restarts the whole period,
                giving you room to pursue the balance. Take it in a traceable form — a bank
                transfer, or a written schedule — rather than cash with nothing to show. As the
                debtor, the same rule is the trap described in section 4.
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
