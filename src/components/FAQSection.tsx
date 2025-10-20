'use client';

import React from 'react';

import { generateFAQSchema } from '@/lib/schema';

import Schema from '@/components/Schema';

import type { FAQItem } from '@/lib/schema';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  includeSchema?: boolean;
  schemaId?: string;
}

/**
 * FAQ Section Component
 * Renders an accordion-style FAQ section with optional schema markup
 *
 * @example
 * ```tsx
 * <FAQSection
 *   faqs={GENERAL_FAQS}
 *   title="Frequently Asked Questions"
 *   includeSchema={true}
 * />
 * ```
 */
export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  includeSchema = false,
  schemaId,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-16 lg:py-24 px-4 sm:px-6 lg:px-[100px] bg-white'>
      {/* Schema Markup for SEO */}
      {includeSchema && (
        <Schema data={generateFAQSchema(faqs)} id={schemaId || 'faq-schema'} />
      )}

      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 lg:mb-16'>
          <h2 className='font-medium text-[40px] lg:text-[64px] text-[#1c1c37] leading-[1.1] lg:leading-[70px] tracking-[-1.92px] mb-4'>
            {title}
          </h2>
          {subtitle && (
            <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px]'>
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-white rounded-[16px] border border-[#e5e5e5] overflow-hidden transition-all duration-200 hover:shadow-[0px_4px_32px_0px_rgba(0,0,0,0.05)]'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full text-left p-6 lg:p-8 flex items-start justify-between gap-4 group'
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className='text-[18px] lg:text-[20px] font-semibold text-[#1c1c37] leading-[1.4] tracking-[-0.6px] group-hover:text-[#ffc000] transition-colors'>
                  {faq.question}
                </h3>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={`transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d='M6 9L12 15L18 9'
                      stroke='#ffc000'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className='px-6 lg:px-8 pb-6 lg:pb-8'>
                  <div className='pt-2 border-t border-[#f2f2f2]'>
                    <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] mt-4'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below FAQs */}
        <div className='mt-12 text-center'>
          <p className='text-[16px] lg:text-[18px] text-[#5b5a78] leading-[1.6] tracking-[-0.54px] mb-6'>
            Still have questions? We are here to help!
          </p>
          <a
            href='/contact'
            className='inline-block bg-[#ffc000] text-white font-bold text-[16px] lg:text-[18px] px-8 lg:px-10 py-4 rounded-[64px] hover:bg-[#e6ad00] transition-colors tracking-[-0.54px]'
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * Compact FAQ Section (for page-specific FAQs)
 * A smaller, more compact version without the full hero treatment
 */
interface CompactFAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  includeSchema?: boolean;
  schemaId?: string;
}

export function CompactFAQSection({
  faqs,
  title = 'Common Questions',
  includeSchema = false,
  schemaId,
}: CompactFAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='py-12 lg:py-16'>
      {/* Schema Markup for SEO */}
      {includeSchema && (
        <Schema
          data={generateFAQSchema(faqs)}
          id={schemaId || 'faq-compact-schema'}
        />
      )}

      <div className='mb-8'>
        <h3 className='text-[28px] lg:text-[36px] font-semibold text-[#1c1c37] leading-[1.2] tracking-[-1.08px]'>
          {title}
        </h3>
      </div>

      {/* FAQ Accordion */}
      <div className='space-y-3'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='bg-white rounded-[12px] border border-[#e5e5e5] overflow-hidden'
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className='w-full text-left p-5 lg:p-6 flex items-start justify-between gap-3'
              aria-expanded={openIndex === index}
              aria-controls={`faq-compact-answer-${index}`}
            >
              <h4 className='text-[16px] lg:text-[18px] font-semibold text-[#1c1c37] leading-[1.4]'>
                {faq.question}
              </h4>
              <div className='flex-shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d='M6 9L12 15L18 9'
                    stroke='#ffc000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </button>

            {/* Answer */}
            <div
              id={`faq-compact-answer-${index}`}
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index
                  ? 'max-h-[500px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
              aria-hidden={openIndex !== index}
            >
              <div className='px-5 lg:px-6 pb-5 lg:pb-6'>
                <p className='text-[15px] lg:text-[16px] text-[#5b5a78] leading-[1.6]'>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
