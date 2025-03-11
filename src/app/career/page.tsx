"use client";
import React from "react";

import CallToAction from "@/components/CallToAction";

import { FaPuzzlePiece, FaGlobe, FaDesktop } from "react-icons/fa";
import {
  FaUserAlt,
  FaBullseye,
  FaBookOpen,
  FaSearch,
  FaLaptop,
} from "react-icons/fa";

export default function HomePage() {
  const services = [
    {
      title: "PREPARAZIONE CURRICULUM",
      description: "Aiutiamo a creare un CV professionale e ottimizzato.",
    },
    {
      title: "LETTERE MOTIVAZIONALI",
      description: "Scriviamo lettere motivazionali efficaci per candidature.",
    },
    {
      title: "PREPARAZIONE COLLOQUIO",
      description: "Simuliamo colloqui per una preparazione ottimale.",
    },
  ];
  const steps = [
    {
      number: "1",
      icon: <FaUserAlt size={40} />,
      title: "ANALISI PROFILO",
      progress: 20,
    },
    {
      number: "2",
      icon: <FaBullseye size={40} />,
      title: "DEFINIZIONE OBIETTIVI",
      progress: 40,
    },
    {
      number: "3",
      icon: <FaBookOpen size={40} />,
      title: "CONOSCENZE SETTORIALI",
      progress: 60,
    },
    {
      number: "4",
      icon: <FaSearch size={40} />,
      title: "RICERCA OPPORTUNITA'",
      progress: 80,
    },
    {
      number: "5",
      icon: <FaLaptop size={40} />,
      title: "INIZIO STAGE",
      progress: 100,
    },
  ];
  const cards = [
    {
      icon: <FaPuzzlePiece size={40} className="text-blue-300" />,
      title: "APPROCCIO PERSONALIZZATO",
      description: "Ogni percorso è costruito sulle tue esigenze specifiche.",
    },
    {
      icon: <FaGlobe size={40} className="text-blue-300" />,
      title: "MENTOR DEDICATO",
      description: "Un professionista ti seguirà in ogni fase del percorso.",
    },
    {
      icon: <FaDesktop size={40} className="text-blue-300" />,
      title: "STRUMENTI INNOVATIVI",
      description:
        "Utilizziamo le tecnologie più avanzate per la tua formazione.",
    },
  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center">
      {/* Images Section */}
      <div className="w-full max-w-5xl mb-2">
        <div className="w-full bg-slate-200  mb-6 mt-20 rounded py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                The Career Portal{" "}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 italic">
                Le opportunità ideali per il tuo profilo{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-20 p-8 w-full">
          {cards.map((card, index) => (
            <div key={index} className="w-90 h-70 perspective">
              <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 bg-[#1A3756] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-8 backface-hidden">
                  {card.icon}
                  <p className="mt-4">{card.title}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-[#C2A87F] flex items-center justify-center rounded-lg shadow-lg backface-hidden rotate-y-180">
                  <span className="text-[#1c3f60] text-center px-4 font-medium">
                    {card.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1c3f60] mb-8">
            Il nostro approccio per il tuo successo
          </h2>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative flex items-center justify-center w-28 h-28">
                  <svg
                    className="absolute w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-gray-300"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-[#1c3f60] transition-all duration-500"
                      strokeWidth="10"
                      strokeDasharray="251"
                      strokeDashoffset={251 - (251 * step.progress) / 100}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                  </svg>
                  <span className="absolute text-lg font-bold text-[#C2A87F] top-2 left-2">
                    {step.number}
                  </span>
                  <div className="text-gray-600">{step.icon}</div>
                </div>
                <div className="mt-3 bg-[#C2A87F] text-[#1c3f60] px-4 py-2 rounded-lg font-bold text-sm">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#d9ebfb] rounded mb-3 py-12 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c3f60] mb-8">
            Servizi a supporto
          </h2>
          <div className="flex justify-center items-center gap-20 flex-wrap">
            {services.map((service, index) => (
              <div key={index} className="relative w-64 h-64 perspective">
                <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-[#d6bf8a] flex items-center justify-center rounded-lg shadow-lg backface-hidden">
                    <span className="text-lg font-bold text-[#1c3f60] text-center px-4">
                      {service.title}
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#1c3f60] flex items-center justify-center rounded-lg shadow-lg backface-hidden rotate-y-180">
                    <span className="text-white text-center px-4">
                      {service.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#1c3f60] py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>

      {/* Add the CSS for 3D transformations */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .hover\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  );
}
