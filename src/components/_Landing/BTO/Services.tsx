import React from "react";
import OurServices from "./OurServices";

// Import other SVGs similarly

const ServiceBox = ({ id, title, description, href, icon }) => {
  return (
    <a id={id} className="flex flex-col text-center" href={href}>
      <div>{icon}</div>
      <div>
        <h3 className="mb-1 text-lg font-medium md:mb-2">{title}</h3>
        <p className="max-w-[768px] text-gray-400 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </a>
  );
};

const Services = ({ id }) => {
  return (
    <section id={id} className="py-10 md:py-[70px] lg:py-[106px]">
      <div className="tw-container text-center">
        <div className="mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-0">
            Here's why we are trusted to deliver quality BIM Services
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-10 lg:gap-x-[116px] gap-y-8 md:gap-y-12 lg:gap-y-16">
          {OurServices.map((service) => (
            <ServiceBox
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
