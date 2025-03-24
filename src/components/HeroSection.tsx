"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobeWrapper from "./GlobeWrapper";

interface HeroSectionProps {
  onPinClick?: (pin: any) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPinClick }) => {
  const [showButton, setShowButton] = useState(false);

  const handlePinClick = (pin: any) => {
    setShowButton(true);
    if (onPinClick) {
      onPinClick(pin);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="absolute inset-0">
        <div className="h-full relative">
          <GlobeWrapper onPinClick={handlePinClick} />

          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
              >
                <motion.button
                  onClick={() => {
                    window.scrollTo({
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                  className="bg-[#d9c498] text-white px-8 py-4 rounded-full shadow-lg
                      hover:bg-opacity-90 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg font-semibold">
                    Reach Your Goals
                  </span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
