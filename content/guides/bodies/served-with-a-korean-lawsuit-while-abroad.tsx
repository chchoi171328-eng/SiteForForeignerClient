// Guide body: Served With a Korean Lawsuit While Abroad — the Default Judgment Risk
// Authored via the english-guide-writer skill workflow (#33, from-abroad series, ⚠ 공시송달).
// Statute references verified against casenote.kr / law.go.kr — see REVIEW-GUIDES.md.

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
const TD = 'border border-gray-200 px-3 py-2 text-sm text-gray-700 leading-relaxed align-top'
const LINK = 'text-navy-900 underline decoration-gold-400 underline-offset-2 hover:text-gold-600'

export default function ServedWithAKoreanLawsuitWhileAbroad() {
  return (
    <>
      <Image
        src="/assets/guides/served-abroad-hero.jpg"
        alt="A courier envelope lying unopened on the doormat of an empty hallway in morning light — a Korean lawsuit can move forward while the defendant is abroad and never sees the papers"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A Korean civil case does not pause because the defendant is abroad. If papers cannot
            reach you, the court can serve them by <strong>public notice</strong> — a posting at
            the court — and proceed (Civil Procedure Act art. 194).
          </li>
          <li>
            After public notice the court <strong>cannot</strong> treat your silence as an
            admission (arts. 150(3), 256(1)); it hears the plaintiff&rsquo;s evidence and decides.
            The usual result is still a judgment against an absent defendant.
          </li>
          <li>
            A judgment served by public notice becomes <strong>final 2 weeks</strong> after the
            notice takes effect — and you may never have known the case existed.
          </li>
          <li>
            The door back in is the <strong>late appeal</strong>: 2 weeks from learning of the
            judgment, <strong>30 days if you were abroad</strong> when you learned (art. 173).
            Miss that and the judgment is enforceable against anything you own in Korea.
          </li>
          <li>
            Prevention is simple and cheap: a <strong>Korean address or agent for service</strong>{' '}
            on file (art. 184), and a representative who can answer within the 30-day window.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        A former landlord, a business partner, an ex-spouse, a lender — someone in Korea has a
        claim against you, or says they do, and you are no longer there to receive the envelope.
        You may have heard about it from a friend, found a stranger&rsquo;s message in your
        inbox, or found nothing at all until a bank account you kept in Korea was frozen. The
        question is whether a Korean court can decide a case against a person who never got
        the papers — and the answer, with conditions, is yes.
      </p>
      <p className={P}>
        The framework is the Civil Procedure Act <span lang="ko">(민사소송법)</span>, which sets
        out how documents must reach a defendant, what happens when they cannot, and the narrow
        route back for someone who missed a case through no fault of their own. The general
        first-30-days guide,{' '}
        <Link href="/guides/civil-litigation/youve-been-served-first-30-days" className={LINK}>
          You&rsquo;ve Been Served
        </Link>
        , assumes the papers reached you. This one is about the harder case: when they did not,
        or reached you late, or reached a mailbox in a country you left.
      </p>
      <p className={P}>
        One idea runs through it: in a Korean lawsuit, <strong>not knowing is not a defence —
        but it can be a key</strong>, if you turn it quickly.
      </p>

      <GuideToc
        items={[
          { href: '#how-service-works', label: '1. How a Korean court reaches a defendant abroad' },
          { href: '#public-notice', label: '2. Service by public notice: when and how the case goes on without you' },
          { href: '#what-the-judgment-means', label: '3. What a default-type judgment means — and what it can reach' },
          { href: '#the-way-back', label: '4. The way back in: the late appeal' },
          { href: '#from-abroad', label: '5. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '6. Common mistakes' },
        ]}
      />

      <h2 id="how-service-works" className={H2}>
        1. How a Korean court reaches a defendant abroad
      </h2>
      <p className={P}>
        Korean courts serve documents themselves, by registered post or court officer, to the
        address the plaintiff supplies. If that address is in Korea and you have left, the first
        attempts fail — or succeed in a way you never see, because a document handed to a
        housemate or building manager at your old address can count as served (art. 186). The
        plaintiff is then asked to supply a working address; if they know you are abroad and
        where, the court serves you there.
      </p>
      <p className={P}>
        Service abroad goes through official channels: the presiding judge entrusts it to the
        Korean embassy or consulate in that country, or to that country&rsquo;s competent
        authority (art. 191). Korea is party to the Hague Service Convention, with the National
        Court Administration as its central authority, so for most Western countries the request
        travels government to government and lands as a formal delivery in the local manner.
        That is slow — months, not weeks — but it is real service, and when it succeeds you are
        in the ordinary position of a served defendant, with the 30-day answer window.
      </p>
      <p className={P}>
        The problem case is the one this guide exists for: the plaintiff does not know where you
        are, or service abroad fails or is judged pointless. Then the law offers the court a way
        to proceed anyway.
      </p>

      <h2 id="public-notice" className={H2}>
        2. Service by public notice: when and how the case goes on without you
      </h2>
      <p className={P}>
        <Term ko="공시송달">Service by public notice (gongsi songdal)</Term> is a legal fiction:
        the document is posted at the court (and on the court system), and after a set period it
        is deemed served whether or not you ever saw it. It is permitted where a party&rsquo;s
        address and workplace cannot be found, or where service abroad is impossible or
        recognised as ineffective — on the plaintiff&rsquo;s application with reasons shown, or
        by the court&rsquo;s own order (art. 194(1)–(3)).
      </p>
      <p className={P}>
        The timing is fixed by statute. The first public notice takes effect{' '}
        <strong>2 weeks</strong> after posting; where the document was one for service abroad,{' '}
        <strong>2 months</strong>. Any later public notice to the same party takes effect the
        day after posting, and none of these periods can be shortened (art. 196). In plain
        terms: once the court has gone the public-notice route with you, every subsequent step
        — hearing dates, the judgment — reaches you by a posting you will not see, with almost
        no delay.
      </p>
      <GuideFlow
        steps={[
          {
            title: 'Service fails at the Korean address',
            body: 'Returned mail, or a handover to someone at your old address. The court asks the plaintiff for a better address.',
          },
          {
            title: 'Service abroad is attempted — or shown to be impossible',
            body: 'Through the consulate or the foreign authority (art. 191). If it fails, or the plaintiff shows your whereabouts cannot be found, the court may order public notice (art. 194).',
          },
          {
            title: 'Public notice takes effect',
            body: '2 weeks after posting for a domestic document, 2 months for one meant for service abroad (art. 196). The complaint is now deemed served.',
          },
          {
            title: 'The case is heard without you',
            body: 'No answer is required of you (art. 256(1) proviso) and silence is not an admission (art. 150(3)) — the court takes the plaintiff’s evidence and rules on it.',
          },
          {
            title: 'Judgment, and finality',
            body: 'The judgment is also served by public notice; the 2-week appeal period runs from its effect (art. 396). A judgment nobody contested becomes final.',
          },
        ]}
      />
      <p className={P}>
        One protection is built in, and it matters. A defendant served by public notice has{' '}
        <strong>no duty to file an answer</strong>, so the court cannot enter the paper-only
        judgment it uses against defendants who were properly served and simply ignored the case
        (art. 257 read with art. 256(1)). Nor does failing to appear count as admitting the
        claim (art. 150(3)). The plaintiff must actually prove the case. Many do — a lease, a
        loan agreement, bank records — and the judgment that follows is as valid as any other.
      </p>

      <h2 id="what-the-judgment-means" className={H2}>
        3. What a default-type judgment means — and what it can reach
      </h2>
      <p className={P}>
        A final Korean judgment is an enforceable title for 10 years. Against a defendant abroad
        it reaches everything in Korea: a bank account you kept open, a deposit still with a
        former landlord, wages from a Korean employer, property, a car. The tools are the ones in{' '}
        <Link href="/guides/debt-collection/enforcing-a-judgment" className={LINK}>
          Enforcing a Judgment
        </Link>
        , and they run without further notice to you. Whether a Korean judgment can be enforced
        in your home country is a separate question answered by that country&rsquo;s own rules on
        recognising foreign judgments — possible in many places, but a second procedure, not an
        automatic one.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/served-abroad-desk.jpg"
          alt="A calendar page and a stack of blank court-style documents beside a phone on a desk abroad — the 30-day late-appeal window for a defendant who learns of a Korean judgment while overseas"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          The day you learn of a Korean judgment is the day a short clock starts — 30 days if you
          are abroad when you learn, 2 weeks if you are in Korea.
        </Caption>
      </figure>
      <p className={P}>
        The practical signal that a public-notice judgment exists is usually enforcement itself:
        a frozen account, a seized deposit, a letter from a Korean bank. Treat any such signal as
        a date to be recorded, because section 4 turns on it.
      </p>

      <h2 id="the-way-back" className={H2}>
        4. The way back in: the late appeal
      </h2>
      <p className={P}>
        Korean procedure gives a party who missed a fixed deadline for reasons beyond their
        control the right to make up the missed step — here, to appeal — within{' '}
        <strong>2 weeks after the obstacle ends</strong>, extended to <strong>30 days</strong>{' '}
        for a party who was abroad when it ended (art. 173). For a defendant who never knew of a
        case served by public notice, the obstacle ends when they actually learn of the
        judgment; the period runs from that day.
      </p>
      <p className={P}>
        Two things decide whether the door opens. First, <strong>fault</strong>: the rule
        protects a party who could not have known, not one who ignored papers that reached them,
        and a defendant who received the complaint at a Korean address and left anyway is in a
        weaker position than one the plaintiff genuinely could not locate. Second,{' '}
        <strong>speed</strong>: the appeal must be filed within the window, with the reasons for
        the delay set out. A late appeal filed in time reopens the case on its merits — the
        judgment is not automatically reversed, but you are back in the room with a defence.
      </p>
      <Callout variant="warning" title="The clock starts when you learn — not when you decide">
        A frozen account noticed on a Tuesday and looked into the following month can be a
        missed window. If anything suggests a Korean judgment exists, record the date you first
        learned of it and have the case file pulled immediately; the late-appeal period is short
        and is counted from that knowledge, not from when you found a lawyer.
      </Callout>

      <h2 id="from-abroad" className={H2}>
        5. What can be done from abroad — and what needs you in Korea
      </h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full min-w-[560px] border-collapse">
          <thead>
            <tr>
              <th className={TH}>Step</th>
              <th className={TH}>From abroad</th>
              <th className={TH}>Needs you in Korea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={TD}>Finding out whether a case or judgment exists</td>
              <td className={TD}>A retained attorney can check the court system and pull the file.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Designating an address or agent for service</td>
              <td className={TD}>A Korean address and agent — typically your attorney — filed with the court (art. 184); the address must be in Korea.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Answering a complaint that did reach you</td>
              <td className={TD}>Your attorney files the answer within 30 days of service and appears electronically.</td>
              <td className={TD}>No — hearings are attended by counsel.</td>
            </tr>
            <tr>
              <td className={TD}>Late appeal against a public-notice judgment</td>
              <td className={TD}>Filed by your attorney within the 30-day window with the reasons for delay; the reopened case proceeds as above.</td>
              <td className={TD}>No — unless the court needs your testimony on contested facts.</td>
            </tr>
            <tr>
              <td className={TD}>Stopping enforcement while the appeal runs</td>
              <td className={TD}>An application to suspend enforcement, usually against security, filed alongside the appeal.</td>
              <td className={TD}>No.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className={P}>
        The one item that is yours alone is the power of attorney, legalised where you live;
        start it the day you suspect a case exists, because every filing above waits for it.
      </p>

      <h2 id="common-mistakes" className={H2}>
        6. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Leaving a Korean address on file with nobody at it.</strong> Papers handed to
          the next tenant or a building manager can count as served. Deregister properly, and
          give anyone likely to sue you a way to reach you.
        </li>
        <li>
          <strong>Ignoring a complaint because &ldquo;they can&rsquo;t enforce it here.&rdquo;</strong>{' '}
          They may not need to. Anything you own in Korea — including a deposit you are still
          trying to recover — is reachable.
        </li>
        <li>
          <strong>Writing to the plaintiff instead of the court.</strong> A reply to the other
          side is not an answer in the case; only a filing stops the clock.
        </li>
        <li>
          <strong>Waiting for a translation before acting.</strong> The 30-day answer and the
          late-appeal windows do not pause for translation. Have the document read the day it
          arrives.
        </li>
        <li>
          <strong>Treating the late appeal as a formality.</strong> It must show you were not at
          fault; a defendant who simply left papers unopened may not qualify.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '30 days',
            what: 'From service of a complaint that actually reached you — the answer period; silence lets the court rule on the papers (Civil Procedure Act arts. 256, 257).',
          },
          {
            when: '2 weeks / 2 months',
            what: 'When a first public notice takes effect — 2 weeks for a domestic document, 2 months for one meant for service abroad; later notices to you take effect the next day (art. 196).',
          },
          {
            when: '2 weeks',
            what: 'The ordinary appeal period from service of a judgment, including service by public notice (art. 396).',
          },
          {
            when: '2 weeks / 30 days',
            what: 'The late-appeal window from the day the obstacle ends — typically the day you learn of the judgment — 30 days if you were abroad at that moment (art. 173).',
          },
        ]}
      />
      <p className={P}>
        Start with the date — of service if papers reached you, of knowledge if they did not —
        and count from there. Everything in this guide is a function of that number.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'A former housemate says court papers in my name arrived at my old address. Does that count?',
            a: (
              <p>
                It can. Korean law allows substituted service on a person of sufficient
                judgment living or working at the address, so a document accepted by a housemate
                may be treated as served on you — and the 30-day answer period runs from that
                day, not from when they forward it. Get the document and the date it arrived
                immediately, and treat the clock as running.
              </p>
            ),
          },
          {
            q: 'Can a Korean judgment be enforced against me in my home country?',
            a: (
              <p>
                Only through your home country&rsquo;s own procedure for recognising foreign
                judgments, which typically asks whether the Korean court had jurisdiction,
                whether you were given a fair opportunity to be heard, and whether enforcement
                would offend local policy. A judgment entered after public notice is exactly the
                kind that gets scrutinised on the second point — but assets in Korea do not wait
                for that question.
              </p>
            ),
          },
          {
            q: 'I was served properly through the consulate. How long do I have?',
            a: (
              <p>
                The same 30 days as a defendant in Korea, from the day the document was
                delivered to you abroad; the law does not extend the answer period for distance.
                What distance does buy is the late-appeal extension to 30 days if a deadline is
                missed for reasons beyond your control — which is a safety net, not a plan.
              </p>
            ),
          },
          {
            q: 'Does leaving Korea while a case is pending count as avoiding it?',
            a: (
              <p>
                Leaving is not itself wrongful, and a case served on your attorney or your
                designated address continues normally while you are abroad. What changes the
                picture is leaving without any way for the court to reach you after papers have
                begun arriving — that is the fact pattern in which a later claim that you
                &ldquo;could not have known&rdquo; is hardest to make.
              </p>
            ),
          },
          {
            q: 'Is there a cheaper way than a lawyer to deal with a small claim from abroad?',
            a: (
              <p>
                For a claim of ₩30 million or less the small-claims track applies, and a close
                family member in Korea may represent you there with the court&rsquo;s permission;
                beyond that, lay representation is not generally allowed. The honest trade-off
                is that a small claim left unanswered becomes a judgment at the same speed as a
                large one — so even where counsel is not economic, a filed answer or a
                designated address for service is.
              </p>
            ),
          },
        ]}
      />

      <p className="text-sm text-gray-500 leading-relaxed mt-10">
        Written by Attorney Chulho Choi (SOL &amp; LUNA / Law Firm Myeong, KBA-registered specialist
        in Civil and Criminal Law). Reviewed as of October 2026. Updated when laws change.
      </p>
    </>
  )
}
