import React, { useState } from "react";
import BimForContractors from "components/_Landing/Main";
import DefaultHeader from "components/Header/DefaultHeader"
import SEO from "components/Seo";
import Layout from "layouts/Layout";
import { ServicesJsonLD } from "seo/Services";

const Services = () => {
  const [showModal, setShowModal] = useState(true);
  const [category, setCategory] = useState<string | null>(null);
  return (
    <Layout>
      <DefaultHeader />
      <BimForContractors />
    </Layout>
  );
};

export default Services;

export const Head = () => (
  <>
    <SEO
      title={"Bimeco - Your Partner in Digital Construction"}
      description="Implement advanced BIM workflows at the construction site to improve productivity, reduce errors, and deliver projects on time and budget. Learn more about how we can help you implement data, simulation, and analytics in your next project."
      pathname="/services/"
    />
    {ServicesJsonLD()}
  </>
);