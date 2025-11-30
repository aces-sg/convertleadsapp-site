import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaHardHat,
  FaRoad,
  FaOilCan,
  FaWater,
  FaCity,
  FaHospital,
  FaIndustry,
  FaSubway,
  FaShoppingCart,
  FaLandmark,
  FaGraduationCap,
} from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const scrollLeftStyle = {
  animation: "scrollLeft 10s linear infinite",
};

const scrollRightStyle = {
  animation: "scrollRight 10s linear infinite",
};

const BOTTOM_MIN_HEIGHT_PX = 110; // controls alignment baseline

const AnimationStyles = () => (
  <style jsx>{`
    @keyframes scrollLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes scrollRight {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }

    @keyframes countAnimation {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .count-animate {
      animation: countAnimation 0.3s ease-out;
    }

    @media (prefers-reduced-motion) {
      .animate-scroll-left,
      .animate-scroll-right,
      .count-animate {
        animation: none;
      }
    }

    @media (max-width: 768px) {
      @keyframes scrollLeft {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-200%);
        }
      }

      @keyframes scrollRight {
        0% {
          transform: translateX(-200%);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
  `}</style>
);

const IndustryTag = ({ icon, text }) => (
  <div className="flex items-center gap-2 py-[7px] pr-[15px] pl-[7px] rounded-[12px] bg-white whitespace-nowrap shadow-sm">
    <div className="p-[10px] bg-gray-100 rounded-md">{icon}</div>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

const StatsCard = ({
  startNumber,
  endNumber,
  title,
  industriesTop,
  industriesBottom,
  bottomTitle,
  bottomDescription,
}) => {
  const [count, setCount] = useState(startNumber);
  const [animating, setAnimating] = useState(false);
  const hasAnimated = useRef(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          animateCount(startNumber, endNumber);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [startNumber, endNumber]);

  const animateCount = (start: number, end: number) => {
    setAnimating(true);
    let current = start;
    const step = Math.ceil((end - start) / 20);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
        setAnimating(false);
      } else {
        setCount(current);
      }
    }, 50);
  };

  return (
    <div
      ref={cardRef}
      className="bg-[#F3F4F6] rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
    >
      <div className="flex flex-col justify-between h-full py-[24px] px-[16px] gap-[10px]">
        {/* TOP */}
        <div>
          <div className="text-main-primary text-[40px] sm:text-[50px] md:text-[60px] font-bold text-center py-2 rounded-lg overflow-hidden">
            <div className={animating ? "count-animate" : ""}>
              {count}+
            </div>
          </div>
          <div className="text-center text-[14px] text-gray-400 uppercase font-semibold mb-4">
            {title}
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-[10px] py-1"
              style={scrollLeftStyle}
            >
              {industriesTop.map((industry, index) => (
                <IndustryTag
                  key={`left-${index}`}
                  icon={industry.icon}
                  text={industry.text}
                />
              ))}
              {industriesTop.map((industry, index) => (
                <IndustryTag
                  key={`left-dup-${index}`}
                  icon={industry.icon}
                  text={industry.text}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-[10px] py-1"
              style={scrollRightStyle}
            >
              {industriesBottom.map((industry, index) => (
                <IndustryTag
                  key={`right-${index}`}
                  icon={industry.icon}
                  text={industry.text}
                />
              ))}
              {industriesBottom.map((industry, index) => (
                <IndustryTag
                  key={`right-dup-${index}`}
                  icon={industry.icon}
                  text={industry.text}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM (aligned) */}
        <div
          className="mt-4 text-left"
          style={{ minHeight: BOTTOM_MIN_HEIGHT_PX }}
        >
          <h4 className="my-0 text-black text-[18px] sm:text-[20px] font-bold">
            {bottomTitle}
          </h4>
          <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mt-2 mb-2">
            {bottomDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const AvatarCard = ({
  startNumber,
  endNumber,
  title,
  avatars,
  bottomTitle,
  bottomDescription,
}) => {
  const [count, setCount] = useState(startNumber);
  const [animating, setAnimating] = useState(false);
  const hasAnimated = useRef(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          animateCount(startNumber, endNumber);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [startNumber, endNumber]);

  const animateCount = (start: number, end: number) => {
    setAnimating(true);
    let current = start;
    const step = Math.ceil((end - start) / 20);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
        setAnimating(false);
      } else {
        setCount(current);
      }
    }, 50);
  };

  return (
    <div
      className="bg-[#F3F4F6] rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
      ref={cardRef}
    >
      <div className="flex flex-col justify-between h-full py-[24px] px-[16px] gap-[10px]">
        {/* TOP */}
        <div>
          <div className="text-main-primary text-[40px] sm:text-[50px] md:text-[60px] font-bold text-center py-2 rounded-lg overflow-hidden">
            <div className={animating ? "count-animate" : ""}>
              {count}+
            </div>
          </div>
          <h4 className="my-0 text-center text-[14px] text-gray-400 uppercase font-semibold mb-4">
            {title}
          </h4>

          <div className="flex justify-center py-4 sm:py-8">
            <div className="isolate flex -space-x-4 overflow-hidden">
              <StaticImage
                src="../../../assets/images/avatar/1.png"
                alt="Team member 1"
                className="relative z-10 inline-block h-12 w-12 sm:h-16 sm:w-16 rounded-full "
                width={64}
                height={64}
              />
              <StaticImage
                src="../../../assets/images/avatar/2.png"
                alt="Team member 2"
                className="relative z-20 inline-block h-12 w-12 sm:h-16 sm:w-16 rounded-full"
                width={64}
                height={64}
              />
              <StaticImage
                src="../../../assets/images/avatar/3.png"
                alt="Team member 3"
                className="relative z-30 inline-block h-12 w-12 sm:h-16 sm:w-16 rounded-full"
                width={64}
                height={64}
              />
              <StaticImage
                src="../../../assets/images/avatar/4.png"
                alt="Team member 4"
                className="relative z-40 inline-block h-12 w-12 sm:h-16 sm:w-16 rounded-full"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM (aligned) */}
        <div
          className="mt-4 text-left"
          style={{ minHeight: BOTTOM_MIN_HEIGHT_PX }}
        >
          <h4 className="my-0 text-black text-[18px] sm:text-[20px] font-bold">
            {bottomTitle}
          </h4>
          <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mt-2 mb-2">
            {bottomDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const LogoCard = ({ bottomTitle, bottomDescription }) => {
  return (
    <div className="bg-[#F3F4F6] rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex flex-col justify-between h-full py-[24px] px-[16px] gap-[10px]">
        {/* TOP */}
        <div>
          <div className="overflow-hidden mt-4">
            <div
              className="flex gap-[10px] min-w-[250%]"
              style={scrollLeftStyle}
            >
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/archicad.png"
                  alt="archicad"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/autodesk.png"
                  alt="autodesk"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/microstation.png"
                  alt="microstation"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/navisworks.png"
                  alt="navisworks"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/openbuildings.png"
                  alt="openbuildings"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/openplant.png"
                  alt="openplant"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/Revizto_logo.png"
                  alt="Revizto_logo"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="bg-white whitespace-nowrap py-[7px] px-[5px] rounded-[12px]">
                <StaticImage
                  src="../../../assets/images/company/sketchup.png"
                  alt="sketchup"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden my-8">
            <div
              className="flex gap-[10px] min-w-[250%]"
              style={scrollRightStyle}
            >
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/autodesk.png"
                  alt="autodesk"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/microstation.png"
                  alt="microstation"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/navisworks.png"
                  alt="navisworks"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/openbuildings.png"
                  alt="openbuildings"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/openplant.png"
                  alt="openplant"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/Revizto_logo.png"
                  alt="Revizto_logo"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/sketchup.png"
                  alt="sketchup"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/archicad.png"
                  alt="archicad"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden mb-8">
            <div
              className="flex gap-[10px] min-w-[250%]"
              style={scrollLeftStyle}
            >
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/openbuildings.png"
                  alt="openbuildings"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/openplant.png"
                  alt="openplant"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/Revizto_logo.png"
                  alt="Revizto_logo"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/sketchup.png"
                  alt="sketchup"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/archicad.png"
                  alt="archicad"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/autodesk.png"
                  alt="autodesk"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/microstation.png"
                  alt="microstation"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
              <div className="py-[7px] px-[5px] rounded-[12px] bg-white whitespace-nowrap">
                <StaticImage
                  src="../../../assets/images/company/navisworks.png"
                  alt="navisworks"
                  className="h-[25px] sm:h-[35px] w-auto"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM (aligned) */}
        <div
          className="mt-4 text-left px-[16px]"
          style={{ minHeight: BOTTOM_MIN_HEIGHT_PX }}
        >
          <h4 className="my-0 text-black text-[18px] sm:text-[20px] font-bold">
            {bottomTitle}
          </h4>
          <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed mt-2 mb-2">
            {bottomDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = ({ id }) => {
  const industriesCard1 = [
    {
      icon: <FaBuilding size={16} />,
      text: "Architecture & Engineering",
    },
    { icon: <FaHardHat size={16} />, text: "Construction" },
    { icon: <FaRoad size={16} />, text: "Infrastructure" },
    { icon: <FaOilCan size={16} />, text: "Oil & Gas" },
    { icon: <FaWater size={16} />, text: "Utilities" },
    { icon: <FaCity size={16} />, text: "Real Estate Development" },
  ];

  const industriesCard2 = [
    { icon: <FaHospital size={16} />, text: "Healthcare" },
    { icon: <FaIndustry size={16} />, text: "Manufacturing" },
    { icon: <FaSubway size={16} />, text: "Transportation" },
    { icon: <FaShoppingCart size={16} />, text: "Retail" },
    {
      icon: <FaLandmark size={16} />,
      text: "Government & Public Sector",
    },
    { icon: <FaGraduationCap size={16} />, text: "Education" },
  ];

  const avatars = [
    {
      src: "../../../assets/images/avatar/1.png",
      alt: "Team member 1",
    },
    {
      src: "../../../assets/images/avatar/2.png",
      alt: "Team member 2",
    },
    {
      src: "../../../assets/images/avatar/3.png",
      alt: "Team member 3",
    },
    {
      src: "../../../assets/images/avatar/4.png",
      alt: "Team member 4",
    },
  ];

  return (
    <section id={id} className="py-10 md:py-[70px] lg:py-[106px]">
      <AnimationStyles />
      <div className="tw-container text-left">
        <div className="mb-8 md:mb-10 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-0">
            Here's why AEC firms trust us with their digital project
            delivery
          </p>
        </div>

        {/* items-stretch ensures equal card heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <StatsCard
            startNumber={100}
            endNumber={200}
            title="Projects across all industries"
            industriesTop={industriesCard1}
            industriesBottom={industriesCard2}
            bottomTitle="BIM Compliance"
            bottomDescription="We help consultants and contractors achieve full BIM compliance—ensuring designs meet regulatory standards and reduce costly delays."
          />

          <AvatarCard
            startNumber={100}
            endNumber={200}
            title="BIM Coordinators"
            avatars={avatars}
            bottomTitle="BIM Management"
            bottomDescription="Gain access to a network of BIM Professionals across architectural, structural, plumbing, and electrical disciplines."
          />

          <LogoCard
            bottomTitle="Any BIM Software"
            bottomDescription="Whether it's Revit, ArchiCAD, IFC or Tekla—we support all major BIM software for diverse project use cases."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
