import React, { useContext } from "react";
import { graphql, navigate } from "gatsby";
import { HiArrowLeft } from "react-icons/hi";
import { GatsbyImage } from "gatsby-plugin-image";
import GetImageByName from "components/GetImageByName";
import VideoPlayer from "components/VideoPlayer";
import { FaBriefcase } from "react-icons/fa";
import {
  MdOutlineSupportAgent,
  MdVerified,
  MdSchedule,
  MdSecurity,
  MdSpeed,
  MdGroup,
  MdCheckCircle,
  MdSettings,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import SEO from "components/Seo";
import Layout from "components/Layout";
import Footer from "components/Footer";
import { CTA } from "components/CTA";
import Feedback from "components/Feedback";
import FAQ from "components/FAQ";
import TwoColumn from "components/TwoColumn";
import { ServicesJsonLD } from "seo/Services";
import { GlobalDispatchContext } from "context/GlobalContextProvider";

import ShareIcon from "assets/svgs/services/share.svg";
import ModelIcon from "assets/svgs/services/model.svg";
import ReviewIcon from "assets/svgs/services/review.svg";
import CurlyArrow from "assets/svgs/curly-arrow.svg";
import Check from "assets/svgs/Check.svg";
import ToolsTechnologies from "components/ToolsTechnologies";
import { GFACalculator } from "components/Calculator";

export default function ServiceTemplate({ data, location }) {
  const service = data.servicesYaml;
  const {
    slug,
    name,
    title,
    description,
    image,
    video,
    price,
    currency,
    faq,
    whyChooseUs,
    howItWorksProcess,
    toolsTechnologies,
    bimApproach,
    portfolio,
    ctaSection,
  } = service;
  const dispatch = useContext(GlobalDispatchContext);

  const pathname = location.pathname;

  // Icon mapping function
  const getIcon = (iconName) => {
    const iconMap = {
      FaBriefcase: FaBriefcase,
      Compliance: MdVerified,
      MdVerified: MdVerified,
      MdOutlineSupportAgent: MdOutlineSupportAgent,
      MdSchedule: MdSchedule,
      MdSecurity: MdSecurity,
      MdSpeed: MdSpeed,
      MdGroup: MdGroup,
      MdCheckCircle: MdCheckCircle,
      MdSettings: MdSettings,
    };
    return iconMap[iconName] || FaBriefcase;
  };

  // Process icon mapping function
  const getProcessIcon = (iconName) => {
    const processIconMap = {
      ShareIcon: ShareIcon,
      ModelIcon: ModelIcon,
      ReviewIcon: ReviewIcon,
    };
    return processIconMap[iconName] || ShareIcon;
  };

  // Function to convert "Bimeco Platform" text to clickable link
  const renderDescriptionWithLinks = (description) => {
    if (!description) return description;

    // Replace "Bimeco Platform" with a clickable link
    const parts = description.split(/(Bimeco Platform)/gi);

    return parts.map((part, index) => {
      if (part.toLowerCase() === "bimeco platform") {
        return (
          <a
            key={index}
            href="https://viewer.bim.com.sg/projects/create"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FBDA05] hover:text-yellow-600 font-medium underline transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Function to convert FAQ answers to HTML with links
  const renderFAQAnswerWithLinks = (answer) => {
    if (!answer) return "";

    // Replace specific keywords with clickable links
    let html = answer;

    // Replace "Bimeco Platform" with link
    html = html.replace(
      /(Bimeco Platform)/gi,
      '<a href="https://viewer.bim.com.sg/projects/create" target="_blank" rel="noopener noreferrer" class="text-[#FBDA05] hover:text-yellow-600 font-medium underline transition-colors">$1</a>'
    );

    // Replace "Scan to BIM" with link
    html = html.replace(
      /(Scan to BIM)/gi,
      '<a href="/services/scan-to-bim" class="text-[#FBDA05] hover:text-yellow-600 font-medium underline transition-colors">$1</a>'
    );

    return html;
  };

  // Transform FAQ data to include answerHtml
  const transformedFAQ = faq?.map((item) => ({
    ...item,
    answerHtml: renderFAQAnswerWithLinks(item.answer),
  })) || [];

  // Get hero image from service data
  const heroImageData = image
    ? GetImageByName(image.split("/").pop())
    : null;

  // Transform bimApproach data for TwoColumn component
  const sections =
    bimApproach?.sections?.map((section) => ({
      id: section.id,
      title: section.title,
      content: section.content,
      bgColor: section.bgColor,
      imageData:
        section.src?.childImageSharp?.gatsbyImageData || null,
      imageUrl: section.src?.publicURL || null,
      linkText: section.linkText,
      linkHref: section.linkUrl,
    })) || [];

  return (
    <Layout pathname={pathname}>
      <div>
        <main>
          {/* Hero Section */}
          <section className="py-4 md:pt-[57px] bg-[#FEF4B4]">
            <div className="tw-container pb-10">
              <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-8">
                <div className="w-full lg:w-3/5 lg:order-1 min-w-[350px]">
                  <label
                    className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6 cursor-pointer hover:bg-main-primary/90 transition-colors"
                    onClick={() => navigate("/services/3d")}
                  >
                    <HiArrowLeft className="w-4 h-4" />
                    3D Services
                  </label>
                  <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                    {title}
                  </h1>
                  <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl max-w-xl">
                    {description}
                  </p>

                  {/* Desktop CTA (link; underlined; no button styles) - Hidden on mobile */}
                  <div className="hidden lg:flex items-start mt-5 md:mt-8 lg:mt-10">
                    <a
                      href="/contact"
                      className="text-sm md:text-base font-medium underline underline-offset-4 hover:opacity-80 transition"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>

                {/* Hero Section - Calculator */}
                <div
                  id="landing-video"
                  className="w-full lg:w-auto relative lg:order-2"
                >
                  <GFACalculator />
                </div>
              </div>

              {/* Mobile CTA (link; underlined) - only on mobile */}
              <div className="lg:hidden mt-8 text-center">
                <a
                  href="/contact"
                  className="text-sm md:text-base font-medium underline underline-offset-4 hover:opacity-80 transition"
                >
                  BIM Services
                </a>
              </div>
            </div>

            <div className="tw-container relative z-10">
              {whyChooseUs && (
                <>
                  <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
                      {whyChooseUs.title}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg mb-0">
                      {whyChooseUs.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mb-32">
                    {whyChooseUs.benefits?.map((benefit, index) => {
                      const IconComponent = getIcon(benefit.icon);
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
                            {typeof IconComponent === "function" ? (
                              <IconComponent size={25} />
                            ) : (
                              <IconComponent />
                            )}
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {benefit.description}
                          </p>
                          {benefit.linkText && benefit.linkUrl && (
                            <a
                              href={benefit.linkUrl}
                              className="text-[#FBDA05] hover:text-yellow-600 font-medium text-sm underline transition-colors inline-flex items-center"
                            >
                              {benefit.linkText}
                              <svg
                                className="w-3 h-3 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </section>

          <div className="py-16"></div>

          {/* Our BIM Approach Section */}
          {bimApproach && (
            <TwoColumn
              title={bimApproach.title}
              description={bimApproach.description}
              sections={sections}
            />
          )}

          {/* FAQ Section */}
          {transformedFAQ && transformedFAQ.length > 0 && <FAQ faqs={transformedFAQ} />}

          {/* CTA Section */}
          {ctaSection && (
            <div className="tw-container mt-4">
              <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg justify-between">
                <div className="md:w-7/10 p-8">
                  <h3 className="text-xl font-bold mb-2">
                    {ctaSection.title}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {ctaSection.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <span className="font-medium mr-2">
                      {ctaSection.whatsIncludedLabel}
                    </span>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {ctaSection.features?.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check />
                        <span className="ml-3">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-3/10 bg-gray-50 p-12 flex flex-col justify-center">
                  <p className="text-gray-500 text-sm mb-2 min-w-[180px] text-center">
                    {ctaSection.rightPanel?.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {ctaSection.rightPanel?.title}
                  </h3>
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px] w-full md:w-auto"
                    onClick={() =>
                      navigate(
                        ctaSection.rightPanel?.buttonUrl || "/contact"
                      )
                    }
                  >
                    {ctaSection.rightPanel?.buttonText}
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({ data, location }) => {
  const service = data.servicesYaml;
  const { title, description } = service;
  return (
    <>
      <SEO
        title={title}
        description={description}
        pathname={location.pathname}
      />
      {ServicesJsonLD()}
    </>
  );
};

// GraphQL query to fetch data from services.yaml
export const query = graphql`
  query DroneServiceQuery {
    servicesYaml(slug: { eq: "drone-survey" }) {
      id
      slug
      name
      title
      description
      image
      video {
        bucketName
        videoKey
        poster
      }
      price
      currency
      faq {
        question
        answer
      }
      whyChooseUs {
        title
        description
        benefits {
          icon
          title
          description
        }
      }
      howItWorksProcess {
        title
        description
        steps {
          number
          title
          description
          icon
        }
      }
      toolsTechnologies {
        title
        description
        topRowTools {
          name
          image
        }
        bottomRowTools {
          name
          image
        }
      }
      bimApproach {
        title
        description
        sections {
          id
          title
          content
          bgColor
        }
      }
      ctaSection {
        title
        description
        whatsIncludedLabel
        features
        rightPanel {
          subtitle
          title
          buttonText
          buttonUrl
        }
      }
    }
  }
`;
