import React from "react";
import { MdRateReview } from "react-icons/md";
import { WhyData } from "./data";
import { FaFileUpload, FaPeopleArrows } from "react-icons/fa";

const IconWrapper = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col flex-1 gap-4 lg:gap-6">
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-20 h-20 shrink-0 text-black">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-lg font-medium md:mb-2">{title}</h3>
        <p className="text-left max-w-[768px]">{description}</p>
      </div>
    </div>
  );
};

const WhyConvert = ({ id, handleDefault }) => {
  return (
    <section className="py-8 mt-12">
      <div className="tw-container">
        <div className="flex-row mb-8 md:mb-10 lg:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2 ">
            Benefits of 4D BIM
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-0">
            Use of 4D BIM for Construction Productivity
          </p>
        </div>
        <div
          onClick={handleDefault}
          className="grid md:grid-cols-3 md:gap-x-10 lg:gap-x-[116px] gap-y-8 md:gap-y-12 lg:gap-y-16 cursor-pointer"
        >
          {WhyData.map((service, index) => {
            return (
              <IconWrapper
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyConvert;
