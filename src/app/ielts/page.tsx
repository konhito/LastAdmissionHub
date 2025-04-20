"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import TeamSection from "@/components/TeamSection";

const stats = [
  { label: "SUCCESS RATE", value: 99.3 },
  { label: "STUDENTI/ANNO", value: 50 },
  { label: "ANNI DI ESPERIENZA", value: 7 },
  { label: "ORE DI CONSULENZA", value: 10000 },
];

const cards1 = [
  {
    icon: <div className="text-2xl font-bold">1</div>,
    title: "RAFFORZIAMO LE COMPETENZE",
    description:
      "Consolidiamo le tue competenze per garantire una base solida e duratura.",
  },
  {
    icon: <div className="text-2xl font-bold">1</div>,
    title: "SIMULIAMO SITUAZIONI REALI",
    description:
      "Ti prepariamo con simulazioni pratiche per affrontare scenari autentici.",
  },
  {
    icon: <div className="text-2xl font-bold">1</div>,
    title: "OTTIMIZZIAMO LA TECNICA",
    description:
      "Affiniamo le tue tecniche per massimizzare l'efficacia e l'efficienza.",
  },
];

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

const viewportOptions = {
  once: true,
  margin: "-100px",
};

export default function IeltsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [flippedCard, setFlippedCard] = useState(null);

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
          {/* Hero Section - Adjusted for immediate visibility */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUpVariant}
            className="w-full bg-[#1c3f60] min-h-[50vh] mt-18 flex items-start justify-center pt-40 md:min-h-[calc(100vh-80px)] md:items-center md:mt-0 md:pt-0"
          >
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  The IELTS Portal
                </h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 italic mb-4">
                  Il metodo vincente per superare l&apos;IELTS
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section - Closer to hero on mobile */}
          <div className="w-full bg-[#1c3f60] -mt-8 md:mt-0">
            <div className="max-w-7xl mx-auto px-4 py-4 md:py-16">
              <motion.section
                className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8"
                variants={fadeInUp}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-xl relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {Math.round(animatedValues[index])}
                        {stat.label === "SUCCESS RATE" && "%"}
                      </h2>
                      <p className="text-gray-200 uppercase tracking-wider">
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
              <motion.section
                className="w-full bg-[#e2c8a4] p-4 md:p-8 lg:p-12 rounded-2xl mb-8 md:mb-16"
                variants={fadeInUp}
              >
                {/* Section Title */}
                <div className="w-full text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] mb-8">
                    Corsi 1-to-1
                  </h2>
                </div>

                {/* Content Grid */}
                <div className="w-full max-w-6xl mx-auto">
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="min-w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mt-1">
                        <CheckCircle size={20} />
                      </div>
                      <p className="text-blue-800 text-lg">
                        Corsi studiati sulle esigenze individuali, con una forte
                        componente applicativa
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="min-w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mt-1">
                        <CheckCircle size={20} />
                      </div>
                      <p className="text-blue-800 text-lg">
                        Stabilisci una durata personalizzata o scegli un corso
                        Mastery da 40, 60 o 100 ore
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="min-w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white mt-1">
                        <CheckCircle size={20} />
                      </div>
                      <p className="text-blue-800 text-lg">
                        Scegli quali sezioni approfondire tra Quant, Data
                        Insight e Verbal con i nostri tutor specializzati
                      </p>
                    </div>
                  </div>

                  {/* Table - Full width */}
                  <div className="mt-8 overflow-x-auto mb-5 w-full text-sm md:text-base">
                    <div className="min-w-[768px]">
                      <div className="flex justify-between border-b border-blue-800/20 text-center">
                        <div className="py-4 px-4 text-[#1e3a5f] font-bold text-left w-1/5">
                          Pacchetti
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] font-bold text-center w-1/5">
                          Accelerated
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] font-bold text-center w-1/5">
                          Standard
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] font-bold text-center w-1/5">
                          Mastery
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] font-bold text-center w-1/5">
                          Tailored
                        </div>
                      </div>

                      <div className="flex justify-between border-b border-blue-800/20">
                        <div className="py-4 px-4 bg-[#e6d7b3] text-[#1e3a5f] font-medium w-1/5">
                          Durata
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          40 h
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          60 h
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          100 h
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          TBD
                        </div>
                      </div>

                      <div className="flex justify-between border-b border-blue-800/20">
                        <div className="py-4 px-4 bg-[#e6d7b3] text-[#1e3a5f] font-medium w-1/5">
                          Sezioni
                          <br />
                          Coperte
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          1 sezione +<br />1 mock test
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          2 sezioni +<br />2 mock test
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          3 sezioni +<br />4 mock test
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          TBD
                        </div>
                      </div>

                      <div className="flex justify-between border-b border-blue-800/20">
                        <div className="py-4 px-4 bg-[#e6d7b3] text-[#1e3a5f] font-medium w-1/5">
                          Ideale per
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          rafforzare i punti
                          <br />
                          deboli
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          consolidare le
                          <br />
                          conoscenze
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          una preparazione
                          <br />
                          completa
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          esigenze
                          <br />
                          specifiche
                        </div>
                      </div>

                      <div className="flex justify-between border-b border-blue-800/20">
                        <div className="py-4 px-4 bg-[#e6d7b3] text-[#1e3a5f] font-medium w-1/5">
                          Timeline
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          1-2 mesi
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          2-3 mesi
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          3-6 mesi
                        </div>
                        <div className="py-4 px-4 text-[#1e3a5f] text-center w-1/5">
                          TBD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                className="w-full bg-[#d2e6f5] p-4 md:p-8 lg:p-12 rounded-2xl shadow-lg mb-8 md:mb-16"
                variants={fadeInUp}
              >
                <div>
                  <h2 className="text-2xl md:text-5xl font-bold text-[#1e3a5f] mb-4 md:mb-6">
                    Corsi di gruppo
                  </h2>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <p className="text-gray-700">
                        Corsi in piccoli gruppi (6-10 persone) focalizzati su
                        una sezione del GMAT
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <p className="text-gray-700">
                        Le lezioni, della durata di 2 o 4 ore, possono essere
                        svolte da remoto o in presenza
                      </p>
                    </div>

                    <div className="flex items-start">
                      <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                        ✓
                      </div>
                      <p className="text-gray-700">
                        I moduli possono essere combinati per una preparazione
                        completa
                      </p>
                    </div>
                  </div>

                  {/* Corsi di gruppo - Two column layout */}
                  <div className="mt-8 border-t border-gray-300 pt-4">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Intensivo Column */}
                      <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#1e3a5f] text-white p-3 text-center font-medium">
                          Intensivo
                        </div>
                        <div className="bg-blue-100 p-3 space-y-2">
                          <div>
                            <p className="text-sm font-medium text-[#1e3a5f]">
                              Durata
                            </p>
                            <p className="text-sm">40 h</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1e3a5f]">
                              Timeline
                            </p>
                            <p className="text-sm">
                              6 settimane, 3 lezioni/sett.
                            </p>
                          </div>
                          <div className="text-center pt-2">
                            <button className="w-full bg-[#1c3f60] text-white text-sm py-2 px-4 rounded">
                              SCARICA
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Standard Column */}
                      <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#1e3a5f] text-white p-3 text-center font-medium">
                          Standard
                        </div>
                        <div className="bg-blue-100 p-3 space-y-2">
                          <div>
                            <p className="text-sm font-medium text-[#1e3a5f]">
                              Durata
                            </p>
                            <p className="text-sm">60 h</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1e3a5f]">
                              Timeline
                            </p>
                            <p className="text-sm">3 mesi, 2 lezioni/sett.</p>
                          </div>
                          <div className="text-center pt-2">
                            <button className="w-full bg-[#1c3f60] text-white text-sm py-2 px-4 rounded">
                              SCARICA
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* Il Nostro Metodo Section - Adjusted card sizes */}
          <div className="w-full bg-[#1c3f60]">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
              <motion.section className="w-full" variants={fadeInUp}>
                <div className="w-full">
                  <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-4 md:mb-8">
                    Il Nostro Metodo
                  </h2>
                  <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto text-center px-4">
                    {/* ...existing content... */}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 mt-8 md:mt-16">
                    {cards1.map((card, index) => (
                      <div
                        key={index}
                        className="relative w-full md:w-64 h-48 md:h-64 perspective-1000 max-w-sm"
                        onMouseEnter={() => setFlippedCard(index)}
                        onMouseLeave={() => setFlippedCard(null)}
                      >
                        <div
                          className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                            flippedCard === index ? "rotate-y-180" : ""
                          }`}
                        >
                          {/* Front of card */}
                          <div className="absolute w-full h-full bg-[#e2c8a4] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#1e3a5f] text-center font-bold p-4 backface-hidden">
                            <div className="scale-75 md:scale-100">
                              {card.icon}
                            </div>
                            <p className="mt-2 md:mt-4 text-sm md:text-base">
                              {card.title}
                            </p>
                          </div>

                          {/* Back of card */}
                          <div className="absolute w-full h-full bg-[#e2c8a4] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#1e3a5f] text-center p-4 backface-hidden rotate-y-180">
                            <p className="text-xs md:text-sm">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* Team Section */}
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto">
              <TeamSection />
            </div>
          </div>

          {/* Call to Action */}
          <div className="w-full bg-[#1c3f60]">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                variants={fadeInUpVariant}
              >
                <CallToAction />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.main>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
}
