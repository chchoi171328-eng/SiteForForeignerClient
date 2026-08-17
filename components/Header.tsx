'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_INFO, NAV_LINKS } from '../constants';
import { SERVICE_AREAS } from '../content/serviceAreas';
import { CustomLogo, Icons } from './Icons';
import { reportPhoneConversion } from '../lib/gtag';

// "Areas We Serve" dropdown (city-pages brief §D-1) — replaces the flat
// "Location" nav item. The office/directions page leads the list.
const AREAS_WE_SERVE = [
    { name: 'Pyeongtaek Office & Directions', href: '/location' },
    ...SERVICE_AREAS.map((a) => ({ name: a.navLabel, href: `/${a.slug}` })),
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // On sub-pages, always show dark header
    const showDarkHeader = !isHome || isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showDarkHeader ? 'bg-navy-900 shadow-lg py-2' : 'bg-transparent py-4 lg:py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="flex items-center gap-3 group"
                    aria-label="SOL & LUNA Law Firm - Go to home"
                >
                    <CustomLogo className={`transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12 lg:w-16 lg:h-16'}`} />
                    <div className="flex flex-col">
                        <span className={`font-serif font-bold tracking-wider uppercase text-white ${isScrolled ? 'text-lg' : 'text-xl lg:text-2xl'}`}>
                            SOL & LUNA
                        </span>
                        <span className={`text-gold-400 font-sans tracking-[0.2em] uppercase ${isScrolled ? 'text-[0.5rem]' : 'text-xs'}`}>
                            Law Firm Myeong
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
                    {NAV_LINKS.map((link) =>
                        link.href === '/location' ? (
                            <div key={link.name} className="relative group">
                                <button
                                    type="button"
                                    className="flex items-center gap-1 text-gray-200 hover:text-gold-400 font-sans text-sm tracking-wide transition-colors uppercase font-medium"
                                    aria-haspopup="true"
                                >
                                    Areas We Serve
                                    <Icons.ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                                </button>
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
                                    <ul className="bg-navy-900 border border-gray-800 rounded-lg shadow-xl py-2 min-w-[16rem]">
                                        {AREAS_WE_SERVE.map((area) => (
                                            <li key={area.href}>
                                                <Link
                                                    href={area.href}
                                                    className="block px-5 py-2.5 text-sm text-gray-200 hover:text-gold-400 hover:bg-white/5 transition-colors whitespace-nowrap"
                                                >
                                                    {area.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-200 hover:text-gold-400 font-sans text-sm tracking-wide transition-colors uppercase font-medium"
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-2.5 rounded-sm font-bold transition-all transform hover:-translate-y-0.5"
                        aria-label="Request a consultation"
                    >
                        <Icons.Phone className="w-4 h-4" />
                        {/* Sole /contact entry point in the header. The full label shows once
                            there is room; below xl it shortens to "Consultation". */}
                        <span className="whitespace-nowrap">
                            <span className="hidden xl:inline">Request a </span>Consultation
                        </span>
                    </Link>
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
                    {NAV_LINKS.map((link) =>
                        link.href === '/location' ? (
                            <div key={link.name} className="border-b border-gray-800 pb-2">
                                {/* Same group structure as the desktop dropdown (brief §D-1). */}
                                <p className="text-gray-400 text-xs uppercase tracking-widest py-2">
                                    Areas We Serve
                                </p>
                                {AREAS_WE_SERVE.map((area) => (
                                    <Link
                                        key={area.href}
                                        href={area.href}
                                        className="block text-gray-200 text-lg py-2 pl-4"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {area.name}
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-200 text-lg py-2 border-b border-gray-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                    {/* Same rule as the desktop nav: one highlighted /contact entry point
                        instead of a plain "Contact" link in the list. */}
                    <Link
                        href="/contact"
                        className="bg-gold-400 text-navy-900 py-3 rounded text-center font-bold mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Request a Consultation
                    </Link>
                    <a
                        href={`tel:${CONTACT_INFO.PHONE}`}
                        onClick={reportPhoneConversion}
                        className="border border-gold-400 text-gold-400 py-3 rounded text-center font-bold"
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
