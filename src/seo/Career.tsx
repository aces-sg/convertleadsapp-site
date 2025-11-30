import React from "react";
import { Career } from "types/career";

// Generate JobPosting schema for individual job pages
// Following Google's JobPosting structured data guidelines
// https://developers.google.com/search/docs/appearance/structured-data/job-posting
export const createJobPostingSchema = (job: Career) => {
  // Map job levels to base salary estimate
  const getBaseSalaryValue = (salary?: string) => {
    if (!salary) return null;

    // Extract salary range from string like "$4,500 - $6,500"
    const match = salary.match(/\$?(\d{1,3}(?:,\d{3})*)/g);
    if (match && match.length >= 2) {
      const min = parseFloat(match[0].replace(/[$,]/g, ""));
      const max = parseFloat(match[1].replace(/[$,]/g, ""));
      return {
        "@type": "MonetaryAmount",
        currency: "SGD",
        value: {
          "@type": "QuantitativeValue",
          minValue: min,
          maxValue: max,
          unitText: "MONTH",
        },
      };
    }

    return null;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: "Bimeco",
      value: job.jobId,
    },
    datePosted: job.posted,
    validThrough: job.expires || undefined,
    employmentType: job.type.toUpperCase().replace("-", "_"), // "FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"
    hiringOrganization: {
      "@type": "Organization",
      name: "Bimeco",
      legalName: "BIM Engineering & Construction Pte Ltd",
      sameAs: [
        "https://www.bim.com.sg",
        "https://sg.linkedin.com/company/bimeco-sg",
        "https://www.facebook.com/profile.php?id=61579821793300",
      ],
      logo: "https://d14s2iums0fe7u.cloudfront.net/bimeco-cropped.png",
      url: "https://www.bim.com.sg",
      description:
        "Leading BIM and digital construction consultancy in Singapore, specializing in Building Information Modeling (BIM), 3D modeling, clash detection, and digital delivery. ISO 9001:2015 certified with 407+ BIM professionals.",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 407,
      },
      foundingDate: "1996",
      knowsAbout: [
        "Building Information Modeling (BIM)",
        "Revit",
        "Navisworks",
        "BIM 360",
        "Autodesk Construction Cloud (ACC)",
        "Clash Detection",
        "4D BIM Simulation",
        "Scan to BIM",
        "Digital Delivery",
        "IFC-SG",
        "CORENET X",
        "ISO 19650",
        "ProjectWise",
        "Synchro 4D",
        "Point Cloud Processing",
        "BIM Coordination",
        "Digital Twin",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "ISO 9001:2015 Certified",
          recognizingAuthority: {
            "@type": "Organization",
            name: "International Organization for Standardization",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "bizSAFE Level 3",
          recognizingAuthority: {
            "@type": "Organization",
            name: "Workplace Safety and Health Council Singapore",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Partner Certification",
          name: "Bentley Channel Partner - Gold Level",
          recognizingAuthority: {
            "@type": "Organization",
            name: "Bentley Systems",
            url: "https://www.bentley.com",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Partner Certification",
          name: "Autodesk Construction Cloud Service Partner",
          recognizingAuthority: {
            "@type": "Organization",
            name: "Autodesk",
            url: "https://www.autodesk.com",
          },
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: "Bentley Systems",
          description: "Gold Channel Partner",
        },
        {
          "@type": "Organization",
          name: "Autodesk",
          description:
            "Authorized Construction Cloud Service Partner",
        },
      ],
      areaServed: {
        "@type": "Country",
        name: "Singapore",
      },
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "SG",
      },
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "SG",
    },
    responsibilities: job.responsibilities?.join("; "),
    skills: job.skills?.join(", "),
    qualifications: job.requirements?.join("; "),
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: getExperienceMonths(job.level),
    },
    industry: [
      "Building Information Modeling (BIM)",
      "Construction Technology",
      "Digital Construction",
      "Architecture, Engineering & Construction (AEC)",
    ],
    occupationalCategory: getDepartmentCategory(job.department),
    baseSalary: getBaseSalaryValue(job.salary),
    jobBenefits: job.benefits?.join(", "),
    educationRequirements: getBIMEducationRequirements(job),
    workRemoteAllowed: true,
    directApply: true,
    // Link to related BIM services
    about: {
      "@type": "Service",
      name: "BIM Services",
      url: "https://www.bim.com.sg/services/bim",
      provider: {
        "@type": "Organization",
        name: "Bimeco",
      },
    },
  };

  // Remove undefined values
  return JSON.parse(JSON.stringify(schema));
};

// Helper function to map job level to experience in months
const getExperienceMonths = (level: string) => {
  switch (level) {
    case "Entry":
      return 0;
    case "Mid-Level":
      return 24; // 2 years
    case "Senior":
      return 60; // 5 years
    case "Lead":
      return 120; // 10 years
    default:
      return 0;
  }
};

