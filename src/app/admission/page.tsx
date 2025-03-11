import React from "react";
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
        <div className="w-full bg-slate-200  mb-6 mt-20 rounded py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                The Admission Portal
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 italic">
                Un sostegno a 360 gradi per eccellere{" "}
              </h2>
            </div>
          </div>
        </div>
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

        <div className="w-full flex mt-3">
          <div className="w-1/2 bg-[#d6ebfa] p-12 rounded-l-lg">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
              Un percorso
              <br />
              completo:
            </h2>

            <div className="flex flex-col gap-6 items-center">
              <button className="w-full max-w-md py-3 bg-[#00395a] text-white font-bold rounded-full text-center">
                TUTORING GMAT
              </button>

              <button className="w-full max-w-md py-3 bg-[#00395a] text-white font-bold rounded-full text-center">
                TUTORING IELTS
              </button>

              <button className="w-full max-w-md py-3 bg-[#00395a] text-white font-bold rounded-full text-center">
                PERCORSO MASTERMIND
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-white mt-3 p-12 rounded-r-lg shadow-sm">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-12 text-center">
              Altre <br /> risorse:
            </h2>

            <div className="flex flex-col gap-6 items-center">
              <button className="w-full max-w-md py-3 bg-[#00395a] text-white font-bold rounded-full text-center">
                IL NOSTRO BLOG
              </button>

              <button className="w-full max-w-md py-3 bg-[#00395a] text-white font-bold rounded-full text-center">
                ACADEMYPRO
              </button>

              <button className="w-full max-w-md py-3 bg-[#00395a] text-white font-bold rounded-full text-center">
                YOUTUBE
              </button>
            </div>
          </div>
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
