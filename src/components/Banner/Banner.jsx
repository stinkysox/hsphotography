"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { photographyData } from "@/data/photographyData";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-hidden bg-onyx">
      {/* Simple static radial glow — no animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(197,160,89,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-6xl text-center px-6 md:px-8 pt-48 md:pt-64 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 md:space-y-8"
        >
          <div>
            <span className="font-accent text-gold text-sm sm:text-lg md:text-2xl italic block tracking-[0.2em] mb-4 opacity-80">
              {photographyData.bio.tagline}
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-pearl leading-[1] md:leading-none uppercase tracking-tight md:tracking-[-0.04em] font-normal">
              {photographyData.bio.name}
            </h1>
          </div>

          <p className="font-body text-sm sm:text-lg md:text-xl max-w-2xl mx-auto text-pearl/70 font-light leading-relaxed tracking-wide mt-6">
            {photographyData.bio.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 pt-10 md:pt-14">
            <button
              className="premium-btn premium-btn-primary w-full sm:w-auto px-12 py-5"
              onClick={() => router.push("/form")}
            >
              Inquire Now
            </button>
            <button
              className="premium-btn premium-btn-secondary w-full sm:w-auto px-12 py-5"
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Gallery
            </button>
          </div>
        </motion.div>
      </div>

      {/* Simple scroll indicator — no looping animation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3 opacity-40">
        <span className="text-[10px] text-gold uppercase tracking-[0.5em] ml-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </div>
  );
};

export default Banner;
