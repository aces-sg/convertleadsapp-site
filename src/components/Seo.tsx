import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SEOInterface {
  title: string;
  description: string;
  pathname?: string;
  children?: React.ReactNode;
}

const SEO = ({
  title,
  description,
  pathname,
  children,
}: SEOInterface) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
    favicon,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    favicon: `${siteUrl}${favicon}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };
  //

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={seo.favicon} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  );
};

export default SEO;
