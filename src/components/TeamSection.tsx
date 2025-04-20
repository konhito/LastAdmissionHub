import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Rossi",
      role: "Consulente",
      imageSrc:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Marco Bianchi",
      role: "Mentore",
      imageSrc:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Giulia Verdi",
      role: "Coordinatrice",
      imageSrc:
        "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Luca Neri",
      role: "Specialista",
      imageSrc:
        "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`${montserrat.className} text-xl sm:text-2xl md:text-5xl font-bold text-[#1e3a5f] whitespace-nowrap`}
          >
            Il nostro Team
          </h2>
        </div>
        <p
          className={`${montserrat.className} text-sm sm:text-base md:text-lg text-gray-600 max-w-5xl mx-auto mb-12 px-4 text-justify`}
        >
          Sappiamo cosa significa affrontare un’application: ci siamo passati
          anche noi. I membri del nostro team hanno studiato in prestigiose
          Business School internazionali come LBS, HEC, ESCP e Bocconi, ed hanno
          approfondito le dinamiche e le sfide di questi percorsi. I nostri
          mentor ti affiancano con competenze mirate nella preparazione ai test,
          nella strategia di ammissione e in ogni fase chiave del processo, con
          un supporto continuativo e personalizzato.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={member.imageSrc}
                  alt={`${member.name}'s photo`}
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Cover the area without distortion
                  className="rounded-full" // Make the image circular
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
