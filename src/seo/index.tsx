import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

// Factory function to create website schema with regional data
export const createWebsiteSchema = (config: any) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bimeco",
  url: config.siteUrl,
});

// Factory function to create LocalBusiness schema with regional data
export const createLocalBusinessSchema = (config: any) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${config.siteUrl}#business`,
  mainEntityOfPage: `${config.siteUrl}/`,
  name: "Bimeco",
  legalName: config.contact.company,
  brand: { "@type": "Brand", name: "Bimeco" },
  slogan: "Your Trusted Partner in Digital Project Delivery",
  foundingDate: "1996",
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: config.business.registrationType,
      value: config.business.registrationNumber,
    },
    {
      "@type": "PropertyValue",
      propertyID: "DUNS",
      name: "D&B DUNS Number",
      value: "659446838",
    },
  ],
  url: config.siteUrl,
  logo: "https://d14s2iums0fe7u.cloudfront.net/bimeco-cropped.png",
  image: ["https://d14s2iums0fe7u.cloudfront.net/bimeco-cropped.png"],
  description:
    "Bimeco offers BIM services in Singapore. We specialize in 3D modeling, clash detection, and digital delivery—fully compliant with CORENET X, IFC-SG & ISO 19650. ISO 9001 and bizSAFE certified BIM consultancy.",
  founder: {
    "@type": "Person",
    name: "Ivan Tang",
    jobTitle: "Director, Digitalization",
    description:
      "Professional with 7+ years of experience in AEC industry, extensive software development experience, and AWS Solutions Architect Professional Certification.",
    sameAs: ["https://www.linkedin.com/in/ivantangwk/"],
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 407,
  },
  telephone: config.contact.phone,
  email: config.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${config.contact.address.street}, ${config.contact.address.unit}`,
    addressLocality: config.contact.address.city,
    addressRegion: config.contact.address.state || undefined,
    postalCode: config.contact.address.postal,
    addressCountry: config.region === 'sg' ? 'SG' : 'US',
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.35699,
    longitude: 103.83789,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: { "@type": "AdministrativeArea", name: config.regionName },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: config.contact.phone,
    email: config.contact.email,
    url: `${config.siteUrl}/contact/`,
    availableLanguage: ["en", "zh"],
  },
  hasMap:
    "https://www.google.com/maps/place/Bimeco/@1.356935,103.837043,18.9z/data=!3m1!5s0x31da1042924efc39:0x2f8b36532522e5b!4m12!1m5!3m4!2zMcKwMjEnMjUuMiJOIDEwM8KwNTAnMTYuNCJF!8m2!3d1.35699!4d103.83789!3m5!1s0x31da110b292e799b:0x1ac539002d772ae1!8m2!3d1.3565887!4d103.8379444!16s%2Fg%2F11mvzrq1t1",
  makesOffer: [
    {
      "@type": "Offer",
      url: `${config.siteUrl}/services/bim`,
      itemOffered: {
        "@type": "Service",
        name: "BIM Services",
        serviceType: "BIM Services",
        description:
          "BIM modelling and coordination services for architects, engineers, and contractors. We develop clash-free BIM models in Revit, ArchiCAD, Tekla, IFC, and more.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/services/3d/consultancy/`,
      itemOffered: {
        "@type": "Service",
        name: "BIM Consultancy",
        serviceType: "BIM consultancy",
        description:
          "End-to-end BIM consultancy for project managers, contractors, and consultants.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/services/4d-bim/`,
      itemOffered: {
        "@type": "Service",
        name: "4D BIM",
        serviceType: "4D BIM",
        description:
          "Construction sequencing and simulation integrated with BIM models.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/services/3d/virtual-tour/`,
      itemOffered: {
        "@type": "Service",
        name: "Virtual Tour",
        serviceType: "Virtual Tour",
        description:
          "Create a virtual tour of your facility from existing CAD plans and point clouds.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/services/3d/scan-to-bim/`,
      itemOffered: {
        "@type": "Service",
        name: "Scan to BIM",
        serviceType: "Scan to BIM",
        description:
          "Point cloud processing and as-built BIM creation from laser scans.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/services/3d/scan-to-bim/`,
      itemOffered: {
        "@type": "Service",
        name: "As-Built Survey",
        serviceType: "As-built survey",
        description:
          "Survey and documentation of completed works into as-built BIM models.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/software/openbuildings-bim/`,
      itemOffered: {
        "@type": "Product",
        name: "BIM Software",
        category: "Software",
        description:
          "Tools and applications for BIM authoring and coordination.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/software/projectwise/`,
      itemOffered: {
        "@type": "Product",
        name: "CDE Software",
        category: "Software",
        description:
          "Common Data Environment platforms for ISO 19650-compliant project management.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/software/synchro-4d/`,
      itemOffered: {
        "@type": "Product",
        name: "4D Planning Software",
        category: "Software",
        description:
          "4D planning software for construction scheduling and simulation.",
      },
    },
    {
      "@type": "Offer",
      url: `${config.siteUrl}/software/staad-pro/`,
      itemOffered: {
        "@type": "Product",
        name: "STAAD Pro",
        category: "Software",
        description:
          "Structural analysis and design software for buildings and bridges.",
      },
    },
  ],
  sameAs: [
    config.social.linkedIn,
    "https://www.facebook.com/profile.php?id=61579821793300",
    "https://www.youtube.com/@Bimeco",
    "https://www.crunchbase.com/organization/bimeco-078f",
    "https://www.sgpbusiness.com/company/Bim-Engineering-And-Construction-Pte-Ltd",
    "https://www.dnb.com/business-directory/company-profiles.bim_engineering__construction_pte_ltd.b87b55698807f5f0d8180870532b98eb.html",
    "https://viewer.bim.com.sg",
  ],
  knowsAbout: [
    "BIM consultant",
    "4D BIM",
    "Scan to BIM",
    "As-built survey",
    "BIM software",
    "ACC software",
    "CDE software",
    "IFC-SG",
    "CORENET X",
    "ISO 19650",
    "clash detection",
    "digital delivery",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification",
      name: "ISO 9001:2015 Certified",
      description:
        "ISO 9001:2015 Quality Management System certification",
      recognizingAuthority: {
        "@type": "Organization",
        name: "International Organization for Standardization",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Certification",
      name: "bizSAFE Level 3",
      description:
        "bizSAFE Level 3 workplace safety and health certification",
      recognizingAuthority: {
        "@type": "Organization",
        name: "Workplace Safety and Health Council Singapore",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Partner Certification",
      name: "Bentley Channel Partner",
      description: "Bentley Systems Channel Partner - Gold Level",
      recognizingAuthority: {
        "@type": "Organization",
        name: "Bentley Systems",
        url: "https://www.bentley.com",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Partner Certification",
      name: "Autodesk Platform Services Service Partner",
      description:
        "Authorized service partner for Autodesk Construction Cloud",
      recognizingAuthority: {
        "@type": "Organization",
        name: "Autodesk",
        url: "https://www.autodesk.com",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Registration",
      name: "STAS Registry Member",
      description:
        "Registered on Security Trustmark for Adoption Scheme (STAS) registry for digital security and compliance",
      recognizingAuthority: {
        "@type": "Organization",
        name: "Infocomm Media Development Authority (IMDA)",
        url: "https://www.imda.gov.sg",
      },
    },
  ],
  award: [
    "Bentley Channel Partner",
    "ISO 9001:2015 Quality Management Certification",
    "bizSAFE Level 3 Workplace Safety Certification",
    "STAS Registry Member",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Bentley Systems",
      description: "Gold Channel Partner",
      url: "https://www.bentley.com",
    },
    {
      "@type": "Organization",
      name: "Autodesk",
      description: "Authorized Construction Cloud Service Partner",
      url: "https://www.autodesk.com",
    },
    {
      "@type": "Organization",
      name: "STAS Registry",
      description:
        "Security Trustmark for Adoption Scheme - Registered Member",
      url: "https://www.imda.gov.sg/how-we-can-help/stas",
    },
  ],
});

export const autocadServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CAD Drafting Services",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "CAD Drafting Services",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: [
    {
      "@type": "Offer",
      priceCurrency: "SGD",
      price: 4000,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        name: "Monthly Service",
        priceCurrency: "SGD",
        price: 4000,
        billingDuration: "P1M", // ISO 8601 duration for 1 month
      },
      url: "https://www.bim.com.sg/services/cad-services/",
      description:
        "Monthly drafting service for ongoing AutoCAD drawing requirements.",
    },
    {
      "@type": "Offer",
      priceCurrency: "SGD",
      price: 97,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        name: "Per Drawing",
        priceCurrency: "SGD",
        price: 97,
        unitText: "drawing",
      },
      url: "https://www.bim.com.sg/services/cad-services/",
      description:
        "Pay-per-drawing for ad-hoc AutoCAD drafting needs.",
    },
  ],
  description:
    "Outsource professional 2D drafting services for architectural, structural, and MEP drawings. Our experienced drafters deliver precise, high-quality CAD drawings with quick turnaround times.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AutoCAD Drafting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Drafting",
          description:
            "Detailed floor plans, elevations, and sections using AutoCAD.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Structural Drafting",
          description:
            "Precise structural drawings, including reinforcement and steel detailing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MEP Drafting",
          description:
            "Mechanical, electrical, and plumbing CAD drawings for contractors and consultants.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

export const RevitServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outsource Revit BIM Services",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Revit BIM Outsourcing",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: "Monthly Pricing",
    url: "https://www.bim.com.sg/portfolio/",
  },
  description:
    "Outsource professional Revit BIM services for architectural, structural, and MEP modeling. Our experienced team delivers accurate, high-quality BIM models with quick turnaround times, compliant with ISO 19650 standards.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Revit BIM Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural BIM Modeling",
          description:
            "Detailed 3D Revit models for architectural design, including parametric families and documentation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Structural BIM Modeling",
          description:
            "Accurate structural models with reinforcement detailing and clash detection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MEP BIM Modeling",
          description:
            "Comprehensive MEP BIM models, including mechanical, electrical, and plumbing systems, ensuring coordination and clash-free designs.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

export const BIMSubmissionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corenet Submission Services",
  url: "https://www.bim.com.sg/services/bim-services/",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Corenet Submission",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: "Custom Pricing",
    url: "https://www.bim.com.sg/services/bimsubmissions/",
  },
  description:
    "Expert Corenet submission services for regulatory compliance in Singapore. We handle architectural, structural, and MEP submissions to streamline your project approvals.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Corenet Submission Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Architectural Corenet Submission",
          description:
            "Preparation and submission of architectural plans to meet BCA regulations and approval requirements.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Structural Corenet Submission",
          description:
            "Submission of structural plans with compliance to Singapore's building codes and safety regulations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MEP Corenet Submission",
          description:
            "Comprehensive MEP submissions for mechanical, electrical, and plumbing systems in accordance with local authority standards.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

