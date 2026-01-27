import React from 'react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { CustomLogo, Icons } from './Icons';
import { handleSmoothScroll } from '../utils/smoothScroll';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-900 text-white border-t border-gray-800 pt-16 pb-8" role="contentinfo">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-gold-400 text-sm transition-colors cursor-pointer"
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        aria-label={`Navigate to ${link.name} section`}
                                    >
                                        {link.name}
                                    </a>
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
                                <a href={`tel:${CONTACT_INFO.PHONE}`} aria-label={`Call ${CONTACT_INFO.PHONE}`}>
                                    {CONTACT_INFO.PHONE}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Icons.Mail className="w-4 h-4 text-gold-400" aria-hidden="true" />
                                <a href={`mailto:${CONTACT_INFO.EMAIL}`} aria-label={`Email ${CONTACT_INFO.EMAIL}`}>
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

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} SOL & LUNA Law Firm (법무법인 명). All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {/* No Broken Buttons */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
