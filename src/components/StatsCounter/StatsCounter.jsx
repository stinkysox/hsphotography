"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { count: 150, label: "Weddings" },
  { count: 100, label: "Pre-Weddings" },
  { count: 100, label: "Engagements" },
  { count: 50, label: "Baby Shoots" },
  { count: 50, label: "Maternity" },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="py-12 md:py-20 bg-slate" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12">
          {stats.map((item, index) => (
            <motion.div
              className="text-center space-y-2 group"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl text-gold group-hover:scale-110 transition-transform duration-500">
                {inView && <CountUp end={item.count} duration={2.5} />}+
              </h2>
              <p className="font-body text-xs md:text-sm text-pearl/50 uppercase tracking-[0.2em] font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
