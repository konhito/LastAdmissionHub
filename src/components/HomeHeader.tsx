"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const HomeHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      title: "APPLICATION PORTAL",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { title: "Supporto Ammisioni", href: "/admission" },
        { title: "Tutoring GMAT", href: "/gmat" },
        { title: "Tutoring IELTS", href: "/ielts" },
        { title: "TAH Academy", href: "/mastermind" },
      ],
    },
    { title: "CAREER PORTAL", href: "/career" },
    { title: "CONTACTS", href: "/CONTACT" },
    { title: "CALL GRATUITA", href: "/contact", isButton: true },
  ];

  const handleNavigation = (href: string) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <header
      className={`${montserrat.className} bg-[#1c3f60] text-white relative z-50`}
    >
      {/* Top Section with Logo */}
      <div className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center md:justify-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={logo}
              alt="The Admission Hub Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-xl md:text-2xl font-normal">
              The Admission Hub
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* White Line */}
      <div className="w-full h-[1px] bg-white" />

      {/* Desktop Navigation */}
      <nav className="hidden md:block container mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-8">
          {navigationItems.map((item) =>
            item.isDropdown ? (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="text-white hover:text-[#d9c498] flex items-center gap-1 transition-colors">
                  {item.title}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2 z-50"
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <button
                          key={dropItem.title}
                          onClick={() => handleNavigation(dropItem.href)}
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#d9c498]"
                        >
                          {dropItem.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.href)}
                className={
                  item.isButton
                    ? "bg-[#d9c498] font-bold text-[#1c3f60] px-6 py-2 rounded-full hover:bg-[#e6d4a7] transition-colors"
                    : "text-white hover:text-[#d9c498] transition-colors"
                }
              >
                {item.title}
              </button>
            )
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1c3f60] border-t border-white/20"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) =>
                  item.isDropdown ? (
                    <div key={item.title} className="space-y-2">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full text-left flex items-center justify-between text-white"
                      >
                        {item.title}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l border-white/20"
                          >
                            {item.dropdownItems?.map((dropItem) => (
                              <button
                                key={dropItem.title}
                                onClick={() => handleNavigation(dropItem.href)}
                                className="block w-full text-left py-2 text-white/80 hover:text-[#d9c498]"
                              >
                                {dropItem.title}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={item.title}
                      onClick={() => handleNavigation(item.href)}
                      className={`w-full text-left py-2 ${
                        item.isButton
                          ? "bg-[#d9c498] text-[#1c3f60] px-6 rounded-full font-bold text-center"
                          : "text-white hover:text-[#d9c498]"
                      }`}
                    >
                      {item.title}
                    </button>
                  )
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HomeHeader;
