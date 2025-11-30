import React from "react";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import Union from "assets/svgs/services/union.svg";
import Fast from "assets/svgs/services/fast.svg";
import Compliance from "assets/svgs/services/compliance.svg";
import Ongoing from "assets/svgs/services/ongoing.svg";
import ConversionImage from "assets/images/services/3D_Conversions.png";
import ModellingImage from "assets/images/services/modelling.png";
import MicrostationImage from "assets/images/services/microstation-3d.png";
import RevitImage from "assets/images/services/revit.png";
import SimulationsImage from "assets/images/services/simulations.png";
import ProfessionalImage from "assets/images/services/professional.png";
import { HiArrowLeft } from "react-icons/hi";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "gatsby";
import Feedback from "components/Feedback";
import Footer from "components/Footer";
import Breadcrumbs from "components/Breadcrumbs";
import { useStaticQuery, graphql } from "gatsby";
import ImageCard from "components/OurServices/ImageCard";
import Portfolio from "components/Portfolio";
import HowItWorksProcess from "components/HowItWorksProcess";
import { ThreeDServicesJsonLD } from "seo/Services";

const Services3D = ({ location }) => {
  const pathname = location.pathname;

  const handleDefault = () => {
    navigate("/contact");
  };

  const imagedata = useStaticQuery(graphql`
    {
      clash: file(relativePath: { eq: "bimcollab-clash.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      construct: file(
        relativePath: { eq: "projectwise/projectwise-clash.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      twin: file(relativePath: { eq: "digital-twin.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const images = [
    {
      id: "virtual-walkthrough",
      title: "Virtual Walkthrough",
      mobileTitle: "Walkthrough",
      imageSrc: RevitImage,
      href: "/demos/architecture",
    },
    {
      id: "bim-modelling",
      title: "Building Information Modelling (BIM)",
      mobileTitle: "BIM",
      imageSrc: ModellingImage,
      href: "/services/bim/",
    },
    {
      id: "scan-bim",
      title: "Scan to BIM",
      mobileTitle: "Scan to BIM",
      imageSrc: ConversionImage,
      href: "/services/3d/scan-to-bim",
    },
    {
      id: "construction-sequencing",
      title: "4D Simulation",
      mobileTitle: "Construction",
      imageSrc: SimulationsImage,
      href: "/demos/civil",
    },
    {
      id: "bim-consultancy",
      title: "BIM Consultancy",
      mobileTitle: "Consultancy",
      imageSrc: ProfessionalImage,
      href: "/services/3d/consultancy",
    },
    {
      id: "solidworks-models",
      title: "Product Manufacturing",
      mobileTitle: "Product Manufacturing",
      imageSrc: MicrostationImage,
      href: "/services/3d/product",
    },
  ];

  let sections = [
    {
      id: "gtm-bim",
      title: "Design for Sustainability",
      content: `Ensure design complies with local codes and standards for Accessibility, Safety, and Sustainability. Create Architectural models for comprehensive analysis and rapidly issue tender drawings as you progress into the construction phase.`,
      linkText: "How it works",
      linkHref: "/blog/bim-benefits-design/",
      src: imagedata.clash,
      bgColor: "bg-white",
    },
    {
      id: "gtm-review",
      title: "Build Better Infrastructure",
      content: `Enable digital construction workflows with 3D, 4D & 5D BIM. Mitigate project risk by building virtually before construction. Work with our team to create constructible BIM models that facilitate advanced digital construction workflows.`,
      linkText: "Solutions for Contractors",
      linkHref: "/blog/bim-benefits-construction",
      src: imagedata.construct,
    },
    {
      id: "gtm-iso",
      title: "BIM Digital Twins",
      content: `Enhance the operational performance of your assets with infrastructure digital twins. Incorporate real-time data from IoT sensors and other sources to create a digital twin of your asset. Use the digital twin to monitor and optimize the performance of your asset.`,
      linkText: "Digital Twins for Facility Management",
      linkHref: "/blog/bim-digital-twins/",
      src: imagedata.twin,
    },
  ];

  const services = [
    {
      name: "BIM Services",
      description:
        "Building Information Modeling for coordinated design and construction",
      href: "/services/bim/",
      features: [
        "3D BIM modeling",
        "Clash detection",
        "Model coordination",
      ],
    },
    {
      name: "Revit Services",
      description:
        "Expert Revit modeling and family creation services",
      href: "/services/revit-services",
      features: [
        "Custom families",
        "Template development",
        "Model optimization",
      ],
    },
    {
      name: "4D BIM",
      description: "Time-based construction sequencing and planning",
      href: "/services/4d-bim",
      features: [
        "Construction scheduling",
        "Progress tracking",
        "Clash resolution",
      ],
    },
    {
      name: "5D BIM",
      description:
        "Cost-integrated BIM for quantity takeoff and estimation",
      href: "/services/5d-bim",
      features: [
        "Quantity extraction",
        "Cost estimation",
        "Value engineering",
      ],
    },
    {
      name: "Scan to BIM",
      description: "Laser scan data processing and as-built modeling",
      href: "/services/scan-to-bim",
      features: [
        "Point cloud processing",
        "As-built documentation",
        "Retrofit modeling",
      ],
    },
    {
      name: "CORENET X Submission",
      description:
        "Singapore-compliant BIM submissions with IFC+SG parameters",
      href: "/services/corenetx-bim",
      features: [
        "IFC+SG model preparation",
        "CORENET X compliance",
        "Regulatory submissions",
      ],
    },
    {
      name: "Virtual Tour",
      description:
        "360° virtual walkthroughs and immersive presentations",
      href: "/services/3d/virtual-tour",
      features: [
        "Interactive tours",
        "Design visualization",
        "Client presentations",
      ],
    },
  ];

  const benefits = [
    {
      icon: Union,
      title: "Experienced BIM Professionals",
      description:
        "Our team specializes in Revit, Navisworks, and advanced BIM workflows with deep expertise in coordinated design delivery.",
    },
    {
      icon: Compliance,
      title: "ISO 19650 Compliant",
      description:
        "All BIM deliverables follow ISO 19650 standards for information management ensuring consistency and quality.",
    },
    {
      icon: Fast,
      title: "Clash-Free Coordination",
      description:
        "Rigorous clash detection and coordination processes eliminate costly on-site conflicts before construction begins.",
    },
    {
      icon: Ongoing,
      title: "LOD Flexibility",
      description:
        "From LOD 100 concept models to LOD 400 fabrication models, we deliver the right level of detail for each project stage.",
    },
  ];

  return (
    <Layout pathname={pathname}>
      <div>
        <main>
          <section className="py-4 md:pt-[57px] bg-[#FEF4B4]">
            <div className="tw-container pb-10">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { label: "Services", path: "/services" },
                    {
                      label: "3D Modeling",
                      path: "/services/3d",
                    },
                  ]}
                />
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center mx-auto gap-8">
                <div className="w-full lg:w-2/3 lg:order-1">
                  <h1 className="mb-4 md:mb-8 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                    Digital Design & <br></br>Engineering Workflows
                  </h1>
                  <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl max-w-[500px]">
                    Professional BIM modeling, coordination, and
                    visualization services. From concept to
                    construction with ISO 19650 compliance and
                    clash-free delivery.
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
                      to="/services/bim/"
                      className="text-sm md:text-base text-black font-medium hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="w-full lg:w-2/5 lg:order-2 relative">
                  <StaticImage
                    src="../../../assets/images/services/modal3D.png"
                    alt="3D BIM Modeling Services"
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
                    Why Choose Our 3D BIM Services?
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg mb-0">
                    Industry-leading BIM coordination and modeling
                    expertise
                  </p>
                </div>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 ${
                    benefits.length === 2
                      ? "lg:grid-cols-2"
                      : benefits.length === 3
                      ? "lg:grid-cols-3"
                      : "lg:grid-cols-4"
                  } gap-6 -mb-32`}
                >
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
                  Our 3D Modeling Services
                </h2>
                <p className="text-gray-500 text-base md:text-lg">
                  Comprehensive BIM solutions from design to
                  construction
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

          {/* <Feedback /> */}

          {/* <HowItWorksProcess
            title="How It Works"
            description="Here's our approach to quality 3D delivery"
          /> */}

          {/* <ToolsTechnologies
            title="Tools & Technologies"
            description="We use leading 3D tools for reliable results"
          /> */}

          <Portfolio />
        </main>
        <Footer />
      </div>
    </Layout>
  );
};

export default Services3D;

export const Head = ({ location }) => (
  <>
    <SEO
      title="3D BIM Modeling Services - Professional BIM Coordination & Visualization"
      description="Expert 3D BIM modeling services in Singapore. BIM coordination, Revit modeling, 4D/5D BIM, Scan to BIM, & ISO 19650 Compliance"
      pathname={location.pathname}
    />
    {ThreeDServicesJsonLD()}
  </>
);
