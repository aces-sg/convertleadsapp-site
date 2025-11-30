import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "components/Layout";
import Footer from "components/Footer";
import SEO from "components/Seo";
import { Career, getDepartmentDisplayName } from "types/career";
import { JobPostingJsonLD, JobBreadcrumbJsonLD } from "seo/Career";

interface CareerTemplateProps {
  data: {
    careersYaml: Career;
    relatedJobs: {
      nodes: Career[];
    };
  };
  location: {
    pathname: string;
  };
  pageContext: {
    jobId: string;
  };
}

export default function CareerTemplate({
  data,
  location,
}: CareerTemplateProps) {
  const job = data.careersYaml;
  const relatedJobs = data.relatedJobs?.nodes || [];

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout pathname={location.pathname}>
      <div className="bg-white">
        {/* Job Header */}
        <section className="py-12 md:py-20 bg-neutral-50">
          <div className="tw-container mx-auto">
            <div className="max-w-6xl">
              {/* Back link */}
              <div className="mb-8">
                <Link
                  to="/career"
                  className="text-base font-semibold text-black hover:underline"
                >
                  <span aria-hidden="true">&larr;</span> Back to all
                  jobs
                </Link>
              </div>

              {/* Job Title and Meta */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center rounded-[50px] bg-zinc-100 px-6 py-3 text-base font-semibold text-black">
                    {getDepartmentDisplayName(job.department)}
                  </span>
                  {job.featured && (
                    <span className="inline-flex items-center rounded-[50px] bg-gradient-to-r from-yellow-300 to-yellow-500 px-6 py-3 text-base font-semibold text-white">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
                  {job.title}
                </h1>

                {/* Job Meta Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-base">
                  <div>
                    <div className="text-gray-600 mb-2 font-medium">
                      Location
                    </div>
                    <div className="font-semibold text-black text-xl">
                      {job.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-2 font-medium">
                      Job Type
                    </div>
                    <div className="font-semibold text-black text-xl">
                      {job.type}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-2 font-medium">
                      Experience
                    </div>
                    <div className="font-semibold text-black text-xl">
                      {job.level}
                    </div>
                  </div>
                  {job.salary && (
                    <div>
                      <div className="text-gray-600 mb-2 font-medium">
                        Salary Range
                      </div>
                      <div className="font-semibold text-black text-xl">
                        {job.salary}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Apply Button */}
              <div className="mt-8">
                <Link
                  to={job.applyUrl}
                  className="inline-block transition-all duration-300 ease-in-out hover:opacity-90 text-xl text-white font-semibold rounded-[50px] bg-gradient-to-r from-yellow-300 to-yellow-500 py-5 px-12"
                >
                  Apply for this Position
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="tw-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-black mb-6">
                    About This Role
                  </h2>
                  <p className="text-xl text-black leading-relaxed whitespace-pre-line">
                    {job.description}
                  </p>
                </div>

                {/* Responsibilities */}
                {job.responsibilities &&
                  job.responsibilities.length > 0 && (
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold text-black mb-6">
                        Responsibilities
                      </h2>
                      <ul className="space-y-4">
                        {job.responsibilities.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-4 text-xl text-black"
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Requirements */}
                {job.requirements && job.requirements.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">
                      Requirements
                    </h2>
                    <ul className="space-y-4">
                      {job.requirements.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 text-xl text-black"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills */}
                {job.skills && job.skills.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">
                      Required Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-[20px] bg-zinc-100 px-6 py-3 text-base font-semibold text-black"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits */}
                {job.benefits && job.benefits.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">
                      Benefits
                    </h2>
                    <ul className="space-y-4">
                      {job.benefits.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 text-xl text-black"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Job Info Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 top-6">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Job Information
                  </h3>
                  <dl className="space-y-6 text-base">
                    <div>
                      <dt className="text-gray-600 mb-2 font-medium">
                        Date Posted
                      </dt>
                      <dd className="font-semibold text-black text-lg ml-0">
                        {formatDate(job.posted)}
                      </dd>
                    </div>
                    {job.expires && (
                      <div>
                        <dt className="text-gray-600 mb-2 font-medium">
                          Application Deadline
                        </dt>
                        <dd className="font-semibold text-black text-lg ml-0">
                          {formatDate(job.expires)}
                        </dd>
                      </div>
                    )}
                    <div>
                      <dt className="text-gray-600 mb-2 font-medium">
                        Job ID
                      </dt>
                      <dd className="font-mono text-sm text-black ml-0">
                        {job.jobId}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <Link
                      to="/career"
                      className="text-base font-semibold text-black hover:text-gray-700 inline-flex items-center gap-2"
                    >
                      <span>←</span> View all open positions
                    </Link>
                  </div>
                </div>

                {/* Apply CTA */}
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-3xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-base text-white mb-6">
                    Join our team and contribute to Singapore's most
                    prestigious infrastructure and building projects.
                  </p>
                  <Link
                    to={job.applyUrl}
                    className="block text-center transition-all duration-300 ease-in-out hover:opacity-90 text-lg text-black font-semibold rounded-[50px] bg-white py-4 px-8"
                  >
                    Apply for this Position
                  </Link>
                </div>

                {/* Related Jobs */}
                {relatedJobs.length > 0 && (
                  <div className="bg-white rounded-3xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">
                      Similar Positions
                    </h3>
                    <div className="space-y-6">
                      {relatedJobs.map((relatedJob) => (
                        <Link
                          key={relatedJob.jobId}
                          to={`/career/${relatedJob.jobId}`}
                          className="block group"
                        >
                          <h4 className="font-semibold text-lg text-black group-hover:text-yellow-600 mb-2 transition-colors">
                            {relatedJob.title}
                          </h4>
                          <p className="text-base text-gray-600">
                            {relatedJob.location} • {relatedJob.type}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({
  data,
}: {
  data: CareerTemplateProps["data"];
}) => {
  const job = data.careersYaml;
  return (
    <>
      <SEO
        title={`${job.title} - Careers | Bimeco`}
        description={`${job.description.substring(0, 155)}...`}
        pathname={`/career/${job.jobId}`}
      />
      <JobPostingJsonLD job={job} />
      <JobBreadcrumbJsonLD job={job} />
    </>
  );
};

export const query = graphql`
  query CareerTemplateQuery($jobId: String!, $department: String!) {
    careersYaml(jobId: { eq: $jobId }) {
      jobId
      title
      department
      location
      type
      level
      salary
      posted
      expires
      status
      description
      responsibilities
      requirements
      skills
      benefits
      applyUrl
      featured
      categories
    }
    relatedJobs: allCareersYaml(
      filter: {
        jobId: { ne: $jobId }
        department: { eq: $department }
        status: { eq: "active" }
      }
      limit: 3
    ) {
      nodes {
        jobId
        title
        location
        type
      }
    }
  }
`;
