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
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      {/* <div className="text-blue-600 text-4xl mb-4">{icon}</div> */}
      {features.map((feature, index) => (
        <div key={index}>
          <div className="text-blue-600 text-4xl mb-4">
            <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Ecosystem;
