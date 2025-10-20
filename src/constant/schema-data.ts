import type {
  AddressData,
  FAQItem,
  LocalBusinessData,
  PersonData,
  ReviewData,
  ServiceData,
} from '@/lib/schema';

/**
 * ConvertLeadsApp Business Data for Schema Markup
 * Centralized source of truth for all structured data
 */

// Company Information
export const COMPANY_NAME = 'Convertleadsapp';
export const COMPANY_LEGAL_NAME = 'Convertleadsapp.com Pte Ltd';
export const COMPANY_URL = 'https://convertleadsapp.com';
export const COMPANY_LOGO = `${COMPANY_URL}/images/logo.png`;
export const COMPANY_EMAIL = 'ivan@convertleadsapp.com';
export const COMPANY_DESCRIPTION =
  'Professional web development services for small businesses. Custom-coded websites optimized for SEO, conversions, and performance. Free websites for qualified businesses.';
export const COMPANY_FOUNDING_DATE = '2020-01-01'; // Update with actual date

// Social Media Profiles
export const SOCIAL_PROFILES = [
  // Update with your actual social media URLs
  'https://www.linkedin.com/company/convertleadsapp',
  'https://twitter.com/convertleadsapp',
  'https://www.facebook.com/convertleadsapp',
  'https://www.instagram.com/convertleadsapp',
];

// Office Addresses
export const ADDRESS_USA: AddressData = {
  '@type': 'PostalAddress',
  streetAddress: '131 Continental Dr Suite 305',
  addressLocality: 'Newark',
  addressRegion: 'DE',
  postalCode: '19713',
  addressCountry: 'US',
};

export const ADDRESS_SINGAPORE: AddressData = {
  '@type': 'PostalAddress',
  streetAddress: '159 Sin Ming Road, Amtech Building Lobby 1',
  addressLocality: 'Singapore',
  postalCode: '575625',
  addressCountry: 'SG',
};

// Contact Information
export const CONTACT_INFO = {
  email: COMPANY_EMAIL,
  phoneSingapore: '+6598182573',
  phoneUSA: '+15558415688',
};

// Business Hours (update with actual hours)
export const OPENING_HOURS = [
  'Monday-Friday 09:00-18:00',
  'Saturday 10:00-14:00',
];

// Office Locations for LocalBusiness Schema
export const OFFICE_USA: LocalBusinessData = {
  name: `${COMPANY_NAME} - USA Office`,
  url: COMPANY_URL,
  logo: COMPANY_LOGO,
  description: COMPANY_DESCRIPTION,
  email: COMPANY_EMAIL,
  telephone: CONTACT_INFO.phoneUSA,
  address: ADDRESS_USA,
  priceRange: '$$$',
  openingHours: OPENING_HOURS,
  sameAs: SOCIAL_PROFILES,
  // Optional: Add geo coordinates for better local SEO
  // geo: {
  //   '@type': 'GeoCoordinates',
  //   latitude: 39.6837,
  //   longitude: -75.7497,
  // },
};

export const OFFICE_SINGAPORE: LocalBusinessData = {
  name: `${COMPANY_NAME} - Singapore Office`,
  url: COMPANY_URL,
  logo: COMPANY_LOGO,
  description: COMPANY_DESCRIPTION,
  email: COMPANY_EMAIL,
  telephone: CONTACT_INFO.phoneSingapore,
  address: ADDRESS_SINGAPORE,
  priceRange: '$$$',
  openingHours: OPENING_HOURS,
  sameAs: SOCIAL_PROFILES,
  // Optional: Add geo coordinates for better local SEO
  // geo: {
  //   '@type': 'GeoCoordinates',
  //   latitude: 1.3581,
  //   longitude: 103.8354,
  // },
};

