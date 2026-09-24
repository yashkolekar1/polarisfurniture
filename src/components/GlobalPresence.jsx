import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Building2, Compass, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function GlobalPresence() {
  const { regionalOffices, landmarkProjectLocations } = companyInfo;

  return (
    <section id="presence" className="py-24 md:py-36 bg-[#11100f] text-[#f5f3ee] relative overflow-hidden">
      {/* Background Architectural Vector Coordinate Matrix (Subtle luxury world texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <ellipse cx="500" cy="250" rx="450" ry="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="50" y1="250" x2="950" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="500" y1="50" x2="500" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 border-b border-white/[0.08] pb-10">
          <div>
            <span className="eyebrow">EXPANDING OUR GLOBAL FOOTPRINT</span>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl text-[#f5f3ee] leading-tight">
              STRATEGIC OFFICES &
              <br />
              <span className="text-[#c5a265] italic font-normal">LANDMARK</span> DESTINATIONS.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9e9a91] font-light max-w-md leading-relaxed">
            "With strategic offices and landmark projects across continents, we are proud to showcase our growing international presence and commitment to diverse markets worldwide."
          </p>
        </div>

        {/* Strategic Regional Offices (From PDF Page 13) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-5 h-5 text-[#c5a265]" />
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold">
              STRATEGIC REGIONAL OFFICES
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalOffices.map((office, idx) => (
              <div
                key={office.city}
                className="bg-[#171615] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#c5a265] transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a265] block mb-2">
                    REGION 0{idx + 1}
                  </span>
                  <h4 className="serif-display text-2xl text-[#f5f3ee] mb-1 group-hover:text-[#c5a265] transition-colors">
                    {office.city}
                  </h4>
                  <div className="text-xs text-[#9e9a91] tracking-wider uppercase mb-4">
                    {office.country}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs text-[#9e9a91] font-light leading-relaxed">
                  {office.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Landmark Project Locations (From PDF Page 13) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Compass className="w-5 h-5 text-[#c5a265]" />
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#c5a265] font-semibold">
              LANDMARK PROJECT LOCATIONS WORLDWIDE
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {landmarkProjectLocations.map((loc) => (
              <div
                key={loc.name}
                className="bg-[#151413] border border-white/[0.06] p-5 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a265] mb-2 font-mono">
                    <MapPin className="w-3 h-3" />
                    <span>{loc.country}</span>
                  </div>
                  <h5 className="serif-display text-lg text-[#f5f3ee]">
                    {loc.name}
                  </h5>
                </div>
                <div className="text-[10px] text-[#9e9a91] font-light mt-3 border-t border-white/[0.04] pt-2">
                  {loc.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Logistics Note */}
        <div className="mt-16 bg-[#161514] border border-white/[0.08] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-[#c5a265] shrink-0" />
            <span className="text-xs sm:text-sm text-[#f5f3ee] font-serif tracking-wide">
              Global crating & export logistics engineered to international marine and overland transit standards.
            </span>
          </div>
          <span className="text-xs font-mono text-[#c5a265] uppercase tracking-wider shrink-0">
            JAFZA & DUBAI PORTS INTEGRATED
          </span>
        </div>
      </div>
    </section>
  );
}
