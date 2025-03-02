"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobeWrapper from "./GlobeWrapper";

const HeroSection: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderParticles = () => {
    if (dimensions.width === 0) return null;

    return [...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
        initial={{
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
        }}
        animate={{
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          opacity: [0, 0.5, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "easeInOut",
        }}
      />
    ));
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="absolute inset-0 flex flex-col pt-20">
        <div className="text-center py-8 relative">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <AnimatePresence>
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl text-white font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span className="relative inline-block">
                  ADMISSION HUB
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-[#d9c498]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block">Reach the goal</span>
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Floating particles */}
          {renderParticles()}
        </div>

        <div className="flex-1 relative">
          <GlobeWrapper />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
