import React from "react";
import Image from "next/image";
import SmartLight from "../../public/smart lights_logo.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-dark-blue shadow-md">
      <div className="container mx-auto px-28 py-4 flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">Brand Name</h1> */}
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
          <button className="bg-blue-700 w-28 h-9 rounded hover:bg-gray-800">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
