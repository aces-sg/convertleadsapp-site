import React from "react";
import { FaIndustry } from "react-icons/fa6";
import { GiPlatform } from "react-icons/gi";
import { PiFediverseLogoFill } from "react-icons/pi";

const OurServices = [
  {
    id: "gtm-bim",
    img: "./3d-bim-black.svg",
    title: "Industry Experience",
    description: "More than 200 actively running projects for digital project delivery",
    href: "/services/cad-services",
    icon: <FaIndustry size={60} />
  },
  {
    id: "gtm-time",
    img: "./4d-bim-black.svg",
    title: "Technology Infrastructure",
    description: "Modern platform to support Design, Construction, and Operational workflows",
    href: "/services/design-reviews",
    icon: <GiPlatform size={60} />
  },
  {
    id: "gtm-cost",
    img: "./5d-bim-black.svg",
    title: "Professional Services",
    description: "Experienced Digital Delivery experts across industry domains",
    href: "/services/construction-drawings",
    icon: <PiFediverseLogoFill size={60} />
  },
];

export default OurServices;
