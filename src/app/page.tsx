import React from "react";
import Image from "next/image";
import first from "@/public/first.jpg";
import second from "@/public/second.jpg";
import third from "@/public/third.jpg";

import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center">
      <HeroSection />
      <div className="flex flex-col  my-3 items-center w-full max-w-5xl mx-auto mb-12">
        <div className="mb-6 ">
          <Image
            src={first}
            alt="First image"
            layout="responsive"
            width={1920}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <Image
            src={second}
            alt="Second image"
            layout="responsive"
            width={1920}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <Image
            src={third}
            alt="Second image"
            layout="responsive"
            width={1920}
            height={600}
            className="rounded-lg mt-3 shadow-md"
          />
        </div>
      </div>

      <StatsSection />
      <TeamSection />
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
