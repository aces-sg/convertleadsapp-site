import {
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  MaskedInput,
  TextInput,
} from 'grommet';
import React from 'react'
import { useForm, useFormContext } from "react-hook-form";
import ACES from "../../assets/aces-favicon.svg"

export interface IProp {
  formStep: any,
  nextFormStep: any
}

const emailValidation = [
  {
    regexp: new RegExp("[^@ \\t\\r\\n]+@"),
    message: "Enter a valid email address.",
    status: "error",
  },
  {
    regexp: new RegExp(
      "[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"
    ),
    message: "Enter a valid email address.",
    status: "error",
  },
  {
    regexp: new RegExp(
      "[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"
    ),
    message: "Enter a valid email address.",
    status: "error",
  },
];

const PersonalInfo = (props: IProp) => {

  const { formStep, nextFormStep } = props

  const { handleSubmit, register } = useFormContext();

  const onSubmit = () => {
    nextFormStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={formStep === 0 ? { display: "block", width: "100%" } : { display: "none" }}>
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
            <Box
              width="100%"
              gap="small"
              margin={{ horizontal: "large" }}
            >
              <Box gap="small" direction="column" width="100%" fill>
                <FormField
                  label="Full Name"
                  htmlFor="fullName-sign-up-simple"
                  name="fullName"
                  width="100%"
                  required={{ indicator: false }}
                  {...register('fullName')}
                >
                  <TextInput
                    id="fullName-sign-up-simple"
                    name="fullName"
                    placeholder="Lee Xiao Wei"
                  />
                </FormField>
                <FormField
                  label="Email"
                  htmlFor="email-sign-up-simple"
                  name="email"
                  width="100%"
                  validate={emailValidation}
                  required={{ indicator: false }}
                  {...register('email')}
                >
                  <MaskedInput
                    id="email-sign-up-simple"
                    name="email"
                    placeholder="xiaowei.lee@gmail.com"
                    type="email"
                  />
                </FormField>
                <FormField
                  label="Phone Number"
                  name="phone_number"
                  width="100%"
                  required={{ indicator: false }}
                  {...register('phone_number')}
                >
                  <MaskedInput
                    id="phone_number"
                    name="phone_number"
                    placeholder="98182777"
                  />
                </FormField>
              </Box>
            </Box>
            <Button
              id="confirm-button"
              label="Next"
              size="large"
              primary
              type="submit"
              style={{ fontWeight: "bold", marginTop: "1em" }}
            />
          </Box>
        </Box>
      </Box>
    </Form>
  )
}

export default PersonalInfo