import React from "react";

export const ServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Services",
  description:
    "Bimeco provides 2D & 3D BIM services to Architects, Engineers, and Contractors in the built-environment sector.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: [
    "2D Architectural Drawings",
    "2D MEP Drawings",
    "2D Structural Detailing",
    "2D Submission Drawings",
    "3D BIM Modelling",
    "3D Walkthrough",
    "3D Clash Detection",
    "4D Simulation",
    "CAD to Revit",
    "CAD to BIM",
    "Point Cloud to BIM",
    "PDF to CAD",
    "BIM Consultancy",
    "Scan to BIM",
    "Digital Twin",
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  url: "https://www.bim.com.sg/services/",
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

const ProjectCostingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Project Costing",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Cost Estimation and Quantity Takeoff",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  audience: {
    "@type": "Audience",
    audienceType: [
      "Main Contractors",
      "Subcontractors",
      "Consultants",
    ],
  },
  description:
    "Use our BIM project costing tool to estimate construction costs based on your project scope.",
  url: "https://www.bim.com.sg/projectCosting/",
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

const ThreeDServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3D BIM Modelling Services",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  description:
    "We provide 3D modelling services for architecture, MEP, BIM, Scan to BIM, and product manufacturing with fast delivery and compliance-ready output.",
  serviceType: "3D Modelling Services",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  url: "https://www.bim.com.sg/services/3d/",
};

const BimModellingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Modelling Services",
  description:
    "Develop BIM models from CAD drawings and sketches for design, construction, and facilities management. Models are delivered in formats such as Revit, ArchiCAD, Tekla, and IFC, with support for LOD 300–500 and CORENET compliance.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/services/bim",
  areaServed: {
    "@type": "Place",
    name: "Singapore",
  },
  serviceType: "3D BIM Modelling",
};

const BimConsultancySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Consultant Services",
  description:
    "BIM consultancy services for managing 3D and 2D deliverables within a Common Data Environment. Includes BIM Execution Plan, model quality control, and data management.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/services/3d/consultancy/",
  serviceType: "BIM Consultancy",
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
};

const Product3DModelingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3D Product Modelling",
  description:
    "3D product modelling services for design and manufacturing workflows. Includes 2D to 3D conversion, unlimited revisions, and web-ready formats.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/services/3d/product/",
  serviceType: "3D Modelling for Products",
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
};

const ScanToBIMSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Scan to BIM",
  description:
    "Convert reality capture formats such as .e57, .laz, .las, .pts, and .rcs into accurate BIM models. Deliverables include LOD 300 Revit, ArchiCAD, and IFC outputs tailored for AEC use.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/services/3d/scan-to-bim/",
  serviceType: "Point Cloud to BIM Model Conversion",
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
};

const VirtualTourSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3D Virtual Tour & Walkthrough",
  description:
    "Create immersive 3D virtual tours and animated walkthroughs using BIM. Ideal for showcasing your architectural or interior projects to clients, stakeholders, and the public.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/services/3d/virtual-tour/",
  serviceType: "3D Virtual Tour Creation",
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
};

const ContractorPlaybookSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revit & BIM Services for Contractors",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Revit and BIM Modelling Services",
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  audience: {
    "@type": "Organization",
    name: "Contractors and Construction Firms",
  },
  description:
    "Work with BIM Coordinators to develop clash-free Revit models and AutoCAD drawings for Autodesk Construction Cloud (ACC) submissions.",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceLocation: {
      "@type": "Place",
      name: "Bimeco Office",
    },
    availableLanguage: ["English"],
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: "Custom",
    availability: "https://schema.org/InStock",
  },
  brand: {
    "@type": "Brand",
    name: "Autodesk Construction Cloud",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.bim.com.sg/services/playbook-contractor/",
  },
};

export const ServicesJsonLD = () => {
  let schema = JSON.stringify(ServicesSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const ProjectCostingJsonLD = () => {
  let schema: string = JSON.stringify(ProjectCostingSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const ThreeDServicesJsonLD = () => {
  let schema = JSON.stringify(ThreeDServicesSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const BimModellingJsonLD = () => {
  let schema = JSON.stringify(BimModellingSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const BimConsultancyJsonLD = () => {
  let schema = JSON.stringify(BimConsultancySchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const Product3DModelingJsonLD = () => {
  let schema = JSON.stringify(Product3DModelingSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const ScanToBIMJsonLD = () => {
  let schema = JSON.stringify(ScanToBIMSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const VirtualTourJsonLD = () => {
  let schema = JSON.stringify(VirtualTourSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const ContractorPlaybookJsonLD = () => {
  let schema = JSON.stringify(ContractorPlaybookSchema);
  return <script type="application/ld+json">{schema}</script>;
};
