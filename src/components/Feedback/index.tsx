import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import QuoteYellow from "assets/svgs/quote-yellow.svg";

const Feedback = () => {
  return (
    <section className="py-4 bg-[#FBDA051A]">
      <div className="tw-container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-[60px]">
          <div>
            <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
              Here's what our clients have to say.
            </h2>
          </div>
          <div>
            <div className="relative z-0 mt-5 md:mt-8 lg:mt-12">
              <QuoteYellow className="absolute -left-3 -top-2 -z-10" />
              <p className="mb-0 text-base italic font-semibold text-black lg:text-lg">
                With the help of Bimeco, we've managed to work with
                them to cover up gaps in our documentation by scanning
                some as-built structures to BIM. It has really saved
                us when manpower is tight during a labor crunch
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5 md:gap-4 md:mt-6">
              <StaticImage
                src="../../assets/images/feedback-1.png"
                alt="Catherine Li,"
                className="rounded-full size-14 border-[3px] border-main-primary"
              />
              <div>
                <h5 className="text-base font-semibold text-black mb-0">
                  Catherine Li,
                </h5>
                <p className="text-[12px] text-gray-500 mt-0">
                  BIM Manager
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative z-0 mt-5 md:mt-8 lg:mt-12">
              <QuoteYellow className="absolute -left-3 -top-2 -z-10" />
              <p className="mb-0 text-base italic font-semibold text-black lg:text-lg">
                The types of HVAC systems that are manufactured by our
                firm were really complex and needed to be modelled
                into our GC's federated BIM environment. With Bimeco I
                was able to get the support needed.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5 md:gap-4 md:mt-6">
              <StaticImage
                src="../../assets/images/feedback-2.png"
                alt=" Peter Tsai"
                className="rounded-full size-14 border-[3px] border-main-primary"
              />
              <div>
                <h5 className="mb-0 text-base font-semibold text-black mb-0">
                  Peter Tsai
                </h5>
                <p className="mb-0 text-[12px] text-gray-500 mt-0">
                  Project Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
