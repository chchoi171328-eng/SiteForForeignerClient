import { CONSULTATION } from '../constants';

/**
 * Standard two-tier consultation fee block (guideline A-1). Used everywhere fees
 * are shown so the wording — including the Korean-site transparency line — stays
 * identical across the site. `variant="dark"` for use on navy backgrounds.
 */
export default function ConsultationFees({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
    const isDark = variant === 'dark';
    const heading = isDark ? 'text-white' : 'text-navy-900';
    const body = isDark ? 'text-gray-300' : 'text-gray-700';
    const muted = isDark ? 'text-gray-400' : 'text-gray-500';
    const marker = isDark ? 'text-gold-400' : 'text-gold-600';

    return (
        <div className={`text-sm ${body}`}>
            <p className={`font-bold ${heading} mb-3`}>
                Consultation Fees — {CONSULTATION.DURATION_MIN} minutes, VAT included
            </p>
            <ul className="space-y-1 mb-3">
                <li>
                    <span className={marker}>•</span> Consultation in Korean: {CONSULTATION.FEE_KRW_KOREAN_LABEL}
                </li>
                <li>
                    <span className={marker}>•</span> Consultation in English: {CONSULTATION.FEE_KRW_ENGLISH_LABEL} ({CONSULTATION.FEE_USD_APPROX_LABEL})
                    <span className={`block pl-4 ${muted}`}>
                        Conducted directly by the attorney, not through an interpreter.
                    </span>
                </li>
            </ul>
            <p className={muted}>{CONSULTATION.KOREAN_SITE_LINE}</p>
        </div>
    );
}
