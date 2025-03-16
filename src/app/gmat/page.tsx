"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { User, Users, BookOpen, CheckCircle } from "lucide-react";
import { FaPuzzlePiece, FaGlobe, FaDesktop } from "react-icons/fa";
import CallToAction from "@/components/CallToAction";

const stats = [
  { label: "SUCCESS RATE", value: 99.3 },
  { label: "STUDENTI/ANNO", value: 50 },
  { label: "ANNI DI ESPERIENZA", value: 7 },
  { label: "ORE DI CONSULENZA", value: 10000 },
];

export default function GmatPage() {
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

  const tutors = [
    { id: 1, name: "Tutor 1", description: "Descrizione 1" },
    { id: 2, name: "Tutor 2", description: "Descrizione 2" },
    { id: 3, name: "Tutor 3", description: "Descrizione 3" },
    { id: 4, name: "Tutor 4", description: "Descrizione 4" },
    { id: 5, name: "Tutor 5", description: "Descrizione 5" },
  ];

  const cards1 = [
    {
      icon: <User size={50} className="text-[#0B3555]" />,
      title: "COSTRUIAMO LA BASE TEORICA",
      description:
        "Acquisisci solide fondamenta teoriche con l'aiuto di insegnanti madrelingua qualificati.",
    },
    {
      icon: <Users size={50} className="text-[#0B3555]" />,
      title: "METTIAMO IN PRATICA",
      description:
        "Applica le tue conoscenze con attività pratiche e supporto personalizzato.",
    },
    {
      icon: <BookOpen size={50} className="text-[#0B3555]" />,
      title: "AFFINIAMO LE STRATEGIE",
      description:
        "Perfeziona le tue competenze con strategie avanzate e risorse aggiornate.",
    },
  ];

  const cards = [
    {
      icon: <FaPuzzlePiece size={40} className="text-blue-300" />,
      title: "APPROCCIO PERSONALIZZATO",
    },
    {
      icon: <FaGlobe size={40} className="text-blue-300" />,
      title: "NETWORK ESCLUSIVO",
    },
    {
      icon: <FaDesktop size={40} className="text-blue-300" />,
      title: "PIATTAFORMA ALL IN ONE",
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
                  The Tutoring Portal
                </motion.h1>
                <motion.h2
                  className="text-xl md:text-2xl text-gray-200 italic"
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                >
                  Il metodo vincente per superare il GMAT
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.section
            className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 p-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-2xl"
            variants={fadeInUp}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 backdrop-blur-sm bg-white/10 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white">
                  {Math.round(animatedValues[index])}
                  {stat.label === "SUCCESS RATE" && "%"}
                </h2>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* Keep existing sections but wrap them in motion.div with variants */}
          <motion.section
            className="w-full bg-[#f0e6d0] p-8 md:p-12 rounded-2xl shadow-lg mb-8"
            variants={fadeInUp}
          >
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
                Corsi 1-to-1
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-blue-800 text-lg">
                    Corsi studiati sulle esigenze individuali, con una forte
                    componente applicativa
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-blue-800 text-lg">
                    Stabilisci una durata personalizzata o scegli un corso
                    Mastery da 40, 60 o 100 ore
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-blue-800 text-lg">
                    Scegli quali sezioni approfondire tra Quant, Data Insight e
                    Verbal con i nostri tutor specializzati
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="mt-8 overflow-x-auto mb-5">
                <div className="flex justify-between border-b border-blue-800/20 text-center">
                  <div className="py-4 px-4 text-blue-800 font-bold text-left w-1/5">
                    Pacchetti
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Accelerated
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Standard
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Mastery
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Tailored
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Durata
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    40 h
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    60 h
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    100 h
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    TBD
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Sezioni
                    <br />
                    Coperte
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    1 sezione +<br />1 mock test
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    2 sezioni +<br />2 mock test
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    3 sezioni +<br />4 mock test
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    TBD
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Ideale per
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    rafforzare i punti
                    <br />
                    deboli
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    consolidare le
                    <br />
                    conoscenze
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    una preparazione
                    <br />
                    completa
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    esigenze
                    <br />
                    specifiche
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Timeline
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    1-2 mesi
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    2-3 mesi
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    3-6 mesi
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    TBD
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="w-full bg-blue-100 p-8 rounded-2xl shadow-lg mb-8"
            variants={fadeInUp}
          >
            <div>
              <h1 className="text-4xl font-bold text-navy-900 mb-6">
                Corsi di gruppo
              </h1>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Corsi in piccoli gruppi (6-10 persone) focalizzati su una
                    sezione del GMAT
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Le lezioni, della durata di 2 o 4 ore, possono essere svolte
                    da remoto o in presenza
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

              <div className="mt-8 border-t border-gray-300 pt-4">
                <div className="grid grid-cols-3 gap-4 font-medium">
                  <div className="text-navy-900">Corsi</div>
                  <div className="text-navy-900 text-center">Intensivo</div>
                  <div className="text-navy-900 text-center">Standard</div>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-4 bg-blue-200 p-3 rounded">
                  <div className="text-navy-900">Durata</div>
                  <div className="text-center">40 h</div>
                  <div className="text-center">60 h</div>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-4 bg-blue-200 p-3 rounded">
                  <div className="text-navy-900">Timeline</div>
                  <div className="text-center">
                    6 settimane, 3 lezioni a settimana
                  </div>
                  <div className="text-center">
                    3 mesi, 2 lezioni a settimana
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-4 bg-blue-200 p-3 rounded">
                  <div className="text-navy-900">Calendario e programma</div>
                  <div className="text-center">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                      SCARICA
                    </button>
                  </div>
                  <div className="text-center">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                      SCARICA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="w-full bg-white p-8 rounded-2xl shadow-lg mb-8"
            variants={fadeInUp}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-navy-800 mb-8">
                  MasterClass
                </h1>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="mr-4 w-8 h-8 rounded-full border-2 border-navy-800 flex items-center justify-center text-navy-800">
                      ✓
                    </div>
                    <p className="text-gray-700 text-lg">
                      Classi dedicate a rafforzare argomenti specifici
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 w-8 h-8 rounded-full border-2 border-navy-800 flex items-center justify-center text-navy-800">
                      ✓
                    </div>
                    <p className="text-gray-700 text-lg">
                      Fai network e migliora le strategie d&apos;esame
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-center">
                    REGISTRATI PER LE PROSSIME MASTERCLASS
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 mt-8 md:mt-0"></div>
            </div>
          </motion.section>

          <motion.section
            className="w-full p-8 bg-gradient-to-br from-[#1c3f60] to-blue-900 rounded-2xl mb-8"
            variants={fadeInUp}
          >
            <div className="flex justify-center rounded mb-2 items-center gap-20 p-8 bg-[#0B3555] ">
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
                    <div className="absolute w-full h-full bg-[#FFF3DB] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#0B3555] text-center font-bold p-4 backface-hidden">
                      {card.icon}
                      <p className="mt-4">{card.title}</p>
                    </div>

                    <div className="absolute w-full h-full bg-[#FFF3DB] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#0B3555] text-center p-4 backface-hidden rotate-y-180">
                      <p className="text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="w-full p-8 bg-gradient-to-br from-[#FFF3DB] to-[#FFE5C4] rounded-2xl mb-8"
            variants={fadeInUp}
          >
            <div className="flex flex-col items-center bg-white p-10  ">
              <h2 className="text-3xl font-bold text-[#0F355F] mb-6 tracking-wide">
                Incontra i nostri Tutors
              </h2>
              <div className="flex justify-center gap-6">
                {tutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="w-40 h-56 bg-[#EADDC4] flex flex-col justify-center items-center text-[#0F355F] font-bold text-center rounded-md shadow-md uppercase"
                  >
                    <span>{tutor.name}</span>
                    <span>{tutor.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </motion.div>

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
