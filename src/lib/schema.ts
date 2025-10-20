
/**
 * Schema.org JSON-LD Generator Utilities
 * Generates structured data for SEO and rich snippets
 */

export type SchemaType =
  | 'Organization'
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'Service'
  | 'Person'
  | 'AggregateRating'
  | 'Review'
  | 'WebSite'
  | 'BreadcrumbList'
  | 'FAQPage'
  | 'Product'
  | 'Rating'
  | 'PostalAddress'
  | 'GeoCoordinates'
  | 'SearchAction'
  | 'EntryPoint'
  | 'ListItem'
  | 'Question'
  | 'Answer';

// Base schema interface with flexible properties
interface BaseSchema {
  '@context': 'https://schema.org';
  '@type': SchemaType | SchemaType[] | string;
  [key: string]: any; // Allow additional properties
}

// Organization schema data
export interface OrganizationData {
  name: string;
  legalName?: string;
  url: string;
  logo: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: AddressData;
  sameAs?: string[]; // Social media profiles
  foundingDate?: string;
}

// Address data
export interface AddressData {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

// Local Business data
export interface LocalBusinessData extends OrganizationData {
  priceRange?: string;
  openingHours?: string[];
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
}

// Service data
export interface ServiceData {
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  serviceType?: string;
  areaServed?: string | string[];
}

// Person data
export interface PersonData {
  name: string;
  jobTitle: string;
  image?: string;
  worksFor?: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  email?: string;
  url?: string;
}

// Review data
export interface ReviewData {
  author: string;
  reviewBody: string;
  reviewRating?: {
    ratingValue: number;
    bestRating?: number;
  };
  datePublished?: string;
  position?: string; // e.g., "Owner, Boutique Coffee Roasters"
}

// Aggregate Rating data
export interface AggregateRatingData {
  ratingValue: number;
  bestRating?: number;
  ratingCount?: number;
  reviewCount?: number;
}

// Breadcrumb data
export interface BreadcrumbItem {
  name: string;
  url: string;
}

// FAQ data
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(
  data: OrganizationData
): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    ...(data.legalName && { legalName: data.legalName }),
    url: data.url,
    logo: data.logo,
    ...(data.description && { description: data.description }),
    ...(data.email && { email: data.email }),
    ...(data.telephone && { telephone: data.telephone }),
    ...(data.address && { address: data.address }),
    ...(data.sameAs && data.sameAs.length > 0 && { sameAs: data.sameAs }),
    ...(data.foundingDate && { foundingDate: data.foundingDate }),
  };
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(
  data: LocalBusinessData
): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: data.name,
    url: data.url,
    ...(data.logo && { logo: data.logo }),
    ...(data.description && { description: data.description }),
    ...(data.email && { email: data.email }),
    ...(data.telephone && { telephone: data.telephone }),
    ...(data.address && { address: data.address }),
    ...(data.priceRange && { priceRange: data.priceRange }),
    ...(data.openingHours && { openingHours: data.openingHours }),
    ...(data.geo && { geo: data.geo }),
    ...(data.sameAs && data.sameAs.length > 0 && { sameAs: data.sameAs }),
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(data: ServiceData): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    provider: data.provider,
    ...(data.serviceType && { serviceType: data.serviceType }),
    ...(data.areaServed && { areaServed: data.areaServed }),
  };
}

/**
 * Generate Person schema
 */
export function generatePersonSchema(data: PersonData): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.jobTitle,
    ...(data.image && { image: data.image }),
    ...(data.worksFor && { worksFor: data.worksFor }),
    ...(data.email && { email: data.email }),
    ...(data.url && { url: data.url }),
  };
}

/**
 * Generate Review schema
 */
export function generateReviewSchema(
  data: ReviewData,
  itemReviewed: { name: string; url: string }
): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: itemReviewed.name,
      url: itemReviewed.url,
    },
    author: {
      '@type': 'Person',
      name: data.author,
      ...(data.position && { jobTitle: data.position }),
    },
    reviewBody: data.reviewBody,
    ...(data.reviewRating && {
      reviewRating: {
        '@type': 'Rating',
        ratingValue: data.reviewRating.ratingValue,
        bestRating: data.reviewRating.bestRating || 5,
      },
    }),
    ...(data.datePublished && { datePublished: data.datePublished }),
  };
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(
  data: AggregateRatingData,
  itemReviewed: { name: string; url: string }
): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product', // Or 'Organization' depending on what's being rated
    name: itemReviewed.name,
    url: itemReviewed.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.ratingValue,
      bestRating: data.bestRating || 5,
      ...(data.ratingCount && { ratingCount: data.ratingCount }),
      ...(data.reviewCount && { reviewCount: data.reviewCount }),
    },
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(data: {
  name: string;
  url: string;
  description?: string;
  searchUrl?: string;
}): BaseSchema {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: data.name,
    url: data.url,
    ...(data.description && { description: data.description }),
  };

  // Add search action if search URL is provided
  if (data.searchUrl) {
    schema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${data.searchUrl}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    };
  }

  return schema;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(items: FAQItem[]): BaseSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Combine multiple schemas into a single JSON-LD graph
 */
export function combineSchemas(schemas: BaseSchema[]): object {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
