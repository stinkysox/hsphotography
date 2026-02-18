"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "@/assets/marqueeImages";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative mx-3 overflow-hidden rounded-2xl bg-slate"
      style={{
        height: "clamp(200px, 28vw, 420px)",
        width: "clamp(150px, 20vw, 300px)",
        flexShrink: 0,
      }}
    >
      {/* Skeleton */}
      {!loaded && <div className="absolute inset-0 animate-pulse bg-white/5" />}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      />

      {/* Subtle dark vignette on edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.25) 100%)",
        }}
      />
    </div>
  );
};

const MarqueeImages = () => {
  const rightImages = marqueeImages["Right Images"];
  const leftImages = marqueeImages["Left Images"];

  const renderImages = (imagesArray, dir) =>
    (imagesArray || []).map((imgObj, idx) => (
      <LazyImage key={`${dir}-${idx}`} src={imgObj.imageUrl} alt={`Gallery ${idx + 1}`} />
    ));

  return (
    <section className="relative bg-onyx py-20 overflow-hidden">

      {/* Section label */}
      <div className="text-center mb-12 space-y-2">
        <span className="font-accent text-gold text-base italic">Our Work</span>
        <h2 className="font-heading text-3xl md:text-5xl text-pearl uppercase tracking-tight">Moments Captured</h2>
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="h-[1px] w-10 bg-gold/30" />
          <div className="w-1 h-1 rounded-full bg-gold/50" />
          <div className="h-[1px] w-10 bg-gold/30" />
        </div>
      </div>

      {/* Row 1 — right */}
      <div className="mb-4">
        <Marquee speed={35} gradient={false} direction="right" autoFill>
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      {/* Row 2 — left, slightly faster for depth feel */}
      <div>
        <Marquee speed={28} gradient={false} direction="left" autoFill>
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10"
        style={{ background: "linear-gradient(to right, rgb(10,10,10), transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10"
        style={{ background: "linear-gradient(to left, rgb(10,10,10), transparent)" }} />
    </section>
  );
};

export default MarqueeImages;