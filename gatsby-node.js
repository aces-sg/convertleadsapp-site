const path = require("path");

// Helper function to convert markdown links to HTML
function parseMarkdownLinks(text) {
  if (!text) return text;

  // Match markdown links: [text](url)
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, linkText, linkUrl) => {
    const isInternal = linkUrl.startsWith('/');

    if (isInternal) {
      // For internal links, use regular anchor with data attribute for Gatsby Link hydration
      return `<a href="${linkUrl}" class="text-[#FBDA05] hover:text-yellow-600 underline transition-colors">${linkText}</a>`;
    } else {
      // For external links, open in new tab
      return `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="text-[#FBDA05] hover:text-yellow-600 underline transition-colors">${linkText}</a>`;
    }
  });
}

exports.onCreateNode = (args) => {
  const { node } = args;

  if (node.internal.Error) {
    console.log(node.body);
  }
}

// Add custom resolvers for nested types
exports.createResolvers = ({ createResolvers }) => {
  // List of all ServicesYaml types that need markdown processing
  const types = [
    'ServicesYaml',
    'ServicesYamlWhyChooseUs',
    'ServicesYamlWhyChooseUsBenefit',
    'ServicesYamlBimApproach',
    'ServicesYamlBimApproachSection',
    'ServicesYamlToolsTechnologies',
    'ServicesYamlPortfolio',
    'ServicesYamlPortfolioProject',
    'ServicesYamlFaq',
    'ServicesYamlHowItWorksProcess',
    'ServicesYamlHowItWorksProcessSteps',
    'ServicesYamlCtaSection',
    'ServicesYamlCtaSectionRightPanel',
  ];

  const resolvers = {};

  // Add markdown resolvers for each type
  types.forEach(typeName => {
    resolvers[typeName] = {
      descriptionHtml: {
        type: 'String',
        resolve: (source) => source?.description ? parseMarkdownLinks(source.description) : null,
      },
      contentHtml: {
        type: 'String',
        resolve: (source) => source?.content ? parseMarkdownLinks(source.content) : null,
      },
      answerHtml: {
        type: 'String',
        resolve: (source) => source?.answer ? parseMarkdownLinks(source.answer) : null,
      },
    };
  });

  createResolvers(resolvers);
};

exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  const config = {
    experiments: {
      syncWebAssembly: true,
    },
    resolve: {
      fallback: {
        querystring: require.resolve("querystring-es3"),
        path: false,
        fs: false,
      },
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "~assets": path.resolve(__dirname, "./src/assets"),
        "~context": path.resolve(__dirname, "./src/context"),
        "~layouts": path.resolve(__dirname, "./src/layouts"),
        "~root": path.resolve(__dirname, "./"),
      },
    },
  };

  // Suppress CSS ordering warnings in production builds
  if (stage === 'build-javascript' || stage === 'develop') {
    config.ignoreWarnings = [
      /mini-css-extract-plugin[^]*Conflicting order/,
    ];
  }

  actions.setWebpackConfig(config);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Generate service pages from services.yaml
  const services = await graphql(`
    {
      allServicesYaml {
        nodes {
          id
          slug
          name
        }
      }
    }
  `);

  if (services.errors) {
    console.error("Services GraphQL query failed:", services.errors);
    return;
  }

  services.data.allServicesYaml.nodes.forEach((node) => {
    createPage({
      path: `/services/${node.slug}`,
      component: path.resolve(`./src/templates/serviceTemplate.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  // Generate career pages from careers.yaml
  const careers = await graphql(`
    {
      allCareersYaml(filter: { status: { eq: "active" } }) {
        nodes {
          jobId
          department
        }
      }
    }
  `);

  if (careers.errors) {
    console.error("Careers GraphQL query failed:", careers.errors);
    return;
  }

  careers.data.allCareersYaml.nodes.forEach((node) => {
    createPage({
      path: `/career/${node.jobId}`,
      component: path.resolve(`./src/templates/careerTemplate.tsx`),
      context: {
        jobId: node.jobId,
        department: node.department,
      },
    });
  });

}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(/* GraphQL */ `
    type ServicesYaml implements Node {
      image: String
      video: ServicesYamlVideo
      whyChooseUs: ServicesYamlWhyChooseUs
      toolsTechnologies: ServicesYamlToolsTechnologies
      bimApproach: ServicesYamlBimApproach
      portfolio: ServicesYamlPortfolio
      description: String
      descriptionHtml: String
    }
    type ServicesYamlVideo {
      bucketName: String
      videoKey: String
      poster: String
    }
    type ServicesYamlWhyChooseUs {
      title: String
      description: String
      descriptionHtml: String
      logos: [ServicesYamlWhyChooseUsLogo]
      benefits: [ServicesYamlWhyChooseUsBenefit]
    }
    type ServicesYamlWhyChooseUsLogo {
      name: String
      image: String
    }
    type ServicesYamlWhyChooseUsBenefit {
      icon: String
      title: String
      description: String
      descriptionHtml: String
    }
    type ServicesYamlToolsTechnologies {
      title: String
      description: String
      descriptionHtml: String
      topRowTools: [ServicesYamlTool]
      bottomRowTools: [ServicesYamlTool]
    }
    type ServicesYamlTool {
      name: String
      image: String
    }
    type ServicesYamlBimApproach {
      title: String
      description: String
      descriptionHtml: String
      sections: [ServicesYamlBimApproachSection]
    }
    type ServicesYamlBimApproachSection {
      id: String
      title: String
      content: String
      contentHtml: String
      bgColor: String
      src: String
      linkText: String
      linkUrl: String
    }
    type ServicesYamlPortfolio {
      title: String
      description: String
      descriptionHtml: String
      projects: [ServicesYamlPortfolioProject]
    }
    type ServicesYamlPortfolioProject {
      title: String
      description: String
      descriptionHtml: String
      image: String
      alt: String
    }
  `)
}
