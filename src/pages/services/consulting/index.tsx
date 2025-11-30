import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Footer from "components/Footer";
import SEO from "components/Seo";
import Breadcrumbs from "components/Breadcrumbs";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Union from "assets/svgs/services/union.svg";
import Compliance from "assets/svgs/services/compliance.svg";
import Ongoing from "assets/svgs/services/ongoing.svg";

const services = [
  {
    name: "BIM Consultant",
    description:
      "Strategic BIM implementation and project execution planning",
    href: "/services/3d/consultancy",
    features: [
      "BIM strategy",
      "Execution planning",
      "Standards development",
    ],
  },
  {
    name: "IDD Consultant",
    description:
      "Integrated Digital Delivery framework implementation",
    href: "/services/idd",
    features: ["IDD planning", "Digital workflows", "Team training"],
  },
  {
    name: "CORENET X Submission",
    description: "BCA regulatory submission and compliance services",
    href: "/services/corenetx-bim",
    features: [
      "BCA submissions",
      "Code checking",
      "Regulatory coordination",
    ],
  },
  {
    name: "Drone Survey",
    description: "Aerial surveying and site documentation services",
    href: "/services/drone-survey",
    features: [
      "Site mapping",
      "Progress monitoring",
      "Volumetric analysis",
    ],
  },
];

const benefits = [
  {
    icon: Union,
    title: "Deep Industry Expertise",
    description:
      "Over 845 projects delivered since 2005 across infrastructure, commercial, and residential sectors in Singapore.",
  },
  {
    icon: Compliance,
    title: "DDM-Accredited Consultants",
    description:
      "Our consultants are certified in BIM management and familiar with Singapore's CORENET X, IDD, and ISO 19650 requirements.",
  },
  {
    icon: Ongoing,
    title: "Technology Agnostic",
    description:
      "We work with all major BIM platforms (Revit, ArchiCAD, Tekla, Bentley) and integrate with your existing workflows.",
  },
];

export default function ConsultingCategory({ location }) {
  return (
    <Layout location={location}>
      <div>
        <main>
          {/* Hero Section */}
          <section className="py-4 md:pt-[57px] bg-[#FEF4B4]">
            <div className="tw-container pb-10">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { label: "Services", path: "/services" },
                    {
                      label: "Consulting",
                      path: "/services/consulting",
                    },
                  ]}
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-8">
                <div className="w-full lg:w-2/3 lg:order-1">
                  <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                    BIM Consultancy Services
                  </h1>
                  <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl max-w-[500px]">
                    Strategic BIM consultancy, IDD implementation, and
                    CORENET X submission services. Helping teams
                    navigate Singapore's digital delivery
                    requirements.
                  </p>
                  {/* Desktop CTA - Hidden on mobile */}
                  <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 md:mt-8 lg:mt-10">
                    <Link
                      to="/contact"
                      className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    >
                      Get In Touch
                    </Link>
                    <Link
                      to="/services/3d/consultancy"
                      className="text-sm md:text-base text-black font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="w-full lg:w-2/5 lg:order-2 relative">
                  <StaticImage
                    src="../../../assets/images/corenet.webp"
                    alt="BIM & Digital Delivery Consulting"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    placeholder="blurred"
                  />
                </div>
              </div>

              {/* Mobile CTA - Shown only on mobile */}
              <div className="lg:hidden mt-8 text-center">
                <Link
                  to="/contact"
                  className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-6 w-full inline-block"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-16">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
                    Why Choose Us?
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg mb-0">
                    Expert guidance for BIM-based digital delivery
                  </p>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${
                  benefits.length === 2 ? "lg:grid-cols-2" :
                  benefits.length === 3 ? "lg:grid-cols-3" :
                  "lg:grid-cols-4"
                } gap-6 -mb-32`}>
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6"
                        style={{
                          boxShadow:
                            "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#FBDA05] mb-4">
                          <IconComponent />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <div className="py-32"></div>

          {/* Services Grid Section */}
          <section className="py-6 md:py-[40px] lg:py-[80px] bg-gray-100">
            <div className="tw-container">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
                  Our Consulting Services
                </h2>
                <p className="text-gray-500 text-base md:text-lg">
                  Strategic guidance and implementation support for
                  digital delivery
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="bg-white rounded-xl p-6"
                    style={{
                      boxShadow:
                        "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold leading-8 text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm leading-6 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-x-3 text-sm"
                        >
                          <CheckCircleIcon
                            className="h-6 w-5 flex-none text-green-600"
                            aria-hidden="true"
                          />
                          <span className="text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="block rounded-md bg-brand-500 px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-brand-400 transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="tw-container mt-16 mb-16">
            <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg justify-between">
              <div className="md:w-7/10 p-8">
                <h3 className="text-xl font-bold mb-2">
                  Ready to Transform Your Digital Delivery?
                </h3>
                <p className="text-gray-500 mb-6">
                  Partner with BCA-accredited consultants to implement
                  robust BIM strategies and navigate Singapore's IDD
                  requirements.
                </p>

                <div className="flex items-center mb-4">
                  <span className="font-medium mr-2">
                    What's Included
                  </span>
                  <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "BCA-accredited consultants",
                    "IDD & CORENET X expertise",
                    "ISO 19650 implementation",
                    "Technology-agnostic approach",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-3/10 bg-gray-50 p-12 flex flex-col justify-center">
                <p className="text-gray-500 text-sm mb-2 min-w-[180px] text-center">
                  Starting from
                </p>
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Contact for Quote
                </h3>
                <Link
                  to="/contact"
                  className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px] w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO
    title="BIM & Digital Delivery Consulting - IDD, CORENET X & BIM Strategy"
    description="Expert BIM consultancy in Singapore. IDD implementation, CORENET X submissions, and strategic BIM planning. BCA-accredited consultants with 845+ projects delivered."
    pathname={location.pathname}
  />
);
