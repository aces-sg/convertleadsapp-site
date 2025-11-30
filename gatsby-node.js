const path = require("path");
const {
  VALID_SOFTWARE_TOOLS,
  VALID_DISCIPLINES,
  VALID_CATEGORIES,
} = require("./src/constants/portfolio");

// Helper function to validate portfolio project entries
function validatePortfolioProject(project, profileSlug, profileName) {
  const errors = [];

  // Validate skills field
  if (project.skills) {
    const skills = project.skills.split(',').map(s => s.trim());
    const invalidSkills = skills.filter(skill => !VALID_SOFTWARE_TOOLS.includes(skill));

    if (invalidSkills.length > 0) {
      errors.push(
        `Invalid software tools in skills field: ${invalidSkills.join(', ')}\n` +
        `  Valid tools: ${VALID_SOFTWARE_TOOLS.join(', ')}`
      );
    }
  }

  // Validate badges field
  if (project.badges && Array.isArray(project.badges)) {
    const invalidBadges = project.badges.filter(badge => !VALID_DISCIPLINES.includes(badge));

    if (invalidBadges.length > 0) {
      errors.push(
        `Invalid disciplines in badges field: ${invalidBadges.join(', ')}\n` +
        `  Valid disciplines: ${VALID_DISCIPLINES.join(', ')}`
      );
    }
  }

  // Validate categories field
  if (project.categories && Array.isArray(project.categories)) {
    const invalidCategories = project.categories.filter(cat => !VALID_CATEGORIES.includes(cat));

    if (invalidCategories.length > 0) {
      errors.push(
        `Invalid categories: ${invalidCategories.join(', ')}\n` +
        `  Valid categories: ${VALID_CATEGORIES.join(', ')}`
      );
    }
  }

  if (errors.length > 0) {
    const errorMessage = [
      `\n${'='.repeat(80)}`,
      `Portfolio Validation Error`,
      `${'='.repeat(80)}`,
      `Profile: ${profileName} (${profileSlug})`,
      `Project: ${project.projectTitle} (ID: ${project.id})`,
      ``,
      ...errors,
      `${'='.repeat(80)}\n`,
    ].join('\n');

    throw new Error(errorMessage);
  }
}

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

  // Validate portfolio YAML nodes as they're created
  if (node.internal.type === 'PortfolioYaml') {
    const { profileSlug, profileName, projects } = node;

    if (projects && Array.isArray(projects)) {
      projects.forEach((project) => {
        validatePortfolioProject(project, profileSlug, profileName);
      });
    }
  }
}

// Add custom resolvers for nested types
exports.createResolvers = ({ createResolvers }) => {
  // List of all ServicesYaml and SoftwareYaml types that need markdown processing
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
    'SoftwareYamlFaq'
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
  const { createRedirect, createPage } = actions

  // Create redirects for legacy service URLs
  createRedirect({
    fromPath: '/services/2d/cad',
    toPath: '/services/cad-services',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/services/bim-services',
    toPath: '/services/bim',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/services/playbook-contractor',
    toPath: '/services/bim',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/software/bim',
    toPath: '/software/openbuildings-bim',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/services/surveying',
    toPath: '/services/scan-to-bim',
    isPermanent: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/services/3d/scan-to-bim',
    toPath: '/services/scan-to-bim',
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Generate pages from YAML
  const result = await graphql(`
    {
      allEstatesYaml {
        nodes {
          id
          shortcode
          name
        }
      }
    }
  `);

  const softwares = await graphql(`
    {
      allSoftwareYaml {
        nodes {
          id
          name
          yamlId
        }
      }
    }
  `);

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


  if (result.errors) {
    console.error("GraphQL query failed:", result.errors);
    return;
  }

  if (services.errors) {
    console.error("Services GraphQL query failed:", services.errors);
    return;
  }

  result.data.allEstatesYaml.nodes.forEach((node) => {
    createPage({
      path: `/interior/bto/${node.shortcode}`,
      component: path.resolve(`./src/templates/btoTemplate.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  softwares.data.allSoftwareYaml.nodes.forEach((node) => {
    createPage({
      path: `/software/${node.yamlId}`,
      component: path.resolve(`./src/templates/softwareTemplate.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  // Generate service pages from services.yaml
  services.data.allServicesYaml.nodes.forEach((node) => {
    createPage({
      path: `/services/${node.slug}`,
      component: path.resolve(`./src/templates/serviceTemplate.tsx`),
      context: {
        id: node.id,
      },
    });
  });

  // Generate portfolio pages from portfolio.yaml
  const portfolios = await graphql(`
    {
      allPortfolioYaml {
        nodes {
          profileId
          profileName
          profileRole
          profileSlug
        }
      }
    }
  `);

  if (portfolios.errors) {
    console.error("Portfolio GraphQL query failed:", portfolios.errors);
    return;
  }

  // Photo path mapping for each profile
  const photoPathMap = {
    azree: "profiles/azree.png",
    ben: "profiles/ben.jpeg",
    darsh: "profiles/darshiini-pillai.jpeg",
    faiz: "profiles/faiz.jpeg",
    fath: "profiles/fathiah-mohd-shah.jpeg",
    low: "profiles/low.png",
    sulatt: "profiles/sulatt.png",
    tristan: "profiles/tristan.png",
  };

  // Get unique profiles (since portfolio.yaml has multiple projects per profile)
  const uniqueProfiles = Array.from(
    new Map(
      portfolios.data.allPortfolioYaml.nodes.map(node => [
        node.profileSlug,
        node
      ])
    ).values()
  );

  uniqueProfiles.forEach((node) => {
    createPage({
      path: `/portfolio/${node.profileSlug}`,
      component: path.resolve(`./src/templates/portfolioTemplate.tsx`),
      context: {
        profileSlug: node.profileSlug,
        profileId: node.profileId,
        photoPath: photoPathMap[node.profileSlug] || null,
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
    type SoftwareYaml implements Node {
      ctaButton: SoftwareYamlCtaButton
      workflowsSection: SoftwareYamlWorkflowsSection
    }
    type SoftwareYamlCtaButton {
      text: String
      url: String
      type: String
      mailto: Boolean
    }
    type SoftwareYamlWorkflowsSection {
      title: String
      description: String
    }
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
    type PortfolioYaml implements Node {
      profileId: String
      profileName: String
      profileRole: String
      profileSlug: String
      projects: [PortfolioYamlProjects]
    }
    type PortfolioYamlProjects {
      id: Int
      projectTitle: String
      role: String
      date: String
      startDate: String
      endDate: String
      skills: String
      badges: [String]
      categories: [String]
    }
  `)
}

