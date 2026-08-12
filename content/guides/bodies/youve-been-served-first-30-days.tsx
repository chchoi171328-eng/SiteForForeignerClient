// Guide body: You've Been Served: First 30 Days
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #19).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr — see REVIEW-GUIDES.md.

import Image from 'next/image'
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

export default function YouveBeenServedFirst30Days() {
  return (
    <>
      <Image
        src="/assets/guides/served-hero.jpg"
        alt="A thick sealed envelope in an apartment mailbox — being served with a Korean lawsuit starts a 30-day answer clock"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            Court papers in Korea come in look-alike forms with different clocks:{' '}
            <strong>30 days</strong> to answer a lawsuit complaint, but only{' '}
            <strong>2 weeks</strong> to object to a payment order or a small-claims performance
            recommendation. <strong>Identify the document first.</strong>
          </li>
          <li>
            You count from the <strong>service date</strong> — and delivery to a family member or
            a coworker at your address can count as service to you.
          </li>
          <li>
            If no answer is filed, the court can treat the claim as{' '}
            <strong>admitted and rule without a hearing</strong> (Civil Procedure Act art. 257).
            The judgment is then enforceable against your accounts and pay.
          </li>
          <li>
            Everything runs <strong>in Korean</strong>, and being foreign pauses nothing — the
            clocks run whether or not you could read the envelope.
          </li>
          <li>
            Even a short answer that <strong>disputes the claim</strong> stops the no-hearing
            judgment and buys the case a real schedule.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        A thick envelope arrives by registered mail — or your spouse signs for it while you are at
        work. Inside is a stack of Korean documents with a court&rsquo;s name at the top and your
        name rendered in Hangul. Someone is suing you, or says the court has already told you to
        pay. What you do in the next few weeks decides whether this becomes a defended case or a
        judgment entered without you in the room.
      </p>
      <p className={P}>
        The core document is the <Term ko="소장">sojang</Term> — the complaint that opens a civil
        lawsuit. But two other documents arrive the same way, look similar, and carry shorter
        deadlines. The governing rules are in the <strong>Civil Procedure Act</strong>{' '}
        <span lang="ko">(민사소송법)</span> and, for small claims, the{' '}
        <strong>Trial of Small Claims Act</strong> <span lang="ko">(소액사건심판법)</span>.
      </p>
      <p className={P}>
        What matters is the clock — and knowing which clock you are on. This guide covers how to
        tell the documents apart, what &ldquo;served&rdquo; legally means, what the answer has to
        do, what happens if you do nothing, and the first 30 days in working order.
      </p>

      <GuideToc
        items={[
          { href: '#which-paper', label: '1. Which paper did you receive?' },
          { href: '#what-served-means', label: "2. What 'served' actually means" },
          { href: '#the-answer', label: '3. The 30-day answer' },
          { href: '#if-you-do-nothing', label: '4. If you do nothing' },
          { href: '#first-30-days', label: '5. The first 30 days, in order' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="which-paper" className={H2}>
        1. Which paper did you receive?
      </h2>
      <p className={P}>
        Three documents account for most court mail that lands on a defendant, and they are
        answered differently. Match yours before doing anything else — the title at the top of the
        first page decides your deadline.
      </p>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[640px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Document</th>
              <th className={TH}>What it is</th>
              <th className={TH}>Your deadline</th>
              <th className={TH}>If you miss it</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <strong>Complaint</strong> <span lang="ko">(소장)</span>
              </td>
              <td className={TD}>A full lawsuit has been filed; the court forwards you the claim.</td>
              <td className={TD}>
                <strong>Answer within 30 days</strong> of service (Civil Procedure Act art. 256)
              </td>
              <td className={TD}>
                The court may deem the claim admitted and rule without a hearing (art. 257).
              </td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Payment order</strong> <span lang="ko">(지급명령)</span>
              </td>
              <td className={TD}>
                A court order to pay, issued on the creditor&rsquo;s application alone — no
                hearing has happened.
              </td>
              <td className={TD}>
                <strong>Written objection within 2 weeks</strong> (art. 470)
              </td>
              <td className={TD}>
                It becomes final with the force of a judgment (art. 474) — enforceable as is.
              </td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Performance recommendation</strong> <span lang="ko">(이행권고결정)</span>
              </td>
              <td className={TD}>
                In small claims (up to ₩30 million), the court&rsquo;s recommendation that you pay
                as claimed — issued before any hearing.
              </td>
              <td className={TD}>
                <strong>Written objection within 2 weeks</strong> (Trial of Small Claims Act art.
                5-4)
              </td>
              <td className={TD}>
                It takes the effect of a final judgment.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The pattern to notice: the two short-deadline documents are issued <em>without anyone
        having heard your side</em>. They are designed to become final through silence. A timely
        objection to either one costs little and converts the matter into an ordinary case where
        both sides are heard — which is exactly why the objection window is short.
      </p>

      <h2 id="what-served-means" className={H2}>
        2. What &ldquo;served&rdquo; actually means
      </h2>
      <p className={P}>
        Your deadline runs from the day of <Term ko="송달">service (songdal)</Term> — the formal
        delivery of the papers — not from the day you personally sat down and read them. Three
        rules surprise people:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>You are not the only valid recipient.</strong> If the mail carrier cannot hand
          the papers to you at your address, delivery to a cohabiting family member — or, at a
          workplace, to a colleague or staff member capable of understanding what it is — can
          count as service on you (art. 186). The clock starts even if that person leaves the
          envelope on a shelf.
        </li>
        <li>
          <strong>Refusing the envelope does not help.</strong> Where receipt is refused without
          justifiable reason, the documents can simply be left at the place of service — and
          service is complete (art. 186(3)).
        </li>
        <li>
          <strong>The court can eventually proceed without reaching you at all.</strong> If your
          address cannot be established, service can be made by public notice{' '}
          <Term ko="공시송달">(gongsi songdal)</Term> — posting at the court — and the case moves
          on without you ever touching the papers. This is how people discover judgments years
          later, when an account is frozen. Section 4 covers the narrow way back.
        </li>
      </ul>
      <p className={P}>
        The practical rule for foreign residents: keep your registered address current, and treat
        anything court-shaped that reaches anyone in your household as if it were handed to you
        personally, on that date. Note the delivery date somewhere you cannot lose it —
        photograph the envelope and the postal slip.
      </p>

      <h2 id="the-answer" className={H2}>
        3. The 30-day answer
      </h2>
      <p className={P}>
        For a complaint, the response is an <Term ko="답변서">answer (dapbyeonseo)</Term> filed
        with the court — in Korean — within 30 days of service (art. 256). A real answer does
        three things: states which of the plaintiff&rsquo;s factual allegations you admit and
        which you deny, sets out your version with the grounds, and attaches or identifies your
        evidence. Filing can be done on paper or through the electronic litigation system.
      </p>
      <p className={P}>
        Two practical points inside that. First, precision beats volume: the complaint is a
        numbered list of factual claims, and the answer works through them — admitted, denied,
        unknown — before telling your story. Blanket outrage (&ldquo;everything is a lie&rdquo;)
        reads worse and does less than three clean denials with documents behind them. Second, if
        the deadline is closing in, <strong>a short answer that clearly disputes the claim
        preserves your position</strong> — it takes the no-hearing judgment off the table, and
        the detailed argument can follow in preparatory briefs. That is a stopgap, not a
        strategy; use the time it buys.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/served-response.jpg"
          alt="Blank court papers on a clipboard with marker tabs beside a pen — a Korean civil answer responds to the complaint point by point"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The complaint is a numbered list of factual claims; the answer takes a position on each
          one — admitted, denied, or unknown — and the case is then fought over the denials.
        </Caption>
      </figure>
      <p className={P}>
        On language: there is no English track. The complaint, your answer, the hearings, and the
        judgment all run in Korean, and arranging translation of what you receive — and of what
        you file — is on you. Budget for that early rather than after a deadline has been spent
        on deciphering.
      </p>

      <h2 id="if-you-do-nothing" className={H2}>
        4. If you do nothing
      </h2>
      <p className={P}>
        Silence is not neutral. If no answer is filed within the 30 days, the court may deem the
        claim&rsquo;s factual basis <strong>admitted</strong> and enter judgment{' '}
        <strong>without holding a hearing</strong> (art. 257) — a{' '}
        <Term ko="무변론판결">no-hearing judgment</Term>. You will receive that judgment by the
        same service rules as the complaint, and if no appeal is filed{' '}
        <strong>within 2 weeks of its service</strong> (art. 396), it becomes final. After that,
        the plaintiff can enforce: bank accounts, wages, deposits, property.
      </p>
      <p className={P}>
        The escape hatches are real but narrow, and each is a worse position than answering on
        time. An answer disputing the claim filed <em>before the judgment is actually
        pronounced</em> still blocks the no-hearing route (art. 257 proviso). After judgment, the
        2-week appeal is the ordinary correction. And where you genuinely never knew — a
        public-notice judgment discovered when your account froze — a late appeal{' '}
        <Term ko="추완항소">(chuwan hangso)</Term> may be available within 2 weeks of the day the
        obstacle ended, which in practice means the day you actually learned of the judgment
        (art. 173). Those cases turn on proving what you knew and when — records again.
      </p>
      <Callout variant="warning" title="Do not negotiate instead of filing">
        Calling the plaintiff to &ldquo;sort it out&rdquo; does not stop the court&rsquo;s clock —
        only a filing does. Talks and filings run on separate tracks: you can settle a case that
        has been answered, but you cannot un-miss a deadline because negotiations felt promising.
        File first, talk second.
      </Callout>

      <h2 id="first-30-days" className={H2}>
        5. The first 30 days, in order
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Fix the dates — today',
            body: 'Photograph the envelope, the delivery slip, and every page. Establish the exact service date (including service on a family member) and calendar the deadline for your document type from section 1.',
          },
          {
            title: 'Identify the document and the claim',
            body: 'Complaint, payment order, or performance recommendation — then have the substance translated so you know exactly what is alleged, by whom, and for how much.',
          },
          {
            title: 'Gather your side of the paper',
            body: 'Contracts, transfers, receipts, messages with the plaintiff. Korean civil cases are decided overwhelmingly on documents — what you can show matters more than what you can explain.',
          },
          {
            title: 'Decide who handles it',
            body: 'Objections and simple answers can be filed by the party directly; whether self-handling is wise depends on the amount and the complexity. Decide deliberately — with enough days left to change course.',
          },
          {
            title: 'File within the deadline',
            body: 'The answer or objection, in Korean, on paper or electronically. Keep the filing receipt.',
          },
          {
            title: 'Expect settlement tracks — they are normal',
            body: 'Courts actively route civil cases toward mediation (조정) and issue settlement recommendation decisions, which themselves become final unless objected to within 2 weeks. Engaging with these is standard practice, not weakness.',
          },
        ]}
      />

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>&ldquo;It&rsquo;s obviously a misunderstanding, so I&rsquo;ll ignore it.&rdquo;</strong>{' '}
          The court cannot see that it is a misunderstanding unless you file it. Absurd claims win
          by default exactly as often as strong ones.
        </li>
        <li>
          <strong>Assuming leaving Korea ends the case.</strong> It does not. The case can proceed
          — by service abroad or ultimately by public notice — and the judgment waits for your
          return, your Korean accounts, or cross-border enforcement. Departure changes logistics,
          not liability.
        </li>
        <li>
          <strong>Missing that someone else was served for you.</strong> Ask your household and
          workplace whether anything court-shaped arrived — the deadline may already be running.
        </li>
        <li>
          <strong>Spending the 30 days on translation and shock.</strong> The deadline consumes
          badly. Getting the document identified and translated is a first-week task, not a
          fourth-week one.
        </li>
        <li>
          <strong>Signing whatever resolves it fastest.</strong> A settlement reached under
          deadline panic binds like any other. If you are going to concede, concede knowingly —
          the numbers, the interest, the costs.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '30 days',
            what: 'From service of a complaint — file the answer (Civil Procedure Act art. 256), or risk judgment without a hearing (art. 257).',
          },
          {
            when: '2 weeks',
            what: 'From service of a payment order (art. 470) or a small-claims performance recommendation (Trial of Small Claims Act art. 5-4) — written objection, or it becomes final with judgment force.',
          },
          {
            when: '2 weeks',
            what: 'From service of a judgment — the appeal window (art. 396). It is a fixed statutory period.',
          },
          {
            when: '2 weeks',
            what: 'From actually learning of a judgment served by public notice — the late-appeal window (art. 173), proven by records of when you learned.',
          },
        ]}
      />
      <p className={P}>
        Start by establishing two facts: what the document is, and what date it was served. Every
        decision after that has a number attached to it.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Everything I received is in Korean. Will the court provide a translation?',
            a: (
              <p>
                No — in domestic civil litigation the documents come as they are, and translating
                what you received and what you file is your responsibility. Interpretation at a
                hearing is arranged case by case where the court finds it necessary; do not rely
                on it appearing automatically. Build translation into your first week, not your
                last.
              </p>
            ),
          },
          {
            q: "I'm PCSing / leaving Korea before this resolves. What happens to the case?",
            a: (
              <p>
                It continues without you unless you arrange otherwise. Appoint someone to receive
                documents or retain counsel who will, keep the court informed of a serviceable
                address, and decide the case&rsquo;s strategy before you fly. A judgment entered
                in your absence can reach Korean assets immediately and can be the basis for
                enforcement efforts abroad — distance is thinner protection than it feels.
              </p>
            ),
          },
          {
            q: 'The amount claimed is inflated far beyond what I could owe. Does that change anything?',
            a: (
              <p>
                Not procedurally — an exaggerated claim carries the same deadlines as an honest
                one, and silence admits the inflated number, not the fair one. Answer, dispute the
                excess, and make the plaintiff prove the figure. Overclaiming is common precisely
                because default judgments do not haggle.
              </p>
            ),
          },
          {
            q: 'They owe me money too. Can I sue back in the same case?',
            a: (
              <p>
                Often yes — a counterclaim <span lang="ko">(반소)</span> can bring your related
                claim into the same proceeding, heard by the same judge on the same record. Whether
                it belongs there or in a separate filing is a strategy question that depends on
                how the claims relate. Raise it when the answer is being prepared, not as an
                afterthought.
              </p>
            ),
          },
          {
            q: 'I already missed the 30 days. Is it over?',
            a: (
              <p>
                Check where the case stands the same day. Until the judgment is actually
                pronounced, an answer disputing the claim still blocks the no-hearing judgment.
                After a judgment, the 2-week appeal runs from its service. And a judgment you
                never knew about — served by public notice — may still be open to a late appeal
                counted from the day you learned of it. Which door is open depends entirely on
                dates, so establish them first.
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
