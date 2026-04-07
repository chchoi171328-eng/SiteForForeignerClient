import React, { useState, useEffect } from 'react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { CustomLogo, Icons } from './Icons';
import { handleSmoothScroll } from '../utils/smoothScroll';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900 shadow-lg py-2' : 'bg-transparent py-4 lg:py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <a
                    href="#home"
                    className="flex items-center gap-3 group"
                    onClick={(e) => handleSmoothScroll(e, '#home')}
                    aria-label="SOL & LUNA Law Firm - Go to home"
                >
                    <CustomLogo className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12 lg:w-16 lg:h-16'}`} />
                    <div className="flex flex-col">
                        <span className={`font-serif font-bold tracking-wider uppercase text-white ${isScrolled ? 'text-lg' : 'text-xl lg:text-2xl'}`}>
                            SOL & LUNA
                        </span>
                        <span className={`text-gold-400 font-sans tracking-[0.2em] uppercase ${isScrolled ? 'text-[0.5rem]' : 'text-xs'}`}>
                            Law Firm
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-200 hover:text-gold-400 font-sans text-sm tracking-wide transition-colors uppercase font-medium"
                            onClick={link.external ? undefined : (e) => handleSmoothScroll(e, link.href)}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-2.5 rounded-sm font-bold transition-all transform hover:-translate-y-0.5"
                        onClick={(e) => handleSmoothScroll(e, '#contact')}
                        aria-label="Book a consultation"
                    >
                        <Icons.Phone className="w-4 h-4" />
                        <span>Book Consultation</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <Icons.X className="w-8 h-8" /> : <Icons.Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-gray-800 shadow-xl p-6 flex flex-col gap-4"
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-200 text-lg py-2 border-b border-gray-800"
                            onClick={link.external ? () => setIsMobileMenuOpen(false) : (e) => handleSmoothScroll(e, link.href, () => setIsMobileMenuOpen(false))}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`tel:${CONTACT_INFO.PHONE}`}
                        onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion(e.currentTarget.href); }}
                        className="bg-gold-400 text-navy-900 py-3 rounded text-center font-bold mt-2"
                        aria-label={`Call us at ${CONTACT_INFO.PHONE}`}
                    >
                        Call Now: {CONTACT_INFO.PHONE}
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
