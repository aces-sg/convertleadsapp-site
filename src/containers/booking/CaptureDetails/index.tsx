import { Button, Heading, RadioButtonGroup } from "grommet";
import React, { useCallback, useState } from "react";
import useBooking from "../useBooking";
import "./CaptureDetails.scss";

const CaptureDetails = () => {
  const { values, setValues } = useBooking();

  const handleInput = useCallback(
    (fieldName: string) => (value: string) => {
      setValues((v) => ({
        ...v,
        [fieldName]: value,
      }));
    },
    [setValues]
  );

  return (
    <div>
      <Heading level="4">Scan Details</Heading>
      {values.currentPropertyPart === 1 && (
        <>
          <Heading level="5">What type of property is it??</Heading>
          <RadioButtonGroup
            name="property-type"
            className="property-radio"
            options={propertyType}
            value={values.propertyType}
            onChange={(e) =>
              handleInput("propertyType")(e.target.value)
            }
          />
          <div className="actions">
            <Button
              label="Back"
              size="large"
              onClick={() =>
                setValues((s) => ({
                  ...s,
                  currentPropertyPart: 0,
                }))
              }
            ></Button>
            <Button
              label="Next"
              size="large"
              primary
              onClick={() =>
                setValues((s) => ({
                  ...s,
                  completedProperty: 2,
                  currentPropertyPart: 2,
                  spaces:
                    s.spaces.length === 0
                      ? [
                          {
                            name: values.address,
                            size: 0,
                            sizeUnit: "m²",
                          },
                        ]
                      : s.spaces,
                }))
              }
            ></Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CaptureDetails;

const propertyType = [
  {
    label: "Commercial",
    value: "commercial",
  },
  { label: "Residential", value: "residential" },
];
