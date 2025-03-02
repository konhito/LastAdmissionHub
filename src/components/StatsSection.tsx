import React from "react";
import { FaCheck, FaUsers, FaClock, FaChartLine } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { number: "99.3%", label: "SUCCESS RATE", icon: <FaCheck /> },
    { number: "50+", label: "STUDENTI/ANNO", icon: <FaUsers /> },
    { number: "7", label: "ANNI DI ESPERIENZA", icon: <FaClock /> },
    { number: "10.000", label: "ORE DI CONSULENZA", icon: <FaChartLine /> },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">I Nostri Risultati</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
