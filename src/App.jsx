import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ManufacturingSection from './components/ManufacturingSection';
import Capabilities from './components/Capabilities';
import MaterialsSection from './components/MaterialsSection';
import FacilitySection from './components/FacilitySection';
import ProjectsPreview from './components/ProjectsPreview';
import CredibilitySection from './components/CredibilitySection';
import GlobalPresence from './components/GlobalPresence';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0c0c0b] text-[#f5f3ee] selection:bg-[#c5a265] selection:text-[#0c0c0b]">
      {/* Global Architectural Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main>
        {/* 1. Cinematic Hero */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 2. Editorial Introduction */}
        <IntroSection />

        {/* 3. Manufacturing Capability */}
        <ManufacturingSection />

        {/* 4. Capabilities (6 Core Categories) */}
        <Capabilities onOpenInquiry={handleOpenInquiry} />

        {/* 5. Material & Craft Section */}
        <MaterialsSection />

        {/* 6. Facility Section */}
        <FacilitySection />

        {/* 7. Selected Projects Preview */}
        <ProjectsPreview onOpenInquiry={handleOpenInquiry} />

        {/* 8. Credibility & Certifications */}
        <CredibilitySection />

        {/* 9. Global Presence */}
        <GlobalPresence />

        {/* 10. Dramatic Final CTA */}
        <FinalCTA onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 11. Minimal Footer & Contact */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Project Tender Modal */}
      <ProjectModal isOpen={inquiryModalOpen} onClose={handleCloseInquiry} />
    </div>
  );
}
