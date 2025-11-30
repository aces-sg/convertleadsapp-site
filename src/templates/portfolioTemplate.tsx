import React from "react";
import Footer from "components/Footer";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import Breadcrumb from "components/Breadcrumb";
import {
  CATEGORY_LABELS,
  ProjectOpening,
  DisciplineBadge,
  ProjectCategory,
} from "types/portfolio";
import SEO from "components/Seo";
import { portfolioProfiles } from "data/portfolioProfiles";
import InitialsAvatar from "components/InitialsAvatar";

interface PortfolioTemplateProps {
  data: {
    photo?: {
      childImageSharp?: {
        gatsbyImageData: any;
      };
    };
    allPortfolioYaml?: {
      nodes: Array<{
        profileId: string;
        profileName: string;
        profileRole: string;
        profileSlug: string;
        projects: ProjectOpening[];
      }>;
    };
  };
  location: {
    pathname: string;
  };
  pageContext: {
    profileSlug: string;
    profileId: string;
  };
}

export default function PortfolioTemplate({
  data,
  location,
  pageContext,
}: PortfolioTemplateProps) {
  const { profileSlug } = pageContext;
  const profile = portfolioProfiles[profileSlug];

  const photo = getImage(
    data?.photo?.childImageSharp?.gatsbyImageData
  );

  // Get portfolio data from YAML
  const portfolioData = data.allPortfolioYaml?.nodes?.find(
    (node) => node.profileSlug === profileSlug
  );
  const yamlProjects = portfolioData?.projects || [];

  // Use YAML projects as the source
  const allProjects = yamlProjects;

  return (
    <Layout pathname={location.pathname}>
      <div className="bg-white">
        {/* Content section */}
        <div className="mx-auto max-w-7xl px-6 my-16">
          <div className="mx-auto flex max-w-2xl flex-col items-start justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto p-12">
              <div className="flex border-t border-gray-100">
                <a
                  href="/portfolio"
                  className="text-sm/6 font-semibold text-black"
                >
                  <span aria-hidden="true">&larr;</span> View all
                  profiles
                </a>
              </div>
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {profile.name}
              </h2>

              <p className="mt-6 text-xl/8 text-gray-600">
                {profile.description}
              </p>

              {photo ? (
                <GatsbyImage
                  alt={profile.name}
                  image={photo}
                  className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
                />
              ) : (
                <div className="mt-16 aspect-[6/5] w-full rounded-2xl overflow-hidden lg:aspect-auto lg:h-[34.5rem]">
                  <InitialsAvatar name={profile.name} size="large" />
                </div>
              )}
            </div>

            <div className="w-full lg:max-w-xl lg:flex-auto">
              <div className="-my-8 divide-y divide-gray-100 max-w-full">
                {allProjects.map((opening) => {
                  return (
                    <div key={opening.id} className="py-8">
                      {/* Role (left) and Date (right) */}
                      <div className="flex justify-between items-baseline">
                        <div className="text-lg font-semibold text-gray-900">
                          {opening.role}
                        </div>
                        <div className="text-sm text-gray-500">
                          {opening.date}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mt-2 w-full flex-none text-base/7 text-gray-600">
                        {Array.isArray(opening.description) ? (
                          <ul className="list-disc list-outside ml-5 space-y-1">
                            {opening.description.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          opening.description
                        )}
                      </div>

                      {/* Badges: Skills, Disciplines, and Categories */}
                      <div className="mt-4 flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                          {/* Skills badges (software-related) */}
                          {opening.skills && opening.skills.split(',').map((skill) => (
                            <span
                              key={skill.trim()}
                              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                            >
                              {skill.trim()}
                            </span>
                          ))}

                          {/* Category badges (from YAML) */}
                          {opening.categories?.map((category) => (
                            <span
                              key={category}
                              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-800 ring-1 ring-inset ring-blue-600/20"
                            >
                              {CATEGORY_LABELS[category]}
                            </span>
                          ))}

                          {/* Discipline badges */}
                          {opening.badges?.map((badge) => (
                            <span
                              key={badge}
                              className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-x-3 text-base/7 text-gray-500">
                          {opening.projectTitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({
  pageContext,
}: {
  pageContext: { profileSlug: string };
}) => {
  const profile = portfolioProfiles[pageContext.profileSlug];
  return (
    <SEO
      title={`${profile.name} - Portfolio`}
      description={profile.description}
      pathname={`/portfolio/${profile.slug}`}
    />
  );
};

export const query = graphql`
  query PortfolioTemplateQuery(
    $profileSlug: String!
    $photoPath: String!
  ) {
    photo: file(relativePath: { eq: $photoPath }) {
      childImageSharp {
        gatsbyImageData(width: 800, quality: 90)
      }
    }
    allPortfolioYaml(filter: { profileSlug: { eq: $profileSlug } }) {
      nodes {
        profileId
        profileName
        profileRole
        profileSlug
        projects {
          id
          projectTitle
          role
          description
          date
          startDate
          endDate
          skills
          badges
          categories
        }
      }
    }
  }
`;
