import React, { useContext, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import HowItWorks from "./HowItWorks";
import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import Footer from "components/Footer";
import FAQ from "components/FAQ";
import { navigate } from "gatsby";
import { GlobalDispatchContext } from "../../../context/GlobalContextProvider";
import { CTA } from "./CTA";
import { faq, services } from "./data";
import TwoColumn from "components/TwoColumn";
import ThreeColumn from "./ThreeColumn";
import "swiper/css";

const BIMSubmission = ({ pageTitle, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const dispatch = useContext(GlobalDispatchContext);

  const handleDefault = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        show: true,
        message: "Request for BIM Services",
      },
    });
  };

  const imagedata = useStaticQuery(graphql`
    {
      collab: file(relativePath: { eq: "bimcollab.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      clash: file(relativePath: { eq: "bim-collaborate-clash.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      shop: file(relativePath: { eq: "shop-drawings.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let sections = [
    {
      id: "gtm-bim",
      title: "Migrate 2D to 3D",
      content: `Reap the benefits of 3D BIM workflows by converting your 2D CAD files. Our team will work with you to create a 3D model that meets your project requirements.`,
      // linkText: "Benefits of Cloud Collaboration",
      // linkHref:
      //   "/blog/what-is-autodesk-bim-collaborate-pro-delivering-bim-for-your-project/",
      src: imagedata.collab,
      bgColor: "bg-white",
    },
    {
      id: "gtm-review",
      title: "Quality Assurance",
      content: `Run automated clash tests between disciplines to identify and resolve issues before construction begins. Our BIM Managers review BIM models to ensure alignment with project standards such as ISO 19650 or OpenBIM standards.`,
      linkText: "Benefits of Virtual Reviews",
      linkHref: "/blog/idd-ice-meetings/",
      src: imagedata.clash,
    },
    {
      id: "gtm-iso",
      title: "Construction Shop Drawings",
      content: `Construction shop drawings are generated from clash-free BIM models at the Construction Stage. Create typical details, sections, and elevations views with your company's CAD templates.`,
      linkText: "3D to 2D Workflow",
      linkHref: "/services/cad-services",
      src: imagedata.shop,
    },
  ];

  return (
    <div>
      {/* Header */}
      <main>
        {/* Hero Section */}
        <section className="pt-10 md:pt-[57px] pb-9 bg-gray-50">
          <div className="tw-container">
            <div className="relative z-0">
              <BiFolderX className="absolute top-0 hidden left-10 md:block -z-10" />
              <ArrowCube className="absolute left-0 -bottom-[130px] w-[340px] md:block hidden -z-10" />
              <BiFolder3D className="absolute top-0 hidden right-10 md:block -z-10" />
              <VaddinChart3D className="absolute bottom-0 right-0 hidden md:block -z-10" />
              <div className="text-center max-w-[810px] mx-auto py-5 md:py-10">
                <label className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6">
                  <MC3D />
                  Services
                </label>
                <h1 className="mb-5 text-4xl font-extrabold text-black md:text-5xl">
                  {pageTitle}
                </h1>
                <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl">
                  {description}
                </p>
                <div className="flex justify-center items-center gap-2 mt-5 md:mt-8 lg:mt-10 md:gap-4">
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate(`./#how-it-works`)}
                  >
                    How it Works
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us*/}
        <ThreeColumn id="why-us" services={services} />

        {/* Workflows*/}
        <TwoColumn
          title="BIM Workflows"
          description="Our approach to quality BIM delivery"
          sections={sections}
        />

        {/* Our Services */}
        <HowItWorks id="how-it-works" handleDefault={handleDefault} />

        {/* FAQ */}
        <FAQ faqs={faq} />

        {/* CTA */}
        <CTA handleClick={handleDefault} />
      </main>

      <Footer />
    </div>
  );
};

export default BIMSubmission;
