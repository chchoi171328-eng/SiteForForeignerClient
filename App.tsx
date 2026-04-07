import React from 'react';
import { CONTACT_INFO } from './constants';
import { Icons } from './components/Icons';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-900">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gold-400 focus:text-navy-900 focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <PracticeAreas />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Sticky Call & Blog Buttons for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Naver Blog Button */}
        <a
          href="https://blog.naver.com/natural_born"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#03C75A] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#02b351] transition-colors"
          style={{ width: '56px', height: '56px' }}
          aria-label="Visit Naver Blog"
        >
          <span className="font-black text-2xl font-sans" style={{ marginTop: '2px', lineHeight: 1 }}>N</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.PHONE}`}
          onClick={(e) => { e.preventDefault(); (window as any).gtag_report_conversion(e.currentTarget.href); }}
          className="bg-gold-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-gold-600 transition-colors"
          aria-label={`Call us now at ${CONTACT_INFO.PHONE}`}
        >
          <Icons.Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default App;