import React from "react";

const SoftwareSchemaProjectWise = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bentley ProjectWise",
  applicationCategory: "ProjectManagementApplication",
  operatingSystem: "Web-based, requires modern browser",
  softwareRequirements: "Internet connection, supported web browser",
  softwareVersion: "Latest",
  image: "https://www.bim.com.sg/images/projectwise-cover.jpg/",
  description:
    "ProjectWise is a project delivery platform by Bentley Systems designed for secure collaboration, information management, and workflow automation in large infrastructure projects. Bimeco offers licensing, implementation, and support services.",
  url: "https://www.bim.com.sg/software/projectwise/",
  sku: "PW-BIM-SG-001",
  material: "Digital download",
  audience: {
    "@type": "Audience",
    audienceType: "Architects, Engineers, and Asset Owners",
  },
  brand: {
    "@type": "Brand",
    name: "Bentley Systems",
  },
  offers: {
    "@type": "OfferCatalog",
    name: "ProjectWise Pricing Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "ProjectWise Manage",
        price: "396.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock",
        url: "https://www.bim.com.sg/software/projectwise/",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "ProjectWise Manage",
          description:
            "Entry-level access to centralized document management and model viewing capabilities.",
          applicationCategory: "ProjectManagementApplication",
          operatingSystem: "Web-based",
        },
        seller: {
          "@type": "Organization",
          name: "Bimeco",
          url: "https://www.bim.com.sg",
        },
      },
      {
        "@type": "Offer",
        name: "ProjectWise Engineer",
        price: "1507.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock",
        url: "https://www.bim.com.sg/software/projectwise/",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "ProjectWise Engineer",
          description:
            "Collaborative workspace with model editing, syncing, and BIM coordination features.",
          applicationCategory: "ProjectManagementApplication",
          operatingSystem: "Web-based",
        },
        seller: {
          "@type": "Organization",
          name: "Bimeco",
          url: "https://www.bim.com.sg",
        },
      },
      {
        "@type": "Offer",
        name: "ProjectWise Validate",
        price: "2816.00",
        priceCurrency: "SGD",
        availability: "https://schema.org/InStock",
        url: "https://www.bim.com.sg/software/projectwise/",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "ProjectWise Validate",
          description:
            "Advanced validation tools for digital twin creation and ISO 19650 compliance. Works with various BIM formats such as Revit, Tekla, ArchiCAD, and IFC.",
          applicationCategory: "ProjectManagementApplication",
          operatingSystem: "Web-based",
        },
        seller: {
          "@type": "Organization",
          name: "Bimeco",
          url: "https://www.bim.com.sg",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Jason Lim",
      },
      reviewBody:
        "Great support from Bimeco in setting up our ProjectWise environment. Their understanding of ISO 19650 workflows was a game-changer.",
    },
  ],
};

const SoftwareSchemaBIM = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OpenBuildings",
  applicationCategory: ["CADApplication", "BIMApplication"],
  operatingSystem: "Windows 10 or higher",
  softwareVersion: "v1.2",
  description:
    "OpenBuildings is a comprehensive BIM solution supporting design, construction, and operations. It includes 2D CAD, 3D BIM, clash detection, shop drawing generation, and survey integration.",
  softwareHelp: "https://www.bim.com.sg/software/openbuildings-bim/",
  offers: {
    "@type": "Offer",
    price: "3950",
    priceCurrency: "SGD",
    availability: "https://schema.org/InStock",
    url: "https://www.bim.com.sg/software/openbuildings-bim/",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "4740",
      priceCurrency: "SGD",
      eligibleDuration: {
        "@type": "QuantitativeValue",
        value: 3,
        unitCode: "ANN",
      },
    },
  },
  featureList: [
    "Support for Revit, ArchiCAD, Tekla, and IFC formats",
    "2D CAD drafting and annotation",
    "3D BIM modelling for architecture, structure, MEP",
    "Clash detection",
    "Shop drawing generation",
    "Survey integration with LiDAR and drones",
    "Design review and markup with iTwin Design Review",
    "Multi-discipline modelling",
  ],
};

const CADSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MicroStation",
  operatingSystem: "Windows 10 or higher",
  applicationCategory: "CADApplication",
  softwareVersion: "Latest",
  description:
    "Buy MicroStation, a professional CAD software for 2D drafting and 3D modeling, widely used for infrastructure design, modelling, and BIM workflows.",
  offers: {
    "@type": "Offer",
    price: "2690",
    priceCurrency: "SGD",
    availability: "https://schema.org/InStock",
    url: "https://www.bim.com.sg/software/cad/",
  },
};

const StaadSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "STAAD.Pro",
  operatingSystem: "Windows 10 or higher",
  applicationCategory: "EngineeringApplication",
  softwareVersion: "Latest",
  description:
    "STAAD.Pro is structural analysis and design software for buildings, towers, bridges, and industrial plants. It supports multiple materials and international codes, enabling advanced structural modeling, finite element analysis, and multi-discipline collaboration.",
  offers: {
    "@type": "Offer",
    price: "5553",
    priceCurrency: "SGD",
    availability: "https://schema.org/InStock",
    url: "https://www.bim.com.sg/software/staad/",
  },
};

export const SoftwareProjectwiseJsonLd = () => {
  let schema: string = JSON.stringify(SoftwareSchemaProjectWise);
  return <script type="application/ld+json">{schema}</script>;
};

export const SoftwareBIMJsonLd = () => {
  let schema: string = JSON.stringify(SoftwareSchemaBIM);
  return <script type="application/ld+json">{schema}</script>;
};

export const CADSoftwareJsonLD = () => {
  let schema = JSON.stringify(CADSoftwareSchema);
  return <script type="application/ld+json">{schema}</script>;
};

export const StaadJsonLD = () => {
  let schema = JSON.stringify(StaadSchema);
  return <script type="application/ld+json">{schema}</script>;
};
