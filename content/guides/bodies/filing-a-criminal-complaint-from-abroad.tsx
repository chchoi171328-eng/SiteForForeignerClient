// Guide body: Filing a Criminal Complaint in Korea From Abroad
// Authored via the english-guide-writer skill workflow (#30, from-abroad series).
// Written against the investigation/prosecution separation in force from 2026-10-02
// (complaints go to the police; the prosecution office decides charges) — see REVIEW-GUIDES.md.

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

export default function FilingACriminalComplaintFromAbroad() {
  return (
    <>
      <Image
        src="/assets/guides/complaint-abroad-hero.jpg"
        alt="A folder of blank printed pages, a memory stick, and a pen laid out on a table in morning light — the evidence file behind a Korean criminal complaint filed from abroad"
        width={1600}
        height={900}
        priority
        className="rounded-lg mb-8"
      />

      <GuideSummary>
        <ul className="list-disc pl-5">
          <li>
            A victim may file a criminal complaint in Korea <strong>through a representative</strong>{' '}
            — you do not have to be in the country to start the case (Criminal Procedure Act
            arts. 223, 236).
          </li>
          <li>
            Complaints are filed <strong>with the police</strong>, who investigate and are expected
            to decide within <strong>3 months</strong> whether to send the case to the prosecution
            office; the prosecution office then decides whether to charge.
          </li>
          <li>
            For offences prosecutable only on complaint, the clock is{' '}
            <strong>6 months from learning who the offender is</strong> (art. 230) — and a
            withdrawn complaint cannot be filed again (art. 232).
          </li>
          <li>
            A &ldquo;no&rdquo; is reviewable: <strong>objection within 3 months</strong> of a police
            non-referral, <strong>appeal within 30 days</strong> of a prosecutor&rsquo;s
            non-indictment, then a court application within <strong>10 days</strong>.
          </li>
          <li>
            A complaint punishes; it does not repay. For money, the tools are a compensation
            order inside the trial, a settlement, or a civil claim — plan them from the start.
          </li>
        </ul>
      </GuideSummary>

      <p className={P}>
        You were defrauded, assaulted, stalked, or robbed in Korea — and now you are somewhere
        else, with screenshots, bank records, and a sense that nothing can be done from a
        distance. The distance is less of a barrier than it feels. Korean criminal procedure lets
        a victim set the process in motion through a representative, and most of what follows is
        written, not attended.
      </p>
      <p className={P}>
        The instrument is the <Term ko="고소">criminal complaint (goso)</Term>: a victim&rsquo;s
        formal request that the state investigate and punish. The framework is the Criminal
        Procedure Act <span lang="ko">(형사소송법)</span>, together with the Criminal Act{' '}
        <span lang="ko">(형법)</span> that defines the offences. One structural fact matters
        before anything else: as of October 2026, Korea separates investigation from
        prosecution — the police investigate; a prosecution office{' '}
        <span lang="ko">(공소청)</span> decides whether to charge. This guide follows that
        sequence from a complainant&rsquo;s chair abroad.
      </p>
      <p className={P}>
        What decides these cases is the file you hand in on day one. We start there.
      </p>

      <GuideToc
        items={[
          { href: '#who-and-where', label: '1. Who can file, and where the complaint goes' },
          { href: '#the-file', label: '2. What a complaint must contain' },
          { href: '#after-filing', label: '3. What happens after filing' },
          { href: '#when-they-say-no', label: '4. When the police or prosecutor say no' },
          { href: '#the-money', label: '5. Getting money back inside the criminal case' },
          { href: '#from-abroad', label: '6. What can be done from abroad — and what needs you in Korea' },
          { href: '#common-mistakes', label: '7. Common mistakes' },
        ]}
      />

      <h2 id="who-and-where" className={H2}>
        1. Who can file, and where the complaint goes
      </h2>
      <p className={P}>
        The victim of a crime may file a complaint (art. 223), and may do so through a
        representative (art. 236) — the provision that makes filing from abroad routine. A
        complaint is distinct from a <Term ko="고발">report by a non-victim (gobal)</Term>: the
        complainant has rights the reporter does not, including the right to object to a
        non-referral, so file as the victim where you are one.
      </p>
      <p className={P}>
        Complaints are made in writing or orally <strong>to the police</strong> (art. 237). A
        separate Serious Crimes Investigation Agency{' '}
        <span lang="ko">(중대범죄수사청)</span> handles a defined list of major offences — among
        them corruption, narcotics, and large economic crimes — but the everyday complaint of a
        foreign resident goes to a police station, and your representative files it there.
      </p>
      <p className={P}>
        Two categories carry a clock. For offences prosecutable only on the victim&rsquo;s
        complaint <span lang="ko">(친고죄)</span>, the complaint must be filed within{' '}
        <strong>6 months of the day you learned who the offender is</strong> (art. 230). For
        offences that cannot be prosecuted against the victim&rsquo;s expressed wish{' '}
        <span lang="ko">(반의사불벌죄)</span> — ordinary assault and threats among them — your
        stated wish not to punish ends the case. Which category your facts fall into shapes both
        timing and settlement leverage, and is worth confirming before you file.
      </p>

      <h2 id="the-file" className={H2}>
        2. What a complaint must contain
      </h2>
      <p className={P}>
        A Korean complaint is a written document in Korean stating who you are, who the
        suspect is (as far as you know), what happened — when, where, how, and what was taken or
        done — and why it is a crime. Attached to it is the evidence: transfer records,
        messages, contracts, photographs, medical records. Evidence in another language goes in
        with a Korean translation; originals are kept available.
      </p>
      <p className={P}>
        The practical standard is not legal eloquence but <strong>verifiability</strong>. An
        investigator reading a complaint from a person abroad wants dates that match bank
        records, screenshots with visible timestamps and account names, and a narrative that
        does not outrun the documents. Fraud cases in particular are decided on whether the
        file shows deception at the time of the deal — covered from the creditor&rsquo;s side
        in{' '}
        <Link href="/guides/debt-collection/someone-owes-you-money-in-korea" className={LINK}>
          Someone Owes You Money in Korea
        </Link>
        .
      </p>
      <Callout variant="warning" title="File what you can prove, as it happened">
        Knowingly reporting a false fact in order to have someone punished is itself a crime in
        Korea — false accusation carries up to 10 years&rsquo; imprisonment or a fine of up to
        ₩15 million (Criminal Act art. 156). Honest complaints that fail are not false
        accusations; stretched facts and invented details are the risk. Write it straight.
      </Callout>

      <h2 id="after-filing" className={H2}>
        3. What happens after filing
      </h2>
      <GuideFlow
        steps={[
          {
            title: 'Receipt and the complainant statement',
            body: 'The police register the complaint and normally take a complainant statement. For a client abroad it is usually given through the complaint representative or in writing; some investigators still want your own account, in person or by video, on facts only you know.',
          },
          {
            title: 'Investigation — 3 months in principle',
            body: 'The suspect is questioned, evidence gathered. The police are expected to decide within 3 months of receipt whether to refer the case; complex cases run longer, and a case left untouched for 6 months without good reason can be challenged.',
          },
          {
            title: 'Referral — or non-referral',
            body: 'The police either send the case to the prosecution office or decide not to. A non-referral must be notified to you in writing within 7 days of the record being forwarded (art. 245-6) — the notice that starts your objection clock (section 4).',
          },
          {
            title: 'The charging decision',
            body: 'The prosecution office decides whether to indict, and must notify you of its decision within 7 days (art. 258); you can demand written reasons for a non-indictment (art. 259).',
          },
          {
            title: 'Trial',
            body: 'If charged, the case is tried. You are the victim, not a party — but you can be heard, apply for a compensation order (section 5), and settlement talks continue to matter to the outcome.',
          },
        ]}
      />
      <p className={P}>
        Settlement runs alongside every stage. A <Term ko="합의">hapui</Term> with the suspect
        — compensation in exchange for your statement of non-punishment or leniency — ends a
        complaint-only or wish-dependent case and weighs heavily in any other; its mechanics
        and timing are the subject of{' '}
        <Link href="/guides/criminal-defense/hapui-settlement-in-criminal-cases" className={LINK}>
          Settlement (합의) in Criminal Cases
        </Link>
        . Note the one-way door: a complaint withdrawn before the first-instance judgment cannot
        be re-filed (art. 232) — so a withdrawal is signed when the settlement money has
        actually arrived, not when it is promised.
      </p>

      <h2 id="when-they-say-no" className={H2}>
        4. When the police or prosecutor say no
      </h2>
      <p className={P}>
        <strong>A police non-referral</strong> is not the end. As complainant you may object to
        the head of the police unit within <strong>3 months</strong> of receiving the notice —
        extendable for good cause, but never beyond 6 months of the record&rsquo;s forwarding —
        and the case must then be sent to the prosecution office (art. 245-7). The prosecutor,
        in turn, can require the police to reinvestigate.
      </p>
      <p className={P}>
        <strong>A prosecutor&rsquo;s non-indictment</strong> has its own ladder. First, an appeal
        within <strong>30 days</strong> of the notice, filed through the prosecution office that
        decided and heard by the regional office above it (Public Prosecution Office Act art.
        57). If that is rejected, a complainant may apply to the High Court within{' '}
        <strong>10 days</strong> of the rejection notice for a judicial order to prosecute
        (Criminal Procedure Act art. 260). Each step is a written filing your representative
        makes; none requires you in Korea.
      </p>
      <figure className="my-6">
        <Image
          src="/assets/guides/complaint-abroad-call.jpg"
          alt="A laptop with a dark screen beside a notebook and a cup on a desk in morning light — a complainant abroad follows a Korean investigation through written updates and calls with their representative"
          width={1600}
          height={900}
          className="rounded-lg"
        />
        <Caption>
          Every review step — objection, appeal, court application — is a document with a
          deadline; what you owe the process from abroad is a prompt decision each time a notice
          arrives.
        </Caption>
      </figure>
      <p className={P}>
        Two supporting rights make the ladder usable from a distance. You can ask for reasons in
        writing (art. 259), and for access to the investigation record where it is needed for
        your objection — the material an objection is actually built from. And where a case
        simply stalls — no real investigative step for 6 months without good reason — you can
        raise it with the head of the investigating unit, who must respond within 14 days.
      </p>

      <h2 id="the-money" className={H2}>
        5. Getting money back inside the criminal case
      </h2>
      <p className={P}>
        A conviction does not transfer a won to you. Three routes do. The first is the{' '}
        <Term ko="배상명령">compensation order (baesang myeongnyeong)</Term>: for listed offences
        — theft, robbery, assault and injury, fraud, embezzlement, breach of trust, sexual
        offences, property damage, among others — the victim may apply within the criminal trial
        itself, up to the close of the second-instance hearing, and the court can order the
        defendant to pay damages in the judgment (Act on Special Cases Concerning Expedition of
        Legal Proceedings art. 25). It is cheap and fast, but limited to amounts the trial record
        makes clear; disputed or complicated losses are sent back to the civil track.
      </p>
      <p className={P}>
        The second is the settlement in section 3 — in practice the most common way money
        returns. The third is the civil claim, which outlives the criminal case: the recovery
        tools in{' '}
        <Link href="/guides/debt-collection/enforcing-a-judgment" className={LINK}>
          Enforcing a Judgment
        </Link>{' '}
        apply to a fraud judgment as to any other, and a provisional attachment can freeze the
        suspect&rsquo;s assets while the criminal case runs. Decide early which routes you will
        use; a complaint filed with no plan for the money is often a complaint that punishes and
        repays nothing.
      </p>

      <h2 id="from-abroad" className={H2}>
        6. What can be done from abroad — and what needs you in Korea
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
              <td className={TD}>Filing the complaint</td>
              <td className={TD}>
                Drafted and filed by your representative under a power of attorney (notarised
                where you live and apostilled, or certified at a Korean consulate).
              </td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Complainant statement</td>
              <td className={TD}>Usually through the representative or in writing.</td>
              <td className={TD}>
                Sometimes — an investigator may want your own account, in person or by video,
                on facts only you know.
              </td>
            </tr>
            <tr>
              <td className={TD}>Objection, appeal, court application</td>
              <td className={TD}>Written filings by your representative within the deadlines.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Settlement</td>
              <td className={TD}>Negotiated and documented by your representative; funds to your account.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Compensation order</td>
              <td className={TD}>Applied for in the trial by your representative.</td>
              <td className={TD}>No.</td>
            </tr>
            <tr>
              <td className={TD}>Testifying at trial</td>
              <td className={TD}>Written statements and records go in through the file.</td>
              <td className={TD}>
                Sometimes — if the court summons you as a witness, attendance may be required;
                remote testimony exists for certain victims and cases, and is decided by the
                court.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="common-mistakes" className={H2}>
        7. Common mistakes
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-4">
        <li>
          <strong>Missing the 6-month window</strong> on a complaint-only offence while gathering
          &ldquo;more&rdquo; evidence. File on what you have; supplement later.
        </li>
        <li>
          <strong>A narrative without documents.</strong> Long emotional accounts with no
          timestamps or records are the complaints that stall. Build the file first.
        </li>
        <li>
          <strong>Using the complaint as a threat.</strong> &ldquo;Pay or I&rsquo;ll report
          you&rdquo; can create separate legal problems for you and undermines the complaint
          itself. Decide on the facts, then file.
        </li>
        <li>
          <strong>Letting review deadlines pass.</strong> 3 months, 30 days, 10 days — each
          notice starts a clock, and a client abroad who reads mail late loses the step.
        </li>
        <li>
          <strong>Withdrawing on a promise.</strong> The withdrawal is final; the money must be
          in your account first.
        </li>
      </ul>

      <GuideDeadlines
        items={[
          {
            when: '6 months',
            what: 'From learning who the offender is — the complaint deadline for complaint-only offences (Criminal Procedure Act art. 230).',
          },
          {
            when: '3 months',
            what: 'The police’s in-principle period to decide on referral — and your window to object to a non-referral after notice (art. 245-7; up to 6 months for good cause).',
          },
          {
            when: '30 days',
            what: 'From notice of a non-indictment — the appeal to the regional prosecution office (Public Prosecution Office Act art. 57).',
          },
          {
            when: '10 days',
            what: 'From notice that the appeal was rejected — the application to the High Court for an order to prosecute (art. 260).',
          },
          {
            when: 'Before the first-instance judgment',
            what: 'The last point to withdraw a complaint — and once withdrawn, it cannot be filed again (art. 232).',
          },
        ]}
      />
      <p className={P}>
        Start by fixing two dates — when the harm happened, and when you learned who did it —
        and by collecting every record with a timestamp. The rest of the process is built on
        those.
      </p>

      <h2 className={H2}>Frequently asked questions</h2>
      <GuideFaq
        items={[
          {
            q: 'Can I file the complaint in English?',
            a: (
              <p>
                The complaint itself is a Korean-language document, and evidence in other
                languages goes in with Korean translations; that is one of the practical reasons
                complaints from abroad run through a representative. What you supply in English
                — your account, your records — is the raw material, and a careful translation of
                the key items matters more than translating everything.
              </p>
            ),
          },
          {
            q: 'The police asked for my statement. Do I have to fly to Korea?',
            a: (
              <p>
                Not usually. A complainant statement is almost always taken, but for a client
                abroad it is typically given through the complaint representative or in
                writing. Some investigators still want your own account, in person or by video,
                especially on facts only you know — a request worth meeting where it is made,
                because the credibility of the file is what the case runs on.
              </p>
            ),
          },
          {
            q: 'How long does a complaint take from filing to a decision?',
            a: (
              <p>
                The police are expected to decide on referral within 3 months of receipt, and
                the prosecution office then has its own review; straightforward cases with a
                reachable suspect can move within that frame, while cases needing bank records,
                multiple victims, or an absent suspect run longer. A case with no real step for
                6 months without good reason can be challenged, and that right is worth using.
              </p>
            ),
          },
          {
            q: 'The person who harmed me is connected to a U.S. base. Does that change anything?',
            a: (
              <p>
                Notification and handling can differ depending on the suspect&rsquo;s status,
                including for SOFA personnel — which channels are involved, and how a Korean
                complaint interacts with them, is exactly what to clarify first. The Korean
                complaint remains your instrument as a victim; how far it travels is a
                case-specific question.
              </p>
            ),
          },
          {
            q: 'Will a successful complaint get my money back?',
            a: (
              <p>
                Not by itself. A conviction punishes; repayment comes through a compensation
                order inside the trial, a settlement, or a separate civil claim and enforcement.
                Many victims pursue two of the three in parallel — the criminal file often
                produces the evidence a civil claim needs — and should decide the money plan
                before, not after, the complaint goes in.
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
