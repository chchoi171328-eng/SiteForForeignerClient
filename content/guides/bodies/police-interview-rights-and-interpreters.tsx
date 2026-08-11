// Guide body: The Police Interview: Your Rights and Interpreters
// Authored via the english-guide-writer skill workflow (guide-production Phase 2, #14).
// Statute references verified against law.go.kr / casenote.kr — see REVIEW-GUIDES.md.
// Interpreter basis verified per the production brief; article number of the police
// investigation rules flagged for attorney confirmation.

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

export default function PoliceInterviewRightsAndInterpreters() {
  return (
    <>
      <Image
        src="/assets/guides/police-interview-hero.jpg"
        alt="A plain interview room with a table, two chairs, and a wall clock — the Korean police interview runs on rules foreigners rarely know"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            The interview&rsquo;s product is a <strong>written record you sign</strong> — every
            right in this guide exists to control what ends up in it.
          </li>
          <li>
            If you are not fully comfortable in Korean, questioning must be{' '}
            <strong>interpreted into a language you understand</strong> — free, arranged by the
            police, and worth insisting on even if your Korean is functional.
          </li>
          <li>
            You may <strong>refuse any question</strong>, have <strong>your lawyer beside
            you</strong>, and demand the record be <strong>read back through the
            interpreter</strong> — with corrections — before you sign.
          </li>
          <li>
            Interviews run on clocks: <strong>no questioning between 9 p.m. and 6 a.m.</strong>{' '}
            (narrow exceptions), <strong>12 hours total, 8 hours of actual questioning</strong>,
            and 8 hours&rsquo; rest before the next session.
          </li>
          <li>
            Video recording of the whole session is lawful and, for a foreign suspect,{' '}
            <strong>usually your friend</strong> — it preserves what was actually said.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        A police interview in Korea — with an interpreter relaying questions you half-recognize —
        is one of the most disorienting rooms a foreigner can sit in. It is also a room with more
        rules protecting you than most people in it will volunteer: rules about language, about
        time, about the camera, and above all about the document the session produces. This guide
        covers the interview itself; if the summons just arrived and you want the whole sequence
        — status, preparation, what happens after — start with{' '}
        <Link href="/guides/criminal-defense/received-a-police-summons" className={LINK}>
          Received a Police Summons
        </Link>{' '}
        and come back here for the room.
      </p>

      <GuideToc
        items={[
          { href: '#the-room', label: '1. The room, the record, and the camera' },
          { href: '#rights-mechanics', label: '2. Your rights, mechanically' },
          { href: '#your-right', label: '3. The interpreter: your right, not a favor' },
          { href: '#working-well', label: '4. Working through an interpreter well' },
          { href: '#time-limits', label: '5. Clocks: how long they can question you' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="the-room" className={H2}>
        1. The room, the record, and the camera
      </h2>
      <p className={P}>
        Across the table sits the investigator, typing as you speak — because the session&rsquo;s
        real output is the <Term ko="피의자신문조서">suspect examination record</Term>, the
        document that travels to the prosecutor and the court. You will be asked to sign it, and
        Korean procedure gives you genuine control at that moment: the right to read it (or have
        it read back), demand corrections, and have your objections recorded (Criminal Procedure
        Act art. 244).
      </p>
      <p className={P}>
        The camera is regulated too. The interview may be video-recorded, but only with{' '}
        <strong>advance notice to you</strong>, covering the entire session, and the original must
        be sealed in front of you (or your lawyer) with your signature (art. 244-2). For a foreign
        suspect, recording usually helps — it preserves tone, pauses, and exactly what the
        interpreter said. If accuracy worries you, have your lawyer press for recording rather
        than fearing it.
      </p>

      <h2 id="rights-mechanics" className={H2}>
        2. Your rights, mechanically
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Silence, question by question.</strong> Before questioning starts you must be
          told you may refuse to answer — everything, or any single question — without it being
          used against you (art. 244-3). The practical form is a calm sentence: &ldquo;I will not
          answer that question.&rdquo; Refusing one question does not waive the next.
        </li>
        <li>
          <strong>Your lawyer, in the chair beside you.</strong> Defense counsel may attend the
          interrogation, object to unfair questioning methods, and state opinions (art. 243-2).
          An interpreted interview with counsel present is a different, slower, more accurate
          event — which is precisely the point.
        </li>
        <li>
          <strong>A trusted person</strong> can be permitted to sit in where age, health, or other
          circumstances call for it (art. 244-5) — worth requesting for anyone who would
          otherwise face the room entirely alone.
        </li>
        <li>
          <strong>Breaks, meals, and an exit.</strong> A voluntary interview remains voluntary:
          you may request breaks, and you may leave to consult your lawyer. Ask; the request
          itself goes on the record.
        </li>
      </ul>

      <h2 id="your-right" className={H2}>
        3. The interpreter: your right, not a favor
      </h2>
      <p className={P}>
        The police&rsquo;s own investigation rules require that a foreigner being questioned be
        interpreted into <strong>a language they understand</strong>, and at trial the Criminal
        Procedure Act makes interpretation mandatory for anyone not versed in Korean (art. 180).
        The interpreter is arranged by the agency and costs you nothing — this is infrastructure,
        not a courtesy.
      </p>
      <p className={P}>
        The trap is the middle ground: the foreigner whose Korean handles restaurants and
        workplaces, and who gets waved through in Korean because it seems fine. The Human Rights
        Commission has pushed investigative agencies to actively confirm interpretation needs even
        for foreigners who speak everyday Korean — because legal Korean under stress is a
        different language. If any part of you wants the interpreter, say so at scheduling, not
        at the door; and if questioning starts drifting into Korean-only exchanges, stop it.
      </p>
      <p className={P}>
        Availability varies by language. English, Chinese, Vietnamese, and other widely spoken
        languages draw on established interpreter pools; rarer languages can take days to
        arrange, and remote interpretation may be offered instead. That is a scheduling fact, not
        a reason to compromise — an interview postponed for the right interpreter is a normal
        event, and far cheaper than a record produced through the wrong one.
      </p>
      <Callout title="&ldquo;Your Korean seems fine&rdquo; is not a waiver">
        Only you decide whether you fully understand. Asking for an interpreter cannot lawfully
        be held against you, and answering complex allegations in your second language to be
        polite is how misunderstandings become signed statements.
      </Callout>

      <h2 id="working-well" className={H2}>
        4. Working through an interpreter well
      </h2>
      <figure className="my-6">
        <Image
          src="/assets/guides/police-interview-headset.jpg"
          alt="A headset and blank notepad — working through an interpreter at a Korean police interview"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The interpreter relays; they do not advise or summarize — and the read-back of the
          record through them is the most important ten minutes of the session.
        </Caption>
      </figure>
      <GuideFlow
        steps={[
          {
            title: 'Confirm the language and the booking beforehand',
            body: 'At scheduling: which language (and dialect where it matters), in person or remote, and that the interpreter is booked for your session — not "we will see on the day."',
          },
          {
            title: 'Speak short, complete, and literal',
            body: 'Interpretation degrades long, hedged answers. One fact per sentence; no idioms; pause for the relay. If a question comes back garbled, say you did not understand — never guess.',
          },
          {
            title: 'Keep the interpreter neutral',
            body: 'The interpreter relays; they do not advise, summarize, or negotiate. If they start editorializing — or you understand enough Korean to notice mismatches — raise it immediately.',
          },
          {
            title: 'The read-back is where you fight',
            body: 'Before signing, have the entire record read back through the interpreter. Correct anything that is not what you said; corrections and objections must be entered (art. 244). Unhurried, line by line — this is the part of the day that decides what the file says.',
          },
        ]}
      />
      <p className={P}>
        If interpretation is genuinely failing — wrong language variant, missing chunks, visible
        confusion — say so on the record and ask for the session to pause until a replacement is
        arranged. A postponed interview costs an afternoon; a signed record in words that were
        never yours costs far more.
      </p>

      <h2 id="time-limits" className={H2}>
        5. Clocks: how long they can question you
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>No night questioning.</strong> Interrogation between 9 p.m. and 6 a.m. is
          barred, with narrow exceptions that must be justified in the record; reviewing an
          already-written record may run until midnight.
        </li>
        <li>
          <strong>12 hours wall-clock, 8 hours of questioning.</strong> A session — including
          waiting, meals, and breaks — must not exceed 12 hours in total, with actual questioning
          capped at 8; both limits come from the joint investigation-standards regulation binding
          police and prosecutors alike.
        </li>
        <li>
          <strong>8 hours off before the next round.</strong> Once a session ends, you cannot be
          questioned again until 8 hours have passed.
        </li>
      </ul>
      <p className={P}>
        One boundary to keep clear: these are the rules for the ordinary, voluntary interview.
        Arrest and detention run on their own, stricter timetables and their own rights — if you
        have been arrested rather than invited, the advice in this guide still helps inside the
        interview room, but getting counsel engaged immediately matters far more than any
        scheduling tactic.
      </p>
      <p className={P}>
        Use the clocks when scheduling: a morning start means the interpreter, your lawyer, and
        your own concentration all survive the day. An interview that begins at 7 p.m. is one to
        rebook — which, as covered in the summons guide, is a normal phone call, not defiance.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Nodding along.</strong> In Korean conversation, nodding is politeness; in an
          interview record, it can read as agreement. Answer in words, through the interpreter.
        </li>
        <li>
          <strong>Answering in survival Korean to speed things up.</strong> The record does not
          note that you were being brave. Pick one language for testimony and hold it.
        </li>
        <li>
          <strong>Bringing a friend or spouse as the interpreter.</strong> They lack neutrality,
          may become witnesses themselves, and their relationship to you invites challenges to the
          record. Supplementing with your own professional interpreter, through your lawyer, is a
          different matter.
        </li>
        <li>
          <strong>Signing a record you did not hear read back in full.</strong> The signature line
          is the single most consequential moment of the session — treat &ldquo;it just says what
          we discussed&rdquo; as the cue to slow down, not speed up.
        </li>
        <li>
          <strong>Not eating, not resting, not asking.</strong> Fatigue produces bad statements.
          The breaks exist; requesting them is unremarkable.
        </li>
        <li>
          <strong>Confiding in the interpreter.</strong> The interpreter is neutral, not your
          ally — anything you say in the room, including asides in your own language, can be
          relayed and recorded. Save the strategy talk for your lawyer, outside.
        </li>
      </ul>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Who pays for the interpreter?',
            a: (
              <p>
                The state — the agency arranges and bears the cost of interpretation for the
                investigation, and the court does the same at trial. You should never be asked to
                pay for the official interpreter, and cost is never a reason to soldier on in
                Korean.
              </p>
            ),
          },
          {
            q: 'Can I bring my own interpreter instead?',
            a: (
              <p>
                You can raise it, and through your lawyer you can bring language support of your
                own alongside the official arrangement — useful for preparation and for checking
                the read-back. But the official record runs through the interpreter the agency
                appoints, so the working combination is: agency interpreter for the record, your
                own support for verification, and objections on the record where they diverge.
              </p>
            ),
          },
          {
            q: 'The interpreter and I are not understanding each other. What do I do mid-session?',
            a: (
              <p>
                Say exactly that, out loud, so it enters the record: &ldquo;I am not understanding
                the interpretation.&rdquo; Ask for the session to pause and for a replacement —
                wrong dialect, wrong register, or plain incompetence are all legitimate grounds.
                Do not push through; answers given through interpretation you did not understand
                are still your answers once signed.
              </p>
            ),
          },
          {
            q: 'Is interpretation by phone or video acceptable?',
            a: (
              <p>
                Remote interpretation is used in practice, especially for less common languages,
                and it can be adequate for short, simple sessions. For a substantive suspect
                interview, in-person interpretation is worth requesting — relay errors multiply
                over audio, and the read-back of the record is much harder to do properly through
                a speakerphone. Ask at scheduling; your lawyer can press the point.
              </p>
            ),
          },
          {
            q: 'Will the record be a word-for-word transcript of what I say?',
            a: (
              <p>
                Usually not — records are written in summarized question-and-answer form, which
                is precisely why the read-back matters: summary is where nuance dies. For answers
                where exact wording matters, ask to have the phrasing taken down as stated and
                check it in the read-back; where the record and your words diverge, use the
                correction right rather than accepting &ldquo;close enough.&rdquo;
              </p>
            ),
          },
        ]}
      />

      <p className={P + ' mt-8'}>
        The interview sits inside a longer sequence — what the summons means, how to prepare, and
        what the police and prosecutor decide afterward are covered in{' '}
        <Link href="/guides/criminal-defense/received-a-police-summons" className={LINK}>
          Received a Police Summons
        </Link>
        , and the settlement lever that shapes many outcomes in{' '}
        <Link href="/guides/criminal-defense/hapui-settlement-in-criminal-cases" className={LINK}>
          Settlement (합의) in Criminal Cases
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
