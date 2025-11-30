import {
  Box,
  Button,
  FormField,
  Heading,
  Select,
  Text,
  TextInput,
} from "grommet";
import { Add, Close } from "grommet-icons";
import React, { useCallback, useMemo } from "react";
import useBooking from "../useBooking";
import "./PropertyDetails.scss";

const PropertyDetails = () => {
  const { values, setValues } = useBooking();

  const handleInputSpace = useCallback(
    (index: number, fieldName: string) => (value: string) => {
      const spaces = [...values.spaces];
      spaces[index][fieldName] = value;
      setValues((v) => ({
        ...v,
        spaces,
      }));
    },
    [values, setValues]
  );

  const handleAddSpace = useCallback(() => {
    setValues((v) => ({
      ...v,
      spaces: [
        ...v.spaces,
        {
          name: "",
          size: 0,
          sizeUnit: "ft²",
        },
      ],
    }));
  }, []);

  const handleRemoveSpace = useCallback(
    (index) => () => {
      setValues((v) => ({
        ...v,
        spaces: v.spaces.filter((s, i) => i !== index),
      }));
    },
    []
  );

  const spacesFilled = useMemo(() => {
    const spaces = values.spaces;
    return (
      spaces.filter(
        (space) => !!space.name && space.size > 0 && !!space.sizeUnit
      ).length === spaces.length
    );
  }, [values.spaces]);

  return (
    <div>
      <Heading level="4">Property Details</Heading>
      {values.currentPropertyPart === 2 && (
        <>
          <Heading level="5">
            Tell us about the areas you would like captured.
          </Heading>

          {values.spaces.map((space, index) => {
            return (
              <div className="space-container" key={`space-${index}`}>
                <Box
                  style={{
                    display: index === 0 ? "none" : "flex",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    icon={<Close size="small" />}
                    label="Remove"
                    size="small"
                    onClick={handleRemoveSpace(index)}
                  />
                </Box>
                <FormField
                  label="Name of the space to be captured"
                  name="space_name"
                >
                  <TextInput
                    placeholder=""
                    value={space.name}
                    onChange={(e) =>
                      handleInputSpace(index, "name")(e.target.value)
                    }
                  />
                </FormField>
                <div className="size-row">
                  <FormField
                    className="size-input"
                    label="Approximate size"
                    name="size"
                  >
                    <TextInput
                      placeholder=""
                      value={space.size}
                      type="number"
                      onChange={(e) =>
                        handleInputSpace(
                          index,
                          "size"
                        )(e.target.value)
                      }
                    />
                  </FormField>
                  <FormField
                    label="Size unit"
                    name="sizeUnit"
                    style={{ flexGrow: 1 }}
                  >
                    <Select
                      placeholder=""
                      value={space.sizeUnit}
                      options={["m²", "ft²"]}
                      onChange={({ value }) =>
                        handleInputSpace(index, "sizeUnit")(value)
                      }
                      dropHeight="large"
                      clear={{ position: "bottom" }}
                    />
                  </FormField>
                </div>
              </div>
            );
          })}

          <div className="property-total">
            <Text size="medium">
              <strong>Total:</strong>
            </Text>
            <Text size="medium">
              <strong>{values.spaces.length}</strong> spaces totaling{" "}
              <strong>
                {values.spaces.reduce((prev, space) => {
                  let v = 0;
                  if (space.sizeUnit === "m²")
                    v = Math.ceil(
                      parseInt(space.size.toString()) * 10.764
                    );
                  else v = parseInt(space.size.toString());
                  return prev + v;
                }, 0)}{" "}
                ft²
              </strong>
            </Text>
          </div>

          <div className="p-actions">
            <div></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Button
                label="Back"
                size="large"
                onClick={() =>
                  setValues((s) => ({
                    ...s,
                    currentPropertyPart: 1,
                  }))
                }
              ></Button>
              <Button
                label="Next"
                size="large"
                primary
                disabled={!spacesFilled}
                onClick={() =>
                  setValues((s) => ({
                    ...s,
                    completedProperty: 3,
                    currentPropertyPart: 0,
                    currentTab: "schedule",
                  }))
                }
              ></Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyDetails;

const propertyType = [
  { label: "Residential", value: "residential" },
  {
    label: "Commercial",
    value: "commercial",
  },
];
