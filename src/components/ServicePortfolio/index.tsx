import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CurlyArrow from "assets/svgs/curly-arrow.svg";

const ServicePortfolio = () => {
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
      bungalow: file(
        relativePath: { eq: "services/3D_Conversions.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      waste: file(relativePath: { eq: "portfolio/9.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      project: file(relativePath: { eq: "portfolio/10.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      plant: file(relativePath: { eq: "portfolio/11.png" }) {
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
      alt: "Residential",
      title: "Residential",
      description:
        "The captured point clouds were used by this property manager to showcase their latest listings with accurate, high-detail visuals.",
    },
    {
      src: imagedata.waste,
      alt: "B1 Factory @ Tuas",
      title: "B1 Factory @ Tuas",
      description:
        "As part of ongoing digitization works, Scan to BIM was comissioned to create a Digital Twin of the owner’s factory assts.",
    },
    {
      src: imagedata.project,
      alt: "Warehouse Project",
      title: "Warehouse Project",
      description:
        "The client needed to assess the condition of M&E fittings in the warehouse prior to an energy conservation project.",
    },
    {
      src: imagedata.plant,
      alt: "Heritage Building",
      title: "Heritage Building",
      description:
        "As part of conservation measures, a scan of the building was created to assess the viability of the renovation works.",
    },
    {
      src: imagedata.warehouse,
      alt: "Heritage Building -  Scan to BIM",
      title: "Heritage Building - Scan to BIM",
      description:
        "A surveyor needed to recreate the BIM model of a heritage building from point cloud data. The BIM model was develop in both native and IFC formats to ensure compatibility with the client’s requirements.",
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
              Uses of Scan to BIM
            </h2>
            <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
          </div>
          <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
            Explore our portfolio of Scan to BIM projects. Explore how
            firms are using scan data to rapidly create accurate,
            high-detail digital twins of their assets.
          </p>
        </div>
        <div className="mt-6 md:mt-10 lg:mt-16">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
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
                  <p className="text-gray-900 -tracking-[0.9px] mb-0 line-clamp-2">
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

export default ServicePortfolio;
