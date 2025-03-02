import React from "react";
import Image from "next/image";

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
        <h2 className="section-title text-center text-2xl text-gray-900 mb-4">
          Il nostro Team
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Il team di The Admission Hub comprende a fondo le sfide del processo
          di ammissione: ogni membro ha studiato nelle migliori Business
          Schools, acquisendo l esperienza necessaria per offrirti un supporto
          efficace e mirato. I nostri Mentors sono specializzati nelle diverse
          discipline, per accompagnarti passo dopo passo verso il successo
          accademico che desideri.
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
