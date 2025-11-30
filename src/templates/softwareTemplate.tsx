import React from "react";
import { graphql, navigate, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Breadcrumbs from "components/Breadcrumbs";
import {
  HiShieldCheck,
  HiGlobeAlt,
  HiChartBar,
  HiCheckBadge,
  HiCpuChip,
  HiUsers,
  HiSquares2X2,
  HiDevicePhoneMobile,
  HiCube,
  HiCurrencyDollar,
} from "react-icons/hi2";
import SEO from "components/Seo";
import Layout from "components/Layout";
import Footer from "components/Footer";
import FAQ from "components/FAQ";
import TwoColumn from "components/TwoColumn";
import ProductSchema from "seo/ProductSchema";

export default function SoftwareTemplate({ data, location }) {
  const software = data.softwareYaml;
  const {
    productName,
    name,
    price,
    description,
    faq,
    currency,
    slug,
  } = software;

  const pathname = location.pathname;

  const getCategoryInfo = (slug) => {
    // 3D Modeling services
    if (
      ["projectwise-manage", "synchro-4d", "projectwise"].includes(
        slug
      )
    ) {
      return {
        category: "Digital Delivery",
        categoryPath: "/software/projectwise",
      };
    }

    // 3D Modeling services
    if (["plaxis-2d", "plaxis-3d", "staad-pro"].includes(slug)) {
      return {
        category: "Engineering Analysis",
        categoryPath: "/",
      };
    }

    // 3D Modeling services
    if (
      ["projectwise-manage", "synchro-4d", "projectwise"].includes(
        slug
      )
    ) {
      return {
        category: "Digital Delivery",
        categoryPath: "/software/projectwise",
      };
    }

    // Default to Services
    return {
      category: "Software",
      categoryPath: "/software",
    };
  };

  const categoryInfo = getCategoryInfo(slug);

  // Transform workflows data for TwoColumn component
  const workflowSections =
    software.workflows?.map((workflow, index) => ({
      id: `workflow-${index}`,
      title: workflow.heading || "Workflow",
      content: workflow.description || "",
      src: workflow.image,
      linkText: workflow.linkText,
      linkHref: workflow.linkUrl,
    })) || [];

  // Icon mapper for otherFeatures
  const iconMap: Record<string, React.ElementType> = {
    HiShieldCheck,
    HiGlobeAlt,
    HiChartBar,
    HiCheckBadge,
    HiCpuChip,
    HiUsers,
    HiSquares2X2,
    HiDevicePhoneMobile,
    HiCube,
    HiCurrencyDollar,
  };

  return (
    <Layout pathname={pathname}>
      <div>
        <main>
          {/* Heading */}
          <section className="pt-10 md:pt-[57px] bg-[#FEF4B4] pb-10">
            <div className="tw-container pb-10">
              <div className="grid sm:grid-cols-2 gap-12 items-center">
                {/* Left side: Text */}
                <div>
                  <div className="mb-6">
                    <Breadcrumbs
                      items={[
                        {
                          label: categoryInfo.category,
                          path: categoryInfo.categoryPath,
                        },
                        { label: productName, path: pathname },
                      ]}
                    />
                  </div>
                  <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-3xl">
                    {name}
                  </h1>
                  <p className="flex mb-0 text-sm text-gray-500 md:text-base lg:text-xl max-w-[450px]">
                    {description}
                  </p>
                  <div className="flex items-center gap-12 mt-5 md:mt-8 lg:mt-10 md:gap-12">
                    {software.ctaButton ? (
                      // Custom CTA button from YAML
                      software.ctaButton.mailto ? (
                        <a
                          href={software.ctaButton.url}
                          className={`inline-block transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base font-medium capitalize rounded-md shadow-shadow-sm py-[13px] px-4 md:px-[25px] ${
                            software.ctaButton.type === "secondary"
                              ? "bg-gray-800 text-white"
                              : "bg-main-primary text-black"
                          }`}
                        >
                          {software.ctaButton.text}
                        </a>
                      ) : (
                        <Link
                          to={software.ctaButton.url}
                          className={`inline-block transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base font-medium capitalize rounded-md shadow-shadow-sm py-[13px] px-4 md:px-[25px] ${
                            software.ctaButton.type === "secondary"
                              ? "bg-gray-800 text-white"
                              : "bg-main-primary text-black"
                          }`}
                        >
                          {software.ctaButton.text}
                        </Link>
                      )
                    ) : (
                      // Default price-based CTA
                      <a
                        href={`mailto:enquiry@bim.com.sg?subject=Purchase%20Inquiry:%20${encodeURIComponent(
                          productName
                        )}&body=Hi%20team,%0D%0A%0D%0AI%20am%20interested%20in%20purchasing%20${encodeURIComponent(
                          productName
                        )}%20for%20$${price}/year.%20Please%20send%20me%20more%20information.`}
                        className="inline-block transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                      >
                        From {currency} {price} / year
                      </a>
                    )}

                    <a
                      href={`mailto:enquiry@bim.com.sg?subject=${encodeURIComponent(
                        `Consultancy / Training Services for ${productName}`
                      )}&body=${encodeURIComponent(
                        `Hi team,\n\nI am interested in consultancy services for ${productName}. Please provide more details.`
                      )}`}
                      className="underline hover:cursor-pointer"
                    >
                      Consultancy & Training
                    </a>
                  </div>
                </div>

                {/* Right side: Image centered vertically */}
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-xl rounded-lg overflow-hidden">
                    <GatsbyImage
                      image={getImage(software.image)}
                      alt={`${productName} workflow`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Features */}
          {software.otherFeatures && (
            <section className="sm:py-16 bg-gray-50">
              <div className="tw-container relative z-10">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
                    {software.otherFeatures.title}
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg mb-0">
                    {software.otherFeatures.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {software.otherFeatures.features?.map(
                    (feature, index) => {
                      const IconComponent = iconMap[feature.icon];
                      return (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-3 m-3">
                            {IconComponent && (
                              <IconComponent className="w-6 h-6 text-primary-500 flex-shrink-0" />
                            )}
                            <h3 className="text-lg font-semibold text-black m-0">
                              {feature.heading}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500 mb-0">
                            {feature.description}
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Workflows */}
          {workflowSections.length > 0 && (
            <TwoColumn
              title={
                software.workflowsSection?.title || "Key Workflows"
              }
              description={
                software.workflowsSection?.description ||
                "Explore key features and workflows"
              }
              sections={workflowSections}
            />
          )}

          {/* Replace with fetched or hardcoded FAQ content */}
          <FAQ faqs={faq || []} />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({ data, location }) => {
  const software = data.softwareYaml;
  const { name, description, currency, title } = software;
  return (
    <>
      <SEO
        title={title}
        description={description}
        pathname={location.pathname}
      />
      <script type="application/ld+json">
        {JSON.stringify(ProductSchema({ data, location }))}
      </script>
    </>
  );
};

export const query = graphql`
  query ($id: String!) {
    softwareYaml(id: { eq: $id }) {
      id
      slug
      productName
      name
      title
      currency
      image {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
      price
      description
      workflows {
        heading
        description
        linkText
        linkUrl
        image {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
      }
      otherFeatures {
        title
        description
        features {
          icon
          heading
          description
        }
      }
      faq {
        question
        answer
        answerHtml
      }
      ctaButton {
        text
        url
        type
        mailto
      }
      workflowsSection {
        title
        description
      }
    }
  }
`;
