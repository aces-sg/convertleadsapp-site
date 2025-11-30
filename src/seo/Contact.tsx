import React from "react";
import { createLocalBusinessSchema } from "seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const ContactPageJsonLD = () => {
  const siteMetadata = useSiteMetadata();
  const localBusinessSchema = createLocalBusinessSchema(siteMetadata);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteMetadata.siteUrl}/contact#contactpage/`,
        name: "Contact Bimeco",
        url: `${siteMetadata.siteUrl}/contact/`,
        mainEntityOfPage: {
          "@id": `${siteMetadata.siteUrl}#localbusiness`,
        },
        about: {
          "@id": `${siteMetadata.siteUrl}#localbusiness`,
        },
        publisher: {
          "@id": `${siteMetadata.siteUrl}#localbusiness`,
        },
      },
      localBusinessSchema,
    ],
  };

  let schema = JSON.stringify(contactPageSchema);
  return <script type="application/ld+json">{schema}</script>;
};
