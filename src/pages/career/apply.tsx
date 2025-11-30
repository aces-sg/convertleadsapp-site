import React, { useState } from "react";
import { graphql, navigate } from "gatsby";
import BlankLayout from "layouts/BlankLayout";
import SEO from "components/Seo";
import { Career } from "types/career";
import { generateClient } from "aws-amplify/api";
import * as mutations from "graphql/mutations";

const client = generateClient();

interface CareerApplyProps {
  data: {
    allCareersYaml: {
      nodes: Career[];
    };
  };
  location: {
    pathname: string;
    search: string;
  };
}

export default function CareerApply({
  data,
  location,
}: CareerApplyProps) {
  const allJobs = data.allCareersYaml?.nodes || [];

  // Get job ID from URL query parameter
  const searchParams = new URLSearchParams(location.search);
  const jobParam = searchParams.get("job");

  // Form state
  const [formData, setFormData] = useState({
    jobId: jobParam || "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    yearsExperience: "",
    currentLocation: "",
    noticePeriod: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Find selected job
  const selectedJob = allJobs.find(
    (job) => job.jobId === formData.jobId
  );

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.jobId) {
      newErrors.jobId = "Please select a position";
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.yearsExperience) {
      newErrors.yearsExperience = "Years of experience is required";
    }
    if (!formData.currentLocation.trim()) {
      newErrors.currentLocation = "Current location is required";
    }
    if (!formData.noticePeriod) {
      newErrors.noticePeriod = "Notice period is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit application via AWS Amplify GraphQL API
      const applicationData = {
        ...formData,
        type: "career-application",
        submittedAt: new Date().toISOString(),
      };

      console.log("Submitting application:", applicationData);

      const res = await client.graphql({
        query: mutations.triggerNotification,
        variables: {
          input: JSON.stringify(applicationData),
        },
      });

      console.log("Application submitted successfully:", res);

      // Redirect to career page
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(
        "An error occurred while submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BlankLayout>
      <div className="bg-white">
        {/* Header */}
        {/* Application Form */}
        <section className="py-12 md:py-20">
          <div className="tw-container">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Job Selection */}
                <h1 className="mb-4 text-2xl font-extrabold text-black md:text-4xl lg:text-4xl text-center">
                  Apply for a Position
                </h1>
                <p className="mb-0 text-gray-700 text-lg">
                  Join our team and work on Singapore's most
                  prestigious infrastructure projects. Fill out the
                  form below to submit your application.
                </p>
                <div>
                  <label
                    htmlFor="jobId"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Position Applying For{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="jobId"
                    name="jobId"
                    value={formData.jobId}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      errors.jobId
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a position...</option>
                    {allJobs.map((job) => (
                      <option key={job.jobId} value={job.jobId}>
                        {job.title} - {job.department}
                      </option>
                    ))}
                  </select>
                  {errors.jobId && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.jobId}
                    </p>
                  )}
                  {selectedJob && (
                    <p className="mt-2 text-sm text-gray-600">
                      {selectedJob.location} • {selectedJob.type} •{" "}
                      {selectedJob.level}
                    </p>
                  )}
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+65 1234 5678"
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* LinkedIn URL */}
                <div>
                  <label
                    htmlFor="linkedinUrl"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    LinkedIn Profile URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                {/* Experience and Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="yearsExperience"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Years of Experience{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="yearsExperience"
                      name="yearsExperience"
                      value={formData.yearsExperience}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.yearsExperience
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select...</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.yearsExperience && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.yearsExperience}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="currentLocation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Current Location{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="currentLocation"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleChange}
                      placeholder="e.g., Singapore"
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.currentLocation
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.currentLocation && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.currentLocation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="noticePeriod"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Notice Period{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className={`block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        errors.noticePeriod
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select...</option>
                      <option value="immediate">Immediate</option>
                      <option value="1-week">1 week</option>
                      <option value="2-weeks">2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-months">2 months</option>
                      <option value="3-months">3 months</option>
                    </select>
                    {errors.noticePeriod && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.noticePeriod}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us why you're a great fit for this position..."
                    className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>

                {/* Resume Upload Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Please email your resume to{" "}
                    <a
                      href="mailto:careers@bim.com.sg"
                      className="underline font-medium"
                    >
                      careers@bim.com.sg
                    </a>{" "}
                    with the subject line "Application -{" "}
                    {selectedJob?.title || "Position"}" after
                    submitting this form.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => navigate("/career")}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 order-2 md:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-block transition-all duration-300 ease-in-out hover:opacity-80 text-base text-black font-medium capitalize rounded-md shadow-shadow-sm bg-[#FBDA05] py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed order-1 md:order-2"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </BlankLayout>
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Apply for Position - Careers | Bimeco"
    description="Submit your application to join Bimeco's team of BIM professionals. Fill out our application form to apply for open positions."
    pathname={location.pathname}
  />
);

export const query = graphql`
  query CareerApplyQuery {
    allCareersYaml(
      filter: { status: { eq: "active" } }
      sort: { title: ASC }
    ) {
      nodes {
        jobId
        title
        department
        location
        type
        level
      }
    }
  }
`;
