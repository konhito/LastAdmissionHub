"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TeamSection from "@/components/TeamSection";
// import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import asset1 from "@/public/asset1 (2).svg"; // Make sure this matches your file extension
import firstone from "@/public/First_sec_1.svg";
import secondone from "@/public/asset3.svg";
import thirdone from "@/public/asset4.svg";
import hecLogo from "@/public/logos/HECparis.png";
import essecLogo from "@/public/logos/essec.png";
import imperialLogo from "@/public/logos/ImperialBusinessCollegeSchool.png";
import insedLogo from "@/public/logos/INSEAD.png";
import lbsLogo from "@/public/logos/LondonBusinessSchool.png";
import lseLogo from "@/public/logos/LSE.png";
import bocconiLogo from "@/public/logos/SDAbocconi.png";

// import StatsSection from "@/components/StatsSection";
import { Montserrat, Libre_Franklin } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

// Update sectionStyles with consistent text alignment
const sectionStyles = {
  wrapper: "w-full py-8 md:py-12 lg:py-16",
  container: "max-w-7xl mx-auto px-4 md:px-6",
  content: `flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[250px] md:min-h-[300px] rounded-lg p-4 md:p-8`,
  textContainer: "max-w-2xl text-center md:text-left mt-6 md:mt-0", // Added text-center for mobile
  heading: `${montserrat.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4 md:mb-6 text-center md:text-left`, // Added text-center for mobile
  paragraph: `${montserrat.className} text-base sm:text-lg md:text-xl text-[#1e3a5f] leading-relaxed mb-4 text-center md:text-left`, // Added text-center for mobile
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [hideGlobe, setHideGlobe] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGlobeSection, setShowGlobeSection] = useState(true);

  // Business school logos
  const logos = [
    { name: "HEC Paris", image: hecLogo },
    { name: "ESSEC Business School", image: essecLogo },
    { name: "Imperial College Business School", image: imperialLogo },
    { name: "INSEAD", image: insedLogo },
    { name: "London Business School", image: lbsLogo },
    { name: "LSE", image: lseLogo },
    { name: "SDA Bocconi", image: bocconiLogo },
  ];

  // Modern animation variants
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showGlobeSection && window.scrollY > window.innerHeight * 0.1) {
        // First, trigger the fade out animation
        setHideGlobe(true);

        // Wait for animation to complete before removing the section
        setTimeout(() => {
          setShowGlobeSection(false);
        }, 500); // Match this with your animation duration
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showGlobeSection]);

  useEffect(() => {
    let animationFrameId: number;
    let position = scrollPosition;

    const animate = () => {
      position -= 0.1; // Adjust speed as needed
      if (position <= -100) {
        position = 0;
      }
      setScrollPosition(position);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d9c498] origin-[0%] z-50"
        style={{ scaleX }}
      />

      <motion.div
        className="bg-white text-gray-800 min-h-screen"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Globe section with fade out animation */}
        {showGlobeSection && (
          <div
            className={`relative bg-[#1c3f60] min-h-screen transition-opacity duration-500 ${
              hideGlobe ? "opacity-0" : "opacity-100"
            }`}
          >
            <HeroSection />
          </div>
        )}

        {/* Dream Big section */}
        <motion.section
          className="w-full py-24 relative overflow-hidden bg-[#1c3f60] min-h-screen dream-big-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: hideGlobe ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Image Layer - Updated positioning and size */}
          <div className="absolute bottom-0 left-0 right-0 w-full  h-[100%] z-0">
            <Image
              src={asset1}
              alt="Dream Big Background"
              fill
              className="object-cover object-bottom scale-150 transform translate-y-[30%]"
              style={{
                objectPosition: "50% 50%",
              }}
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#1c3f60] via-[#1c3f60]/30 to-transparent" />
          </div>

          {/* Content Layer - Updated positioning */}
          <motion.div
            className="max-w-7xl mx-auto relative z-10 px-4 h-full flex flex-col justify-end"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <div className="text-white md:w-1/2 ml-auto pb-24">
              {" "}
              {/* Added ml-auto and pb-24 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Title Group with Libre Franklin */}
                <div
                  className={`${libreFranklin.className} text-right pt-16 md:pt-30`}
                >
                  {" "}
                  {/* Added text-right */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                    DREAM BIG
                  </h1>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text"
                    style={
                      {
                        WebkitTextStroke: "5px white",
                        "--text-stroke": "5px white",
                      } as React.CSSProperties
                    }
                  >
                    ACT NOW
                  </h2>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                    ACHIEVE MORE
                  </h3>
                </div>

                {/* Subtitle with Montserrat */}
                <p
                  className={`${montserrat.className} text-base md:text-lg mt-8 tracking-widest font-medium text-right`}
                >
                  AMMISSIONI | GMAT | IELTS | CAREER
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section className="py-0">
          {/* First section */}
          <div className={sectionStyles.wrapper + " bg-[#e2c8a4]"}>
            <div className={sectionStyles.container}>
              <motion.div
                variants={fadeInUpVariant}
                viewport={{ once: true }}
                className={sectionStyles.content}
              >
                <motion.div
                  className="flex-shrink-0"
                  variants={floatingAnimation}
                  animate="animate"
                  initial="initial"
                >
                  <Image
                    src={firstone}
                    alt="Strategy Illustration"
                    width={580}
                    height={580}
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <div className={sectionStyles.textContainer}>
                  <h2 className={`${sectionStyles.heading} `}>
                    Una strategia personalizzata
                  </h2>
                  <p className={sectionStyles.paragraph}>
                    Ogni percorso è unico.
                  </p>
                  <p className={sectionStyles.paragraph}>
                    Con The Admission Hub riceverai un piano costruito sul tuo
                    profilo e sulle tue ambizioni. Ti guideremo nella scelta
                    delle università, nella preparazione al GMAT e IELTS, e
                    nella creazione di una candidatura solida e coerente.
                  </p>
                  <p className={sectionStyles.paragraph}>
                    Otterrai un supporto completo per valorizzare il tuo profilo
                    e massimizzare le possibilità di entrare in una Business
                    School.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Second section */}
          <div className={sectionStyles.wrapper + " bg-white"}>
            <div className={sectionStyles.container}>
              <motion.div
                variants={fadeInUpVariant}
                viewport={{ once: true }}
                className={sectionStyles.content}
              >
                <div className={sectionStyles.textContainer}>
                  <h2 className={sectionStyles.heading}>
                    Un lavoro di squadra
                  </h2>
                  <p className={sectionStyles.paragraph}>
                    Ti offriamo molto più di un semplice supporto: il tuo
                    obiettivo è il nostro scopo. Lo affrontiamo con competenza,
                    metodo e una strategia costruita su misura.
                  </p>
                  <p className={sectionStyles.paragraph}>
                    Il nostro team riunisce competenze complementari: tutor
                    specializzati nei test di ammissione, mentor dalle top
                    Business School internazionali e professionisti della
                    formazione accademica e professionale
                  </p>
                </div>
                <motion.div
                  className="flex-shrink-0"
                  variants={floatingAnimation}
                  animate="animate"
                  initial="initial"
                >
                  <Image
                    src={secondone}
                    alt="Team Collaboration Illustration"
                    width={580}
                    height={580}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Third section */}
          <div className={sectionStyles.wrapper + " bg-[#d2e6f5]"}>
            <div className={sectionStyles.container}>
              <motion.div
                variants={fadeInUpVariant}
                viewport={{ once: true }}
                className={sectionStyles.content}
              >
                <motion.div
                  className="flex-shrink-0"
                  variants={floatingAnimation}
                  animate="animate"
                  initial="initial"
                >
                  <Image
                    src={thirdone}
                    alt="Support Illustration"
                    width={580}
                    height={580}
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <div className={sectionStyles.textContainer}>
                  <h2 className={sectionStyles.heading}>
                    Un supporto costante
                  </h2>
                  <p className={sectionStyles.paragraph}>
                    Gestire un’application per un MBA o un Master richiede
                    attenzione ai dettagli, rispetto di deadline precise e
                    coerenza tra tutti gli elementi del profilo. Ti
                    accompagniamo nel tuo percorso, adattando strategie e
                    tecniche ai requisiti delle Business School internazionali e
                    alle tue possibilità di successo.
                  </p>
                  <p className={sectionStyles.paragraph}>
                    Perché una candidatura efficace non si costruisce una volta
                    sola: è un processo strategico.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-12 md:py-20 lg:py-24 bg-[#1c3f5e]"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto px-0">
            <motion.div
              className="rounded-2xl  p-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CallToAction />
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section - Modern Cards */}
        <motion.section
          className=""
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <TeamSection />
          </div>
        </motion.section>

        {/* Logo Carousel - Infinite Loop */}
        <motion.section className="py-8 w-full overflow-hidden bg-white">
          <div className="relative w-full max-w-7xl mx-auto">
            <motion.div
              className="flex items-center justify-start"
              style={{
                transform: `translateX(${scrollPosition}%)`,
                transition: "transform 0.005s linear",
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center"
                  style={{ minWidth: "180px" }}
                >
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={120}
                    height={60}
                    className="object-contain h-12 md:h-16 w-auto"
                    priority
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials - Modern Slider */}
        <motion.section
          className="py-20 bg-white"
          variants={fadeInUpVariant}
          viewport={{ once: true }}
        >
          <TestimonialSlider />
        </motion.section>

        {/* Call to Action - Modern Design */}
      </motion.div>
    </>
  );
}
