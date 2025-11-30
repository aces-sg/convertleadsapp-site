import React from "react";

interface ServiceJsonLdProps {
  title: string;
  description: string;
}

export const ServicesSchemaMarkupComponent = ({
  title,
  description,
}: ServiceJsonLdProps) => {
  let schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: title || "BIM Services",
    description:
      description ||
      "Bimeco provides 2D & 3D BIM services to Architects, Engineers, and Contractors in the built-environment sector.",
    provider: {
      "@type": "Organization",
      name: "Bimeco",
      url: "https://www.bim.com.sg",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Singapore",
    },
    url: "https://www.bim.com.sg/services/",
  });
  return <script type="application/ld+json">{schema}</script>;
};
