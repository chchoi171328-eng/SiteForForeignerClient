// Legal fee data (single source of truth for the /fees page).
//
// Amounts MUST match the firm's Korean-language /fees page. Retainer figures are
// exclusive of VAT (10%); the consultation fee (see CONSULTATION in constants)
// includes VAT. Keep KRW only — the sole USD figure allowed is the consultation
// fee's approx. US$70.

export type RetainerRange = {
  area: string
  range: string
  dependsOn: string
}

export const RETAINER_RANGES: RetainerRange[] = [
  {
    area: 'Criminal defense',
    range: '₩4,000,000 – ₩12,000,000',
    dependsOn: 'stage of the case and factual complexity',
  },
  {
    area: 'Divorce & family',
    range: '₩4,000,000 – ₩7,000,000',
    dependsOn: 'property division and custody issues',
  },
  {
    area: 'Civil (loans & contract disputes)',
    range: 'from ₩3,000,000',
    dependsOn: 'claim amount and difficulty of proof',
  },
  {
    area: 'Real estate & lease',
    range: 'from ₩3,000,000',
    dependsOn: 'type of dispute and the amount in issue',
  },
]