// Helper function to map department to occupational category
const getDepartmentCategory = (department: string) => {
  const categoryMap: Record<string, string> = {
    "digital-delivery": "17-3011.00", // Architectural and Civil Drafters
    devops: "15-1252.00", // Software Developers
    sales: "41-3099.00", // Sales Representatives
  };

  return categoryMap[department] || "Architecture and Engineering";
};

// Helper function to generate BIM education requirements
const getBIMEducationRequirements = (job: Career) => {
  const requirements: any = {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "diploma or degree",
  };

  // Add BIM-specific certification recommendations
  if (
    job.department === "digital-delivery" &&
    job.categories?.includes("BIM")
  ) {
    requirements.about = [
      "Diploma or Degree in Civil Engineering, Architecture, or related field",
      "Proficiency in BIM software (Revit, Navisworks, AutoCAD)",
      "Understanding of BIM standards (IFC-SG, ISO 19650, CORENET X)",
      "Experience with clash detection and coordination",
    ];
  } else if (job.department === "devops") {
    requirements.about = [
      "Degree in Computer Science, Software Engineering, or related field",
      "Experience with BIM APIs (Revit API, Forge, iTwin.js)",
      "Understanding of AEC workflows and BIM processes",
    ];
  }

  return requirements;
};

// Job posting schema component for SEO
export const JobPostingJsonLD = ({ job }: { job: Career }) => {
  const schema = createJobPostingSchema(job);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Organization schema for careers landing page
export const CareersPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at Bimeco - BIM Jobs in Singapore",
  description:
    "Join Bimeco's team of 407+ BIM professionals. Explore career opportunities in BIM coordination, BIM management, digital construction, and DevOps across Singapore's major infrastructure projects. We're ISO 9001:2015 certified and a Bentley Gold Partner.",
  url: "https://www.bim.com.sg/career/",
  mainEntity: {
    "@type": "Organization",
    name: "Bimeco",
    legalName: "BIM Engineering & Construction Pte Ltd",
    url: "https://www.bim.com.sg",
    logo: "https://d14s2iums0fe7u.cloudfront.net/bimeco-cropped.png",
    description:
      "Leading BIM and digital construction consultancy in Singapore, specializing in Building Information Modeling (BIM), 3D modeling, clash detection, and digital delivery for major infrastructure projects.",
    foundingDate: "1996",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 407,
    },
    slogan: "Your Trusted Partner in Digital Project Delivery",
    knowsAbout: [
      "Building Information Modeling (BIM)",
      "BIM Coordination",
      "BIM Management",
      "Revit",
      "Navisworks",
      "BIM 360",
      "Autodesk Construction Cloud (ACC)",
      "Clash Detection",
      "4D BIM Simulation",
      "Scan to BIM",
      "Digital Delivery",
      "IFC-SG",
      "CORENET X",
      "ISO 19650",
      "ProjectWise",
      "Synchro 4D",
      "Digital Twin",
      "iTwin.js",
      "Revit API",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certification",
        name: "ISO 9001:2015 Quality Management Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certification",
        name: "bizSAFE Level 3 Workplace Safety Certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Partner Certification",
        name: "Bentley Systems Gold Channel Partner",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Partner Certification",
        name: "Autodesk Construction Cloud Service Partner",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Bentley Systems",
        description: "Gold Channel Partner",
      },
      {
        "@type": "Organization",
        name: "Autodesk",
        description: "Authorized Construction Cloud Service Partner",
      },
    ],
    sameAs: [
      "https://sg.linkedin.com/company/bimeco-sg",
      "https://www.facebook.com/profile.php?id=61579821793300",
      "https://www.youtube.com/@Bimeco",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "159 Sin Ming Road Amtech Building Lobby 1, #05-03",
      addressLocality: "Singapore",
      postalCode: "575625",
      addressCountry: "SG",
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    // Reference to BIM services offered
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIM Coordination Services",
          url: "https://www.bim.com.sg/services/bim",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "BIM Consultancy Services",
          url: "https://www.bim.com.sg/services/3d/consultancy/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Construction Services",
          url: "https://www.bim.com.sg/services/",
        },
      },
    ],
  },
};

export const CareersPageJsonLD = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(CareersPageSchema),
    }}
  />
);

// BreadcrumbList schema for individual job pages
export const createJobBreadcrumbSchema = (job: Career) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.bim.com.sg",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Careers",
      item: "https://www.bim.com.sg/career/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: job.title,
      item: `https://www.bim.com.sg/career/${job.jobId}`,
    },
  ],
});

export const JobBreadcrumbJsonLD = ({ job }: { job: Career }) => {
  const schema = createJobBreadcrumbSchema(job);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
