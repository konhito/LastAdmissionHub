"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

interface StatItemProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
  inView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
  end,
  label,
  prefix = "",
  suffix = "",
  delay = 0,
  inView,
}) => {
  const count = useCounter({
    end,
    delay: delay * 200,
    duration: 2000,
    shouldStart: inView,
  });

  return (
    <motion.div
      className="text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#1b3f60] mb-2">
        {prefix}
        {inView ? count : 0}
        {suffix}
      </h2>
      <p className="text-gray-600 text-lg">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <div ref={sectionRef} className="w-full rounded bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatItem
            end={99.3}
            label="SUCCESS RATE"
            suffix="%"
            delay={0}
            inView={isInView}
          />
          <StatItem
            end={50}
            label="STUDENTI/ANNO"
            prefix="+"
            delay={1}
            inView={isInView}
          />
          <StatItem
            end={7}
            label="ANNI DI ESPERIENZA"
            delay={2}
            inView={isInView}
          />
          <StatItem
            end={10000}
            label="ORE DI CONSULENZA"
            delay={3}
            inView={isInView}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
