import { Heading, Text } from "grommet";
import { Checkmark } from "grommet-icons";
import React from "react";
import "./ServiceIntro.css";

const ServiceIntro = () => {
  return (
    <div className="booking-service-intro">
      <Heading
        className="booking-service-intro-heading"
        size="small"
        level={6}
      >
        What's Included
      </Heading>
      {[
        "A highly precise engineering scan of your asset (<20mm tolerance at 10m)",
        "Delivered within 2 weeks",
        "Captured by a registered surveyor",
        "Review scan before final acceptance",
        "(Optional) BIM model of your asset",
      ].map((v, i) => {
        return (
          <div className="intro-row" key={`intro-${i}`}>
            <Checkmark size="small" />
            <Text size="xsmall">{v}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceIntro;
