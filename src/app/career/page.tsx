"use client";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import CallToAction from "@/components/CallToAction";
import { FaPuzzlePiece, FaGlobe, FaDesktop } from "react-icons/fa";
import {
  FaUserAlt,
  FaBullseye,
  FaBookOpen,
  FaSearch,
  FaLaptop,
} from "react-icons/fa";

export default function CareerPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [, setActiveStep] = useState(null);
  const [, setActiveCard] = useState(null);

  const services = [
    {
      title: "PREPARAZIONE CURRICULUM",
      description: "Aiutiamo a creare un CV professionale e ottimizzato.",
    },
    {
      title: "LETTERE MOTIVAZIONALI",
      description: "Scriviamo lettere motivazionali efficaci per candidature.",
    },
    {
      title: "PREPARAZIONE COLLOQUIO",
      description: "Simuliamo colloqui per una preparazione ottimale.",
    },
  ];
  const steps = [
    {
      number: "1",
      icon: <FaUserAlt size={40} />,
      title: "ANALISI PROFILO",
      progress: 20,
    },
    {
      number: "2",
      icon: <FaBullseye size={40} />,
      title: "DEFINIZIONE OBIETTIVI",
      progress: 40,
    },
    {
      number: "3",
      icon: <FaBookOpen size={40} />,
      title: "CONOSCENZE SETTORIALI",
      progress: 60,
    },
    {
      number: "4",
      icon: <FaSearch size={40} />,
      title: "RICERCA OPPORTUNITA'",
      progress: 80,
    },
    {
      number: "5",
      icon: <FaLaptop size={40} />,
      title: "INIZIO STAGE",
      progress: 100,
    },
  ];
  const cards = [
    {
      icon: <FaPuzzlePiece size={40} className="text-blue-300" />,
      title: "APPROCCIO PERSONALIZZATO",
      description: "Ogni percorso è costruito sulle tue esigenze specifiche.",
    },
    {
      icon: <FaGlobe size={40} className="text-blue-300" />,
      title: "MENTOR DEDICATO",
      description: "Un professionista ti seguirà in ogni fase del percorso.",
    },
    {
      icon: <FaDesktop size={40} className="text-blue-300" />,
      title: "STRUMENTI INNOVATIVI",
      description:
        "Utilizziamo le tecnologie più avanzate per la tua formazione.",
    },
  ];

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

      <motion.main
        className="bg-white text-gray-800 min-h-screen flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div className="w-full max-w-5xl mb-12">
          {/* Hero Section */}
          <motion.div
            className="w-full bg-gradient-to-r from-gray-900 to-blue-900 mb-6 mt-20 rounded-2xl py-16 md:py-24 relative overflow-hidden"
            variants={fadeInUp}
          >
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
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  animate={{ scale: [0.95, 1] }}
                >
                  The Career Portal
                </motion.h1>
                <motion.h2
                  className="text-xl md:text-2xl text-gray-200 italic"
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                >
                  Le opportunità ideali per il tuo profilo
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Steps Section with Enhanced Progress Circles */}
          <motion.section
            className="w-full p-8 bg-gradient-to-br from-[#1c3f60] to-blue-900 rounded-2xl mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Il nostro approccio per il tuo successo
            </h2>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className="relative flex items-center justify-center w-28 h-28">
                    <svg
                      className="absolute w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        className="text-white/10"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <motion.circle
                        className="text-[#d9c498]"
                        strokeWidth="10"
                        strokeDasharray="251"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        initial={{ strokeDashoffset: 251 }}
                        animate={{
                          strokeDashoffset: 251 - (251 * step.progress) / 100,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                    <span className="absolute text-lg font-bold text-white top-2 left-2">
                      {step.number}
                    </span>
                    <motion.div
                      className="text-white"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <motion.div
                    className="mt-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm"
                    whileHover={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {step.title}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Cards Section with Enhanced Animations */}
          <motion.section
            className="w-full p-8 bg-gradient-to-br from-[#FFF3DB] to-[#FFE5C4] rounded-2xl mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-center text-[#0B3555] mb-8">
              I Nostri Punti di Forza
            </h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="w-64 perspective"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="relative w-full h-64 transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
                    <div className="absolute inset-0 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {card.icon}
                      </motion.div>
                      <h3 className="mt-4 text-lg font-bold text-[#0B3555]">
                        {card.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-[#0B3555] rounded-xl shadow-lg flex items-center justify-center p-6 backface-hidden rotate-y-180">
                      <p className="text-white text-center">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services Section with Enhanced Glass Effect */}
          <motion.section
            className="w-full p-8 bg-gradient-to-br from-[#1c3f60] to-blue-900 rounded-2xl mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Servizi a supporto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white text-center mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-center">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Call to Action with Enhanced Hover Effect */}
        <motion.div
          className="w-full bg-gradient-to-r from-gray-900 to-blue-900 py-12"
          variants={fadeInUp}
        >
          <motion.div
            className="max-w-5xl mx-auto px-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <CallToAction />
          </motion.div>
        </motion.div>
      </motion.main>

      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
}
