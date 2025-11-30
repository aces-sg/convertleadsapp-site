import React from "react";
import { graphql, navigate, Link } from "gatsby";
import { HiArrowLeft } from "react-icons/hi";

import SEO from "components/Seo";
import Layout from "components/Layout";
import Footer from "components/Footer";
import { CTA } from "components/CTA";
import FAQ from "components/FAQ";
import faq from "content/faqBto.yaml";

export default function ServiceTemplate({ data, location }) {
  const estate = data.estatesYaml;
  const { name, shortcode, urlCad, url3D } = estate;
  const urlImage = `https://d14s2iums0fe7u.cloudfront.net/hdb/image/${shortcode}.webp`;
  const urlBrochure = `https://d14s2iums0fe7u.cloudfront.net/hdb/brochures/${shortcode}.pdf`;

  const pathname = location.pathname;

  return (
    <Layout pathname={pathname}>
      <div>
        <main>
          <section className="pt-10 md:pt-[57px] bg-[#FEF4B4] pb-10">
            <div className="tw-container pb-10">
              <div className="flex justify-between mx-auto">
                <div className="">
                  <label
                    className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6 cursor-pointer hover:bg-main-primary/90 transition-colors"
                    onClick={() => navigate("/interior/bto")}
                  >
                    <HiArrowLeft className="w-4 h-4" />
                    View All BTO
                  </label>
                  <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-3xl">
                    Floorplans, CAD and 3D models for <br></br> {name}
                  </h1>
                  <p className="flex mb-0 text-sm text-gray-500 md:text-base lg:text-xl max-w-[450px]">
                    Starting on your home renovation journey? Having
                    detailed CAD plans and 3D models is essential for
                    a smooth process.
                  </p>
                  <div className="flex items-center gap-12 mt-5 md:mt-8 lg:mt-10 md:gap-12">
                    {urlBrochure && (
                      <a
                        href={urlBrochure}
                        download
                        className="inline-block transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                        target="_blank"
                      >
                        Download Brochure
                      </a>
                    )}
                    {urlCad ? (
                      <Link className="underline" to={urlCad}>
                        View CAD Plans
                      </Link>
                    ) : (
                      <Link
                        className="underline hover:cursor-pointer"
                        to="/interior/bto/create"
                      >
                        Request for 3D Model
                      </Link>
                    )}
                  </div>
                </div>

                <div
                  id="landing-image"
                  className="w-full max-w-[400px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[500px] relative"
                >
                  <img
                    src={urlImage}
                    alt={`${name} Floorplan`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Replace with fetched or hardcoded FAQ content */}
          <FAQ faqs={faq || []} />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({ data, location }) => {
  const estate = data.estatesYaml;
  const { name, shortcode } = estate;
  const title = `Floorplans, CAD and 3D models for ${name} | Bimeco`;
  const description = `Download free floorplans, CAD plans, and 3D models for ${name}. Get the best designs and ideas for your new home renovation project.`;
  return (
    <SEO
      title={title}
      description={description}
      pathname={location.pathname}
    />
  );
};

export const query = graphql`
  query ($id: String!) {
    estatesYaml(id: { eq: $id }) {
      id
      shortcode
      name
    }
  }
`;
