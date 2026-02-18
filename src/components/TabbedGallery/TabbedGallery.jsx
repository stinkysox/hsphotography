"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryCategories, galleryImagesByCategory, allGalleryImages } from "@/data/galleryData";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ================= OPTIMIZED IMAGE COMPONENT ================= */

const ImageWithShimmer = ({ src, alt, index, category }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 rounded-xl md:rounded-2xl transform-gpu" style={{ aspectRatio: "auto" }}>
      {/* Animated Shimmer Background */}
      <div 
        className={`absolute inset-0 z-0 bg-neutral-800 transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full" />
      </div>

      <Image
        src={src}
        alt={alt}
        width={800}
        height={1000}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        priority={index < 4}
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-all duration-700 ease-out group-hover:scale-105 
          ${loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-sm scale-105"}`}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
        <span className="text-gold text-[9px] uppercase tracking-[0.3em] mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {category}
        </span>
        <h3 className="text-white text-sm md:text-base uppercase tracking-wider font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {alt}
        </h3>
      </div>
    </div>
  );
};

/* ================= MAIN GALLERY ================= */

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState(galleryCategories[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Pagination logic to prevent DOM bloat
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredImages = useMemo(() => {
    return galleryImagesByCategory[activeTab] || [];
  }, [activeTab]);

  // Reset visible count when tab changes
  useEffect(() => {
    setVisibleCount(12);
  }, [activeTab]);

  // Infinite Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 800;
      
      if (scrollPosition >= threshold) {
        if (visibleCount < filteredImages.length) {
          setVisibleCount(prev => Math.min(prev + 8, filteredImages.length));
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, filteredImages.length]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIdx, filteredImages]); // Added filteredImages to deps

  // Ref to store last scroll position to prevent jumps
  const scrollPos = useRef(0);

  // Lock Scroll and manage focus when Lightbox is open
  useEffect(() => {
    if (selectedImage) {
      scrollPos.current = window.scrollY;
      
      // Save original styles
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;
      };
    }
  }, [selectedImage]);

  const openImage = (image, idx) => {
    setSelectedImage(image);
    setSelectedIdx(idx);
  };

  const closeLightbox = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const savedPos = scrollPos.current;
    setSelectedImage(null);

    // Force scroll restoration after DOM/UI updates
    setTimeout(() => {
      // Temporarily disable smooth scroll for instantaneous restoration
      const html = document.documentElement;
      const originalScroll = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      
      window.scrollTo(0, savedPos);
      
      requestAnimationFrame(() => {
        html.style.scrollBehavior = originalScroll;
      });
    }, 10);
  };

  const navigate = (dir, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const nextIdx = selectedIdx + dir;
    if (nextIdx < 0 || nextIdx >= filteredImages.length) return;
    setSelectedImage(filteredImages[nextIdx]);
    setSelectedIdx(nextIdx);
  };

  return (
    <section className="py-16 md:py-24 bg-black relative min-h-screen">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-gold italic text-lg block">Our Portfolio</span>
          <h2 className="text-3xl md:text-6xl uppercase tracking-wide text-white font-bold">
            Capturing Moments
          </h2>
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-px bg-gold/30" />
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>

        {/* DROPDOWN FILTER */}
        <div className="relative z-50 flex justify-center mb-16">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen((p) => !p);
            }}
            onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            className="group flex items-center gap-4 px-8 py-3 border border-white/10 rounded-full text-xs uppercase tracking-[0.2em] text-white/70 hover:border-gold/40 hover:text-gold transition-all bg-black/40 backdrop-blur-md"
          >
            <span>{activeTab}</span>
            <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} className="text-[10px]">▼</motion.span>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full mt-3 w-56 bg-neutral-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-[60]"
              >
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveTab(cat);
                      setDropdownOpen(false);
                    }}
                    className={`block w-full px-6 py-4 text-[10px] uppercase tracking-widest text-left border-b border-white/5 last:border-0 transition-colors ${
                      activeTab === cat
                        ? "text-gold bg-gold/5"
                        : "text-white/50 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MASONRY GRID - Only renders visibleCount */}
        <div className="columns-2 md:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filteredImages.slice(0, visibleCount).map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="group mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl bg-neutral-900 relative"
                onClick={() => openImage(image, idx)}
              >
                <ImageWithShimmer 
                  src={image.src} 
                  alt={image.title} 
                  index={idx} 
                  category={image.category} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Loading Indicator for Infinite Scroll */}
        {visibleCount < filteredImages.length && (
          <div className="py-10 text-center text-gold/30 text-xs uppercase tracking-widest animate-pulse">
            Discovering more magic...
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] bg-black/98 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-gold transition-all z-[1110] border border-white/10 shadow-xl group"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] hidden md:block">Close</span>
              <FaTimes size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Navigation Arrows */}
            <div className="absolute inset-x-4 md:inset-x-10 flex justify-between items-center pointer-events-none z-[1110]">
              <button
                type="button"
                disabled={selectedIdx === 0}
                className={`pointer-events-auto p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-white/30 hover:text-gold transition-all border border-white/5 shadow-lg ${selectedIdx === 0 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
                onClick={(e) => navigate(-1, e)}
              >
                <FaChevronLeft size={24} />
              </button>
              <button
                type="button"
                disabled={selectedIdx === filteredImages.length - 1}
                className={`pointer-events-auto p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-white/30 hover:text-gold transition-all border border-white/5 shadow-lg ${selectedIdx === filteredImages.length - 1 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
                onClick={(e) => navigate(1, e)}
              >
                <FaChevronRight size={24} />
              </button>
            </div>

            {/* Content Container */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full max-h-[75vh] min-h-[300px] flex items-center justify-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={1600}
                  className="max-h-[75vh] w-auto object-contain rounded shadow-2xl border border-white/5"
                  priority
                />
              </div>

              <div className="text-center space-y-2">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em]">
                  {selectedImage.category}
                </span>
                <h2 className="text-white text-xl md:text-3xl uppercase tracking-widest font-light">
                  {selectedImage.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default TabbedGallery;
