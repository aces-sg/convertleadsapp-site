'use client';

import * as React from 'react';
import {
  FaChartLine,
  FaCode,
  FaFlask,
  FaSearch,
  FaTachometerAlt,
} from 'react-icons/fa';
import '@/lib/env';

import {
  generateAggregateRatingSchema,
  generateOrganizationSchema,
  generateReviewSchema,
  generateWebSiteSchema,
} from '@/lib/schema';

import { CompactFAQSection } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MultipleSchema } from '@/components/Schema';

import {
  ADDRESS_SINGAPORE,
  AGGREGATE_RATING,
  COMPANY_DESCRIPTION,
  COMPANY_EMAIL,
  COMPANY_LOGO,
  COMPANY_NAME,
  COMPANY_URL,
  CONTACT_INFO,
  HOME_FAQS,
  REVIEWS,
  SOCIAL_PROFILES,
} from '@/constant/schema-data';

/* eslint-disable @next/next/no-img-element */

// Image URLs from Unsplash - Web development & Asian professionals
const imgHero =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'; // Team collaboration
const imgCaseStudy =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80'; // Asian team working
const imgITConsultant =
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'; // Workspace laptop
const imgTeamPhoto =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'; // Team meeting
const imgMoreFeatures =
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'; // Web development
const imgGetStarted =
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80'; // Asian business team
const imgTestimonial =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'; // Asian woman professional
const imgEllipse194 =
  'https://www.figma.com/api/mcp/asset/c6abc960-1f1a-48e2-8603-18847e286303';
const imgBxBxlTwitter =
  'https://www.figma.com/api/mcp/asset/2510f86d-1eb9-465d-a96b-a4ece53751f9';
const imgBxBxlInstagram =
  'https://www.figma.com/api/mcp/asset/f822badc-f64a-4803-ac18-d510619cb140';
const imgBxBxlDiscord =
  'https://www.figma.com/api/mcp/asset/77c6aa91-b335-469d-a2d6-ef1f49816ad7';
const imgFrame4 =
  'https://www.figma.com/api/mcp/asset/f52e67f0-f958-4160-bdf9-d131c66cb1f5';
const imgStar =
  'https://www.figma.com/api/mcp/asset/5cd09a00-e1ac-434e-a2e6-43dda376df87';
const imgStar1 =
  'https://www.figma.com/api/mcp/asset/8a339cb8-268c-4efa-9a0e-6d4a35e8e648';
const imgOrnament =
  'https://www.figma.com/api/mcp/asset/750a24fe-57e0-4f9c-9b29-a7ade2260829';
const imgChevronFilledRight =
  'https://www.figma.com/api/mcp/asset/70e4cae8-b805-466d-afa0-bfbca6632903';
const imgChevronFilledRight1 =
  'https://www.figma.com/api/mcp/asset/7058ab95-ab32-42d6-bca8-1a16c8f69804';
const imgFrame =
  'https://www.figma.com/api/mcp/asset/8778c86a-fc7b-4546-a9f0-ce6e867b2315';
const imgFrame20 =
  'https://www.figma.com/api/mcp/asset/a3bfd12c-f6e3-48a4-8295-cd94f237f465';