export const FourDBimServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "4D BIM Services",
  url: "https://www.bim.com.sg/services/4d-bim/",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "4D BIM Simulation",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: "Custom Pricing",
    url: "https://www.bim.com.sg/services/4d-bim/",
  },
  description:
    "Professional 4D BIM services to enhance project planning, scheduling, and simulation. Our team integrates time-based construction sequencing with BIM models to improve project efficiency and coordination.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "4D BIM Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "4D BIM Planning",
          description:
            "Link construction schedules with BIM models for better project visualization and sequencing.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Construction Simulation",
          description:
            "Simulate construction progress over time, identifying potential delays and optimizing workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clash Detection with Time Integration",
          description:
            "Analyze spatial and temporal clashes in construction sequences to prevent on-site issues.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

export const BimManagerServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BIM Manager Services",
  url: "https://www.bim.com.sg/hire/bim-manager/",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "BIM Management",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: "Custom Pricing",
    url: "https://www.bim.com.sg/hire/bim-manager/",
  },
  description:
    "Professional BIM Manager services to oversee and implement Building Information Modeling (BIM) workflows, ensuring compliance, collaboration, and efficiency throughout the project lifecycle.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BIM Management Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIM Execution Planning",
          description:
            "Develop and execute BIM strategies, ensuring alignment with industry standards such as ISO 19650.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIM Coordination",
          description:
            "Manage model coordination and clash detection across multiple disciplines to prevent design conflicts.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIM Standards & Compliance",
          description:
            "Ensure project adherence to BIM standards, naming conventions, and best practices for seamless collaboration.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

