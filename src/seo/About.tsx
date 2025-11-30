
const AboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Bimeco",
  url: "https://www.bim.com.sg/about/",
  description: "Bimeco partners with Project Owners, Architects, Engineering Consultancies, and Builders to drive seamless digital delivery workflows since 1996.",
  mainEntity: {
    "@id": "https://www.bim.com.sg#business",
  },
};

export const AboutPageJsonLD = () => {
  const aboutSchema = JSON.stringify(AboutPageSchema);

  return <script type="application/ld+json">{aboutSchema}</script>;
};