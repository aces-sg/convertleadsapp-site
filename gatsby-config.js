require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
  siteUrl: `.env.${process.env.NOE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  host: "cdn.contentful.com",
  environment: "master",
};

const gtmConfig = {
  id: process.env.GTM,
};

// Use preview env vars in development
if (
  process.env.NODE_ENV === "development" &&
  !!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
) {
  contentfulConfig.accessToken =
    process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  trailingSlash: "always",
  siteMetadata: {
    title: "Bimeco",
    titleTemplate: "%s | Integrated Digital Delivery Services",
    description:
      "BIM & CAD consultancy services for architects, engineers, and contractors. We provide BIM modeling, CAD drafting, and digital delivery solutions for construction projects.",
    url: "https://www.bim.com.sg", // No trailing slash allowed!
    image: "/bimeco-square-small.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    favicon: "/favicon.ico", // Path to the favicon placed in the 'static' folder, in the project's root directory.
    siteUrl: "https://www.bim.com.sg",
    twitterUsername: "@bimecosg",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        serialize: ({ path: pagePath }) => {
          const fs = require("fs");
          const pathModule = require("path");

          // Map URLs to source files
          let sourceFile = null;

          if (pagePath.startsWith("/interior/bto/")) {
            sourceFile = pathModule.resolve(__dirname, "src/content/estates.yaml");
          } else if (pagePath.startsWith("/software/")) {
            sourceFile = pathModule.resolve(__dirname, "src/content/software.yaml");
          } else if (pagePath.startsWith("/services/")) {
            sourceFile = pathModule.resolve(__dirname, "src/content/services.yaml");
          } else if (pagePath.startsWith("/portfolio/")) {
            sourceFile = pathModule.resolve(__dirname, "src/content/portfolio.yaml");
          } else if (pagePath.startsWith("/career/")) {
            sourceFile = pathModule.resolve(__dirname, "src/content/careers.yaml");
          } else {
            // Try to map to page file
            const pathWithoutSlash = pagePath === "/" ? "index" : pagePath.replace(/^\/|\/$/g, "");
            const possibleFiles = [
              pathModule.resolve(__dirname, `src/pages/${pathWithoutSlash}.tsx`),
              pathModule.resolve(__dirname, `src/pages/${pathWithoutSlash}.js`),
              pathModule.resolve(__dirname, `src/pages/${pathWithoutSlash}/index.tsx`),
              pathModule.resolve(__dirname, `src/pages/${pathWithoutSlash}/index.js`),
            ];
            sourceFile = possibleFiles.find((file) => fs.existsSync(file));
          }

          // Get last modified date
          let lastmod;
          if (sourceFile && fs.existsSync(sourceFile)) {
            const stats = fs.statSync(sourceFile);
            lastmod = stats.mtime.toISOString();
          } else {
            // Fallback to build date
            lastmod = new Date().toISOString();
          }

          return {
            url: pagePath,
            lastmod,
            changefreq: "daily",
            priority: 0.7,
          };
        },
      },
    },
    "gatsby-plugin-resolve-src",
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bimeco`,
        short_name: `Bimeco`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1e74fd`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src\/assets\/svgs/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `graphql`,
        path: `${__dirname}/src/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `context`,
        path: `${__dirname}/src/context`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtmConfig.id,
        includeInDevelopment: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "MyNodes",
        imagePath: "path.to.image",
      },
    },
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: "gatsby-plugin-root-import",
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.bim.com.sg/',
        sitemap: 'https://www.bim.com.sg/sitemap-index.xml/',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};
