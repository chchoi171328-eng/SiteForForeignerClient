import type React from 'react';

/**
 * Safely report a phone-call conversion to Google Ads/Analytics.
 *
 * When GA is not loaded (e.g. NEXT_PUBLIC_GA_MEASUREMENT_ID is missing in dev),
 * `window.gtag_report_conversion` is undefined. In that case we do NOT call
 * preventDefault, so the browser follows the tel: link normally instead of
 * crashing and blocking the call.
 */
export function reportPhoneConversion(e: React.MouseEvent<HTMLAnchorElement>) {
    const report = (window as unknown as { gtag_report_conversion?: (url: string) => void }).gtag_report_conversion;
    if (typeof report === 'function') {
        e.preventDefault();
        report(e.currentTarget.href);
    }
}
