import type React from 'react';

type GtagFn = (command: string, action: string, params?: Record<string, unknown>) => void;

/**
 * Send a custom event to Google Analytics if it is loaded.
 *
 * Safe to call when GA is absent (e.g. NEXT_PUBLIC_GA_MEASUREMENT_ID unset in
 * dev): it becomes a no-op instead of throwing.
 */
export function trackEvent(action: string, params?: Record<string, unknown>) {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    if (typeof gtag === 'function') {
        gtag('event', action, params);
    }
}

/**
 * Report a phone-call click: fires a GA "click_to_call" event and, when Google
 * Ads conversion tracking is present, the conversion callback.
 *
 * When GA is not loaded, `window.gtag_report_conversion` is undefined; in that
 * case we do NOT call preventDefault, so the browser follows the tel: link
 * normally instead of blocking the call.
 */
export function reportPhoneConversion(e: React.MouseEvent<HTMLAnchorElement>) {
    trackEvent('click_to_call');
    const report = (window as unknown as { gtag_report_conversion?: (url: string) => void }).gtag_report_conversion;
    if (typeof report === 'function') {
        e.preventDefault();
        report(e.currentTarget.href);
    }
}
