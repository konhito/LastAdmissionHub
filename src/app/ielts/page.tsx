"use client";
import React, { useEffect, useState } from "react";

import { CheckCircle } from "lucide-react";

import { User, Users, BookOpen } from "lucide-react";

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

export default function HomePage() {
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

  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center ">
      <div className="w-full max-w-5xl mb-12">
        <div className="w-full bg-slate-200  mb-6 mt-20 rounded py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                The English Portal{" "}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 italic">
                La chiave vincente per preparare l’IELTS{" "}
              </h2>
            </div>
          </div>
        </div>

        <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                {Math.round(animatedValues[index])}
              </h2>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </section>

        <div className="flex justify-center rounded mb-2 items-center gap-20 p-8 bg-[#0B3555] ">
          {cards.map((card, index) => (
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

        {/* second */}
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
      </div>
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

      <div className="w-full bg-[#1c3f60] py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