// Team Members
export const TEAM_MEMBERS: PersonData[] = [
  {
    name: 'Michael Tan',
    jobTitle: 'UX Designer',
    image: `${COMPANY_URL}/images/linkedin-2.jpg`,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
  },
  {
    name: 'Lisa Wong',
    jobTitle: 'Project Manager',
    image: `${COMPANY_URL}/images/linkedin-3.jpeg`,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
  },
  {
    name: 'David Kim',
    jobTitle: 'Full Stack Developer',
    image: `${COMPANY_URL}/images/linkedin-4.jpeg`,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
  },
  {
    name: 'Amanda Lee',
    jobTitle: 'Marketing Lead',
    image: `${COMPANY_URL}/images/linkedin-1.jpg`,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
  },
];

// Services Offered
export const SERVICES: ServiceData[] = [
  {
    name: 'Custom Website Development',
    description:
      'Custom-coded websites built for performance, SEO, and conversions. No bloated WordPress plugins, just clean, fast code optimized for your business.',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
    serviceType: 'Web Development',
    areaServed: ['US', 'SG', 'Global'],
  },
  {
    name: 'SEO Optimization',
    description:
      'Advanced SEO tools and technical optimization to help your website rank higher on Google and drive organic traffic.',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
    serviceType: 'Search Engine Optimization',
    areaServed: ['US', 'SG', 'Global'],
  },
  {
    name: 'Analytics & Conversion Tracking',
    description:
      'Comprehensive analytics platform to track every visitor, conversion, and revenue source. Real-time insights and performance monitoring.',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
    serviceType: 'Web Analytics',
    areaServed: ['US', 'SG', 'Global'],
  },
  {
    name: 'Website Performance Optimization',
    description:
      'Continuous performance optimization with version control, A/B testing, and real-time monitoring to keep your site running perfectly.',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: COMPANY_URL,
    },
    serviceType: 'Performance Optimization',
    areaServed: ['US', 'SG', 'Global'],
  },
];

// Customer Reviews & Testimonials
export const REVIEWS: ReviewData[] = [
  {
    author: 'Sarah Chen',
    position: 'Owner, Boutique Coffee Roasters',
    reviewBody:
      'ConvertLeadsApp transformed our online presence. Within 3 months, our website traffic tripled and sales increased by 250%. Best decision we ever made.',
    reviewRating: {
      ratingValue: 5,
      bestRating: 5,
    },
    datePublished: '2024-11-15',
  },
  {
    author: 'Michael Torres',
    position: 'Fitness Studio Owner',
    reviewBody:
      'The analytics dashboard alone has helped us identify our best-performing products and optimize our marketing spend. ROI tracking is incredible!',
    reviewRating: {
      ratingValue: 5,
      bestRating: 5,
    },
    datePublished: '2024-10-22',
  },
  {
    author: 'Jennifer Martinez',
    position: 'E-commerce Business Owner',
    reviewBody:
      'More than a website builder—they are growth partners who understand small business. The support and results have been outstanding.',
    reviewRating: {
      ratingValue: 5,
      bestRating: 5,
    },
    datePublished: '2024-09-08',
  },
];

// Aggregate Rating Data
export const AGGREGATE_RATING = {
  ratingValue: 5,
  bestRating: 5,
  ratingCount: 200, // Adjust based on actual count
  reviewCount: 200, // Adjust based on actual count
};

// Company Statistics
export const COMPANY_STATS = {
  businessesServed: 190,
  websitesLaunched: 200,
  revenueGenerated: 200000000, // $200M
  clientSatisfaction: 99, // 99%
};

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    name: 'Project scoping',
    description:
      'Understanding your business needs, goals, and existing technology infrastructure.',
  },
  {
    step: 2,
    name: 'Initial implementation',
    description:
      'Building your custom website with clean code optimized for performance and SEO.',
  },
  {
    step: 3,
    name: 'Analytics (1-month)',
    description:
      'Tracking and analyzing website performance, user behavior, and conversion metrics.',
  },
  {
    step: 4,
    name: 'Project handover',
    description:
      'Delivering your complete website with documentation, analytics setup, and ongoing support.',
  },
];

// Expertise Areas
export const EXPERTISE_AREAS = [
  'Building Websites for Generative Engine Optimization',
  'Business analysis',
  'Wireframing',
  'Analytics tracking',
  'Refinement',
];

