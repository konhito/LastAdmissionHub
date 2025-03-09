import React from "react";
import Image from "next/image";
import admiFirst from "@/public/mm2.jpg";
import admiSec from "@/public/mm3.jpg";
import mm4 from "@/public/mm4.jpg";
import CallToAction from "@/components/CallToAction";
import iets7 from "@/public/mm5.jpg";
import mm6 from "@/public/mm6.jpg";

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
          className="rounded-lg shadow-md mt-2"
        />
        <Image
          src={mm4}
          alt="Admission Portal"
          className="rounded-lg shadow-md my-4"
        />
        <Image
          src={iets7}
          alt="Admission Portal"
          className="rounded-lg shadow-md my-4"
        />
        <Image
          src={mm6}
          alt="Admission Portal"
          className="rounded-lg shadow-md my-4"
        />
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
