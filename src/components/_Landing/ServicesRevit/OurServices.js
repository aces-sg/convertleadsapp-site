import React from "react";
import { BsBoxFill } from "react-icons/bs";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoMdRefreshCircle } from "react-icons/io";

const OurServices = [
  {
    id: "gtm-bim",
    img: "./3d-bim-black.svg",
    title: "Quality BIM Objects",
    description: "We create clash-free BIM models for submission to ACC",
    href: "/services/cad-services",
    icon: <BsBoxFill size={60} />
  },
  {
    id: "gtm-time",
    img: "./4d-bim-black.svg",
    title: "Continuous Updates",
    description: "We adjust the BIM models as per the client's feedback ",
    href: "/services/design-reviews",
    icon: <IoMdRefreshCircle size={60} />
  },
  {
    id: "gtm-cost",
    img: "./5d-bim-black.svg",
    title: "Ongoing Support",
    description: "On-site  BIM Coordination with our BIM Managers",
    href: "/services/construction-drawings",
    icon: <BsChatLeftDotsFill size={60} />
  },
];

export default OurServices;
