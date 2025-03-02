import React from "react";
import Link from "next/link";

const BlogSection = () => {
  const articles = [
    {
      title: "Come prepararsi al GMAT: strategie vincenti",
      excerpt:
        "Scopri le migliori strategie per ottenere un punteggio elevato nel GMAT...",
      imageSrc: "/placeholder.jpg",
      date: "10 Feb 2023",
      url: "/blog/gmat-strategies",
    },
    {
      title: "Le 5 business school più prestigiose al mondo",
      excerpt:
        "Una panoramica delle migliori business school a livello internazionale...",
      imageSrc: "/placeholder.jpg",
      date: "25 Gen 2023",
      url: "/blog/top-business-schools",
    },
    {
      title: "Come scrivere un CV efficace per le business school",
      excerpt:
        "Consigli pratici per redigere un curriculum che colpisca i selezionatori...",
      imageSrc: "/placeholder.jpg",
      date: "5 Gen 2023",
      url: "/blog/effective-cv",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Gli Ultimi Articoli</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              className="card hover:shadow-xl"
            >
              <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <span className="text-gray-400">IMMAGINE</span>
              </div>
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-3">{article.excerpt}</p>
              <div className="text-primary font-semibold">Leggi di più →</div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-primary">
            VISITA IL NOSTRO BLOG
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
