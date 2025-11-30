import {
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  TextArea,
} from "grommet";
import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import ACES from "../../assets/aces-favicon.svg";
import { IProp } from "./PersonalInfo";
import { navigate } from "gatsby-link";

const RequirementInfo = (props: IProp) => {
  const { formStep, nextFormStep } = props;

  const { handleSubmit, register } = useFormContext();

  const onSubmit = (values: any) => {
    const formData = values;
    navigate("/");
    console.log(formData);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={
        formStep === 2
          ? { display: "block", width: "100%" }
          : { display: "none" }
      }
    >
      <Box align="center" width="100%" pad="medium">
        <Box
          width="100%"
          pad={{ horizontal: "medium" }}
          justify="center"
          align="center"
          gap="xsmall"
          margin={{ top: "small" }}
        >
          <Anchor
            icon={<ACES height="5vh" />}
            label=""
            style={{
              fontSize: "25px",
              fontFamily: "Helvetica",
            }}
          />
        </Box>
        <Box width="large">
          <Box width="100%" align="center" gap="xsmall">
            <Box gap="small" direction="column" width="100%" fill>
              <FormField
                label="Requirements"
                name="requirements"
                width="100%"
                required={{ indicator: false }}
                {...register("requirements")}
              >
                <TextArea
                  id="requiremnets"
                  name="requirements"
                  placeholder="Requirements"
                />
              </FormField>
            </Box>
            <Button
              id="confirm-button"
              label="Get in Touch"
              size="large"
              primary
              type="submit"
              style={{ fontWeight: "bold", marginTop: "1em" }}
              // onClick={() => onSubmit()}
            />
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default RequirementInfo;
