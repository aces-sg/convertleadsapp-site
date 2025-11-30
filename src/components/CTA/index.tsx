import React from "react";
import Arrow from "assets/svgs/arrow-black.svg";

interface CTAProps {
  id?: string;
  header?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  handleClick: () => void;
}

export const CTA = ({
  id = "cta-bottom",
  header,
  description,
  ctaText,
  ctaLink,
  handleClick,
}: CTAProps) => {
  return (
    <div className="px-0 py-0 md:px-auto md:pb-10">
      <section className="mt-12 py-8 px-4 md:px-16 md:py-6 bg-main-primary rounded-[0px] md:rounded-[20px] mx-auto overflow-hidden">
        <div className="flex flex-col items-start justify-between gap-4 md:items-center md:flex-row">
          <div className="flex flex-col w-full md:w-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-extrabold mb-2 md:mb-0">
              {header || "Get Started on Your BIM Journey"}
            </h2>

            <p className="text-sm md:text-base text-black mt-2">
              {description ||
                "Work with our network of DDM-certified BIM professionals on your next project. Reach out for CVs matched to your scope."}
            </p>
          </div>
          <div
            className="hidden mt-6 lg:block"
            style={{ width: "320px" }}
          >
            <Arrow style={{ width: "100%", height: "auto" }} />
          </div>
          <button
            id={id}
            onClick={() => handleClick()}
            className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-shadow-sm bg-black py-[13px] px-4 md:px-[25px] shrink-0 w-full md:w-auto md:max-w-[200px] mt-4 md:mt-0"
          >
            {ctaText || "Create a Project"}
          </button>
        </div>
      </section>
    </div>
  );
};
