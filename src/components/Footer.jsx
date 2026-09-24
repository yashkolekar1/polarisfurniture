import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CAPABILITIES', href: '#capabilities' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'FACILITY', href: '#facility' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#080807] text-[#f5f3ee] border-t border-white/[0.08] relative">
      {/* Contact Section Block */}
      <div className="container py-14 sm:py-20 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo/polaris-emblem.png"
                alt="Polaris Emblem"
                className="w-10 h-10 object-contain"
                decoding="async"
              />
              <div>
                <span className="font-serif text-2xl tracking-[0.2em] text-[#f5f3ee] block leading-none">
                  POLARIS
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#c5a265] uppercase font-sans font-medium">
                  INTERNATIONAL INDUSTRIES LLC
                </span>
              </div>
            </div>

            <p className="text-sm text-[#9e9a91] font-light max-w-sm leading-relaxed">
              Integrated furniture manufacturing and interior fit-out solutions, engineered in Dubai for landmark international architectural undertakings.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="btn-primary !py-3.5 !px-6 text-xs w-full sm:w-auto justify-center"
              >
                <span>INITIATE PROJECT ENQUIRY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Plant & Factory Details */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a265] block">
              MANUFACTURING FACILITY
            </span>
            <div className="space-y-3 text-sm text-[#9e9a91] font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a265] mt-1 shrink-0" />
                <span>
                  Plot 597-942, Dubai Investment Park 2 (DIP 2),
                  <br />
                  P.O. Box 48612, Dubai, United Arab Emirates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c5a265] shrink-0" />
                <span>Operating Hours: Monday – Saturday: 08:00 – 18:00 GST</span>
              </div>
            </div>
          </div>

          {/* Commercial & Tender Desk */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a265] block">
              TENDERS & DIRECT LIAISON
            </span>
            <div className="space-y-3 text-sm text-[#9e9a91] font-light">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a265] shrink-0" />
                <a href="mailto:projects@polarisae.com" className="hover:text-[#f5f3ee] transition-colors">
                  projects@polarisae.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a265] shrink-0" />
                <a href="mailto:info@polarisae.com" className="hover:text-[#f5f3ee] transition-colors">
                  info@polarisae.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a265] shrink-0" />
                <a href="tel:+97148859990" className="hover:text-[#f5f3ee] transition-colors">
                  +971 4 885 9990
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Navigation */}
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs text-[#9e9a91] font-light">
          © {new Date().getFullYear()} POLARIS INTERNATIONAL INDUSTRIES LLC. ALL RIGHTS RESERVED.
        </div>

        {/* Minimal Navigation */}
        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs tracking-[0.18em] text-[#9e9a91] hover:text-[#c5a265] transition-colors uppercase font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Scroll To Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 border border-white/10 hover:border-[#c5a265] flex items-center justify-center text-[#9e9a91] hover:text-[#c5a265] transition-colors"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
