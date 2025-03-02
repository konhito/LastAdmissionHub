import React from "react";
import Image from "next/image";
import admiFirst from "@/public/ietsFir.jpg";
import admiSec from "@/public/ieltsSec.jpg";
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
        <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-7">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              APPROCCIO PERSONALIZZATO
            </h3>
            <p className="text-gray-600">
              Corsi studiati sulle esigenze individuali.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              NETWORK ESCLUSIVO
            </h3>
            <p className="text-gray-600">
              Accesso a un network di professionisti.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              PIATTAFORMA ALL IN ONE
            </h3>
            <p className="text-gray-600">
              Tutto ciò di cui hai bisogno in un unico posto.
            </p>
          </div>
        </section>

        <Image
          src={admiSec}
          alt="Admission Portal"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Services Section */}
      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
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

      <section className="mb-12">
        <h2 className="text-2xl font-bold flex items-center justify-center text-blue-600 mb-6">
          Il nostro approccio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">
              RAFFORZIAMO LE COMPETENZE
            </h3>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">
              SIMULIAMO SITUAZIONI REALI
            </h3>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-600">
              OTTIMIZZIAMO LA TECNICA
            </h3>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Corsi di gruppo
        </h2>
        <p className="mb-4">
          Pratica le tue skills con discussioni e attività di gruppo (c.a. 10
          persone).
        </p>
        <ul className="list-disc list-inside">
          <li>
            Scegli un corso intensivo di 2 mesi o di allenarti più a lungo con
            il corso standard di 40 ore (6 mesi)
          </li>
        </ul>
      </section>

      <div className="w-full bg-black py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
