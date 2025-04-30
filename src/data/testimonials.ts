interface Testimonial {
  name: string;
  school: string;
  feedback: string;
  image: string;
  rating: number;
}

// Placeholder image for all testimonials
const PLACEHOLDER_IMAGE = "/images/placeholder-profile.jpg";

export const testimonials: Testimonial[] = [
  {
    name: "Martina Leoni",
    school: "HEC Paris, Class of 2025",
    feedback:
      "Mi hanno aiutata a strutturare un'application solida, valorizzando davvero il mio profilo. Provenendo da giurisprudenza, non sapevo come impostare la mia candidatura per una business school.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
  {
    name: "Luca Bernardi",
    school: "INSEAD, Class of 2024",
    feedback:
      "Il loro approccio è stato chiaro, strategico e adattato perfettamente ai miei obiettivi. Avevo già esperienza internazionale, ma non sapevo come comunicarla in modo efficace.",
    image: PLACEHOLDER_IMAGE,
    rating: 4.9,
  },
  {
    name: "Chiara Giordano",
    school: "London Business School, Class of 2025",
    feedback:
      "Essere seguita da chi conosce bene le dinamiche di selezione fa tutta la differenza. I feedback sugli essay e la simulazione dei colloqui sono stati decisivi.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
  {
    name: "Edoardo Vitali",
    school: "SDA Bocconi, Class of 2024",
    feedback:
      "Mi hanno guidato passo dopo passo, aiutandomi a presentare il mio percorso in modo coerente. Volevo passare da ingegneria a management e avevo bisogno di costruire una narrativa forte.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
  {
    name: "Francesca D'Alessio",
    school: "Cambridge Judge, Class of 2025",
    feedback:
      "La revisione dei miei essay è stata impeccabile. Senza TAH non avrei ottenuto lo stesso risultato, soprattutto perché venivo da un contesto non business.",
    image: PLACEHOLDER_IMAGE,
    rating: 4.9,
  },
  {
    name: "Gabriele Rizzi",
    school: "ESCP Business School, Class of 2025",
    feedback:
      "Il supporto costante e la chiarezza del metodo mi hanno dato sicurezza in ogni fase. Con un lavoro full time, avere una guida organizzata è stato essenziale.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
  {
    name: "Alessia Grimaldi",
    school: "ESADE, Class of 2025",
    feedback:
      "TAH è stato molto più di un servizio: è stato un alleato nel mio percorso di ammissione. Hanno saputo adattare il percorso ai miei tempi e obiettivi professionali.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
  {
    name: "Matteo Sanna",
    school: "IE Business School, Class of 2025",
    feedback:
      "Ho apprezzato la personalizzazione del percorso e la preparazione tecnica dei mentor. Il piano di studio per il GMAT è stato costruito davvero su misura.",
    image: PLACEHOLDER_IMAGE,
    rating: 4.9,
  },
  {
    name: "Federica Colombo",
    school: "Bocconi University, Class of 2024",
    feedback:
      "Ogni sessione era focalizzata e concreta. Un supporto davvero professionale, che mi ha aiutata anche a chiarire i miei obiettivi di carriera.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
  {
    name: "Davide Longo",
    school: "Oxford Saïd, Class of 2023",
    feedback:
      "Mi hanno aiutato a raccontare la mia storia nel modo giusto, con grande attenzione ai dettagli. La parte più utile? La definizione della personal statement e le simulazioni di interview.",
    image: PLACEHOLDER_IMAGE,
    rating: 5,
  },
];
