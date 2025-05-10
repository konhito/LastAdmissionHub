import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Importiamo direttamente le immagini
import eugeniaImg from '../public/eugenia.png';
import francescaAdmissionImg from '../public/francesca_admission.png';
import giulioImg from '../public/giulio.png';
import lucaImg from '../public/luca.png';
import francescaCareerImg from '../public/francesca_career.png';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Eugenia",
      role: "Founder",
      image: eugeniaImg,
    },
    {
      name: "Francesca",
      role: "Admission",
      image: francescaAdmissionImg,
    },
    {
      name: "Giulio",
      role: "GMAT",
      image: giulioImg,
    },
    {
      name: "Luca",
      role: "IELTS",
      image: lucaImg,
    },
    {
      name: "Francesca",
      role: "Career",
      image: francescaCareerImg,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`${montserrat.className} text-3xl sm:text-2xl md:text-5xl font-bold text-[#1e3a5f] whitespace-nowrap`}
          >
            Il nostro team
          </h2>
        </div>
        <p
          className={`${montserrat.className} text-[20px] text-[#1e3a5f] max-w-6xl mx-auto mb-12 px-2 text-justify`}
        >
          Sappiamo cosa significa affrontare un&aposapplication: ci siamo passati
          anche noi. I membri del nostro team hanno studiato in prestigiose
          Business School internazionali come LBS, HEC, ESCP e Bocconi, ed hanno
          approfondito le dinamiche e le sfide di questi percorsi. I nostri
          mentor ti affiancano con competenze mirate nella preparazione ai test,
          nella strategia di ammissione e in ogni fase chiave del processo, con
          un supporto continuativo e personalizzato.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={`${member.name}'s photo`}
                  width={192}
                  height={192}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-900 font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
