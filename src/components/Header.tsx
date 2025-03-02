"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-10 h-10 mr-2">
            <div className="font-bold text-2xl text-primary">V</div>
          </div>
          <div className="text-lg font-bold">
            <div className="text-xs">The</div>
            <div className="text-primary">ADMISSION HUB</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/application-prep"
            className="font-medium hover:text-primary transition-colors"
          >
            APPLICATION PREP
          </Link>
          <Link
            href="/career"
            className="font-medium hover:text-primary transition-colors"
          >
            CAREER
          </Link>
          <Link
            href="/consulting"
            className="font-medium hover:text-primary transition-colors"
          >
            CONSULTING
          </Link>
          <Link
            href="/products"
            className="font-medium hover:text-primary transition-colors"
          >
            PRODOTTI
          </Link>
          <Link
            href="/blog"
            className="font-medium hover:text-primary transition-colors"
          >
            BLOG
          </Link>
        </nav>

        <Link href="/contact" className="hidden md:block btn-primary">
          CALL GRATUITA
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/application-prep"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              APPLICATION PREP
            </Link>
            <Link
              href="/career"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CAREER
            </Link>
            <Link
              href="/consulting"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONSULTING
            </Link>
            <Link
              href="/products"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PRODOTTI
            </Link>
            <Link
              href="/blog"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              CALL GRATUITA
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
