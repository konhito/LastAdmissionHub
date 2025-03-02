// app/page.tsx
import React from "react";
import Image from "next/image";
import admiFirst from "@/public/admiFirst.jpg";
import admiSec from "@/public/admiSec.jpg";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center p-6">
      <Image src={admiFirst} alt="admission portal" className="my-3" />
      <Image src={admiSec} alt="admission portal" className="my-3" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Application Toolkit
          </h2>
          <ul className="text-gray-600">
            <li>Orientamento e consulenza per le business schools</li>
            <li>Definizione del profilo e preparazione curriculum</li>
            <li>Skills refinement e ricerca stage e opportunità</li>
            <li>
              Preparazione cover letter, essays, lettere di raccomandazione
            </li>
            <li>Simulazione dei colloqui di selezione</li>
            <li>Strategia post ammissione e borse di studio</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Un percorso completo
          </h2>
          <ul className="text-gray-600">
            <li>Tutoring GMAT</li>
            <li>Tutoring IELTS</li>
            <li>Percorso Mastermind</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Altre risorse
          </h2>
          <ul className="text-gray-600">
            <li>Il nostro blog</li>
            <li>AcademyPro</li>
            <li>YouTube</li>
          </ul>
        </div>
      </section>
      <div className="bg-black w-full">
        <CallToAction />
      </div>
    </main>
  );
}
