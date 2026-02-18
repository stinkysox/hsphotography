"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Chiranjeevi",
    feedback: "100% satisfied! Amazing candid pics, committed to delivering more than expected. Experienced crew with top equipment. Highly recommended for capturing good moments!",
  },
  {
    name: "Saketh",
    feedback: "Beautiful photos, beautiful candid pics, beautiful prewedding shoot and everything is beautiful.. Thanx for making our memories more more moreee beautiful.",
  },
  {
    name: "Ananya",
    feedback: "The photos were absolutely stunning! Every shot captured the essence of the day perfectly. I can't thank you enough for the incredible work. Highly professional and friendly crew!",
  },
  {
    name: "Kiran",
    feedback: "A fantastic experience! From the pre-shoot to the final pictures, every moment was captured with care and creativity. The attention to detail was amazing. Highly recommended!",
  },
  {
    name: "Ravi",
    feedback: "What an exceptional team! The shoot was fun, and the results were beyond my expectations. Every photo was more beautiful than I could have imagined. Great job!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-onyx" id="testimonials">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-accent text-gold text-lg md:text-xl italic block mb-2">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl text-pearl uppercase tracking-wide">What Our Clients Say</h2>
          <div className="accent-line" />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              className="bg-slate p-8 md:p-10 rounded-2xl border border-pearl/5 max-w-md flex flex-col gap-4 shadow-xl hover:border-gold/30 transition-all duration-500"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-gold" size={14} />
                ))}
              </div>
              <p className="font-body text-pearl/80 italic font-light leading-relaxed">"{t.feedback}"</p>
              <div className="mt-4">
                <p className="font-heading text-lg text-pearl uppercase tracking-wider">{t.name}</p>
                <div className="w-8 h-0.5 bg-gold mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
