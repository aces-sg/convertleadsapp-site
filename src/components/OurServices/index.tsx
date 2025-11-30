import React, { useState, useEffect } from "react";
import { FaBuilding, FaHardHat, FaChartLine } from "react-icons/fa";
import {
  MdArchitecture,
  MdConstruction,
  MdEngineering,
} from "react-icons/md";
import ImageCard from "./ImageCard";
import ServicesImage from "assets/images/services/Services.png";
import DServicesImage from "assets/images/portfolio/2.png";
import ConversionImage from "assets/images/services/3D_Conversions.png";
import ProfessionalImage from "assets/images/services/professional.png";
import SimulationImage from "assets/images/4d-tender-3.png";

const OurServices: React.FC<{ id?: string }> = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const services = [
    {
      id: "gtm-arch-services",
      icon: <MdArchitecture size={40} />,
      title: "Architectural BIM",
      description:
        "Create detailed architectural models for visualization, documentation, and coordination with other disciplines.",
      href: "/services/architectural-bim",
    },
    {
      id: "gtm-struct-services",
      icon: <MdEngineering size={40} />,
      title: "Structural BIM",
      description:
        "Develop accurate structural models for analysis, documentation, and fabrication to ensure structural integrity.",
      href: "/services/structural-bim",
    },
    {
      id: "gtm-mep-services",
      icon: <FaBuilding size={40} />,
      title: "MEP BIM",
      description:
        "Model complex mechanical, electrical, and plumbing systems for coordination, clash detection, and construction planning.",
      href: "/services/mep-bim",
    },
    {
      id: "gtm-4d-services",
      icon: <FaChartLine size={40} />,
      title: "4D BIM Simulation",
      description:
        "Link your construction schedule to your 3D model to visualize the construction sequence and optimize project timelines.",
      href: "/services/4d-bim",
    },
    {
      id: "gtm-clash-services",
      icon: <MdConstruction size={40} />,
      title: "Clash Detection",
      description:
        "Identify and resolve spatial conflicts between different building systems before construction begins.",
      href: "/services/clash-detection",
    },
    {
      id: "gtm-asbuilt-services",
      icon: <FaHardHat size={40} />,
      title: "As-Built Documentation",
      description:
        "Create accurate as-built models and documentation for facility management and future renovations.",
      href: "/services/as-built-documentation",
    },
  ];

  const imageCards = [
    {
      id: "2d-cad-services",
      title: "2D CAD Drawings",
      mobileTitle: "CAD Services",
      imageSrc: ServicesImage,
      href: "/services/cad-services",
    },
    {
      id: "bim-services",
      title: "BIM Services",
      mobileTitle: "BIM Services",
      imageSrc: DServicesImage,
      href: "/services/bim",
    },
    {
      id: "scan-to-bim",
      title: "Scan to BIM",
      mobileTitle: "Scan to BIM",
      imageSrc: ConversionImage,
      href: "/services/scan-to-bim",
    },
    {
      id: "4d-bim",
      title: "4D BIM",
      mobileTitle: "4D BIM",
      imageSrc: SimulationImage,
      href: "/services/4d-bim",
    },

    {
      id: "6d-bim",
      title: "6D Asset Management",
      imageSrc: ServicesImage,
      href: "/blog/bim-digital-twins",
    },
    {
      id: "bim-consultancy",
      title: "BIM Consultants",
      imageSrc: ProfessionalImage,
      href: "/services/3d/consultancy",
    },
  ];

  return (
    <section
      id={"core-services"}
      className="py-10 md:py-[70px] lg:py-[106px] bg-gray-50"
    >
      <div className="tw-container">
        <div className="mb-8 md:mb-10 lg:mb-16 align-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
            BIM Workflows
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-0">
            Leverage our digital delivery capabilities to enhance your
            engineering project teams
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {imageCards.map((card) => (
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

export default OurServices;
