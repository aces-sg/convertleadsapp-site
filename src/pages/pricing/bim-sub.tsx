import React, { useEffect } from "react";
import Footer from "components/Footer";
import { CTA } from "components/CTA";
import Compare from "components/CompareSubscription";
import { navigate } from "gatsby";
import Layout from "components/Layout";
import { BIMPackagesJsonLD } from "seo/Pricing"

export default function Pricing() {
  return (
    <>
      <Layout>
        <Compare />
        <CTA
          header={"On-demand BIM Services"}
          description="Need BIM & CAD Support for your project? Subscribe to our BIM Services today"
          ctaText="Contact Us"
          handleClick={() => navigate("/contact")}
        />
      </Layout>

      {/* Footer */}
      <Footer />
    </>
  );
}

export const Head = () => (
  <>
    {BIMPackagesJsonLD()}
  </>
);