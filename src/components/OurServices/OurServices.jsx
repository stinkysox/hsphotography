"use client";

import React from "react";
import { motion } from "framer-motion";
import { photographyData } from "@/data/photographyData";

const OurServices = () => {
  return (
    <section className="py-16 md:py-24 bg-onyx" id="services">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-accent text-gold text-lg md:text-xl italic block mb-2">Our Expertise</span>
          <h2 className="font-heading text-3xl md:text-5xl text-pearl uppercase tracking-wide">Professional Services</h2>
          <div className="accent-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographyData.services.map((service, index) => (
            <motion.div
              className={`bg-slate rounded-xl overflow-hidden group border border-pearl/5 hover:border-gold/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 ${index >= 3 ? 'lg:col-span-1 md:col-span-1' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h3 className="text-gold font-heading text-xl uppercase tracking-wider">{service.title}</h3>
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="text-pearl font-heading text-2xl">{service.title}</h3>
                <p className="text-pearl/70 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
