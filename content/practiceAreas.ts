// Single source of truth for practice-area content.
//
// Structure and procedural content are derived from the firm's Korean-language
// practice pages; the reader-facing layers (intro anxieties, FAQs) are rewritten
// for foreign residents rather than translated. See docs/REVIEW.md for the list
// of legal facts each page asserts — that file is the attorney-review checklist.
//
// Rules baked into this data:
// - Retainer figures must match the Korean site and the English /fees page.
// - Do not state visa/immigration consequences as definite outcomes.
// - Do not assert who gets notified of an investigation (notification rules
//   differ by status, including for SOFA personnel) — route that to consultation.

import type { Icons } from '@/components/Icons'

export type FAQ = {
  question: string
  answer: string
}

/** One stage of the procedure timeline. */
export type TimelineStep = {
  title: string
  body: string
  /** "What you can do at this stage". */
  youCanDo: string
}

/** Area-specific retainer block. Omit `range` when no figure is published. */
export type Retainer = {
  range?: string
  dependsOn: string
  /** Area-specific closing line (e.g. the divorce non-persuasion line). */
  closing?: string
}

export type PracticeArea = {
  slug: string
  /** Full display title, e.g. for the detail page H1 and cards. */
  title: string
  /** Icon key from components/Icons. */
  icon: keyof typeof Icons
  /** One-line description used on cards and grids. */
  cardDescription: string
  /** <title>/meta description for the detail page. */
  metaDescription: string
  /** Whether to show this area in the home-page practice grid. */
  showOnHome: boolean
  /** Decorative header image (priming). Rendered with empty alt. */
  headerImage?: string

  // --- Detail page sections. Optional; hidden when empty. ---
  /** 1 — Empathetic intro paragraphs. */
  overview?: string[]
  /** 2 — "Is this you?" checklist. */
  commonSituations?: string[]
  /** 3 — Procedure timeline. */
  timeline?: TimelineStep[]
  /** 3b — Closing line under the timeline. */
  timelineClosing?: string
  /** 4 — "What We Will Tell You Honestly". Falls back to a shared default. */
  attorneyAssistance?: string[]
  /** 5 — Frequently asked questions. */
  faqs?: FAQ[]
  /** 6 — Retainer block. */
  retainer?: Retainer
}

/** Shared default for "What We Will Tell You Honestly" when an entry omits it. */
export const DEFAULT_ATTORNEY_ASSISTANCE: string[] = [
  'A single attorney handles your matter from the first consultation through to court, so nothing is lost in handoffs.',
  'We assess the realistic outcome honestly before you commit to litigation.',
  'Consultations are conducted directly in English.',
]

/** Shared disclaimer shown at the bottom of every practice-area page. */
export const PRACTICE_DISCLAIMER =
  'This page provides general information only and is not legal advice. Outcomes depend on the specific facts of each case. No attorney–client relationship is created by viewing this page or submitting an inquiry.'

/** Shown under every retainer figure. */
export const RETAINER_VAT_NOTE = 'Figures shown are exclusive of VAT.'

/** Shown in every retainer block, after the area-specific note. */
export const RETAINER_STANDARD_NOTE =
  'The exact figure is quoted after we review your case, and it does not grow while the case is running.'

/** FAQ that must appear on every page — removes pressure to commit. */
const CONSULTATION_ONLY_FAQ: FAQ = {
  question: 'Can I just get a consultation and decide later?',
  answer:
    'Yes. You are not committing to anything by booking one. Plenty of people book an assessment, find out where they stand, and decide to do nothing — sometimes with our agreement. Knowing your position first is the point.',
}

