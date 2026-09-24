import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function FacilitySection() {
  const scrollContainerRef = useRef(null);
  const workflow = companyInfo.facilityWorkflow;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="facility" className="py-24 md:py-36 bg-[#0c0c0b] text-[#f5f3ee] relative overflow-hidden">
      <div className="container mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="eyebrow">INTEGRATED 45,000 SQ. FT. PLANT</span>
            <h2 className="editorial-headline-xl text-[#f5f3ee] tracking-tight">
              THE SCALE
              <br />
              <span className="text-[#c5a265] italic font-normal">BEHIND</span> THE CRAFT.
            </h2>
          </div>

          <div className="max-w-md space-y-6">
            <p className="text-sm sm:text-base text-[#9e9a91] font-light leading-relaxed">
              "State-of-the-art machinery, skilled workmanship and an integrated manufacturing environment come together to deliver complex interior and furniture requirements."
            </p>

            {/* Slider Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="w-11 h-11 border border-white/20 hover:border-[#c5a265] flex items-center justify-center text-white hover:text-[#c5a265] transition-colors"
                aria-label="Previous facility photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="w-11 h-11 border border-white/20 hover:border-[#c5a265] flex items-center justify-center text-white hover:text-[#c5a265] transition-colors"
                aria-label="Next facility photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#9e9a91] tracking-widest uppercase ml-3">
                05 Integrated Stages
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Cinematic Facility Sequence */}
      <div className="w-full px-4 sm:px-6 md:pl-12 lg:pl-20">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {workflow.map((item, idx) => (
            <div
              key={item.label}
              className="min-w-[270px] sm:min-w-[380px] md:min-w-[480px] snap-start flex flex-col group border border-white/[0.08] bg-[#141414]"
            >
              {/* Facility Image with subtle zoom */}
              <div className="relative min-h-[180px] sm:min-h-[220px] aspect-[16/10] overflow-hidden bg-[#0c0c0b]">
                <img
                  src={item.image}
                  alt={`Polaris facility ${item.label}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-[#0c0c0b]/80 backdrop-blur-md px-3 py-1 border border-white/10 text-[10px] font-mono tracking-widest text-[#c5a265]">
                  STAGE {item.step}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs tracking-[0.2em] font-sans font-semibold text-[#c5a265] uppercase mb-2">
                    {item.label}
                  </div>
                  <h3 className="serif-display text-xl sm:text-2xl text-[#f5f3ee] mb-3">
                    {item.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9e9a91] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#9e9a91] font-mono">
                  <span>DIP 2 • DUBAI</span>
                  <span className="text-[#c5a265]">ISO CERTIFIED LINE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
