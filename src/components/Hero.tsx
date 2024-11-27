import React from "react";
// import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="bg-hero-image bg-cover bg-center h-[600px] w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="font-inter text-[16px] text-center mt-20">
            Smart Lighting Solutions
          </div>
          <div className="font-inter text-[28px] text-center mt-3 text-gray-500">
            Bringing A New Perspective To Street Lights
          </div>
          <div className="font-inter text-[28px] text-center text-gray-500">
            And The Cities of Tomorrow
          </div>
          <button className="bg-blue-700 w-28 h-9 rounded mt-8 hover:bg-gray-800">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
