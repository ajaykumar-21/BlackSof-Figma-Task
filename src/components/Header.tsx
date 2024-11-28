import React from "react";
import Image from "next/image";
import SmartLight from "../../public/assets/smart lights_logo.svg";
import Hero from "./Hero";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-dark-blue shadow-md">
        <div className="container mx-auto px-32 py-6 flex justify-between items-center">
          <div>
            <Image src={SmartLight} alt="Smart Light" />
          </div>
          <nav className="space-x-8">
            <a href="#" className="text-white-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-white-600 hover:text-gray-800">
              Products
            </a>
            <a href="#" className="text-white-600 hover:text-gray-800">
              Software Services
            </a>
            <button className="bg-blue-700 w-28 h-9 rounded hover:bg-gray-800">
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
