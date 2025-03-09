import React from "react";
import Image from "next/image";
import admiFirst from "@/public/gmatFir.jpg";
import admiSec from "@/public/gmatSec.jpg";
import CallToAction from "@/components/CallToAction";
import gmat5 from "@/public/GMAT5.jpg";
import gmat6 from "@/public/gmat6.jpg";
import gmat8 from "@/public/gmat8.jpg";
import { FaPuzzlePiece, FaGlobe, FaDesktop } from "react-icons/fa";

export default function HomePage() {
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

        <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mb-2">
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

        <div className="flex justify-center gap-25 p-8 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-64 bg-[#1A3756] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4"
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
          className="rounded-lg shadow-md mb-4"
        />
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
