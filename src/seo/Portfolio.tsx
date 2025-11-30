import React from "react";

const PortfolioBenDoctoleroSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Benigno Baltazar Doctolero",
  jobTitle: "BIM Manager",
  worksFor: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Luzon",
  },
  url: "https://www.bim.com.sg/portfolio/ben/",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.bim.com.sg/portfolio/ben/",
  },
  description:
    "Ben is a BIM Manager with experience in CAD and BIM workflows, site coordination, and model conflict resolution. He has 7 years of site experience and has worked as a BIM Coordinator and Structural Design Engineer.",
};

const PortfolioFaizSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Faiz Zalani",
  jobTitle: "BIM Coordinator",
  worksFor: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/portfolio/faiz/",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Nanyang Polytechnic",
  },
  description:
    "Faiz Zalani is a BIM Coordinator with expertise in model coordination, P&ID management, and infrastructure projects. Skilled in Revit, AutoCAD, Navisworks, OpenPlant, and Revizto, he ensures accurate equipment integration, data synchronization, and compliance with project standards.",
};

const PortfolioLowPakSingSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Low Pak Sing",
  jobTitle: "Project Planner",
  worksFor: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/portfolio/low/",
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "BSc in Construction Management",
    },
    {
      "@type": "EducationalOrganization",
      name: "Advanced Diplomas in Construction & Project Management",
    },
  ],
  description:
    "Low Pak Sing is a seasoned project management professional with over 40 years of experience, including 25+ years in coordination, program planning, and project controls. His background includes large-scale infrastructure, tunneling, and airport projects, with expertise in scheduling, EOT analysis, and construction methodologies.",
};

const PortfolioSuLattTunSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Su Latt Tun",
  jobTitle: "BIM Manager",
  worksFor: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  description:
    "Su Latt Tun is a Civil Engineer with 4+ years of experience in BIM coordination, structural drafting, and site supervision. She has worked on major projects with Lendlease Singapore and Gammon Construction.",
  url: "https://www.bim.com.sg/portfolio/su/",
};

export const PortfolioBenDoctoleroJsonLD = () => {
  let schema = JSON.stringify(PortfolioBenDoctoleroSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const PortfolioLowPakSingJsonLD = () => {
  let schema = JSON.stringify(PortfolioLowPakSingSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const PortfolioFaizJsonLD = () => {
  let schema = JSON.stringify(PortfolioFaizSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const PortfolioSuLattTunJsonLD = () => {
  let schema = JSON.stringify(PortfolioSuLattTunSchema);
  return <script type="application/ld+json">{schema}</script>;
};
