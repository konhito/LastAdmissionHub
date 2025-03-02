import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              <span className="block">ACT NOW</span>
              <span className="block">DREAM BIG</span>
              <span className="block">ACHIEVE MORE</span>
            </h1>
            <p className="text-xl mb-8">B-SCHOOLS | GMAT | IELTS | CAREER</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                PRENOTA UNA CALL GRATUITA
              </Link>
              <Link
                href="/services"
                className="bg-white text-primary font-bold py-2 px-6 rounded hover:bg-gray-100 transition-all text-center"
              >
                SCOPRI I NOSTRI SERVIZI
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 w-full h-full relative">
              {/* Interactive globe/map visualization would go here */}
              <div className="w-full h-64 md:h-96 bg-blue-700 rounded-lg opacity-30 animate-pulse">
                <div className="flex items-center justify-center h-full">
                  <p className="text-white text-center">
                    Mappamondo interattivo
                    <br />
                    (Visualizzazione delle Business Schools)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