const autocadSchema = JSON.stringify(autocadServiceSchema, null, 2);

const bimSubmissionSchema = JSON.stringify(
  BIMSubmissionSchema,
  null,
  2
);

const revitSchema = JSON.stringify(RevitServiceSchema, null, 2);

const fourDBimSchema = JSON.stringify(FourDBimServiceSchema, null, 2);

const bimServiceSchema = JSON.stringify(
  BimManagerServiceSchema,
  null,
  2
);

export const autocadJsonLD = () => {
  return <script type="application/ld+json">{autocadSchema}</script>;
};

export const localJsonLD = () => {
  const siteMetadata = useSiteMetadata();
  const schema = createLocalBusinessSchema(siteMetadata);
  const schemaJson = JSON.stringify(schema, null, 2);
  return <script type="application/ld+json">{schemaJson}</script>;
};

export const revitJsonLD = () => {
  return <script type="application/ld+json">{revitSchema}</script>;
};

export const bimJsonLd = () => {
  return (
    <script type="application/ld+json">{bimSubmissionSchema}</script>
  );
};

export const fourJsonLD = () => {
  return <script type="application/ld+json">{fourDBimSchema}</script>;
};

export const managerJsonLD = () => {
  return (
    <script type="application/ld+json">{bimServiceSchema}</script>
  );
};

