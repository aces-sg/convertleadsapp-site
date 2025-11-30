import React from "react";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { navigate } from "gatsby";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import Compliance from "assets/svgs/services/compliance.svg";
import Check from "assets/svgs/Check.svg";
import { HiArrowLeft } from "react-icons/hi";
import Feedback from "components/Feedback";
import Footer from "components/Footer";
import { useStaticQuery, graphql } from "gatsby";
import Portfolio from "components/Portfolio";
import TwoColumn from "components/TwoColumn";
import { CTA } from "components/CTA";
import FAQ from "components/FAQ";
import data from "./data.json";
import HowItWorksProcess from "components/HowItWorksProcessConsultant";
import ToolsTechnologies from "components/ToolsTechnologies";
import VideoPlayer from "components/VideoPlayer";
import { BimConsultancyJsonLD } from "seo/Services";

const ServicesBIMModelling = ({ location }) => {
  const pathname = location.pathname;

  const imagedata = useStaticQuery(graphql`
    {
      clash: file(relativePath: { eq: "bimcollab-clash.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      construct: file(
        relativePath: { eq: "synchro/synchro-4d-scheduling.png" }
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
      content: `Deliver submission-ready models for CORENET X: coordinated, clash-free Architecture, Structural, and MEP models. Ensure designs comply fully with local building codes.`,
      linkText: "CORENET X vs CORENET 2.0",
      linkHref: "/blog/corenetx-vs-corenet2",
      src: imagedata.clash,
      bgColor: "bg-white",
    },
    {
      id: "gtm-review",
      title: "Virtual Design & Construction",
      content: `Onboard your supply chain into an ISO 19650–compliant BIM Common Data Environment (CDE). Track project progress with 4D, 5D, and 6D BIM workflows.`,
      linkText: "BIM Common Data Environment",
      linkHref: "/software/projectwise",
      src: imagedata.construct,
    },
    {
      id: "gtm-iso",
      title: "Digital Twins for Facility Management",
      content: `Deliver added value to asset operators with a BIM digital twin. Align the construction model with as-built conditions. Integrate asset information with COBie for Facilities Management (FM) to facilitate asset operations.`,
      linkText: "Asset Management Software",
      linkHref: "/software/odoo/cmms",
      src: imagedata.twin,
    },
  ];

  return (
    <Layout pathname={pathname}>
      <div>
        <main>
          <section className="pt-10 md:pt-[57px] bg-[#FEF4B4]">
            <div className="tw-container mb-10">
              <div className="relative z-0">
                <BiFolderX className="absolute top-0 hidden left-10 md:block -z-10" />
                <ArrowCube className="absolute left-0 -bottom-[130px] w-[340px] md:block hidden -z-10" />
                <BiFolder3D className="absolute top-0 hidden right-10 md:block -z-10" />
                <VaddinChart3D className="absolute bottom-0 right-0 hidden md:block -z-10" />
                <div className="text-center max-w-[810px] mx-auto">
                  <label
                    className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6 cursor-pointer hover:bg-main-primary/90 transition-colors"
                    onClick={() => navigate("/services/3d")}
                  >
                    <HiArrowLeft className="w-4 h-4" />
                    3D Services
                  </label>
                  <h1 className="mb-4 md:mb-8 text-4xl font-extrabold text-black md:text-5xl">
                    BIM Consultants Singapore
                  </h1>
                  <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl">
                    From Design to Construction to Handover, work with
                    experienced BIM Consultants to comply with local
                    BIM requirements and standards.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-5 md:mt-8 lg:mt-10 md:gap-4">
                    <button
                      type="button"
                      className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                      onClick={() => navigate("/contact")}
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-container relative z-10">
              <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
                  Why Choose Us?
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-0">
                  Here's why firms work with our BIM consultants
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mb-32">
                <div
                  className="bg-white rounded-xl p-6"
                  style={{
                    boxShadow:
                      "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FBDA05] mb-4">
                    <FaBriefcase />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Certified Professionals
                  </h3>
                  <p className="text-gray-500 text-sm">
                    All coordinators are DDM-certified and have 3+
                    years’ experience coordinating Architecture,
                    Structural, and MEP models.
                  </p>
                </div>
                <div
                  className="bg-white rounded-xl p-6"
                  style={{
                    boxShadow:
                      "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FBDA05] mb-4">
                    <Compliance />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    ISO 19650 Compliant
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Ensure 3D models comply with URA, BCA, and SCDF
                    requirements, meeting IFC+SG & CORENET standards
                    for BIM submissions.
                  </p>
                </div>
                <div
                  className="bg-white rounded-xl p-6"
                  style={{
                    boxShadow:
                      "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FBDA05] mb-4">
                    <MdOutlineSupportAgent size={25} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    On-site Support
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Set weekly calls and on-site walkdowns to
                    coordinate trades and resolve issues early
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 md:py-[70px] lg:py-[100px] bg-white">
            <div className="tw-container mt-12 max-w-8xl mx-auto text-center"></div>
            <div className="tw-container mt-4">
              <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg justify-between">
                <div className="md:w-7/10 p-8 ">
                  <h3 className="text-xl font-bold mb-2">
                    Top BIM Consultants in Singapore
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Get end-to-end BIM compliance support with our
                    expert BIM Coordinators and ISO 19650 Compliant
                    BIM Data Environment.
                  </p>

                  <div className="flex items-center mb-4">
                    <span className="font-medium mr-2">
                      WHAT'S INCLUDED
                    </span>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <Check />
                      <span className="ml-3">
                        Certified BIM Teams
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check />
                      <span className="ml-3">
                        CORENET X Submissions
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check />
                      <span className="ml-3">
                        ISO 19650 Compliant
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check />
                      <span className="ml-3">BIM Software</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/10 bg-gray-50 p-12 flex flex-col justify-center">
                  <p className="text-gray-500 text-sm mb-2 min-w-[180px] text-center">
                    Ready to get started?
                  </p>
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Let's Talk
                  </h3>
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px] w-full md:w-auto"
                    onClick={() => navigate("/contact")}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </section>

          <Feedback />

          <HowItWorksProcess
            title="How It Works"
            description="Here's our approach to quality BIM delivery"
          />

          <ToolsTechnologies
            title="Tools & Technologies"
            description="BIM tools like SketchUp, Revit, ArchiCAD, and Tekla have their unqiue advantages. We know how to use them all."
          />

          <TwoColumn
            title="Benefits of BIM"
            description="Uses of BIM from Design, Construction, to Operations"
            sections={sections}
          />

          <Portfolio />

          <FAQ faqs={data.faq} />

          <div className="px-0 py-0 md:px-36 md:pb-10 ">
            <CTA
              header={"Need a BIM Consultant?"}
              ctaText="Contact Us"
              handleClick={() => navigate("/contact")}
            />
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default ServicesBIMModelling;

export const Head = ({ location }) => (
  <>
    <SEO
      title="BIM Consultant Companies in Singapore | Bimeco"
      description="Bimeco provides ISO 9001–certified, ISO 19650–aligned BIM consultancy services. We deliver project-based BIM implementation and consultancy support."
      pathname={location.pathname}
    />
    {BimConsultancyJsonLD()}
  </>
);
