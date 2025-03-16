"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      title: "Application Prep",
      href: "#",
      isDropdown: true,
      dropdownItems: [
        { title: "Admission", href: "/admission" },
        { title: "GMAT", href: "/gmat" },
        { title: "IELTS", href: "/ielts" },
      ],
    },
    { title: "Career", href: "/career" },
    { title: "Masterming", href: "/mastermid" },
    { title: "Contact", href: "/contact", isButton: true },
  ];

  const handleNavigation = (href: string) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1b3f60] mb-4">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="AdmissionHub Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white text-2xl font-bold">AdmissionHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) =>
              item.isDropdown ? (
                <div key={item.title} className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-white hover:text-blue-200 flex items-center gap-1"
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
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2 animate-fadeIn">
                      {item.dropdownItems?.map((dropItem) => (
                        <button
                          key={dropItem.title}
                          onClick={() => handleNavigation(dropItem.href)}
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
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
                  className="bg-[#d9c498] text-white px-6 py-2 rounded hover:opacity-90 transition-colors"
                >
                  {item.title}
                </button>
              ) : (
                <button
                  key={item.title}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white hover:text-blue-200"
                >
                  {item.title}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navigationItems.map((item) =>
              item.isDropdown ? (
                <div key={item.title}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="font-medium py-2 w-full text-left flex items-center justify-between"
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
                    <div className="pl-4 space-y-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <button
                          key={dropItem.title}
                          onClick={() => handleNavigation(dropItem.href)}
                          className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
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
                      ? "bg-[#d9c498] text-white px-6 py-2 rounded-full text-center hover:bg-blue-700"
                      : "font-medium py-2 hover:text-blue-600"
                  } transition-colors`}
                >
                  {item.title}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
