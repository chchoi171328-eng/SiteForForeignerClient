// Guide body: Received a Police Summons
// Authored via the english-guide-writer skill workflow (guide-production Phase 1, #3).
// Statute references verified against law.go.kr / casenote.kr — see REVIEW-GUIDES.md.
// SOFA/visa passages are deliberately perspective-level (skill rule 5-6).

import Image from 'next/image'
import Link from 'next/link'
import {
  GuideSummary,
  GuideToc,
  Term,
  Caption,
  Callout,
  GuideFlow,
  GuideFaq,
} from '@/components/guide/GuideComponents'

const H2 = 'text-2xl font-serif font-bold text-navy-900 mt-12 mb-4 scroll-mt-28'
const P = 'text-gray-700 leading-relaxed mb-4'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function ReceivedAPoliceSummons() {
  return (
    <>
      <Image
        src="/assets/guides/police-summons-hero.jpg"
        alt="An unopened official envelope on a desk — receiving a police summons in Korea as a foreigner"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A police summons is a <strong>request to come in for questioning</strong> during an
            investigation — it is not an arrest, and it is not a verdict on anything.
          </li>
          <li>
            Before you go, find out two things: whether you are being asked in as a{' '}
            <strong>suspect or as a witness</strong>, and what offense is being investigated. You
            are entitled to ask.
          </li>
          <li>
            <strong>Do not ignore it.</strong> Repeatedly failing to appear without reason can
            support an arrest warrant. Rescheduling by phone, by contrast, is routine.
          </li>
          <li>
            At the interview you have the right to <strong>remain silent</strong>, to have{' '}
            <strong>a lawyer present</strong>, and to <strong>read and correct the written
            record</strong> before signing it.
          </li>
          <li>
            The signed record follows your case to the prosecutor and the court —{' '}
            <strong>preparation before the interview matters more than eloquence during it</strong>.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        A phone call from an investigator, a text message, or a letter with a police logo — a
        police summons in Korea usually arrives as an{' '}
        <Term ko="출석요구">attendance request</Term>, and for a foreigner it lands with extra
        weight: an unfamiliar system, a language you may not read well, and no sense of how serious
        it is. The honest answer is that it is serious enough to prepare for, and routine enough
        not to panic over.
      </p>
      <p className={P}>
        The summons means an investigation exists and the police want your statement. Under the
        Criminal Procedure Act <span lang="ko">(형사소송법)</span>, investigators may ask a suspect
        (art. 200) or a person who is not a suspect — a reference witness — to appear and speak
        (art. 221). Which of those you are changes everything about how to prepare.
      </p>
      <p className={P}>
        What matters is what you do between now and the interview. This guide walks through that
        window in order: what the summons is, what to find out, what your rights are in the room,
        and what happens after.
      </p>

      <GuideToc
        items={[
          { href: '#what-it-is', label: '1. What a police summons is — and what it is not' },
          { href: '#your-status', label: '2. First: find out your status and the allegation' },
          { href: '#your-rights', label: '3. Your rights at the interview' },
          { href: '#how-to-prepare', label: '4. How to prepare' },
          { href: '#after-the-interview', label: '5. What happens after the interview' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="what-it-is" className={H2}>
        1. What a police summons is — and what it is not
      </h2>
      <p className={P}>
        An attendance request is part of <em>voluntary</em> investigation: you appear, answer
        questions (or decline to), and go home. It is not an arrest warrant, it does not mean
        charges have been filed, and it does not mean the police have decided anything. Many
        summonses end in the case being dropped.
      </p>
      <p className={P}>
        Voluntary does not mean optional in the long run. If a suspect fails to comply with
        attendance requests without good reason — or seems likely not to — that refusal itself can
        support the issuance of an arrest warrant (art. 200-2). The practical rule: never simply
        ignore a summons. If the date is impossible, call the investigator and move it; rescheduling
        to prepare, or to arrange a lawyer or interpreter, is normal and unremarkable.
      </p>
      <Callout variant="warning" title="Ignoring the summons is the one clearly wrong move">
        Silence looks like flight risk. Even one polite phone call — confirming receipt and agreeing
        a workable date — changes how your file reads. Failing to appear repeatedly, without
        contact, is how voluntary questioning turns into an arrest warrant application.
      </Callout>

      <h2 id="your-status" className={H2}>
        2. First: find out your status and the allegation
      </h2>
      <p className={P}>
        Call the number on the summons (or have your lawyer do it) and establish three things
        before anything else:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Your status.</strong> Are you summoned as a{' '}
          <Term ko="피의자">suspect</Term> or as a <Term ko="참고인">reference witness</Term>? The
          words matter: a suspect interview follows the formal interrogation rules and is recorded
          in a suspect examination record; a witness interview is looser — but witnesses can become
          suspects, so the distinction is a starting point, not a guarantee.
        </li>
        <li>
          <strong>The allegation.</strong> Ask what offense{' '}
          <span lang="ko">(죄명)</span> is under investigation and, in outline, what the complaint
          is about. You will not get the full file, but you are entitled to know what you are
          answering to.
        </li>
        <li>
          <strong>The practicalities.</strong> Which station and unit, how long to expect, and
          whether an interpreter will be arranged — raise the language question now, not at the
          door.
        </li>
      </ul>
      <p className={P}>
        This call is also the moment to decide about representation. For a suspect interview in
        anything you could not comfortably explain to a judge later, going in without advice means
        making permanent statements about a system you don&rsquo;t know, in a language you may not
        fully control.
      </p>

      <h2 id="your-rights" className={H2}>
        3. Your rights at the interview
      </h2>
      <p className={P}>
        The Criminal Procedure Act builds several protections into a suspect interview, and they
        are practical tools, not formalities:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>The right to remain silent.</strong> Before questioning begins, the investigator
          must tell you that you may refuse to answer any or all questions, and that refusal cannot
          be used against you (art. 244-3). You may answer some questions and decline others.
        </li>
        <li>
          <strong>The right to have your lawyer present.</strong> A defense lawyer may sit in on
          the interrogation and object to unfair methods (art. 243-2). An interview with counsel
          present runs noticeably differently.
        </li>
        <li>
          <strong>The right to read and correct the record.</strong> The interview is written up as
          a <Term ko="피의자신문조서">suspect examination record</Term>. Before signing, you may
          read it (or have it read back through the interpreter), demand corrections, additions,
          and deletions, and your objections must be added to the record (art. 244). Take this
          seriously: the record, not your memory of the conversation, is what travels.
        </li>
        <li>
          <strong>Language help.</strong> Interpretation for a foreign suspect is your right, not
          a favor — confirm before the date that an interpreter is actually booked, and never
          sign a record you could not read. The interpreter rules, the read-back, and the
          interview clocks are covered in depth in{' '}
          <Link href="/guides/criminal-defense/police-interview-rights-and-interpreters" className={LINK}>
            The Police Interview: Your Rights and Interpreters
          </Link>
          .
        </li>
      </ul>

      <p className={P}>
        One more right deserves its own line: you can leave. A voluntary interview is voluntary
        throughout — you are not detained, and you may stop the interview to consult your lawyer.
        Investigators know these rules well; asserting them calmly does not antagonize anyone, and
        the record will show you exercised rights the law explicitly gives you.
      </p>

      <h2 id="how-to-prepare" className={H2}>
        4. How to prepare
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/police-summons-prepare.jpg"
          alt="Preparing a written timeline and documents before a police interview in Korea"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          A written timeline built from your own records — messages, transfers, photos — is worth
          more at an interview than any amount of on-the-spot explaining.
        </Caption>
      </figure>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Reconstruct the facts on paper first.</strong> Dates, places, who said what,
          in what order — anchored to objective records: chat logs, transfers, receipts, photos.
          Interviews reward people who know their own timeline cold.
        </li>
        <li>
          <strong>Decide what you don&rsquo;t know.</strong> &ldquo;I don&rsquo;t remember&rdquo;
          is a legitimate answer; a guessed answer becomes a recorded statement you must live with.
          Never guess to be helpful.
        </li>
        <li>
          <strong>Choose evidence deliberately.</strong> Bring what supports your account; you are
          not obliged to volunteer your whole phone. What to hand over — and when — is a judgment
          call worth making with advice.
        </li>
        <li>
          <strong>Tell the truth.</strong> The investigator has usually seen the complainant&rsquo;s
          evidence before meeting you. A provable lie damages you more than the underlying facts
          usually would.
        </li>
        <li>
          <strong>Plan the language logistics.</strong> If you will use the interpreter, practice
          saying your key points in short, plain sentences — interpretation degrades long, hedged
          answers. If your Korean is functional but not fluent, decide in advance which language
          you will testify in and stick to it; switching mid-interview breeds transcription errors
          that end up in the record.
        </li>
      </ul>

      <h2 id="after-the-interview" className={H2}>
        5. What happens after the interview
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'The police complete their investigation',
            body: 'Further interviews, records, forensics. Weeks to months, depending on the case.',
          },
          {
            title: 'The police decide: send up, or close',
            body: 'With suspicion established, the case is sent to the prosecution (송치); otherwise the police may close it themselves with a non-referral decision (불송치) (art. 245-5).',
          },
          {
            title: 'A closed case can be revived',
            body: 'The complainant is notified and may object, which sends the case to the prosecutor after all (arts. 245-6, 245-7). A police closure is good news, not final news.',
          },
          {
            title: 'The prosecutor decides',
            body: 'Indict for trial, seek a summary (fine) order, or decline to prosecute — including conditional non-prosecution outcomes.',
          },
        ]}
      />
      <p className={P}>
        Expect the whole arc to take months rather than weeks, and expect long silences — a quiet
        file is normal, not ominous. If the case does go to the prosecution, the interview record
        you signed at the police station travels with it and is usually the first thing read. That
        is why this guide spends more words on preparation than on anything else: the cheapest
        moment to shape your case is before your first recorded sentence, not after.
      </p>
      <p className={P}>
        Two levers matter throughout this timeline. The first is the quality of the record you left
        at the interview. The second, in cases with a victim, is{' '}
        <Term ko="합의">settlement</Term> — a private agreement with the complainant that Korean
        practice weighs heavily at every decision point. How and when to pursue one is its own
        subject, covered in{' '}
        <Link href="/guides/criminal-defense/hapui-settlement-in-criminal-cases" className={LINK}>
          Settlement (합의) in Criminal Cases
        </Link>
        .
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Going in &ldquo;just to clear things up&rdquo; with zero preparation.</strong>{' '}
          The interview record is permanent; casual answers get treated as considered statements.
        </li>
        <li>
          <strong>Signing a record you did not fully read.</strong> Corrections after signature are
          far harder than corrections before it. Use art. 244 while it is still cheap.
        </li>
        <li>
          <strong>Contacting the complainant directly.</strong> Reaching out to the person who
          reported you — even to apologize — can be read as pressure and create separate legal
          problems. Settlement approaches are safer made through counsel.
        </li>
        <li>
          <strong>Talking about the case publicly.</strong> Posts and messages about the
          investigation are discoverable and quotable. Say it to your lawyer, not your group chat.
        </li>
        <li>
          <strong>Treating a witness summons as nothing.</strong> Witnesses can become suspects.
          If your honest account of events includes anything that could implicate you, get advice
          before the interview, not after it.
        </li>
      </ul>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: "I'm U.S. military / SOFA-status personnel at Camp Humphreys. Does any of this change?",
            a: (
              <p>
                Possibly — notification and handling can differ depending on your status, including
                for SOFA personnel, and your chain of command or legal office may have its own
                procedures. Clarify your status situation first, with your unit&rsquo;s legal
                office, a Korean lawyer, or both, before attending. The rights described in this
                guide concern Korean police procedure generally.
              </p>
            ),
          },
          {
            q: 'Can I leave Korea while the investigation is pending?',
            a: (
              <p>
                Travel can be restricted during a criminal investigation — exit restrictions exist
                and are used. Do not book unrefundable travel on an assumption; ask the investigator
                or have your lawyer check your situation before making plans. Leaving abruptly
                mid-investigation can also be read as flight, which affects how the case is handled.
              </p>
            ),
          },
          {
            q: "The summons is for a witness interview. Do I still need a lawyer?",
            a: (
              <p>
                Often not — a true witness interview is lower stakes. The exception is when your
                truthful account touches your own conduct: if any honest answer could implicate
                you, get advice first. Status can shift, and the time to think about that is before
                you are on the record.
              </p>
            ),
          },
          {
            q: 'Will this affect my visa or my stay in Korea?',
            a: (
              <p>
                A criminal outcome can affect your stay in Korea, so factor it into decisions from
                the start — including whether to settle and how hard to contest the allegation. The
                specifics depend on your status and the outcome, and are worth a proper
                consultation rather than a general rule.
              </p>
            ),
          },
          {
            q: 'The police interviewed me and nothing has happened for months. Is it over?',
            a: (
              <p>
                Not necessarily — investigations commonly go quiet for months. You are entitled to
                ask the investigator about the status of your case. If it was closed without
                referral, the complainant&rsquo;s objection can still revive it (art. 245-7), so
                keep your evidence and your lawyer&rsquo;s contact details even after good news.
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
