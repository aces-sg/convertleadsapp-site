import React from "react";

const ProductSchema = ({ data, location }) => {
  const software = data.softwareYaml;
  const { name, description, price, slug, image } = software;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    alternateName: `${name} Engineering Software`, // optional keyword help
    operatingSystem: "Windows 10 or higher",
    applicationCategory: "EngineeringApplication",
    softwareVersion: "Latest",
    description: description,
    url: `https://www.bim.com.sg/software/${slug}/`, // canonical link
    image: `${image}`, // your preview image
    publisher: {
      "@type": "Organization",
      name: "Bentley Systems", // or your company if you're the vendor
      url: "https://www.bentley.com/",
    },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "SGD",
      availability: "https://schema.org/InStock",
      url: `https://www.bim.com.sg/software/${slug}/`,
    },
    releaseNotes:
      "Supports IFC export, 3D soil-structure modeling, and groundwater analysis.", // optional but useful
    datePublished: new Date().toISOString().split("T")[0],
    keywords:
      "geotechnical, soil analysis, engineering simulation, BIM, IFC", // helps with search relevance
    applicationSubCategory: "Geotechnical Software", // optional – more precise classification
  };
};

export default ProductSchema;
