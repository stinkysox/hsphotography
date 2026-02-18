"use client";

import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const FormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    location: "",
    message: "",
    social: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello! 👋
I'm ${formData.fullName}.
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📅 Event Date: ${formData.date}
📍 Event Location: ${formData.location}
📝 Message: ${formData.message}
🔗 Social Profile: ${formData.social}

Excited to connect with you!`;
    window.open(`https://wa.me/918074670691?text=${encodeURIComponent(text)}`, "_blank");
  };

  const fields = [
    { name: "fullName",  label: "Full Name",     type: "text",  placeholder: "Your name",              required: true  },
    { name: "email",     label: "Email",          type: "email", placeholder: "hello@example.com",      required: true  },
    { name: "phone",     label: "Phone",          type: "tel",   placeholder: "+91 000 000 0000",       required: true  },
    { name: "date",      label: "Event Date",     type: "date",  placeholder: "",                       required: false },
  ];

  return (
    <div className="bg-onyx min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col pt-24 pb-16 px-4 sm:px-6">

        {/* ── HEADER ── */}
        <motion.div
          className="text-center mt-8 mb-10 space-y-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-accent text-gold text-base italic block">Inquiry Form</span>
          <h1 className="font-heading text-3xl sm:text-5xl text-pearl uppercase tracking-tight leading-tight">
            Let's Create<br className="sm:hidden" /> Magic
          </h1>
          <p className="font-body text-pearl/40 text-sm max-w-xs mx-auto font-light leading-relaxed">
            Share your vision and we'll help you preserve it forever.
          </p>
          {/* Thin gold rule */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="h-[1px] w-10 bg-gold/30" />
            <div className="w-1 h-1 rounded-full bg-gold/50" />
            <div className="h-[1px] w-10 bg-gold/30" />
          </div>
        </motion.div>

        {/* ── FORM CARD ── */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-xl mx-auto flex flex-col gap-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* 2-col grid for name/email/phone/date */}
          <div className="grid grid-cols-2 gap-4">
            {fields.map((f) => (
              <Field
                key={f.name}
                {...f}
                value={formData[f.name]}
                onChange={handleChange}
              />
            ))}
          </div>

          {/* Full-width fields */}
          <Field
            name="location"
            label="Event Location"
            type="text"
            placeholder="City, venue or region"
            value={formData.location}
            onChange={handleChange}
          />

          {/* Textarea */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] uppercase tracking-[0.2em] text-gold/80 font-body pl-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your event and any special requirements..."
              onChange={handleChange}
              value={formData.message}
              rows={4}
              className="w-full bg-white/[0.04] border border-pearl/8 rounded-xl px-4 py-3.5 font-body text-pearl text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300 placeholder:text-pearl/20 resize-none leading-relaxed"
            />
          </div>

          <Field
            name="social"
            label="Social / Website (optional)"
            type="text"
            placeholder="Instagram, Pinterest link…"
            value={formData.social}
            onChange={handleChange}
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full py-4 rounded-xl bg-gold text-onyx text-[11px] font-extrabold uppercase tracking-[0.25em] hover:bg-gold/90 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold/20"
          >
            Send via WhatsApp
          </button>

          <p className="text-center text-pearl/20 text-[10px] tracking-wider pb-2">
            You'll be redirected to WhatsApp to confirm
          </p>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

/* ── Reusable field ── */
const Field = ({ name, label, type, placeholder, value, onChange, required }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[9px] uppercase tracking-[0.2em] text-gold/80 font-body pl-1">
      {label}
    </label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full bg-white/[0.04] border border-pearl/8 rounded-xl px-4 py-3.5 font-body text-pearl text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.06] transition-all duration-300 placeholder:text-pearl/20"
    />
  </div>
);

export default FormSection;