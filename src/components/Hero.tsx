import React from "react";
import Ecosystem from "./Ecosystem";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="bg-hero-image bg-center h-[700px] w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="font-inter text-[16px] text-center pt-20">
            Smart Lighting Solutions
          </div>
          <div className="font-inter text-[38px] text-center mt-3 text-gray-500">
            Bringing A New Perspective To Street Lights
          </div>
          <div className="font-inter text-[38px] text-center text-gray-500">
            And The Cities of Tomorrow
          </div>
          <button className="bg-blue-700 w-32 h-10 rounded mt-10 hover:bg-gray-800">
            Login
          </button>
        </div>
      </div>
      <div>
        <Ecosystem />
      </div>
    </div>
  );
};

export default Hero;
