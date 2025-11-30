import React from "react";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { navigate } from "gatsby";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import Fast from "assets/svgs/services/fast.svg";
import Compliance from "assets/svgs/services/compliance.svg";
import Ongoing from "assets/svgs/services/ongoing.svg";
import Check from "assets/svgs/Check.svg";
import { HiArrowLeft } from "react-icons/hi";
import Footer from "components/Footer";
import { useStaticQuery, graphql } from "gatsby";

import { CTA } from "components/CTA";
import FAQ from "components/FAQ";
import data from "./data.json";
import HowItWorksProcess from "components/HowItWorksProcessWalkthrough";
import { VirtualTourJsonLD } from "seo/Services";

import VideoPlayer from "components/VideoPlayer";

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
        relativePath: { eq: "services/constructionSiteFlatline.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      twin: file(relativePath: { eq: "services/modal3D.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let sections = [
    {
      id: "gtm-bim",
      title: "From CAD to BIM",
      content: `We believe CAD plans remain a vital part of the project development lifecycle. Our team works with architects, engineers, and contractors to transform sketches, CAD files, and PDFs into accurate 3D models. Collaborate with our BIM Coordinators to generate plans, elevations, and section drawings directly from the 3D model.`,
      linkText: "The 3D Advantage",
      linkHref: "/blog/idd-ice-meetings",
      src: imagedata.clash,
      bgColor: "bg-white",
    },
    {
      id: "gtm-review",
      title: "Live Collaboration",
      content: `Monitor our 3D BIM modeling progress in real-time. Mark up problematic areas directly on the 3D model to help our BIM Coordinators quickly locate and resolve issues. Stay on top of all outstanding tasks with a centralized project dashboard.`,
      linkText: "Live Collaboration with BIMCollab",
      linkHref: "/blog/idd-ice-meetings",
      src: imagedata.construct,
    },
    {
      id: "gtm-iso",
      title: "Any BIM Software",
      content: `Each BIM software has its own unique advantages and workflows. With a network of over 150 BIM engineers, we can match you with specialists across all major platforms, including Revit, ArchiCAD, Tekla, OpenBuildings, and OpenBIM.`,
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
                    3D Virtual Tour & Walkthrough
                  </h1>
                  <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl">
                    Create immersive virtual tours & walkthrough with
                    BIM. Ideal for showcasing your projects to
                    clients, stakeholders, and the public.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-5 md:mt-8 lg:mt-10 md:gap-4">
                    <button
                      type="button"
                      className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                      onClick={() => navigate("#view-tour")}
                    >
                      Virtual Showcase
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
                  Discover why industry professionals trust us for
                  immersive, accurate 3D virtual tours.
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
                    <Fast />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Immersive Experience
                  </h3>
                  <p className="text-gray-500 text-sm">
                    With our 3D virtual tours, your customers can
                    explore products and spaces in an immersive,
                    interactive 3D environment.
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
                    High Quality Render
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Enhancing client presentations and marketing
                    materials with high-quality 3D renderings.
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
                    <Ongoing />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Unlimited Revisions
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Adjust, refine, and perfect your 3D virtual tour
                    until it meets your exact specifications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="view-tour"
            className="py-10 md:py-[70px] lg:py-[100px] bg-white"
          >
            <div className="tw-container mt-32 max-w-8xl mx-auto">
              <VideoPlayer
                bucketName="d14s2iums0fe7u.cloudfront.net"
                videoKey="videos/architecture-walkthrough.mp4"
                autoPlay={true}
                controls
              />
            </div>
            <div className="tw-container mt-4">
              <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg justify-between">
                <div className="md:w-7/10 p-8 ">
                  <h3 className="text-xl font-bold mb-2">
                    Create Your 3D Virtual Tour
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Enhance your projects with our 3D virtual tours
                    and walkthroughs. Perfect for showcasing your
                    designs to clients,
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
                        Animated Walkthrough
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Check />
                      <span className="ml-3">3D Models</span>
                    </div>
                    <div className="flex items-center">
                      <Check />
                      <span className="ml-3">
                        Video Hosting Service
                      </span>
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

          <HowItWorksProcess
            title="How It Works"
            description="Here's our approach to create your 3D virtual tour"
          />

          <FAQ faqs={data.faq} />

          <div className="px-0 py-0 md:px-36 md:pb-10 ">
            <CTA
              header={"Start Your Digital Transformation"}
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
      title="3D Services | Immersive Virtual Tours & Walkthroughs"
      description="Explore our 3D services including immersive virtual tours, walkthroughs, and BIM modelling. Enhance your projects with our expert 3D solutions."
      pathname={location.pathname}
    />
    {VirtualTourJsonLD()}
  </>
);
