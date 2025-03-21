"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const testimonial = testimonials[currentIndex];

  // Add auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.5 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navigate = (direction: number) => {
    setDirection(direction);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex >= testimonials.length) newIndex = 0;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      return newIndex;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative bg-[#1b3f60] rounded-2xl p-12 overflow-hidden">
        {/* Navigation Arrows - Positioned on sides */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-6 z-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 hover:bg-white/30 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-6 z-10">
          <button
            onClick={() => navigate(1)}
            className="bg-white/20 hover:bg-white/30 w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            // Add min-height and proper spacing
            className="flex flex-col items-center gap-6 relative w-full min-h-[400px]"
          >
            {/* Profile Image with Fade Effect */}
            <motion.div
              className="w-24 h-24 mx-auto relative"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                  className="object-cover"
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Content Container with Fixed Height */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-2xl h-[300px]">
              {/* Name and School with Slide Effect */}
              <motion.div
                className="text-center mb-4"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-200">{testimonial.school}</p>
              </motion.div>

              {/* Feedback Text with Slide Effect - Fixed height container */}
              <motion.div
                className="flex-1 flex items-center justify-center px-4"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-gray-100 text-center text-lg max-h-[200px] overflow-y-auto">
                  &quot;{testimonial.feedback}&quot;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
