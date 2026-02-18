"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScrollButton = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopArrow(window.scrollY > 100);
      setShowBottomArrow(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1001] flex flex-col gap-4">
      {showTopArrow && (
        <button
          className="w-12 h-12 bg-gold/90 text-onyx rounded-full flex justify-center items-center shadow-2xl hover:bg-gold hover:-translate-y-1 active:scale-95 transition-all duration-300"
          onClick={scrollToTop}
          title="Go to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
      {showBottomArrow && (
        <button
          className="w-12 h-12 bg-pearl/90 text-onyx rounded-full flex justify-center items-center shadow-2xl hover:bg-pearl hover:translate-y-1 active:scale-95 transition-all duration-300 animate-bounce"
          onClick={scrollToBottom}
          title="Go to Bottom"
        >
          <FaArrowDown size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
