import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "components/Layout";
import SEO from "components/Seo";
import Footer from "components/Footer";
import VerticalTimeline from "components/VerticalTimeline";
import { TimelineProject, PortfolioProfile } from "types/portfolio";
import { sortProjectsByDate } from "../../utils/dateParser";
import InitialsAvatar from "components/InitialsAvatar";

interface StaffMember {
  name: string;
  slug: string;
  title: string;
  description: string;
  imageKey: string;
}

const staffMembers: StaffMember[] = [
  {
    name: "Muhammad Azree Bin Abdul Karim",
    slug: "azree",
    title: "BIM Manager & BIM Trainer",
    description:
      "BIM Manager and BIM Trainer with more than 5 years of experience in the Built Environment. Proficient in CAD and BIM software, capable of coordinating and managing all trades. Created IFC-SG courses for OpenBuildings and developed Revit DDM Tier 4 tests for buildingSMART Singapore.",
    imageKey: "azree",
  },
  {
    name: "Benigno Baltazar Doctolero",
    slug: "ben",
    title: "BIM Manager",
    description:
      "Ben is a BIM Manager with extensive expertise in CAD and BIM workflows. With seven years of hands-on site experience and a strong foundation as a BIM Coordinator, he excels in managing multidisciplinary teams, optimizing BIM processes, and resolving design conflicts efficiently.",
    imageKey: "ben",
  },
  {
    name: "Darshiini Pillai",
    slug: "darsh",
    title: "BIM Lead",
    description:
      "BIM Lead with experience delivering multi-disciplinary rail and infrastructure projects. Skilled in Revit, AutoCAD, Navisworks, and ACC/BIM 360, with expertise in clash detection, CSD/SEM/CCSM, as-built consolidation, and full drawing production for lifts, escalators, and architectural/structural interfaces.",
    imageKey: "darshiini",
  },
  {
    name: "Faiz Zalani",
    slug: "faiz",
    title: "BIM Coordinator",
    description:
      "Faiz Zalani is a BIM Coordinator with expertise in model coordination, P&ID management, and infrastructure projects. Skilled in Revit, AutoCAD, Navisworks, OpenPlant, and Revizto, he ensures accurate equipment integration, data synchronization, and compliance with project standards.",
    imageKey: "faiz",
  },
  {
    name: "Nur Fathiah Binti Mohd Shah",
    slug: "fath",
    title: "BIM Coordinator",
    description:
      "BIM Coordinator with hands-on delivery across Architectural, Structural, and MEP (ACMV/Electrical/Piping) scopes. Experienced in end-to-end drawing production, BIM model management, clash detection (Navisworks), multidisciplinary coordination, and precast/façade detailing.",
    imageKey: "fathiah",
  },
  {
    name: "Low Pak Sing",
    slug: "low",
    title: "Project Planner",
    description:
      "Low Pak Sing is a seasoned project management professional with over 40 years of experience, including 25+ years specializing in coordination, program planning, and project controls. His expertise spans sports facilities, airports, high-rise buildings, rail infrastructure, and tunneling projects.",
    imageKey: "low",
  },
  {
    name: "Su Latt Tun",
    slug: "sulatt",
    title: "BIM Manager",
    description:
      "Su Latt Tun is a dedicated and ambitious Civil Engineer with over four years of experience in the built environment sector, specializing in BIM coordination, structural drafting, and site supervision. She has a proven track record working with major contractors like Lendlease Singapore and Gammon Construction.",
    imageKey: "sulatt",
  },
  {
    name: "Tristan D'Conceicao",
    slug: "tristan",
    title: "BIM Coordinator",
    description:
      "BIM Coordinator with experience in infrastructure and rail projects. Skilled in OpenRoads, OpenBuildings, Revit, AutoCAD, and Microstation. Expertise in 3D modeling, coordination, and technical training for BIM workflows.",
    imageKey: "tristan",
  },
];

interface PortfolioIndexProps {
  data: any;
  location: {
    pathname: string;
  };
}

export default function PortfolioIndex({
  data,
  location,
}: PortfolioIndexProps) {
  // Process portfolio data from YAML
  const portfolioProfiles: PortfolioProfile[] =
    data.allPortfolioYaml?.nodes || [];

  // Flatten all projects and add profile info
  const allProjects: TimelineProject[] = portfolioProfiles.flatMap(
    (profile) =>
      (profile.projects || []).map((project) => ({
        ...project,
        profileId: profile.profileId,
        profileName: profile.profileName,
        profileRole: profile.profileRole,
        profileSlug: profile.profileSlug,
      }))
  );

  // Sort projects by date (newest first)
  const sortedProjects = sortProjectsByDate(allProjects);

  return (
    <Layout pathname={location.pathname}>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-10 md:py-16 bg-[#FEF4B4]">
          <div className="tw-container">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-3xl font-extrabold text-black md:text-4xl lg:text-5xl">
                Meet Our Team
              </h1>
              <p className="mb-0 text-gray-700 text-lg md:text-xl">
                Our experienced BIM professionals bring decades of
                combined expertise in BIM coordination, project
                management, and digital delivery. View their
                portfolios to see their project history and
                specializations.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="tw-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member) => {
                const imageNode = data[member.imageKey];
                const imageData = imageNode
                  ? getImage(
                      imageNode.childImageSharp.gatsbyImageData
                    )
                  : null;

                return (
                  <Link
                    key={member.slug}
                    to={`/portfolio/${member.slug}`}
                    className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Profile Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-200">
                      {imageData ? (
                        <GatsbyImage
                          image={imageData}
                          alt={member.name}
                          className="w-full h-full"
                          imgStyle={{ objectFit: "contain" }}
                        />
                      ) : (
                        <InitialsAvatar
                          name={member.name}
                          size="small"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black">
                        {member.name}
                      </h2>
                      <p className="text-sm font-medium text-gray-600 mb-3">
                        {member.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {member.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-black">
                        View Portfolio
                        <span aria-hidden="true" className="ml-2">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Timeline Section */}
        <section id="timeline" className="py-12 md:py-20 bg-gray-50">
          <div className="tw-container">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Projects
              </h2>
              <p className="text-lg text-gray-600">
                Explore our portfolio of digital delivery projects
                from Design, Construction, to Operations
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <VerticalTimeline entries={sortedProjects} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#FEF4B4]">
          <div className="tw-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Looking to Hire BIM Experts?
            </h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Our team is ready to support your next project with
              expert BIM coordination, modeling, and project
              management services.
            </p>
            <Link
              to="/contact"
              className="inline-block transition-all duration-300 ease-in-out hover:opacity-80 text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-white py-3 px-8"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Team Portfolio - BIM Professionals"
    description="Meet our experienced BIM professionals. Browse portfolios showcasing expertise in BIM coordination, project management, clash detection, and digital delivery across major infrastructure projects in Singapore."
    pathname={location.pathname}
  />
);

export const query = graphql`
  query PortfolioIndexQuery {
    ben: file(relativePath: { eq: "profiles/ben.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    darshiini: file(
      relativePath: { eq: "profiles/darshiini-pillai.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    faiz: file(relativePath: { eq: "profiles/faiz.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    fathiah: file(
      relativePath: { eq: "profiles/fathiah-mohd-shah.jpeg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    sulatt: file(relativePath: { eq: "profiles/sulatt.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    tristan: file(relativePath: { eq: "profiles/tristan.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    azree: file(relativePath: { eq: "profiles/azree.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    low: file(relativePath: { eq: "profiles/low.png" }) {
      childImageSharp {
        gatsbyImageData(width: 600, height: 600, quality: 90)
      }
    }
    allPortfolioYaml {
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
