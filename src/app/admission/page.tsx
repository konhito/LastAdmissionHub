"use client";
import React from "react";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import admissionimag from "@/public/admissionimag.jpg";
import assets1 from "@/public/asset5.png";
import assets2 from "@/public/asset3.png";
import assets3 from "@/public/asset2.png";

// Keep only the essential animation variants
const fadeInUpVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Simplify viewport options
const viewportOptions = {
  once: true,
  margin: "-100px",
};

export default function HomePage() {
  // Updated cards with fixed spacing and proper formatting
  const cards = [
    {
      title: "ORIENTAMENTO E CONSULENZA PER LE BUSINESS SCHOOLS",
      description: "Supporto per la scelta delle Business Schools.",
    },
    {
      title: "DEFINIZIONE DEL PROFILO E PREPARAZIONE CURRICULUM",
      description: "Preparazione curriculum e strategia applicativa.",
    },
    {
      title: "SKILLS REFINEMENT E RICERCA STAGE E OPPORTUNITA'",
      description: "Ricerca stage e opportunità lavorative.",
    },
    {
      title: "PREPARAZIONE COVER LETTER, ESSAYS, LETTERE DI RACCOMANDAZIONE",
      description: "Essays e lettere di raccomandazione.",
    },
    {
      title: "SIMULAZIONE DEI COLLOQUI DI SELEZIONE",
      description: "Preparazione ai colloqui di selezione.",
    },
    {
      title: "STRATEGIA POST AMMISSIONE E BORSE DI STUDIO",
      description: "Borse di studio e percorsi formativi.",
    },
  ];

  return (
    <motion.main className="bg-white text-gray-800 min-h-screen flex flex-col">
      <motion.div className="w-full">
        {/* Updated Hero section to match the reference image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full min-h-screen relative overflow-hidden flex items-center justify-center"
        >
          {/* Background Image with lighter overlay to match reference */}
          <div className="absolute inset-0 z-0">
            <Image
              src={admissionimag}
              alt="Admission Background"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gray-100/50" />{" "}
            {/* Lighter overlay to match reference */}
          </div>

          {/* Hero content - centered text layout with navy blue text */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1c3f60] mb-6 leading-tight"
                animate={{ scale: [0.95, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                The Admission Portal
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-5xl text-[#1c3f60] font-normal max-w-4xl leading-relaxed"
                animate={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              >
                Un sostegno a 360 gradi per eccellere
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* NEW SECTION: Lorem Ipsum Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-[#14365a] py-20 relative z-10"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.p
              className="text-white text-xl md:text-2xl leading-relaxed"
              variants={fadeInUpVariant}
            >
              ??Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              Quis aute iure reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </motion.p>
          </div>
        </motion.div>

        {/* UPDATED: Application Toolkit Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-[#f7efd6] py-24 relative z-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#1e3a5f] mb-16">
              Application Toolkit
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariant}
                  className="w-full relative" // Make the card container relative
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={assets3}
                      alt=""
                      fill
                      className="object-cover opacity-20 rounded-lg" // Reduced opacity and rounded corners
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                  <div className="bg-[#1e3a5f] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center p-10 h-full relative z-10">
                    {" "}
                    {/* Position content above image */}
                    <h3 className="text-xl font-bold mt-2 px-4 leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Resources Section - Fixed to match reference image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-white py-16"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-6 flex-col md:flex-row">
              {/* Complete Path Section */}
              <motion.div
                className="w-full md:w-1/2 p-8 rounded-2xl relative bg-[#98c5f1]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Updated image position and styling to match reference */}
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
                    <h2 className="text-5xl font-bold text-[#1e3a5f] text-left">
                      Un percorso
                      <br />
                      <span className="text-center">completo:</span>
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
                      variants={fadeInUpVariant}
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
                {/* Updated image position and styling to match reference */}
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
                    <h2 className="text-5xl font-bold text-[#1e3a5f] text-left">
                      Altre
                      <br />
                      risorse:
                    </h2>
                  </div>
                </div>
                <motion.div className="flex flex-col gap-6 items-center">
                  {["IL NOSTRO BLOG", "ACADEMYPRO", "YOUTUBE"].map((text) => (
                    <motion.button
                      key={text}
                      className="w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md hover:scale-105 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      variants={fadeInUpVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOptions}
                    >
                      {text}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Call to Action Section - Contained Width */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={fadeInUpVariant}
        className="w-full bg-[#1c3f60] py-20"
      >
        <motion.div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl backdrop-blur-lg border-white/20 p-12">
            <CallToAction />
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
