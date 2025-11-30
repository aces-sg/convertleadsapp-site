import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navigate } from "gatsby";
import LogoCloud from "./LogoCloud";
import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import Footer from "components/Footer";
import Feedback from "components/Feedback";
import Portfolio from "components/Portfolio";
import TwoColumn from "components/TwoColumn";
import Services from "./Services";
import OurServices from "components/OurServices";
import { CTA } from "components/CTA";
import FAQ from "components/FAQ";
import data from "./data.json";
import "swiper/css";
import { SEOProps } from "../../../types";
import { useAnalytics } from "hooks/useAnalytics";

const PlaybookForContractors = ({ title, description }: SEOProps) => {
  const { trackClick } = useAnalytics();

  const imagedata = useStaticQuery(graphql`
    {
      schematic: file(relativePath: { eq: "schematic.webp" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      clash: file(relativePath: { eq: "bimcollab-clash.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      construct: file(
        relativePath: { eq: "projectwise/projectwise-clash.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      twin: file(relativePath: { eq: "digital-twin.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let sections = [
    {
      id: "gtm-bim",
      title: "Design Compliance",
      content: `Ensure full compliance with local Accessibility, Safety, and Sustainability codes by leveraging comprehensive 3D analytical models. Deliver BIM outputs and tender drawings within an ISO 19650–compliant data environment, ensuring accuracy, consistency, and traceability across all project stages.`,
      linkText: "Regulatory Compliance with CORENET X",
      linkHref: "/services/corenetx-bim",
      src: imagedata.clash,
      bgColor: "bg-white",
    },
    {
      id: "gtm-review",
      title: "Integrated Digital Delivery",
      content: `Enable digital construction workflows with 3D, 4D & 5D BIM. Mitigate project risk by building virtually before construction. Work with our team to create constructible BIM models that facilitate advanced digital construction workflows.`,
      linkText: "Solutions for Contractors",
      linkHref: "/services/idd",
      src: imagedata.construct,
    },
    {
      id: "gtm-iso",
      title: "Digital Twins for Operations",
      content: `Enhance the operational performance of your assets with infrastructure digital twins. Incorporate real-time data from IoT sensors and other sources to create a 3D twin of your asset. Use the digital twin to monitor and optimize the performance of your asset.`,
      linkText: "Solutions for Asset Owners",
      linkHref: "/blog/bim-digital-twins/",
      src: imagedata.twin,
    },
  ];

  return (
    <div id="gtm-top" className="font-inter">
      {/* Header */}
      <main>
        <LogoCloud />
        {/* Past Projects */}

        {/* BIM Workflows */}
        <Services id="bim-workflows" />

        {/* Feedback */}
        <Feedback />

        {/* Our Services */}
        <OurServices />

        {/* PORTFOLIO */}
        <Portfolio />

        {/* Why US */}
        <TwoColumn
          title="Benefits of BIM"
          description="Here's how BIM is used to enhance project delivery"
          sections={sections}
        />

        <div className="px-0 py-0 md:px-36 md:pb-10 ">
          <CTA
            id="home-cta-bottom"
            header={"Start Your Digital Transformation"}
            ctaText="Contact Us"
            handleClick={() => {
              trackClick('cta_click', {
                event_category: 'cta',
                event_label: 'home-cta-bottom',
                page_location: 'homepage_bottom',
                destination_url: '/contact',
              });
              navigate("/contact");
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlaybookForContractors;
