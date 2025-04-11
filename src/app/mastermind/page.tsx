"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import admiSec from "@/public/mm3.jpg";
import CallToAction from "@/components/CallToAction";
import TeamSection from "@/components/TeamSection";
import assets1 from "@/public/asset5.png";
import assets2 from "@/public/asset3.png"; // Update with correct path

const stats = [
  { label: "SUCCESS RATE", value: 95 },
  { label: "STUDENTI/ANNO", value: 500 },
  { label: "ANNI DI ESPERIENZA", value: 7 },
  { label: "TUTORS", value: 20 },
];

const viewportOptions = { once: true };

export default function MastermindPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      let current = 0;
      const step = Math.max(stat.value / 100, 1);
      return setInterval(() => {
        current += step;
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.min(current, stat.value);
          return newValues;
        });
        if (current >= stat.value) clearInterval(intervals[index]);
      }, 20);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d9c498] origin-[0%] z-50"
        style={{ scaleX }}
      />

      <motion.main className="bg-[#1c3f60] text-gray-800 min-h-screen w-full">
        <motion.div className="w-full">
          {/* Hero Section - Matches GMAT layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full bg-[#1c3f60] min-h-[50vh] mt-18 flex items-start justify-center pt-40 md:min-h-[calc(100vh-80px)] md:items-center md:mt-0 md:pt-0"
          >
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  Percorso MasterMind
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 italic mb-4">
                  Il programma studiato per le migliori B-Schools
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section - Matches GMAT layout */}
          <div className="w-full bg-[#1c3f60] -mt-8 md:mt-0">
            <div className="max-w-7xl mx-auto px-4 py-4 md:py-16">
              <motion.section
                className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
                variants={fadeInUp}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 md:p-6 backdrop-blur-sm bg-white/10 rounded-xl relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10">
                      <h2 className="text-xl md:text-3xl font-bold text-white mb-2">
                        {Math.round(animatedValues[index])}
                        {stat.label === "SUCCESS RATE" && "%"}
                      </h2>
                      <p className="text-xs md:text-base text-gray-200 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.section>
            </div>
          </div>

          {/* Content Sections */}
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
              {/* Featured Image Section */}
              <motion.section
                className="w-full  p-4 md:p-8 lg:p-12 rounded-2xl mb-8 md:mb-16"
                variants={fadeInUp}
              >
                <Image
                  src={admiSec}
                  alt="Admission Portal"
                  className="rounded-xl shadow-lg w-full"
                />
              </motion.section>

              {/* Resources Section */}
              <div className="w-full bg-white py-16">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  variants={fadeInUp}
                  className="w-full"
                >
                  <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-6 flex-col md:flex-row">
                      {/* Complete Path Section */}
                      <motion.div
                        className="w-full md:w-1/2 p-8 rounded-2xl relative bg-[#98c5f1]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex mb-6">
                          <div className="w-1/3">
                            <Image
                              src={assets1}
                              alt="Complete Path Asset"
                              width={120}
                              height={120}
                              className="object-contain"
                            />
                          </div>
                          <div className="w-2/3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] text-left">
                              Un percorso completo:
                            </h2>
                          </div>
                        </div>
                        <motion.div className="flex flex-col gap-6 items-center">
                          {[
                            "TUTORING GMAT",
                            "TUTORING IELTS",
                            "PERCORSO MASTERMIND",
                          ].map((text) => (
                            <motion.button
                              key={text}
                              className="w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md hover:scale-105 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              variants={fadeInUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={viewportOptions}
                            >
                              {text}
                            </motion.button>
                          ))}
                        </motion.div>
                      </motion.div>

                      {/* Other Resources Section */}
                      <motion.div
                        className="w-full md:w-1/2 p-8 rounded-2xl relative bg-white"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex mb-6">
                          <div className="w-1/3">
                            <Image
                              src={assets2}
                              alt="Other Resources Asset"
                              width={120}
                              height={120}
                              className="object-contain"
                            />
                          </div>
                          <div className="w-2/3">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] text-left">
                              Altre risorse:
                            </h2>
                          </div>
                        </div>
                        <motion.div className="flex flex-col gap-6 items-center">
                          {["IL NOSTRO BLOG", "ACADEMYPRO", "YOUTUBE"].map(
                            (text) => (
                              <motion.button
                                key={text}
                                className="w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md hover:scale-105 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportOptions}
                              >
                                {text}
                              </motion.button>
                            )
                          )}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Team Section */}
              <motion.section
                className="w-full  p-4 md:p-8 lg:p-12 rounded-2xl mb-8 md:mb-16"
                variants={fadeInUp}
              >
                <TeamSection />
              </motion.section>
            </div>
          </div>

          {/* Call to Action */}
          <div className="w-full bg-[#1c3f60]">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <CallToAction />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}
