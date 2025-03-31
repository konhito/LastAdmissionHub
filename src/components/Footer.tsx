import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import logo from "@/public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1c3f5e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Description Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src={logo}
                alt="AdmissionHub Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl ">TheAdmissionHub</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mt-4">
              [Text to be provided] Temporary: Transforming ambitions into
              success through expert guidance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="text-[#d9c498] hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Services Column - Updated from Application */}
          <div className="md:ml-8">
            <h3 className="font-bold text-lg mb-4 text-[#d9c498]">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/mba-application"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  MBA Application Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gmat-preparation"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  GMAT Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/career-consulting"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Career Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/interview-preparation"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Interview Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:ml-8">
            <h3 className="font-bold text-lg mb-4 text-[#d9c498]">Risorse</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/mastermind"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Percorso Mastermind
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/free-webinars"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Webinar Gratuiti
                </Link>
              </li>
            </ul>
          </div>

          {/* Updated Contacts Column */}
          <div className="md:ml-8">
            <h3 className="font-bold text-lg mb-4 text-[#d9c498]">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/prenota-consulenza"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Prenota una Consulenza
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@admissionhub.it"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  info@admissionhub.it
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#d9c498] transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} The Admission Hub. Tutti i diritti
            riservati.
          </p>
          <p className="pt-4 text-sm text-gray-400">
            P.IVA: [Number to be provided]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
