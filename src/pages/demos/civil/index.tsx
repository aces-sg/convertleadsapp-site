import React from "react";
import Layout from "components/Layout";
import Footer from "components/Footer";
import VideoPlayer from "components/VideoPlayer";
import { CivilShowcaseJsonLD } from "seo/Demos";

const Demo = () => {
  return (
    <Layout>
      <section className="py-12 bg-white">
        <div className="tw-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-4">
              Civil Walkthrough
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcase site construction works with a low LOD BIM and
              project schedule.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              bucketName="d14s2iums0fe7u.cloudfront.net"
              videoKey="videos/civil-walkthrough.mp4"
              title="Civil Showcase"
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

export const Head = () => <>{CivilShowcaseJsonLD()}</>;
