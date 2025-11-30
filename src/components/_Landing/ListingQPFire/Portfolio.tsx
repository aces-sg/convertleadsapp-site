import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CurlyArrow from "assets/svgs/curly-arrow.svg";

const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '"><span class="pagination-inner"></span></span>'
      );
    },
  };

  const imagedata = useStaticQuery(graphql`
    {
      cad: file(
        relativePath: { eq: "portfolio/tender-drawing.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      bim: file(
        relativePath: { eq: "portfolio/construction-drawing.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      fourd: file(relativePath: { eq: "portfolio/4d.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      scan: file(relativePath: { eq: "portfolio/revit.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let projectData = [
    {
      src: imagedata.cad,
      alt: "FSSD Design Submission",
      title: "FSSD Submission",
      description:
        "Prepare fire protection drawings and BIM models for submission during design stage in compliance with SCDF/FSSD guidelines.",
    },
    {
      src: imagedata.bim,
      alt: "FSC Inspection",
      title: "Fire Safety Certificate",
      description:
        "Generate as-built fire protection models and annotated drawings to support Fire Safety Certificate (FSC) application during project handover.",
    },
    {
      src: imagedata.fourd,
      alt: "Fire Protection Clash Resolution",
      title: "Clash Resolution",
      description:
        "Coordinate sprinkler, hydrant, and hose reel layouts in BIM to resolve clashes with structural and architectural elements.",
    },
    {
      src: imagedata.scan,
      alt: "Authority Comments & Resubmissions",
      title: "CORENET Resubmissions",
      description:
        "Revise BIM and CAD drawings to address SCDF/FSSD reviewer comments, including follow-up resubmissions.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-10 pb-6 overflow-hidden md:pt-16 bg-main-primary"
    >
      <div className="tw-container">
        <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-0">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
              Fire Protection Workflows
            </h2>
            <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
          </div>
          <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
            Work with a team of experienced BIM & CAD Experts for
            CORENET submissions.
          </p>
        </div>
        <div className="mt-6 md:mt-10 lg:mt-16">
          <Swiper
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="h-60">
                  <GatsbyImage
                    image={getImage(project.src)}
                    alt={project.alt}
                    className="w-full h-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </div>
                {project.title && (
                  <h3 className="text-2xl text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
                    {project.title}
                  </h3>
                )}
                {project.title && (
                  <p className="text-gray-900 -tracking-[0.9px] mb-0">
                    {project.description}
                  </p>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
