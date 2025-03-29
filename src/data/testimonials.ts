interface Testimonial {
  name: string;
  school: string;
  feedback: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alice Rossi",
    school: "HEC Paris, Class of 2024",
    feedback:
      "Il supporto di The Admission Hub è stato fondamentale per il mio ingresso a HEC Paris.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    name: "Marco Bianchi",
    school: "INSEAD, Class of 2024",
    feedback:
      "Un team incredibile che mi ha guidato verso il successo. La loro esperienza e dedizione hanno fatto la differenza nel mio percorso.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
  },
  {
    name: "Giulia Verdi",
    school: "London Business School, Class of 2024",
    feedback:
      "Grazie a The Admission Hub ho potuto trasformare il mio sogno in realtà. Il loro supporto è stato fondamentale per la mia ammissione a LBS.",
    image:
      "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    name: "Luca Neri",
    school: "SDA Bocconi, Class of 2024",
    feedback:
      "Un percorso personalizzato che mi ha permesso di raggiungere i miei obiettivi. Professionalità e competenza al massimo livello.",
    image:
      "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
];
