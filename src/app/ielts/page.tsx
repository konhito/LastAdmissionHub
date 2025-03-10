"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import admiFirst from "@/public/ietsFir.jpg";
import admiSec from "@/public/ieltsSec.jpg";
import CallToAction from "@/components/CallToAction";
import ietts6 from "@/public/iets6.jpg";
import iets7 from "@/public/iets7.jpg";
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
        <Image
          src={admiFirst}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-6 mt-20"
        />
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

        <Image
          src={admiSec}
          alt="Admission Portal"
          className="rounded-lg shadow-md mt-2"
        />
        <Image
          src={ietts6}
          alt="Admission Portal"
          className="rounded-lg shadow-md my-4"
        />
        <Image
          src={iets7}
          alt="Admission Portal"
          className="rounded-lg shadow-md my-4"
        />
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
