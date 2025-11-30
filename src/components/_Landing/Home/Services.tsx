import React from "react";
import ThreeDBIM from "assets/svgs/threed-bim-black.svg";
import FourDBIM from "assets/svgs/fourd-bim-black.svg";
import FiveDBIM from "assets/svgs/fived-bim-black.svg";
import ClashDetection from "assets/svgs/clash-detection-black.svg";
import BuildVerification from "assets/svgs/as-built-verification-black.svg";
import ScanBIM from "assets/svgs/scan-bim-black.svg";
import { OurServices } from "assets/data";

// Import other SVGs similarly

const Service3D = () => {
  let { title, description } = OurServices[0];
  return (
    <div className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row">
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
  let { title, description } = OurServices[1];
  return (
    <div className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row">
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
  let { title, description } = OurServices[2];
  return (
    <div className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row">
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
  let { title, description } = OurServices[3];
  return (
    <div className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row">
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
  let { title, description } = OurServices[4];
  return (
    <div className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row">
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
  let { title, description } = OurServices[5];
  return (
    <div className="flex flex-col items-start flex-1 gap-4 md:items-center lg:gap-6 md:flex-row">
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
  return (
    <section
      id={id}
      className="py-10 md:py-[70px] lg:py-[106px] bg-black"
    >
      <div className="tw-container">
        <div className="mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-extrabold -tracking-[0.9px] mb-2">
            Our Services
          </h2>
          <p className="text-left max-w-[768px] text-gray-400 text-base md:text-lg mb-0">
            Leverage our digital delivery capabilities to enhance your
            engineering project teams
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:gap-x-10 lg:gap-x-[116px] gap-y-8 md:gap-y-12 lg:gap-y-16">
          <Service3D />
          <Service4D />
          <Service5D />
          <ServiceClashDetection />
          <ServiceBuildVerification />
          <ServiceScan />
        </div>
      </div>
    </section>
  );
};

export default Services;
