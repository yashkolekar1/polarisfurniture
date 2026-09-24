import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#0c0c0b] text-[#f5f3ee] relative overflow-hidden">
      {/* Subtle top architectural boundary line */}
      <div className="container">
        <div className="architectural-line mb-20" />
      </div>

      <div className="container">
        {/* Asymmetrical Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Large Editorial Heading */}
          <div className="lg:col-span-7">
            <span className="eyebrow">COMPANY PROFILE & INTRODUCTION</span>
            <h2 className="editorial-headline-xl text-[#f5f3ee] tracking-tight">
              WE DON'T JUST MAKE FURNITURE.
              <br />
              <span className="text-[#c5a265] italic font-normal">WE MANUFACTURE</span> COMPLETE INTERIOR SOLUTIONS.
            </h2>
          </div>

          {/* Right Column: Precise Editorial Copy from Profile */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div className="space-y-5 sm:space-y-6 text-[#9e9a91] text-sm sm:text-base md:text-lg font-light leading-relaxed">
              <p>
                <strong className="text-[#f5f3ee] font-medium">Polaris International Industries LLC</strong> is an integrated industrial setup in Dubai, engineered to deliver superlative manufacturing services in the bespoke furniture and interior fit-out space.
              </p>
              <p>
                From our purpose-built <strong className="text-[#c5a265] font-normal">45,000 square-foot</strong> facility at Dubai Investment Park, we serve prestigious hospitality operators, corporate developers, and private palatial residences across the GCC, United Kingdom, and international markets.
              </p>
              <p className="text-xs sm:text-sm text-[#9e9a91]/80 italic border-l border-[#c5a265]/40 pl-4 py-1">
                "We believe we are diametrically different because we don't just do different things — we do them differently, engineered our way."
              </p>
            </div>

            <div className="pt-8 flex items-center gap-6 sm:gap-8">
              <div>
                <div className="serif-display text-2xl sm:text-3xl md:text-4xl text-[#c5a265]">45,000</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#9e9a91]">SQ. FT. DIP FACILITY</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="serif-display text-2xl sm:text-3xl md:text-4xl text-[#f5f3ee]">GCC & GLOBAL</div>
                <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#9e9a91]">TURNKEY DELIVERY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Cinematic Hero Showcase Image */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden group border border-white/[0.08] bg-[#0c0c0b]">
          <img
            src="/assets/projects/dubai-hills-villa-2.jpg"
            alt="Polaris architectural joinery and custom interior fit-out"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/85 via-transparent to-transparent opacity-80" />

          {/* Caption overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div className="max-w-xl">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a265] font-semibold block mb-1">
                CRAFTSMANSHIP AT SCALE
              </span>
              <p className="text-sm md:text-base text-[#f5f3ee] font-serif tracking-wide">
                Seamless harmony between precision timber veneers, concealed architectural hardware, and turnkey engineering.
              </p>
            </div>
            <div className="tech-spec-badge text-[11px] self-start sm:self-auto">
              DUBAI INVESTMENT PARK • UAE
            </div>
          </div>
        </div>

        {/* Subtle Bottom Architectural Line */}
        <div className="architectural-line mt-20" />
      </div>
    </section>
  );
}
