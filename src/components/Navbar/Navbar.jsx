"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { photographyData } from "@/data/photographyData";

const LOGO_SRC = "https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* ── NAV ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-[1000] h-20"
        style={{
          background: "rgba(12, 12, 12, 0.45)",
          backdropFilter: "blur(32px) saturate(1.8) brightness(1.1)",
          WebkitBackdropFilter: "blur(32px) saturate(1.8) brightness(1.1)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 1px 0 rgba(201,168,76,0.07) inset, 0 16px 48px rgba(0,0,0,0.2)",
        }}
      >
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent w-full opacity-60" />

        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex justify-between items-center">

          {/* ── LOGO ── */}
          <Link href="/" className="group flex items-center">
            <motion.img
              src={LOGO_SRC}
              alt="H-S Photography"
              className="object-contain transition-all duration-500"
              style={{
                height: "65px",
                width: "auto",
                filter: "drop-shadow(0 2px 8px rgba(201,168,76,0.2))",
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className="relative group flex flex-col items-center gap-[5px] py-1"
                  >
                    <span
                      className={`font-body text-[10.5px] font-bold uppercase tracking-[0.22em] transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-pearl/60 group-hover:text-pearl"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`h-[1.5px] rounded-full bg-gold transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-60"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── SOCIAL + HAMBURGER ── */}
          <div className="flex items-center gap-5 md:gap-7">
            <div className="hidden sm:block h-6 w-[1px] bg-gold/20" />

            <div className="hidden sm:flex items-center gap-5">
              <a
                href="https://www.instagram.com/h_s.photo_graphy/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-pearl/50 hover:text-gold text-[17px] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[8px] bg-gold/30" />
              </a>
              <a
                href={`https://wa.me/${photographyData.contact.phones[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-pearl/50 hover:text-gold text-[17px] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[8px] bg-gold/30" />
              </a>
            </div>

            <Link
              href="/#contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2 border border-gold/50 hover:border-gold text-gold text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold/10 rounded-sm"
            >
              Book Now
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden text-pearl/80 hover:text-gold transition-colors duration-300 text-xl p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] flex flex-col"
            style={{ background: "rgb(8,8,8)" }}
          >
            {/* Top bar — logo + close only, no duplicate text */}
            <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-white/5">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src={LOGO_SRC}
                  alt="H-S Photography"
                  className="h-[54px] w-auto object-contain"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(201,168,76,0.2))" }}
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-pearl/40 hover:text-gold text-lg transition-colors p-2"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-10 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -32, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -16, opacity: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-4 py-4 border-b border-white/5 hover:border-gold/20 transition-colors duration-300"
                  >
                    <span className="text-gold/30 text-[10px] font-mono tracking-widest w-5">
                      0{i + 1}
                    </span>
                    <span className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-widest text-pearl/70 group-hover:text-gold transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom social + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="px-10 py-8 border-t border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/h_s.photo_graphy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pearl/40 hover:text-gold text-xl transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href={`https://wa.me/${photographyData.contact.phones[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pearl/40 hover:text-gold text-xl transition-colors duration-300"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 border border-gold/50 text-gold text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-gold/10 transition-all duration-300 rounded-sm"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;