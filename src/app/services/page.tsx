'use client';

import React from 'react';

import {
  generateAggregateRatingSchema,
  generateServiceSchema,
} from '@/lib/schema';

import { CompactFAQSection } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MultipleSchema } from '@/components/Schema';

import {
  AGGREGATE_RATING,
  COMPANY_NAME,
  COMPANY_URL,
  SERVICES,
  SERVICES_FAQS,
} from '@/constant/schema-data';

// Image URLs from Unsplash - Web development & Asian professionals
const imgHeroPhoto = '/images/webdev-landing.webp';
const imgTestimonialPhoto = '/images/gartner-logo.png';
const imgConsultantPhoto =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80';

export default function ServicesPage() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Generate schema markup for services page
  const serviceSchemas = SERVICES.map((service) =>
    generateServiceSchema(service)
  );

  const aggregateRatingSchema = generateAggregateRatingSchema(
    AGGREGATE_RATING,
    { name: COMPANY_NAME, url: COMPANY_URL }
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(
        'https://r6b5s2t6ov3hvzomgv7xtirvty0ofruo.lambda-url.us-east-1.on.aws/notify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'ivan@convertleadsapp.com',
            subject: 'New Newsletter Subscription',
            message: `New subscription request from: ${email}`,
            from: 'noreply@convertleadsapp.com',
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for subscribing!',
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: 'https://www.figma.com/api/mcp/asset/46b63138-aacd-418d-aac7-aeb5689ce0b8',
      title: 'Existing technology infrastructure, and goals',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/b90effac-4b79-423b-8989-e19c0b076817',
      title: "Strategies based on the client's needs and goals",
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/9b213cac-6043-47a8-b07d-68f4501e8240',
      title: 'Implementing and integrating technology solutions',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/241b9b25-9349-4d45-81f0-64c012d74f27',
      title: 'IT consultants play a vital role in helping clients',
    },
  ];

  const steps = [
    {
      icon: 'https://www.figma.com/api/mcp/asset/46b63138-aacd-418d-aac7-aeb5689ce0b8',
      title: 'Project scoping',
      step: 'STEP 1',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/b90effac-4b79-423b-8989-e19c0b076817',
      title: 'Initial implementation',
      step: 'STEP 2',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/9b213cac-6043-47a8-b07d-68f4501e8240',
      title: 'Analytics (1-month)',
      step: 'STEP 3',
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/241b9b25-9349-4d45-81f0-64c012d74f27',
      title: 'Project handover',
      step: 'STEP 4',
    },
  ];

  const expertiseAreas = [
    'Building Websites for Generative Engine Optimization',
    'Business analysis',
    'Wireframing',
    'Analytics tracking',
    'Refinement',
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Schema Markup for SEO */}
      <MultipleSchema
        schemas={[...serviceSchemas, aggregateRatingSchema]}
        id='services-schema'
      />

      {/* Hero Section */}
      <section className='pt-[120px] pb-12 lg:pb-0 px-4 sm:px-6 lg:px-[100px] overflow-hidden'>
        <div className='relative'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Content */}
            <div className='space-y-6 lg:space-y-8'>
              <p className='font-extrabold text-[20px] lg:text-[24px] text-[#ffc71e] tracking-[2.4px] leading-[24px] uppercase'>
                our service
              </p>
              <h1 className='font-black text-[48px] lg:text-[72px] text-black leading-[1] tracking-[-2.16px]'>
                Web development services for business
              </h1>
              <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] max-w-[428px]'>
                Professional web solutions tailored to help your business grow
                online
              </p>

              {/* Service Cards Grid */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-4'>
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-4 lg:gap-6 items-center p-6 lg:p-8 rounded-[16px] ${
                      idx === 0
                        ? 'bg-white shadow-[0px_4px_32px_0px_rgba(0,0,0,0.05)]'
                        : ''
                    }`}
                  >
                    <div className='flex-shrink-0 w-[56px] h-[56px] lg:w-[72px] lg:h-[72px]'>
                      <img
                        src={service.icon}
                        alt=''
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] flex-1'>
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='relative lg:absolute lg:right-[120px] lg:top-[80px] lg:w-[458px] lg:h-[612px]'>
              <div className='relative w-full aspect-[458/612] lg:w-[458px] lg:h-[612px] rounded-tl-[64px] lg:rounded-tl-[124px] overflow-hidden'>
                <img
                  src={imgHeroPhoto}
                  alt='Team collaboration'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute bottom-8 right-8 lg:bottom-12 lg:right-12 w-[60px] h-[60px] lg:w-[74px] lg:h-[74px] bg-[#ffc000] rounded-[20px] lg:rounded-[30px]' />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px]'>
        <div className='text-center max-w-[686px] mx-auto mb-12 lg:mb-16'>
          <p className='font-extrabold text-[20px] lg:text-[24px] text-[#ffc000] tracking-[2.4px] leading-[24px] uppercase mb-4'>
            how it works
          </p>
          <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'>
            We follow a structured 4-step process to deliver your website
            efficiently and effectively
          </p>
        </div>

        {/* Steps */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[84px] max-w-5xl mx-auto'>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center gap-6 lg:gap-8'
            >
              <div className='w-[56px] h-[56px] lg:w-[72px] lg:h-[72px] rounded-[20px] overflow-hidden'>
                <img
                  src={step.icon}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-[16px] lg:text-[18px] text-[#38386e] leading-[1.6] tracking-[-0.54px] text-center min-h-[52px]'>
                {step.title}
              </p>
              <div className='bg-[#ffc000] px-6 py-3 rounded-[64px]'>
                <span className='text-[14px] font-bold text-white tracking-[0.42px]'>
                  {step.step}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px] relative'>
        <div className='relative max-w-[1296px] mx-auto bg-white rounded-[64px] lg:rounded-[124px] shadow-[0px_4px_32px_0px_rgba(0,0,0,0.05)] p-8 lg:p-16'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left Image */}
            <div className='relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 rounded-[64px] lg:rounded-[124px] overflow-hidden'>
              <img
                src={imgTestimonialPhoto}
                alt='Satya Nadella'
                className='w-full h-full object-contain'
              />
            </div>

            {/* Right Content */}
            <div className='space-y-6 lg:space-y-8'>
              <p className='text-[28px] lg:text-[36px] text-[#ffc000] leading-[1.6] tracking-[-1.08px] font-normal'>
                Building Websites for AI
              </p>
              <p className='text-[28px] lg:text-[36px] text-[#5b5a78] leading-[56px] tracking-[-1.08px] font-medium italic'>
                A significant portion of research, potentially 25% or more by
                2026, could migrate from traditional search to AI-generated
                responses.
              </p>
              <div>
                <p className='text-[18px] font-bold text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'>
                  Gartner Industry Report
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className='flex gap-4 justify-center lg:justify-end mt-8'>
            <button className='w-12 h-12 rounded-full border-2 border-[#ffc000] flex items-center justify-center hover:bg-[#ffc000] transition-colors group'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15 18L9 12L15 6'
                  stroke='#ffc000'
                  className='group-hover:stroke-white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
            <button className='w-12 h-12 rounded-full bg-[#ffc000] flex items-center justify-center hover:bg-[#e6ad00] transition-colors'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 18L15 12L9 6'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Website Development Expertise Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px]'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content */}
          <div className='space-y-8 lg:space-y-10'>
            <h2 className='font-medium text-[40px] lg:text-[64px] text-[#1c1c37] leading-[1.1] lg:leading-[70px] tracking-[-1.92px]'>
              Our Comprehensive Development Process
            </h2>
            <div className='space-y-6'>
              {expertiseAreas.map((area, idx) => (
                <div key={idx} className='flex items-center gap-3'>
                  <div className='flex-shrink-0 w-5 h-5'>
                    <img
                      src='https://www.figma.com/api/mcp/asset/3bda57fe-0b65-4608-a844-688a53a05e25'
                      alt=''
                      className='w-full h-full'
                    />
                  </div>
                  <p className='text-[16px] lg:text-[18px] text-[#585970] leading-[1.6] tracking-[-0.54px]'>
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className='relative w-full aspect-[583/460] max-w-[583px] ml-auto rounded-bl-[120px] lg:rounded-bl-[230px] overflow-hidden'>
            <img
              src={imgConsultantPhoto}
              alt='IT Consultant'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px] bg-white'>
        <div className='text-center max-w-4xl mx-auto'>
          <h2 className='font-medium text-[40px] lg:text-[64px] text-[#1c1c37] leading-[1.1] lg:leading-[70px] tracking-[-1.92px] mb-6 lg:mb-8'>
            Follow the latest info from us
          </h2>
          <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] mb-8 lg:mb-12'>
            Important update only, we promise.
          </p>
          <form onSubmit={handleSubscribe} className='max-w-[509px] mx-auto'>
            <div className='relative'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email'
                required
                className='w-full h-[60px] lg:h-[70px] px-6 pr-[150px] lg:pr-[160px] rounded-[64px] border border-white bg-[#f2f2f2] text-[16px] lg:text-[18px] text-[#1c1c37] placeholder:text-[#1c1c37] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#ffc000]'
              />
              <button
                type='submit'
                disabled={isSubmitting}
                className='absolute right-1 top-1 bottom-1 bg-[#ffc000] text-white font-bold text-[16px] lg:text-[18px] px-6 lg:px-7 rounded-[64px] hover:bg-[#e6ad00] transition-colors tracking-[-0.54px] disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {submitStatus.type && (
              <div
                className={`mt-4 p-4 rounded-[16px] ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                <p className='text-[16px] font-medium'>{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='px-4 sm:px-6 lg:px-[100px] pb-16 lg:pb-24'>
        <div className='max-w-4xl mx-auto'>
          <CompactFAQSection
            faqs={SERVICES_FAQS}
            title='Services FAQs'
            includeSchema={true}
            schemaId='services-faq-schema'
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
