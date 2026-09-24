import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play, Pause } from 'lucide-react';

export default function Hero({ onOpenInquiry }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('muted', '');
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay restricted on mobile until first user touch
            setIsPlaying(false);
          });
      }
    }

    // Mobile fallback: enable playback on first user tap/touch/scroll
    const handleFirstInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
    window.addEventListener('click', handleFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0c0b]"
    >
      {/* ========================================================================= */}
      {/* CINEMATIC VIDEO BACKGROUND WITH POSTER FALLBACK                            */}
      {/* ========================================================================= */}
      <div
        className="absolute inset-0 z-0 overflow-hidden bg-[#0c0c0b]"
        style={{
          backgroundImage: "url('/assets/hero/hero-master-cinematic.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      >
        <div className="hero-video-wrapper">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
            poster="/assets/hero/hero-master-cinematic.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/polaris-hero-loop.mp4" type="video/mp4" />
            <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Vignette Overlays for Text Legibility & Architectural Mood */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0c0c0b] via-[#0c0c0b]/75 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-[#0c0c0b]/55 to-[#0c0c0b]/30 pointer-events-none" />
        <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_25%_40%,rgba(12,12,11,0.2)_0%,rgba(12,12,11,0.85)_100%)] pointer-events-none" />

        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="container h-full flex justify-between border-x border-white/[0.07]">
            <div className="hidden md:block w-px h-full bg-white/[0.04]" />
            <div className="hidden lg:block w-px h-full bg-white/[0.04]" />
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div
        className="container relative z-10 pt-28 pb-12 sm:pt-32 sm:pb-16 md:py-32 flex flex-col justify-between min-h-screen"
      >
        <div />

        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">
              POLARIS INTERNATIONAL INDUSTRIES LLC
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 mb-5 sm:mb-6"
          >
            <h1 className="serif-display text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-[#f5f3ee] tracking-tight leading-[1.08] sm:leading-[1.02]">
              WE MANUFACTURE
              <br />
              <span className="text-[#c5a265] italic font-normal">THE SPACES</span> YOU IMAGINE.
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-[#9e9a91] font-light max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            Integrated furniture manufacturing and interior fit-out solutions, crafted in Dubai for projects across the GCC and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => scrollToSection('capabilities')}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenInquiry}
              className="btn-outline group w-full sm:w-auto justify-center"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5a265] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar: Ambient Video Indicator & Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-8 sm:pt-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-t border-white/[0.08]"
        >
          {/* Video Status & Manufacturing Meta */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggleVideoPlayback}
              className="flex items-center gap-2.5 px-3 py-1.5 border border-white/10 hover:border-[#c5a265] bg-[#0c0c0b]/60 backdrop-blur-md text-xs text-[#9e9a91] hover:text-[#f5f3ee] transition-colors"
              aria-label={isPlaying ? 'Pause ambient video' : 'Play ambient video'}
            >
              {isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#c5a265] animate-pulse" />
                  <Pause className="w-3 h-3 text-[#c5a265]" />
                  <span className="font-mono text-[10px] tracking-widest uppercase">CINEMATIC REEL</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <Play className="w-3 h-3 text-[#c5a265]" />
                  <span className="font-mono text-[10px] tracking-widest uppercase">PLAY REEL</span>
                </>
              )}
            </button>

            <div className="text-xs text-[#9e9a91] tracking-wider hidden md:block">
              <span className="text-[#f5f3ee]">Bespoke Joinery & Millwork Craftsmanship</span>
              <span className="mx-2 text-[#c5a265]">•</span>
              <span>Dubai Investment Park (DIP 2), UAE</span>
            </div>
          </div>

          {/* Minimal Scroll Indicator */}
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex items-center gap-3 text-xs tracking-[0.2em] text-[#9e9a91] hover:text-[#c5a265] transition-colors group cursor-pointer"
            aria-label="Scroll to introduction"
          >
            <span className="uppercase text-[11px] font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1 group-hover:border-[#c5a265] transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-[#c5a265] rounded-full"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
