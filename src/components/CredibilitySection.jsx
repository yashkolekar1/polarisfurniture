import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Leaf, HeartPulse, FileCheck, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function CredibilitySection() {
  const { certifications, clientBrands } = companyInfo;

  return (
    <section id="credentials" className="py-24 md:py-36 bg-[#0c0c0b] text-[#f5f3ee] relative">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-white/[0.08] pb-10">
          <div>
            <span className="eyebrow">INTEGRITY & REGULATORY COMPLIANCE</span>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl text-[#f5f3ee] leading-tight">
              STANDARDS WITHOUT
              <br />
              <span className="text-[#c5a265] italic font-normal">COMPROMISE.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9e9a91] font-light max-w-md leading-relaxed">
            Our manufacturing operations are bound by verified international management standards ensuring absolute environmental care, safety, and strict defect prevention.
          </p>
        </div>

        {/* Real Certified Policies & Certificates from PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-[#141414] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-[#c5a265]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#c5a265] uppercase bg-[#c5a265]/10 px-2.5 py-1 border border-[#c5a265]/20">
                    {cert.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#c5a265]" />
                </div>

                {/* Certificate Scan from Company Profile */}
                <div className="relative min-h-[180px] aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 mb-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 filter contrast-105"
                    decoding="async"
                  />
                </div>

                <h3 className="serif-display text-2xl text-[#f5f3ee] mb-3">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#9e9a91] font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-[#c5a265]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Audited & Verified UAE Operations</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality & HSE Principles from the Polaris Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 bg-[#151413] border border-white/[0.08] p-8 sm:p-12">
          {/* Quality Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c5a265]/10 border border-[#c5a265]/30 flex items-center justify-center text-[#c5a265]">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="serif-display text-2xl text-[#f5f3ee]">
                Quality Management Philosophy
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9e9a91] leading-relaxed">
              Conforming strictly to management system standard ISO 9001. Procedures are methodically planned around the active prevention of defects: comprehensive mock-up approval, automated moisture validation, in-line dry fitting, and rigorous finish calibration before delivery.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-[#f5f3ee]/80 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                Optimum utilization of employee craftsmanship and multi-axis CNC repeatability
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                Zero-defect dispatch protocol with full traceability of raw materials
              </li>
            </ul>
          </div>

          {/* HSE & Environmental Policy */}
          <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-8 lg:pt-0 lg:pl-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c5a265]/10 border border-[#c5a265]/30 flex items-center justify-center text-[#c5a265]">
                <Leaf className="w-4 h-4" />
              </div>
              <h3 className="serif-display text-2xl text-[#f5f3ee]">
                HSE & Environmental Policy
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9e9a91] leading-relaxed">
              Implementation and maintenance of an active Environmental Management System (EMS). Proactive hazard assessment, low-VOC lacquer formulations, optimized timber yield software to minimize biomass waste, and an accident-free factory floor culture.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-[#f5f3ee]/80 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                FSC-certified timber sourcing compliance & sawdust recycling protocols
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a265]" />
                Comprehensive health, safety, and welfare for DIP artisans and site crew
              </li>
            </ul>
          </div>
        </div>

        {/* Real Brand Operator Experience from Company Profile */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs tracking-[0.25em] uppercase text-[#9e9a91] font-medium">
              TRUSTED FOR LANDMARK HOSPITALITY & LUXURY RESIDENTIAL PROGRAMMES
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientBrands.map((brand) => (
              <div
                key={brand.name}
                className="bg-[#141414] border border-white/[0.06] p-4 flex items-center justify-center h-24 group hover:border-[#c5a265]/40 transition-all duration-300"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-[85%] object-contain filter grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
