"use client";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

import HomeHeader from "@/components/HomeHeader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <>
      <HomeHeader />

      <div className="">
        <div className="min-h-screen bg-[#1c3f60] py-24">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <div className="text-center mb-12">
                <h1
                  className={`${montserrat.className} text-3xl md:text-4xl font-bold text-white mb-4`}
                >
                  Prenota una Call Gratuita
                </h1>
                <p className={`${montserrat.className} text-lg text-white/80`}>
                  Parliamo del tuo percorso e delle tue ambizioni
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-[#d9c498] transition-colors"
                      placeholder="Nome"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-[#d9c498] transition-colors"
                      placeholder="Email"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-[#d9c498] transition-colors"
                    placeholder="Telefono (opzionale)"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-[#d9c498] transition-colors resize-none"
                    placeholder="Il tuo messaggio"
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`${montserrat.className} w-full px-8 py-4 bg-[#d9c498] text-[#1c3f60] rounded-full font-bold text-lg hover:bg-[#e6d4a7] transition-colors`}
                >
                  Invia Richiesta
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