export const websiteJsonLD = () => {
  const siteMetadata = useSiteMetadata();
  const schema = createWebsiteSchema(siteMetadata);
  const schemaJson = JSON.stringify(schema, null, 2);
  return (
    <script type="application/ld+json">{schemaJson}</script>
  );
};

export const FireProtectionSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Protection BIM Services",
  url: "https://www.bim.com.sg/hire/qp-fire/",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Fire Protection Design & Documentation",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: "Custom Pricing",
    url: "https://www.bim.com.sg/services/fire-protection/",
  },
  description:
    "We support QPs in preparing fire protection drawings and BIM models for FSSD submission at design stage and FSC documentation at handover stage. Our team ensures coordination of sprinkler, hydrant, and hose reel systems with architectural and structural elements.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Protection Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FSSD Design Submission",
          description:
            "Prepare fire protection plans and BIM models for SCDF/FSSD design-stage submissions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "FSC Handover Documentation",
          description:
            "Produce as-built models and annotated drawings to support Fire Safety Certificate (FSC) applications.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clash Coordination",
          description:
            "Resolve clashes between fire protection systems and structural/architectural elements in BIM.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CORENET Resubmissions",
          description:
            "Revise CAD/BIM drawings to address SCDF/FSSD comments and prepare follow-up submissions.",
        },
      },
    ],
  },
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

const fireProtectionSchemaJson = JSON.stringify(
  FireProtectionSchema,
  null,
  2
);

export const fireProtectionJsonLD = () => {
  return (
    <script type="application/ld+json">
      {fireProtectionSchemaJson}
    </script>
  );
};

