import {
  Button,
  FormField,
  Heading,
  RadioButtonGroup,
  Text,
  TextArea,
  TextInput,
} from "grommet";
import React, { useCallback, useContext, useMemo } from "react";
import useBooking from "../useBooking";

import "./Contact.css";
import { generateClient } from "aws-amplify/api";
import { triggerNotification } from "../../../graphql/mutations";
import { GlobalDispatchContext } from "../../../context/GlobalContextProvider";

const client = generateClient();

const Contact = () => {
  const { values, setValues } = useBooking();
  const dispatch = useContext(GlobalDispatchContext);

  const handleContactInput = useCallback(
    (fieldName) => (e) => {
      setValues((v) => ({
        ...v,
        contactDetail: {
          ...v.contactDetail,
          [fieldName]: e.target.value,
        },
      }));
    },
    []
  );

  const contactFilled = useMemo(() => {
    const contact = values.contactDetail;
    return !!contact.name && !!contact.email && !!contact.phoneNumber;
  }, [values.contactDetail]);

  const onSubmit = async () => {
    console.log(
      "You have done... :)" + "\n" + JSON.stringify(values)
    );
    try {
      let res = await client.graphql({
        query: triggerNotification,
        variables: {
          input: JSON.stringify(values),
        },
      });
    } catch (err) {
      console.log("failed to submit", err);
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          message:
            "Failed to submit. Please contact the admin at enquiry@bim.com.sg",
          type: "error",
        },
      });
    }
    dispatch({
      type: "SET_MESSAGE",
      payload: {
        message: "Your booking has been submitted",
        type: "success",
      },
    });
  };

  return (
    <div>
      <Heading level="3">Who is the site contact?</Heading>
      <Text size="medium">
        Our Surveyor will call the site contact when they arrive.
      </Text>
      <RadioButtonGroup
        name="contact-type"
        className="contact-type-radio"
        options={contactType}
        value={values.contactType}
        onChange={(e) =>
          setValues((v) => ({
            ...v,
            contactType: e.target.value,
          }))
        }
      />
      <FormField
        label="Name"
        name="contact-name"
        className="field-row"
      >
        <TextInput
          name="contact-name"
          placeholder=""
          value={values.contactDetail.name}
          onChange={handleContactInput("name")}
        />
      </FormField>
      <FormField
        label="Email"
        name="contact-email"
        className="field-row"
      >
        <TextInput
          name="contact-email"
          placeholder=""
          value={values.contactDetail.email}
          onChange={handleContactInput("email")}
        />
      </FormField>
      <FormField
        label="Phone"
        name="contact-phone"
        className="field-row"
      >
        <TextInput
          name="contact-phone"
          placeholder="+65 97304830"
          value={values.contactDetail.phoneNumber}
          onChange={handleContactInput("phoneNumber")}
        />
      </FormField>

      <div className="contact-will-be-onsite">
        <Text size="small">
          Will they be there when the Surveyor arrives?
        </Text>
        <RadioButtonGroup
          name="contact-will-be-onsite"
          className="contact-will-be-onsite-radio"
          options={[
            { label: "Yes", value: true },
            { label: "No", value: false },
          ]}
          value={values.contactWillBeOnSite}
          onChange={(e) => {
            setValues((v) => ({
              ...v,
              contactWillBeOnSite:
                e.target.value === "true" ? true : false,
            }));
          }}
        />
      </div>

      <div className="contact-helper">
        <Heading
          size="small"
          level={6}
          style={{ maxWidth: "unset", margin: "12px 0" }}
        >
          A Surveyor will call you once they arrive at your site. If
          you have any special instructions, please add them below.
        </Heading>
        <FormField
          label="Access instructions (ex: parking instructions, wait for MCST to arrive etc)"
          htmlFor="text-area"
          placeholder=" "
        >
          <TextArea
            aria-label="text area"
            value={values.contactHelperText}
            rows={3}
            onChange={(e) =>
              setValues((v) => ({
                ...v,
                contactHelperText: e.target.value,
              }))
            }
          />
        </FormField>
      </div>
      <div className="actions">
        <Button
          label="Back"
          size="large"
          onClick={() =>
            setValues((s) => ({
              ...s,
              currentTab: "schedule",
            }))
          }
        ></Button>
        <Button
          label="Submit"
          size="large"
          primary
          disabled={!contactFilled}
          onClick={onSubmit}
        ></Button>
      </div>
    </div>
  );
};

export default Contact;

const contactType = [
  { label: "It's me", value: "me" },
  {
    label: "It's someone else",
    value: "other",
  },
];
