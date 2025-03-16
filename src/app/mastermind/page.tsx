"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
// import { FaUsers, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import admiSec from "@/public/mm3.jpg";
import CallToAction from "@/components/CallToAction";

const stats = [
  { label: "SUCCESS RATE", value: 95 },
  { label: "STUDENTI/ANNO", value: 500 },
  { label: "ANNI DI ESPERIENZA", value: 7 },
  { label: "TUTORS", value: 20 },
];

export default function MastermindPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

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
                  Percorso MasterMind
                </motion.h1>
                <motion.h2
                  className="text-xl md:text-2xl text-gray-200 italic"
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.2 }}
                >
                  Il programma studiato per le migliori B-Schools
                </motion.h2>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Image
              src={admiSec}
              alt="Admission Portal"
              className="rounded-2xl shadow-lg w-full"
            />
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

          {/* Program Description */}
          <motion.div
            variants={fadeInUp}
            className="w-full bg-gradient-to-br from-[#e2d2a8] to-[#d9c498] rounded-2xl p-8 mb-8"
          >
            <motion.p
              className="text-[#0B3555] text-2xl font-normal text-center"
              whileHover={{ scale: 1.02 }}
            >
              Testo sul
              <br />
              programma
            </motion.p>
          </motion.div>

          {/* Resources Section */}
          <motion.div className="w-full flex gap-6 mb-8" variants={fadeInUp}>
            {/* Complete Path */}
            <motion.div
              className="w-1/2 bg-gradient-to-br from-[#d6ebfa] to-[#b8dcf8] p-12 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
                Un percorso
                <br />
                completo:
              </h2>
              <motion.div className="flex flex-col gap-6 items-center">
                {["TUTORING GMAT", "TUTORING IELTS", "PERCORSO MASTERMIND"].map(
                  (text) => (
                    <motion.button
                      key={text}
                      className="w-full max-w-md py-3 bg-gradient-to-r from-[#00395a] to-[#005280] text-white font-bold rounded-full text-center shadow-md hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {text}
                    </motion.button>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Other Resources */}
            <motion.div
              className="w-1/2 bg-white p-12 rounded-2xl shadow-lg"
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
                  >
                    {text}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tutors Section */}
          <motion.section
            className="max-w-4xl mx-auto my-12 px-4"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-center text-[#0B3555] mb-16"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Incontra i nostri Tutors
            </motion.h1>

            <motion.div
              className="bg-gradient-to-br from-[#f3e7c9] to-[#e8d7b0] rounded-2xl p-12 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-black tracking-wide text-center">
                video O QUALCOSA DI
                <br />
                INTERATTIVO
              </h2>
            </motion.div>
          </motion.section>

          {/* Additional Tutors Section */}
          <motion.div
            className="flex flex-col items-center justify-center my-2 mb-20"
            variants={fadeInUp}
          >
            <h1 className="text-3xl font-bold text-[#153B5C] mb-6">
              Incontra i nostri Tutors
            </h1>
            <motion.button
              className="bg-[#FF5252] text-black text-lg font-light px-8 py-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              vedi tutoring gmat
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="w-full bg-gradient-to-r from-[#1c3f60] to-blue-900 py-12"
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
