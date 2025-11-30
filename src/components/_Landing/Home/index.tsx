import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { faq } from "assets/data";
import Services from "./Services";

import MC3D from "assets/svgs/mingcute_cube-3d-line.svg";
import abb from "assets/images/abb.png";
import cpg from "assets/images/cpg.png";
import sj from "assets/images/sj.png";
import shmz from "assets/images/shmz.png";
import hdb from "assets/images/hdb.png";
import BiFolderX from "assets/svgs/bi_folder-x.svg";
import ArrowCube from "assets/svgs/arrow-cube.svg";
import BiFolder3D from "assets/svgs/bi_folder-3d.svg";
import VaddinChart3D from "assets/svgs/vaadin_chart-3d.svg";
import CurlyArrow from "assets/svgs/curly-arrow.svg";
import Project1 from "assets/images/project-1.png";
import Project2 from "assets/images/project-2.png";
import Project3 from "assets/images/project-3.png";
import Project4 from "assets/images/project-4.png";
import Project5 from "assets/images/project-5.png";
import Project6 from "assets/images/project-6.png";
import QuoteYellow from "assets/svgs/quote-yellow.svg";
import FeedbackFirst from "assets/images/feedback-1.png";
import FeedbackSecond from "assets/images/feedback-2.png";
import Modal3D from "assets/svgs/threed-model.svg";
import ConstructionSiteFlatline from "assets/svgs/construction-site-flatline.svg";
import ConstructionSiteOutline from "assets/svgs/construction-site-outline.svg";
import Footer from "components/Footer";
import "./index.css";
import { navigate } from "gatsby";

let viewerUrl: String = process.env.GATSBY_VIEWER_URL;

