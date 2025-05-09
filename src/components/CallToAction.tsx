import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CallToAction = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`${montserrat.className} text-3xl sm:text-2xl md:text-5xl font-bold mb-6 text-white`}
        >
          Fai il primo passo verso i tuoi obiettivi
        </h2>
        <p
          className={`${montserrat.className} max-w-2xl text-xl mx-auto mb-12  text-gray-200`}
        >
          Prenota una call gratuita con i nostri esperti e scopri come possiamo
          aiutarti a raggiungere le migliori Business Schools
        </p>
        <Link
          href="https://outlook.office.com/book/CallConoscitiva@theadmissionhub.com/"
          target="_blank"
          className="bg-[#d9c498] text-[#1c3f60] text-2xl font-bold py-4 mt-3 px-16 rounded-lg transition-all inline-block hover:scale-105"
        >
          PRENOTA UNA CALL GRATUITA
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