export const LiDARSurveyingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "LiDAR Scanning & 3D Surveying Services",
  url: "https://www.bim.com.sg/services/scan-to-bim/",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Reality Capture and 3D Surveying",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: 4800,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      name: "LiDAR Scanning Service",
      priceCurrency: "SGD",
      price: 4800,
    },
    url: "https://www.bim.com.sg/services/scan-to-bim/",
    description:
      "Professional LiDAR scanning services with sub-4mm accuracy for BIM modeling and documentation.",
  },
  description:
    "Capture facility measurements with sub-4 mm accuracy using LiDAR technology. We develop BIM models and detailed floor plans from point cloud data to support precise design, planning, and documentation.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "LiDAR & Reality Capture Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LiDAR Scanning",
          description:
            "High-precision 3D laser scanning with sub-4mm accuracy for accurate as-built documentation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Point Cloud to BIM",
          description:
            "Convert point cloud data into accurate BIM models for design validation and facilities management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "As-Built Documentation",
          description:
            "Create detailed as-built floor plans and 3D models from reality capture data.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deviation Analysis",
          description:
            "Compare as-built conditions against design intent to detect construction variances and quality issues.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Progress Tracking",
          description:
            "Use periodic scans to document construction progress and support payment claims with verifiable data.",
        },
      },
    ],
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Accuracy",
      value: "Sub-4mm precision",
    },
    {
      "@type": "PropertyValue",
      name: "Technology",
      value: "LiDAR laser scanning",
    },
    {
      "@type": "PropertyValue",
      name: "Deliverables",
      value:
        "Point clouds, BIM models, CAD drawings, deviation reports",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

export const IDDServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integrated Digital Delivery (IDD) Services",
  url: "https://www.bim.com.sg/services/idd/",
  provider: {
    "@type": "Organization",
    name: "Bimeco",
    url: "https://www.bim.com.sg",
  },
  serviceType: "Digital Construction & Project Delivery",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Singapore",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "SGD",
    price: 5900,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      name: "IDD Consulting Service",
      priceCurrency: "SGD",
      price: 5900,
    },
    url: "https://www.bim.com.sg/services/idd/",
    description:
      "End-to-end digital delivery services integrating BIM, point clouds, robotics, and QR codes for construction productivity.",
  },
  description:
    "Integrated Digital Delivery uses BIM, point clouds, robotics, LiDAR, and QR codes to streamline site logistics and boost productivity. Our IDD approach integrates digital workflows across design, construction, and site delivery.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IDD Service Offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIM for Construction (LOD 400)",
          description:
            "Develop detailed BIM models up to LOD 400 with fabrication details, assembly methods, and coordinated shop drawings for site execution.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virtual Design & Construction (VDC)",
          description:
            "4D/5D BIM simulation for construction sequencing, clash detection, and automated quantity takeoffs for cost management.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Progress & Quality Tracking",
          description:
            "Point cloud scans to validate as-built conditions, track progress, and support payment claims with scan-to-BIM workflows.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Twin Development",
          description:
            "Create digital twins for operations and facilities management with real-time data integration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ISO 19650 Compliance",
          description:
            "Implement ISO 19650 information management standards for structured collaboration and handover.",
        },
      },
    ],
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Standards Compliance",
      value: "ISO 19650, CORENET X, IFC-SG",
    },
    {
      "@type": "PropertyValue",
      name: "BIM Maturity",
      value: "LOD 300 to LOD 500",
    },
    {
      "@type": "PropertyValue",
      name: "Technologies",
      value: "BIM, 4D/5D/6D, Point Clouds, LiDAR, Robotics, QR Codes",
    },
  ],
  isRelatedTo: [
    {
      "@type": "Service",
      "@id": "https://www.bim.com.sg/services/4d-bim/",
      name: "4D BIM Services",
    },
    {
      "@type": "Service",
      "@id": "https://www.bim.com.sg/services/scan-to-bim/",
      name: "LiDAR Scanning Services",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/bimeco-sg/",
    "https://g.co/kgs/Gmq8ZQT",
  ],
};

const lidarSurveyingSchemaJson = JSON.stringify(
  LiDARSurveyingSchema,
  null,
  2
);

const iddServiceSchemaJson = JSON.stringify(
  IDDServiceSchema,
  null,
  2
);

export const lidarSurveyingJsonLD = () => {
  return (
    <script type="application/ld+json">
      {lidarSurveyingSchemaJson}
    </script>
  );
};

export const iddServiceJsonLD = () => {
  return (
    <script type="application/ld+json">{iddServiceSchemaJson}</script>
  );
};
