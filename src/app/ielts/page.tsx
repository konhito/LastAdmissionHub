// app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <main className="bg-gray-100 text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">The English Portal</h1>
        <p className="text-lg mt-2">La chiave vincente per preparare l’IELTS</p>
      </header>

      {/* Statistics Section */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">99.3%</h2>
            <p className="text-gray-700">Success Rate</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">50+</h2>
            <p className="text-gray-700">Studenti/Anno</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">7</h2>
            <p className="text-gray-700">Anni di Esperienza</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">10,000</h2>
            <p className="text-gray-700">Ore di Consulenza</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">
              TUTORS MADRELINGUA
            </h3>
            <p className="text-gray-700 mt-2">
              Classi personalizzati sulle esigenze dello studente con tutor
              madrelingua.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">BUDDY PROGRAM</h3>
            <p className="text-gray-700 mt-2">
              Pratica le tue conoscenze linguistiche e affina le migliori
              strategie per l’IELTS.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">
              MATERIALE ESCLUSIVO
            </h3>
            <p className="text-gray-700 mt-2">
              Focalizzati sulle quattro sezioni dell’esame: Speaking, Reading,
              Listening, Writing.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600">
            Corsi Disponibili
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">Corsi 1-to-1</h3>
              <p className="text-gray-700 mt-2">
                Classi personalizzati sulle esigenze dello studente con tutor
                madrelingua. Corsi della durata di 20 o 40 ore, oppure pacchetti
                custom per esigenze specifiche.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">
                Corsi di Gruppo
              </h3>
              <p className="text-gray-700 mt-2">
                Pratica le tue skills con discussioni e attività di gruppo (c.a.
                10 persone). Scegli un corso intensivo di 2 mesi o di allenarti
                più a lungo con il corso standard di 40 ore (6 mesi).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          Fai il primo passo verso i tuoi obiettivi
        </h2>
        <p className="text-lg mt-2">
          Prenota una call gratuita con noi oggi stesso!
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200">
          Prenota una Call Gratuita
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 The Admission Hub. Tutti i diritti riservati.</p>
      </footer>
    </main>
  );
}
