'use client';

import { useEffect } from 'react';
import { trackEvent } from '../lib/gtag';

/**
 * Site-wide phone-click tracking (remote-nationwide brief PART A).
 *
 * One delegated listener covers every tel: link — header, footer, hero,
 * floating button, and the plain anchors inside server components — so each
 * click records exactly one GA4 `click_to_call` event and nothing else.
 * The old gtag_report_conversion path (which fired a generic `conversion`
 * event at the GA4 measurement ID and intercepted navigation) is gone; this
 * listener never calls preventDefault, so the tel: link always proceeds.
 */
export default function PhoneClickTracker() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as Element | null;
            if (target?.closest('a[href^="tel:"]')) {
                trackEvent('click_to_call');
            }
        };
        // Capture phase, so React handlers stopping propagation can't hide clicks.
        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, []);

    return null;
}
