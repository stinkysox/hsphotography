"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photographyData } from "@/data/photographyData";
import { FaTimes, FaExpand } from "react-icons/fa";

const LatestWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-24 bg-onyx" id="work">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-accent text-gold text-lg md:text-xl italic block mb-2">Portfolio</span>
          <h2 className="font-heading text-3xl md:text-5xl text-pearl uppercase tracking-wide">Our Latest Work</h2>
          <div className="accent-line" />
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {photographyData.gallery.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden group rounded-xl bg-slate aspect-[4/5] ${index % 4 === 0 ? 'lg:col-span-2 lg:aspect-video' : ''}`}
              variants={itemVariants}
            >
              <div className="w-full h-full relative cursor-pointer" onClick={() => setSelectedImage(image)}>
                <img 
                  src={image} 
                  alt={`Gallery ${index}`} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-onyx/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FaExpand className="text-gold text-3xl transform scale-75 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-[11000] flex justify-center items-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-full max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
              <button 
                className="absolute -top-12 -right-2 md:-right-12 text-pearl hover:text-gold text-3xl transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LatestWork;
