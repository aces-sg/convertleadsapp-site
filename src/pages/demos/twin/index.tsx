import React from "react";
import Layout from "components/Layout";
import Footer from "components/Footer";
import VideoPlayer from "components/VideoPlayer";
import { DigitalTwinShowcaseJsonLD } from "seo/Demos";

const Demo = () => {
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="tw-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
              Digital Twin Walkthrough
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combine BIM models with IoT data to create a digital
              twin of your project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              bucketName="d14s2iums0fe7u.cloudfront.net"
              videoKey="videos/twin-walkthrough.mp4"
              title="Digital Twin Showcase"
              autoPlay={true}
              controls
            />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Demo;

export const Head = () => <>{DigitalTwinShowcaseJsonLD()}</>;
