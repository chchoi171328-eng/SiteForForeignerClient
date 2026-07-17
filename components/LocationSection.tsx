'use client';

import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Icons } from './Icons';
import { reportPhoneConversion, trackEvent } from '../lib/gtag';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const LocationSection: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section
            id="location"
            ref={ref as React.RefObject<HTMLElement>}
            className={`bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-navy-900 p-12 lg:p-20 flex flex-col justify-center text-white">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Visit Our Office</h2>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <Icons.MapPin className="w-6 h-6 text-gold-400 mt-1 shrink-0" aria-hidden="true" />
                            <div>
                                <h3 className="font-bold text-lg text-gold-400 mb-1">Address</h3>
                                <p className="text-gray-300">{CONTACT_INFO.ADDRESS_EN}</p>
                                <p className="text-gray-500 text-sm mt-1">{CONTACT_INFO.ADDRESS_KR}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Icons.Phone className="w-6 h-6 text-gold-400 mt-1 shrink-0" aria-hidden="true" />
                            <div>
                                <h3 className="font-bold text-lg text-gold-400 mb-1">Phone</h3>
                                <a
                                    href={`tel:${CONTACT_INFO.PHONE}`}
                                    onClick={reportPhoneConversion}
                                    className="text-gray-300 hover:text-white text-xl"
                                    aria-label={`Call us at ${CONTACT_INFO.PHONE}`}
                                >
                                    {CONTACT_INFO.PHONE}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Icons.Mail className="w-6 h-6 text-gold-400 mt-1 shrink-0" aria-hidden="true" />
                            <div>
                                <h3 className="font-bold text-lg text-gold-400 mb-1">Email</h3>
                                <a
                                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                                    onClick={() => trackEvent('email_clicked')}
                                    className="text-gray-300 hover:text-white"
                                    aria-label={`Email us at ${CONTACT_INFO.EMAIL}`}
                                >
                                    {CONTACT_INFO.EMAIL}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[400px] lg:h-auto w-full bg-gray-200 relative">
                    <iframe
                        title="Google Map showing SOL & LUNA Law Firm location in Pyeongtaek"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src={CONTACT_INFO.MAP_URL}
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    >
                    </iframe>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=1029-1%20Pyeongnam-ro%2C%20Pyeongtaek-si"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('map_opened')}
                        className="absolute bottom-4 right-4 bg-white p-2 text-xs text-gray-600 shadow-lg rounded hover:text-navy-900 inline-flex items-center gap-1"
                    >
                        <Icons.MapPin className="w-3 h-3" aria-hidden="true" />
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
