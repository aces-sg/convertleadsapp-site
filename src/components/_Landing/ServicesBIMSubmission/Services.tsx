import React from "react";
import { MdRateReview } from "react-icons/md";
import { OurServices } from "./data";
import { FaFileUpload, FaPeopleArrows } from "react-icons/fa";
// Import other SVGs similarly

const IconWrapper = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start flex-1 gap-4 lg:gap-6">
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-20 h-20 shrink-0 text-black">
        {icon}
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

const StepOne = () => {
  let { title, description } = OurServices[0];
  return (
    <IconWrapper
      icon={<FaFileUpload size={30} />}
      title={title}
      description={description}
    />
  );
};

const StepTwo = () => {
  let { title, description } = OurServices[1];
  return (
    <IconWrapper
      icon={<FaPeopleArrows size={30} />}
      title={title}
      description={description}
    />
  );
};

const StepThree = () => {
  let { title, description } = OurServices[2];
  return (
    <IconWrapper
      icon={<MdRateReview size={30} />}
      title={title}
      description={description}
    />
  );
};

const Services = ({ id, handleDefault }) => {
  return (
    <section
      id={"how-it-works"}
      className="py-10 md:py-[70px] lg:py-[106px] bg-black"
    >
      <div className="tw-container">
        <div className="mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl text-white font-extrabold -tracking-[0.9px] mb-2">
            How it Works
          </h2>
          <p className="text-left max-w-[768px] text-gray-400 text-base md:text-lg mb-0">
            Create your BIM objects in 3 easy steps.
          </p>
        </div>
        <div
          onClick={handleDefault}
          className="grid md:grid-cols-3 md:gap-x-10 lg:gap-x-[116px] gap-y-8 md:gap-y-12 lg:gap-y-16 cursor-pointer"
        >
          <StepOne />
          <StepTwo />
          <StepThree />
        </div>
      </div>
    </section>
  );
};

export default Services;
