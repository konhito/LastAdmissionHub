"use client";
import React, { useEffect, useState } from "react";
import CallToAction from "@/components/CallToAction";
import { FaPuzzlePiece, FaGlobe, FaDesktop } from "react-icons/fa";
import { User, Users, BookOpen } from "lucide-react";

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
  const tutors = [
    { id: 1, name: "Tutor 1", description: "Descrizione 1" },
    { id: 2, name: "Tutor 2", description: "Descrizione 2" },
    { id: 3, name: "Tutor 3", description: "Descrizione 3" },
    { id: 4, name: "Tutor 4", description: "Descrizione 4" },
    { id: 5, name: "Tutor 5", description: "Descrizione 5" },
  ];

  const cards1 = [
    {
      icon: <User size={50} className="text-[#0B3555]" />,
      title: "COSTRUIAMO LA BASE TEORICA",
      description:
        "Acquisisci solide fondamenta teoriche con l'aiuto di insegnanti madrelingua qualificati.",
    },
    {
      icon: <Users size={50} className="text-[#0B3555]" />,
      title: "METTIAMO IN PRATICA",
      description:
        "Applica le tue conoscenze con attività pratiche e supporto personalizzato.",
    },
    {
      icon: <BookOpen size={50} className="text-[#0B3555]" />,
      title: "AFFINIAMO LE STRATEGIE",
      description:
        "Perfeziona le tue competenze con strategie avanzate e risorse aggiornate.",
    },
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
        {/* <Image
          src={admiFirst}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-6 mt-20"
        /> */}
        <div className="w-full bg-slate-200  mb-6 mt-20 rounded py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                The Tutoring Portal
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 italic">
                Il metodo vincente per superare il GMAT
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

        <div className="flex justify-center gap-25 p-8 w-full">
          {cards.map((card, index) => (
            <div key={index} className="perspective">
              <div className="w-64 h-64 relative transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute w-full h-full bg-[#1A3756] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4 backface-hidden">
                  {card.icon}
                  <p className="mt-4">{card.title}</p>
                </div>
                {/* Back of card */}
                <div className="absolute w-full h-full bg-[#0F355F] rounded-lg shadow-lg flex flex-col items-center justify-center text-white text-center font-bold p-4 backface-hidden rotate-y-180">
                  <p>{card.title}</p>
                  <p className="mt-2 text-sm font-normal">
                    Clicca per saperne di più
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-[#f0e6d0] p-8 md:p-12 rounded-lg">
          <div className="container mx-auto">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">
                Corsi 1-to-1
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-blue-800 text-lg">
                    Corsi studiati sulle esigenze individuali, con una forte
                    componente applicativa
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-blue-800 text-lg">
                    Stabilisci una durata personalizzata o scegli un corso
                    Mastery da 40, 60 o 100 ore
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <p className="text-blue-800 text-lg">
                    Scegli quali sezioni approfondire tra Quant, Data Insight e
                    Verbal con i nostri tutor specializzati
                  </p>
                </div>
              </div>

              {/* Table */}
              <div className="mt-8 overflow-x-auto mb-5">
                <div className="flex justify-between border-b border-blue-800/20 text-center">
                  <div className="py-4 px-4 text-blue-800 font-bold text-left w-1/5">
                    Pacchetti
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Accelerated
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Standard
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Mastery
                  </div>
                  <div className="py-4 px-4 text-blue-800 font-bold text-center w-1/5">
                    Tailored
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Durata
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    40 h
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    60 h
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    100 h
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    TBD
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Sezioni
                    <br />
                    Coperte
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    1 sezione +<br />1 mock test
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    2 sezioni +<br />2 mock test
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    3 sezioni +<br />4 mock test
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    TBD
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Ideale per
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    rafforzare i punti
                    <br />
                    deboli
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    consolidare le
                    <br />
                    conoscenze
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    una preparazione
                    <br />
                    completa
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    esigenze
                    <br />
                    specifiche
                  </div>
                </div>

                <div className="flex justify-between border-b border-blue-800/20">
                  <div className="py-4 px-4 bg-[#e6d7b3] text-blue-800 font-medium w-1/5">
                    Timeline
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    1-2 mesi
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    2-3 mesi
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    3-6 mesi
                  </div>
                  <div className="py-4 px-4 text-blue-800 text-center w-1/5">
                    TBD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="bg-blue-100 p-8 mt-3 rounded-lg w-full">
          <div>
            {/* Content section */}
            <div>
              <h1 className="text-4xl font-bold text-navy-900 mb-6">
                Corsi di gruppo
              </h1>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Corsi in piccoli gruppi (6-10 persone) focalizzati su una
                    sezione del GMAT
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Le lezioni, della durata di 2 o 4 ore, possono essere svolte
                    da remoto o in presenza
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-blue-700 flex items-center justify-center text-white">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    I moduli possono essere combinati per una preparazione
                    completa
                  </p>
                </div>
              </div>

              {/* Table section */}
              <div className="mt-8 border-t border-gray-300 pt-4">
                <div className="grid grid-cols-3 gap-4 font-medium">
                  <div className="text-navy-900">Corsi</div>
                  <div className="text-navy-900 text-center">Intensivo</div>
                  <div className="text-navy-900 text-center">Standard</div>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-4 bg-blue-200 p-3 rounded">
                  <div className="text-navy-900">Durata</div>
                  <div className="text-center">40 h</div>
                  <div className="text-center">60 h</div>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-4 bg-blue-200 p-3 rounded">
                  <div className="text-navy-900">Timeline</div>
                  <div className="text-center">
                    6 settimane, 3 lezioni a settimana
                  </div>
                  <div className="text-center">
                    3 mesi, 2 lezioni a settimana
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-4 bg-blue-200 p-3 rounded">
                  <div className="text-navy-900">Calendario e programma</div>
                  <div className="text-center">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                      SCARICA
                    </button>
                  </div>
                  <div className="text-center">
                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                      SCARICA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="bg-white p-8 mt-3 rounded-lg shadow-sm w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side content */}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-navy-800 mb-8">
                MasterClass
              </h1>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="mr-4 w-8 h-8 rounded-full border-2 border-navy-800 flex items-center justify-center text-navy-800">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">
                    Classi dedicate a rafforzare argomenti specifici
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 w-8 h-8 rounded-full border-2 border-navy-800 flex items-center justify-center text-navy-800">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">
                    Fai network e migliora le strategie d&apos;esame
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-center">
                  REGISTRATI PER LE PROSSIME MASTERCLASS
                </button>
              </div>
            </div>

            {/* Right side - empty space where illustration was */}
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* No image content here */}
            </div>
          </div>
        </div>

        {/* forth */}
        <div className="flex justify-center rounded mb-2 items-center gap-20 p-8 bg-[#0B3555] ">
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

      {/* Add CSS for 3D flip effect */}
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
        .hover\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </main>
  );
}
