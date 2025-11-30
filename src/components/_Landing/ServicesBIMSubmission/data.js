import React from "react";
import { FaBuildingCircleCheck, FaClockRotateLeft, FaFile } from "react-icons/fa6";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoMdRefreshCircle } from "react-icons/io";

export const HowData = [
  {
    id: 1,
    img: "",
    icon: <FaFile size={30} />,
    title: "Share Files",
    description:
      "Share your project files with us. We accept most common CAD & BIM formats.",
  },
  {
    id: 2,
    img: "./4d-bim-black.svg",
    icon: <FaBuildingCircleCheck size={30} />,
    title: "Model Development",
    description:
      "Our BIM Managers will work with your project team to develop the BIM models",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <FaClockRotateLeft size={30} />,
    title: "BIM Review",
    description:
      "We update the BIM models and help you extract sheets, sections, and drawings.",
  },
];

export const faq = [
  {
    id: 1,
    question: "What CAD & BIM formats do you work with?",
    answer:
      "We typically receive LOD 350 models in Revit or Archicad from architects and consultants. For specialized projects, we also work with tools like Tekla, OpenBuildings, and Aveva E3D. Our team is experienced with most common 3D formats."
  },
  {
    id: 2,
    question: "What is included in your BIM for Projects package?",
    answer:
      "We support EPC contractors by delivering a clash-free BIM model compiled from downstream contractors. The package includes a 4D construction schedule, 5D cost estimation, and a 6D asset-ready BIM model at handover."
  },
  {
    id: 3,
    question: "Is onsite support available?",
    answer:
      "Yes. We provide weekly onsite support for BIM coordination meetings when required. Our team remains available throughout the week for remote updates and queries."
  },
  {
    id: 4,
    question: "How do I get started with your BIM Service Package?",
    answer:
      "Send us your tender models and drawings. We'll review them and prepare a detailed proposal. Once approved, we’ll schedule a kick-off meeting to align on project goals and deliverables."
  },
  {
    id: 5,
    question: "What is the scope of your 3D modelling?",
    answer:
      "We create accurate 3D models based on your scope of work. This helps identify potential clashes and issues early, reducing risks during construction."
  },
  {
    id: 6,
    question: "Do we need to purchase BIM software?",
    answer:
      "No. Our service includes access to all necessary BIM tools, including authoring and collaboration software like Revit and BIM Collaborate Pro, for the duration of your project."
  }
];


export const services = [
  {
    id: "gtm-bim",
    img: "./3d-bim-black.svg",
    title: "Quality BIM Objects",
    description: "Dedicated personnel to review the quality of BIM & CAD files",
    href: "/services/cad-services",
    icon: <FaBuildingCircleCheck size={60} />
  },
  {
    id: "gtm-time",
    img: "./4d-bim-black.svg",
    title: "Continuous Updates",
    description: "Ongoing updates to your BIM catalog during the project",
    href: "/services/design-reviews",
    icon: <IoMdRefreshCircle size={60} />
  },
  {
    id: "gtm-cost",
    img: "./5d-bim-black.svg",
    title: "Ongoing Support",
    description: "Same-day support from our BIM Managers",
    href: "/services/construction-drawings",
    icon: <BsChatLeftDotsFill size={60} />
  },
];

