import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Fai il primo passo verso i tuoi obiettivi
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-200">
          Prenota una call gratuita con i nostri esperti e scopri come possiamo
          aiutarti a raggiungere le migliori Business Schools.
        </p>
        <Link
          href="/contact"
          className="bg-[#d9c498] text-primary font-bold py-3 px-8 rounded-lg transition-all inline-block hover:scale-105"
        >
          PRENOTA UNA CALL GRATUITA
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
