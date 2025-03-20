"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";

// import StatsSection from "@/components/StatsSection";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  // Modern animation variants
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Updated useEffect for infinite loop animation
  useEffect(() => {
    const animate = () => {
      setScrollPosition((prev) => {
        // Reset position when reaching the end
        if (prev <= -100) {
          return 0;
        }
        // Smooth continuous movement
        return prev - 0.02;
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d9c498] origin-[0%] z-50"
        style={{ scaleX }}
      />

      <motion.div
        className="bg-white text-gray-800 min-h-screen"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <HeroSection />

        {/* Dream Big Section - Full Width */}
        <motion.section className="w-full py-24 bg-gradient-to-b from-gray-900 to-blue-900">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-lg bg-white/10 p-12 rounded-2xl border border-white/20 shadow-2xl">
              <motion.div
                className={`text-center text-white ${montserrat.className}`}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  DREAM BIG
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold my-4">ACT NOW</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold">
                  ACHIEVE MORE
                </h3>
                <p className="text-base md:text-lg mt-6 tracking-widest">
                  B-SCHOOLS | GMAT | IELTS | CAREER
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Strategy Section - Both Cards Full Width */}
        <motion.section className="py-0">
          {/* First Card - Full Width */}
          <div className="w-full bg-[#f0e6d2]">
            <div className="max-w-7xl mx-auto px-4 py-16">
              <motion.div
                variants={fadeInUpVariant}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[400px]"
              >
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0"
                  variants={floatingAnimation}
                  animate="animate"
                  initial="initial"
                >
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
                </motion.div>

                {/* Text content */}
                <div className="max-w-2xl text-center md:text-left">
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
              </motion.div>
            </div>
          </div>

          {/* Second Card - Full Width */}
          <div className="w-full bg-[#d6ebfa]">
            <div className="max-w-7xl mx-auto px-4 py-16">
              <motion.div
                variants={fadeInUpVariant}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center gap-6 min-h-[400px]"
              >
                {/* Text content */}
                <div className="max-w-2xl text-center md:text-left">
                  <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                    Un supporto costante
                  </h2>
                  <p className="text-[#1e3a5f] text-lg">
                    Forniamo supporto ad ogni fase del tuo percorso. Il nostro
                    team dedicato ti guida attraverso l&apos;intero processo
                    delle application: dalla scelta delle scuole giuste, alla
                    preparazione dei test, fino alla preparazione dei curriculum
                    e dei colloqui.
                  </p>
                </div>

                {/* Floating circles */}
                <motion.div
                  className="flex-shrink-0"
                  variants={floatingAnimation}
                  animate="animate"
                  initial="initial"
                >
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Team Section - Modern Cards */}
        <motion.section
          className=""
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <TeamSection />
          </div>
        </motion.section>

        {/* Logo Carousel - Infinite Loop */}
        <motion.section className="py-16 w-full overflow-hidden">
          <div className="relative w-full">
            {/* Reduced gradient overlays width */}
            <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
              className="flex items-center justify-start"
              style={{
                transform: `translateX(${scrollPosition}%)`,
                transition: "transform 0.05s linear",
              }}
            >
              {/* Triple the logos for smoother infinite loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-20 
                   hover:scale-110 transition-transform duration-300"
                  style={{ minWidth: "180px" }}
                >
                  <div
                    className="font-semibold text-lg"
                    style={{ color: logo.color }}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Section - Modern Grid */}
        <motion.section
          className="py-20 px-4 bg-gray-50"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <BlogSection />
        </motion.section>

        {/* Testimonials - Modern Slider */}
        <motion.section
          className="py-20 bg-white"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <TestimonialSlider />
        </motion.section>

        {/* Call to Action - Modern Design */}
        <motion.section
          className="py-20 bg-gradient-to-r from-gray-900 to-blue-900"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="rounded-2xl  p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CallToAction />
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
