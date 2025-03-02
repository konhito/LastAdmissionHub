"use client";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "This platform made the entire admission process so much easier!",
    name: "Jane Smith",
    role: "Parent",
  },
  {
    text: "Fantastic resources and support throughout my application journey.",
    name: "John Doe",
    role: "Student",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden max-w-2xl mx-auto my-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
        <p className="text-gray-700 mb-4">{testimonials[current].text}</p>
        <h4 className="font-bold">{testimonials[current].name}</h4>
        <p className="text-gray-600">{testimonials[current].role}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
        >
          <FaChevronLeft />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === current ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
