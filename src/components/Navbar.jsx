import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'manufacturing', 'capabilities', 'materials', 'facility', 'projects', 'credibility', 'presence', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'FACILITY', href: '#facility', id: 'facility' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0c0c0b]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
        style={{
          transition: 'background-color 0.4s ease, border-color 0.4s ease, padding 0.4s ease'
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3.5 group"
            aria-label="Polaris International Industries Home"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-sm flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/assets/logo/polaris-emblem.png"
                alt="Polaris Emblem"
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_8px_rgba(197,162,101,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl tracking-[0.18em] text-[#f5f3ee] font-normal leading-tight">
                POLARIS
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.28em] text-[#c5a265] uppercase font-sans font-medium">
                INTERNATIONAL INDUSTRIES LLC
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs tracking-[0.2em] font-medium transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#c5a265]'
                      : 'text-[#f5f3ee]/75 hover:text-[#f5f3ee]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c5a265] transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenInquiry}
              className="btn-outline text-xs !py-2.5 !px-5 !border-[#c5a265]/40 hover:!border-[#c5a265] group"
              id="nav-start-project-btn"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a265] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f5f3ee] hover:text-[#c5a265] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#0c0c0b]/98 backdrop-blur-xl flex flex-col justify-between p-8 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c5a265] mb-6 font-semibold">
            NAVIGATION
          </p>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-3xl text-[#f5f3ee] hover:text-[#c5a265] tracking-wider transition-colors flex items-center justify-between border-b border-white/[0.06] pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans text-[#c5a265]/60 tracking-widest">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-8">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="btn-primary w-full justify-between"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="text-[11px] text-[#9e9a91] tracking-wider text-center pt-2">
            DUBAI INVESTMENT PARK • UAE
          </div>
        </div>
      </div>
    </>
  );
}
