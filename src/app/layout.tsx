import { Metadata } from 'next';
import { DM_Sans, Inknut_Antiqua, Roboto_Condensed } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/schema';

import Schema from '@/components/Schema';

import { siteConfig } from '@/constant/config';
import {
  ADDRESS_SINGAPORE,
  COMPANY_DESCRIPTION,
  COMPANY_EMAIL,
  COMPANY_LOGO,
  COMPANY_NAME,
  COMPANY_URL,
  CONTACT_INFO,
  SOCIAL_PROFILES,
} from '@/constant/schema-data';

// Configure fonts
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inknut-antiqua',
  display: 'swap',
});

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate global schemas for all pages
  const organizationSchema = generateOrganizationSchema({
    name: COMPANY_NAME,
    url: COMPANY_URL,
    logo: COMPANY_LOGO,
    description: COMPANY_DESCRIPTION,
    email: COMPANY_EMAIL,
    telephone: CONTACT_INFO.phoneSingapore,
    address: ADDRESS_SINGAPORE,
    sameAs: SOCIAL_PROFILES,
  });

  const websiteSchema = generateWebSiteSchema({
    name: COMPANY_NAME,
    url: COMPANY_URL,
    description: COMPANY_DESCRIPTION,
  });

  return (
    <html
      lang='en'
      className={`${robotoCondensed.variable} ${dmSans.variable} ${inknutAntiqua.variable}`}
    >
      <head>
        {/* Global Schema Markup */}
        <Schema data={[organizationSchema, websiteSchema]} id='global-schema' />
      </head>
      <body>{children}</body>
    </html>
  );
}