// ============================================
// FAQ DATA FOR DIFFERENT PAGES
// ============================================

// General FAQs (for dedicated FAQ page)
export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'What is ConvertLeadsApp?',
    answer:
      'ConvertLeadsApp is a professional web development service specializing in custom-coded websites for small businesses. We build high-performance websites optimized for SEO, conversions, and speed—without the bloat of WordPress plugins. Our service includes built-in analytics, version control, and continuous optimization to help your business grow online.',
  },
  {
    question: 'How is ConvertLeadsApp different from WordPress or website builders?',
    answer:
      'Unlike WordPress or website builders, we write custom code for every website. This means faster load times, better SEO rankings, enhanced security, and no monthly plugin fees. You get a lean, optimized website that performs better and costs less to maintain long-term. Plus, every site includes professional analytics and conversion tracking built-in.',
  },
  {
    question: 'Who is eligible for a free website?',
    answer:
      'We offer free websites to qualifying small businesses that meet our criteria. This typically includes new or growing businesses that need a professional online presence but have limited budgets. Contact us to discuss your specific situation and see if you qualify for our free website program.',
  },
  {
    question: 'What does the free website include?',
    answer:
      'Our free website package includes custom design and development, mobile-responsive layout, basic SEO optimization, contact forms, Google Analytics integration, and 3 months of hosting. You retain full ownership of the code and can host it anywhere after the initial period.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Our typical timeline is 2-4 weeks from project kickoff to launch, depending on complexity and content readiness. The process includes: Project scoping (3-5 days), Initial implementation (1-2 weeks), Analytics setup and testing (3-5 days), and Final handover with documentation. Rush projects can be accommodated for an additional fee.',
  },
  {
    question: 'What kind of analytics do you provide?',
    answer:
      'We implement comprehensive analytics tracking including visitor behavior, conversion tracking, traffic sources, page performance metrics, and revenue attribution. You get a custom dashboard with real-time insights into how your website is performing and which marketing channels are driving results. Unlike basic Google Analytics, our setup tracks the complete customer journey.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes! We offer monthly maintenance plans that include security updates, performance optimization, content updates, analytics monitoring, and priority support. For free website recipients, we provide 3 months of basic support included. After that, you can choose to continue with a maintenance plan or manage the site yourself.',
  },
  {
    question: 'Can I update the website content myself?',
    answer:
      'Absolutely! We can integrate a simple content management system (CMS) or provide you with documentation on how to update common content areas. For clients who prefer not to touch code, we offer affordable content update packages as part of our maintenance plans.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We build modern websites using Next.js, React, TypeScript, and Tailwind CSS—industry-leading technologies used by companies like Netflix and Uber. These technologies ensure your website is fast, secure, and maintainable. All sites are hosted on enterprise-grade infrastructure with 99.9% uptime guarantees.',
  },
  {
    question: 'Do you handle website hosting?',
    answer:
      'Yes, we can handle hosting for you on premium infrastructure (Vercel or AWS). Free website clients receive 3 months of hosting included. After that, hosting costs typically range from $20-50/month depending on traffic. Alternatively, you can host the website on your own provider—you own all the code.',
  },
  {
    question: 'Can you help with SEO and getting found on Google?',
    answer:
      'Yes! Every website we build includes technical SEO optimization as standard—proper heading structure, meta tags, schema markup, sitemap generation, and fast loading times. For clients who want to rank competitively, we offer ongoing SEO services including keyword research, content optimization, link building, and local SEO strategies.',
  },
  {
    question: 'What if I need e-commerce functionality?',
    answer:
      'We can integrate full e-commerce capabilities including product catalogs, shopping carts, payment processing (Stripe, PayPal, etc.), inventory management, and order tracking. E-commerce projects typically take 4-6 weeks and are not included in the free website program, but we offer competitive rates for small businesses.',
  },
  {
    question: 'Are your websites mobile-friendly?',
    answer:
      'Every website we build is fully responsive and optimized for mobile devices. With over 60% of web traffic coming from mobile devices, we ensure your site looks perfect and functions flawlessly on all screen sizes—phones, tablets, and desktops.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Simply fill out our contact form or email us at ivan@convertleadsapp.com. We will schedule a free consultation to discuss your needs, review your eligibility for our free website program, and outline next steps. No obligation, no pressure—just a friendly conversation about how we can help your business succeed online.',
  },
];

