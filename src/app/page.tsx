'use client';

import * as React from 'react';
import '@/lib/env';

/* eslint-disable @next/next/no-img-element */

// Image URLs from Figma
const imgPhoto =
  'https://www.figma.com/api/mcp/asset/a83d70e9-d244-415e-90ab-a3652eda017c';
const imgArtboard482 =
  'https://www.figma.com/api/mcp/asset/682dcafb-b492-40a2-ae2e-35365fb24453';
const imgArtboard241 =
  'https://www.figma.com/api/mcp/asset/36ab1580-3f90-4865-82cc-5d11afacb58e';
const imgArtboard81 =
  'https://www.figma.com/api/mcp/asset/66e6e53a-8645-4291-8a03-a0c1ba650fbf';
const imgArtboard141 =
  'https://www.figma.com/api/mcp/asset/3276c5e3-6a59-4a15-a6ce-9547e7217496';
const imgArtboard311 =
  'https://www.figma.com/api/mcp/asset/d68886d2-274b-4e0d-a8e5-8f069212ec39';
const imgArtboard301 =
  'https://www.figma.com/api/mcp/asset/075d027f-3ddd-4e62-8b3e-7da7250f1911';
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <main className='bg-white relative w-full min-h-screen overflow-x-hidden'>
      {/* Navigation Bar */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-transparent'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-4 lg:py-[17px]'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div className='flex gap-3 lg:gap-[20px] items-center'>
              <div className='w-[12px] lg:w-[15px] h-[29px] lg:h-[36.36px]'>
                <img
                  alt='Logo'
                  className='block w-full h-full object-contain'
                  src={imgFrame4}
                />
              </div>
              <p className='font-bold leading-[normal] not-italic text-lg lg:text-[24px] text-white tracking-[-1.2px]'>
                ConvertLeadsApp
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex gap-[64px] items-center'>
              <p className='font-bold leading-[normal] not-italic text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                Products
              </p>
              <p className='font-bold leading-[normal] not-italic text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                Services
              </p>
              <p className='font-bold leading-[normal] not-italic text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                Pricing
              </p>
              <p className='font-bold leading-[normal] not-italic text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                Contact Us
              </p>
            </div>

            {/* Sign In Button - Desktop */}
            <div className='hidden lg:flex bg-[#ffc000] gap-[8px] h-[40px] items-center px-[16px] py-[8px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors'>
              <p className='font-bold leading-[normal] not-italic text-[15px] text-white tracking-[-0.45px]'>
                Sign in
              </p>
              <div className='size-[24px]'>
                <img
                  alt=''
                  className='block max-w-none size-full'
                  src={imgChevronFilledRight1}
                />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='lg:hidden text-white p-2'
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className='lg:hidden mt-4 pb-4 border-t border-white/20 pt-4'>
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                  Products
                </p>
                <p className='font-bold text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                  Services
                </p>
                <p className='font-bold text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                  Pricing
                </p>
                <p className='font-bold text-[14px] text-white tracking-[-0.42px] cursor-pointer hover:text-[#ffc000] transition-colors'>
                  Contact Us
                </p>
                <div className='bg-[#ffc000] flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors mt-2'>
                  <p className='font-bold text-[15px] text-white tracking-[-0.45px]'>
                    Sign in
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className='relative min-h-[700px] sm:min-h-[800px] lg:h-[985px] overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            alt='Hero background'
            className='absolute inset-0 w-full h-full object-cover pointer-events-none'
            src={imgPhoto}
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
        <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center pt-24 pb-12 lg:pt-0 lg:pb-[200px]'>
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
      <div className='py-6 lg:py-4 px-4'>
        <img
          alt='Partner logos'
          className='block w-full h-auto max-h-[56px] object-contain'
          src={imgFrame20}
        />
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
              src={imgPhoto}
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
              name: 'Emma Johnson',
              role: 'Administrator',
              opacity: 'opacity-40',
            },
            { name: 'Ethan Davis', role: 'Consultant', opacity: 'opacity-70' },
            { name: 'Ethan Davis', role: 'Consultant', opacity: 'opacity-70' },
            {
              name: 'Noah Anderson',
              role: 'Content Creator',
              opacity: 'opacity-70',
            },
            {
              name: 'Liam Rodriguez',
              role: 'Art Director',
              opacity: 'opacity-40',
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center gap-2 lg:gap-4'
            >
              <div
                className={`h-[120px] sm:h-[150px] lg:h-[185px] ${member.opacity} rounded-[10px] w-full lg:w-[189px] overflow-hidden`}
              >
                <img
                  alt={member.name}
                  className='w-full h-full object-cover pointer-events-none'
                  src={imgPhoto}
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
              src={imgPhoto}
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
                <div className='size-[48px] lg:size-[64px] flex-shrink-0'>
                  <img
                    alt='Cybersecurity'
                    className='w-full h-full object-cover pointer-events-none'
                    src={imgArtboard482}
                  />
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
                <div className='size-[48px] lg:size-[64px] flex-shrink-0'>
                  <img
                    alt='Cloud Computing'
                    className='w-full h-full object-cover pointer-events-none'
                    src={imgArtboard241}
                  />
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
                src={imgPhoto}
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
                alt='Kokom Martin'
                className='size-full object-cover'
                src={imgPhoto}
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
          <div className='w-full h-[300px] sm:h-[400px] lg:h-[658px] rounded-br-[100px] lg:rounded-br-[239.5px] lg:w-[553px] overflow-hidden order-2 lg:order-1'>
            <img
              alt='More features'
              className='w-full h-full object-cover pointer-events-none'
              src={imgPhoto}
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
                  icon: imgArtboard81,
                  title: 'Advanced SEO Tools',
                  desc: 'Rank higher on Google with built-in technical SEO optimization',
                },
                {
                  icon: imgArtboard141,
                  title: 'Conversion Tracking',
                  desc: 'Know exactly which marketing channels drive your revenue',
                },
                {
                  icon: imgArtboard311,
                  title: 'A/B Testing Platform',
                  desc: 'Test different versions of your site to maximize conversions',
                },
                {
                  icon: imgArtboard301,
                  title: 'Performance Monitoring',
                  desc: 'Real-time alerts and insights to keep your site running perfectly',
                },
              ].map((feature, idx) => (
                <div key={idx} className='flex flex-col gap-2 lg:gap-[12px]'>
                  <div className='size-[48px] lg:size-[64px]'>
                    <img
                      alt={feature.title}
                      className='w-full h-full object-cover pointer-events-none'
                      src={feature.icon}
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
              className='w-full h-full object-cover pointer-events-none'
              src={imgPhoto}
            />
          </div>
          <div className='w-full sm:w-auto backdrop-blur-lg backdrop-filter bg-[#ffc000] flex gap-[10px] items-center justify-center lg:absolute lg:right-[140px] lg:bottom-[60px] px-8 lg:px-[64px] py-3 lg:py-[16px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors order-3'>
            <p className='font-bold leading-[1.6] not-italic text-base lg:text-[18px] text-white tracking-[-0.54px]'>
              Get started
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-12 lg:py-20'>
        <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] text-center tracking-tight lg:tracking-[-1.92px] mb-3 lg:mb-4'>
          Get Free Website Growth Tips
        </h2>
        <p className='font-normal leading-[1.6] not-italic text-[#5b5a78] text-base lg:text-[18px] tracking-[-0.54px] text-center mb-8 lg:mb-12'>
          Join our newsletter for proven strategies to increase traffic and
          conversions. Unsubscribe anytime.
        </p>
        <div className='bg-[#f2f2f2] border border-solid border-white h-auto lg:h-[70px] max-w-full lg:max-w-[509px] mx-auto rounded-[32px] lg:rounded-[64px] flex flex-col sm:flex-row items-stretch sm:items-center p-1 gap-2 sm:gap-0'>
          <input
            type='email'
            placeholder='Your email'
            className='bg-transparent flex-1 font-normal leading-[1.6] not-italic placeholder:opacity-50 text-[#1c1c37] text-base lg:text-[18px] tracking-[-0.54px] px-4 lg:px-[20px] py-3 sm:py-0 outline-none rounded-[24px] sm:rounded-none'
          />
          <button className='bg-[#ffc000] flex gap-[10px] items-center justify-center px-6 lg:px-[29px] py-3 lg:py-[20px] rounded-[24px] lg:rounded-[64px] cursor-pointer hover:bg-[#ffcc33] transition-colors'>
            <p className='font-bold leading-[1.6] not-italic text-base lg:text-[18px] text-white tracking-[-0.54px]'>
              Subscribe
            </p>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-[#f7f7f7] border border-[rgba(0,0,0,0.1)] border-solid mx-4 sm:mx-8 lg:mx-[87px] rounded-tl-[32px] rounded-tr-[32px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] mt-12 lg:mt-20 pb-6 lg:pb-8'>
        <div className='px-6 sm:px-8 lg:px-[118px] py-8 lg:py-[85px]'>
          <div className='flex gap-3 lg:gap-4 items-center mb-8 lg:mb-12'>
            <div className='h-[29px] lg:h-[36.36px] w-[12px] lg:w-[15px]'>
              <img
                alt='Logo'
                className='block max-w-none size-full'
                src={imgFrame4}
              />
            </div>
            <p className='font-bold leading-[normal] not-italic text-[#1d1e40] text-lg lg:text-[24px] tracking-[-1.2px]'>
              ConvertLeadsApp
            </p>
          </div>
          <div className='grid grid-cols-2 lg:flex lg:justify-between gap-8 lg:gap-4'>
            <div className='flex flex-col gap-1.5 lg:gap-2'>
              <p className='font-bold leading-[1.6] text-[#ffc000] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Home
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Products
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Services
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Pricing
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Contact Us
              </p>
            </div>
            <div className='flex flex-col gap-1.5 lg:gap-2'>
              <p className='font-bold leading-[1.6] text-[#1c1c37] text-sm lg:text-[14px] tracking-[-0.42px]'>
                What we do
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Company
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Privacy Policy
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Terms of Use
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                About Us
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Disclaimer
              </p>
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] mb-1 lg:mb-2'>
                Indonesia.
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                Jl. Kemerdekaan no. 4, Jakarta.
              </p>
            </div>
            <div className='flex gap-3 lg:gap-4 col-span-2 lg:col-span-1 justify-center lg:justify-end'>
              <div className='size-[20px] lg:size-[24px] cursor-pointer hover:opacity-70 transition-opacity'>
                <img
                  alt='Twitter'
                  className='block max-w-none size-full'
                  src={imgBxBxlTwitter}
                />
              </div>
              <div className='size-[20px] lg:size-[24px] cursor-pointer hover:opacity-70 transition-opacity'>
                <img
                  alt='Discord'
                  className='block max-w-none size-full'
                  src={imgBxBxlDiscord}
                />
              </div>
              <div className='size-[20px] lg:size-[24px] cursor-pointer hover:opacity-70 transition-opacity'>
                <img
                  alt='Instagram'
                  className='block max-w-none size-full'
                  src={imgBxBxlInstagram}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
