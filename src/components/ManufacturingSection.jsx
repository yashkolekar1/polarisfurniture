import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cog, Layers, Hammer, ShieldCheck } from 'lucide-react';

const manufacturingPillars = [
  {
    id: "woodwork",
    title: "Heavy Machining & Timber Calibration",
    image: "/assets/facility/facility-woodworking-planer.jpg",
    desc: "Multi-head dimensioning planers and precision panel cutters sizing seasoned hardwoods to accurate specifications before fabrication.",
    tag: "CAPACITY & VOLUME"
  },
  {
    id: "machining",
    title: "Computerized CNC Processing",
    image: "/assets/facility/facility-machining-bay.jpg",
    desc: "Multi-axis computerized routing lines generating complex curved contours, fluted panels, and intricate mortises with micro-millimeter tolerance.",
    tag: "DIGITAL PRECISION"
  },
  {
    id: "assembly",
    title: "Master Joinery & Dry-Fit Assembly",
    image: "/assets/facility/facility-joinery-assembly.jpg",
    desc: "Dedicated bench bays where master craftsmen pre-assemble complete casegoods, reception counters, and fire door sets before dispatch.",
    tag: "ARTISANAL RIGOR"
  },
  {
    id: "finishing",
    title: "Veneer Hydraulic Pressing & Spraying",
    image: "/assets/facility/facility-spray-booth.jpg",
    desc: "Pressurized dust-free finishing suites equipped for polyurethane, polyester, UV lacquers, and hand-rubbed organic oil treatments.",
    tag: "SURFACE EXCELLENCE"
  }
];

export default function ManufacturingSection() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="manufacturing" className="py-24 md:py-36 bg-[#121110] text-[#f5f3ee] relative">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">INDUSTRIAL SCALE & PRECISION</span>
            <h2 className="serif-display text-3xl sm:text-5xl md:text-6xl text-[#f5f3ee] leading-[1.1] sm:leading-[1.05]">
              BUILT TO MANUFACTURE.
              <br />
              <span className="text-[#c5a265] italic font-normal">ENGINEERED</span> TO DELIVER.
            </h2>
          </div>
          <p className="text-[#9e9a91] font-light max-w-md text-sm md:text-base leading-relaxed">
            Multi-purpose manufacturing lines laid out for uninterrupted high-volume production of architectural millwork, bespoke casegoods, and turn-key interior fit-out components.
          </p>
        </div>

        {/* Large Stat Feature Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171615] border border-white/[0.08] p-6 sm:p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a265]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Giant Industrial Stat */}
          <div className="lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-8 lg:pb-0 lg:pr-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c5a265] mb-2">
              PURPOSE-BUILT INFRASTRUCTURE
            </span>
            <div className="serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5f3ee] tracking-tight leading-none mb-3">
              45,000
            </div>
            <div className="text-lg sm:text-2xl font-serif text-[#c5a265] tracking-wider mb-2">
              SQ. FT. MANUFACTURING FACILITY
            </div>
            <div className="text-[11px] sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#9e9a91] font-sans">
              DUBAI INVESTMENT PARK (DIP 2) • UAE
            </div>
          </div>

          {/* Right: Technical Facility Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c5a265] text-sm font-medium tracking-wider">
                <Cog className="w-4 h-4" />
                <span>INTEGRATED WORKSHOPS</span>
              </div>
              <p className="text-xs md:text-sm text-[#9e9a91] leading-relaxed">
                Joinery, veneer pressing, specialized metal fabrication, upholstery atelier, and decorative glass finishing operating synchronously under one roof.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c5a265] text-sm font-medium tracking-wider">
                <Layers className="w-4 h-4" />
                <span>HIGH CAPACITY OUTPUT</span>
              </div>
              <p className="text-xs md:text-sm text-[#9e9a91] leading-relaxed">
                Structured workflow handling both large-scale multi-unit hospitality developments and intricate bespoke palatial architectural commissions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c5a265] text-sm font-medium tracking-wider">
                <Hammer className="w-4 h-4" />
                <span>IN-HOUSE ENGINEERING</span>
              </div>
              <p className="text-xs md:text-sm text-[#9e9a91] leading-relaxed">
                CAD/CAM production detailing, 3D sample mock-ups, dry-fit reviews, and value-engineering support for architects and interior designers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c5a265] text-sm font-medium tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>QUALITY ISO PROTOCOLS</span>
              </div>
              <p className="text-xs md:text-sm text-[#9e9a91] leading-relaxed">
                Continuous compliance with ISO 9001, ISO 14001, and ISO 45001 standards governing material traceability and zero-defect dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Production Floor Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Dynamic High-Res Factory Photography (First on mobile for immediate visual impact) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative min-h-[240px] aspect-[4/3] md:aspect-[16/10] overflow-hidden border border-white/[0.08] shadow-2xl bg-[#0c0c0b]">
              <img
                src={manufacturingPillars[activePillar].image}
                alt={manufacturingPillars[activePillar].title}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
                key={manufacturingPillars[activePillar].id}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#c5a265] font-semibold block mb-1">
                  POLARIS INDUSTRIAL SETUP • DUBAI
                </span>
                <p className="serif-display text-xl sm:text-2xl text-[#f5f3ee]">
                  {manufacturingPillars[activePillar].title}
                </p>
              </div>
            </div>
          </div>

          {/* Tab Selectors */}
          <div className="lg:col-span-5 space-y-3 order-2 lg:order-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9e9a91] mb-4 font-semibold">
              CORE MANUFACTURING SECTORS
            </p>
            {manufacturingPillars.map((pillar, idx) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`w-full text-left p-4 sm:p-5 transition-all duration-300 border flex flex-col gap-1.5 ${
                  activePillar === idx
                    ? 'bg-[#1e1d1b] border-[#c5a265] shadow-lg shadow-black/40'
                    : 'bg-[#151514] border-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] font-mono text-[#c5a265]">
                    0{idx + 1} • {pillar.tag}
                  </span>
                  {activePillar === idx && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                  )}
                </div>
                <h3 className="text-base md:text-lg font-serif tracking-wide text-[#f5f3ee]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#9e9a91] leading-relaxed mt-1">
                  {pillar.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
