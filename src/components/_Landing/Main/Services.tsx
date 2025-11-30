import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import ThreeDBIM from "assets/svgs/threed-bim-black.svg";
import FourDBIM from "assets/svgs/fourd-bim-black.svg";
import FiveDBIM from "assets/svgs/fived-bim-black.svg";
import ClashDetection from "assets/svgs/clash-detection-black.svg";
import BuildVerification from "assets/svgs/as-built-verification-black.svg";
import ScanBIM from "assets/svgs/scan-bim-black.svg";
import OurServices from "./servicelist.json";
import ImageCard from "components/OurServices/ImageCard";
import ServicesImage from "assets/images/services/Services.png";
import ConversionImage from "assets/images/services/3D_Conversions.png";
import ProfessionalImage from "assets/images/services/professional.png";
import { useAnalytics } from "hooks/useAnalytics";

const ImageCards = ({ id, title, mobileTitle, imageSrc, href, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { trackClick } = useAnalytics();

  const handleClick = () => {
    // Track click using the element ID as the primary identifier
    trackClick('service_card_click', {
      event_category: 'services',
      event_label: `home-${id}`, // Prefix with page name
      service_category: category,
      service_url: href,
    });
    navigate(href);
  };

  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-[20px] transition-all duration-300 h-[120px] sm:h-[130px] md:h-[150px] ${
        isHovered
          ? "ring-2 ring-yellow-400"
          : "border border-[#4B5563]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 0 0 2px #FACC15"
          : "0 0 0 1px #4B5563",
      }}
    >
      <div className="absolute inset-0">
        <GatsbyImage
          image={getImage(imageSrc)}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div
        className={`absolute bottom-0 left-0 p-6 w-full transition-transform duration-300 ${
          isHovered ? "transform -translate-y-4" : ""
        }`}
      >
        <h3 className="text-xl font-semibold text-white">
          <span className="sm:hidden">{mobileTitle || title}</span>
          <span className="hidden sm:inline">{title}</span>
        </h3>

        {isHovered && (
          <button
            className="mt-4 text-black bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
            onClick={handleClick}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const Service3D = () => {
  let { id, title, description } = OurServices[0];
  return (
    <div
      id={id}
      className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row"
    >
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-[80px] md:w-[100px] lg:w-[150px] h-[60px] md:h-[80px] lg:h-[120px] shrink-0">
        <ThreeDBIM className="w-[60px] md:w-[70px] lg:w-[119px]" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white md:mb-2">
          {title}
        </h3>
        <p className="text-left max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const Service4D = () => {
  let { id, title, description } = OurServices[1];
  return (
    <div
      id={id}
      className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row"
    >
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-[80px] md:w-[100px] lg:w-[150px] h-[60px] md:h-[80px] lg:h-[120px] shrink-0">
        <FourDBIM className="w-[60px] md:w-[70px] lg:w-[119px]" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white md:mb-2">
          {title}
        </h3>
        <p className="text-left max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const Service5D = () => {
  let { id, title, description } = OurServices[2];
  return (
    <div
      id={id}
      className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row"
    >
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-[80px] md:w-[100px] lg:w-[150px] h-[60px] md:h-[80px] lg:h-[120px] shrink-0">
        <FiveDBIM className="w-[60px] md:w-[70px] lg:w-[119px]" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white md:mb-2">
          {title}
        </h3>
        <p className="text-left max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceClashDetection = () => {
  let { id, title, description } = OurServices[3];
  return (
    <div
      id={id}
      className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row"
    >
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-[80px] md:w-[100px] lg:w-[150px] h-[60px] md:h-[80px] lg:h-[120px] shrink-0">
        <ClashDetection className="w-[60px] md:w-[70px] lg:w-[119px]" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white md:mb-2">
          {title}
        </h3>
        <p className="text-left max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceBuildVerification = () => {
  let { id, title, description } = OurServices[4];
  return (
    <div
      id={id}
      className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row"
    >
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-[80px] md:w-[100px] lg:w-[150px] h-[60px] md:h-[80px] lg:h-[120px] shrink-0">
        <BuildVerification className="w-[60px] md:w-[70px] lg:w-[119px]" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white md:mb-2">
          {title}
        </h3>
        <p className="text-left max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceScan = () => {
  let { id, title, description } = OurServices[5];
  return (
    <div
      id={id}
      className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row"
    >
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-[80px] md:w-[100px] lg:w-[150px] h-[60px] md:h-[80px] lg:h-[120px] shrink-0">
        <ScanBIM className="w-[60px] md:w-[70px] lg:w-[119px]" />
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium text-white md:mb-2">
          {title}
        </h3>
        <p className="text-left max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
const Services = ({ id }) => {
  const imagedata = useStaticQuery(graphql`
    {
      architectural: file(relativePath: { eq: "portfolio/1.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      mep: file(relativePath: { eq: "portfolio/2.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      structural: file(relativePath: { eq: "portfolio/3.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      submission: file(relativePath: { eq: "portfolio/4.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      # 3D section images
      bimModelling: file(
        relativePath: { eq: "portfolio/2.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      walkthrough: file(
        relativePath: { eq: "portfolio/1.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      clashDetection: file(
        relativePath: { eq: "portfolio/3.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      simulation: file(
        relativePath: { eq: "portfolio/4.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      # Convert section images
      cadToRevit: file(
        relativePath: { eq: "portfolio/1.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      cadToBim: file(
        relativePath: { eq: "portfolio/2.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      pointCloudToBim: file(
        relativePath: { eq: "portfolio/4.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      pdfToCad: file(
        relativePath: { eq: "portfolio/3.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const images = [
    {
      id: "bim-consultancy",
      title: "BIM Consultancy & Management",
      imageSrc: ProfessionalImage,
      href: "/services/bim-consultancy",
    },
    {
      id: "3d-conversions",
      title: "Scan to BIM",
      mobileTitle: "Scan to BIM",
      imageSrc: ConversionImage,
      href: "/blog/scan-to-bim",
    },
    {
      id: "asset-management",
      title: "Digital Twin",
      imageSrc: ServicesImage,
      href: "/blog/bim-digital-twins",
    },
  ];

  return (
    <section
      id={id}
      className="py-10 md:py-[70px] lg:py-[100px] bg-white"
    >
      <div className="tw-container">
        <div className="mb-2">
          <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
            2D
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <ImageCards
            id="2d-architectural"
            title="2D Architectural Drawings Service"
            mobileTitle="Architectural Drawings"
            imageSrc={imagedata.architectural}
            href="/services/2d-architectural"
            category="2D"
          />
          <ImageCards
            id="2d-mep"
            title="2D MEP Drawings Service (M&E)"
            mobileTitle="MEP Drawings"
            imageSrc={imagedata.mep}
            href="/services/2d-mep"
            category="2D"
          />
          <ImageCards
            id="2d-structural"
            title="2D Structural Detailing"
            mobileTitle="Structural Detailing"
            imageSrc={imagedata.structural}
            href="/services/2d-structural"
            category="2D"
          />
          <ImageCards
            id="2d-submission"
            title="2D Submission Drawings Service"
            mobileTitle="Submission Drawings"
            imageSrc={imagedata.submission}
            href="/services/2d-submission"
            category="2D"
          />
        </div>
      </div>

      <div className="tw-container">
        <div className="mb-2">
          <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
            3D
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <ImageCards
            id="3d-bim-modelling"
            title="3D BIM Modelling"
            mobileTitle="BIM Modelling"
            imageSrc={imagedata.bimModelling}
            href="/services/3d-bim-modelling"
            category="3D"
          />
          <ImageCards
            id="3d-walkthrough"
            title="3D Walkthrough"
            mobileTitle="Walkthrough"
            imageSrc={imagedata.walkthrough}
            href="/services/3d-walkthrough"
            category="3D"
          />
          <ImageCards
            id="3d-clash-detection"
            title="3D Clash Detection"
            mobileTitle="Clash Detection"
            imageSrc={imagedata.clashDetection}
            href="/services/3d-clash-detection"
            category="3D"
          />
          <ImageCards
            id="4d-simulation"
            title="4D Simulation"
            mobileTitle="4D Simulation"
            imageSrc={imagedata.simulation}
            href="/services/4d-simulation"
            category="3D"
          />
        </div>
      </div>

      <div className="tw-container">
        <div className="mb-2">
          <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
            Convert
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <ImageCards
            id="cad-to-revit"
            title="CAD to Revit"
            mobileTitle="CAD to Revit"
            imageSrc={imagedata.cadToRevit}
            href="/services/cad-to-revit"
            category="Convert"
          />
          <ImageCards
            id="cad-to-bim"
            title="CAD to BIM"
            mobileTitle="CAD to BIM"
            imageSrc={imagedata.cadToBim}
            href="/services/cad-to-bim"
            category="Convert"
          />
          <ImageCards
            id="point-cloud-to-bim"
            title="Point Cloud to BIM"
            mobileTitle="Point Cloud to BIM"
            imageSrc={imagedata.pointCloudToBim}
            href="/services/point-cloud-to-bim"
            category="Convert"
          />
          <ImageCards
            id="pdf-to-cad"
            title="PDF to CAD"
            mobileTitle="PDF to CAD"
            imageSrc={imagedata.pdfToCad}
            href="/services/pdf-to-cad"
            category="Convert"
          />
        </div>
      </div>

      <div className="tw-container">
        <div className="mb-2">
          <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
            Professional Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {images.map((card) => (
            <ImageCard
              key={card.id}
              id={card.id}
              title={card.title}
              mobileTitle={card.mobileTitle}
              imageSrc={card.imageSrc}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
