import React from "react";
import { FaTimeline, FaBuildingCircleCheck, FaClockRotateLeft } from "react-icons/fa6";
import { RiPresentationFill } from "react-icons/ri";
import { FaBusinessTime } from "react-icons/fa6";
import { GiCrane } from "react-icons/gi";
export const WhyData = [
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <RiPresentationFill size={30} />,
    title: "Win Tender Bids",
    description:
      "Convince project stakeholders with realistic 3D visualizations that demonstrate your construction sequence.",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <GiCrane size={30} />,
    title: "Reduce Site Risks",
    description:
      "Visualize project buildout and mitigate site risks with virtual design & construction.",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <FaBusinessTime size={30} />,
    title: "Plan Ahead",
    description:
      "Coordinate complex site works across multiple trades with Critical Path Method (CPM) scheduling.",
  },
];

export const HowData = [
  {
    id: 1,
    img: "",
    icon: <FaTimeline size={30} />,
    title: "Step 1: Share Your Schedule",
    description:
      "Send us your project schedule in CSV, MS Project, or P6 format.",
  },
  {
    id: 2,
    img: "./4d-bim-black.svg",
    icon: <FaBuildingCircleCheck size={30} />,
    title: "Step 2: Develop BIM Models",
    description:
      "Our BIM Managers will develop a 4D BIM model based on your project schedule.",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    icon: <FaClockRotateLeft size={30} />,
    title: "Step 3: Continuous Updates",
    description:
      "We help you update the 4D BIM model as the project progresses.",
  },
];

export const faq = [
  {
    id: 1,
    section: "bim-formats",
    question: "What are the types of CAD & BIM formats you support?",
    answer:
      "The most common CAD formats in the built-environment context is autocad (.dwg) and microstation (.dgn). We are able to support to the most common BIM formats such as Revit (.rvt), Archicad (.pln), and IFC.",
  },
  {
    id: 1,
    section: "planning-formats",
    question: "What project schedule formats are typical in 4D BIM?",
    answer:
      "Microsoft Projects or Oracle P6 is commonly used to develop the project schedule. We will develop the 4D BIM model by aligning the BIM model to the schedule.",
  },
  {
    id: 3,
    question: "Is there onsite support?",
    answer: "Yes, we work closely with your project team to ensure that CAD & BIM models are created up to the project specifications.",
  },
  {
    id: 4,
    question: "What files do you need to develop the 4D BIM models?",
    answer:
      "A 4D BIM model can be developed with requires the following information: 1. CAD/BIM models, 2. Project Schedule, 3. Project Specifications.",
  },
  {
    id: 5,
    section: "corenetx",
    question: "Is 4D BIM needed for CorenetX submissions?",
    answer:
      "CorenetX, formerly known as Corenet 2.0, is a government permitting portal introduced by BCA that mandates BIM model submissions in the openBIM format. While a 4D BIM is not required for Corenet submissions, certain projects (such as LTA) may have 4D BIM submission requirements.",
  },
  {
    id: 6,
    section: "software-4d",
    question: "What software is used to develop the 4D simulation?",
    answer:
      "Syncro 4D is used to develop the 4D simulation. It is a powerful tool that integrates with Revit, Navisworks, and other BIM software. For higher quality visualizations, Lumion or Twinmotion can be used.",
  },
];
