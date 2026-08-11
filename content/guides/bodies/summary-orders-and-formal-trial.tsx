// Guide body: Summary Orders (약식명령) and Formal Trial
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #15).
// Statute references verified against casenote.kr / law.go.kr — see REVIEW-GUIDES.md.

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
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function SummaryOrdersAndFormalTrial() {
  return (
    <>
      <Image
        src="/assets/guides/summary-order-hero.jpg"
        alt="A registered-mail envelope on a desk beside reading glasses — the Korean summary order arrives by post with a 7-day clock inside"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A <Term ko="약식명령">summary order</Term> is a criminal case decided{' '}
            <strong>on paper</strong>: a judge imposes a fine without a hearing, and the decision
            arrives by mail.
          </li>
          <li>
            You have <strong>7 days from receiving it</strong> to demand a formal trial — free,
            by a simple written request. Silence makes the order{' '}
            <strong>final, with the force of a judgment</strong>.
          </li>
          <li>
            If you contest, the court cannot impose a <strong>heavier type</strong> of punishment
            than the order — but <strong>the fine itself can go up</strong> within the same type.
            Decide with that trade-off on the table.
          </li>
          <li>
            Accepting means paying <strong>within 30 days</strong> — and it means a{' '}
            <strong>criminal conviction on your record</strong>, not a parking ticket.
          </li>
          <li>
            Can&rsquo;t pay at once? Installments, deferral, and — for fines up to ₩5 million —{' '}
            <strong>community-service substitution</strong> exist, each with its own window.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        The summary order is how most minor criminal cases in Korea actually end: no courtroom, no
        testimony — a prosecutor requests a fine, a judge reviews the file and issues the order,
        and the whole thing reaches you as a registered letter (Criminal Procedure Act art. 448).
        For a foreign resident the format is the danger. The most consequential mail you will
        receive in Korea looks like all the other Korean-language mail you cannot comfortably
        read, and it carries a 7-day clock.
      </p>
      <p className={P}>
        This guide explains what the order is, how to read the envelope, the fork it puts you at —
        accept or contest — and what happens on each path, including the payment machinery and the
        narrow exits if you find the letter late. If the case is still at the police stage, start
        earlier in the sequence with{' '}
        <Link href="/guides/criminal-defense/received-a-police-summons" className={LINK}>
          Received a Police Summons
        </Link>
        .
      </p>

      <GuideToc
        items={[
          { href: '#what-it-is', label: '1. A criminal case decided by mail' },
          { href: '#the-envelope', label: "2. The envelope: what you're holding" },
          { href: '#the-fork', label: '3. The 7-day fork: accept or contest' },
          { href: '#choosing', label: '4. Choosing: when contesting makes sense' },
          { href: '#paying', label: "5. Paying — and what if you can't, or didn't" },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="what-it-is" className={H2}>
        1. A criminal case decided by mail
      </h2>
      <p className={P}>
        The summary procedure exists for cases a court can resolve with a fine or similar minor
        penalty: the prosecutor files the request instead of an indictment for trial, and the
        judge decides on the documents alone (art. 448). No summons to appear, no hearing — the
        first you learn of the outcome is the order itself. If the judge thinks the case is not
        suited to paper — the facts are contested, the penalty looks wrong — the court routes it
        to ordinary trial instead (art. 450).
      </p>
      <p className={P}>
        This is the standard ending for first-time, lower-level offenses: a low blood-alcohol{' '}
        <Link href="/guides/criminal-defense/dui-in-korea" className={LINK}>
          DUI
        </Link>
        , a minor scuffle, small-value cases. Standard does not mean trivial — the fine is a
        criminal sentence, and the record it creates is the part foreigners most often
        underestimate.
      </p>

      <p className={P}>
        One cousin worth telling apart: the on-the-spot{' '}
        <Term ko="즉결심판">immediate trial</Term> used for very petty offenses, requested by the
        police rather than a prosecutor and handled in minutes. It runs on its own rules and its
        own short objection window. If your document says 즉결심판 rather than 약식명령, the
        framework differs in detail — but the reflex this guide teaches is identical: translate
        the paper the day it arrives and count the days printed on it.
      </p>

      <h2 id="the-envelope" className={H2}>
        2. The envelope: what you&rsquo;re holding
      </h2>
      <p className={P}>
        The order names the offense, the fine, and your right to demand a formal trial within{' '}
        <strong>7 days of receiving it</strong>. It is in Korean, and the clock does not pause for
        translation — so the moment such a letter arrives, photograph every page and get it read
        the same day, by your lawyer or a translator, not next week by a colleague.
      </p>
      <Callout variant="warning" title="Registered mail is the trap for movers">
        Orders are served to your registered address. If you have moved without updating your
        address records, service can still be deemed effective in ways that start the clock — or
        push the case down stranger paths — without you ever holding the letter. Keeping your
        address registration current is criminal-defense hygiene, not paperwork.
      </Callout>

      <h2 id="the-fork" className={H2}>
        3. The 7-day fork: accept or contest
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/summary-order-calendar.jpg"
          alt="A blank calendar and a red pin — the 7-day window to demand a formal trial after a Korean summary order"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Seven days, counted from the day the order reached you — enough time for a translation,
          one consultation, and a considered decision, but only if all three start on day one.
        </Caption>
      </figure>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Accept.</strong> Do nothing (or simply pay): after 7 days the order becomes
          final with the same effect as a judgment (art. 457). The case ends, the fine is due —
          and the conviction stands permanently.
        </li>
        <li>
          <strong>Contest.</strong> File a written demand for formal trial with the court that
          issued the order, within the 7 days (art. 453). It costs nothing to file, the case
          converts to an ordinary trial — public hearing, evidence, interpretation provided (see{' '}
          <Link href="/guides/criminal-defense/police-interview-rights-and-interpreters" className={LINK}>
            the interview-and-interpreters guide
          </Link>{' '}
          for how language support works) — and you can withdraw the demand later if you change
          course.
        </li>
      </ul>
      <p className={P}>
        Filing the demand is deliberately easy: a short written form naming the order and stating
        that you request formal trial, submitted to the court that issued it — in person, by
        mail, or through your lawyer, who can prepare and file it the same day the order is
        translated. Nothing about the filing commits you to a strategy yet; it simply keeps the
        courtroom door open while you decide how hard to push, and the demand can be withdrawn
        if the calculus changes.
      </p>
      <p className={P}>
        The safety rail, honestly stated: on your demand, the court cannot impose a{' '}
        <strong>heavier type</strong> of punishment than the order — a fine cannot become prison
        (art. 457-2(1)). But within the same type it can move: the fine{' '}
        <strong>can be increased</strong>, with the court required to state its sentencing reasons
        when it does (art. 457-2(2)). Contesting is a real option, not a free replay.
      </p>

      <h2 id="choosing" className={H2}>
        4. Choosing: when contesting makes sense
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>You dispute the facts</strong> — you did not do what the order says, or the
          version it punishes is materially wrong. Paper procedure never heard you; trial will.
        </li>
        <li>
          <strong>The amount is wrong for the conduct</strong> — mitigation the file never
          contained: context, restitution, a settlement. For offenses where the victim&rsquo;s
          wish controls, a withdrawal before the first-instance judgment can still end the case
          entirely — the mechanics live in{' '}
          <Link href="/guides/criminal-defense/hapui-settlement-in-criminal-cases" className={LINK}>
            the settlement guide
          </Link>
          .
        </li>
        <li>
          <strong>The conviction itself is the problem</strong> — where your work, licensing, or
          plans make any criminal record disproportionate, trial is the only room where acquittal
          or a non-conviction outcome can happen. A criminal outcome can affect your stay in
          Korea; factor it into this decision from the start.
        </li>
        <li>
          <strong>Against all that:</strong> trial takes months, the fine can rise, and a weak
          defense usually lands where it started. Contest as a strategy, not a reflex — a
          one-consultation review of the file is exactly what the 7 days are for.
        </li>
      </ul>

      <h2 id="paying" className={H2}>
        5. Paying — and what if you can&rsquo;t, or didn&rsquo;t
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>30 days.</strong> A final fine must be paid within 30 days of finality (Criminal
          Act art. 69(1)). Unpaid fines convert to{' '}
          <Term ko="노역장 유치">workhouse detention</Term> — confinement with labor, from 1 day
          up to 3 years, at a daily rate the judgment sets (art. 69(2)).
        </li>
        <li>
          <strong>If cash is the problem</strong> — installments and deferral can be sought from
          the prosecution, and fines of ₩5 million or less can be converted to{' '}
          <strong>community service</strong> on application to the prosecutor within 30 days of
          the payment order. Ask before default, not after.
        </li>
        <li>
          <strong>If you never saw the order</strong> — where the 7 days passed without any fault
          of yours (service you could not have known of), recovery of the right to demand trial
          exists but is narrow and fact-driven: act immediately upon learning, with counsel,
          before the collection machinery settles the question for you.
        </li>
      </ul>

      <p className={P}>
        Collection, once it starts, is unglamorous and persistent: payment notices from the
        prosecution, then compulsory measures against wages and accounts, with the workhouse
        conversion as the endpoint for those who simply stop responding. None of it is designed
        to ambush you — every stage begins with mail. Which returns to this guide&rsquo;s single
        deepest habit for foreign residents: an address where Korean mail actually reaches you,
        and a same-day translation rule for anything official that arrives.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Letting Korean mail age on the table.</strong> The order looks like any other
          official envelope; day 5 of 7 is a bad day to start translating.
        </li>
        <li>
          <strong>Treating the fine as an administrative penalty.</strong> A summary-order fine
          is a criminal conviction — relevant to background checks and future proceedings — which
          is precisely what should drive the accept-or-contest decision.
        </li>
        <li>
          <strong>Contesting on principle without pricing the risk</strong> — the fine can rise,
          and months of trial are a cost even when it doesn&rsquo;t.
        </li>
        <li>
          <strong>Paying instantly and regretting it</strong> — payment does not extend or revive
          the 7-day window; take the week to decide, then act once.
        </li>
        <li>
          <strong>Going silent on a fine you cannot pay.</strong> The installment,
          deferral, and community-service routes all work before default; after it, the workhouse
          conversion is the system&rsquo;s answer.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '7 days from receipt',
            what: 'To file the written demand for a formal trial (Criminal Procedure Act art. 453) — silence makes the order final with the force of a judgment (art. 457).',
          },
          {
            when: '30 days from finality',
            what: 'To pay the fine (Criminal Act art. 69(1)) — unpaid fines convert to workhouse detention.',
          },
          {
            when: '30 days from the payment order',
            what: 'To apply to the prosecutor for community-service substitution, for fines of ₩5 million or less.',
          },
        ]}
      />
      <p className={P}>
        Start with two timestamps: the day the envelope actually reached your hands, and the date
        printed on the order. Every option in this guide is measured from those.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Is a summary-order fine really a criminal record?',
            a: (
              <p>
                Yes — it is a criminal sentence imposed by a court, and it enters your criminal
                history like a conviction after trial. How visible it is depends on who is asking
                and under what law, but the safe planning assumption for work, licensing, and
                immigration purposes is that it exists and can surface. That is why the 7-day
                decision deserves more thought than the amount alone suggests.
              </p>
            ),
          },
          {
            q: 'If I demand a trial, can I end up worse off?',
            a: (
              <p>
                Partly protected, partly yes: the punishment cannot change to a heavier type — a
                fine cannot become imprisonment on your demand — but the fine amount can increase,
                with the court stating its reasons. The realistic downside is usually the months
                of proceedings plus a moderately higher fine in a losing case; the upside in a
                winning one is acquittal or a meaningfully different outcome. Price both before
                filing.
              </p>
            ),
          },
          {
            q: "I can't read the order. Does that pause anything?",
            a: (
              <p>
                No — the 7 days run from receipt regardless of language. Translation is your first
                same-day task, and if you intend to contest, the demand itself is a short document
                a lawyer can file quickly once the order is understood. Treat the language barrier
                as a reason to move faster, not a reason the deadline might forgive.
              </p>
            ),
          },
          {
            q: 'The order was sent while I was abroad / to my old address. What now?',
            a: (
              <p>
                Move immediately: whether the clock ever validly started depends on how service
                was effected, and where the window passed genuinely without your fault, recovery
                of the trial-demand right is possible — but it is narrow, fact-specific, and gets
                harder the longer collection has been running. Bring every date and envelope you
                have to a lawyer the week you learn of it.
              </p>
            ),
          },
          {
            q: 'Will this affect my visa renewal?',
            a: (
              <p>
                A criminal outcome can affect your stay in Korea and future applications — which
                cuts both ways here: accepting quietly creates a record, while contesting risks a
                larger fine but opens the only path to no conviction at all. There is no general
                rule worth trusting; have the specific offense, amount, and your status assessed
                together before the 7 days run out.
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        The summary order is one exit from the sequence that starts long before it — the
        investigation and its decision points are covered in{' '}
        <Link href="/guides/criminal-defense/received-a-police-summons" className={LINK}>
          Received a Police Summons
        </Link>
        .
      </p>

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of August 2026. Updated when laws change.
      </p>
    </>
  )
}
