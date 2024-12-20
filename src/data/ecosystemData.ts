import React from "react";

export const features = [
  {
    title: "Street Light Controller",
    description:
      "Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.",
    icon: "/assets/treetLight.svg",
  },
  {
    title: "Gateway",
    description:
      "Employed for interfacing between a Controller and the Lighting Management Software.",
    icon: "/assets/gateway.svg",
  },
  {
    title: "Cloud-based Management System",
    description: "Collects information from multiple gateways.",
    icon: "/assets/cloud.svg",
  },
  {
    title: "Users",
    description:
      "Data from the cloud is used to monitor and control street lights by the System Managers.",
    icon: "/assets/user.svg",
  },
  {
    title: "Evaluation",
    description:
      "Gathered insights are used to evaluate the performance of the lighting systems.",
    icon: "/assets/evaluation.svg",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
