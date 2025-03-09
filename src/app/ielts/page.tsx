import React from "react";
import Image from "next/image";
import admiFirst from "@/public/ietsFir.jpg";
import admiSec from "@/public/ieltsSec.jpg";
import CallToAction from "@/components/CallToAction";
import ietts6 from "@/public/iets6.jpg";
import iets7 from "@/public/iets7.jpg";

import { User, Users, BookOpen } from "lucide-react";

export default function HomePage() {
  const cards = [
    {
      icon: <User size={50} className="text-[#0B3555]" />,
      title: "TUTORS MADRELINGUA",
    },
    {
      icon: <Users size={50} className="text-[#0B3555]" />,
      title: "BUDDY PROGRAM",
    },
    {
      icon: <BookOpen size={50} className="text-[#0B3555]" />,
      title: "MATERIALE ESCLUSIVO",
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
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">99.3%</h2>
            <p className="text-gray-600">SUCCESS RATE</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">50+</h2>
            <p className="text-gray-600">STUDENTI/ANNO</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">7</h2>
            <p className="text-gray-600">ANNI DI ESPERIENZA</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">10,000</h2>
            <p className="text-gray-600">ORE DI CONSULENZA</p>
          </div>
        </section>

        <div className="flex justify-center rounded mb-2 items-center gap-20 p-8 bg-[#0B3555] ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-64 bg-[#FFF3DB] rounded-lg shadow-lg flex flex-col items-center justify-center text-[#0B3555] text-center font-bold p-4"
            >
              {card.icon}
              <p className="mt-4">{card.title}</p>
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
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#153B5C] mb-6">
          Incontra i nostri Tutors
        </h1>

        {/* Button */}
        <button className="bg-[#FF5252] text-black text-lg font-light px-8 py-4 rounded-lg">
          vedi tutoring gmat
        </button>
      </div>

      <div className="w-full bg-[#1c3f60]  py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
