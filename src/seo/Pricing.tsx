import React from "react";

const PricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Pricing Packages",
  description:
    "Bimeco provides BIM packages for both ongoing maintenance and one-time submissions, with options tailored to project size and deliverables.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BIM Pricing Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Maintenance Packages",
        description:
          "Tiered (Small, Medium, Large) BIM support packages with dedicated manager, software, and workflows.",
      },
      {
        "@type": "Offer",
        name: "Submission Packages",
        description:
          "Per-submission or project-based BIM packages including software, CDE, analytical and BIM workflows.",
      },
    ],
  },
  url: "https://www.bim.com.sg/pricing/",
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

const BIMPackagesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Packages - Maintenance",
  description:
    "Ongoing BIM support packages tailored to different project sizes.",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  serviceType: "BIM Support and Maintenance",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BIM Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Small Package",
        description:
          "For projects under 4,000 m². Includes BIM Manager, Design Software, and basic workflows.",
      },
      {
        "@type": "Offer",
        name: "Medium Package",
        description:
          "For projects between 4,000 - 10,000 m². Includes all small-tier features and Common Data Environment support.",
      },
      {
        "@type": "Offer",
        name: "Large Package",
        description:
          "For projects over 10,000 m². Includes all features plus 4D/5D/6D BIM workflows and on-demand services.",
      },
    ],
  },
  url: "https://www.bim.com.sg/pricing/bim-sub/",
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

export const PricingJsonLD = () => {
  let schema = JSON.stringify(PricingSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const BIMPackagesJsonLD = () => {
  let schema = JSON.stringify(BIMPackagesSchema);
  return <script type="application/ld+json">{schema}</script>;
};
