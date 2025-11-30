import React, { useState } from "react";
import PlaybookforContractors from "components/_Landing/BIMServices";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { HiArrowLeft } from "react-icons/hi";
import { localJsonLD, websiteJsonLD } from "seo";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { useAnalytics } from "hooks/useAnalytics";

const title = "Digital Delivery & BIM Compliance Experts";
const description =
  "Streamlining Construction Projects Through Expert BIM Management, ISO 19650 Compliance, Digital Delivery Consultancy, and Proven Technology Solutions.";

const HomePage = () => {
  const [showModal, setShowModal] = useState(true);
  const [category, setCategory] = useState<string | null>(null);
  const { trackClick } = useAnalytics();

  const handleHeroCTA = (buttonId: string) => {
    trackClick("cta_click", {
      event_category: "cta",
      event_label: `home-${buttonId}`,
      page_location: "homepage_hero",
      destination_url: "/contact",
    });
    navigate("/contact");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-4 md:pt-[57px] bg-[#FEF4B4]">
        <div className="tw-container pb-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-8">
            <div className="w-full lg:order-1">
              <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mb-0 text-gray-500 md:text-xl max-w-[500px]">
                {description}
              </p>
              {/* Desktop CTA - Hidden on mobile */}
              <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 md:mt-8 lg:mt-10">
                <button
                  id="home-hero-cta-desktop"
                  type="button"
                  className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                  onClick={() => handleHeroCTA("hero-cta-desktop")}
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Hero Section - Image */}
            <div
              id="landing-image"
              className="w-full sm:max-w-300px lg:order-2"
            >
              <StaticImage
                src="../assets/images/bim-plant-landing.png"
                alt={title}
                className="rounded-lg shadow-lg overflow-hidden"
                placeholder="blurred"
                quality={95}
              />
            </div>
          </div>

          {/* Mobile CTA - Shown only on mobile, below hero image */}
          <div className="lg:hidden mt-8 text-center">
            <button
              id="home-hero-cta-mobile"
              type="button"
              className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-6 w-full"
              onClick={() => handleHeroCTA("hero-cta-mobile")}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
      <PlaybookforContractors
        title="BIM Services"
        description={description}
      />
    </Layout>
  );
};

export default HomePage;

export const Head = ({ location }) => (
  <>
    <SEO
      title={title}
      description={description}
      pathname={location.pathname}
    />
    {localJsonLD()}
    {websiteJsonLD()}
  </>
);
