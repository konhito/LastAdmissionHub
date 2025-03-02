import React from "react";
import Image from "next/image";
import admiFirst from "@/public/gmatFir.jpg";
import admiSec from "@/public/gmatSec.jpg";
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

      {/* Call to Action Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-5xl mx-auto">
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
