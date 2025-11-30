import React from "react";
import CurlyArrow from "assets/svgs/curly-arrow.svg";
import data from "content/estates.yaml";
import { navigate } from "gatsby";
const Portfolio = () => {
  const s3RootUrl = "https://d14s2iums0fe7u.cloudfront.net";
  const getBrochureUrl = (shortcode: string) =>
    `${s3RootUrl}/hdb/brochures/${shortcode.toLowerCase()}.pdf`;

  return (
    <section
      id="portfolio"
      className="pt-10 pb-6 overflow-hidden md:pt-16 bg-main-primary"
    >
      <div className="tw-container">
        <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-0">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
              Latest BTO Listings
            </h2>
            <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
          </div>
          <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
            Get your CAD plans, 3D models, and brochures for free.
          </p>
        </div>

        <div className="mt-6 md:mt-10 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((project) => (
            <div
              id={`card-${project.shortcode}`}
              key={project.id}
              className="rounded-xl border bg-white p-4 shadow-sm space-y-2"
            >
              <div className="h-60">
                <img
                  src={`${s3RootUrl}/hdb/image/${project.shortcode.toLowerCase()}.webp`}
                  alt={project.shortcode}
                  loading="lazy"
                  className="w-full h-full rounded-xl object-cover hover:cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() =>
                    navigate(`/interior/bto/${project.shortcode}`)
                  }
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {project.name}
              </h3>
              <p className="text-sm text-gray-800">
                View{" "}
                <a
                  href={getBrochureUrl(project.shortcode)}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  brochure
                </a>
                ,{" "}
                <a
                  href={project.cadUrl}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CAD
                </a>{" "}
                and{" "}
                <a
                  href={project.threedUrl}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3D model
                </a>
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
