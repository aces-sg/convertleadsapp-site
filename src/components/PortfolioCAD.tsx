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
      m1: file(
        relativePath: { eq: "microstation/microstation-1.webp" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      m2: file(
        relativePath: { eq: "microstation/microstation-2.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      m3: file(
        relativePath: { eq: "microstation/microstation-3.jpeg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      m4: file(
        relativePath: { eq: "microstation/microstation-ui.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let projectData = [
    {
      id: "cad-structure",
      src: imagedata.m1,
      alt: "2D shop drawings for water reclamation plant",
      title: "Structural Detailing",
      description:
        "Includes reinforcement layouts, concrete fills, and bar bending schedules for structural construction.",
    },
    {
      id: "cad-architecture",
      src: imagedata.m2,
      alt: "BIM model conversion for Cross Island Line",
      title: "Architectural Drawings",
      description:
        "Precise detailing of architectural finishes coordinated with structural elements to guide site execution.",
    },
    {
      id: "cad-corenet",
      src: imagedata.m3,
      alt: "ISO 19650 documentation for health campus",
      title: "Local Code Compliance",
      description:
        "Drawings formatted to meet CORENET submission standards, including plans, sections, and 3D views.",
    },
    {
      id: "cad-mechanical",
      src: imagedata.m4,
      alt: "Converted CAD drawings of airport terminal from PDF",
      title: "Combined Services Drawings",
      description:
        "Scanned (legacy) PDFs are converted into editable CAD files for Combined Services Drawings development.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-10 pb-6 overflow-hidden md:pt-16 bg-[#FEF4B4]"
    >
      <div className="tw-container">
        <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-0">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
              Past Projects
            </h2>
            <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
          </div>
          <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
            24/7 Managed CAD & BIM Support for your projects.{" "}
            <a href="/contact/">Schedule a call</a> online now.
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
                <div id={project.id} className="scroll-anchor h-60">
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
