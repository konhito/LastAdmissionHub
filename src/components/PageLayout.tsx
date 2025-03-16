"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  heroBackground?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  subtitle,
  heroBackground = "from-gray-900 to-blue-900",
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#d9c498] origin-[0%] z-50"
        style={{ scaleX }}
      />
      <motion.main
        className="bg-white text-gray-800 min-h-screen flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div className="w-full max-w-5xl mb-12">
          <motion.div
            className={`w-full bg-gradient-to-r ${heroBackground} mb-6 mt-20 rounded-2xl py-16 md:py-24 relative overflow-hidden`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: "url('/grid-pattern.svg')",
                backgroundSize: "cover",
              }}
            />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  animate={{ scale: [0.95, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.h1>
                {subtitle && (
                  <motion.h2
                    className="text-xl md:text-2xl text-gray-200 italic"
                    animate={{ opacity: [0, 1] }}
                    transition={{ delay: 0.2 }}
                  >
                    {subtitle}
                  </motion.h2>
                )}
              </div>
            </div>
          </motion.div>
          {children}
        </motion.div>
      </motion.main>
    </>
  );
};

export default PageLayout;
