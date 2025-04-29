"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const HomeHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const navigationItems = [
    {
      title: "APPLICATION PORTAL",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { title: "Admission", href: "/admission" },
        { title: "GMAT", href: "/gmat" },
        { title: "IELTS", href: "/ielts" },
        { title: "ELITE PATH", href: "/mastermind" },
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  return (
    <header className={`${montserrat.className} bg-[#1c3f60] text-white`}>
      {/* Top Section with Logo */}
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={logo}
              alt="The Admission Hub Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-2xl font-normal">The Admission Hub</span>
          </Link>
        </div>
      </div>

      {/* White Line */}
      <div className="w-full h-[1px] bg-white" />

      {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-8">
            {navigationItems.map((item) =>
              item.isDropdown ? (
                <div
                  key={item.title}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
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
                  {isDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2 z-50"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
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
                    </div>
                  )}
                </div>
              ) : item.isButton ? (
                <button
                  key={item.title}
                  onClick={() => handleNavigation(item.href)}
                  className="bg-[#d9c498] font-bold text-[#1c3f60] px-6 py-2 rounded-full hover:bg-[#e6d4a7] transition-colors"
                >
                  {item.title}
                </button>
              ) : (
                <button
                  key={item.title}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-[#d9c498] transition-colors"
                >
                  {item.title}
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button and Navigation */}
      <div className="md:hidden">
        <button
          className="absolute top-6 right-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {isMenuOpen && (
          <div className="bg-[#1c3f60] px-4 pt-2 pb-4 shadow-lg border-t border-white/20">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) =>
                item.isDropdown ? (
                  <div key={item.title}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="font-medium py-2 w-full text-left flex items-center justify-between text-white hover:text-[#d9c498] transition-colors"
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
                    {isDropdownOpen && (
                      <div className="pl-4 space-y-2 mt-2 border-l border-white/20">
                        {item.dropdownItems?.map((dropItem) => (
                          <button
                            key={dropItem.title}
                            onClick={() => handleNavigation(dropItem.href)}
                            className="block w-full text-left py-2 text-gray-300 hover:text-[#d9c498] transition-colors"
                          >
                            {dropItem.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.title}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full text-left ${
                      item.isButton
                        ? "bg-[#d9c498] text-[#1c3f60] px-6 py-2 rounded-full font-bold hover:bg-[#e6d4a7]"
                        : "font-medium py-2 text-white hover:text-[#d9c498]"
                    } transition-colors`}
                  >
                    {item.title}
                  </button>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
