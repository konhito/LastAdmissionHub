import React from "react";
import Image from "next/image";

import fifth from "@/public/image.png";

import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import StatsSection from "@/components/StatsSection";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center">
      <HeroSection />
      <div className="flex flex-col   my-3 items-center w-full max-w-5xl mx-auto mb-12">
        <div className="relative w-full h-[90vh] bg-slate-800 border-4  rounded-lg flex items-center justify-center">
          <div
            className={`text-center text-white px-4 ${montserrat.className}`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold">DREAM BIG</h1>
            <h2 className="text-4xl md:text-6xl font-bold my-4">ACT NOW</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold">
              ACHIEVE MORE
            </h3>
            <p className="text-base md:text-lg mt-6 tracking-widest">
              B-SCHOOLS | GMAT | IELTS | CAREER
            </p>
          </div>
        </div>
        <div className="mb-3 mt-2">
          <div className="w-full bg-[#f0e6d2] p-8 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-64 h-64 bg-[#d6ebfa] rounded-full flex items-center justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 55C35 45 50 50 45 30C40 10 65 15 70 35"
                      stroke="#1e3a5f"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ml-8 max-w-2xl">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                Una strategia personalizzata
              </h2>
              <p className="text-[#1e3a5f] text-lg">
                Ogni percorso è unico. Con The Admission Hub, riceverai una
                strategia su misura che tiene conto delle tue esigenze e
                aspirazioni, garantendo un approccio vincente per le tue
                application nelle Business Schools.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full p-8 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                Un lavoro di squadra
              </h2>
              <p className="text-gray-700 text-lg">
                Il nostro team lavora con te, non solo per te. Collaboriamo
                strettamente per assicurarti il supporto e le risorse necessarie
                a superare ogni sfida accademica, inclusi GMAT e IELTS.
              </p>
            </div>

            <div className="flex-1 flex justify-end">
              <div className="w-full h-64 relative">
                {/* Empty div taking full width */}
                <div className="w-130 h-64"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-[#d6ebfa] p-8 rounded-lg flex items-center justify-between">
            <div className="flex items-center justify-center w-1/3">
              <div className="relative">
                <div className="w-32 h-32 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-8">
                  <div className="w-32 h-32 bg-[#e6d4a5] rounded-full transform rotate-12 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-2/3 pl-8 p-7 mt-3">
              <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
                Un supporto costante
              </h2>
              <p className="text-[#1e3a5f] text-lg">
                Forniamo supporto ad ogni fase del tuo percorso. Il nostro team
                dedicato ti guida attraverso l&apos;intero processo delle
                application: dalla scelta delle scuole giuste, alla preparazione
                dei test, fino alla preparazione dei curriculum e dei colloqui.
              </p>
            </div>
          </div>
        </div>
      </div>

      <StatsSection />
      <TeamSection />
      <div className="flex flex-col  my-3 items-center w-full max-w-5xl mx-auto mb-12">
        <div className="mb-6 ">
          <Image
            src={fifth}
            alt="First image"
            layout="responsive"
            width={1920}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <BlogSection />
      <TestimonialSlider />
      <div className="w-full bg-black">
        <div className="max-w-5xl mx-auto py-12">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
