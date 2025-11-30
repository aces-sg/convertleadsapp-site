import React from "react";

export const CTA = ({ handleClick }) => {
  return (
    <section className="py-10 md:py-16 bg-main-primary overflow-hidden">
      <div className="tw-container">
        <div className="flex flex-col items-start justify-between gap-4 md:items-center md:flex-row">
          <div className="flex flex-col max-w-3xl w-full md:w-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-extrabold -tracking-[0.9px] max-w-[680px] mb-2 md:mb-0">
              Create a 4D BIM Model
            </h2>
            <p className="text-sm md:text-base text-black mt-2">
              Work with our local team for onsite & remote BIM support
              today.
            </p>
          </div>
          <button
            onClick={() => handleClick()}
            className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-shadow-sm bg-black py-[13px] px-4 md:px-[25px] shrink-0 w-full sm:w-auto max-w-[200px] mt-4 md:mt-0"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
