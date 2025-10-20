'use client';

import Link from 'next/link';
import React from 'react';

import {
  generateLocalBusinessSchema,
  generatePersonSchema,
} from '@/lib/schema';

import { CompactFAQSection } from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MultipleSchema } from '@/components/Schema';

import {
  CONTACT_FAQS,
  OFFICE_SINGAPORE,
  OFFICE_USA,
  TEAM_MEMBERS,
} from '@/constant/schema-data';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Generate schema markup for contact page
  const usaOfficeSchema = generateLocalBusinessSchema(OFFICE_USA);
  const singaporeOfficeSchema = generateLocalBusinessSchema(OFFICE_SINGAPORE);
  const personSchemas = TEAM_MEMBERS.map((person) =>
    generatePersonSchema(person)
  );

  const handleSubmit = async (e: React.FormEvent) => {
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
            subject: `Contact Form Submission from ${formData.name}`,
            message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
            from: 'noreply@convertleadsapp.com',
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      location: 'USA',
      address: '131 Continental Dr Suite 305, Newark, DE 19713',
    },
    {
      location: 'Singapore',
      address: '159 Sin Ming Road, Singapore 575625, Amtech Building Lobby 1',
    },
  ];

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Schema Markup for SEO */}
      <MultipleSchema
        schemas={[usaOfficeSchema, singaporeOfficeSchema, ...personSchemas]}
        id='contact-schema'
      />

      {/* Contact Hero Section */}
      <section className='pt-[120px] pb-12 lg:pb-20 px-4 sm:px-6 lg:px-[165px]'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Left Side - Contact Info */}
          <div className='space-y-8'>
            <h1 className='font-black text-[48px] lg:text-[72px] text-black leading-[1] tracking-[-2.16px]'>
              Let's get in touch
            </h1>

            {/* Contact Info Card */}
            <div className='bg-[#f9f9fa] rounded-tl-[63px] rounded-tr-[63px] rounded-br-[63px] p-8 lg:p-12 space-y-6 lg:space-y-8 max-w-[421px]'>
              {/* Email */}
              <div className='flex gap-4 items-start'>
                <div className='flex-shrink-0 w-6 h-6 mt-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
                      stroke='#5b5a78'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M22 6L12 13L2 6'
                      stroke='#5b5a78'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <Link
                  href='mailto:ivan@convertleadsapp.com'
                  className='text-[16px] lg:text-[18px] font-medium text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'
                >
                  ivan@convertleadsapp.com
                </Link>
              </div>

              {/* Address */}
              <div className='flex gap-4 items-start'>
                <div className='flex-shrink-0 w-6 h-6 mt-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z'
                      stroke='#5b5a78'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z'
                      stroke='#5b5a78'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p className='text-[16px] lg:text-[18px] font-medium text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'>
                  159 Sin Ming Road, Singapore 575625, Amtech Building Lobby 1
                </p>
              </div>

              {/* Phone */}
              <div className='flex gap-4 items-start'>
                <div className='flex-shrink-0 w-6 h-6 mt-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z'
                      stroke='#5b5a78'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='space-y-2'>
                  <div>
                    <p className='text-[16px] lg:text-[18px] font-medium text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'>
                      Singapore hotline
                    </p>
                    <Link
                      href='https://wa.me/6598182573'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] hover:text-[#ffc000] transition-colors'
                    >
                      +65 98182573
                    </Link>
                  </div>
                  <div>
                    <p className='text-[16px] lg:text-[18px] font-medium text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'>
                      US hotline
                    </p>
                    <Link
                      href='https://wa.me/15558415688'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] hover:text-[#ffc000] transition-colors'
                    >
                      +1 (555) 841-5688
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='relative'>
            <form onSubmit={handleSubmit} className='space-y-8 lg:space-y-12'>
              {/* Name Field */}
              <div>
                <label className='block text-[20px] lg:text-[24px] text-[#5b5a78] opacity-60 leading-[1.6] tracking-[-0.72px] mb-3'>
                  What is your name?
                </label>
                <div className='border-b-2 border-gray-200'>
                  <input
                    type='text'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className='w-full py-3 text-[18px] lg:text-[20px] text-[#1c1c37] bg-transparent border-none outline-none placeholder:text-[#5b5a78] placeholder:opacity-40'
                    placeholder='Enter your name'
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className='block text-[20px] lg:text-[24px] text-[#5b5a78] opacity-60 leading-[1.6] tracking-[-0.72px] mb-3'>
                  What is your email?
                </label>
                <div className='border-b-2 border-gray-200'>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className='w-full py-3 text-[18px] lg:text-[20px] text-[#1c1c37] bg-transparent border-none outline-none placeholder:text-[#5b5a78] placeholder:opacity-40'
                    placeholder='Enter your email'
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className='block text-[20px] lg:text-[24px] text-[#5b5a78] opacity-60 leading-[1.6] tracking-[-0.72px] mb-3'>
                  Your message
                </label>
                <div className='border-b-2 border-gray-200'>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className='w-full py-3 text-[18px] lg:text-[20px] text-[#1c1c37] bg-transparent border-none outline-none resize-none placeholder:text-[#5b5a78] placeholder:opacity-40'
                    placeholder='Enter your message'
                  />
                </div>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-[16px] ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  <p className='text-[16px] lg:text-[18px] font-medium'>
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className='relative'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='bg-[#ffc000] text-white font-bold text-[16px] lg:text-[18px] px-6 py-4 rounded-[32px] hover:bg-[#e6ad00] transition-colors tracking-[-0.54px] disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <div className='absolute -bottom-8 left-24 lg:left-32 w-[70px] h-[70px] lg:w-[85px] lg:h-[85px] bg-[#ffc000] rounded-[20px] lg:rounded-[30px] -z-10' />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px]'>
        <p className='font-medium leading-tight text-[#ffc000] text-sm sm:text-base lg:text-[24px] tracking-widest text-center uppercase mb-4 lg:mb-8'>
          Meet Our Team
        </p>
        <h2 className='font-medium leading-tight lg:leading-[70px] text-[#1c1c37] text-3xl sm:text-4xl lg:text-[64px] text-center tracking-tight lg:tracking-[-1.92px] mb-8 lg:mb-12'>
          Expert Developers Who Build Websites That Convert
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:flex lg:gap-8 lg:justify-center gap-4 sm:gap-6'>
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

      {/* Partner Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px] bg-gradient-to-br from-[#ffc000] to-[#ffb300] rounded-tr-[100px] lg:rounded-tr-[210px]'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-white'>
          <div className='space-y-6'>
            <h2 className='font-light text-[40px] lg:text-[64px] leading-[1.1] lg:leading-[70px] tracking-[-1.92px]'>
              Become a partner of us to work together
            </h2>
            <p className='text-[16px] lg:text-[18px] leading-[1.6] tracking-[-0.54px] max-w-[374px]'>
              Join more than 200 firms in getting a free, fast, and
              seo-optimized website.
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='flex items-center justify-center'>
              <img
                src='/images/aceplp-logo.png'
                alt='ACEPLP'
                className='w-auto h-12 opacity-90 hover:opacity-100 transition-opacity'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='/images/aia-logo.png'
                alt='AIA'
                className='w-auto h-12 opacity-90 hover:opacity-100 transition-opacity'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='/images/bimeco-logo.png'
                alt='Bimeco'
                className='w-auto h-12 opacity-90 hover:opacity-100 transition-opacity'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='/images/buildingSMART-website-logo.png'
                alt='buildingSMART'
                className='w-auto h-12 opacity-90 hover:opacity-100 transition-opacity'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='/images/fairprice-logo.png'
                alt='NTUC FairPrice'
                className='w-auto h-12 opacity-90 hover:opacity-100 transition-opacity'
              />
            </div>
            <div className='flex items-center justify-center'>
              <img
                src='/images/st-engineering-logo.png'
                alt='ST Engineering'
                className='w-auto h-12 opacity-90 hover:opacity-100 transition-opacity'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Address Section */}
      <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[165px]'>
        <h2 className='font-light text-[40px] lg:text-[64px] text-[#1c1c37] leading-[1.1] lg:leading-[70px] tracking-[-1.92px] text-center mb-12 lg:mb-16'>
          Office Address
        </h2>
        <div className='bg-[#f9f9fa] rounded-[64px] lg:rounded-[84px] p-8 lg:p-16'>
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            {offices.map((office, idx) => (
              <div key={idx} className='space-y-2'>
                <h3 className='text-[16px] lg:text-[18px] font-bold text-[#1c1c37] leading-[1.6] tracking-[-0.54px]'>
                  {office.location}
                </h3>
                <p className='text-[16px] lg:text-[18px] text-[#1c1c37] leading-[2] tracking-[-0.54px]'>
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='px-4 sm:px-6 lg:px-[165px] pb-16 lg:pb-24'>
        <div className='max-w-4xl mx-auto'>
          <CompactFAQSection
            faqs={CONTACT_FAQS}
            title='Contact FAQs'
            includeSchema={true}
            schemaId='contact-faq-schema'
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
