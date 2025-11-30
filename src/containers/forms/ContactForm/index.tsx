import React, { useState, useContext } from "react";
import { Box, Button, Text, Heading } from "grommet";
import { generateClient } from "aws-amplify/api";
import { useForm, Controller } from "react-hook-form";
import { navigate } from "gatsby";
import { triggerNotification } from "../../../graphql/mutations";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import { MailOption } from "grommet-icons";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactForm.css";

const client = generateClient();

const ContactForm = ({ defaultValues, setSubmit }) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
    getValues,
  } = useForm({ defaultValues });

  async function onSubmit() {
    let { fullName, email, phone, company, requirements } =
      getValues();
    let msg = {
      name: fullName,
      email: email,
      phone: phone,
      company: company,
      requirements: defaultValues?.req,
      ref: defaultValues?.ref,
    };
    try {
      let res = await client.graphql({
        query: triggerNotification,
        variables: {
          input: msg,
        },
      });

      console.log("form submission succes", res);
    } catch (err) {
      console.log("error in form submission: ", err);
    }
    setSubmit(true);
    navigate("/success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
      <Box align="center" width="100">
        <Box width="large">
          <Box width="100%" align="center" gap="xsmall">
            <Box width="100%" pad="none">
              <Box className="field_row">
                <label htmlFor="fullName">Name *</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={errors.fullName ? "error" : ""}
                  {...register("fullName", {
                    required: "This field is required.",
                    value: defaultValues?.name,
                  })}
                />
                {errors.fullName && (
                  <div className="msg-error">
                    {errors.fullName.message}
                  </div>
                )}
              </Box>

              <Box className="field_row">
                <label htmlFor="email-sign-up-simple">Email *</label>
                <input
                  id="email-sign-up-simple"
                  aria-invalid={errors.email ? "true" : "false"}
                  className={errors.email ? "error" : ""}
                  {...register("email", {
                    required: "This field is required.",
                    value: defaultValues?.email,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "Must be valid email. example@yourdomain.com",
                    },
                  })}
                  name="email"
                  type="email"
                  form="novalidatedform"
                />
                {errors.email && (
                  <div className="msg-error">
                    {errors.email.message}
                  </div>
                )}
              </Box>

              <Box className="field_row">
                <label htmlFor="phone">Phone Number *</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                    validate: (value: string) => {
                      return (
                        isValidPhoneNumber(value) ||
                        "Enter valid phone number"
                      );
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value || ""}
                      onChange={onChange}
                      defaultCountry="SG"
                      className={errors.phone ? "error" : ""}
                    />
                  )}
                />
                {errors.phone && (
                  <div className="msg-error">
                    {errors.phone.message}
                  </div>
                )}
              </Box>

              <Box className="field_row">
                <label htmlFor="company">Company *</label>
                <input
                  id="company"
                  className={errors.company ? "error" : ""}
                  aria-invalid={errors.company ? "true" : "false"}
                  {...register("company", {
                    required: "This field is required.",
                  })}
                  name="company"
                  form="novalidatedform"
                />
                {errors.company && (
                  <div className="msg-error">
                    {errors.company.message}
                  </div>
                )}
              </Box>

              <Box className="field_row">
                <label htmlFor="requirements">Requirements *</label>
                <textarea
                  id="requirements"
                  rows={3}
                  className={errors.requirements ? "error" : ""}
                  aria-invalid={
                    errors.requirements ? "true" : "false"
                  }
                  {...register("requirements", {
                    required: "This field is required.",
                    value: defaultValues?.req,
                  })}
                  name="requirements"
                  form="novalidatedform"
                />
                {errors.requirements && (
                  <div className="msg-error">
                    {errors.requirements.message}
                  </div>
                )}
              </Box>
            </Box>
          </Box>
          <Button
            id="confirm-button"
            label="Get in Touch"
            size="large"
            primary
            type="submit"
          />
        </Box>
        <Box margin={"2em 0 0 0 "} align="center" gap="medium">
          <Heading as="h4" size="small" margin="none">
            Other contact options
          </Heading>
          <Box direction="row" alignContent="center" gap="small">
            <FaWhatsapp size="1.4em" />
            <Text>+65 98182573</Text>
          </Box>
          <Box direction="row" alignContent="center" gap="small">
            <MailOption />
            <Text>enquiry@bim.com.sg</Text>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default ContactForm;
