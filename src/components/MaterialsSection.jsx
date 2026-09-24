import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Layers, Gem, Compass } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function MaterialsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = companyInfo.materialsCraft;

  return (
    <section id="materials" className="py-24 md:py-36 bg-[#151413] text-[#f5f3ee] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c5a265]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow justify-center">MATERIEL & METROLOGY</span>
          <h2 className="editorial-headline-xl text-[#f5f3ee] tracking-tight">
            WHERE MATERIAL
            <br />
            <span className="text-[#c5a265] italic font-normal">BECOMES</span> DETAIL.
          </h2>
          <p className="text-sm sm:text-base text-[#9e9a91] font-light max-w-xl mx-auto mt-6 leading-relaxed">
            From raw kiln-dried timbers to electroplated titanium metals and acoustic glazed interfaces, discover the physical journey of transformative interior engineering.
          </p>
        </div>

        {/* Visual Progression Timeline: MATERIAL → CRAFT → PRECISION → FINISHED SPACE */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.phase}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 md:p-6 transition-all duration-300 border flex flex-col justify-between min-h-[120px] sm:min-h-[140px] relative ${
                  isActive
                    ? 'bg-[#1e1d1b] border-[#c5a265] shadow-xl shadow-black/50'
                    : 'bg-[#171615] border-white/[0.06] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a265]">
                      PHASE 0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#c5a265] animate-pulse" />
                    )}
                  </div>
                  <div className="font-serif text-lg sm:text-xl text-[#f5f3ee] tracking-wide">
                    {step.phase}
                  </div>
                </div>

                <div className="text-[11px] text-[#9e9a91] truncate font-light">
                  {step.title}
                </div>

                {/* Bottom Active Line Indicator */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a265]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Showcase for Current Step */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#181716] border border-white/[0.08] p-6 sm:p-10 lg:p-12">
          {/* Left: Deep Technical Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#c5a265] uppercase">
              <span>PROGRESSION SEQUENCE:</span>
              <span className="font-bold underline">{steps[activeStep].phase}</span>
            </div>

            <h3 className="serif-display text-3xl sm:text-4xl md:text-5xl text-[#f5f3ee] leading-tight">
              {steps[activeStep].title}
            </h3>

            <div className="bg-[#121110] border-l-2 border-[#c5a265] p-4 text-xs font-mono text-[#c5a265] tracking-wider">
              SPECIFICATION: {steps[activeStep].spec}
            </div>

            <p className="text-sm md:text-base text-[#9e9a91] font-light leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest uppercase text-[#9e9a91] block">
                  Moisture Calibration
                </span>
                <span className="text-xs text-[#f5f3ee] font-medium">8% - 10% Gulf Stabilized</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] tracking-widest uppercase text-[#9e9a91] block">
                  Surface Tolerance
                </span>
                <span className="text-xs text-[#f5f3ee] font-medium">±0.25mm Laser Checked</span>
              </div>
            </div>
          </div>

          {/* Right: High-Resolution Close-Up Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/[0.1] shadow-2xl bg-[#0c0c0b]">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                key={steps[activeStep].phase}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-[#9e9a91] bg-[#0c0c0b]/70 backdrop-blur-md px-4 py-2 border border-white/[0.06]">
                <span>ARCHITECTURAL MATERIAL DETAIL</span>
                <span className="text-[#c5a265]">POLARIS ATELIER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
