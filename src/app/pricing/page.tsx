'use client';

import * as React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

/* eslint-disable @next/next/no-img-element */

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(4);

  const pricingPlans = [
    {
      name: 'Free',
      price: 'Free',
      period: '',
      color: '#e3ae0d',
      features: [
        'Up to 5 static pages',
        'Mobile responsive design',
        'Basic SEO setup',
        'Contact form integration',
        'Email support',
      ],
      cta: 'Get Started Free',
      ctaColor: 'bg-[#f2c94c]',
      note: 'Domain purchase charged separately',
    },
    {
      name: 'Business',
      price: 'Custom',
      period: '',
      color: '#9a9aff',
      badge: 'MOST POPULAR',
      features: [
        'Everything in Free',
        'Consultant support for customization',
        'Content migration from existing website',
        'Google Analytics integration',
        'Google Search Console integration',
        'CMS integration',
      ],
      cta: 'Contact',
      ctaColor: 'bg-[#9a9aff]',
      highlighted: true,
      note: 'Domain purchase charged separately',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      color: '#b5ea1e',
      features: [
        'Everything in Business',
        'CRM & ERP integration',
        'Custom database implementation',
        'Custom software development',
        'Dedicated development team',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      ctaColor: 'bg-[#b5ea1e]',
      note: 'Domain purchase charged separately',
    },
  ];

  const features = [
    {
      name: 'Static Pages',
      description: 'Professional web pages with mobile responsive design.',
      free: 'Up to 5',
      business: 'Unlimited',
      enterprise: 'Unlimited',
    },
    {
      name: 'SEO Setup',
      description:
        'Basic technical SEO to help your business rank on search engines.',
      free: true,
      business: true,
      enterprise: true,
    },
    {
      name: 'Consultant Support',
      description: 'Work with consultants to customize beyond basic templates.',
      free: false,
      business: true,
      enterprise: true,
    },
    {
      name: 'Content Migration',
      description:
        'Migrate existing content from your old website to the new one.',
      free: false,
      business: true,
      enterprise: true,
    },
    {
      name: 'Analytics & Search Console',
      description:
        'Google Analytics and Google Search Console integration for tracking.',
      free: false,
      business: true,
      enterprise: true,
    },
    {
      name: 'CMS Integration',
      description: 'Content management system for easy updates without code.',
      free: false,
      business: true,
      enterprise: true,
    },
    {
      name: 'CRM & ERP Integration',
      description: 'Connect with enterprise systems like Salesforce, SAP, etc.',
      free: false,
      business: false,
      enterprise: true,
    },
    {
      name: 'Custom Software Development',
      description: 'Build custom applications, databases, and business logic.',
      free: false,
      business: false,
      enterprise: true,
    },
  ];

  const faqs = [
    {
      question: 'What makes ConvertLeadsApp different from WordPress?',
      answer:
        "Unlike WordPress, we build custom-coded websites optimized for performance and conversions. No bloated plugins, just clean code that's fast, secure, and built specifically for your business needs.",
    },
    {
      question: 'Is the Free plan really free?',
      answer:
        'Yes! The Free plan is completely free for qualified small businesses. You get a professional website with basic features at no cost. Upgrade anytime to access advanced features.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer:
        'Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle.',
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'All plans include email support. Business and Enterprise plans get priority support with faster response times. Enterprise customers also get a dedicated account manager.',
    },
    {
      question: 'How long does it take to build my website?',
      answer:
        'Most websites are completed within 2-3 weeks. Enterprise custom projects may take longer depending on complexity. We provide regular updates throughout the process.',
    },
  ];

  return (
    <main className='bg-white relative w-full min-h-screen overflow-x-hidden'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-12 lg:pt-40 lg:pb-20'>
        <div className='container mx-auto px-4 text-center'>
          <div className='w-[60px] h-[4px] bg-[#ffc000] rounded-[2px] mx-auto mb-8'></div>
          <h1 className='font-black text-5xl lg:text-[72px] leading-tight lg:leading-[72px] text-black tracking-tight lg:tracking-[-2.16px] mb-4'>
            Pricing Plans
          </h1>
          <p className='text-[#5b5a78] text-lg lg:text-xl max-w-2xl mx-auto'>
            Choose the perfect plan for your business
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {pricingPlans.map((plan, index) => (
              <div key={index} className='relative'>
                {plan.badge && (
                  <div className='absolute top-0 left-0 right-0 h-[70px] bg-[#ffc000] rounded-t-[16px] flex items-center justify-center z-10'>
                    <p className='font-black text-[18px] text-white tracking-[2.7px]'>
                      {plan.badge}
                    </p>
                  </div>
                )}
                <div
                  className={`bg-white border ${
                    plan.highlighted ? 'border-[#4d4dff]' : 'border-gray-200'
                  } rounded-[16px] p-10 ${
                    plan.badge ? 'pt-[110px]' : ''
                  } relative h-full flex flex-col`}
                >
                  <p
                    className='font-semibold text-[24px] tracking-[-0.72px] mb-6'
                    style={{ color: plan.color }}
                  >
                    {plan.name}
                  </p>
                  <div className='mb-8'>
                    <p className='font-bold text-[64px] leading-[104px] tracking-[-3.2px] text-[#1c1c37]'>
                      {plan.price}
                    </p>
                    {plan.period && (
                      <p className='text-[#5b5a78] text-[18px] tracking-[-0.54px] -mt-4'>
                        {plan.period}
                      </p>
                    )}
                  </div>
                  <div className='flex-1 space-y-4 mb-8'>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className='flex gap-3 items-start'>
                        <svg
                          className='w-4 h-4 mt-1 flex-shrink-0'
                          fill='currentColor'
                          style={{ color: plan.color }}
                          viewBox='0 0 16 16'
                        >
                          <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                        </svg>
                        <p className='text-[#5b5a78] text-[18px] leading-[1.6] tracking-[-0.54px]'>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`${plan.ctaColor} text-white font-bold text-[18px] tracking-[-0.54px] px-6 py-4 rounded-[32px] hover:opacity-90 transition-opacity w-full`}
                  >
                    {plan.cta}
                  </button>
                  {plan.note && (
                    <p className='text-[#5b5a78] text-[14px] leading-[1.6] tracking-[-0.42px] text-center mt-4 italic'>
                      *{plan.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className='py-12 lg:py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='mb-8'>
              <h2 className='font-light text-[64px] leading-[72px] tracking-[-1.92px] text-black mb-8'>
                Features
              </h2>
              <div className='hidden lg:flex items-center gap-8'>
                <div className='flex-1 max-w-md'></div>
                <div className='flex gap-12 text-[24px] font-bold tracking-[-0.72px]'>
                  <span className='text-[#e3ae0d] w-24 text-center'>Free</span>
                  <span className='text-[#9a9aff] w-24 text-center'>
                    Business
                  </span>
                  <span className='text-[#b5ea1e] w-24 text-center'>
                    Enterprise
                  </span>
                </div>
              </div>
            </div>

            <div className='h-[1px] bg-gray-300 mb-8'></div>

            <div className='space-y-8'>
              {features.map((feature, index) => (
                <div key={index} className=''>
                  <h3 className='font-bold text-[18px] tracking-[-0.54px] text-[#1c1c37] mb-2'>
                    {feature.name}
                  </h3>
                  <div className='flex items-center gap-8'>
                    <p className='text-[#5b5a78] text-[18px] leading-[1.6] tracking-[-0.54px] flex-1 max-w-md'>
                      {feature.description}
                    </p>
                    <div className='hidden lg:flex gap-12 items-center'>
                      <div className='w-24 flex justify-center'>
                        {feature.free === true ? (
                          <svg
                            className='w-8 h-8 text-[#e3ae0d]'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                          >
                            <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                          </svg>
                        ) : feature.free === false ? (
                          <svg
                            className='w-8 h-8 text-gray-300'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                          >
                            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                          </svg>
                        ) : (
                          <span className='text-[#5b5a78] font-bold text-[18px]'>
                            {feature.free}
                          </span>
                        )}
                      </div>
                      <div className='w-24 flex justify-center'>
                        {feature.business === true ? (
                          <svg
                            className='w-8 h-8 text-[#9a9aff]'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                          >
                            <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                          </svg>
                        ) : feature.business === false ? (
                          <svg
                            className='w-8 h-8 text-gray-300'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                          >
                            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                          </svg>
                        ) : (
                          <span className='text-[#5b5a78] font-bold text-[18px]'>
                            {feature.business}
                          </span>
                        )}
                      </div>
                      <div className='w-24 flex justify-center'>
                        {feature.enterprise === true ? (
                          <svg
                            className='w-8 h-8 text-[#b5ea1e]'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                          >
                            <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                          </svg>
                        ) : feature.enterprise === false ? (
                          <svg
                            className='w-8 h-8 text-gray-300'
                            fill='currentColor'
                            viewBox='0 0 16 16'
                          >
                            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                          </svg>
                        ) : (
                          <span className='text-[#5b5a78] font-bold text-[18px]'>
                            {feature.enterprise}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < features.length - 1 && (
                    <div className='h-[1px] bg-gray-200 mt-8'></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='font-light text-[64px] leading-[72px] tracking-[-1.92px] text-[#1c1c37] text-center mb-12'>
              Frequently asked questions
            </h2>

            <div className='space-y-4'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${
                    openFaqIndex === index ? 'bg-[#f9f9fa]' : ''
                  } rounded-[32px] transition-all`}
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className='w-full flex items-center justify-between p-8 text-left'
                  >
                    <h3 className='font-bold text-[24px] tracking-[-0.72px] text-[#1c1c37] pr-8'>
                      {faq.question}
                    </h3>
                    <div className='flex-shrink-0'>
                      {openFaqIndex === index ? (
                        <svg
                          className='w-6 h-6 text-[#1c1c37]'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M20 12H4'
                          />
                        </svg>
                      ) : (
                        <svg
                          className='w-6 h-6 text-[#1c1c37]'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 4v16m8-8H4'
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                  {openFaqIndex === index && (
                    <div className='px-8 pb-8'>
                      <p className='text-[#5b5a78] text-[24px] leading-[1.6] tracking-[-0.72px]'>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                  {index < faqs.length - 1 && openFaqIndex !== index && (
                    <div className='h-[1px] bg-gray-200 mx-8'></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden bg-[#ffc000]'>
        <div className='container mx-auto px-4 text-center relative z-10'>
          <h2 className='font-light text-4xl lg:text-[64px] leading-tight lg:leading-[70px] text-white tracking-tight lg:tracking-[-1.92px] mb-6 max-w-4xl mx-auto'>
            Ready to transform your business with a high-converting website?
          </h2>
          <p className='text-white text-[18px] tracking-[-0.54px] leading-[1.6] mb-8'>
            Join 190+ successful small businesses and start driving real sales
            today
          </p>
          <button className='bg-white text-[#ffc000] font-bold text-[18px] tracking-[-0.54px] px-16 py-4 rounded-[32px] hover:bg-gray-100 transition-colors'>
            Get Started Free
          </button>
        </div>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-56 h-44 opacity-20'>
          <svg viewBox='0 0 200 200' className='w-full h-full'>
            <circle
              cx='100'
              cy='100'
              r='80'
              fill='none'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
        </div>
        <div className='absolute bottom-0 right-0 w-56 h-44 opacity-20'>
          <svg viewBox='0 0 200 200' className='w-full h-full'>
            <circle
              cx='100'
              cy='100'
              r='80'
              fill='none'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
        </div>
      </section>

      <Footer />
    </main>
  );
}
