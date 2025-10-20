import type { Metadata } from 'next';

import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { GENERAL_FAQS } from '@/constant/schema-data';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | ConvertLeadsApp',
  description:
    'Find answers to common questions about our custom web development services, free website program, pricing, timelines, SEO optimization, and more. Get help choosing ConvertLeadsApp for your business.',
  openGraph: {
    title: 'Frequently Asked Questions | ConvertLeadsApp',
    description:
      'Find answers to common questions about our custom web development services, free website program, pricing, and SEO optimization.',
    url: 'https://convertleadsapp.com/faq',
  },
};

export default function FAQPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='pt-[120px] pb-12 px-4 sm:px-6 lg:px-[100px] bg-gradient-to-b from-[#f8f8f8] to-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='font-extrabold text-[20px] lg:text-[24px] text-[#ffc000] tracking-[2.4px] leading-[24px] uppercase mb-4'>
            Got questions?
          </p>
          <h1 className='font-black text-[48px] lg:text-[72px] text-black leading-[1] tracking-[-2.16px] mb-6'>
            We have answers
          </h1>
          <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] max-w-2xl mx-auto'>
            Everything you need to know about our custom web development
            services, free website program, and how we help small businesses
            succeed online.
          </p>
        </div>
      </section>

      {/* FAQ Section with Schema Markup */}
      <FAQSection
        faqs={GENERAL_FAQS}
        title='Frequently Asked Questions'
        subtitle='Find answers to the most common questions about ConvertLeadsApp'
        includeSchema={true}
        schemaId='general-faq-schema'
      />

      {/* Additional Help Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px] bg-[#f8f8f8]'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='font-medium text-[32px] lg:text-[48px] text-[#1c1c37] leading-[1.1] tracking-[-1.44px] mb-6'>
            Need more information?
          </h2>
          <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] mb-8'>
            Our team is ready to answer any questions you might have about our
            services, pricing, or how we can help your business grow.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='inline-block bg-[#ffc000] text-white font-bold text-[16px] lg:text-[18px] px-8 lg:px-10 py-4 rounded-[64px] hover:bg-[#e6ad00] transition-colors tracking-[-0.54px]'
            >
              Contact Us
            </a>
            <a
              href='/services'
              className='inline-block bg-white text-[#1c1c37] font-bold text-[16px] lg:text-[18px] px-8 lg:px-10 py-4 rounded-[64px] border-2 border-[#1c1c37] hover:bg-[#1c1c37] hover:text-white transition-colors tracking-[-0.54px]'
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px]'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='font-medium text-[32px] lg:text-[40px] text-[#1c1c37] leading-[1.1] tracking-[-1.2px] mb-12 text-center'>
            Explore More
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Services Link */}
            <a
              href='/services'
              className='group bg-white p-8 rounded-[24px] border border-[#e5e5e5] hover:shadow-[0px_4px_32px_0px_rgba(0,0,0,0.08)] transition-all'
            >
              <div className='w-12 h-12 bg-[#ffc000] rounded-[16px] flex items-center justify-center mb-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2L2 7L12 12L22 7L12 2Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M2 17L12 22L22 17'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M2 12L12 17L22 12'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-[20px] lg:text-[24px] font-semibold text-[#1c1c37] mb-3 group-hover:text-[#ffc000] transition-colors'>
                Our Services
              </h3>
              <p className='text-[16px] text-[#5b5a78] leading-[1.6]'>
                Explore our web development services and see how we can help
                your business.
              </p>
            </a>

            {/* About Link */}
            <a
              href='/'
              className='group bg-white p-8 rounded-[24px] border border-[#e5e5e5] hover:shadow-[0px_4px_32px_0px_rgba(0,0,0,0.08)] transition-all'
            >
              <div className='w-12 h-12 bg-[#ffc000] rounded-[16px] flex items-center justify-center mb-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='white'
                    strokeWidth='2'
                  />
                  <path
                    d='M12 16V12'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <circle cx='12' cy='8' r='1' fill='white' />
                </svg>
              </div>
              <h3 className='text-[20px] lg:text-[24px] font-semibold text-[#1c1c37] mb-3 group-hover:text-[#ffc000] transition-colors'>
                About Us
              </h3>
              <p className='text-[16px] text-[#5b5a78] leading-[1.6]'>
                Learn more about ConvertLeadsApp and our mission to help small
                businesses.
              </p>
            </a>

            {/* Contact Link */}
            <a
              href='/contact'
              className='group bg-white p-8 rounded-[24px] border border-[#e5e5e5] hover:shadow-[0px_4px_32px_0px_rgba(0,0,0,0.08)] transition-all'
            >
              <div className='w-12 h-12 bg-[#ffc000] rounded-[16px] flex items-center justify-center mb-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-[20px] lg:text-[24px] font-semibold text-[#1c1c37] mb-3 group-hover:text-[#ffc000] transition-colors'>
                Get in Touch
              </h3>
              <p className='text-[16px] text-[#5b5a78] leading-[1.6]'>
                Ready to start your project? Contact us for a free consultation.
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
