'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { LANDING_PAGES } from '../content/landingPages';
import { CustomLogo, Icons } from './Icons';
import { reportPhoneConversion, trackEvent } from '../lib/gtag';
import Modal from './Modal';

const Footer: React.FC = () => {
    const [isAntiSpamOpen, setIsAntiSpamOpen] = useState(false);

    return (
        <footer className="bg-navy-900 text-white border-t border-gray-800 pt-16 pb-8" role="contentinfo">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <CustomLogo className="w-10 h-10" />
                            <div>
                                <h3 className="font-serif font-bold text-xl">SOL & LUNA</h3>
                                <p className="text-gold-400 text-xs tracking-widest uppercase">Law Firm Myeong</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Providing professional legal counsel with integrity and excellence. We are committed to protecting your rights in Korea.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                                        aria-label={`Navigate to ${link.name} section`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Foreigners */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6">For Foreigners</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/attorneys/cheolho-choi"
                                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                                >
                                    Meet Attorney Cheolho Choi
                                </Link>
                            </li>
                            {LANDING_PAGES.map(page => (
                                <li key={page.slug}>
                                    <Link
                                        href={`/${page.slug}`}
                                        className="text-gray-400 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                                    >
                                        {page.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Small */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center gap-3">
                                <Icons.Phone className="w-4 h-4 text-gold-400" aria-hidden="true" />
                                <a 
                                    href={`tel:${CONTACT_INFO.PHONE}`} 
                                    onClick={reportPhoneConversion}
                                    aria-label={`Call ${CONTACT_INFO.PHONE}`}
                                >
                                    {CONTACT_INFO.PHONE}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Icons.Mail className="w-4 h-4 text-gold-400" aria-hidden="true" />
                                <a
                                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                                    onClick={() => trackEvent('email_clicked')}
                                    aria-label={`Email ${CONTACT_INFO.EMAIL}`}
                                >
                                    {CONTACT_INFO.EMAIL}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icons.MapPin className="w-4 h-4 text-gold-400 mt-1" aria-hidden="true" />
                                <span className="flex-1">{CONTACT_INFO.ADDRESS_EN}</span>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Legal Policy Links */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
                        <Link
                            href="/privacy"
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link
                            href="/terms"
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Terms of Use
                        </Link>
                        <span className="text-gray-600">|</span>
                        <Link
                            href="/disclaimer"
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Disclaimer
                        </Link>
                        <span className="text-gray-600">|</span>
                        <button
                            onClick={() => setIsAntiSpamOpen(true)}
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Anti-Spam Policy
                        </button>
                    </div>
                </div>

                {/* Legal Information */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        사업자등록번호: 238-85-00581 | 광고책임변호사: 최철호
                    </p>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} SOL & LUNA Law Firm (법무법인 명). All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* No Broken Buttons */}
                    </div>
                </div>
            </div>

            {/* Anti-Spam Policy Modal */}
            <Modal isOpen={isAntiSpamOpen} onClose={() => setIsAntiSpamOpen(false)} title="Anti-Spam Policy">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-navy-900">Anti-Spam Policy</h3>
                    <p>
                        SOL & LUNA Law Firm strictly prohibits the unauthorized collection and use of email addresses from our website.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">Legal Notice</h4>
                    <p>
                        The collection of email addresses posted on this website using email address collecting programs or other technical means without prior consent is prohibited under Korean law, specifically the Act on Promotion of Information and Communications Network Utilization and Information Protection (Article 50-2).
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">Penalties</h4>
                    <p>
                        Violators may be subject to criminal penalties including imprisonment or fines as prescribed by law. Any unauthorized collection or use of email addresses from this website will be prosecuted to the fullest extent of the law.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">Proper Use of Contact Information</h4>
                    <p>
                        The contact information provided on this website is solely for the purpose of legitimate legal inquiries and consultations. Any use of our contact information for commercial purposes, spam, or unsolicited communications is strictly prohibited.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">Report Violations</h4>
                    <p>
                        If you become aware of any unauthorized collection or misuse of email addresses from our website, please report it to us immediately at {CONTACT_INFO.EMAIL}.
                    </p>
                </div>
            </Modal>

        </footer>
    );
};

export default Footer;