let links = [
  {
    title: "Scan to BIM",
    url: "/blog/an-overview-of-the-scan-to-bim-process-with-lidar-and-photogrammetry/",
  },
  {
    title: "Services",
    url: "/#bim-services",
  },
  {
    title: "Portfolio",
    url: "/#portfolio",
  },
  {
    title: "FAQ",
    url: "/#faq",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Home = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModalClose = () => {
    setShowModal(!showModal);
  };

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
    <div>
      {/* Header */}
      <main>
        {/* Hero Section */}
        <section className="pt-10 md:pt-[57px] pb-9 bg-gray-50">
          <div className="tw-container">
            <div className="relative z-0">
              <BiFolderX className="absolute top-0 hidden left-10 md:block -z-10" />
              <ArrowCube className="absolute left-0 -bottom-[130px] w-[340px] md:block hidden -z-10" />
              <BiFolder3D className="absolute top-0 hidden right-10 md:block -z-10" />
              <VaddinChart3D className="absolute bottom-0 right-0 hidden md:block -z-10" />
              <div className="text-center max-w-[810px] mx-auto">
                <label className="inline-flex items-center gap-1 py-1 px-2 md:px-3 rounded-full bg-main-primary text-xs text-black font-medium tracking-[0.3px] uppercase mb-4 md:mb-6">
                  <MC3D />
                  THE DIGITAL DELIVERY SPECIALISTS
                </label>
                <h1 className="mb-5 text-4xl font-extrabold text-black md:text-5xl">
                  The Digital Integrators
                </h1>
                <p className="mb-0 text-sm text-gray-500 md:text-base lg:text-xl">
                  With over 20 years of experience in the AEC
                  industry, we specialize in providing top-tier BIM
                  and CAD modeling services. Trust us to expertly
                  handle the digital delivery of your projects.
                </p>
                <div className="flex items-center justify-center gap-2 mt-5 md:mt-8 lg:mt-10 md:gap-4">
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate("/#bim-services")}
                  >
                    BIM Services
                  </button>
                  <button
                    type="button"
                    className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-shadow-sm bg-black py-[13px] px-4 md:px-[25px]"
                    onClick={() => navigate(`/about/#bim-services`)}
                  >
                    Other Services
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-16 lg:mt-[90px]">
              <p className="text-gray-500 text-sm font-semibold tracking-[0.35px] uppercase text-center mb-0">
                Our Clients
              </p>
              <div className="grid auto-cols-[100px] md:auto-cols-auto md:grid-cols-5 grid-flow-col lg:grid-flow-row gap-3 overflow-x-scroll lg:overflow-x-hidden xl:w-full lg:gap-5 mt-5 items-center">
                <img
                  src={abb}
                  alt="abb"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={cpg}
                  alt="cpg"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={sj}
                  alt="sj"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={shmz}
                  alt="shmz"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
                <img
                  src={hdb}
                  alt="hdb"
                  className="mix-blend-multiply block mx-auto w-[150px] h-[100px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Past Projects */}
        <section
          id="portfolio"
          className="pt-10 pb-6 overflow-hidden md:pt-16 bg-main-primary"
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
                We provide integrated BIM modelling services,
                supporting a variety of BIM software such as Revit,
                OpenBuildings, Archicad, Tekla, and more.
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
                    className="size-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Project2}
                    alt="project"
                    className="size-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Project3}
                    alt="project"
                    className="size-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Project4}
                    alt="project"
                    className="size-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Project5}
                    alt="project"
                    className="size-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Project6}
                    alt="project"
                    className="size-full rounded-2xl md:rounded-[20px] object-cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* Our Services */}
        <Services id="bim-services" />
        {/* Feedback */}
        <section className="py-10 md:pt-[70px] lg:pt-[122px] md:pb-[70px] bg-[rgba(251,218,5,0.10)]">
          <div className="tw-container">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-[60px]">
              <div>
                <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] mb-2">
                  Here's what our clients have to say.
                </h2>
              </div>
              <div>
                <div className="relative z-0 mt-5 md:mt-8 lg:mt-12">
                  <QuoteYellow className="absolute -left-3 -top-2 -z-10" />
                  <p className="mb-0 text-base italic font-medium text-black lg:text-lg">
                    With the help of Bimeco, we've managed to work
                    with them to cover up gaps in our documentation by
                    scanning some as-built structures to BIM. It has
                    really saved us when manpower is tight during a
                    labor crunch
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-5 md:gap-4 md:mt-6">
                  <img
                    src={FeedbackFirst}
                    alt="Catherine Li,"
                    className="rounded-full size-14 border-[3px] border-main-primary"
                  />
                  <div>
                    <h5 className="mb-0 text-base font-semibold text-black">
                      Catherine Li,
                    </h5>
                    <p className="mb-0 text-sm text-gray-500">
                      BIM Manager @ TerraFirm
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative z-0 mt-5 md:mt-8 lg:mt-12">
                  <QuoteYellow className="absolute -left-3 -top-2 -z-10" />
                  <p className="mb-0 text-base italic font-medium text-black lg:text-lg">
                    The types of HVAC systems that are manufactured by
                    our firm were really complex and needed to be
                    modelled into our GC's federated BIM environment.
                    With Bimeco I was able to get the support needed.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-5 md:gap-4 md:mt-6">
                  <img
                    src={FeedbackSecond}
                    alt=" Peter Tsai"
                    className="rounded-full size-14 border-[3px] border-main-primary"
                  />
                  <div>
                    <h5 className="mb-0 text-base font-semibold text-black">
                      Peter Tsai
                    </h5>
                    <p className="mb-0 text-sm text-gray-500">
                      Project Manager @ ClimatePro HVAC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why US */}
        <section className="bg-white">
          <div className="pt-10 md:py-14 lg:py-16">
            <div className="tw-container">
              <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] text-center mb-0">
                Here's why customers love us
              </h2>
            </div>
          </div>
          <div className="py-5 md:py-8">
            <div className="tw-container">
              <div className="flex flex-col items-center justify-between w-full gap-4 md:gap-6 lg:gap-8 md:flex-row">
                <div className="md:w-[400px] lg:w-[500px] xl:w-[600px]">
                  <Modal3D className="h-[250px] sm:h-auto w-[300px] md:w-[400px] lg:w-[500px]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="mb-2 font-semibold text-black md:text-xl lg:text-2xl lg:mb-3">
                    BIM Modelling
                  </h3>
                  <p className="mb-0 text-sm text-gray-500 md:text-base">
                    Simply share your files in the various CAD formats
                    like .dwg and .dgn. Our BIM specialists will
                    create the BIM models according to your specified
                    LOD and LOI requirements.
                  </p>
                  <div className="mt-5 md:mt-8 lg:mt-10">
                    <a
                      href="/contact"
                      className="inline-flex transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 md:py-8 bg-gray-50">
            <div className="tw-container">
              <div className="flex flex-col-reverse items-center justify-between w-full gap-4 md:gap-6 lg:gap-8 md:flex-row">
                <div className="flex-1 text-left">
                  <h3
                    id="scanToBim"
                    className="mb-2 font-semibold text-black md:text-xl lg:text-2xl lg:mb-3"
                  >
                    Scan to BIM
                  </h3>
                  <p className="mb-0 text-sm text-gray-500 md:text-base">
                    Do you have an existing point cloud scan that you
                    want to convert to BIM? Or do you want to perform
                    clash checks between the as-built model and the
                    design BIM model? Generate comprehensive clash
                    reports for sharing with your project team.
                  </p>
                  <div className="mt-5 md:mt-8 lg:mt-10">
                    <a
                      href={links[0].url}
                      className="inline-flex transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    >
                      Scan to BIM
                    </a>
                  </div>
                </div>
                <div className="md:w-[400px] lg:w-[500px] xl:w-[600px]">
                  <ConstructionSiteFlatline className="h-[250px] sm:h-auto w-[300px] md:w-[400px] lg:w-[500px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 md:py-8">
            <div className="tw-container">
              <div className="flex flex-col items-center justify-between w-full gap-4 md:gap-6 lg:gap-8 md:flex-row">
                <div className="md:w-[400px] lg:w-[500px] xl:w-[600px]">
                  <ConstructionSiteOutline className="h-[250px] sm:h-auto w-[300px] md:w-[400px] lg:w-[500px]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="mb-2 font-semibold text-black md:text-xl lg:text-2xl lg:mb-3">
                    BIM Delivery for Projects
                  </h3>
                  <div className="space-y-4">
                    <p className="mb-0 text-sm text-gray-500 md:text-base">
                      Want to implement virtual design and
                      construction workflows in your project? Work
                      with our BIM Managers to create a BIM Execution
                      Plan and implement BIM workflows like 4D
                      scheduling, 5D quantity-takeoffs for cost
                      estimation, and 6D BIM for facility management.
                    </p>
                    <p className="mb-0 text-sm text-gray-500 md:text-base">
                      Schedule a call with our BIM consultants to
                      assess your project needs.
                    </p>
                  </div>
                  <div className="mt-5">
                    <a
                      href="/contact"
                      className="inline-flex transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-main-primary py-[13px] px-4 md:px-[25px]"
                    >
                      Project Discussion
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-10 md:py-16 bg-gray-50" id="faq">
          <div className="tw-container">
            <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px] text-left mb-0">
              Frequently asked questions
            </h2>

            <div className="pb-5 mt-5 space-y-5 border-0 border-b border-gray-200 border-solid md:mt-6 lg:mt-8 md:pb-6 lg:pb-8 md:space-y-6 lg:space-y-8">
              {faq.map((faq) => (
                <div
                  className="flex flex-col items-start gap-3 pt-4 border-0 border-t border-gray-200 border-solid md:gap-6 lg:gap-8 md:pt-5 lg:pt-6 md:flex-row"
                  key={faq.id}
                >
                  <div className="md:w-[300px] lg:w-[488px]">
                    <p className="mb-0 text-base font-semibold text-black ">
                      {faq.question}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="mb-0 text-sm text-gray-500 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start justify-between gap-4 pt-5 mt-5 border-0 border-t border-gray-200 border-solid md:mt-6 lg:mt-8 md:items-center lg:gap-10 pd:mt-6 lg:pt-8 md:flex-row">
              <h5 className="mb-0 text-base font-medium text-black md:text-xl">
                Can’t find the answer you’re looking for? Reach out to
                our customer support team.
              </h5>

              <CurlyArrow className="hidden lg:block" />
              <button
                onClick={() => navigate("/contact")}
                className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-shadow-sm bg-black py-[13px] px-4 md:px-[25px] shrink-0"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="py-10 md:py-16 bg-main-primary">
          <div className="tw-container">
            <div className="flex flex-col items-start justify-between gap-4 md:items-center md:flex-row">
              <h2 className="text-3xl md:text-4xl text-black font-extrabold -tracking-[0.9px]  max-w-[680px] mb-0">
                Need to create BIM models and CAD drawings for
                regulatory submissions?
              </h2>
              <button
                onClick={() => navigate("/contact")}
                className="transition-all duration-300 ease-in-out hover:opacity-80 text-sm md:text-base text-white font-medium capitalize rounded-md shadow-shadow-sm bg-black py-[13px] px-4 md:px-[25px] shrink-0"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* {showModal && <Modal removeModal={handleModalClose} />} */}
    </div>
  );
};

export default Home;
