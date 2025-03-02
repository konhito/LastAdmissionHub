import React from "react";


const TeamSection = () => {
  const teamMembers = [
    { name: "Nome Cognome", role: "Ruolo", imageSrc: "/placeholder.jpg" },
    { name: "Nome Cognome", role: "Ruolo", imageSrc: "/placeholder.jpg" },
    { name: "Nome Cognome", role: "Ruolo", imageSrc: "/placeholder.jpg" },
    { name: "Nome Cognome", role: "Ruolo", imageSrc: "/placeholder.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-4">Il nostro Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Il team di The Admission Hub comprende a fondo le sfide del processo
          di ammissione: ogni membro ha studiato nelle migliori Business
          Schools, acquisendo lesperienza necessaria per offrirti un supporto
          efficace e mirato. I nostri Mentors sono specializzati nelle diverse
          discipline, per accompagnarti passo dopo passo verso il successo
          accademico che desideri.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400">PHOTO</span>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
