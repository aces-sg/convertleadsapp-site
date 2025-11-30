import React, { useContext, useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { GlobalDispatchContext } from "../../../context/GlobalContextProvider";
import CustomHeaderAccordion from "components/_Landing_new/accordion";
import { Box, Tabs, Tab, Grid, Avatar, Text, Button } from "grommet";
import SEO from "components/Seo";
import Footer from "components/Footer";
import Arrow from "assets/svgs/Chevron-right.svg";
import Check from "assets/svgs/Check_circle.svg";
import Data from "./data.yml";
import { getReferrer } from "../../../hooks/utils";
import SoftwareModal from "components/Modal/SoftwareModal";
import Layout from "components/Layout";
import "./index.css";
import { CADSoftwareJsonLD } from "seo/Products";

let annualPrice: number = 2690;
let triPrice: number = annualPrice * 1.2;

const IndexPage = (props) => {
  const [priceChoice, setPriceChoice] = useState(`${annualPrice}`);
  const [showModal, setShowModal] = useState<Boolean | null>(false);
  const [referrer, setReferrer] = useState("");
  const priceSelect = (price: string) => setPriceChoice(price);
  const dispatch = useContext(GlobalDispatchContext);

  const Requirments = styled.div`
    display: grid;
    align-items: top;
    gap: 30px;
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #6b7280;
    }

    b {
      color: #111827;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }

    h3,
    p {
      padding: 0;
      margin: 0;
    }

    @media (min-width: 768px) {
      grid-template-columns: 200px 1fr;
      * {
        padding: 24px 0;
      }
    }
  `;
  const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: #e5e7eb;
  `;

  function sendEmail(recipient, subject, body = "") {
    // Encode the subject and body to ensure special characters are properly handled
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Construct the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;

    // Redirect the user to the mailto link
    window.location.href = mailtoLink;
  }

  const handleDefault = () => {
    let ref: string = getReferrer();
    setShowModal(true);
  };

  return (
    <>
      <Layout>
        {/* Header */}
        <main className="overflow-x-hidden">
          {/* Hero Section */}
          <section>
            <div className="tw-container">
              <div className="hero_inner grid lg:grid-cols-2 gap-12 place-items-center mb-6">
                <div className="pt-10 md:pt-[57px] pb-9">
                  <label className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6 mr-5">
                    BIM Software
                  </label>
                  <Link to="/" className="text-black text-[14px] ">
                    Professional Services <Arrow className="ml-2" />
                  </Link>
                  <h1 className="font-bold text-5xl sm:text-6xl text-black">
                    MicroStation:{" "}
                    <span className="">CAD Software</span> for
                    Engineers.
                  </h1>
                  <p className="text-black font-[20px] leading-5">
                    MicroStation is a professional CAD software for 2D
                    drafting and 3D modeling, widely used for
                    infrastructure design, modelling, and BIM
                    workflows.
                  </p>
                  <div className="flex flex-wrap gap-5 items-center">
                    <button
                      className="rounded-md bg-[#FBDA05] py-3 px-4 font-[500] leading-6 text-[16px] text-black"
                      onClick={() => handleDefault()}
                    >
                      From SGD{annualPrice} / Year
                    </button>
                  </div>
                </div>
                <div>
                  <StaticImage
                    className="w-full h-auto object-contain"
                    src="../../../assets/images/microstation/logo.png"
                    alt="Hero image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Pricing section */}
          <section className="price_section pt-10 md:pt-[57px] pb-9 ">
            <div className="tw-container">
              <div className="text-center">
                <h2 className="font-[800] text-5xl text-gray-900 my-4">
                  CAD Software Price
                </h2>
              </div>

              <div className="Content price_box grid max-w[1234px] bg-white rounded-lg shadow-lg">
                <div className="p-4 md:p-6 lg:p-12">
                  <h3 className="my-0 text-3xl leading-9 font-extrabold text-gray-900">
                    Buy MicroStation
                  </h3>
                  <p className="my-0 text-base leading-6 font-normal text-gray-500"></p>
                  <div className="choice_box grid lg:grid-cols-3 py-[18px]">
                    <div
                      className={
                        "price_card" +
                        (priceChoice == `${annualPrice}`
                          ? " active"
                          : "")
                      }
                      onClick={() => priceSelect(`${annualPrice}`)}
                    >
                      <p className="duration">1 Year</p>
                      <div className="price_cell">
                        <span className="price">${annualPrice}</span>
                        <div className="grid ">
                          <span className="text-sm leading-5 font-normal text-gray-900">
                            SGD / Year
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        "price_card" +
                        (priceChoice == `${triPrice}`
                          ? " active"
                          : "")
                      }
                      onClick={() => priceSelect(`${triPrice}`)}
                    >
                      <p className="duration">3 Year</p>
                      <div className="price_cell">
                        <span className="price">${triPrice}</span>
                        <div className="grid">
                          <span className="text-sm leading-5 font-normal text-gray-900">
                            SGD / Year
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        "price_card" +
                        (priceChoice == "Get Quote" ? " active" : "")
                      }
                      onClick={() => handleDefault()}
                    >
                      <p className="duration">Projects</p>
                      <div className="price_cel">
                        <span className="price">Get Quote</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 items-center">
                      <h4 className="text-sm leading-5 font-semibold tracking-wider uppercase w-fit min-w-36">
                        What’s included
                      </h4>
                      <Divider />
                    </div>
                    <div className="grid lg:grid-cols-2">
                      {Data.price_includs.map((txt: string, i) => (
                        <div className="flex align-center" key={i}>
                          <Check />
                          <span
                            key={i}
                            className="text-sm leading-5 font-normal text-gray-700 ml-5"
                          >
                            {txt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-black p-5 lg:p-12 gap-6 flex flex-col items-center justify-center text-center rounded-br-md	rounded-tr-md	">
                  <div>
                    <div className="flex flex-wrap justify-center gap-2 items-center">
                      <span className="text-3xl leading-none font-extrabold tracking-tight">
                        Not sure what you need?
                      </span>
                    </div>
                    <p className="text-sm leading-5 font-normal text-gray-500">
                      <a href="/contact">Contact us today</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-container bg-gray-100 p-10 max-w-[1234px] rounded-lg mt-9">
              <h3 className="text-sm leading-5 font-medium tracking-wide uppercase text-gray-800 bg-white py-1 px-4 rounded-2xl w-fit">
                About this software subscription
              </h3>
              <p className="text-lg leading-7 font-normal text-gray-800">
                This Virtuoso Subscription includes a 12-month
                practitioner license for this software that comes with
                &nbsp;
                <a
                  href="https://en.virtuosity.com/virtuoso-subscription-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                   Keys 
                </a>
                (credits) to unlock training and services.
              </p>
            </div>
          </section>

          {/* Tabs */}
          <section className="bg-gray-50">
            <div className="tw-container mt-8">
              <Tabs color="green">
                <Tab title="Overview" className="choose_tab">
                  <Box pad="medium" className="py-24">
                    <Grid
                      className="lg:grid-cols-2 justify-center"
                      gap="32px"
                    >
                      <div>
                        <p className="text-[16px] text-[#003591] uppercase font-semibold ">
                          Everything you need
                        </p>
                        <h2 className="text-3xl text-gray-900 font-extrabold">
                          CAD Software for Professionals
                        </h2>

                        <p className="text-lg leading-7 font-normal text-gray-500">
                          With MicroStation, you get:
                        </p>

                        <div className="items grid">
                          {Data.benefits.map((bnf, i: number) => (
                            <div
                              className="singleItem flex gap-5"
                              key={i}
                            >
                              <div className="w-12 box-border	h-12 p-3 bg-[#003591] rounded-md">
                                <img
                                  src={bnf.icon}
                                  loading="lazy"
                                  alt="icon"
                                  className=""
                                />
                              </div>
                              <div>
                                <h3 className="my-0 text-lg text-gray-900 leading-6 font-medium">
                                  {bnf.title}
                                </h3>
                                <p className="text-gray-500 text-base leading-6 font-normal">
                                  {bnf.textShort}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <StaticImage
                          src="../../../assets/images/microstation/image_30.png"
                          alt="Hero image"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </Grid>
                  </Box>
                </Tab>
                <Tab
                  title="Key Features "
                  className="choose_tab"
                  onClick={() => navigate("#features")}
                ></Tab>
                <Tab
                  title="Technical Capabilities "
                  className="choose_tab"
                  onClick={() => navigate("#technical")}
                ></Tab>

                {/* <Tab
                title="Included Software "
                className="choose_tab"
                onClick={() => navigate("#software")}
              ></Tab> */}
                <Tab
                  title="System Requirements "
                  className="choose_tab"
                  onClick={() => navigate("#system-requirements")}
                ></Tab>
              </Tabs>
            </div>
          </section>

          {/* Benefits */}

          <section
            id="features"
            className="benefits tw-container py-16 mt-7"
          >
            <p className="text-[16px] text-[#003591] uppercase font-semibold text-center">
              CAD Software Features
            </p>
            <h2 className="text-3xl text-gray-900 text-center font-extrabold mb-10">
              Key Features
            </h2>

            <Grid className="gap-32">
              {Data.benefits.map((bnf, i: number) => (
                <Grid
                  id={bnf.id}
                  className="md:p-4 lg:p-8 gap-5 lg:gap-12 lg:grid-cols-2"
                  key={i}
                >
                  <Box
                    className={
                      i % 2 === 0 ? "lg:order-0" : "lg:order-1"
                    }
                  >
                    <h3 className="text-3xl text-gray-900  font-extrabold tracking-[-1px] my-3">
                      {bnf.title}
                    </h3>
                    <p className="text-lg">{bnf.text}</p>
                    <div className="my-4">
                      {bnf.cta ? (
                        <Button
                          className="rounded-md bg-[#FBDA05] py-3 px-4 text-black font-[500] leading-6 text-[16px] w-fit"
                          onClick={() => setShowModal(true)}
                        >
                          {bnf.cta.title}
                        </Button>
                      ) : null}
                    </div>
                    {bnf.testimonial ? (
                      <Box
                        className="pt-6 grid gap-3"
                        style={{ borderTop: "1px solid #e5e7eb" }}
                      >
                        <text>{bnf.testimonial.text}</text>
                        <div className="flex flex-row items-center gap-3">
                          <Avatar src="/software/profile.png" />
                          <Text>{bnf.testimonial.author}</Text>
                        </div>
                      </Box>
                    ) : (
                      ""
                    )}
                  </Box>
                  <div
                    className={`image_outer overflow-visible relative ${
                      i % 2 === 0 ? "lg:order-1" : "lg:order-0"
                    }`}
                  >
                    <img
                      src={bnf.image}
                      alt="illustration"
                      className="lg:absolute top-[-40px] w-[90%] lg:w-[100%] block rounded-lg shadow-lg"
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </section>
          {/* Features */}

          <section
            id="technical"
            className="bg-[#FBDA05] relative p-10 mt-20"
          >
            <div className="tw-container">
              <div className=" md:px-8 lg:px-16">
                <p className="text-[16px] text-[#003591] uppercase font-semibold text-center">
                  Technical Capabilities
                </p>
                <h2 className="text-4xl text-gray-900 text-center font-extrabold tracking-tight">
                  Develop detailed design & construction documents
                  with MicroStation.
                </h2>

                <Grid className="p-5 lg:p8 gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
                  {Data.features.map((fr, i: number) => (
                    <div key={i}>
                      <div className="flex items-center  justify-center  w-12 h-12 rounded-md">
                        <img src={fr.icon} loading="lazy" />
                      </div>
                      <h3 className="text-lg text-gray-900 font-[500] ">
                        {fr.title}
                      </h3>
                      <p className="text-base text-gray-600">
                        {fr.text}
                      </p>
                    </div>
                  ))}
                </Grid>
              </div>
              <div></div>
              {/* <div
              style={{ display: "flex", justifyContent: "center" }}
            >
              <StaticImage
                src="../../assets/images/software/Screenshot.png"
                alt="illustration"
                className="-mt-6 md:-mt-16 max-w-screen-md"
              />
            </div> */}
            </div>
          </section>

          <section id="additional_features">
            <div className="tw-container mb-0 mt-16">
              <h2 className=" text-4xl font-extrabold text-gray-900">
                Additional Features
              </h2>
              <hr />
              <div className="p-5 additional_features_accordion">
                <CustomHeaderAccordion
                  data={Data.additional_features}
                />
              </div>
            </div>
          </section>

          {/* Requirments */}
          <section
            id="system-requirements"
            className="pt-8 md:pt-12 lg:pt-20 pb-12 relative"
          >
            <div className="tw-container">
              <div className="md:px-5">
                <p className="text-[16px] text-[#003591] uppercase font-semibold">
                  System Requirements
                </p>
                <h2 className="text-gray-900  font-extrabold tracking-tight text-3xl">
                  Minimum Operating System Specification
                </h2>
                <p className="text-gray-500 text-xl leading-7 font-normal">
                  MicroStation delivers multiple products to users
                  that will have different system requirements. Each
                  software’s minimal requirements are located on the
                  software’s product page. Below is the list of system
                  requirements for MicroStation.
                </p>
                <Requirments>
                  {Data.requirments.map((req, i) => (
                    <>
                      <h3>{req.device}</h3>
                      {req.req ? <p>{req.req}</p> : ""}
                    </>
                  ))}
                  <h3>Operating System</h3>
                  <div className="grid gap-3 py-0">
                    {Data.operating_system.map((os, n) => (
                      <p key={"os" + n}>{os}</p>
                    ))}
                  </div>
                </Requirments>
              </div>
            </div>
          </section>

          {/* VIRTUOSO SUBSCRIPTION  */}
          <section className=" relative">
            <div className="tw-container p-5 lg:p-10 mb-8 rounded-md bg-[#FBDA05] ">
              <div className="md:px-8 lg:px-16">
                <p className="text-sm leading-5 font-medium tracking-wide uppercase text-gray-800 py-1 px-4 bg-white rounded-2xl w-fit">
                  Professional Services
                </p>
                <h2 className="text-4xl text-gray-900  font-extrabold tracking-tight">
                  BIM Support Services
                </h2>
                <p className="">
                  Need help implementing BIM in your project? Leverage
                  Bimeco's professional services, advanced technology
                  infrastructure, and tested workflows on your next
                  project.
                </p>
                <Link
                  to="/pricing"
                  className="bg-black text-white text-base leading-6 font-medium py-[9px] px-[17px] my-4 rounded-md block w-fit"
                >
                  Our Packages
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Layout>

      {/* Footer */}
      <Footer data={Data.footer} />

      {/* CTA */}
      {showModal ? (
        <SoftwareModal
          formTitle="Get a Quote"
          category="software-enquiry"
          setShowModal={setShowModal}
          sku="Microstation Price"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default IndexPage;

export const Head = ({ location }) => (
  <>
    <SEO
      title={"Buy MicroStation | CAD Software for Professionals"}
      description={
        "Buy MicroStation, a professional CAD software for 2D drafting and 3D modeling, widely used for infrastructure design, modelling, and BIM workflows."
      }
      pathname={location.pathname}
    />
    {CADSoftwareJsonLD()}
  </>
);
