import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO, NAV_LINKS, SERVICE_AREAS } from './constants';
import { CustomLogo, Icons } from './components/Icons';

// --- EmailJS Configuration ---
// TODO: Replace these with your actual keys from EmailJS dashboard
const EMAILJS_SERVICE_ID = "foreignersite_Inquiry"; 
const EMAILJS_TEMPLATE_ID = "template_4208stx";
const EMAILJS_PUBLIC_KEY = "agP0G0rU2_TZD1wT5";

// --- Shared Logic ---
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMobileMenu?: () => void) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  if (element) {
    const headerOffset = 100; // Adjust for fixed header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition < 0 ? 0 : offsetPosition,
      behavior: "smooth"
    });
  }
  if (closeMobileMenu) closeMobileMenu();
};

// --- Components ---

// 1. Header
const Header = () => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 shadow-lg py-2' : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
          onClick={(e) => handleSmoothScroll(e, '#home')}
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
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-200 hover:text-gold-400 font-sans text-sm tracking-wide transition-colors uppercase font-medium"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-900 px-6 py-2.5 rounded-sm font-bold transition-all transform hover:-translate-y-0.5"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            <Icons.Phone className="w-4 h-4" />
            <span>Book Consultation</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <Icons.X className="w-8 h-8" /> : <Icons.Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-gray-800 shadow-xl p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-200 text-lg py-2 border-b border-gray-800"
              onClick={(e) => handleSmoothScroll(e, link.href, () => setIsMobileMenuOpen(false))}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${CONTACT_INFO.PHONE}`}
            className="bg-gold-400 text-navy-900 py-3 rounded text-center font-bold mt-2"
          >
            Call Now: {CONTACT_INFO.PHONE}
          </a>
        </div>
      )}
    </header>
  );
};

// 2. Hero Section
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Law Firm Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in-up">
          <p className="text-gold-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Trusted Legal Partner in Korea
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
            Navigating Korean Law <br/>
            <span className="text-gray-300 font-light">With Clarity & Confidence</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
            SOL & LUNA (Law Firm Myeong) provides dedicated legal services tailored for the international community in Pyeongtaek and Gyeonggi-do.
          </p>

          {/* Prominent Phone Number */}
          <div className="mb-10">
            <a 
              href={`tel:${CONTACT_INFO.PHONE}`} 
              className="inline-flex items-center gap-3 text-3xl md:text-5xl font-serif font-bold text-white hover:text-gold-400 transition-colors group"
            >
              <Icons.Phone className="w-8 h-8 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
              <span className="border-b-2 border-transparent group-hover:border-gold-400 pb-1 transition-colors">
                {CONTACT_INFO.PHONE}
              </span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-2"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              <Icons.Calendar className="w-5 h-5" />
              Initial Consultation
            </a>
            <a 
              href="#practice"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-sm font-bold text-lg transition-all"
              onClick={(e) => handleSmoothScroll(e, '#practice')}
            >
              Our Practice Areas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. About Section
const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                alt="Meeting" 
                className="rounded-lg shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy-900 rounded-lg -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 border-4 border-gold-400 rounded-lg -z-0 hidden md:block"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-2">Who We Are</h2>
            <h3 className="text-4xl font-serif font-bold text-navy-900 mb-6">Bridging the Gap for International Clients</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Living or doing business in a foreign country comes with unique legal challenges. At <span className="font-bold text-navy-900">SOL & LUNA Law Firm</span>, we specialize in helping expatriates and foreign corporations navigate the complexities of the Korean legal system.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Located in the heart of Pyeongtaek, we are strategically positioned to serve the diverse international community. Our team combines deep local expertise with a global perspective to protect your rights and interests.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-navy-50 p-3 rounded-full text-gold-600">
                  <Icons.Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">English Service</h4>
                  <p className="text-sm text-gray-500">Fluent communication</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-navy-50 p-3 rounded-full text-gold-600">
                  <Icons.Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Trusted Defense</h4>
                  <p className="text-sm text-gray-500">Proven track record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Practice Areas
const PracticeAreas = () => {
  return (
    <section id="practice" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Comprehensive Legal Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area, index) => {
            const IconComponent = Icons[area.icon as keyof typeof Icons] || Icons.Scale;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-gold-400 group">
                <div className="mb-6 p-4 bg-navy-50 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-navy-900 transition-colors">
                  <IconComponent className="w-8 h-8 text-navy-900 group-hover:text-gold-400 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 5. Map & Location
const LocationSection = () => {
  return (
    <section id="location" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-navy-900 p-12 lg:p-20 flex flex-col justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Visit Our Office</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Icons.MapPin className="w-6 h-6 text-gold-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gold-400 mb-1">Address</h4>
                <p className="text-gray-300">{CONTACT_INFO.ADDRESS_EN}</p>
                <p className="text-gray-500 text-sm mt-1">{CONTACT_INFO.ADDRESS_KR}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icons.Phone className="w-6 h-6 text-gold-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gold-400 mb-1">Phone</h4>
                <a href={`tel:${CONTACT_INFO.PHONE}`} className="text-gray-300 hover:text-white text-xl">
                  {CONTACT_INFO.PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Icons.Mail className="w-6 h-6 text-gold-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gold-400 mb-1">Email</h4>
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-gray-300 hover:text-white">
                  {CONTACT_INFO.EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] lg:h-auto w-full bg-gray-200 relative">
             <iframe 
               title="Google Map Location"
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src={CONTACT_INFO.MAP_URL}
               className="grayscale hover:grayscale-0 transition-all duration-500"
             >
             </iframe>
             <div className="absolute bottom-4 right-4 bg-white p-2 text-xs text-gray-500 shadow-lg rounded">
               SJ Plaza, Pyeongtaek
             </div>
        </div>
      </div>
    </section>
  );
};

// 6. Contact Form Section
const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        // Real EmailJS Send
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formState.name,
            from_email: formState.email,
            from_phone: formState.phone,
            message: formState.message,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // Simulated Send if keys are missing
        console.log("EmailJS keys are missing. Simulating success.");
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again or contact us directly via phone.");
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Request a Consultation</h2>
          <p className="text-gray-600">Send us a message and our team will get back to you within 24 hours.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
          {/* Success Overlay */}
          {status === 'success' && (
            <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Icons.ArrowRight className="w-8 h-8 -rotate-45" /> 
                {/* Visual hack for checkmark using arrow or use a real check icon */}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 max-w-md">
                Thank you for reaching out. We have received your inquiry and will contact you shortly at the email address provided.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-gold-600 font-bold hover:text-gold-700 underline"
              >
                Send another message
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                  placeholder="010-1234-5678"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">How can we help?</label>
              <textarea 
                required
                rows={4}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all disabled:bg-gray-100"
                placeholder="Briefly describe your legal inquiry..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full bg-navy-900 text-white font-bold py-4 rounded-md hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}`}
            >
              {status === 'submitting' ? (
                <>
                  <Icons.Loader className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Icons.ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// 7. Footer
const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-gray-800 pt-16 pb-8">
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
                <Icons.Phone className="w-4 h-4 text-gold-400" />
                {CONTACT_INFO.PHONE}
              </li>
              <li className="flex items-center gap-3">
                <Icons.Mail className="w-4 h-4 text-gold-400" />
                {CONTACT_INFO.EMAIL}
              </li>
              <li className="flex items-start gap-3">
                <Icons.MapPin className="w-4 h-4 text-gold-400 mt-1" />
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

// --- Main App ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <PracticeAreas />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Sticky Call Button for Mobile */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <a 
          href={`tel:${CONTACT_INFO.PHONE}`}
          className="bg-gold-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-gold-600 transition-colors animate-bounce"
        >
          <Icons.Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default App;