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
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUpVariant}
            className="w-full bg-[#1c3f60] min-h-[calc(100vh-80px)] mt-18 flex items-center justify-center"
          >
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex flex-col items-center text-center py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  The IELTS Portal
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 italic">
                  La tua preparazione perfetta per l&apos;IELTS
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="w-full bg-[#1c3f60]">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
              <motion.section
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
              {/* Individual Course Section */}
              <motion.section
                className="w-full bg-[#e2c8a4] p-8 md:p-12 rounded-2xl mb-16"
                variants={fadeInUp}
              >
                <div className="w-full text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
                    Corsi 1-to-1
                  </h2>
                </div>
                <div className="bg-white p-8 mt-3 rounded-lg shadow-sm w-full">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side content */}
                    <div className="md:w-1/2">
                      <h1 className="text-4xl font-bold text-navy-800 mb-6">
                        Corsi 1-to-1
                      </h1>

                      <ul className="space-y-5">
                        {[
                          "Classi personalizzate sulle esigenze dello studente con tutor madrelingua",
                          "Pratica le tue conoscenze linguistiche e affina le migliori strategie per l’IELTS",
                          "Fai network e migliora le strategie d'esame",
                          "Focalizzati sulle quattro sezioni dell’esame: Speaking, Reading, Listening, Writing",
                          "Corsi della durata di 20 o 40 ore, oppure pacchetti custom per esigenze specifiche",
                        ].map((text, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-4">
                              <CheckCircle className="w-8 h-8 text-navy-800" />
                            </div>
                            <p className="text-gray-700 text-lg">{text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Group Course Section */}
              <motion.section
                className="w-full bg-[#e2c8a4] p-8 md:p-12 rounded-2xl mb-16"
                variants={fadeInUp}
              >
                <div className="w-full text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
                    Corsi di gruppo
                  </h2>
                </div>
                <div className="bg-[#EDE0C8] p-6 md:p-8 rounded-lg shadow-md w-full">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Illustration */}
                    <div className="w-full md:w-1/2">{/* img */}</div>

                    {/* Right Content */}
                    <div className="w-full md:w-1/2">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F3E] mb-6">
                        Corsi di gruppo
                      </h2>

                      <ul className="space-y-5">
                        {[
                          "Pratica le tue skills con discussioni e attività di gruppo (c.a. 10 persone)",
                          "Scegli un corso intensivo di 2 mesi o di allenarti più a lungo con il corso standard di 40 ore (6 mesi)",
                          "xx",
                          "xx",
                        ].map((text, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle
                              size={24}
                              className="text-[#0B3555] mr-3 flex-shrink-0"
                            />
                            <p className="text-gray-800">{text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* Il Nostro Metodo Section */}
          <div className="w-full bg-[#1c3f60]">
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
              <motion.section className="w-full" variants={fadeInUp}>
                <div className="w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                    Il Nostro Metodo
                  </h2>
                  <div className="p-8 bg-[#0B3555] mt-3 rounded">
                    <h2 className="text-center text-3xl font-bold text-white mb-6">
                      Il nostro approccio
                    </h2>
                    <div className="flex justify-center mt-3 items-center gap-20">
                      {cards1.map((card, index) => (
                        <div
                          key={index}
                          className="relative w-64 h-64 perspective-1000"
                          onMouseEnter={() => setFlippedCard(index)}
                          onMouseLeave={() => setFlippedCard(null)}
                        >
                          <div
                            className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                              flippedCard === index ? "rotate-y-180" : ""
                            }`}
                          >
                            {/* Front of card */}
                            <div className="absolute w-full h-full bg-[#FFF3DB] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#0B3555] text-center font-bold p-4 backface-hidden">
                              {card.icon}
                              <p className="mt-4">{card.title}</p>
                            </div>

                            {/* Back of card */}
                            <div className="absolute w-full h-full bg-[#FFF3DB] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#0B3555] text-center p-4 backface-hidden rotate-y-180">
                              <p className="text-sm">{card.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