/** Safe answer on notification — never assert who is or is not told. */
const NOTIFICATION_FAQ: FAQ = {
  question: 'Will my employer or my family find out?',
  answer:
    'Notification rules differ depending on your status — including for SOFA personnel. This is one of the first things we clarify at a consultation, along with what, if anything, you can do about it.',
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: 'criminal-defense',
    headerImage: '/assets/pa-criminal.png',
    title: 'Criminal Defense',
    icon: 'Shield',
    cardDescription:
      'Defense representation for foreign residents in Korean criminal cases and police investigations.',
    metaDescription:
      'Criminal defense for foreign residents in Korea — police investigations, assault, DUI, fraud. How the case stages work, what you can do at each, and what it costs. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'When a Korean police station contacts you, two questions usually arrive before any others. What does this mean for my status here — and will I actually understand what is happening to me?',
      'Those are the right questions. The honest answer is that for the same charge, the range of possible outcomes is wide. What narrows it is where your case is right now, and what you do at that stage.',
      'Below is how a Korean criminal case moves, stage by stage, and what can still be done at each one. Find where you are first.',
    ],
    commonSituations: [
      'You received a call or a written summons asking you to attend a police station',
      'You are facing questioning over drunk driving or refusing a breath test',
      'There was a fight, and both sides ended up reported',
      'Someone has filed a fraud complaint against you',
      'A family member or a colleague has been arrested or is being questioned',
      'Your case has been sent from the police to the prosecutor',
      'You have been indicted and have a trial date',
      'You received a summary order and are deciding whether to ask for a full trial',
    ],
    timeline: [
      {
        title: 'Before the police interview',
        body: 'You have been asked to attend, but have not been questioned yet.',
        youCanDo:
          'Organise the facts and decide how you will account for them. This is the stage where the most options are still open.',
      },
      {
        title: 'The police interview',
        body: 'You are questioned as a suspect. What you say is written down and follows the case to the end.',
        youCanDo:
          'Have counsel present, settle the facts before you speak, and read the written record before you sign it — you can ask for corrections. The questions themselves often reveal what the other side has claimed.',
      },
      {
        title: 'Before the police decide whether to send the case on',
        body: 'The police decide whether to refer the case to the prosecutor or close it themselves.',
        youCanDo:
          'Submit favourable evidence and written statements while the decision is still open. This is the last point for active input before it moves up.',
      },
      {
        title: "Before the prosecutor's decision",
        body: 'The prosecutor decides whether to charge you, drop the case, or seek a summary order. Prosecutors sometimes question you directly at this stage.',
        youCanDo:
          'Submit material relevant to sentencing, pursue restitution or settlement with the complainant where that fits, and file written arguments.',
      },
      {
        title: 'Trial',
        body: 'If you are charged, the court decides guilt and sentence.',
        youCanDo:
          'Contest the evidence, question witnesses, argue the case, and submit further material — including any settlement reached.',
      },
    ],
    timelineClosing:
      'The further the case goes, the fewer options remain. Knowing your current stage is step one.',
    attorneyAssistance: [
      'Whether the early stage of your case — the police interview, your first written statement — is the stage that decides it. (It usually is.)',
      'What a realistic outcome looks like for your charge, based on how Korean courts and prosecutors actually handle similar cases.',
      'When cooperating, settling with the complainant, or fighting the charge each makes sense — and what each path costs.',
      'How a criminal outcome can affect your stay in Korea — and why that needs to be part of the defense strategy, not an afterthought.',
    ],
    faqs: [
      {
        question: 'Can I leave Korea while the investigation is ongoing?',
        answer:
          'It depends on the case. In some investigations a departure restriction can be imposed, and leaving while one is in place causes serious problems. Before you book a flight, tell us the stage you are at — this is something to check, not assume.',
      },
      {
        question: 'Will the police interview be in Korean — do I get an interpreter?',
        answer:
          'The interview is conducted in Korean, and interpretation is arranged where the person being questioned needs it. The practical risk is not whether words are interpreted but whether the written record ends up saying what you meant. You are entitled to read it before signing and to ask for corrections.',
      },
      {
        question: 'How does a criminal outcome affect my visa or my residency?',
        answer:
          'It can matter, and how much depends on the offence, the outcome, and your status. We do not treat that as a separate problem to deal with afterwards — where it is relevant, it belongs in the defense strategy from the start. What we can tell you at a consultation is which outcomes carry that risk in your situation.',
      },
      {
        question: 'Do I have to answer every question?',
        answer:
          'You are not obliged to answer questions in a way that incriminates you. In practice the harder judgement is which answers help you and which create a record you cannot walk back. That is worth working out before the interview, not during it.',
      },
      {
        question: 'Can I handle a minor case without a lawyer?',
        answer:
          'Sometimes, yes. If the facts are simple and nothing is really in dispute, you may not need representation. We will tell you at the consultation whether yours is that kind of case.',
      },
      NOTIFICATION_FAQ,
      CONSULTATION_ONLY_FAQ,
    ],
    retainer: {
      range: '₩4,000,000 – ₩12,000,000',
      dependsOn: 'the stage the case has reached and how complex the facts are',
      closing:
        'Attorney Cheolho Choi is registered with the Korean Bar Association as a specialist in criminal law and civil law.',
    },
  },
  {
    slug: 'civil-litigation',
    headerImage: '/assets/pa-civil.png',
    title: 'Civil Litigation',
    icon: 'Scale',
    cardDescription: 'Resolving disputes involving contracts, property, and damages before Korean courts.',
    metaDescription:
      'Civil litigation for foreign residents in Korea — money owed, contract and damages claims, and court deadlines. What a claim is worth pursuing, and what it costs. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'People who are owed money tend to arrive with the same three worries. Does this really have to go to court, will it cost more than it recovers, and if I win, will I actually see the money?',
      'Add one more if you are living here as a foreigner: whether a court you have never dealt with, working in a language that is not yours, will treat your claim fairly.',
      'The order that helps is this — decide what you want out of it before deciding how to pursue it. Sometimes that is recovery. Sometimes it is a judgment you can enforce later. The method follows from the goal.',
    ],
    commonSituations: [
      'You lent money and have not been repaid, or the person has stopped responding',
      'Payment for goods or services keeps being postponed',
      'A contract was broken and you were left out of pocket',
      'A deposit or an investment has not been returned',
      'You have been served with a complaint from a Korean court',
      'You have received a payment order',
    ],
    timeline: [
      {
        title: 'Review before you file',
        body: 'Whether you have a basis to claim, whether the evidence proves it, and whether the limitation period has run.',
        youCanDo:
          'Gather transfer records, messages, and anything else that shows the transaction. If you are worried assets will disappear, provisional attachment can be considered now rather than later.',
      },
      {
        title: 'Claiming before litigation',
        body: 'A formal written demand, or a payment order where there is little real dispute. Both are faster and cheaper than a lawsuit.',
        youCanDo:
          'Send the demand, or apply for a payment order. If the other side does not object, a payment order becomes final on its own.',
      },
      {
        title: 'Filing and arguing the case',
        body: 'The claim is filed and the two sides exchange written arguments and evidence. Many cases end in a court-brokered settlement rather than a judgment.',
        youCanDo:
          'Submit arguments and evidence, apply for fact-finding enquiries or expert valuation where objective proof is needed, and negotiate through the court.',
      },
      {
        title: 'Judgment',
        body: 'The court decides whether to grant the claim.',
        youCanDo: 'Decide whether to appeal, within the period allowed.',
      },
      {
        title: 'Enforcement',
        body: 'A final judgment does not move money by itself. If the other side still does not pay, you have to find assets and enforce against them.',
        youCanDo:
          'Apply for asset disclosure and asset searches, and attach bank accounts, wages, or property.',
      },
    ],
    timelineClosing:
      'A judgment is not the end of recovery — it is the start of it. And even where there is nothing to collect today, a judgment lets you enforce later, if the other side acquires assets.',
    attorneyAssistance: [
      'Whether your claim is worth litigating at all, once court costs, time, and the odds of actually collecting are counted.',
      'What evidence Korean courts weigh heavily — and whether you have it.',
      'When a demand letter or negotiated settlement gets you more than a lawsuit.',
    ],
    faqs: [
      {
        question: 'Does this have to go all the way to a lawsuit?',
        answer:
          'Often not. A formal demand resolves some disputes outright, and where there is little genuine argument a payment order is quicker and cheaper than suing. Many cases that are filed still end in settlement. The method should be chosen for the case, not by default.',
      },
      {
        question: 'I received a court document. How long do I have?',
        answer:
          'Deadlines are the part you cannot recover from. A complaint and a payment order each carry their own response period, and letting one pass can mean the other side simply wins. Check the date you received it and tell us that first — we will work out the order of what to do.',
      },
      {
        question: 'There is no written loan agreement. Can I still recover?',
        answer:
          'Frequently, yes. Bank transfer records, messages, and call recordings can establish that money was lent. What is possible depends on what you actually have, so bring it and we will tell you where it puts you.',
      },
      {
        question: 'The other side says they have nothing. Is suing pointless?',
        answer:
          'Understand the sequence first: there is no legal route to inspect someone’s assets before you have a judgment. Asset disclosure and asset searches only become available afterwards. So "do they have anything" is usually a question answered after judgment, not before — which is exactly why some people sue for the judgment itself.',
      },
      {
        question: 'If I win, does the other side pay my costs?',
        answer:
          'Court costs generally follow the result, and attorney fees are recoverable within limits set by court rules — not necessarily the full amount you paid. We will tell you what that gap looks like in your case before you commit.',
      },
      CONSULTATION_ONLY_FAQ,
    ],
    retainer: {
      range: 'from ₩3,000,000',
      dependsOn: 'the amount claimed and how difficult the claim is to prove',
      closing:
        'Pre-litigation steps such as a payment order can cost considerably less. We do not recommend litigation with poor prospects — but recovery is not always the only purpose, so we start by working out what the case is for.',
    },
  },
  {
    slug: 'real-estate-lease-disputes',
    headerImage: '/assets/pa-realestate.png',
    title: 'Real Estate & Lease Disputes',
    icon: 'Building',
    cardDescription: 'Assistance with housing leases, deposit recovery, and real estate disputes in Korea.',
    metaDescription:
      'Real estate and lease disputes for foreigners in Korea — jeonse and wolse deposit recovery, tenant protections, and the deadlines that matter. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Korean housing runs on deposits. You may have handed over a sum that dwarfs the rent, on the understanding that you get it back at the end — and now the end has come and it has not come back.',
      'For a foreign tenant this is doubly uncomfortable. The protections that exist here are real, but they attach to steps you may not know you were supposed to take, and some of them stop protecting you the moment you move out and change your registered address.',
      'The same is true from the other side. Landlords who need a property back cannot simply take it back. Whichever side you are on, the sequence matters more than the argument.',
    ],
    commonSituations: [
      'Your lease has ended and your deposit has not been returned',
      'You need to move out but the deposit is still unpaid',
      'A tenant has stopped paying rent and will not leave',
      'You are in dispute over lease terms, renewal, or repairs',
      'You are being obstructed in recovering a premium on a commercial lease',
      'You co-own a property and want it divided or sold',
      'A sale has gone wrong — the other side will not complete, or wants out',
    ],
    timeline: [
      {
        title: 'Reading the contract and the facts',
        body: 'The lease or sale contract, the property register, and the paper trail between you — notices, messages, receipts.',
        youCanDo:
          'Assemble the documents and identify who actually holds the rights on the register. A single clause in the contract can decide the whole dispute. A formal written notice is sometimes sent at this point.',
      },
      {
        title: 'Locking things down',
        body: 'If the other side disposes of the property or hands over possession, winning later may not help you.',
        youCanDo:
          'Depending on the dispute, this is where measures such as a lease registration order, an injunction against transferring possession, or provisional attachment are considered.',
      },
      {
        title: 'Litigation',
        body: 'The claim is brought in the form that fits the dispute — recovery of a deposit, possession, division of co-owned property, damages, or transfer of title.',
        youCanDo:
          'Submit arguments and evidence, obtain objective proof such as expert valuation, and negotiate through the court.',
      },
      {
        title: 'Judgment and enforcement',
        body: 'If the other side still does not comply, the judgment has to be enforced — eviction, auction, distribution of proceeds.',
        youCanDo: 'Pursue the enforcement route that matches the judgment.',
      },
    ],
    timelineClosing:
      'These cases are won by fitting the facts to the right legal theory — and the protective steps taken early are what preserve the result.',
    attorneyAssistance: [
      'Whether your deposit is actually recoverable, and in what order you rank against other creditors.',
      'Which protections under Korean housing lease law apply to you as a foreign tenant — and which deadlines you must not miss.',
    ],
    faqs: [
      {
        question: 'My deposit has not been returned but I have to move out. What do I do?',
        answer:
          'Order matters here more than anywhere else. The protections a tenant builds up are tied to holding the property and to your registered address — so moving out and re-registering elsewhere before securing your position can weaken what you had. There is a registration procedure designed for exactly this situation, and it needs to be completed before you go, not after.',
      },
      {
        question: 'Do Korean tenant protections apply to me as a foreigner?',
        answer:
          'The housing lease protections are not restricted to Korean nationals. What varies is whether you completed the steps they attach to. That is the first thing we check, because it decides what position you are actually in.',
      },
      {
        question: 'What deadlines must I not miss?',
        answer:
          'The ones that bite are usually tied to moving out, to responding to court documents, and to the timing of notices around renewal or termination. Bring the dates — the contract date, the end date, and the date you received anything in writing — and we will map them.',
      },
      {
        question: 'My tenant will not pay and will not leave. Can I change the locks or remove their things?',
        answer:
          'No. Taking the property back yourself creates a second, worse legal problem on top of the first. Recovering possession goes through court process and enforcement, usually with a protective step taken first to stop possession being passed to someone else.',
      },
      {
        question: 'We co-own a property and the other owner will not cooperate.',
        answer:
          'A co-owner can seek division, and division does happen — the argument is over the method rather than whether it occurs at all. Which method applies depends on the property and the parties.',
      },
      CONSULTATION_ONLY_FAQ,
    ],
    retainer: {
      range: 'from ₩3,000,000',
      dependsOn: 'the type of dispute and the amount in issue',
      closing:
        'Some procedures are standardised enough that people handle them without representation. We will tell you at the consultation which parts of your situation genuinely need us and which do not.',
    },
  },
  {
    slug: 'debt-collection',
    headerImage: '/assets/pa-debt.png',
    title: 'Debt Collection',
    icon: 'Banknote',
    cardDescription: 'Recovering unpaid debts and enforcing claims and judgments in Korea.',
    metaDescription:
      'Debt collection in Korea for foreign residents and businesses — demands, payment orders, judgments, and enforcement. Whether a debt is realistically recoverable. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Being owed money in a country you did not grow up in adds a particular kind of doubt. You are not sure which steps are normal here, whether chasing it will cost more than the debt, or whether the person simply stops answering once they realise you are unfamiliar with the system.',
      'The useful question is not "can I sue" — usually you can. It is whether there is anything at the end of it worth collecting, and what the cheapest route to that point looks like.',
      'That question is answerable early, and it decides everything after it.',
    ],
    commonSituations: [
      'A personal loan has not been repaid and contact has gone quiet',
      'Invoices for goods or services remain unpaid',
      'A business partner or client owes you money and keeps postponing',
      'A deposit or advance has not been returned',
      'You already have a judgment and still have not been paid',
      'You are being pursued for a debt you believe you do not owe',
    ],
    timeline: [
      {
        title: 'Assessing the debt',
        body: 'What proves the debt exists, whether the limitation period still allows a claim, and what is realistically known about the other side.',
        youCanDo:
          'Collect transfer records, contracts, invoices, and messages. Where there is a risk assets will be moved, provisional attachment can be considered at this point.',
      },
      {
        title: 'Demand and payment order',
        body: 'A formal written demand often produces payment or a repayment arrangement. Where the debt is not genuinely disputed, a payment order is faster and cheaper than a lawsuit.',
        youCanDo:
          'Send the demand or apply for a payment order. If it goes unopposed, it becomes final without a trial.',
      },
      {
        title: 'Litigation',
        body: 'Where the debt is disputed, the claim is filed and argued in the ordinary way.',
        youCanDo: 'Submit evidence of the debt, and negotiate through the court where settlement serves you better.',
      },
      {
        title: 'Enforcement',
        body: 'This is where money actually moves. Assets are identified and attached — bank accounts, wages, property.',
        youCanDo:
          'Apply for asset disclosure and asset searches, register the debtor as a defaulter where appropriate, and attach what is found.',
      },
    ],
    timelineClosing:
      'Enforcement is the part that determines whether you were repaid or merely proved right. It should be planned from the beginning, not discovered at the end.',
    attorneyAssistance: [
      "Whether the debtor has assets worth pursuing — because a judgment you can't enforce is just paper.",
      'What enforcement in Korea realistically costs and how long it takes.',
    ],
    faqs: [
      {
        question: 'How do I know whether the debtor has anything to take?',
        answer:
          'Usually you do not, not before judgment. The procedures for compelling disclosure of assets are only available once you hold one. That is the main reason we talk about the goal of the case first — recovery now, or a judgment you can enforce whenever their position changes.',
      },
      {
        question: 'Is it worth pursuing a small debt?',
        answer:
          'Sometimes it is not, and we will say so. Where it is, the route is usually the pre-litigation one — a demand or a payment order — rather than a full lawsuit. The cost difference is significant.',
      },
      {
        question: 'How long does recovery take?',
        answer:
          'An unopposed payment order can conclude in weeks. A disputed case runs to months or longer, and enforcement adds time after that. We will give you the likely shape of it once we see the case.',
      },
      {
        question: 'I already have a judgment from a court. What now?',
        answer:
          'Then you are at the enforcement stage, and the work is finding and attaching assets rather than proving the debt. Bring the judgment and we will tell you which enforcement routes are open.',
      },
      {
        question: 'Can I recover a debt owed by someone who has left Korea?',
        answer:
          'It becomes harder and depends on where they and their assets are. This is worth assessing honestly before spending money on it, which is what the consultation is for.',
      },
      CONSULTATION_ONLY_FAQ,
    ],
    retainer: {
      range: 'from ₩3,000,000',
      dependsOn: 'the amount claimed and how difficult the debt is to prove',
      closing:
        'Pre-litigation routes such as a payment order generally cost less. If the realistic prospect of recovery does not justify the spend, we will tell you that instead of taking the case.',
    },
  },
  {
    slug: 'divorce-family-law',
    headerImage: '/assets/pa-family.png',
    title: 'Divorce & Family Law',
    icon: 'Users',
    cardDescription: 'Handling international divorce, child custody, and inheritance matters.',
    metaDescription:
      'Divorce and family law for foreigners in Korea — international divorce, custody, property division, and residency questions. Consult before deciding anything. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'You do not have to have decided anything to be here. Some people come before they have said the word out loud. More often, the conversation has already started at home and has stopped moving.',
      'It stalls for a predictable reason. The argument becomes whether to divorce, while the things that actually have to be agreed — how property is divided, who the children live with, what support is paid — never get discussed at all.',
      'If you are the foreign spouse, two more worries sit underneath: whether a Korean court will see you as the outsider, and what a divorce does to a residency status that is tied to the marriage. A consultation is not a decision. It is finding out what is on the table and what the range looks like from where you are standing.',
    ],
    commonSituations: [
      'You are considering divorce but have not decided',
      'Your spouse has raised divorce, or you have been served with a petition',
      'You have no idea how property division or custody would work out',
      'Divorce is being discussed at home but the terms never are',
      'You have talked in circles and reached nothing',
      'You are worried about assets being moved or disposed of',
      'Child support ordered or agreed is not being paid',
      'A property or compensation settlement is not being honoured',
    ],
    timeline: [
      {
        title: 'Getting your position straight',
        body: 'Assets built up during the marriage, the childcare arrangement as it actually is, and the circumstances behind the breakdown.',
        youCanDo:
          'Establish and document the facts on grounds, children, and property. The quality of this stage shapes every stage after it — and it is worth doing even if talks are already underway.',
      },
      {
        title: 'Divorce by agreement',
        body: 'Where terms are agreed, divorce can proceed by agreement with court confirmation rather than by litigation.',
        youCanDo:
          'Work out each item that has to be settled — division, custody, support, contact — check whether the terms are reasonable, and put them in writing. Agreements that were never written down become the next dispute.',
      },
      {
        title: 'Filing and argument',
        body: 'Where agreement fails, the case is filed. Grounds, children, and property are argued in writing and the substance of the case emerges. The court may involve professionals where custody or compensation is contested.',
        youCanDo:
          'Prove the grounds, apply to trace the other side’s assets, evidence your contribution, and set out the childcare position. Protective orders can be sought where needed.',
      },
      {
        title: 'Mediation',
        body: 'Once the issues and evidence are clear, courts commonly attempt mediation late in the case.',
        youCanDo:
          'Weigh the proposed terms. A successful mediation ends the case without judgment and carries the same force as a final decision.',
      },
      {
        title: 'Judgment and compliance',
        body: 'Otherwise the court decides divorce, division, compensation, custody and support. It is not over until what was decided is actually done.',
        youCanDo:
          'Decide on appeal within the period. Where support goes unpaid, apply for a compliance order or enforce against assets.',
      },
    ],
    timelineClosing:
      'Whichever route the case takes, the preparation in stage one is what produces the outcome. Before a decision, or in the middle of talks that are going nowhere — going back to preparation is what moves it.',
    attorneyAssistance: [
      'How Korean courts actually decide custody and property division in international marriages — not how you might wish they did.',
      "What jurisdiction issues arise when spouses hold different nationalities, and which country's courts you should be in.",
      'How divorce can affect a marriage-based residency status — a question that belongs in the case plan from day one, not after the judgment.',
    ],
    faqs: [
      {
        question: 'I have not decided anything yet. Can I still consult?',
        answer:
          'That is the most useful time to do it. Once you know how division and custody would realistically fall out in your circumstances, you have a basis to decide whether to wait, prepare, or proceed. Consulting and then doing nothing is a perfectly normal outcome.',
      },
      {
        question: 'My spouse is Korean. Does that put me at a disadvantage in court?',
        answer:
          'Nationality is not the test. Korean family courts decide property division on contribution during the marriage and custody on the child’s circumstances. What does create real disadvantage is being unable to evidence your contribution or your role in raising the children — which is a preparation problem, and a fixable one.',
      },
      {
        question: "Which country's courts should handle our divorce?",
        answer:
          'Where spouses hold different nationalities or have lived in more than one country, this genuinely can be in issue, and it can affect both the process and the result. It is one of the first things to settle rather than an afterthought, so bring the details of where you have each lived and married.',
      },
      {
        question: 'How is property division decided?',
        answer:
          'The principle is that property built up during the marriage is divided according to each spouse’s contribution. Whose name it is in matters less than what each contributed to acquiring it — and contribution at home, through housework and childcare, is recognised.',
      },
      {
        question: 'What happens to my residency if we divorce?',
        answer:
          'Where a status is tied to the marriage, this is a real question rather than a background one, and the answer depends on your circumstances and the basis of your stay. We treat it as part of the case plan from the beginning, not something to sort out after a judgment.',
      },
      {
        question: 'Can I consult without my spouse knowing?',
        answer:
          'Yes. The fact and the content of a consultation are protected by an attorney’s duty of confidentiality under Korean law. We can also arrange how and when we contact you to suit your situation.',
      },
      CONSULTATION_ONLY_FAQ,
    ],
    retainer: {
      range: '₩4,000,000 – ₩7,000,000',
      dependsOn: 'whether property division and custody are in issue',
      closing:
        "We don't push you toward divorce, and we don't talk you out of it. We start with what you can protect.",
    },
  },
  {
    slug: 'labor-employment',
    headerImage: '/assets/pa-labor.png',
    title: 'Labor & Employment',
    icon: 'Briefcase',
    cardDescription:
      'Guidance on Korean labor laws, unfair dismissal, and wage disputes for employees and employers.',
    metaDescription:
      'Labor and employment law for foreign workers in Korea — unfair dismissal, unpaid wages and severance, and what to do when your visa is tied to your employer. English consultations in Pyeongtaek.',
    showOnHome: true,
    overview: [
      'Losing a job in Korea is not only about the job when your permission to stay is connected to it. That single fact changes how people behave — many put up with things they would never accept at home, because raising them feels like risking everything at once.',
      'It is worth separating the two questions. What you are legally owed, and what the practical consequences of pursuing it are. They are not the same question, and answering them together is what makes the situation feel impossible.',
      'Korean labour law sets specific standards for dismissal and for what must be paid. Whether your situation meets them is checkable — and the routes to a remedy are not all lawsuits.',
    ],
    commonSituations: [
      'You were dismissed and were given little or no explanation',
      'Wages, overtime, or severance have not been paid',
      'You were pressured to resign rather than dismissed outright',
      'Your contract terms and your actual working conditions do not match',
      'Your employer is threatening consequences for your visa if you complain',
      'You are an employer facing a claim from a former employee',
    ],
    timeline: [
      {
        title: 'Working out what you are owed',
        body: 'Contract, payslips, working hours, and how the employment ended. This determines both the claim and the route.',
        youCanDo:
          'Collect the contract, wage records, messages, and anything documenting hours worked or the circumstances of dismissal.',
      },
      {
        title: 'Choosing the route',
        body: 'Wage claims and dismissal claims do not necessarily go the same way. Administrative routes exist alongside the courts, and they differ in speed, cost, and what they can deliver.',
        youCanDo:
          'Decide between an administrative complaint and litigation on the basis of what you want out of it — payment, reinstatement, or a record.',
      },
      {
        title: 'Making the claim',
        body: 'The claim proceeds through the route chosen. Deadlines apply, and some of them are short.',
        youCanDo:
          'File within time, and put forward the evidence that goes to the specific legal standard being applied.',
      },
      {
        title: 'Outcome and recovery',
        body: 'An award or judgment still has to be complied with.',
        youCanDo: 'Enforce where payment is not made voluntarily.',
      },
    ],
    timelineClosing:
      'The routes have different clocks. Working out which one fits, early, is usually worth more than arguing the merits harder later.',
    attorneyAssistance: [
      'Whether your dismissal qualifies as "unfair" under Korean labor law — the standard is specific, and not every unfair-feeling dismissal meets it.',
      'What you are owed in unpaid wages or severance, and the fastest route to collecting it (labor office vs. lawsuit).',
    ],
    faqs: [
      {
        question: 'Can I file a claim if my visa is tied to my employer?',
        answer:
          'This is the question that stops most people, and it deserves a straight answer rather than encouragement. Your entitlement to wages you have earned does not disappear because of how you are sponsored. What varies is the practical consequence for your stay, and that depends on your status and your circumstances. We work through both sides of it with you before you do anything.',
      },
      {
        question: 'I was told to resign instead of being dismissed. Does that change things?',
        answer:
          'It can change a great deal, because what the paperwork says and what actually happened are not always the same. Whether a resignation was genuinely voluntary is something that gets examined. Keep whatever was said in writing.',
      },
      {
        question: 'My employer has not paid my final wages or severance. What is the fastest route?',
        answer:
          'For unpaid wages, the administrative route is often faster and cheaper than suing, though it is not right for every case. Which one suits you depends on the amount, the evidence, and what you want to happen.',
      },
      {
        question: 'How long do I have to challenge a dismissal?',
        answer:
          'Shorter than most people expect, and the period differs by route. If you have been dismissed, treat the date as the thing that matters most and tell us that first.',
      },
      {
        question: 'Is what I was paid actually legal?',
        answer:
          'Minimum standards apply to wages, working hours, and overtime regardless of what a contract says. If your pay and your hours do not line up, that is checkable against the records.',
      },
      CONSULTATION_ONLY_FAQ,
    ],
    retainer: {
      dependsOn: 'the route chosen and the complexity of the dispute',
      closing:
        'Labour matters are quoted after we review your case, in writing, before you commit — and the figure does not change while the case is running. Some wage claims are resolved through administrative routes at considerably lower cost, and we will tell you when that is the better option.',
    },
  },
  {
    slug: 'korean-police-investigation',
    title: 'Korean Police Investigation',
    icon: 'Shield',
    cardDescription:
      'Support for foreign residents summoned or questioned by Korean police.',
    metaDescription:
      'Help for foreigners facing a Korean police investigation — what a summons means and how an attorney can assist. English consultations in Pyeongtaek.',
    showOnHome: false,
    overview: [
      'Being contacted or summoned by the Korean police is alarming, particularly when you are unsure of your rights or what the process involves.',
      'We help foreign residents understand what a police investigation means for them and represent them during questioning where appropriate.',
    ],
    commonSituations: [
      'You received a police summons',
      'You have been asked to attend questioning',
      'You are named as a suspect or a witness',
    ],
  },
]

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return PRACTICE_AREAS.find((area) => area.slug === slug)
}

export const HOME_PRACTICE_AREAS = PRACTICE_AREAS.filter((area) => area.showOnHome)
