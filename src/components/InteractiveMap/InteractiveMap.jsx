"use client";

import React from "react";
import { photographyData } from "@/data/photographyData";

const InteractiveMap = () => {
  return (
    <section className="py-24 bg-onyx">
      <div className="section-container text-center">
        <div className="mb-12">
          <span className="font-accent text-gold text-lg md:text-xl italic block mb-2">Location</span>
          <h2 className="font-heading text-3xl md:text-5xl text-pearl uppercase tracking-wide">Visit Our Studio</h2>
          <div className="accent-line" />
        </div>
        
        <div className="relative group max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gold/20 transition-all duration-700 hover:border-gold/50">
          <iframe
            src={photographyData.contact.googleMapsEmbed}
            width="100%"
            height="500"
            className="w-full h-[350px] md:h-[500px] border-none grayscale-[0.8] contrast-[1.2] invert-[0.9] hue-rotate-[180deg] group-hover:grayscale-0 transition-all duration-1000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="H-S Photography Location"
          ></iframe>
          {/* Overlay to catch clicks and show instructions or just for aesthetic */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-gold/10 rounded-3xl" />
        </div>

        <div className="mt-12 space-y-4">
          <p className="font-body text-pearl/80 text-lg">{photographyData.contact.address}</p>
          <div className="flex justify-center gap-8 font-body font-semibold">
            {photographyData.contact.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`} className="text-gold hover:text-pearl transition-colors duration-300">
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
