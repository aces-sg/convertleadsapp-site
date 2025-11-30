import React, { useContext } from "react";
import { graphql, navigate } from "gatsby";
import { HiArrowLeft } from "react-icons/hi";
import { GatsbyImage } from "gatsby-plugin-image";
import GetImageByName from "components/GetImageByName";
import VideoPlayer from "components/VideoPlayer";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
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
import Breadcrumbs from "components/Breadcrumbs";
import { ServicesJsonLD } from "seo/Services";
import { GlobalDispatchContext } from "context/GlobalContextProvider";
import {
  autocadJsonLD,
  bimJsonLd,
  fourJsonLD,
  localJsonLD,
  lidarSurveyingJsonLD,
  iddServiceJsonLD,
} from "seo";
import { DynamicFaqJsonLd } from "seo/Faq";

import ShareIcon from "assets/svgs/services/share.svg";
import ModelIcon from "assets/svgs/services/model.svg";
import ReviewIcon from "assets/svgs/services/review.svg";
import CurlyArrow from "assets/svgs/curly-arrow.svg";
import Check from "assets/svgs/Check.svg";
import ToolsTechnologies from "components/ToolsTechnologies";

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

  // Determine category and breadcrumbs based on service slug
  const getCategoryInfo = (slug) => {
    // 2D Drafting services
    if (slug === "cad-services") {
      return {
        category: "2D Drafting",
        categoryPath: "/services/2d-drafting",
      };
    }

    // 3D Modeling services
    if (
      [
        "bim",
        "bim-singapore",
        "revit-services",
        "4d-bim",
        "5d-bim",
        "scan-to-bim",
      ].includes(slug)
    ) {
      return {
        category: "3D Modeling",
        categoryPath: "/services/3d",
      };
    }

    // Consulting services
    if (["corenetx-bim", "idd"].includes(slug)) {
      return {
        category: "Consulting",
        categoryPath: "/services/consulting",
      };
    }

    // Default to Services
    return {
      category: "Services",
      categoryPath: "/services",
    };
  };

  const categoryInfo = getCategoryInfo(slug);

  // Icon mapping function - dynamically loads icons from react-icons
  const getIcon = (iconName) => {
    // Handle legacy "Compliance" mapping
    if (iconName === "Compliance") {
      return MdIcons.MdVerified;
    }

    // Dynamically load from appropriate icon family
    if (iconName?.startsWith("Md")) {
      return MdIcons[iconName] || MdIcons.MdCheckCircle;
    }
    if (iconName?.startsWith("Fa")) {
      return FaIcons[iconName] || FaIcons.FaBriefcase;
    }

    // Default fallback
    return FaIcons.FaBriefcase;
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

  // Function to convert text to clickable links
  const renderDescriptionWithLinks = (description) => {
    if (!description) return description;

    // Replace "Bimeco Platform" and "Scan to BIM" with clickable links
    const parts = description.split(/(Bimeco Platform|Scan to BIM)/gi);

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
      if (part.toLowerCase() === "scan to bim") {
        return (
          <a
            key={index}
            href="/services/scan-to-bim"
            className="text-[#FBDA05] hover:text-yellow-600 font-medium underline transition-colors"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const handleContactClick = () => {
    const subject = encodeURIComponent(`Enquiry about ${name}`);
    const body = encodeURIComponent(
      `Hi,\n\nI would like to enquire about ${name}.\n\nBest regards`
    );
    window.location.href = `mailto:enquiry@bim.com.sg?subject=${subject}&body=${body}`;
  };

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
      contentHtml: section.contentHtml,
      bgColor: section.bgColor,
      src: GetImageByName(section.src?.split("/").pop()),
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
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { label: "Services", path: "/services" },
                    {
                      label: categoryInfo.category,
                      path: categoryInfo.categoryPath,
                    },
                    { label: name, path: pathname },
                  ]}
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-8">
                <div className="w-full lg:w-2/3 lg:order-1">
                  <label
                    className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6 cursor-pointer hover:bg-main-primary/90 transition-colors"
                    onClick={() => navigate("/services/3d")}
                  >
                    <HiArrowLeft className="w-4 h-4" />
                    3D Services
                  </label>
                  <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                    {name}
                  </h1>
                  <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl max-w-[500px]">
                    {description}
                  </p>
                  {/* Desktop CTA - Hidden on mobile */}
                  <div className="hidden lg:flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-5 md:mt-8 lg:mt-10">
                    <a
                      href="#how-it-works"
                      className="text-sm md:text-base font-semibold text-gray-900 hover:text-gray-700 underline decoration-[#FBDA05] decoration-2 underline-offset-4 transition-colors"
                    >
                      How it Works
                    </a>
                  </div>
                </div>

                {/* Hero Section - Prefer video over image */}
                {video?.bucketName && video?.videoKey ? (
                  <div
                    id="landing-video"
                    className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 lg:order-2"
                  >
                    <VideoPlayer
                      bucketName={video.bucketName}
                      videoKey={video.videoKey}
                      title={`${name}`}
                      autoPlay={true}
                      controls={true}
                      poster={video.poster}
                      className="rounded-lg shadow-lg overflow-hidden"
                    />
                  </div>
                ) : heroImageData ? (
                  <div
                    id="landing-image"
                    className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 lg:order-2 relative"
                  >
                    <GatsbyImage
                      image={heroImageData}
                      alt={`${name} Service`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ) : null}
              </div>

              {/* Mobile CTA - Shown only on mobile, below hero image/video */}
              <div className="lg:hidden mt-8 text-center">
                <a
                  href="#how-it-works"
                  className="inline-block text-sm md:text-base font-semibold text-gray-900 hover:text-gray-700 underline decoration-[#FBDA05] decoration-2 underline-offset-4 transition-colors"
                >
                  How it Works
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
                    {/* Software Logos */}
                    {whyChooseUs.logos &&
                      whyChooseUs.logos.length > 0 && (
                        <div className="flex justify-center items-center gap-6 md:gap-8 mt-8 flex-wrap">
                          {whyChooseUs.logos.map((logo, index) => {
                            const logoImageData = GetImageByName(
                              logo.image?.split("/").pop()
                            );
                            return logoImageData ? (
                              <div
                                key={index}
                                className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                              >
                                <GatsbyImage
                                  image={logoImageData}
                                  alt={logo.name}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ) : null;
                          })}
                        </div>
                      )}
                  </div>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 ${
                      whyChooseUs.benefits?.length === 2
                        ? "lg:grid-cols-2"
                        : whyChooseUs.benefits?.length === 3
                        ? "lg:grid-cols-3"
                        : "lg:grid-cols-4"
                    } gap-6 -mb-32`}
                  >
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

          <div className="py-32"></div>

          <Feedback />

          {/* How It Works Process Section */}
          {howItWorksProcess && (
            <section
              id="how-it-works"
              className="py-6 md:py-[40px] lg:py-[80px] bg-gray-100"
            >
              <div className="tw-container">
                <div className="flex flex-col md:flex-row">
                  <div className="text-center md:w-[30%] md:text-left">
                    <h2 className="text-2xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
                      {howItWorksProcess.title}
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg">
                      {howItWorksProcess.description}
                    </p>
                  </div>
                  <div className="md:w-[70%]">
                    <div className="relative">
                      {howItWorksProcess.steps?.map((step, index) => {
                        const ProcessIcon = getProcessIcon(step.icon);
                        const isLastStep =
                          index ===
                          howItWorksProcess.steps.length - 1;

                        return (
                          <div
                            key={index}
                            className="flex gap-12 mb-1 md:mb-6 relative z-10"
                          >
                            <div className="mr-12 relative">
                              {!isLastStep && (
                                <div className="absolute left-1/2 top-20 w-[2px] h-16 md:h-20 bg-[#FBDA05] transform -translate-x-1/2 z-10"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-2">
                                {step.title}
                              </h3>
                              <p className="text-gray-500">
                                {renderDescriptionWithLinks(
                                  step.description
                                )}
                              </p>
                            </div>
                            <div
                              className="text-gray-400 mt-6"
                              style={{
                                fontSize: "60px",
                                lineHeight: "60px",
                              }}
                            >
                              {step.number}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tools & Technologies Section */}
          {toolsTechnologies && (
            <ToolsTechnologies
              title={toolsTechnologies.title}
              description={toolsTechnologies.description}
              descriptionHtml={toolsTechnologies.descriptionHtml}
              topRowTools={toolsTechnologies.topRowTools}
              bottomRowTools={toolsTechnologies.bottomRowTools}
            />
          )}

          {/* Our BIM Approach Section */}
          {bimApproach && (
            <TwoColumn
              title={bimApproach.title}
              description={bimApproach.description}
              sections={sections}
            />
          )}

          {/* Portfolio Section */}
          {portfolio &&
            portfolio.projects &&
            portfolio.projects.length > 0 && (
              <section
                id="portfolio"
                className="pt-10 pb-6 overflow-hidden md:pt-16 bg-[#FEF4B4]"
              >
                <div className="tw-container">
                  <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-0">
                    <div className="flex items-center">
                      <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold -tracking-[0.9px]">
                        {portfolio.title}
                      </h2>
                      <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
                    </div>
                    <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
                      {portfolio.description}
                    </p>
                  </div>
                  <div className="mt-6 md:mt-10 lg:mt-16">
                    <Swiper
                      slidesPerView={4}
                      slidesPerGroup={4}
                      speed={800}
                      loop={true}
                      pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                          return (
                            '<span class="' +
                            className +
                            '"><span class="pagination-inner"></span></span>'
                          );
                        },
                      }}
                      navigation={false}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 4,
                          slidesPerGroup: 4,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 4,
                          slidesPerGroup: 4,
                          spaceBetween: 40,
                        },
                      }}
                    >
                      {portfolio.projects.map((project, index) => {
                        const projectImageData = GetImageByName(
                          project.image?.split("/").pop()
                        );
                        return (
                          <SwiperSlide key={index}>
                            <div className="h-60">
                              {projectImageData && (
                                <GatsbyImage
                                  image={projectImageData}
                                  alt={project.alt}
                                  className="w-full h-full rounded-2xl md:rounded-[20px] object-cover"
                                />
                              )}
                            </div>
                            {project.title && (
                              <h3 className="text-[18px] text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
                                {project.title}
                              </h3>
                            )}
                            {project.description && (
                              <p className="text-gray-900 -tracking-[0.9px] mb-0">
                                {project.description}
                              </p>
                            )}
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
              </section>
            )}

          {/* FAQ Section */}
          {faq && faq.length > 0 && <FAQ faqs={faq} />}

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
  const { slug, description, name, faq, title } = service;

  // Map service slugs to their specific structured data schemas
  const serviceSchemaMap = {
    "cad-services": autocadJsonLD,
    "corenetx-bim": bimJsonLd,
    "4d-bim": fourJsonLD,
    "5d-bim": fourJsonLD, // Using same schema as 4D for now
    surveying: lidarSurveyingJsonLD,
    idd: iddServiceJsonLD,
  };

  // Get the appropriate service-specific schema
  const ServiceSpecificSchema = serviceSchemaMap[slug];

  return (
    <>
      <SEO
        title={title || name}
        description={description}
        pathname={location.pathname}
      />
      {localJsonLD()}
      {ServiceSpecificSchema && ServiceSpecificSchema()}
      {ServicesJsonLD()}
      {faq && faq.length > 0 && <DynamicFaqJsonLd faqs={faq} />}
    </>
  );
};

// GraphQL query to fetch data from services.yaml
export const query = graphql`
  query ($id: String!) {
    servicesYaml(id: { eq: $id }) {
      id
      slug
      name
      title
      description
      descriptionHtml
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
        answerHtml
      }
      whyChooseUs {
        title
        description
        descriptionHtml
        logos {
          name
          image
        }
        benefits {
          icon
          title
          description
          descriptionHtml
        }
      }
      howItWorksProcess {
        title
        description
        descriptionHtml
        steps {
          number
          title
          description
          descriptionHtml
          icon
        }
      }
      toolsTechnologies {
        title
        description
        descriptionHtml
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
        descriptionHtml
        sections {
          id
          title
          content
          contentHtml
          bgColor
          src
          linkText
          linkUrl
        }
      }
      portfolio {
        title
        description
        descriptionHtml
        projects {
          title
          description
          descriptionHtml
          image
          alt
        }
      }
      ctaSection {
        title
        description
        descriptionHtml
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
