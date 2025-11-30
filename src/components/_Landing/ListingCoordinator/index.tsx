import React, { useContext } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import Footer from "components/Footer";
import Feedback from "components/Feedback";
import Portfolio from "./Portfolio";
import data from "./data.json";
import GridList from "./GridList";
import "swiper/css";

interface SEOInterface {
  title: string;
  description: string;
  pageTitle?: string;
  gridTitle?: string;
  portfolioTitle?: string;
}

export const ListingManager = ({
  title,
  description,
  pageTitle,
  gridTitle,
  portfolioTitle,
}: SEOInterface) => {
  return (
    <div id="gtm-top">
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
                  BIM Services
                </label>
                <h1 className="mb-5 text-4xl font-extrabold text-black md:text-5xl">
                  {pageTitle || title}
                </h1>
                <div className="text-gray-800">{description}</div>
                <div className="flex flex-col items-center justify-center w-full gap-4 mt-5 md:flex-row md:mt-8 lg:mt-10">
                  <button
                    type="button"
                    className="w-full max-w-xs md:max-w-none md:w-auto transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate(`/services`)}
                  >
                    Our Services
                  </button>
                  <button
                    type="button"
                    className="w-full max-w-xs md:max-w-none md:w-auto transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)] bg-black py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate(`/contact`)}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-16 lg:mt-[90px]">
              <p className="text-gray-500 text-sm font-semibold tracking-[0.35px] uppercase text-center">
                Companies We Work With
              </p>
              <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-12 lg:max-w-none lg:grid-cols-5 ">
                <StaticImage
                  src={`../../../assets/images/logos/abb.webp`}
                  alt="abb"
                  objectFit="cover"
                  loading="lazy"
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
                />
                <StaticImage
                  src={`../../../assets/images/logos/sj.webp`}
                  alt="abb"
                  objectFit="cover"
                  loading="lazy"
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
                />
                <StaticImage
                  src={`../../../assets/images/logos/siemens.jpg`}
                  alt="abb"
                  objectFit="cover"
                  loading="lazy"
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
                />
                <StaticImage
                  src={`../../../assets/images/logos/hdb.webp`}
                  alt="abb"
                  objectFit="cover"
                  loading="lazy"
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
                />
                <StaticImage
                  src={`../../../assets/images/logos/st-engineering.png`}
                  alt="abb"
                  objectFit="cover"
                  loading="lazy"
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Past Projects */}

        {/* Our Services */}
        <GridList gridTitle={gridTitle} className="tw-container" />

        {/* PORTFOLIO */}
        <Portfolio portfolioTitle={portfolioTitle} />

        {/* FAQ */}
        <section className="py-10 md:py-16 bg-gray-50" id="faq">
          <div className="tw-container">
            <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] text-left mb-0">
              Frequently asked questions
            </h2>

            <div className="pb-5 mt-5 space-y-5 border-0 border-b border-gray-200 border-solid md:mt-6 lg:mt-8 md:pb-6 lg:pb-8 md:space-y-6 lg:space-y-8">
              {data.faq.map((faq) => (
                <div
                  className="flex flex-col items-start gap-3 pt-4 border-0 border-t border-gray-200 border-solid md:gap-6 lg:gap-8 md:pt-5 lg:pt-6 md:flex-row"
                  key={faq.id}
                >
                  <div className="md:w-[300px] lg:w-[488px]">
                    <p className="mb-0 text-base font-semibold text-black ">
                      {faq.question}
                    </p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};
