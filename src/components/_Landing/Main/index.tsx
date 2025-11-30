import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Services from "./Services";
import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import abb from "assets/images/abb.png";
import cpg from "assets/images/cpg.png";
import sj from "assets/images/sj.png";
import shmz from "assets/images/shmz.png";
import hdb from "assets/images/hdb.png";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import CurlyArrow from "assets/svgs/curly-arrow.svg";
import Project1 from "assets/images/portfolio/water.jpg";
import Project2 from "assets/images/portfolio/rail.jpg";
import Project3 from "assets/images/portfolio/hospital.png";
import Project4 from "assets/images/portfolio/airport.jpg";
import ClimatePro from "assets/images/climatepro.png";
import TerraFirma from "assets/images/terra-firma.png";
import QuoteYellow from "assets/svgs/quote-yellow.svg";
import FeedbackFirst from "assets/images/feedback-1.png";
import FeedbackSecond from "assets/images/feedback-2.png";
import Modal3D from "assets/svgs/threed-model.svg";
import ConstructionSiteFlatline from "assets/svgs/construction-site-flatline.svg";
import ConstructionSiteOutline from "assets/svgs/construction-site-outline.svg";
import Footer from "components/Footer";
import ProjectCosting from "../../../pages/projectCosting";
import Compare from "../../Compare";
import { CTA } from "components/CTA";
import { navigate } from "gatsby";
import data from "./data.json";
import "swiper/css";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";
import Feedback from "components/Feedback";

let sections = [
  {
    title: "Domain Experts in BIM",
    content: [
      "With an active network of 400 experienced BIM professionals, our engineers are adept with leading BIM software like AutoCAD, Revit, Archicad, Tekla, and more.",
      "Source BIM engineers familiar with your industry, whether it's data center design, water projects, or fabrication design.",
    ],
    linkText: "Get Started",
    linkHref: null,
    ImageComponent: Modal3D,
    bgColor: "bg-white",
  },
  {
    title: "Digital Project Delivery",
    content: [
      "Leverage our professional services, technology infrastructure, and tested BIM workflows to digitally deliver your projects.",
      "Take advantage of BIM data throughout Design, Construction, and Operations.",
    ],
    linkText: "Integrated Digital Delivery",
    linkHref: "/services/playbook-contractor",
    ImageComponent: ConstructionSiteFlatline,
    bgColor: "bg-white",
  },
  {
    title: "ISO 19650: Certified",
    content: `Our Quality Management System ensures that you can trust us to deliver quality BIM services. From Design to Construction and Project Handover, we provide reliable BIM services you can trust.`,
    linkText: "About ISO 19650",
    linkHref:
      "/blog/ensuring-compliance-with-iso-19650-standards-in-bim-projects/",
    ImageComponent: ConstructionSiteOutline,
    bgColor: "bg-white",
  },
];

let projectData = [
  {
    src: Project1,
    alt: "project",
    title: "Water Reclamation Plant",
    description:
      "P&ID diagrams were integrated with the BIM model to ensure comprehensive documentation for the O&M phase.",
  },
  {
    src: Project2,
    alt: "Rail Project",
    title: "Cross Island Line",
    description:
      "BIM models were used for 4D scheduling and 5D cost estimation to ensure project delivery on time and within budget.",
  },
  {
    src: Project3,
    alt: "Changi Water Reclamation Plant",
    title: "Health Campus Project",
    description:
      "Legacy CAD drawings were converted to BIM models for clash detection and coordination.",
  },
  {
    src: Project4,
    alt: "Changi Water Reclamation Plant",
    title: "Airport Terminal",
    description:
      "Scan to BIM services were used to create a mesh model and digital twin of the facility",
  },
];

