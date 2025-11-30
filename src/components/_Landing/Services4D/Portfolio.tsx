import React from "react";
import Project1 from "./images/img1.png";
import Project2 from "./images/img2.png";
import Project3 from "./images/img3.png";
import Project4 from "./images/img4.png";
import Project5 from "./images/img5.png";
import CurlyArrow from "assets/svgs/curly-arrow.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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

  return (
    <section
      id="portfolio"
      className="pt-10 pb-6 overflow-hidden md:pt-16 bg-gray-50"
    >
      <a id="revit" />
      <a id="archicad" />
      <a id="autocad" />
      <div className="tw-container">
        <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-2.5 md:gap-0">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold -tracking-[0.9px] mb-0">
              Past Projects
            </h2>
            <CurlyArrow className="hidden -mb-10 lg:ml-10 xl:ml-20 lg:block" />
          </div>
          <p className="text-left md:text-right max-w-[518px] text-gray-700 text-sm md:text-base mb-0">
            We create detailed BIM models from design software such as
            Revit, Autocad, Archicad, Tekla, and more.
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
            <SwiperSlide>
              <img
                src={Project1}
                alt="project"
                className="h-48 w-full object-cover rounded-2xl md:rounded-[20px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Project2}
                alt="project"
                className="h-48 w-full object-cover rounded-2xl md:rounded-[20px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Project3}
                alt="project"
                className="h-48 w-full object-cover rounded-2xl md:rounded-[20px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Project4}
                alt="project"
                className="h-48 w-full object-cover rounded-2xl md:rounded-[20px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Project5}
                alt="project"
                className="h-48 w-full object-cover rounded-2xl md:rounded-[20px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
