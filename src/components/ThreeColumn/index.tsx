import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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

const ThreeColumn = ({ id, services }) => {
  return (
    <section id={id} className="py-10">
      <div className="tw-container text-center">
        <div className="mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
            How it Works
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-0">
            Our approach to 4D BIM development
          </p>
        </div>
        <div className="grid md:grid-cols-3 md:gap-x-10 lg:gap-x-[116px] gap-y-8 md:gap-y-12">
          {services.map((service) => (
            <ServiceBox
              id={undefined}
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumn;
