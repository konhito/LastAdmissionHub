"use client";
import React from "react";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import admissionimag from "@/public/admissionimag.jpg";
import assets1 from "@/public/asset5.png";
import assets2 from "@/public/asset3.png";
import { useRouter } from "next/navigation";

import TestimonialSlider from "@/components/TestimonialSlider";

// Update animation variants at the top of your file
const fadeInUpVariant = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
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
      delayChildren: 0.3,
      ease: [0.22, 1, 0.36, 1],
      duration: 0.8,
    },
  },
};

const smoothHeadingAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Update viewport options
const viewportOptions = {
  once: true,
  margin: "0px 0px -200px 0px",
};

export default function HomePage() {
  const router = useRouter();

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
    <motion.main className="bg-[#1c3f5e] text-gray-800 min-h-screen flex flex-col">
      <motion.div
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariant}
      >
        {/* Updated Hero section to match the reference image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full min-h-[80vh] md:min-h-screen relative overflow-hidden flex items-center justify-center bg-[#1c3f60]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={admissionimag}
              alt="Admission Background"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gray-100/50" />
          </div>

          {/* Hero content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#1c3f60] mb-4 md:mb-6 leading-tight"
                animate={{ scale: [0.95, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                The Admission Portal
              </motion.h1>
              <motion.h2
                className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-[#1c3f60] font-normal max-w-4xl leading-relaxed px-4"
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
          className="w-full bg-[#1c3f5e] py-20 relative z-10"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.p
              className="text-white text-xl md:text-2xl leading-relaxed"
              variants={fadeInUpVariant}
            >
              Pensato per accompagnarti in ogni fase del processo di ammissione,
              l’Admission Portal raccoglie le soluzioni più efficaci per
              costruire una candidatura competitiva. Attraverso un percorso
              personalizzato, riceverai il supporto continuo di un team esperto,
              pronto a guidarti con strategia, metodo e attenzione. Che tu stia
              puntando a un MBA o un Master, il nostro obiettivo è aiutarti a
              distinguerti — davvero.
            </motion.p>
          </div>
        </motion.div>

        {/* Application Toolkit Section */}
        <div className="w-full bg-[#e2c8a4] py-12 md:py-24 relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUpVariant}
            className="w-full"
          >
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-[#1e3a5f] mb-8 md:mb-16">
                Application Toolkit
              </h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
              >
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUpVariant}
                    className="w-full relative aspect-square max-w-[300px] mx-auto" // Added max-width and center alignment
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-[#1c3f5e] rounded-2xl shadow-lg flex flex-col items-center justify-center text-white text-center p-4 md:p-6">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold mt-2 px-2 leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Resources Section - Fixed to match reference image */}
        <div className="w-full bg-white py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUpVariant}
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
                      <motion.h2
                        variants={smoothHeadingAnimation}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] text-left"
                      >
                        Un percorso completo:
                      </motion.h2>
                    </div>
                  </div>
                  <motion.div className="flex flex-col gap-6 items-center">
                    {[
                      { text: "TUTORING GMAT", path: "/gmat" },
                      { text: "TUTORING IELTS", path: "/ielts" },
                      { text: "ELITE PATH", path: "/mastermind" },
                    ].map(({ text, path }) => (
                      <motion.button
                        key={text}
                        onClick={() => router.push(path)}
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
                      <motion.h2
                        variants={smoothHeadingAnimation}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] text-left"
                      >
                        Altre risorse:
                      </motion.h2>
                    </div>
                  </div>
                  <motion.div className="flex flex-col gap-6 items-center">
                    {[
                      {
                        text: "IL NOSTRO BLOG",
                        path: "#",
                        comingSoon: true,
                      },
                      {
                        text: "ACADEMYPRO",
                        path: "#",
                        comingSoon: true,
                      },
                      {
                        text: "YOUTUBE",
                        path: "https://www.youtube.com/",
                        comingSoon: false,
                      },
                    ].map(({ text, path, comingSoon }) => (
                      <motion.button
                        key={text}
                        onClick={() =>
                          !comingSoon &&
                          (path.startsWith("http")
                            ? window.open(path, "_blank")
                            : router.push(path))
                        }
                        className={`w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md transition-all duration-300 relative ${
                          !comingSoon && "hover:scale-105"
                        }`}
                        whileHover={!comingSoon ? { scale: 1.05 } : {}}
                        whileTap={!comingSoon ? { scale: 0.95 } : {}}
                        variants={fadeInUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOptions}
                      >
                        {text}
                        {comingSoon && (
                          <span className="absolute -top-2 -right-2 bg-[#e2c8a4] text-[#1e3a5f] text-xs px-2 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-[#1c3f60] py-20"
        >
          <motion.div className="max-w-5xl mx-auto px-4">
            <div className="rounded-2xl backdrop-blur-lg border-white/20 ">
              <CallToAction />
            </div>
          </motion.div>
        </motion.div>
        {/* Testimonial Section - "Dicono di Noi" */}

        <motion.section
          className="py-20 bg-white"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <TestimonialSlider />
        </motion.section>
      </motion.div>

      {/* Call to Action Section - Contained Width */}
    </motion.main>
  );
}