// Services Page FAQs
export const SERVICES_FAQS: FAQItem[] = [
  {
    question: 'What web development services do you offer?',
    answer:
      'We offer custom website development, SEO optimization, analytics & conversion tracking, performance optimization, e-commerce integration, and ongoing maintenance. All our services are tailored for small businesses looking to grow their online presence.',
  },
  {
    question: 'How does your 4-step process work?',
    answer:
      'Our process includes: (1) Project scoping—understanding your needs and goals, (2) Initial implementation—building your custom website, (3) Analytics setup—tracking performance for 1 month, and (4) Project handover—delivering everything with documentation and support.',
  },
  {
    question: 'What is Generative Engine Optimization (GEO)?',
    answer:
      'GEO is the practice of optimizing websites for AI-powered search engines like ChatGPT, Google Bard, and Bing AI. As Gartner predicts, 25% or more of searches could migrate to AI by 2026. We structure your website content so AI engines can accurately represent your business, giving you an edge in this emerging channel.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes! We can redesign and rebuild your existing website with modern technologies, improved performance, and better conversion optimization. We can also migrate content from your current site and ensure no SEO rankings are lost during the transition.',
  },
  {
    question: 'Do you work with businesses outside the US and Singapore?',
    answer:
      'Yes, we serve clients globally. While we have offices in the USA and Singapore, we work with businesses worldwide through remote collaboration. All communication is conducted in English, and we accommodate different time zones.',
  },
];

// Contact Page FAQs
export const CONTACT_FAQS: FAQItem[] = [
  {
    question: 'How quickly do you respond to inquiries?',
    answer:
      'We typically respond to all inquiries within 24 hours during business days (Monday-Friday). For urgent requests, please indicate "URGENT" in your subject line, and we will prioritize your message.',
  },
  {
    question: 'What information should I include in my contact form?',
    answer:
      'Please include your business name, website (if you have one), brief description of your project, timeline, and budget range. The more details you provide, the more accurate our initial response will be.',
  },
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes! We offer a free 30-minute consultation to discuss your project, answer questions, and determine if we are a good fit. There is no obligation—just an opportunity to learn how we can help your business.',
  },
  {
    question: 'What are your office hours?',
    answer:
      'Our office hours are Monday-Friday 9:00 AM - 6:00 PM, and Saturday 10:00 AM - 2:00 PM (local time in USA and Singapore). For clients in different time zones, we are happy to schedule calls outside regular hours.',
  },
];

// Home Page FAQs (brief version for quick answers)
export const HOME_FAQS: FAQItem[] = [
  {
    question: 'Why choose ConvertLeadsApp over other web developers?',
    answer:
      'We combine custom-coded websites with powerful analytics and ongoing optimization—not just a one-time build. You get enterprise-level technology at small business prices, plus our free website program for qualifying businesses.',
  },
  {
    question: 'What results can I expect?',
    answer:
      'Our clients typically see 2-3x increases in website traffic and 30-50% improvements in conversion rates within the first 3 months. Real results: Sarah Chen saw 250% sales growth, Michael Torres optimized his marketing spend using our analytics, and Jennifer Martinez called us "growth partners, not just developers."',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Pricing varies by project complexity. Basic websites start at $2,500, while full e-commerce sites range from $5,000-$15,000. Qualifying small businesses may be eligible for our free website program. Contact us for a custom quote.',
  },
  {
    question: 'Can you help my website rank on Google?',
    answer:
      'Yes! Every website includes technical SEO optimization. For competitive rankings, we offer ongoing SEO services including keyword research, content strategy, and link building. We also optimize for AI search engines (GEO) to future-proof your visibility.',
  },
];
