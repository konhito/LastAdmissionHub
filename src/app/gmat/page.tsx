"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import admiFirst from "@/public/gmatFir.jpg";
import admiSec from "@/public/gmatSec.jpg";
import CallToAction from "@/components/CallToAction";
import gmat5 from "@/public/GMAT5.jpg";
import gmat6 from "@/public/gmat6.jpg";
import gmat8 from "@/public/gmat8.jpg";
import { FaPuzzlePiece, FaGlobe, FaDesktop } from "react-icons/fa";

const stats = [
  { label: "SUCCESS RATE", value: 99.3 },
  { label: "STUDENTI/ANNO", value: 50 },
  { label: "ANNI DI ESPERIENZA", value: 7 },
  { label: "ORE DI CONSULENZA", value: 10000 },
];

export default function HomePage() {
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
  const tutors = [
    { id: 1, name: "Tutor 1", description: "Descrizione 1" },
    { id: 2, name: "Tutor 2", description: "Descrizione 2" },
    { id: 3, name: "Tutor 3", description: "Descrizione 3" },
    { id: 4, name: "Tutor 4", description: "Descrizione 4" },
    { id: 5, name: "Tutor 5", description: "Descrizione 5" },
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
  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center ">
      {/* Images Section */}
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

        <div className="flex justify-center gap-25 p-8 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-64 bg-[#1A3756] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4 transition-transform duration-300 hover:rotate-6"
            >
              {card.icon}
              <p className="mt-4">{card.title}</p>
            </div>
          ))}
        </div>

        <Image
          src={gmat5}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-4"
        />

        <Image
          src={admiSec}
          alt="Admission Portal"
          className="rounded-lg shadow-md"
        />
        <Image
          src={gmat6}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-4"
        />
        <Image
          src={gmat8}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-2"
        />
      </div>

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

      {/* Services Section */}

      <div className="w-full bg-[#1c3f60] py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
