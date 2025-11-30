import React, { useContext, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import HowItWorks from "./HowItWorks";
import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import {
  FaBuildingCircleCheck,
  FaTimeline,
  FaFileVideo,
} from "react-icons/fa6";
import { BsBadgeVr } from "react-icons/bs";
import Footer from "components/Footer";
import { navigate } from "gatsby";
import { GlobalDispatchContext } from "../../../context/GlobalContextProvider";
import { CTA } from "./CTA";
import { faq } from "./data";
import TwoColumn from "components/TwoColumn";
import ThreeColumn from "components/ThreeColumn";
import "swiper/css";

const BIM4D = ({ title, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const dispatch = useContext(GlobalDispatchContext);

  const handleDefault = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        show: true,
        message: "Enquiry about 4D BIM Services",
      },
    });
  };

  const imagedata = useStaticQuery(graphql`
    {
      tender: file(relativePath: { eq: "4d-tender-3.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      site: file(relativePath: { eq: "4d-tender-2.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let sections = [
    {
      id: "gtm-bim",
      title: "Advanced Visualizations",
      content: `Create detailed construction sequences from BIM for tender presentations, project planning, and stakeholder engagement.`,
      linkText: "4D BIM Use Case",
      linkHref:
        "/blog/what-is-4d-bim-and-how-can-it-transform-the-construction-management-process/",
      src: imagedata.tender,
      bgColor: "bg-white",
    },
    {
      id: "gtm-review",
      title: "Virtual Site Planning",
      content: `Visualize construction sequences in context - bring in survey data and BIM models to create a virtual construction site.`,
      linkText: null,
      linkHref: null,
      src: imagedata.site,
    },
  ];

  let services = [
    {
      id: "gtm-bim",
      img: "./3d-bim-black.svg",
      title: "BIM Development",
      description: "Create LOD 300 BIM models for tender submissions",
      href: "/services/cad-services",
      icon: <FaBuildingCircleCheck size={60} />,
    },
    {
      id: "gtm-cost",
      img: "./5d-bim-black.svg",
      title: "Schedule Development",
      description:
        "Import multiple schedule formats like Microsoft Projects or Primavera P6 into BIM",
      href: "/services/construction-drawings",
      icon: <FaTimeline size={60} />,
    },
    {
      id: "gtm-verify",
      img: "./as-built-verification-black.svg",
      title: "Construction Sequencing",
      description: "Combine schedule with BIM for 4D sequencing",
      href: "/services/ifc-submissions",
      icon: <FaFileVideo size={60} />,
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
              <div className="text-center max-w-[810px] mx-auto">
                <label className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6">
                  <MC3D />
                  Services
                </label>
                <h1 className="mb-5 text-4xl font-extrabold text-black md:text-5xl">
                  4D BIM Services
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
          title="Benefits of 4D"
          description="Enhance Project Delivery with Time & Cost Tracking"
          sections={sections}
        />

        {/* Portfolio */}

        {/* FAQ */}
        <section className="py-10 md:py-16 bg-gray-50" id="faq">
          <div className="tw-container">
            <h2 className="text-md text-black font-extrabold -tracking-[0.9px] text-left mb-0">
              Frequently asked questions
            </h2>

            <div className="pb-5 mt-5 space-y-5 border-0 border-b border-gray-200 border-solid md:mt-6 lg:mt-8 md:pb-6 lg:pb-8 md:space-y-6 lg:space-y-8">
              {faq.map((faq) => (
                <div
                  className="flex flex-col items-start gap-3 pt-4 border-0 border-t border-gray-200 border-solid md:gap-6 lg:gap-8 md:pt-5 lg:pt-6 md:flex-row"
                  key={faq.id}
                  id={faq?.section}
                >
                  <div className="md:w-[300px] lg:w-[488px]">
                    <h4 className="mb-0 text-base font-semibold text-black ">
                      {faq.question}
                    </h4>
                  </div>
                  <div className="flex-1">
                    <p className="mb-0 text-sm text-gray-500 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <Compare /> */}
        </section>

        {/* CTA */}
        <CTA handleClick={handleDefault} />
      </main>

      <Footer />
    </div>
  );
};

export default BIM4D;
