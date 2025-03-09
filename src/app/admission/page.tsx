import React from "react";
import Image from "next/image";
import admiFirst from "@/public/admiFirst.jpg";
import admiSec from "@/public/admiSec.jpg";
import CallToAction from "@/components/CallToAction";

import {
  Briefcase,
  FileText,
  UserCheck,
  MessageSquare,
  Award,
  Users,
} from "lucide-react";

export default function HomePage() {
  const cards = [
    {
      icon: <Briefcase size={40} className="text-white" />,
      title: "ORIENTAMENTO ECONSULENZA PERLE BUSINESS SCHOOLS",
      description: "Supporto per la scelta delle Business Schools.",
    },
    {
      icon: <UserCheck size={40} className="text-white" />,
      title: "DEFINIZIONE DELPROFILO EPREPARAZIONE CURRICULUM",
      description: "Preparazione curriculum e strategia applicativa.",
    },
    {
      icon: <Users size={40} className="text-white" />,
      title: "SKILLS REFINEMENT ERICERCA STAGE EOPPORTUNITA’",
      description: "Ricerca stage e opportunità lavorative.",
    },
    {
      icon: <FileText size={40} className="text-white" />,
      title: "PREPARAZIONE COVER LETTER,ESSAYS, LETTERE DI RACCOMANDAZIONE",
      description: "Essays e lettere di raccomandazione.",
    },
    {
      icon: <MessageSquare size={40} className="text-white" />,
      title: "SIMULAZIONE DEICOLLOQUI DISELEZIONE",
      description: "Preparazione ai colloqui di selezione.",
    },
    {
      icon: <Award size={40} className="text-white" />,
      title: "STRATEGIA POST AMMISSIONE EBORSE DI STUDIO",
      description: "Borse di studio e percorsi formativi.",
    },
  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center">
      {/* Images Section */}
      <div className="w-full max-w-5xl mb-12">
        <Image
          src={admiFirst}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-3 mt-20"
        />
        <div className="w-full rounded mb-3 bg-[#1c3f60] py-12 flex justify-center items-center">
          <h2 className="text-white text-xl text-center">
            Testo sui nostri servizi
          </h2>
        </div>

        {/* Cards Section with Title and Flip Animation */}
        <div className="p-8 bg-[#FFF3DB] rounded-lg">
          <h2 className="text-2xl font-bold text-center text-[#0B3555] mb-6">
            Application Toolkit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-full h-64 group perspective"
              >
                <div className="relative w-full h-full transform transition-transform duration-500 preserve-3d">
                  {/* Front Side */}
                  <div className="absolute w-full h-full bg-[#0B3555] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4 backface-hidden">
                    {card.icon}
                    <p className="mt-4">{card.title}</p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute w-full h-full bg-[#FF5252] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4 rotate-y-180 backface-hidden">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={admiSec}
          alt="Admission Portal"
          className="rounded-lg shadow-md mt-2"
        />
      </div>

      <div className="w-full bg-[#1c3f60] py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
