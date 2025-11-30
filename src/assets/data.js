import React from 'react'
import ClashDetection from 'assets/svgs/clash-detection-black.svg'

export const OurServices = [
  {
    id: 1,
    img: "public/3d-bim-black.svg",
    title: "3D BIM",
    description:
      "Create BIM Models for plan submissions in your preferred BIM software or openBIM (IFC4)",
  },
  {
    id: 2,
    img: "./4d-bim-black.svg",
    title: "4D BIM",
    description:
      "Create immersive construction sequences in 4D BIM for tender bid or concurrent engineering meetings",
  },
  {
    id: 3,
    img: "./5d-bim-black.svg",
    title: "5D BIM",
    description:
      "Perform model-based quantity takeoffs directly from the BIM model with embedded cost attributes",
  },
  {
    id: 4,
    img: ClashDetection,
    title: "Clash Detection",
    description:
      "Combine engineering data from multiple sources to produce clash detection reports for project teams",
  },
  {
    id: 5,
    img: "./as-built-verification-black.svg",
    title: "As-Built Verification",
    description:
      "Validate point cloud and mesh models against design models to produce as-built verification reports.",
  },
  {
    id: 6,
    img: "./scan-bim-black.svg",
    title: "Scan to BIM",
    description:
      "Create 3D BIM models and 2D shop drawings from raw data scans of your as-built assets",
  },
];

export const faq = [
  {
    id: 1,
    question: "What file formats are supported?",
    answer:
      "By default, we support Archicad and Revit formats because most buildings are modelled in that software. However, a growing number of companies require BIM models to be exported in a localised version of IFC (i.e. openBIM). We cater to such requests as well.",
  },
  {
    id: 2,
    question: "How detailed will the BIM models be?",
    answer:
      "For 80% of requirements, LOD 350 is sufficient. However, for clients with additional specifications in pdf that they want to model into their BIM model, they can submit those files as well.",
  },
  {
    id: 3,
    question: "Is there a warranty period for the BIM models?",
    answer:
      "All completed models are managed via our internal file submission systems. We will allow unlimited modifications until the project is marked as complete.",
  },
  {
    id: 4,
    question: "Do you accept PDF drawings / point cloud files?",
    answer:
      "While most clients need to convert CAD drawings to BIM, we understand that some clients may only have pdf files to work with. We can also help develop BIM drawings from pdf files and also point clouds.",
  },
  {
    id: 5,
    question: "Will the BIM team be stationed onsite?",
    answer:
      "We understand that in some cases, you may need the BIM manager to be available in-person to conduct co-ordination meetings, and this is an available option under our plan.",
  },
];
