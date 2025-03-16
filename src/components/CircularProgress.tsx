import React from "react";
import { motion } from "framer-motion";

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  label: string;
  labelColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 120,
  strokeWidth = 8,
  label,
  labelColor = "text-white",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#d9c498"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${labelColor}`}>
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      <span className={`mt-2 text-sm font-medium ${labelColor}`}>{label}</span>
    </div>
  );
};

export default CircularProgress;
