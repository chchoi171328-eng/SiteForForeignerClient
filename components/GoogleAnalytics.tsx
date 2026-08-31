'use client'

import Script from 'next/script'
import { ADS_CONVERSION_ID } from '../lib/gtag'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          // Google Ads destination on the same gtag.js library — not a second tag.
          gtag('config', '${ADS_CONVERSION_ID}');
        `}
      </Script>
    </>
  )
}