const Main = () => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><span class="pagination-inner"></span></span>'
      );
    },
  };

  const handleQuote = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        contactLayer: true,
        message: "Get a Custom Quote",
      },
    });
  };

  const handleDefault = () => {
    navigate(`/contact`);
  };

  return (
    <div className="font-inter">
      {/* Header */}
      <main>
        {/* Hero Section */}
        <section className="pt-10 md:pt-[57px] pb-9 bg-white">
          <div className="tw-container">
            <div className="relative z-0">
              <BiFolderX className="absolute top-0 hidden left-10 md:block -z-10" />
              <ArrowCube className="absolute left-0 -bottom-[130px] w-[340px] md:block hidden -z-10" />
              <BiFolder3D className="absolute top-0 hidden right-10 md:block -z-10" />
              <VaddinChart3D className="absolute bottom-0 right-0 hidden md:block -z-10" />
              <div className="text-center max-w-[810px] mx-auto">
                <label className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6">
                  <MC3D />
                  BIM SERVICES
                </label>
                <h1 className="mb-4 md:mb-8 text-4xl font-extrabold text-black md:text-5xl">
                  Our Services
                </h1>
                <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl">
                  We provide a range of 2D & 3D services to
                  Architects, Engineers, and Contractors in the
                  built-environment space.
                </p>
                <div className="flex items-center justify-center gap-2 mt-5 md:mt-8 lg:mt-10 md:gap-4">
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate("/#bim-packages")}
                  >
                    Get in Touch
                  </button>
                  {/* <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-shadow-sm bg-black py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate(`/#bim-services`)}
                  >
                    Digital Workflows
                  </button> */}
                </div>
              </div>
            </div>
            {/* <div className="mt-10 md:mt-16 lg:mt-[90px]">
              <p className="text-gray-500 text-sm font-semibold tracking-[0.35px] uppercase text-center mb-0">
                Our Clients
              </p>
              <div className="grid auto-cols-[100px] md:auto-cols-auto md:grid-cols-5 grid-flow-col lg:grid-flow-row gap-3 overflow-x-scroll lg:overflow-x-hidden xl:w-full lg:gap-5 mt-5 items-center">
                <img
                  src={abb}
                  alt="abb"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={cpg}
                  alt="cpg"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={sj}
                  alt="sj"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={shmz}
                  alt="shmz"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={hdb}
                  alt="hdb"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
              </div>
            </div> */}
          </div>
        </section>
        {/* Past Projects */}

        {/* Our Services */}
        <Services id="bim-services" />
        {/* Feedback */}
        <Feedback />
        {/* Why US */}
        <section className="bg-white" id="about">
          <div className="pt-10 md:py-14 lg:py-16">
            <div className="tw-container">
              <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] text-center mb-0">
                Here's why customers love us
              </h2>
            </div>
          </div>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`py-5 md:py-8 ${section.bgColor}`}
            >
              <div className="tw-container">
                <div
                  className={`flex flex-col items-center justify-between w-full gap-4 md:gap-6 lg:gap-8 md:flex-row ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-[400px] lg:w-[500px] xl:w-[600px]">
                    <section.ImageComponent className="h-[250px] sm:h-auto w-[300px] md:w-[400px] lg:w-[500px]" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="mb-2 font-semibold text-black md:text-xl lg:text-2xl lg:mb-3">
                      {section.title}
                    </h3>
                    {Array.isArray(section.content) ? (
                      section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="mb-4 text-sm text-gray-500 md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="mb-0 text-sm text-gray-500 md:text-base">
                        {section.content}
                      </p>
                    )}
                    <div className="mt-5 md:mt-8 lg:mt-10">
                      <button
                        onClick={() =>
                          section.linkHref
                            ? navigate(section.linkHref)
                            : handleDefault()
                        }
                        className="inline-flex transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                      >
                        {section.linkText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="bg-white px-0 py-0 md:px-36 md:pb-10 ">
          <CTA
            header={"Start Your Digital Transformation"}
            ctaText="Contact Us"
            handleClick={() => navigate("/contact")}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
