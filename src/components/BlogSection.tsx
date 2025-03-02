import React from "react";
import Link from "next/link";

const BlogSection = () => {
  const articles = [
    {
      title: "Come prepararsi al GMAT: strategie vincenti",
      excerpt:
        "Scopri le migliori strategie per ottenere un punteggio elevato nel GMAT...",
      imageSrc:
        "https://images.unsplash.com/photo-1518626981033-f00082ce6f8b?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // GMAT preparation image
      date: "10 Feb 2023",
      url: "/blog/gmat-strategies",
    },
    {
      title: "Le 5 business school più prestigiose al mondo",
      excerpt:
        "Una panoramica delle migliori business school a livello internazionale...",
      imageSrc:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxidXNpbmVzc3xlbnwwfHx8fDE2MjY5NzY5Mjg&ixlib=rb-1.2.1&q=80&w=1080", // Business school image
      date: "25 Gen 2023",
      url: "/blog/top-business-schools",
    },
    {
      title: "Come scrivere un CV efficace per le business school",
      excerpt:
        "Consigli pratici per redigere un curriculum che colpisca i selezionatori...",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1687686677116-40e822dfbc51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // CV writing image
      date: "5 Gen 2023",
      url: "/blog/effective-cv",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center text-2xl text-gray-900 mb-12">
          Gli Ultimi Articoli
        </h2>

        <div className="grid text-gray-900 grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              className="card hover:shadow-xl"
            >
              <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center">
                <img
                  src={article.imageSrc}
                  alt={article.title}
                  className="object-cover h-full w-full"
                />
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
