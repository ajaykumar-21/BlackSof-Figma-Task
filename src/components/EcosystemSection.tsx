import React from "react";
// import Ecosystem from "./Ecosystem";
import { features } from "@/data/ecosystemData";
// import { ReactComponent as StreetLight } from "../../public/treetLight.svg";
// import Gateway from "../../public/gateway.svg";
// import Cloud from "../../public/cloud.svg";
// import Users from "../../public/user.svg";
// import Evaluation from "../../public/evaluation.svg";

const EcosystemSection: React.FC = () => {
//   const features = [
//     {
//       title: "Street Light Controller",
//       description:
//         "Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.",
//     },
//     {
//       title: "Gateway",
//       description:
//         "Employed for interfacing between a Controller and the Lighting Management Software.",
//     },
//     {
//       title: "Cloud-based Management System",
//       description: "Collects information from multiple gateways.",
//       // icon: "/public/cloud.svg",
//     },
//     {
//       title: "Users",
//       description:
//         "Data from the cloud is used to monitor and control street lights by the System Managers.",
//       // icon: "/public/user.svg",
//     },
//     {
//       title: "Evaluation",
//       description:
//         "Gathered insights are used to evaluate the performance of the lighting systems.",
//       // icon: "/public/evaluation.svg",
//     },
//   ];
  return (
    <div>
      {/* {features &&
        features.map((feature, index) => (
          <Ecosystem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))} */}
    </div>
  );
};

export default EcosystemSection;
