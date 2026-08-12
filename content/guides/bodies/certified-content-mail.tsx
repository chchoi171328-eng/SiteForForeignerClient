// Guide body: Certified Content Mail (내용증명)
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #20).
// Statute references verified against law.go.kr / casenote.kr / easylaw.go.kr / epost.go.kr — see REVIEW-GUIDES.md.

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

export default function CertifiedContentMail() {
  return (
    <>
      <Image
        src="/assets/guides/content-mail-hero.jpg"
        alt="Three identical sealed envelopes fanned on a desk — Korean certified content mail is issued in three certified copies"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            <strong>Certified content mail</strong> <span lang="ko">(내용증명)</span> is a postal
            service: the post office certifies <strong>what you sent and when</strong>, and keeps
            a copy for <strong>3 years</strong>. It is evidence, not an order — it forces nothing
            by itself.
          </li>
          <li>
            Its legal work is real but specific: it <strong>proves notices were given</strong>,
            fixes dates, and — as a formal demand — can <strong>provisionally interrupt the
            statute of limitations</strong>.
          </li>
          <li>
            That interruption survives only if you <strong>escalate within 6 months</strong> —
            lawsuit, payment order, or attachment (Civil Act art. 174). A letter with no
            follow-up preserves nothing.
          </li>
          <li>
            Anyone can send one from any post office or online, <strong>no lawyer required</strong>
            — and foreign-language letters are accepted.
          </li>
          <li>
            Your letter is <strong>evidence against you too</strong>: write facts and a clear
            demand, not threats and admissions.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        Sooner or later, most disputes in Korea produce the same advice from every Korean friend
        and colleague: &ldquo;send a <em>naeyong jeungmyeong</em> first.&rdquo; A deposit that
        isn&rsquo;t coming back, an invoice nobody answers, a contract the other side quietly
        stopped performing — the standard opening move is a formal letter through the post
        office, not a phone call and not yet a lawsuit.
      </p>
      <p className={P}>
        <Term ko="내용증명">Certified content mail</Term> is a certification service of the
        postal system, run under the Postal Service Act&rsquo;s implementing rules{' '}
        <span lang="ko">(우편법 시행규칙)</span>: you bring three identical copies of a letter,
        and the post office certifies their content and the sending date — one copy to the
        recipient, one back to you, one kept at the post office. Nothing about it involves a
        court.
      </p>
      <p className={P}>
        What matters is knowing exactly what this letter does and does not accomplish — because
        both overestimating it and skipping it are expensive. This guide covers its actual legal
        effects, when to send one and when not to, how to write it, and the 6-month rule that
        decides whether it protected your claim at all.
      </p>

      <GuideToc
        items={[
          { href: '#what-it-is', label: '1. What it is — and what it is not' },
          { href: '#legal-effects', label: '2. What it actually does, legally' },
          { href: '#when-to-send', label: '3. When to send one — and when not to' },
          { href: '#how-to-write', label: '4. How to write one' },
          { href: '#sending', label: '5. Sending it — post office, online, and proof of delivery' },
          { href: '#after-sending', label: '6. After you send: the 6-month rule' },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="what-it-is" className={H2}>
        1. What it is — and what it is not
      </h2>
      <p className={P}>
        The mechanics are simple. The post office compares your three copies, stamps each with
        the sending date and a certification that this exact text was mailed, sends one to the
        other side, and archives one for <strong>3 years</strong> — during which either the
        sender or the recipient can request re-certification or inspection of the archived copy.
        The result is tamper-proof evidence of <em>content + date + parties</em>.
      </p>
      <p className={P}>
        What it is not: a court document, an enforcement instrument, or an obligation on the
        recipient to reply. Ignoring one carries no penalty by itself. Its force comes from what
        it sets up — the record it creates for the negotiation, the lawsuit, or the{' '}
        <Link href="/guides/civil-litigation/youve-been-served-first-30-days" className={LINK}>
          litigation
        </Link>{' '}
        that may follow. Think of it as the first page of a future court file, written while
        everyone is still being polite.
      </p>

      <h2 id="legal-effects" className={H2}>
        2. What it actually does, legally
      </h2>
      <div className="my-6 overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full min-w-[620px] border-collapse">
          <thead className="bg-slate-50 border-b border-gray-200">
            <tr>
              <th className={TH}>Effect</th>
              <th className={TH}>How it works</th>
              <th className={TH}>Basis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className={TD}>
                <strong>Proof of content and date</strong>
              </td>
              <td className={TD}>
                The certified text and sending date are beyond dispute later — no more &ldquo;I
                never said that&rdquo; / &ldquo;you never asked.&rdquo;
              </td>
              <td className={TD}>Postal certification (우편법 시행규칙)</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Making notices effective</strong>
              </td>
              <td className={TD}>
                Many legal acts — terminating a contract, refusing a lease renewal, setting a
                cure deadline — take effect when the notice <em>reaches</em> the other side.
                Certified mail plus delivery certification proves both the notice and its
                arrival.
              </td>
              <td className={TD}>Civil Act art. 111 (arrival principle)</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Pausing the limitations clock</strong>
              </td>
              <td className={TD}>
                A formal demand <Term ko="최고">(choego)</Term> provisionally interrupts
                prescription — but only holds if followed by lawsuit, attachment, or similar
                within <strong>6 months</strong>.
              </td>
              <td className={TD}>Civil Act art. 174</td>
            </tr>
            <tr>
              <td className={TD}>
                <strong>Negotiation pressure</strong>
              </td>
              <td className={TD}>
                Not a legal effect, but the practical one: it signals that you know the process
                and are prepared to use it. Many disputes settle at this step.
              </td>
              <td className={TD}>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The third row deserves emphasis because it is the one people get wrong. If your claim is
        approaching its limitation period — 3 years for wages, for instance, or 10 for ordinary
        contract claims — the letter buys you a conditional 6 months, not a reset. Section 6
        covers what has to happen inside that window.
      </p>

      <h2 id="when-to-send" className={H2}>
        3. When to send one — and when not to
      </h2>
      <p className={P}>
        <strong>Send one</strong> when a dispute needs a formal record: demanding payment of a
        debt or deposit, giving a lease notice that must be provable, terminating a contract for
        breach, setting a final deadline before you escalate, or answering an unfounded demand
        against you in a form that will read well in court. In the deposit context, the
        letter&rsquo;s specific role in the recovery sequence is covered in{' '}
        <Link
          href="/guides/real-estate-lease-disputes/getting-your-housing-deposit-back"
          className={LINK}
        >
          Getting Your Housing Deposit Back
        </Link>
        .
      </p>
      <p className={P}>
        <strong>Think twice</strong> in two situations. First, when speed matters more than
        paper: if the deadline is days away, file — a lawsuit or payment order interrupts
        prescription in its own right, and the letter can wait. Second, when warning the other
        side is itself the risk: a debtor who receives a formal demand has weeks of notice to
        move assets before you can attach them. Where asset flight is realistic, the usual
        sequence inverts — secure first, demand second. That call is worth professional advice
        before, not after.
      </p>

      <h2 id="how-to-write" className={H2}>
        4. How to write one
      </h2>
      <p className={P}>
        There is no prescribed form. A letter that works has five parts, in order: who you are
        and who the recipient is (names, addresses); the facts, with dates and amounts, stated
        neutrally; what you demand, precisely (&ldquo;return ₩20,000,000 to the account
        below&rdquo;); a deadline (commonly around two weeks); and what follows if it passes
        (&ldquo;I will pursue legal proceedings without further notice&rdquo;). One page is
        usually enough. Attach nothing you cannot afford to show a judge later.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/content-mail-writing.jpg"
          alt="Hands folding a finished letter beside an envelope — a Korean certified content mail letter states facts, a demand, and a deadline"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Facts, dates, amounts, one demand, one deadline. The letter is written for two readers:
          the recipient today, and a judge later.
        </Caption>
      </figure>
      <p className={P}>
        On language: the rules accept letters written legibly in Korean, Chinese characters, or
        other foreign languages — so an English letter can be certified. Practically, a Korean
        text (or a bilingual one) is usually the better tool: the recipient, their lawyer, and
        any court will work in Korean, and you want nothing lost or disputed in translation.
      </p>
      <Callout variant="warning" title="Your letter is evidence against you too">
        Everything in it can be quoted back later. Skip insults and accusations of crimes —
        aggressive language can create separate legal problems and reads badly in court. And be
        careful with the facts you concede: an offhand &ldquo;I know I still owe part of
        this&rdquo; can outlive the negotiation it was written for. State your position; do not
        argue your weaknesses.
      </Callout>

      <h2 id="sending" className={H2}>
        5. Sending it — post office, online, and proof of delivery
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Prepare three identical copies',
            body: 'Signed, dated, with both addresses. At the counter, the post office verifies the copies match and stamps the certification on each.',
          },
          {
            title: 'Or send it online',
            body: "The e-certified mail service on the Internet post office (인터넷우체국) accepts letters around the clock, prints and delivers them, and archives the text electronically for the same 3 years.",
          },
          {
            title: 'Add delivery certification (배달증명)',
            body: 'A small add-on that documents the date the letter was delivered — the piece you need when a notice takes effect on arrival. Add it at sending, and keep the confirmation.',
          },
          {
            title: 'Keep your certified copy and every receipt',
            body: 'Your copy, the mailing receipt, and the delivery confirmation are the evidence set. If the envelope comes back refused or unclaimed, keep it sealed — the fact of refusal is itself worth proving.',
          },
        ]}
      />
      <p className={P}>
        If the letter cannot be delivered — the recipient moved, or refuses the mail — do not
        treat that as failure. The attempt is documented, refusal can be shown, and the next
        steps (address inquiries through court proceedings, service by other means) belong to
        the litigation stage, where the court&rsquo;s own service machinery takes over.
      </p>

      <h2 id="after-sending" className={H2}>
        6. After you send: the 6-month rule
      </h2>
      <p className={P}>
        A demand letter opens a window, and the window closes. If the letter served as your{' '}
        <Term ko="최고">formal demand</Term> to preserve a claim near its limitation period, the
        interruption holds only if, <strong>within 6 months</strong>, you follow with a lawsuit,
        participation in bankruptcy proceedings, a summons for settlement, or a provisional
        attachment or injunction (Civil Act art. 174). Miss the window and the clock behaves as
        if the letter never existed.
      </p>
      <p className={P}>
        So decide the follow-up before you send. The usual escalation paths — the payment order
        for undisputed money claims, the small-claims track up to ₩30 million, the ordinary
        lawsuit — each have their own economics, and which fits depends on the amount and
        whether the other side will fight. If the letter produces a reply and a negotiation, put
        any deal in writing with dates and amounts; if it produces silence, treat the silence as
        an answer and move within your window.
      </p>

      <h2 id="common-mistakes" className={H2}>
        7. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Treating the letter as the remedy.</strong> It is the overture, not the
          performance. A recipient who ignores it faces nothing until you escalate — so a letter
          without a follow-up plan is a bluff on paper.
        </li>
        <li>
          <strong>Missing the 6-month follow-up</strong> and losing the limitations protection
          the letter was sent to create.
        </li>
        <li>
          <strong>Writing in anger.</strong> Threats, insults, and criminal accusations create
          risks for you and value for the other side. If you cannot write it coldly today, write
          it tomorrow.
        </li>
        <li>
          <strong>Vague demands.</strong> &ldquo;Resolve this matter promptly&rdquo; proves you
          complained; it does not prove what you demanded. Name the amount, the account, the
          date.
        </li>
        <li>
          <strong>Sending to a stale address.</strong> Check the recipient&rsquo;s current
          address first — a contract, a business registry extract, the property register. A
          perfectly drafted letter to an old apartment proves very little.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '6 months',
            what: 'After a demand letter that interrupts prescription — file a lawsuit, payment order, or attachment within this window, or the interruption evaporates (Civil Act art. 174).',
          },
          {
            when: 'Your deadline in the letter',
            what: 'Commonly around two weeks. Diary it — the credibility of every later step depends on you doing what the letter said you would.',
          },
          {
            when: '3 years',
            what: 'How long the post office keeps the certified copy; either party can request re-certification or inspection in that period.',
          },
        ]}
      />
      <p className={P}>
        Before sending, know two dates: when your claim&rsquo;s limitation period ends, and what
        you will do the day after your letter&rsquo;s deadline passes.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'I received a 내용증명. Have I been sued?',
            a: (
              <p>
                No — it is a private letter, not a court document, and no deadline in it is set
                by law. But do not toss it: it usually signals a lawsuit being prepared, and your
                response (or silence) will be evidence later. Read it carefully, check what is
                actually true, and answer deliberately — in provable form — rather than by an
                angry phone call. If a court document does arrive later, the clocks change
                completely.
              </p>
            ),
          },
          {
            q: 'Can I send one in English?',
            a: (
              <p>
                Yes — the postal rules accept legibly written foreign-language letters, so an
                English letter can be certified and sent. Whether it should be is a different
                question: the recipient and any later court operate in Korean, so a Korean or
                bilingual version usually does the persuading. If the letter matters, have the
                Korean text prepared or checked by someone who drafts them.
              </p>
            ),
          },
          {
            q: "The recipient ignored my letter. Now what?",
            a: (
              <p>
                Exactly what the letter promised. Silence past your deadline is your cue to
                escalate — payment order, small claims, or lawsuit, depending on the amount and
                the dispute. The letter has already done its work: the demand, the date, and the
                ignored deadline are now on the record for the court that comes next.
              </p>
            ),
          },
          {
            q: 'Does sending one stop my claim from expiring?',
            a: (
              <p>
                Only conditionally. As a formal demand it interrupts prescription provisionally,
                but the interruption survives only if you follow up within 6 months with a
                lawsuit, attachment, or similar step (Civil Act art. 174). Repeating letters does
                not extend this — the follow-up must be one of the listed proceedings, not
                another envelope.
              </p>
            ),
          },
          {
            q: 'Do I need a lawyer to send one?',
            a: (
              <p>
                No — individuals send certified content mail themselves every day, at the counter
                or online, and for a straightforward demand that is often enough. Letters sent
                under an attorney&rsquo;s name are also common in practice, typically where the
                dispute is likely to escalate and the drafting — what to demand, what to concede,
                what not to write — starts to matter as much as the sending.
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
