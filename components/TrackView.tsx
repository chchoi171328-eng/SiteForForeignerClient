'use client';

import { useEffect } from 'react';
import { trackEvent } from '../lib/gtag';

/**
 * Fires a custom GA event once when a page mounts. Use on server-rendered pages
 * to record a labeled "viewed" event (in addition to GA's automatic page_view).
 */
export default function TrackView({ event, params }: { event: string; params?: Record<string, unknown> }) {
    useEffect(() => {
        trackEvent(event, params);
        // Only fire once per mount for this event/params.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
