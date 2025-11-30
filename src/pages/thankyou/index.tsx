import React from "react";
import Footer from "components/Footer";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { localJsonLD } from "seo";
import { FaCheckCircle } from "react-icons/fa";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import { navigate } from "gatsby";
import Breadcrumbs from "components/Breadcrumbs";

export const BusinessInfo = ({ pathname }: { pathname: string }) => {
  return (
    <div className="flex-column w-full px-6 py-8 sm:px-12 md:px-16 md:py-12">
      <div className="mb-4">
        <Breadcrumbs
          items={[{ label: "Thank You", path: pathname }]}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
        Get in Touch
      </h2>
      <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
        Quality 3D and 2D CAD Services for Your Projects. Reach out to
        us today.
      </p>

      <div className="border border-gray-200 rounded-lg p-1 md:p-2">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          Singapore (Main Office)
        </h3>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
          Operating Hours: Mon-Fri 9am - 6pm SGT (Excludes public
          holidays)
        </p>
        <dl className="mt-2 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
          <div className="flex gap-x-3 md:gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              159 Sin Ming Road Amtech Building Lobby 1, #05-03,
              Singapore 575625
            </dd>
          </div>
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                "https://wa.me/6580834020?text=Hi%2C%20I%27m%20interested%20in%20your%20BIM%20%26%20CAD%20services.%20Could%20you%20share%20more%20details%3F"
              )
            }
          >
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <FaWhatsapp
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              <a className="text-black hover:text-gray-900">
                +65 80834020
              </a>
            </dd>
          </div>
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                "mailto:enquiry@bim.com.sg?Subject=BIM%20CAD%20Enquiry"
              )
            }
          >
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              <a className="text-black hover:text-gray-900">
                enquiry@bim.com.sg
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="border border-gray-200 rounded-lg p-1 md:p-2">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          Technical Support
        </h3>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
          Operating Hours: Mon-Fri 9am - 6pm SGT (Excludes public
          holidays)
        </p>
        <dl className="mt-2 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                "mailto:support@bim.com.sg?Subject=Technical%20Support"
              )
            }
          >
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              <a className="hover:text-gray-900">
                support@bim.com.sg
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default function ThankYou({ location }) {
  return (
    <>
      <Layout location={location}>
        <div className="flex justify-center items-stretch">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-gray-50 flex items-center">
              <BusinessInfo pathname={location.pathname} />
            </div>
            <div className="lg:w-1/2 bg-white flex items-center justify-center">
              <div className="w-full px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 flex flex-col items-center justify-center text-center">
                <FaCheckCircle className="text-green-500 text-6xl mb-6" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-md">
                  We have received your submission and will get in
                  touch with you shortly.
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-8 rounded-md bg-main-primary px-6 py-2.5 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-primary hover:bg-main-primary/80 transition-colors duration-200"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <Footer />
    </>
  );
}

export const Head = ({ location }) => (
  <>
    <SEO
      title="Thank You - Bimeco"
      description="Thank you for contacting us. We have received your submission and will get in touch shortly."
      pathname={location.pathname}
    />
    {localJsonLD()}
  </>
);
