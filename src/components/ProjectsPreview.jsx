import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Layers, X, Sparkles } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';

export default function ProjectsPreview({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-36 bg-[#121110] text-[#f5f3ee] relative">
      <div className="container">
        {/* Header & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 border-b border-white/[0.08] pb-10">
          <div>
            <span className="eyebrow">PORTFOLIO EXCELLENCE</span>
            <h2 className="editorial-headline-xl text-[#f5f3ee] tracking-tight">
              SELECTED PROJECTS.
            </h2>
            <p className="text-sm md:text-base text-[#9e9a91] font-light max-w-lg mt-3 leading-relaxed">
              Showcasing landmark hospitality, commercial headquarters, residential towers, and palatial villas delivered across the GCC and internationally.
            </p>
          </div>

          {/* Editorial Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.16em] px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#c5a265] text-[#0c0c0b] border-[#c5a265] font-semibold'
                    : 'bg-transparent text-[#9e9a91] border-white/10 hover:border-white/30 hover:text-[#f5f3ee]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Featured Project (Large Editorial Block) */}
          {filteredProjects.length > 0 && (
            <div
              onClick={() => setSelectedProject(filteredProjects[0])}
              className="md:col-span-12 lg:col-span-8 group relative min-h-[220px] aspect-[16/10] overflow-hidden border border-white/[0.08] cursor-pointer bg-[#0c0c0b]"
            >
              <img
                src={filteredProjects[0].image}
                alt={filteredProjects[0].title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/40 to-transparent" />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="bg-[#c5a265] text-[#0c0c0b] text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1">
                  FEATURED
                </span>
                <span className="bg-[#0c0c0b]/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#f5f3ee] px-2.5 py-1 border border-white/10">
                  {filteredProjects[0].category}
                </span>
              </div>

              {/* Reveal Meta */}
              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 text-xs text-[#c5a265] mb-2 font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{filteredProjects[0].location}</span>
                  </div>
                  <h3 className="serif-display text-2xl sm:text-4xl text-[#f5f3ee] group-hover:text-[#c5a265] transition-colors">
                    {filteredProjects[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9e9a91] font-light mt-2 line-clamp-2">
                    {filteredProjects[0].scope}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-full border border-white/20 bg-[#0c0c0b]/80 group-hover:bg-[#c5a265] group-hover:text-[#0c0c0b] group-hover:border-[#c5a265] flex items-center justify-center transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          )}

          {/* Secondary Editorial Block (Stacked Side) */}
          {filteredProjects.length > 1 && (
            <div
              onClick={() => setSelectedProject(filteredProjects[1])}
              className="md:col-span-12 lg:col-span-4 group relative min-h-[240px] aspect-[16/10] lg:aspect-auto overflow-hidden border border-white/[0.08] cursor-pointer bg-[#0c0c0b] flex flex-col justify-end"
            >
              <img
                src={filteredProjects[1].image}
                alt={filteredProjects[1].title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/40 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="bg-[#0c0c0b]/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#f5f3ee] px-2.5 py-1 border border-white/10">
                  {filteredProjects[1].category}
                </span>
              </div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#c5a265] mb-2 font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{filteredProjects[1].location}</span>
                </div>
                <h3 className="serif-display text-2xl text-[#f5f3ee] group-hover:text-[#c5a265] transition-colors">
                  {filteredProjects[1].title}
                </h3>
                <p className="text-xs text-[#9e9a91] font-light mt-1 line-clamp-2">
                  {filteredProjects[1].scope}
                </p>
                <div className="pt-4 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#c5a265] uppercase">
                  <span>EXPLORE SCOPE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}

          {/* Remaining Projects in Editorial Grid (2 columns on tablet, 3 on desktop) */}
          {filteredProjects.slice(2, 8).map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="md:col-span-6 lg:col-span-4 group relative min-h-[200px] aspect-[4/3] overflow-hidden border border-white/[0.08] cursor-pointer bg-[#0c0c0b]"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/40 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-[#0c0c0b]/80 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#f5f3ee] px-2 py-0.5 border border-white/10">
                  {proj.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#c5a265] mb-1 font-mono">
                    <MapPin className="w-3 h-3" />
                    <span>{proj.location}</span>
                  </div>
                  <h4 className="serif-display text-lg sm:text-xl text-[#f5f3ee] group-hover:text-[#c5a265] transition-colors leading-snug">
                    {proj.title}
                  </h4>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/20 bg-[#0c0c0b]/80 group-hover:bg-[#c5a265] group-hover:text-[#0c0c0b] group-hover:border-[#c5a265] flex items-center justify-center transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Projects CTA Row */}
        <div className="mt-16 text-center pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-sm text-[#9e9a91]">
            Detailed tender packages, shop drawings & material mockups available upon request.
          </p>
          <button
            type="button"
            onClick={onOpenInquiry}
            className="btn-outline !py-3 !px-6 text-xs"
          >
            <span>SUBMIT TENDER / RFQ</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a265]" />
          </button>
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-lightbox-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#171615] border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-5 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 border border-white/10 bg-[#0c0c0b]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  decoding="async"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#c5a265] bg-[#c5a265]/10 px-3 py-1 border border-[#c5a265]/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-[#9e9a91]">
                    {selectedProject.year}
                  </span>
                </div>

                <h3 id="project-lightbox-title" className="serif-display text-3xl sm:text-4xl text-[#f5f3ee]">
                  {selectedProject.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#c5a265] font-mono">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.location}</span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="text-xs uppercase tracking-widest text-[#9e9a91] mb-2 font-semibold">
                    Scope of Manufacturing & Fit-Out:
                  </div>
                  <p className="text-sm text-[#f5f3ee] leading-relaxed">
                    {selectedProject.scope}
                  </p>
                </div>

                <div className="bg-[#121110] p-4 border border-white/[0.06] text-xs text-[#9e9a91]">
                  <strong className="text-[#c5a265] block mb-1">Polaris Execution Note:</strong>
                  {selectedProject.highlight}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenInquiry();
                    }}
                    className="btn-primary !py-2.5 !px-6 text-xs"
                  >
                    <span>INQUIRE ABOUT SIMILAR SCOPE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
