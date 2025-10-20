import React from 'react';

/**
 * Schema Component
 * Renders JSON-LD structured data for SEO
 *
 * @example
 * ```tsx
 * <Schema data={generateOrganizationSchema(orgData)} />
 * ```
 */

interface SchemaProps {
  data: object | object[];
  id?: string; // Optional ID for the script tag
}

export default function Schema({ data, id }: SchemaProps) {
  // Convert array of schemas to graph format
  const schemaData = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data,
      }
    : data;

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 0),
      }}
      {...(id && { id })}
    />
  );
}

/**
 * Multiple Schema Component
 * Renders multiple schemas in a single JSON-LD graph
 *
 * @example
 * ```tsx
 * <MultipleSchema schemas={[orgSchema, personSchema, reviewSchema]} />
 * ```
 */

interface MultipleSchemaProps {
  schemas: object[];
  id?: string;
}

export function MultipleSchema({ schemas, id }: MultipleSchemaProps) {
  return <Schema data={schemas} id={id} />;
}
