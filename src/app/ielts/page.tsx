"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { User, Users, BookOpen, CheckCircle } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const tutors = [
  { id: 1, name: "Tutor 1", description: "Descrizione 1" },
  { id: 2, name: "Tutor 2", description: "Descrizione 2" },
  { id: 3, name: "Tutor 3", description: "Descrizione 3" },
  { id: 4, name: "Tutor 4", description: "Descrizione 4" },
  { id: 5, name: "Tutor 5", description: "Descrizione 5" },
];

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

export default function IELTSPage() {
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

  const cards = [
    {
      icon: <User size={50} className="text-[#0B3555]" />,
      title: "TUTORS MADRELINGUA",
      description:
        "Insegnanti madrelingua qualificati con esperienza internazionale",
    },
    {
      icon: <Users size={50} className="text-[#0B3555]" />,
      title: "BUDDY PROGRAM",
      description: "Supporto personalizzato per raggiungere i tuoi obiettivi",
    },
    {
      icon: <BookOpen size={50} className="text-[#0B3555]" />,
      title: "MATERIALE ESCLUSIVO",
      description: "Accesso a risorse didattiche esclusive e aggiornate",
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

      <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center">
        <motion.div
          className="w-full max-w-5xl mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
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
                  transition={{ duration: 0.5 }}
                >
                  The English Portal
                </motion.h1>
                <motion.h2
                  className="text-xl md:text-2xl text-gray-200 italic"
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                >
                  La chiave vincente per preparare l&apos;IELTS
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
                </h2>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.section>

          {/* Features Cards */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 p-8 bg-gradient-to-br from-[#1c3f60] to-blue-900 rounded-2xl mb-8"
            variants={fadeInUp}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative w-64 h-64 perspective-1000"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                    flippedCard === index ? "rotate-y-180" : ""
                  }`}
                >
                  <div className="absolute w-full h-full bg-white/10 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4 backface-hidden border border-white/20">
                    {card.icon}
                    <p className="mt-4">{card.title}</p>
                  </div>
                  <div className="absolute w-full h-full bg-white/10 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center justify-center text-white text-center p-4 backface-hidden rotate-y-180 border border-white/20">
                    <p className="text-sm">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Continue with the rest of your sections, applying similar modern styling */}
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
          {/* last */}
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
        </motion.div>

        <div className="flex flex-col items-center justify-center my-2 mb-20 bg-white">
          <h1 className="text-3xl font-bold text-[#153B5C] mb-6">
            Incontra i nostri Tutors
          </h1>
          <button className="bg-[#FF5252] text-black text-lg font-light px-8 py-4 rounded-lg">
            vedi tutoring gmat
          </button>
        </div>

        <div className="flex flex-col items-center bg-white p-10">
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
      </main>
    </>
  );
}
