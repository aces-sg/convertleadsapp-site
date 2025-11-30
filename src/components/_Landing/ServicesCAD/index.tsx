import React, { useContext, useRef, useState } from "react";
import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import PortfolioCAD from "components/PortfolioCAD";
import Footer from "components/Footer";
import { navigate } from "gatsby";
import { GlobalDispatchContext } from "../../../context/GlobalContextProvider";
import { CTA } from "./CTA";
import { faq, sections } from "./data";
import FAQ from "components/FAQ";
import Services from "./Services";
import TwoColumn from "components/TwoColumn";
import "swiper/css";

const CADServices = ({ title, description }) => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("");
  const dispatch = useContext(GlobalDispatchContext);

  const handleClaim = () => {
    setCategory("Request for Project Trial");
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        contactLayer: true,
      },
    });
  };

  const handleDefault = () => {
    console.log("Contact us clicked");
    // dispatch({
    //   type: "TOGGLE_CONTACT",
    //   payload: {
    //     show: true,
    //     message: "",
    //   },
    // });
    navigate("/contact");
  };

  const projectUrl = `${process.env.GATSBY_VIEWER_URL}/projects/create`;

  return (
    <div>
      {/* Header */}
      <main>
        {/* Hero Section */}
        <section className="pt-10 md:pt-[57px] pb-9 ">
          <div className="">
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
                  {title}
                </h1>
                <p className="text-lg">{description}</p>
                <div className="flex flex-col justify-center items-center mt-5 md:mt-8 lg:mt-10 md:gap-4">
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    onClick={() => handleDefault()}
                  >
                    Get Started
                  </button>
                  <span
                    onClick={() => handleDefault()}
                    className="font-extralight underline py-0 hover:cursor-pointer text-xs md:text-sm text-black"
                  >
                    From $300 per Drawing*
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Supported /> */}

        <Services />

        <TwoColumn
          title="Our CAD Workflow"
          description="Here's how we ensure quality, same-day updates to your CAD drawings."
          sections={sections()}
        />
        {/* Portfolio */}
        <PortfolioCAD />

        {/* Feedback */}

        {/* FAQ */}
        <FAQ faqs={faq} />

        {/* CTA */}
        <CTA handleClick={handleDefault} />
      </main>

      <Footer />
    </div>
  );
};

export default CADServices;
