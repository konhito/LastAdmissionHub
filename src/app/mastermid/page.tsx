import React from "react";
import Image from "next/image";

import admiSec from "@/public/mm3.jpg";

import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center ">
      {/* Images Section */}
      <div className="w-full max-w-5xl mb-12">
        <div className="w-full bg-slate-200  mb-6 mt-20 rounded py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                Percorso MasterMind{" "}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700 italic">
                Il programma studiato per le migliori B-Schools{" "}
              </h2>
            </div>
          </div>
        </div>

        <Image
          src={admiSec}
          alt="Admission Portal"
          className="rounded-lg shadow-md mt-2"
        />
        <div className="w-full mt-2 max-w-7xl mx-auto rounded-xl bg-[#e2d2a8] h-80 flex items-center justify-center p-5">
          <p className="text-white text-2xl font-normal text-center">
            Testo sul
            <br />
            programma
          </p>
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
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-16">
            Incontra i nostri Tutors
          </h1>

          <div className="bg-[#f3e7c9] rounded-lg p-8 sm:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-black tracking-wide">
              video O QUALCOSA DI
              <br />
              INTERATTIVO
            </h2>
          </div>
        </div>
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
