import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="font-bold text-xl mr-2">V</div>
              <div>
                <div className="text-xs">The</div>
                <div className="font-bold">ADMISSION HUB</div>
              </div>
            </div>
            <p className="text-sm mt-4">
              Il tuo partner per eccellere nel percorso di ammissione alle
              migliori Business Schools.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Application</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/application-prep" className="hover:underline">
                  Application Prep
                </Link>
              </li>
              <li>
                <Link href="/gmat" className="hover:underline">
                  GMAT
                </Link>
              </li>
              <li>
                <Link href="/ielts" className="hover:underline">
                  IELTS
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:underline">
                  Career Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Risorse</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="hover:underline">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="/academypro" className="hover:underline">
                  AcademyPro
                </Link>
              </li>
              <li>
                <Link href="/mastermind" className="hover:underline">
                  Percorso Mastermind
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  Prenota una Call
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Admission Hub. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
