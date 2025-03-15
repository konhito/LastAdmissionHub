"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import StatsSection from "@/components/StatsSection";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Business school logos
  const logos = [
    { name: "HEC Paris", color: "#003366" },
    { name: "ESSEC Business School", color: "#000000" },
    { name: "London Business School", color: "#003366" },
    { name: "LSE", color: "#E4003B" },
    { name: "Imperial College Business School", color: "#003C71" },
    { name: "SDA Bocconi", color: "#00205C" },
    { name: "INSEAD", color: "#00843D" },
    { name: "Skema Business School", color: "#E94E1B" },
    { name: "ESCP Business School", color: "#4B2A85" },
    { name: "Luiss Business School", color: "#003366" },
    { name: "IE Business School", color: "#0065BD" },
    { name: "Harvard Business School", color: "#A51C30" },
  ];

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Custom easing for smoother motion
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Updated useEffect for smoother logo movement
  useEffect(() => {
    const duration = 30000; // 30 seconds for one complete loop
    const start = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - start;
      const progress = (elapsed % duration) / duration;

      setScrollPosition(-100 * progress);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <motion.div
      className="bg-white text-gray-800 min-h-screen flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <HeroSection />

      <motion.div
        className="flex flex-col my-3 items-center w-full max-w-5xl mx-auto mb-12"
        variants={staggerContainer}
      >
        {/* Dream Big Section */}
        <motion.div
          className="relative w-full h-[90vh] bg-slate-800 border-4 rounded-lg flex items-center justify-center"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <motion.div
            className={`text-center text-white px-4 ${montserrat.className}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold">DREAM BIG</h1>
            <h2 className="text-4xl md:text-6xl font-bold my-4">ACT NOW</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold">
              ACHIEVE MORE
            </h3>
            <p className="text-base md:text-lg mt-6 tracking-widest">
              B-SCHOOLS | GMAT | IELTS | CAREER
            </p>
          </motion.div>
        </motion.div>

        {/* Strategy Section */}
        <motion.div
          className="mb-3 mt-2 w-full"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full bg-[#f0e6d2] p-8 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-64 h-64 bg-[#d6ebfa] rounded-full flex items-center justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 55C35 45 50 50 45 30C40 10 65 15 70 35"
                      stroke="#1e3a5f"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ml-8 max-w-2xl">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                Una strategia personalizzata
              </h2>
              <p className="text-[#1e3a5f] text-lg">
                Ogni percorso è unico. Con The Admission Hub, riceverai una
                strategia su misura che tiene conto delle tue esigenze e
                aspirazioni, garantendo un approccio vincente per le tue
                application nelle Business Schools.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Work Section */}
        <motion.div
          className="w-full"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full p-8 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                Un lavoro di squadra
              </h2>
              <p className="text-gray-700 text-lg">
                Il nostro team lavora con te, non solo per te. Collaboriamo
                strettamente per assicurarti il supporto e le risorse necessarie
                a superare ogni sfida accademica, inclusi GMAT e IELTS.
              </p>
            </div>

            <div className="flex-1 flex justify-end">
              <div className="w-full h-64 relative">
                {/* Empty div taking full width */}
                <div className="w-130 h-64"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          className="w-full"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full bg-[#d6ebfa] p-8 rounded-lg flex items-center justify-between">
            <div className="flex items-center justify-center w-1/3">
              <div className="relative">
                <div className="w-32 h-32 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-8">
                  <div className="w-32 h-32 bg-[#e6d4a5] rounded-full transform rotate-12 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-2/3 pl-8 p-7 mt-3">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                Un supporto costante
              </h2>
              <p className="text-[#1e3a5f] text-lg">
                Forniamo supporto ad ogni fase del tuo percorso. Il nostro team
                dedicato ti guida attraverso l&apos;intero processo delle
                application: dalla scelta delle scuole giuste, alla preparazione
                dei test, fino alla preparazione dei curriculum e dei colloqui.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section with animation */}
      <motion.section
        variants={fadeInUpVariant}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <StatsSection />
      </motion.section>

      {/* Team Section with animation */}
      <motion.section
        variants={fadeInUpVariant}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <TeamSection />
      </motion.section>

      {/* Logo Carousel with enhanced animation */}
      <motion.div
        className="w-full overflow-hidden bg-white py-12"
        variants={fadeInUpVariant}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <div className="relative max-w-full mx-auto px-4">
          {/* Updated gradient overlays with wider coverage */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white to-transparent z-10" />

          <motion.div
            className="flex items-center justify-start"
            style={{
              transform: `translateX(${scrollPosition}%)`,
              transition: "transform 0.05s linear",
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 bg-white rounded-lg 
                         shadow-sm px-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                style={{ minWidth: "180px" }}
              >
                <div
                  className="font-semibold text-base"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-dup-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 bg-white rounded-lg 
                         shadow-sm px-6 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                style={{ minWidth: "180px" }}
              >
                <div
                  className="font-semibold text-base"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Blog Section with animation */}
      <motion.section
        variants={fadeInUpVariant}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <BlogSection />
      </motion.section>

      {/* Testimonials with animation */}
      <motion.section
        variants={fadeInUpVariant}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <TestimonialSlider />
      </motion.section>

      {/* Call to Action with animation */}
      <motion.div
        className="w-full bg-black"
        variants={fadeInUpVariant}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
      >
        <motion.div
          className="max-w-5xl mx-auto py-12"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <CallToAction />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
