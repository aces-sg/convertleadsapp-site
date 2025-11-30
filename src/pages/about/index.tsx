import React from "react";
import { useState } from "react";
import bimstaff from "assets/images/aceplp/bimstaff.png";
import autocadworking from "assets/images/aceplp/autocadworking.png";
import ivan from "assets/images/profiles/ivan.jpg";
import sulatt from "assets/images/profiles/sulatt.png";
import ben from "assets/images/profiles/ben.jpeg";
import darshiini from "assets/images/profiles/darshiini-pillai.jpeg";
import fathiah from "assets/images/profiles/fathiah-mohd-shah.jpeg";
import faiz from "assets/images/profiles/faiz-zalani.jpeg";
import rose from "assets/images/profiles/rosette.jpeg";
import kimberly from "assets/images/profiles/kimberly.jpg";
import jhonalyn from "assets/images/profiles/jhonalyn.jpg";
import bentleyLogo from "assets/images/logos/bentley-partner-bimeco.png";
import bizSafeLogo from "assets/images/logos/bizsafe-bimeco.png";
import stasLogo from "assets/images/logos/stas-registry-bimeco.png";
import isoLogo from "assets/images/logos/iso-9001-bimeco.png";
import Layout from "components/Layout";
import Footer from "components/Footer";
import LogoCloud from "components/_Landing/BIMServices/LogoCloud";
import { AboutPageJsonLD } from "seo/About";
import SEO from "components/Seo";

const stats = [
  { label: "Delivered since 2005", value: "845 projects" },
  { label: "BIM Professionals in our Network", value: "407" },
  { label: "Engage our BIM services annually", value: "300+ Firms" },
];

const values = [
  {
    name: "Customer Obsession",
    description:
      "We work closely with customers to clearly define project objectives and timelines, determining the best approach to achieving project goals.",
  },
  {
    name: "Technology Leadership",
    description:
      "We continuously stay at the forefront of the latest digital delivery technologies to facilitate Design, Construction, and Operational workflows.",
  },
  {
    name: "Cost Effectiveness",
    description:
      "We leverage automation technology and efficient processes to drive down design, compliance, and operational costs, delivering maximum value to our customers without compromising quality.",
  },
];
const team = [
  {
    name: "Ivan Tang",
    role: "Director, Digitalization",
    imageUrl: ivan,
  },
  {
    name: "Su Latt Tun",
    role: "BIM Manager",
    imageUrl: sulatt,
  },
  {
    name: "Ben Doctorelo",
    role: "BIM Coordinator",
    imageUrl: ben,
  },
  {
    name: "Darshiini Pillai",
    role: "BIM Coordinator",
    imageUrl: darshiini,
  },
  {
    name: "Fathiah Mohd Shah",
    role: "BIM Coordinator",
    imageUrl: fathiah,
  },
  {
    name: "Faiz Zalani",
    role: "BIM Coordinator",
    imageUrl: faiz,
  },
  {
    name: "Rosette Pasagnan",
    role: "Resource Manager",
    imageUrl: rose,
  },
  {
    name: "Kimberly",
    role: "Resource Manager",
    imageUrl: kimberly,
  },
  {
    name: "Jhonalyn Martell",
    role: "Resource Manager",
    imageUrl: jhonalyn,
  },
];

const certifications = [
  {
    name: "Bentley Channel Partner",
    description:
      "Authorized reseller and implementation partner for Bentley Systems solutions",
    logo: bentleyLogo,
  },
  {
    name: "STAS Registry",
    description:
      "Registered on Security Trustmark for Adoption Scheme registry for digital security and compliance",
    logo: stasLogo,
  },

  {
    name: "bizSAFE Level 3",
    description: "Workplace safety and health certification",
    logo: bizSafeLogo,
  },
  {
    name: "ISO 9001:2015",
    description: "Quality management system certification",
    logo: isoLogo,
  },
];

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Layout>
        <main className="isolate">
          {/* Hero section */}
          <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                  Your Trusted Partner in Digital Project Delivery
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-gray-600">
                    Bimeco partners with Project Owners, Architects,
                    Engineering Consultancies, and Builders to drive
                    seamless digital delivery workflows. Our BIM
                    consultants develop and implement digital
                    strategies that enhance design coordination,
                    improve project management efficiency, and support
                    long-term asset management.
                  </p>
                </div>
                <img
                  alt="headshot of a BIM staff"
                  src={autocadworking}
                  className="mt-10 aspect-[7/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                />
              </div>
              {/* Logo cloud */}
              <LogoCloud />
            </div>
          </div>

          {/* Content section */}
          <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-w-2xl">
                Our Mission
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    To empower the built environment industry with
                    cutting-edge digital delivery solutions that
                    transform how projects are designed, constructed,
                    and managed.
                  </p>
                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                    <p>
                      Established in 1996, Bimeco has supported
                      numerous infrastructure digitalization
                      initiatives, including the Changi Water
                      Reclamation Plant, Tuas Water Reclamation Plant,
                      the iconic Changi Jewel, and major Rail & Road
                      projects such as the Thomson–East Coast Line.
                    </p>
                    <p className="mt-6">
                      Our network of digitally savvy professionals
                      works hand-in-hand with project teams to
                      implement robust digital delivery workflows that
                      drive efficiency and ensure project success.
                    </p>
                  </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt className="text-base leading-7 text-gray-600">
                          {stat.label}
                        </dt>
                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              alt="BIM team working on digital project delivery"
              src={bimstaff}
              className="aspect-[5/2] w-full object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Values section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Bimeco?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                These core principles guide everything we do, from how
                we work with clients to how we approach every project
                challenge.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name}>
                  <dt className="font-semibold text-gray-900">
                    {value.name}
                  </dt>
                  <dd className="mt-1 text-gray-600 ml-0">
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Certifications section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Certifications & Partnerships
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Our certifications and partnerships demonstrate our
                commitment to quality, safety, and industry-leading
                technology solutions.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  {cert.logo && (
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-20 w-auto object-contain mb-4"
                    />
                  )}
                  <h3 className="font-semibold text-gray-900">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Meet the experienced professionals driving digital
                transformation in the built environment industry.
              </p>
            </div>
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-12 gap-y-20 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-x-16">
              {team.map((person) => (
                <div key={person.name}>
                  <img
                    alt={person.name}
                    src={person.imageUrl}
                    className="mx-auto size-24 rounded-full object-cover"
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Transform Your Project Delivery?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Partner with Bimeco to implement robust digital
                delivery workflows that drive efficiency and ensure
                project success.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-brand-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-brand-400 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/#core-services"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stopColor="#FBDA05" />
                    <stop offset={1} stopColor="#FDD51A" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </Layout>

      {/* Footer */}
      <Footer />
    </>
  );
}

export const Head = ({ location }) => (
  <>
    <SEO
      title="About Us - Your Trusted BIM & Digital Delivery Partner"
      description="Since 1996, Bimeco has delivered 845+ projects with 407 BIM professionals. We partner with architects, engineers, and contractors for digital project delivery excellence."
      pathname={location.pathname}
    />
    {AboutPageJsonLD()}
  </>
);
