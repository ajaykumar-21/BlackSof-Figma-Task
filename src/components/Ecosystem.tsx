import React from "react";
import { features } from "@/data/ecosystemData";
import Image from "next/image";

// type EcosystemCardProps = {
//   title: string;
//   description: string;
//   //   icon: string;
// };

const Ecosystem: React.FC = () => {
  //   console.log(description);
  return (
    <div className="conatiner bg-white-blue-shades pl-[20%] pr-[20%] pt-24 pb-20">
      <div className="w-auto h-auto">
        <div className="bg-gradient-blue text-[#00386B] text-center w-[38px] h-[40px] p-2">
          Ecosystem
        </div>
        <div className="text-black w-full w-[622px] h-[136px]">
          <div className="font-inter text-4xl font-normal leading-[68px] tracking-[0.01em] text-left">
            How does a smart street
          </div>
          <div className="font-inter text-4xl font-normal tracking-[0.01em] text-left">
            light ecosystem work?
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="w-[250px] h-[275] text-center flex flex-col items-center justify-between mr-[86px] mb-10">
              <div className="text-blue-600 text-4xl mb-4 w-[120px] h-[120px] rounded-[35px] flex items-center justify-center border-2 border-dashed border-gray-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[80px] h-[80px] bg-white rounded-[20px] flex p-3 border-2 border-gray-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
