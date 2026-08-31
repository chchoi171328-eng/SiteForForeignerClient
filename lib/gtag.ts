type GtagFn = (command: string, action: string, params?: Record<string, unknown>) => void;

/**
 * Google Ads account. Configured as an extra gtag destination alongside GA4 in
 * components/GoogleAnalytics.tsx — the gtag.js library is loaded once and serves
 * both, so this must not be added as a second tag.
 */
export const ADS_CONVERSION_ID = 'AW-18027167560';

/** Conversion action fired when a consultation inquiry is actually delivered. */
export const ADS_CONTACT_CONVERSION = `${ADS_CONVERSION_ID}/KJyXCIXLzdscEMj-gpRD`;

/**
 * Report a Google Ads conversion.
 *
 * Call this only after the action has genuinely completed — not on button click.
 * Safe when gtag is absent (e.g. no measurement ID in dev): it no-ops.
 */
export function reportAdsConversion(sendTo: string) {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    if (typeof gtag === 'function') {
        gtag('event', 'conversion', { send_to: sendTo });
    }
}

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

// Phone-click tracking lives in components/PhoneClickTracker.tsx: one
// delegated listener records GA4 `click_to_call` for every tel: link. The
// old per-link handler — which also fired a generic `conversion` event at
// the GA4 measurement ID and intercepted tel: navigation — was removed per
// the remote-nationwide brief PART A.
