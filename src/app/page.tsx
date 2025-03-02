import React from "react";
import { FaGraduationCap, FaUsers, FaClock } from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  const services = [
    {
      title: "Una strategia personalizzata",
      description:
        "Ogni percorso è unico. Con The Admission Hub, riceverai una strategia su misura che tiene conto delle tue esigenze e aspirazioni, garantendo un approccio vincente per le tue application nelle Business Schools.",
      icon: <FaGraduationCap className="w-12 h-12 text-primary" />,
    },
    {
      title: "Un lavoro di squadra",
      description:
        "Il nostro team lavora con te, non solo per te. Collaboriamo strettamente per assicurarti il supporto e le risorse necessarie a superare ogni sfida accademica, inclusi GMAT e IELTS.",
      icon: <FaUsers className="w-12 h-12 text-primary" />,
    },
    {
      title: "Un supporto costante",
      description:
        "Forniamo supporto ad ogni fase del tuo percorso. Il nostro team dedicato ti guida attraverso l'intero processo delle application: dalla scelta delle scuole giuste, alla preparazione dei test, fino alla preparazione dei curriculum e dei colloqui.",
      icon: <FaClock className="w-12 h-12 text-primary" />,
    },
  ];

  return (
    <>
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <BlogSection />
      <TestimonialSlider />
      <CallToAction />
    </>
  );
}
