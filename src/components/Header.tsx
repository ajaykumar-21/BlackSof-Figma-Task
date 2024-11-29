"use client";

import { useState } from "react";
import Image from "next/image";
import SmartLight from "../../public/assets/smart lights_logo.svg";
import Hero from "./Hero";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-dark-blue shadow-md">
        <div className="container mx-full px-4 md:px-12 lg:px-32 py-4 flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <Image src={SmartLight} alt="Smart Light" />
            {/* Hamburger Menu */}
            <button
              className="block md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Section */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 w-full md:w-auto mt-4 md:mt-0`}
          >
            <a href="#" className="text-white hover:text-gray-400 block">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-400 block">
              Products
            </a>
            <a href="#" className="text-white hover:text-gray-400 block">
              Software Services
            </a>
            <button className="bg-blue-700 w-28 h-9 rounded hover:bg-gray-800 text-white">
              Login
            </button>
          </nav>
        </div>
      </header>
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Header;
