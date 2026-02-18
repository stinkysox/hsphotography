"use client";

import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { photographyData } from "@/data/photographyData";

const Footer = () => {
  return (
    <footer className="py-16 bg-slate border-t border-gold/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl text-pearl uppercase tracking-wider">{photographyData.bio.name}</h2>
            <p className="font-body text-pearl/60 text-sm italic">{photographyData.bio.tagline}</p>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg text-gold uppercase tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="font-body text-sm text-pearl/50 hover:text-gold transition-all duration-300 hover:pl-2">Home</a></li>
              <li><a href="#about" className="font-body text-sm text-pearl/50 hover:text-gold transition-all duration-300 hover:pl-2">About</a></li>
              <li><a href="#services" className="font-body text-sm text-pearl/50 hover:text-gold transition-all duration-300 hover:pl-2">Services</a></li>
              <li><a href="#work" className="font-body text-sm text-pearl/50 hover:text-gold transition-all duration-300 hover:pl-2">Portfolio</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading text-lg text-gold uppercase tracking-widest">Connect</h4>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/h_s.photo_graphy/" target="_blank" rel="noopener noreferrer" className="text-2xl text-pearl/50 hover:text-gold transition-all duration-300 hover:-translate-y-1">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/@h_s.sailuckyphotography?si=6FIyZacfn-xh9YUm" target="_blank" rel="noopener noreferrer" className="text-2xl text-pearl/50 hover:text-gold transition-all duration-300 hover:-translate-y-1">
                <FaYoutube />
              </a>
              <a href={`https://wa.me/${photographyData.contact.phones[0]}`} target="_blank" rel="noopener noreferrer" className="text-2xl text-pearl/50 hover:text-gold transition-all duration-300 hover:-translate-y-1">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-pearl/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-pearl/30 uppercase tracking-widest text-center">
          <p>© {new Date().getFullYear()} {photographyData.bio.name}. All rights reserved.</p>
          <p className="text-gold/50">Crafting Memories for Eternity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
