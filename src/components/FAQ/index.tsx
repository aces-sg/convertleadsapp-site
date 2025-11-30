import React from "react";

export default function FAQComponent({ faqs }: { faqs: any[] }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 lg:px-8 lg:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 border-b border-gray-500 pb-4">
          Frequently asked questions
        </h2>
        <dl className="mt-8 sm:mt-12 lg:mt-16 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div
              id={faq.id}
              key={faq.id || faq.question}
              className="py-6 sm:py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base sm:text-lg font-semibold text-gray-900 lg:col-span-5 mb-3 lg:mb-0">
                {faq.question}
              </dt>
              <dd className="ml-0 lg:col-span-7">
                <div
                  className="text-sm sm:text-base leading-relaxed text-gray-600 prose prose-sm sm:prose-base max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
