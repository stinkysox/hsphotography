"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import MarqueeImages from "@/components/MarqueeImages/MarqueeImages";
import OurServices from "@/components/OurServices/OurServices";
import TabbedGallery from "@/components/TabbedGallery/TabbedGallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import ScrollButton from "@/components/ScrollButton/ScrollButton";
import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import StatsCounter from "@/components/StatsCounter/StatsCounter";
import TeasersSection from "@/components/TeasersSection/TeasersSection";
import RevealOnScroll from "@/components/RevealOnScroll/RevealOnScroll";

export default function Home() {
  return (
    <main className="bg-onyx flex flex-col min-h-screen selection:bg-gold/30 selection:text-gold">
      <Navbar />
      
      <section id="hero">
        <Banner />
      </section>

      <div className="space-y-0">
        <RevealOnScroll>
          <MarqueeImages />
        </RevealOnScroll>

        <RevealOnScroll className="py-24 bg-onyx" id="about">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <span className="font-accent text-gold text-lg md:text-xl italic block">Our Story</span>
              <h2 className="font-heading text-4xl md:text-6xl text-pearl uppercase tracking-wide">H-S Photography</h2>
              <div className="accent-line" />
              <p className="font-body text-pearl/70 text-lg md:text-2xl font-light leading-relaxed pt-6 px-4">
                Your memories, our responsibility. We are dedicated to capturing the soul of every moment, 
                specializing in cinematic and candid storytelling for weddings, pre-weddings, and all of life's 
                most precious milestones.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <StatsCounter />
        </RevealOnScroll>

        <RevealOnScroll id="services">
          <OurServices />
        </RevealOnScroll>

        <RevealOnScroll id="gallery">
          <TabbedGallery />
        </RevealOnScroll>

        <RevealOnScroll id="teasers">
          <TeasersSection />
        </RevealOnScroll>

        <RevealOnScroll id="testimonials">
          <Testimonials />
        </RevealOnScroll>

        <RevealOnScroll id="contact">
          <ContactSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <InteractiveMap />
        </RevealOnScroll>
      </div>

      <Footer />
      <ScrollButton />
    </main>
  );
}
