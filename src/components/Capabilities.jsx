import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import { capabilitiesData } from '../data/capabilities';

export default function Capabilities({ onOpenInquiry }) {
  const [hoveredIdx, setHoveredIdx] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(0);

  return (
    <section id="capabilities" className="py-24 md:py-36 bg-[#0c0c0b] text-[#f5f3ee] relative">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/[0.08] pb-10">
          <div>
            <span className="eyebrow">COMPREHENSIVE TURN-KEY PORTFOLIO</span>
            <h2 className="editorial-headline-xl text-[#f5f3ee] tracking-tight">
              SIX SPECIALIZED
              <br />
              <span className="text-[#c5a265] italic font-normal">MANUFACTURING</span> DISCIPLINES.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9e9a91] font-light max-w-md leading-relaxed">
            All six disciplines are engineered, fabricated, and finished within our Dubai Investment Park facility to ensure absolute alignment in tolerances, finish matching, and schedule.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP INTERACTION: Large Vertical List with Dynamic Preview (>= 1024px) */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 6 Large Interactive Rows */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/[0.08]">
            {capabilitiesData.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`py-6 transition-all duration-300 cursor-pointer group flex items-start justify-between ${
                    isHovered ? 'opacity-100 pl-3' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <span className="text-sm font-mono text-[#c5a265] pt-1 tracking-widest">
                      {item.id}
                    </span>
                    <div>
                      <h3
                        className={`serif-display text-2xl xl:text-3xl transition-colors duration-300 ${
                          isHovered ? 'text-[#c5a265]' : 'text-[#f5f3ee]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 max-w-lg space-y-3"
                        >
                          <p className="text-xs text-[#9e9a91] leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {item.features.slice(0, 2).map((feat, fIdx) => (
                              <span
                                key={fIdx}
                                className="text-[10px] text-[#c5a265] bg-[#c5a265]/10 px-2 py-0.5 border border-[#c5a265]/20 flex items-center gap-1"
                              >
                                <Check className="w-2.5 h-2.5" />
                                {feat}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? 'border-[#c5a265] bg-[#c5a265] text-[#0c0c0b]'
                        : 'border-white/10 text-white/40'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Impact Responsive Visual Showcase */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-white/[0.12] shadow-2xl bg-[#141414]">
              {capabilitiesData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    hoveredIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-105"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/40 to-transparent" />

                  {/* Overlay Meta */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#c5a265] block mb-1">
                      DISCIPLINE {item.id} OF 06
                    </span>
                    <h4 className="serif-display text-xl text-[#f5f3ee] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#9e9a91] font-sans line-clamp-2 mb-4">
                      {item.materials}
                    </p>
                    <button
                      type="button"
                      onClick={onOpenInquiry}
                      className="btn-outline !py-2 !px-4 text-[11px] !border-[#c5a265]/40 hover:!border-[#c5a265]"
                    >
                      <span>SPECIFY FOR PROJECT</span>
                      <ArrowUpRight className="w-3 h-3 text-[#c5a265]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE INTERACTION: Editorial Accordion (< 1024px)                        */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col divide-y divide-white/[0.08]">
          {capabilitiesData.map((item, idx) => {
            const isOpen = mobileExpanded === idx;
            return (
              <div key={item.id} className="py-5">
                <button
                  type="button"
                  onClick={() => setMobileExpanded(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left group gap-3"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <span className="text-xs font-mono text-[#c5a265]">{item.id}</span>
                    <h3
                      className={`serif-display text-lg sm:text-2xl transition-colors ${
                        isOpen ? 'text-[#c5a265]' : 'text-[#f5f3ee]'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 text-[#c5a265] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden pt-4"
                    >
                      {/* Full-Width Uncropped Capability Image */}
                      <div className="w-full overflow-hidden border border-white/[0.08] mb-4 bg-[#141414]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-contain block mx-auto"
                          decoding="async"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-[#9e9a91] leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {item.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#f5f3ee]">
                            <Check className="w-3.5 h-3.5 text-[#c5a265] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-[11px] text-[#9e9a91] border-t border-white/[0.06] pt-3 pb-2">
                        <strong className="text-[#c5a265] font-normal">Materials:</strong> {item.materials}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
