"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { photographyData } from "@/data/photographyData";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const LOGO_SRC = "https://i.postimg.cc/B6ZDNJLr/IMG-9894-JPG.jpg";

const ContactSection = () => {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 bg-onyx" id="contact">
      <div className="section-container">

        {/* ── BIG LOGO CENTREPIECE ── */}
        <div className="flex justify-center mb-16 md:mb-20">
          <img
            src={LOGO_SRC}
            alt="Sailucky Photography"
            className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── LEFT: Contact Info ── */}
          <div className="flex flex-col gap-6">
            <span className="font-accent text-gold text-lg md:text-xl italic block">Get in Touch</span>
            <h2 className="font-heading text-3xl md:text-5xl text-pearl uppercase tracking-wide leading-tight">
              Let's Capture Your Story
            </h2>
            <p className="font-body text-pearl/70 text-lg font-light leading-relaxed">
              Ready to preserve your most precious moments? Reach out to us for bookings and inquiries.
            </p>

            <div className="my-8 flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-onyx transition-all duration-300">
                  <MdLocationOn size={24} />
                </div>
                <span className="font-body text-pearl/80">{photographyData.contact.address}</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-onyx transition-all duration-300">
                  <FaPhoneAlt size={20} />
                </div>
                <div className="flex flex-col font-body">
                  {photographyData.contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="text-pearl/80 hover:text-gold transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/h_s.photo_graphy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-pearl hover:bg-gold hover:text-onyx hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={`https://wa.me/${photographyData.contact.phones[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-pearl hover:bg-gold hover:text-onyx hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="mailto:sailuckyphotography@gmail.com"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-pearl hover:bg-gold hover:text-onyx hover:border-gold hover:-translate-y-1 transition-all duration-300"
              >
                <MdEmail size={20} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Booking Card ── */}
          <div className="flex justify-center">
            <div className="bg-slate p-6 md:p-16 rounded-[2rem] text-center flex flex-col gap-6 max-w-md border border-pearl/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <h3 className="font-heading text-3xl text-pearl uppercase tracking-wide">Book Your Session</h3>
              <p className="font-body text-pearl/60 font-light">Secure your date today and let us create magic together.</p>
              <button
                className="premium-btn premium-btn-primary mt-4"
                onClick={() => router.push("/form")}
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default ContactSection;