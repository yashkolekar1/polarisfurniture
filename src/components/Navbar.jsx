import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

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
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0c0c0b]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 md:py-4'
            : 'bg-transparent py-4 md:py-8'
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
            className="flex items-center gap-2.5 sm:gap-3.5 group max-w-[70%] sm:max-w-none"
            aria-label="Polaris International Industries Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-sm flex items-center justify-center p-1 transition-transform duration-500 group-hover:scale-105 shrink-0">
              <img
                src="/assets/logo/polaris-emblem.png"
                alt="Polaris Emblem"
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_8px_rgba(197,162,101,0.3)]"
                decoding="async"
              />
            </div>
            <div className="flex flex-col truncate">
              <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.16em] sm:tracking-[0.18em] text-[#f5f3ee] font-normal leading-tight">
                POLARIS
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.24em] sm:tracking-[0.28em] text-[#c5a265] uppercase font-sans font-medium truncate">
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

          {/* Desktop Right Action */}
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
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/10 bg-[#171615]/80 text-[#f5f3ee] hover:text-[#c5a265] hover:border-[#c5a265]/40 transition-colors focus:outline-none shrink-0"
            aria-label="Open Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* REFINED FULL-SCREEN MOBILE NAVIGATION OVERLAY (Framer Motion Animated)   */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0c0c0b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 w-full max-w-[100vw] overflow-y-auto overflow-x-hidden min-h-screen min-h-svh"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 shrink-0">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-sm p-1 border border-white/10 bg-white/5 flex items-center justify-center">
                  <img
                    src="/assets/logo/polaris-emblem.png"
                    alt="Polaris Emblem"
                    className="w-full h-full object-contain filter brightness-110"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg tracking-[0.16em] text-[#f5f3ee] leading-none">
                    POLARIS
                  </span>
                  <span className="text-[8px] tracking-[0.24em] text-[#c5a265] uppercase font-sans font-medium">
                    INTERNATIONAL INDUSTRIES
                  </span>
                </div>
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 text-[#f5f3ee] hover:text-[#c5a265] hover:border-[#c5a265]/50 transition-colors focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-8 flex-1 flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] tracking-[0.28em] uppercase text-[#c5a265] mb-4 font-mono font-medium"
              >
                NAVIGATION
              </motion.p>
              
              <nav className="flex flex-col divide-y divide-white/[0.06]">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + idx * 0.05,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className={`font-serif text-2xl sm:text-3xl tracking-wide py-3.5 flex items-center justify-between transition-colors group ${
                        isActive ? 'text-[#c5a265]' : 'text-[#f5f3ee] hover:text-[#c5a265]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                        )}
                        <span>{link.label}</span>
                      </span>
                      <span className="text-xs font-mono text-[#c5a265]/60 tracking-widest font-normal">
                        0{idx + 1}
                      </span>
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 border-t border-white/[0.08] shrink-0 space-y-3"
            >
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="btn-primary w-full justify-between !py-3.5 !px-5 text-xs tracking-wider"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 text-[#0c0c0b]" />
              </button>

              <div className="flex items-center justify-between text-[10px] text-[#9e9a91] tracking-[0.16em] uppercase pt-1 font-mono">
                <span>DIP 2 • DUBAI, UAE</span>
                <span className="text-[#c5a265]">POLARIS ATELIER</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
