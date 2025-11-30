import React from "react";

const TenderWalkthroughSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tender Walkthrough",
  description: "Showcase your project with a detailed walkthrough.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/demos/",
};

const ArchitectureShowcaseSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Architecture Showcase",
  description: "Showcase your architectural project with a detailed walkthrough.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/demos/architecture/",
};

const CivilShowcaseSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Civil Showcase",
  description: "Showcase site construction works with a low LOD BIM and project schedule.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/demos/civil/",
};

const DigitalTwinShowcaseSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Twin Showcase",
  description: "Combine BIM models with IoT data to create a digital twin of your project.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  url: "https://www.bim.com.sg/demos/twin/",
};

export const TenderWalkthroughJsonLD = () => {
  let schema = JSON.stringify(TenderWalkthroughSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const ArchitectureShowcaseJsonLD = () => {
  let schema = JSON.stringify(ArchitectureShowcaseSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const CivilShowcaseJsonLD = () => {
  let schema = JSON.stringify(CivilShowcaseSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const DigitalTwinShowcaseJsonLD = () => {
  let schema = JSON.stringify(DigitalTwinShowcaseSchema);
  return <script type="application/ld+json">{schema}</script>;
};