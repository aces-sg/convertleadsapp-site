import React from "react";
import ShareIcon from "assets/svgs/services/share.svg";
import ModelIcon from "assets/svgs/services/model.svg";
import ReviewIcon from "assets/svgs/services/review.svg";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  Icon: React.ComponentType;
};

const ProcessStep = ({
  number,
  title,
  description,
  Icon,
}: ProcessStepProps) => (
  <div className="flex mb-1 md:mb-6 relative z-10">
    <div className="mr-3 md:mr-6">
      <div className="w-14 h-14 rounded-full bg-main-primary flex items-center justify-center mt-6">
        <Icon />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
    <div
      className="text-gray-400 mt-6"
      style={{ fontSize: "60px", lineHeight: "60px" }}
    >
      {number}
    </div>
  </div>
);

type HowItWorksProcessProps = {
  title?: string;
  description?: string;
};

const HowItWorksProcess = ({
  title = "How It Works",
  description = "Here's our approach to quality delivery",
}: HowItWorksProcessProps) => {
  return (
    <section className="py-6 md:py-[40px] lg:py-[80px] bg-gray-100">
      <div className="tw-container">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[30%]">
            <h2 className="text-3xl md:text-4xl font-extrabold -tracking-[0.9px] mb-2">
              {title}
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              {description}
            </p>
          </div>
          <div className="md:w-[70%]">
            <div className="relative">
              <ProcessStep
                number="1"
                title="Upload Files"
                description="Share any available CAD plans, 3D models, or other relevant files with us. We will review them and provide feedback."
                Icon={ShareIcon}
              />

              <div className="absolute left-8 top-6 w-[2px] h-72 bg-[#FBDA05]"></div>

              <ProcessStep
                number="2"
                title="3D Modelling & Shop Drawings"
                description="Our BIM Managers work with your project team to develop the BIM models and 2D files."
                Icon={ModelIcon}
              />

              <ProcessStep
                number="3"
                title="BIM Review"
                description="Review our BIM models in a cloud environment, and identify any issues that you may see. We help you extract the necessary views needed for your project."
                Icon={ReviewIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksProcess;