function TestimonialCard() {
  return (
    <div className='w-full max-w-[476px] mx-auto mb-8 lg:mb-[-100px]'>
      <div className='backdrop-blur-[32px] backdrop-filter bg-[rgba(255,255,255,0.6)] rounded-[32px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.05)] p-6 lg:p-8'>
        <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] text-center tracking-[-0.54px] mb-4'>
          "The analytics dashboard alone has helped us identify our
          best-performing products and optimize our marketing spend. ROI
          tracking is incredible!"
        </p>
        <p className='font-bold leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] tracking-[-0.54px] text-center'>
          Michael Torres{' '}
          <span className='font-normal'>- Fitness Studio Owner</span>
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  // Generate schema markup for homepage
  const organizationSchema = generateOrganizationSchema({
    name: COMPANY_NAME,
    url: COMPANY_URL,
    logo: COMPANY_LOGO,
    description: COMPANY_DESCRIPTION,
    email: COMPANY_EMAIL,
    telephone: CONTACT_INFO.phoneSingapore,
    address: ADDRESS_SINGAPORE,
    sameAs: SOCIAL_PROFILES,
  });

  const websiteSchema = generateWebSiteSchema({
    name: COMPANY_NAME,
    url: COMPANY_URL,
    description: COMPANY_DESCRIPTION,
  });

  const aggregateRatingSchema = generateAggregateRatingSchema(
    AGGREGATE_RATING,
    { name: COMPANY_NAME, url: COMPANY_URL }
  );

  const reviewSchemas = REVIEWS.map((review) =>
    generateReviewSchema(review, { name: COMPANY_NAME, url: COMPANY_URL })
  );

  return (
    <main className='bg-white relative w-full min-h-screen overflow-x-hidden'>
      <Header />

      {/* Schema Markup for SEO */}
      <MultipleSchema
        schemas={[
          organizationSchema,
          websiteSchema,
          aggregateRatingSchema,
          ...reviewSchemas,
        ]}
        id='homepage-schema'
      />

      {/* Hero Section */}
      <div className='relative min-h-[700px] sm:min-h-[800px] lg:h-[985px] overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            alt='Hero background'
            className='absolute inset-0 w-full h-full object-cover pointer-events-none'
            src={imgHero}
          />
        </div>
        <div className='absolute inset-0 bg-[rgba(15,15,15,0.2)]' />
        <div className='hidden lg:block absolute bottom-[564px] opacity-30 right-[1025px] size-[887px]'>
          <div className='absolute inset-[-2.71%_-3.61%_-4.51%_-3.61%]'>
            <img
              alt=''
              className='block max-w-none size-full'
              height='951'
              src={imgEllipse194}
              width='951'
            />
          </div>
        </div>
        <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center p-12 mb-32'>
          {/* Main Headline */}
          <div className='flex-1 flex items-center justify-center w-full max-w-5xl mb-8 lg:mb-16'>
            <h1 className='font-black leading-tight lg:leading-[104px] mix-blend-hard-light text-3xl sm:text-5xl lg:text-[96px] text-center text-white tracking-tight lg:tracking-[-2.88px]'>
              Get Your Free Custom Website That Drives Real Sales
            </h1>
          </div>

          {/* Description & CTA */}
          <div className='w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-8 lg:gap-12 max-w-7xl'>
            <div className='flex flex-col gap-4 items-center lg:items-start text-center lg:text-left flex-1'>
              <h2 className='font-extrabold leading-tight lg:leading-[1.6] not-italic text-xl sm:text-2xl lg:text-[36px] text-white tracking-tight lg:tracking-[-1.08px]'>
                Built for SEO & Conversions. No Drag-and-Drop Required.
              </h2>
              <p className='font-semibold leading-[1.6] not-italic text-base sm:text-lg lg:text-[18px] text-white tracking-[-0.54px] max-w-lg'>
                Stop losing customers to outdated websites. Get a professional,
                high-converting website with built-in tracking, version control,
                and continuous optimization—completely free for qualified small
                businesses.
              </p>
            </div>
            <div className='backdrop-blur-lg backdrop-filter bg-white flex gap-[10px] items-center px-6 lg:px-[24px] py-3 lg:py-[16px] rounded-[32px] cursor-pointer hover:bg-gray-100 transition-colors shrink-0'>
              <p className='font-bold leading-[1.6] not-italic text-[#ffc000] text-base lg:text-[18px] tracking-[-0.54px] whitespace-nowrap'>
                Get Your Free Website
              </p>
              <div className='size-[20px] lg:size-[24px]'>
                <img
                  alt=''
                  className='block max-w-none size-full'
                  src={imgChevronFilledRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Band */}
      <div className='py-8 lg:py-12 px-4 bg-gray-50'>
        <div className='container mx-auto'>
          <p className='text-center text-gray-500 text-sm lg:text-base font-medium mb-6 lg:mb-8'>
            Trusted by leading brands
          </p>
          <div className='flex flex-wrap items-center justify-center gap-8 lg:gap-12'>
            <img
              src='/images/aceplp-logo.png'
              alt='ACEPLP'
              className='h-10 w-24 lg:h-12 lg:w-32 object-contain transition-all opacity-80 hover:opacity-100'
            />

            <img
              src='/images/aia-logo.png'
              alt='AIA'
              className='h-10 w-24 lg:h-12 lg:w-32 object-contain transition-all opacity-80 hover:opacity-100'
            />

            <img
              src='/images/bimeco-logo.png'
              alt='Bimeco'
              className='h-10 w-24 lg:h-12 lg:w-32 object-contain transition-all opacity-80 hover:opacity-100'
            />

            <img
              src='/images/buildingSMART-website-logo.png'
              alt='buildingSMART'
              className='h-10 w-24 lg:h-12 lg:w-32 object-contain transition-all opacity-80 hover:opacity-100'
            />

            <img
              src='/images/fairprice-logo.png'
              alt='NTUC FairPrice'
              className='h-10 w-24 lg:h-12 lg:w-32 object-contain transition-all opacity-80 hover:opacity-100'
            />

            <img
              src='/images/st-engineering-logo.png'
              alt='ST Engineering'
              className='h-10 w-24 lg:h-12 lg:w-32 object-contain transition-all opacity-80 hover:opacity-100'
            />
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[103px] py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-start'>
          <div className='flex flex-col gap-6 lg:gap-[40px] items-start flex-1'>
            <p className='font-medium leading-tight text-[#5b5a78] text-sm sm:text-base lg:text-[24px] tracking-widest uppercase'>
              Why Choose ConvertLeadsApp
            </p>
            <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              More Powerful Than WordPress. Completely Free.
            </h2>
            <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] tracking-[-0.54px] max-w-full lg:max-w-[410px]'>
              Unlike WordPress sites that require drag-and-drop builders, our
              custom-coded websites are built for speed, SEO, and
              conversions—with comprehensive version control and analytics built
              in.
            </p>
            <div className='backdrop-blur-lg backdrop-filter bg-[#ffc000] flex gap-[10px] items-center px-6 lg:px-[24px] py-3 lg:py-[16px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors'>
              <p className='font-bold leading-[1.6] not-italic text-base lg:text-[18px] text-white tracking-[-0.54px]'>
                See Success Stories
              </p>
            </div>
          </div>
          <div className='w-full lg:w-auto h-[300px] sm:h-[400px] lg:h-[460px] rounded-tr-[100px] lg:rounded-tr-[230px] lg:w-[583px] overflow-hidden'>
            <img
              alt='Case study'
              className='w-full h-full object-cover pointer-events-none'
              src={imgCaseStudy}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-8 lg:py-12'>
        <div className='grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-8 lg:gap-4'>
          <div className='flex flex-col gap-2 lg:gap-[12px] items-start'>
            <p className='font-medium leading-tight lg:leading-[70px] text-[#ffc000] text-4xl sm:text-5xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              190+
            </p>
            <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
              Small Businesses Served
            </p>
          </div>
          <div className='flex flex-col gap-2 lg:gap-[12px] items-start'>
            <p className='font-medium leading-tight lg:leading-[70px] text-[#ffc000] text-4xl sm:text-5xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              200+
            </p>
            <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
              Websites Launched
            </p>
          </div>
          <div className='flex flex-col gap-2 lg:gap-[12px] items-start'>
            <p className='font-medium leading-tight lg:leading-[70px] text-[#ffc000] text-4xl sm:text-5xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              $200M
            </p>
            <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
              Revenue Generated
            </p>
          </div>
          <div className='flex flex-col gap-2 lg:gap-[12px] items-start'>
            <p className='font-medium leading-tight lg:leading-[70px] text-[#ffc000] text-4xl sm:text-5xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              99%
            </p>
            <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
              Client Satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Company Trust Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-8 lg:py-12 text-center'>
        <p className='font-extrabold leading-tight text-[#5b5a78] text-sm sm:text-base lg:text-[24px] tracking-widest uppercase'>
          Trusted by Small Businesses Across Every Industry
        </p>
      </section>

      {/* Team Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20'>
        <p className='font-medium leading-tight text-[#ffc000] text-sm sm:text-base lg:text-[24px] tracking-widest text-center uppercase mb-4 lg:mb-8'>
          Meet Our Team
        </p>
        <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] text-center tracking-tight lg:tracking-[-1.92px] mb-8 lg:mb-12'>
          Expert Developers Who Build Websites That Convert
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-8 lg:justify-center gap-4 sm:gap-6'>
          {[
            {
              name: 'Michael Tan',
              role: 'UX Designer',
              image: '/images/linkedin-2.jpg',
            },
            {
              name: 'Lisa Wong',
              role: 'Project Manager',
              image: '/images/linkedin-3.jpeg',
            },
            {
              name: 'David Kim',
              role: 'Full Stack Developer',
              image: '/images/linkedin-4.jpeg',
            },
            {
              name: 'Amanda Lee',
              role: 'Marketing Lead',
              image: '/images/linkedin-1.jpg',
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center gap-2 lg:gap-4'
            >
              <div className='h-[120px] sm:h-[150px] lg:h-[185px] rounded-[10px] w-full lg:w-[189px] overflow-hidden'>
                <img
                  alt={member.name}
                  className='w-full h-full object-cover pointer-events-none grayscale'
                  src={member.image}
                />
              </div>
              <p className='font-bold leading-[1.6] not-italic text-[#1c1c37] text-xs sm:text-sm lg:text-[14px] tracking-[-0.42px] text-center'>
                {member.name}
              </p>
              <p className='font-bold leading-[1.6] not-italic text-[#5b5a78] text-xs sm:text-sm lg:text-[14px] tracking-[-0.42px] text-center'>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IT Consultant Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[103px] py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-start'>
          <div className='flex flex-col gap-6 lg:gap-[40px] flex-1'>
            <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              Everything Your Business Needs to Succeed Online
            </h2>
            <div className='flex flex-col gap-4 lg:gap-[24px]'>
              {[
                'SEO-Optimized From Day One',
                'Comprehensive Analytics & Tracking',
                'Built-In Version Control',
                'Continuous Performance Optimization',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className='flex gap-3 lg:gap-[12px] items-center'
                >
                  <div className='size-[16px] lg:size-[20px] flex-shrink-0'>
                    <img
                      alt=''
                      className='block max-w-none size-full'
                      src={imgFrame}
                    />
                  </div>
                  <p className='font-normal leading-[1.6] not-italic text-[#585970] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-auto h-[300px] sm:h-[400px] lg:h-[460px] rounded-bl-[100px] lg:rounded-bl-[230px] lg:w-[583px] overflow-hidden'>
            <img
              alt='IT consulting'
              className='w-full h-full object-cover pointer-events-none'
              src='/images/analytics-interface.png'
            />
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[103px] py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          <div className='flex flex-col gap-6 lg:gap-[40px] flex-1'>
            <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
              What Makes Us Different
            </h2>
            <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] tracking-[-0.54px] max-w-full lg:max-w-[340px]'>
              We don't just build websites—we build revenue-generating machines
              for your business.
            </p>
            <div className='flex flex-col gap-6 lg:gap-[40px]'>
              <div className='flex gap-3 lg:gap-[12px] items-start'>
                <div className='size-[48px] lg:size-[64px] flex-shrink-0 bg-gray-50 rounded-[12px] flex items-center justify-center'>
                  <FaCode className='text-[28px] lg:text-[32px] text-[#ffc000]' />
                </div>
                <div>
                  <p className='font-bold leading-[1.6] text-[#1c1c37] text-base lg:text-[18px] tracking-[-0.54px] mb-1 lg:mb-2'>
                    Custom-Coded for Performance
                  </p>
                  <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
                    No bloated WordPress plugins. Just clean, fast code
                    optimized for conversions and search engines.
                  </p>
                </div>
              </div>
              <div className='flex gap-3 lg:gap-[12px] items-start'>
                <div className='size-[48px] lg:size-[64px] flex-shrink-0 bg-gray-50 rounded-[12px] flex items-center justify-center'>
                  <FaChartLine className='text-[28px] lg:text-[32px] text-[#9a9aff]' />
                </div>
                <div>
                  <p className='font-bold leading-[1.6] text-[#1c1c37] text-base lg:text-[18px] tracking-[-0.54px] mb-1 lg:mb-2'>
                    Real-Time Analytics Dashboard
                  </p>
                  <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
                    Track every visitor, conversion, and revenue source with our
                    comprehensive analytics platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-6 lg:gap-[40px] items-center justify-end lg:pb-[100px]'>
            <div className='w-full h-[300px] sm:h-[400px] lg:h-[516px] rounded-tl-[100px] rounded-tr-[100px] lg:rounded-tl-[258px] lg:rounded-tr-[258px] lg:w-[583px] overflow-hidden mb-4 lg:mb-[-100px]'>
              <img
                alt='Team collaboration'
                className='w-full h-full object-cover pointer-events-none'
                src='/images/vscode-interface.png'
              />
            </div>
            <TestimonialCard />
          </div>
        </div>
      </section>

      {/* Testimonial Section - Yellow Background */}
      <section className='relative py-12 lg:py-0 lg:h-[835px] overflow-hidden'>
        <div className='absolute inset-0 lg:h-[745px] bg-[#ffc000] lg:rounded-tr-[372.5px] lg:top-[50%] lg:translate-y-[-50%]' />
        <div className='hidden lg:block absolute h-[170px] right-[1303px] top-[50%] translate-y-[-200px] w-[226px]'>
          <img
            alt='Decoration'
            className='block max-w-none size-full'
            src={imgOrnament}
          />
        </div>
        <div className='hidden lg:block absolute h-[170px] right-[44px] top-[50%] translate-y-[332px] w-[226px]'>
          <img
            alt='Decoration'
            className='block max-w-none size-full'
            src={imgOrnament}
          />
        </div>
        <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-[135px] flex flex-col items-start justify-center h-full'>
          <h2 className='font-semibold leading-tight lg:leading-[70px] text-3xl sm:text-4xl lg:text-[64px] text-white tracking-tight lg:tracking-[-1.92px] mb-6 lg:mb-8'>
            Real Results from Real Businesses
          </h2>
          <p className='font-medium italic leading-tight lg:leading-[70px] text-2xl sm:text-3xl lg:text-[48px] text-white tracking-tight lg:tracking-[-1.44px] max-w-full lg:max-w-[909px] mb-8 lg:mb-12'>
            "ConvertLeadsApp transformed our online presence. Within 3 months,
            our website traffic tripled and sales increased by 250%. Best
            decision we ever made."
          </p>
          <div className='flex gap-3 lg:gap-4 items-center'>
            <div className='rounded-[20px] lg:rounded-[32px] size-[48px] lg:size-[64px] overflow-hidden flex-shrink-0'>
              <img
                alt='Sarah Chen'
                className='size-full object-cover'
                src='/images/linkedin-1.jpg'
              />
            </div>
            <div>
              <p className='font-normal leading-[1.6] text-sm lg:text-[14px] text-white tracking-[-0.42px]'>
                Sarah Chen
              </p>
              <p className='font-bold leading-[1.6] text-xs lg:text-[12px] text-white tracking-[-0.36px]'>
                Owner, Boutique Coffee Roasters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row items-start lg:justify-between gap-8'>
          <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px] max-w-full lg:max-w-[614px]'>
            Rated 5-Stars by Business Owners Like You
          </h2>
          <div className='flex flex-col gap-4 lg:gap-[20px] items-center w-full lg:w-auto lg:max-w-[511px]'>
            <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] text-center tracking-[-0.54px]'>
              "More than a website builder—they're growth partners who
              understand small business."
            </p>
            <div className='flex gap-2 lg:gap-[12px]'>
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <div key={idx} className='size-[24px] lg:size-[36px]'>
                  <img
                    alt='Star'
                    className='block max-w-none size-full'
                    src={idx % 2 === 0 ? imgStar : imgStar1}
                  />
                </div>
              ))}
            </div>
            <p className='font-bold leading-[1.6] text-[#5b5a78] text-base lg:text-[18px] text-center tracking-[-0.54px]'>
              Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* More Features Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-20'>
          <div className='w-full h-[300px] sm:h-[400px] lg:h-[658px] rounded-br-[100px] lg:rounded-br-[239.5px] lg:w-[553px] overflow-hidden order-2 lg:order-1 bg-gray-50'>
            <img
              alt='More features'
              className='w-full h-full object-contain pointer-events-none'
              src='/images/ubersuggest-1.png'
            />
          </div>
          <div className='flex flex-col gap-8 lg:gap-[60px] flex-1 order-1 lg:order-2'>
            <div className='flex flex-col gap-4 lg:gap-[20px]'>
              <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px]'>
                Built-In Features That Drive Growth
              </h2>
              <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] tracking-[-0.54px] max-w-full lg:max-w-[559px]'>
                Every website comes with enterprise-level features that would
                cost thousands on other platforms—all included free.
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[50px]'>
              {[
                {
                  Icon: FaSearch,
                  title: 'Advanced SEO Tools',
                  desc: 'Rank higher on Google with built-in technical SEO optimization',
                  color: '#ffc000',
                },
                {
                  Icon: FaChartLine,
                  title: 'Conversion Tracking',
                  desc: 'Know exactly which marketing channels drive your revenue',
                  color: '#9a9aff',
                },
                {
                  Icon: FaFlask,
                  title: 'A/B Testing Platform',
                  desc: 'Test different versions of your site to maximize conversions',
                  color: '#b5ea1e',
                },
                {
                  Icon: FaTachometerAlt,
                  title: 'Performance Monitoring',
                  desc: 'Real-time alerts and insights to keep your site running perfectly',
                  color: '#ff6b6b',
                },
              ].map((feature, idx) => (
                <div key={idx} className='flex flex-col gap-2 lg:gap-[12px]'>
                  <div className='size-[48px] lg:size-[64px] flex items-center justify-center bg-gray-50 rounded-[12px]'>
                    <feature.Icon
                      className='text-[28px] lg:text-[36px]'
                      style={{ color: feature.color }}
                    />
                  </div>
                  <p className='font-bold leading-[1.6] text-[#1c1c37] text-base lg:text-[18px] tracking-[-0.54px]'>
                    {feature.title}
                  </p>
                  <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-sm sm:text-base lg:text-[18px] tracking-[-0.54px]'>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20'>
        <div className='bg-[#f7f7f7] rounded-[32px] p-6 sm:p-8 lg:p-0 lg:h-[352px] relative flex flex-col lg:flex-row items-center lg:items-center lg:px-[96px] gap-6 lg:gap-0'>
          <div className='flex-1 w-full lg:max-w-[533px] order-2 lg:order-1'>
            <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-2xl sm:text-3xl lg:text-[64px] tracking-tight lg:tracking-[-1.92px] mb-4 lg:mb-8'>
              Ready to Grow Your Business?
            </h2>
            <p className='font-normal leading-[1.6] not-italic text-[#1c1c37] text-base lg:text-[18px] tracking-[-0.54px] max-w-full lg:max-w-[399px]'>
              Join 190+ successful small businesses. Get your free custom
              website and start driving real sales today.
            </p>
          </div>
          <div className='w-full sm:w-auto h-[200px] sm:h-[250px] lg:absolute lg:h-[304px] lg:right-[100px] lg:top-[-114px] rounded-[16px] lg:w-[495px] overflow-hidden order-1 lg:order-2'>
            <img
              alt='Get started'
              className='w-full h-full object-contain pointer-events-none'
              src='/images/ubersuggest-2.png'
            />
          </div>
          <div className='w-full sm:w-auto backdrop-blur-lg backdrop-filter bg-[#ffc000] flex gap-[10px] items-center justify-center lg:absolute lg:right-[140px] lg:bottom-[60px] px-8 lg:px-[64px] py-3 lg:py-[16px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors order-3'>
            <p className='font-bold leading-[1.6] not-italic text-base lg:text-[18px] text-white tracking-[-0.54px]'>
              Get started
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] pb-16 lg:pb-24'>
        <div className='max-w-4xl mx-auto'>
          <CompactFAQSection
            faqs={HOME_FAQS}
            title='Quick Answers'
            includeSchema={true}
            schemaId='home-faq-schema'
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
