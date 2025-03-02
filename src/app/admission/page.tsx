// app/page.tsx
import React from "react";
import Image from "next/image";
import admiFirst from "@/public/admiFirst.jpg";
import admiSec from "@/public/admiSec.jpg";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen flex flex-col items-center ">
      {/* Images Section */}
      <div className="w-full max-w-5xl mb-12">
        <Image
          src={admiFirst}
          alt="Admission Portal"
          className="rounded-lg shadow-md mb-6 mt-20"
        />
        <Image
          src={admiSec}
          alt="Admission Portal"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Services Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Application Toolkit
          </h2>
          <ul className="text-gray-600 space-y-2">
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
        <div className="bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Un percorso completo
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>Tutoring GMAT</li>
            <li>Tutoring IELTS</li>
            <li>Percorso Mastermind</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Altre risorse
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>Il nostro blog</li>
            <li>AcademyPro</li>
            <li>YouTube</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
