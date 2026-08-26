import { CONSULTATION } from '../constants';

/**
 * Standard consultation fee block (guideline A-1). One unified fee regardless of
 * language. Used everywhere fees are shown so the wording — including the
 * unification signal and the Korean-site disclosure line — stays identical.
 * `variant="dark"` for use on navy backgrounds.
 */
export default function ConsultationFees({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
    const isDark = variant === 'dark';
    const heading = isDark ? 'text-white' : 'text-navy-900';
    const body = isDark ? 'text-gray-300' : 'text-gray-700';
    const muted = isDark ? 'text-gray-400' : 'text-gray-500';

    return (
        <div className={`text-sm ${body}`}>
            <p className={`font-bold ${heading} mb-1`}>{CONSULTATION.BLOCK_HEADING}</p>
            <p className={`font-bold ${heading}`}>
                {CONSULTATION.DURATION_MIN} minutes · {CONSULTATION.FEE_KRW_LABEL} (
                {CONSULTATION.FEE_USD_APPROX_LABEL}), VAT included
            </p>
            <p className="mb-3">
                If the consultation ends within {CONSULTATION.SHORT_DURATION_MIN} minutes, you pay
                only {CONSULTATION.SHORT_FEE_KRW_LABEL} ({CONSULTATION.SHORT_FEE_USD_APPROX_LABEL}).
            </p>
            <p className="mb-3 leading-relaxed">{CONSULTATION.BLOCK_BODY}</p>
            <p className={muted}>{CONSULTATION.KOREAN_SITE_LINE}</p>
        </div>
    );
}
