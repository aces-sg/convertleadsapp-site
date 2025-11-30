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
      bungalow: file(relativePath: { eq: "portfolio/1.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      waste: file(relativePath: { eq: "portfolio/2.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      project: file(relativePath: { eq: "portfolio/3.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      plant: file(relativePath: { eq: "portfolio/4.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      water: file(relativePath: { eq: "portfolio/5.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      rail: file(relativePath: { eq: "portfolio/6.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      hospital: file(relativePath: { eq: "portfolio/7.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      warehouse: file(
        relativePath: { eq: "portfolio/warehouse.webp" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let projectData = [
    {
      src: imagedata.bungalow,
      alt: "Residential Development – Bukit Timah",
      title: "Residential Development – Bukit Timah",
      description:
        "Architectural and Structural BIM models were developed together, ensuring coordinated design, buildability, and reduced delays during construction of this large residential compound.",
    },
    {
      src: imagedata.waste,
      alt: "Industrial Facility – Waste Treatment Plant",
      title: "Industrial Facility – Waste Treatment Plant",
      description:
        "Complex M&E systems required frequent clash checks. BIM coordination minimized rework, streamlined installation, and supported timely completion of the waste treatment facility.",
    },
    {
      src: imagedata.project,
      alt: "Infrastructure – DE 107 Rail Project",
      title: "Infrastructure – DE 107 Rail Project",
      description:
        "A BIM model was linked with the construction schedule, creating a 4D simulation that optimized site planning, minimized conflicts, and improved delivery efficiency.",
    },
    {
      src: imagedata.plant,
      alt: "Industrial Facility – Tuas Water Reclamation Plant",
      title: "Industrial Facility – Tuas Water Reclamation Plant",
      description:
        "Clash resolution was completed before producing drawings, ensuring coordinated outputs, minimizing errors, and supporting efficient progress from design to construction documentation.",
    },
    {
      src: imagedata.warehouse,
      alt: "Conservation Project – Heritage Building",
      title: "Conservation Project – Heritage Building (Scan to BIM)",
      description:
        "Point cloud data was converted into a BIM model, delivered in native and IFC formats, ensuring compatibility, supporting preservation, and reducing renovation risks.",
    },
  ];
  ``;

  return (
    <section
      id="portfolio"
      className="pt-10 pb-6 overflow-hidden md:pt-16 bg-[#FEF4B4]"
    >
      <div className="tw-container">
        <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-0">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold -tracking-[0.9px]">
              Our Portfolio
            </h2>
            <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
          </div>
          <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
            We provide integrated BIM modelling services, supporting a
            variety of BIM software such as Revit, OpenBuildings,
            Archicad, Tekla, and more.
          </p>
        </div>
        <div className="mt-6 md:mt-10 lg:mt-16">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            speed={800}
            loop={true}
            pagination={pagination}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
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
                  <h3 className="text-[18px] text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
                    {project.title}
                  </h3>
                )}
                {project.title && (
                  <p className="text-gray-900 -tracking-[0.9px] mb-0 ">
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
