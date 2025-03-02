// components/StatsSection.tsx
import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-white  py-8 w-full">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-600">99.3%</h2>
          <p className="text-gray-600">SUCCESS RATE</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-600">50+</h2>
          <p className="text-gray-600">STUDENTI/ANNO</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-600">7</h2>
          <p className="text-gray-600">ANNI DI ESPERIENZA</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-blue-600">10,000</h2>
          <p className="text-gray-600">ORE DI CONSULENZA</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
