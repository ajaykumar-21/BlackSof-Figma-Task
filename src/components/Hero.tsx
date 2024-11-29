import React from "react";
import Ecosystem from "./Ecosystem";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="bg-hero-image bg-center bg-cover h-[600px] w-full flex flex-col justify-center items-center text-white">
        {/* Top Text */}
        <div className="text-center">
          <div className="font-inter text-[16px]">Smart Lighting Solutions</div>
          <div className="font-inter text-[24px] sm:text-[38px] mt-3 text-gray-300">
            Bringing A New Perspective To Street Lights
          </div>
        </div>

        {/* Bottom Text and Button */}
        <div className="text-center mt-5">
          <div className="font-inter text-[24px] sm:text-[38px] text-gray-300">
            And The Cities of Tomorrow
          </div>
          <button className="bg-blue-700 w-32 h-10 rounded mt-10 hover:bg-gray-800 transition duration-300">
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
