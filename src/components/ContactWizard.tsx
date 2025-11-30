import React, { useState } from "react";
import {
  Page,
  PageContent,
  Grid,
  Box,
  Paragraph,
  Heading,
} from "grommet";
import ContactForm from "../containers/forms/ContactForm";
import Layout from "./Layout";
import styled from "styled-components";
import Map from "./Map";
import PersonalInfo from "../containers/forms/PersonalInfo"
import CompanyInfo from "../containers/forms/CompanyInfo"
import RequirementInfo from "../containers/forms/RequirementInfo"
import FormCard from "../containers/forms/FormCard";
import { useForm, FormProvider } from "react-hook-form";

const ContactWizard = () => {

  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const methods = useForm();


  const { getValues } = methods

  return (
    <Page>
      <PageContent>
        <FormProvider {...methods} >
          <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
              <CompanyInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <RequirementInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
          </FormCard>
        </FormProvider>
      </PageContent>
    </Page>
  );
};

export default ContactWizard;
