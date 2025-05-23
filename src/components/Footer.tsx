import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "@/public/logo.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Footer = () => {
  const footerSections = [
    {
      title: "SERVIZI",
      links: [
        { name: "Tutoring Portal", href: "/gmat" },
        { name: "English Portal", href: "/ielts" },
        { name: "Admission Portal", href: "/admission" },
        { name: "TAH Academy", href: "/mastermind" },
        { name: "Career Portal", href: "/career" },
      ],
    },
    {
      title: "RISORSE",
      links: [
        { name: "AcademyPro", href: "/coming-soon" },
        { name: "Guide GMAT", href: "/gmat" },
        { name: "Blog", href: "/coming-soon" },
      ],
    },
    {
      title: "CONTATTI",
      links: [
        {
          name: "Prenota una call gratuita",
          href: "https://outlook.office.com/book/CallConoscitiva@theadmissionhub.com/",
        },
        {
          name: "Dove siamo",
          href: "https://maps.app.goo.gl/aEfEJqNLVwsvzxN37",
        },
        {
          name: "Contatti",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <footer className={`${montserrat.className} bg-[#1c3f60] text-white py-12`}>
      <div className="max-w-7xl mx-auto px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {/* Logo Section */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex flex-col items-center gap-2 mb-6"
            >
              <Image
                src={logo}
                alt="AdmissionHub Logo"
                width={200}
                height={200}
                className="w-20 h-20"
              />
              <span className="font-normal text-lg whitespace-nowrap">
                The Admission Hub
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4 text-center">
              Il punto di riferimento per l&apos;ammissione a Business School e
              università internazionali.
              <br />
              GMAT, IELTS, application, orientamento e carriera: tutto in un
              unico hub.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/company/the-admission-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/theadmissionhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="http://www.youtube.com/@TheAdmissionHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Service Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="text-center">
              <h3 className="text-[#d9c498] font-bold mb-6 text-lg">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-[#d9c498] transition-colors block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 mb-8 border-t border-white/20" />
        <div className="text-sm text-gray-400 text-center">
          <p className="mb-4">
            © 2025 The Admission Hub. Tutti i diritti riservati.
          </p>
          <p className="mb-2">P.IVA: IT02478090562</p>
          <p>Via Alessandro Astesani, 20161, Milano (MI), Italia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
