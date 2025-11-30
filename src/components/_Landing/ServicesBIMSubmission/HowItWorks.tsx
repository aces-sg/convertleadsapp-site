import React from "react";
import { HowData } from "./data";
import { navigate } from "gatsby";

const IconWrapper = ({ icon, title, description, onClick }) => {
  return (
    <div className="flex flex-col items-center flex-1 gap-4 lg:gap-6">
      <div className="rounded-xl md:rounded-2xl lg:rounded-3xl bg-main-primary flex items-center justify-center w-20 h-20 shrink-0 text-black">
        {icon}
      </div>
      <div>
        <h3 className=" mb-1 text-lg font-medium md:mb-2">{title}</h3>
        <p className="max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = ({ id, handleDefault }) => {
  return (
    <section
      id={"how-it-works"}
      className="py-10 md:py-[70px] lg:py-[106px] bg-gray-100"
    >
      <div className="tw-container text-center">
        <div className="mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
            How it Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-10 lg:gap-x-[116px] gap-y-8 md:gap-y-12 lg:gap-y-16 ">
          {HowData.map((service, index) => {
            return (
              <IconWrapper
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => navigate(service.href)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
