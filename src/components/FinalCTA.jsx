import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function FinalCTA({ onOpenInquiry }) {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 md:py-40 bg-[#080807] text-[#f5f3ee] overflow-hidden border-t border-white/[0.08]">
      {/* Cinematic Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[#080807]">
        <img
          src="/assets/facility/facility-floor-wide.jpg"
          alt="Polaris Manufacturing Plant at Scale"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-125 scale-105"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807] via-[#080807]/70 to-[#080807]/85 pointer-events-none" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <span className="eyebrow justify-center">ENGAGE OUR ATELIER</span>

        <h2 className="editorial-headline-hero text-[#f5f3ee] tracking-tight mb-6 sm:mb-8">
          LET'S BUILD SOMETHING
          <br />
          <span className="text-[#c5a265] italic font-normal">WORTH</span> REMEMBERING.
        </h2>

        <p className="text-sm sm:text-lg md:text-xl text-[#9e9a91] font-light max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          From precision manufacturing to complete interior fit-out, bring your next hospitality, commercial, or luxury residential project to Polaris.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mx-auto max-w-xs sm:max-w-none">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="btn-primary !py-3.5 !px-6 sm:!py-4 sm:!px-8 text-xs sm:text-sm justify-center"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-outline !py-3.5 !px-6 sm:!py-4 sm:!px-8 text-xs sm:text-sm group justify-center"
          >
            <span>CONTACT POLARIS</span>
            <ArrowUpRight className="w-4 h-4 text-[#c5a265] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Quick Contacts Bar */}
        <div className="mt-20 pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#9e9a91] font-light">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#c5a265]" />
            <span>Dubai Investment Park 2, Dubai, UAE</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-[#c5a265]" />
            <a href="mailto:projects@polarisae.com" className="hover:text-[#f5f3ee] transition-colors">
              projects@polarisae.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-[#c5a265]" />
            <a href="tel:+97148859990" className="hover:text-[#f5f3ee] transition-colors">
              +971 4 885 9990
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
