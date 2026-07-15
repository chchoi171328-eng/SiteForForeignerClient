// Legal document content (single source of truth) for /privacy, /terms, /disclaimer.
//
// Privacy and Disclaimer text is migrated verbatim from the former footer modals.
// Terms of Use is standard website boilerplate and is flagged for attorney review
// (see `needsReview`). Contact details come from CONTACT_INFO so they never drift.

import { CONTACT_INFO } from '@/constants'

export type LegalSection = {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalDocument = {
  slug: string
  title: string
  metaDescription: string
  /** Shown as an effective/last-updated placeholder until the firm sets a date. */
  effectiveDate?: string
  /** When true, the page shows a visible "pending attorney review" notice. */
  needsReview?: boolean
  intro: string
  sections: LegalSection[]
}

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    metaDescription:
      'How SOL & LUNA Law Firm collects, uses, and protects your personal information under the Korean Personal Information Protection Act (PIPA).',
    intro:
      'SOL & LUNA Law Firm ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
    sections: [
      {
        heading: '1. Information We Collect',
        paragraphs: [
          'We may collect personal information that you voluntarily provide to us when you contact us, including but not limited to:',
        ],
        bullets: [
          'Name and contact information (email address, phone number, address)',
          'Legal matter details and case information',
          'Communication preferences',
          'Any other information you choose to provide',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        paragraphs: ['We use the information we collect to:'],
        bullets: [
          'Provide legal services and respond to your inquiries',
          'Communicate with you about your legal matters',
          'Improve our services and client experience',
          'Comply with legal obligations',
        ],
      },
      {
        heading: '3. Retention Period',
        paragraphs: [
          'We retain the personal information you submit through an inquiry for one (1) year from the date of collection, after which it is destroyed without delay. Where a specific retention period is required by applicable law, we retain the relevant information for that statutory period.',
        ],
      },
      {
        heading: '4. Third-Party Processors and Cross-Border Transfer',
        paragraphs: [
          'To receive and respond to your inquiries, we use EmailJS, an email delivery service, to transmit the contents of your inquiry to us. This provider processes data on servers located outside Korea (in the United States), so submitting an inquiry involves a cross-border transfer of the personal information it contains.',
          'The information transferred is limited to what you include in the inquiry — such as your name, contact details, and message — and is used only to deliver and respond to that inquiry.',
        ],
      },
      {
        heading: '5. Cookies',
        paragraphs: [
          'This website does not use analytics or advertising cookies. Any cookies used are limited to those strictly necessary for the website to function. You can control or delete cookies through your browser settings.',
        ],
      },
      {
        heading: '6. Information Security',
        paragraphs: [
          'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        ],
      },
      {
        heading: '7. Your Rights',
        paragraphs: [
          'Under the Korean Personal Information Protection Act (PIPA), you have the right to access, correct, delete, or suspend the processing of your personal information. You may exercise these rights by contacting us.',
        ],
      },
      {
        heading: '8. Contact Us',
        paragraphs: [
          `If you have any questions about this Privacy Policy, please contact us at ${CONTACT_INFO.EMAIL} or call ${CONTACT_INFO.PHONE}.`,
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    metaDescription:
      'The terms governing your use of the SOL & LUNA Law Firm website.',
    needsReview: true,
    intro:
      'These Terms of Use govern your access to and use of the SOL & LUNA Law Firm website. By using this website, you agree to these terms.',
    sections: [
      {
        heading: '1. Use of This Website',
        paragraphs: [
          'This website is provided for general informational purposes. You agree to use it only for lawful purposes and not in any way that could damage, disable, or impair the website.',
        ],
      },
      {
        heading: '2. No Legal Advice',
        paragraphs: [
          'The content on this website is general information and does not constitute legal advice. Using this website does not create an attorney–client relationship. See our Disclaimer for details.',
        ],
      },
      {
        heading: '3. Intellectual Property',
        paragraphs: [
          'The content, layout, and design of this website are the property of SOL & LUNA Law Firm unless otherwise stated, and may not be reproduced without permission.',
        ],
      },
      {
        heading: '4. External Links',
        paragraphs: [
          'This website may link to third-party websites. We are not responsible for the content or practices of those websites.',
        ],
      },
      {
        heading: '5. Changes to These Terms',
        paragraphs: [
          'We may update these Terms of Use from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
        ],
      },
      {
        heading: '6. Governing Law',
        paragraphs: [
          'These Terms of Use are governed by the laws of the Republic of Korea.',
        ],
      },
      {
        heading: '7. Contact',
        paragraphs: [
          `For questions about these Terms of Use, contact us at ${CONTACT_INFO.EMAIL} or ${CONTACT_INFO.PHONE}.`,
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Legal Disclaimer',
    metaDescription:
      'Legal disclaimer for the SOL & LUNA Law Firm website — general information only, no attorney–client relationship, and no guarantee of results.',
    intro: 'Please read this disclaimer carefully before using the services of SOL & LUNA Law Firm.',
    sections: [
      {
        heading: '1. No Attorney-Client Relationship',
        paragraphs: [
          'The information provided on this website and through initial consultations does not create an attorney-client relationship. An attorney-client relationship is established only through a formal engagement agreement signed by both parties.',
        ],
      },
      {
        heading: '2. General Information Only',
        paragraphs: [
          'The content on this website is for general informational purposes only and should not be construed as legal advice. Every legal situation is unique, and information provided may not be applicable to your specific circumstances.',
        ],
      },
      {
        heading: '3. No Guarantee of Results',
        paragraphs: [
          'Prior results do not guarantee a similar outcome. The outcome of any legal matter depends on many factors unique to each case. We cannot and do not guarantee specific results.',
        ],
      },
      {
        heading: '4. Jurisdictional Limitations',
        paragraphs: [
          'Our legal services are provided in accordance with Korean law. We primarily serve clients in Korea and matters governed by Korean jurisdiction. International or cross-border legal matters may require coordination with attorneys in other jurisdictions.',
        ],
      },
      {
        heading: '5. Website Accuracy',
        paragraphs: [
          'While we strive to keep the information on this website current and accurate, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.',
        ],
      },
      {
        heading: '6. Limitation of Liability',
        paragraphs: [
          'SOL & LUNA Law Firm shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of this website or our services.',
        ],
      },
      {
        heading: '7. Contact for Legal Advice',
        paragraphs: [
          `For specific legal advice tailored to your situation, please contact us for a consultation at ${CONTACT_INFO.PHONE} or ${CONTACT_INFO.EMAIL}.`,
        ],
      },
    ],
  },
]

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((doc) => doc.slug === slug)
}
