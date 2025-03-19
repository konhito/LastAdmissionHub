"use client";
import React from "react";
import { motion } from "framer-motion";
import CallToAction from "@/components/CallToAction";
import {
  Briefcase,
  FileText,
  UserCheck,
  MessageSquare,
  Award,
  Users,
} from "lucide-react";

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

// Remove all refs since we're not using useInView anymore
export default function HomePage() {
  const cards = [
    {
      icon: <Briefcase size={40} className="text-white" />,
      title: "ORIENTAMENTO ECONSULENZA PERLE BUSINESS SCHOOLS",
      description: "Supporto per la scelta delle Business Schools.",
    },
    {
      icon: <UserCheck size={40} className="text-white" />,
      title: "DEFINIZIONE DELPROFILO EPREPARAZIONE CURRICULUM",
      description: "Preparazione curriculum e strategia applicativa.",
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "SKILLS REFINEMENT ERICERCA STAGE EOPPORTUNITA’",
      description: "Ricerca stage e opportunità lavorative.",
    },
    {
      icon: <FileText size={40} className="text-white" />,
      title: "PREPARAZIONE COVER LETTER,ESSAYS, LETTERE DI RACCOMANDAZIONE",
      description: "Essays e lettere di raccomandazione.",
    },
    {
      icon: <MessageSquare size={40} className="text-white" />,
      title: "SIMULAZIONE DEICOLLOQUI DISELEZIONE",
      description: "Preparazione ai colloqui di selezione.",
    },
    {
      icon: <Award size={40} className="text-white" />,
      title: "STRATEGIA POST AMMISSIONE EBORSE DI STUDIO",
      description: "Borse di studio e percorsi formativi.",
    },
  ];

  return (
    <motion.main className="bg-white text-gray-800 min-h-screen flex flex-col">
      <motion.div className="w-full">
        {/* Update the Hero section with larger text and height */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-[#1c3f60] min-h-[95vh] relative overflow-hidden flex items-center" // Added min-height and flex
        >
          {/* Background pattern - keep as is */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "url('/grid-pattern.svg')",
              backgroundSize: "cover",
            }}
          />

          {/* Hero content - updated text sizes */}
          <div className="container mx-auto px-4 md:px-8 relative z-10 mt-16">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8" // Increased text size
                animate={{ scale: [0.95, 1] }}
                transition={{ duration: 0.5 }}
              >
                The Admission Portal
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-4xl text-gray-200 italic max-w-3xl" // Increased subtitle size
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 0.2 }}
              >
                Un sostegno a 360 gradi per eccellere
              </motion.h2>
            </div>
          </div>

          {/* Shadow effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#1c3f60] shadow-[0_-40px_40px_rgba(0,0,0,0.1)]" />
        </motion.div>

        {/* Update the Services Banner with white background */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-white py-24 -mt-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#1c3f60] text-3xl font-bold mb-8">
              {" "}
              {/* Updated text color and styling */}
              Testo sui nostri servizi
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Offriamo un supporto completo per il tuo percorso di ammissione
            </p>
          </div>
        </motion.div>

        {/* Update the Cards Section with shorter height */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariant}
          className="w-full bg-white py-24 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-[#0B3555] mb-6">
              Application Toolkit
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariant}
                  className="relative w-full h-48 group perspective" // Reduced from h-64 to h-48
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-full transform transition-transform duration-500 preserve-3d">
                    {/* Front Side */}
                    <div className="absolute w-full h-full bg-[#0B3555] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center p-4 backface-hidden">
                      {card.icon}
                      <p className="mt-2 text-sm">{card.title}</p>{" "}
                      {/* Reduced margin and text size */}
                    </div>
                    
                    <div className="absolute w-full h-full bg-[#FF5252] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center p-4 rotate-y-180 backface-hidden">
                      <p className="text-sm">{card.description}</p>{" "}
                     
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Resources Section - Remove mt-6 */}
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
                className="w-full md:w-1/2 bg-gradient-to-br from-[#d6ebfa] to-[#b8dcf8] p-12 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                  Un percorso
                  <br />
                  completo:
                </h2>
                <motion.div className="flex flex-col gap-6 items-center">
                  {[
                    "TUTORING GMAT",
                    "TUTORING IELTS",
                    "PERCORSO MASTERMIND",
                  ].map((text) => (
                    <motion.button
                      key={text}
                      className="w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md hover:shadow-xl transition-all duration-300"
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
                className="w-full md:w-1/2 bg-white p-12 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                  Altre
                  <br />
                  risorse:
                </h2>
                <motion.div className="flex flex-col gap-6 items-center">
                  {["IL NOSTRO BLOG", "ACADEMYPRO", "YOUTUBE"].map((text) => (
                    <motion.button
                      key={text}
                      className="w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md hover:shadow-xl transition-all duration-300"
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
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-12">
            <CallToAction />
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
