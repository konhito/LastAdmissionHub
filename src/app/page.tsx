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
    <>
      <HeroSection />
      <div className="image-row">
        <Image
          src={first}
          alt="First image"
          layout="responsive"
          width={1920}
          height={400}
          className="full-width-image"
        />
      </div>
      <div className="image-row">
        <Image
          src={second}
          alt="Second image"
          layout="responsive"
          width={1920}
          height={400}
          className="full-width-image"
        />
      </div>
      <div className="image-row">
        <Image
          src={third}
          alt="Third image"
          layout="responsive"
          width={1920}
          height={400}
          className="full-width-image"
        />
      </div>

      <StatsSection />
      <TeamSection />
      <BlogSection />
      <TestimonialSlider />
      <CallToAction />
    </>
  );
}
