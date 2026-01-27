import React, { useState } from 'react';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { CustomLogo, Icons } from './Icons';
import { handleSmoothScroll } from '../utils/smoothScroll';
import Modal from './Modal';

const Footer: React.FC = () => {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isAntiSpamOpen, setIsAntiSpamOpen] = useState(false);
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

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



                {/* Legal Policy Links */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Privacy Policy
                        </button>
                        <span className="text-gray-600">|</span>
                        <button
                            onClick={() => setIsAntiSpamOpen(true)}
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Anti-Spam Policy
                        </button>
                        <span className="text-gray-600">|</span>
                        <button
                            onClick={() => setIsDisclaimerOpen(true)}
                            className="text-gray-400 hover:text-gold-400 transition-colors underline"
                        >
                            Disclaimer
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

            {/* Privacy Policy Modal */}
            <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Privacy Policy">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-navy-900">Privacy Policy</h3>
                    <p>
                        SOL & LUNA Law Firm ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">1. Information We Collect</h4>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you contact us, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Name and contact information (email address, phone number, address)</li>
                        <li>Legal matter details and case information</li>
                        <li>Communication preferences</li>
                        <li>Any other information you choose to provide</li>
                    </ul>

                    <h4 className="font-bold text-navy-900 mt-4">2. How We Use Your Information</h4>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Provide legal services and respond to your inquiries</li>
                        <li>Communicate with you about your legal matters</li>
                        <li>Improve our services and client experience</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h4 className="font-bold text-navy-900 mt-4">3. Information Security</h4>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">4. Your Rights</h4>
                    <p>
                        Under Korean Personal Information Protection Act (PIPA), you have the right to access, correct, delete, or suspend the processing of your personal information. You may exercise these rights by contacting us.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">5. Contact Us</h4>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at {CONTACT_INFO.EMAIL} or call {CONTACT_INFO.PHONE}.
                    </p>
                </div>
            </Modal>

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

            {/* Disclaimer Modal */}
            <Modal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)} title="Legal Disclaimer">
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-navy-900">Legal Disclaimer</h3>
                    <p>
                        Please read this disclaimer carefully before using the services of SOL & LUNA Law Firm.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">1. No Attorney-Client Relationship</h4>
                    <p>
                        The information provided on this website and through initial consultations does not create an attorney-client relationship. An attorney-client relationship is established only through a formal engagement agreement signed by both parties.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">2. General Information Only</h4>
                    <p>
                        The content on this website is for general informational purposes only and should not be construed as legal advice. Every legal situation is unique, and information provided may not be applicable to your specific circumstances.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">3. No Guarantee of Results</h4>
                    <p>
                        Prior results do not guarantee a similar outcome. The outcome of any legal matter depends on many factors unique to each case. We cannot and do not guarantee specific results.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">4. Jurisdictional Limitations</h4>
                    <p>
                        Our legal services are provided in accordance with Korean law. We primarily serve clients in Korea and matters governed by Korean jurisdiction. International or cross-border legal matters may require coordination with attorneys in other jurisdictions.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">5. Website Accuracy</h4>
                    <p>
                        While we strive to keep the information on this website current and accurate, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">6. Limitation of Liability</h4>
                    <p>
                        SOL & LUNA Law Firm shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of this website or our services.
                    </p>

                    <h4 className="font-bold text-navy-900 mt-4">7. Contact for Legal Advice</h4>
                    <p>
                        For specific legal advice tailored to your situation, please contact us for a consultation at {CONTACT_INFO.PHONE} or {CONTACT_INFO.EMAIL}.
                    </p>
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
