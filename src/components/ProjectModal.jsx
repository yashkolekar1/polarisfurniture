import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Hospitality',
    location: 'Dubai, UAE',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tender-inquiry-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#151413] border border-white/10 w-full max-w-2xl relative p-6 sm:p-10 shadow-2xl my-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="eyebrow">ESTIMATE & TENDER INQUIRY</span>
              <h3 id="tender-inquiry-title" className="serif-display text-3xl sm:text-4xl text-[#f5f3ee]">
                START A PROJECT WITH POLARIS.
              </h3>
              <p className="text-xs sm:text-sm text-[#9e9a91] font-light mt-2 leading-relaxed">
                Connect directly with our estimating and engineering desk at Dubai Investment Park for architectural fit-out and manufacturing tenders.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                    Company / Architectural Practice
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Foster + Partners / Developer"
                    className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@company.com"
                    className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                    Project Sector
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                  >
                    <option value="Hospitality">Luxury Hospitality & Hotels</option>
                    <option value="Commercial">Commercial Headquarters & Offices</option>
                    <option value="High-Rise">High-Rise Residential Towers</option>
                    <option value="Luxury Villas">Palatial / Luxury Private Villa</option>
                    <option value="Bespoke Joinery">Bespoke Millwork & Doors Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                    Project Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Dubai, Riyadh, London, etc."
                    className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest uppercase text-[#9e9a91] mb-1.5">
                  Scope Overview or BOQ Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key requirements: e.g. fitted joinery, 250 fire-rated door sets, reception millwork, target handover date..."
                  className="w-full bg-[#0c0c0b] border border-white/10 focus:border-[#c5a265] text-[#f5f3ee] text-sm px-4 py-3 outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#9e9a91]">
                  <ShieldCheck className="w-4 h-4 text-[#c5a265]" />
                  <span>NDAs respected. Direct manufacturing quotation.</span>
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <span>TRANSMIT RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#c5a265]/10 border border-[#c5a265] mx-auto flex items-center justify-center text-[#c5a265]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a265]">
                TRANSMISSION CONFIRMED
              </span>
              <h3 className="serif-display text-3xl sm:text-4xl text-[#f5f3ee]">
                THANK YOU, {formData.name.toUpperCase() || 'VALUED PARTNER'}.
              </h3>
              <p className="text-sm text-[#9e9a91] font-light max-w-md mx-auto leading-relaxed">
                Your tender inquiry has been routed directly to our commercial estimating desk at Dubai Investment Park. An engineering lead will review your scope and get in touch within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="btn-outline !py-3 !px-8 text-xs"
              >
                <span>RETURN TO POLARIS</span>
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
