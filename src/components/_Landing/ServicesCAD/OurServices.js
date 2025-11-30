import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoMdRefreshCircle, IoMdDocument } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrUser, GrUserExpert } from "react-icons/gr";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { BsLightning } from "react-icons/bs";
import { FaPiedPiper } from "react-icons/fa";

const OurServices = [
  {
    id: "gtm-bim",
    img: "./3d-bim-black.svg",
    title: "Fast Turnaround",
    description: "Same-day updates to your CAD files to avoid delays",
    href: "/services/cad-services",
    icon: <BsLightning size={60} />
  },
  {
    id: "gtm-time",
    img: "./4d-bim-black.svg",
    title: "All Disciplines",
    description: "Engage our CAD experts in Architecture, Structural, and MEP ",
    href: "/services/design-reviews",
    icon: <GrUserExpert size={60} />
  },
  {
    id: "gtm-cost",
    img: "./5d-bim-black.svg",
    title: "Project Support",
    description: "Designs may change - and we'll be here to support you",
    href: "/services/construction-drawings",
    icon: <BsChatLeftDotsFill size={60} />
  },
];

export default OurServices;
