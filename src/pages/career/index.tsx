import React, { useState, useMemo, useEffect, useRef } from "react";
import { graphql, Link, navigate } from "gatsby";
import Layout from "components/Layout";
import SEO from "components/Seo";
import Footer from "components/Footer";
import { Career, Department, getDepartmentDisplayName, getDepartmentSlug } from "types/career";
import { CareersPageJsonLD } from "seo/Career";
import JobCard from "components/career/JobCard";

interface CareerIndexProps {
  data: {
    allCareersYaml: {
      nodes: Career[];
    };
  };
  location: {
    pathname: string;
  };
}

export default function CareerIndex({
  data,
  location,
}: CareerIndexProps) {
  const allJobs = data.allCareersYaml?.nodes || [];

  // Parse department from URL query parameter
  const params = typeof window !== 'undefined' ? new URLSearchParams(location.search) : null;
  const deptParam = params?.get('department');
  const initialDepartment = deptParam ? getDepartmentSlug(deptParam) : null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Department | null>(
    initialDepartment
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLElement>(null);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    const filtered = allJobs.filter((job) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchableText =
          `${job.title} ${job.description} ${job.department}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      // Category filter
      if (selectedCategory && job.department !== selectedCategory) {
        return false;
      }

      return true;
    });

    // Sort by featured first, then by posted date
    return filtered.sort((a, b) => {
      if (a.featured === b.featured) {
        return 0;
      }
      return a.featured ? -1 : 1;
    });
  }, [allJobs, searchQuery, selectedCategory]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDropdown(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const categories: Department[] = ["digital-delivery", "devops", "sales"];

  // Scroll to results section if department filter is active (runs once on mount)
  useEffect(() => {
    if (initialDepartment && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, []); // Empty deps - runs once only

  return (
    <Layout pathname={location.pathname}>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-white py-8 md:py-12">
          <div className="tw-container">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              {/* Left decorative cards */}
              <div className="hidden lg:flex flex-col gap-20 w-72">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[20px] shadow-lg" />
                <div className="h-72 bg-stone-300 rounded-[20px]" />
                <div className="w-60 h-60 p-5 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[20px] shadow-lg flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="w-16 h-12 bg-white rounded" />
                    <div className="text-white text-xl font-semibold">
                      BIM Coordinator
                    </div>
                    <div className="text-white text-lg">Bimeco</div>
                  </div>
                  <div className="px-5 py-2.5 bg-white rounded-xl inline-flex justify-center items-center">
                    <div className="text-neutral-800 text-base font-normal">
                      Full Time
                    </div>
                  </div>
                </div>
              </div>

              {/* Center content */}
              <div className="flex-1 max-w-4xl mx-auto flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-4 text-center">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
                    Build the Future - Join Bimeco Today!
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-black max-w-3xl">
                    Connecting digital delivery specialists to the
                    leading AEC firms globally.
                  </p>
                </div>

                {/* Search bar */}
                <div
                  ref={searchRef}
                  className="relative w-full max-w-3xl"
                >
                  <div className="w-full px-2 sm:px-8 py-3 sm:py-6 pr-24 sm:pr-64 bg-zinc-100 rounded-[60px] flex items-center gap-2.5">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSearchQuery(value);
                        if (value.length >= 2) {
                          setShowDropdown(true);
                        } else {
                          setShowDropdown(false);
                        }
                      }}
                      onFocus={() => {
                        if (searchQuery.length >= 2) {
                          setShowDropdown(true);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setShowDropdown(false);
                          resultsRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      placeholder="All Open Positions"
                      className="flex-1 text-sm sm:text-xl bg-transparent border-none outline-none placeholder-black/60"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      resultsRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="absolute right-0 top-0 bottom-0 w-20 sm:w-60 px-3 sm:px-16 bg-neutral-800 rounded-[60px] flex justify-center items-center hover:bg-neutral-700 transition-colors"
                  >
                    <span className="text-white text-xs sm:text-2xl font-semibold">
                      Search
                    </span>
                  </button>

                  {/* Autocomplete Dropdown */}
                  {showDropdown &&
                    searchQuery.length >= 2 &&
                    filteredJobs.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl overflow-hidden z-[9999] max-w-3xl mx-auto border border-gray-100">
                        {filteredJobs.slice(0, 5).map((job) => (
                          <Link
                            key={job.jobId}
                            to={`/career/${job.jobId}`}
                            className="block px-5 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                            onClick={() => setShowDropdown(false)}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <h4 className="text-base font-semibold text-black">
                                    {job.title}
                                  </h4>
                                  {job.featured && (
                                    <svg
                                      className="w-4 h-4 text-yellow-500 flex-shrink-0"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 mt-0.5">
                                  {job.department} • {job.location}
                                </p>
                              </div>
                              <svg
                                className="w-4 h-4 text-gray-400 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              </div>

              {/* Right decorative cards */}
              <div className="hidden lg:flex flex-col gap-20 w-64">
                <div className="w-60 h-60 p-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[20px] shadow-lg flex items-center justify-center">
                  <div className="text-white text-3xl font-extrabold text-center">
                    Top Choice for BIM Professionals
                  </div>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[20px] shadow-lg" />
                <div className="h-64 bg-zinc-300 rounded-[20px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative bg-gradient-to-r from-yellow-300 to-yellow-500 py-12 overflow-hidden">
          <div className="tw-container">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left content */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-4xl md:text-5xl font-semibold">
                    Why Choose Us?
                  </h2>
                  <p className="text-white text-xl md:text-2xl">
                    We're here to make your job search easier and more
                    rewarding by connecting you with top companies
                    that value your talents.
                  </p>
                </div>

                {/* Partner logos placeholder */}
                <div className="flex items-center gap-8 flex-wrap">
                  <div className="text-white text-sm font-semibold">
                    TRUSTED BY LEADING ORGANIZATIONS
                  </div>
                </div>
              </div>

              {/* Right stats cards */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2 w-full px-6 py-4 bg-white/25 backdrop-blur-sm rounded-3xl flex flex-col justify-center gap-2">
                  <div className="text-white text-5xl md:text-6xl font-bold">
                    {allJobs.length}
                  </div>
                  <div className="text-white text-lg md:text-xl font-semibold">
                    Active Job Openings
                  </div>
                </div>
                <div className="w-full px-6 py-5 bg-white/25 backdrop-blur-sm rounded-3xl flex flex-col justify-between gap-4">
                  <div className="text-white text-5xl md:text-6xl font-bold">
                    407
                  </div>
                  <div className="text-white text-lg md:text-xl font-semibold text-center">
                    BIM Professionals in Network
                  </div>
                </div>
                <div className="w-full px-6 py-5 bg-white/25 backdrop-blur-sm rounded-3xl flex flex-col justify-between gap-4">
                  <div className="text-white text-5xl md:text-6xl font-bold">
                    SG
                  </div>
                  <div className="text-white text-lg md:text-xl font-semibold text-center">
                    Singapore & Regional Coverage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Jobs Section */}
        <section ref={resultsRef} className="py-20 bg-neutral-50">
          <div className="tw-container">
            <div className="flex flex-col items-center gap-8">
              {/* Section heading */}
              <div className="max-w-4xl flex flex-col items-center text-center">
                <h2 className="text-2xl font-semibold text-black">
                  Start Your Search Today!
                </h2>
                <p className="text-xl text-black">
                  Explore exciting career opportunities in
                  Architecture, Engineering, and Construction
                </p>
              </div>

              {/* Category pills */}
              <div className="flex flex-wrap items-center gap-4 justify-center">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    navigate('/career');
                  }}
                  className={`px-12 py-6 rounded-[50px] transition-all ${
                    !selectedCategory
                      ? "bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold"
                      : "bg-zinc-100 text-black hover:bg-zinc-200"
                  }`}
                >
                  <div className="text-xl">All Categories</div>
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      navigate(`/career?department=${category}`);
                    }}
                    className={`px-12 py-6 rounded-[50px] transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-yellow-300 to-yellow-500 text-white font-bold"
                        : "bg-zinc-100 text-black hover:bg-zinc-200"
                    }`}
                  >
                    <div className="text-xl">{getDepartmentDisplayName(category)}</div>
                  </button>
                ))}
              </div>

              {/* Jobs Grid */}
              <div className="w-full flex flex-col gap-16">
                {filteredJobs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredJobs.map((job) => (
                      <JobCard key={job.jobId} job={job} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-2xl text-gray-600">
                      No jobs found matching your criteria
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-28 bg-zinc-100">
          <div className="tw-container">
            <div className="flex flex-col items-center gap-4">
              {/* Section heading */}
              <div className="max-w-4xl flex flex-col items-center ">
                <div className="flex flex-col text-center">
                  <p className="text-neutral-400 text-2xl uppercase tracking-widest">
                    What Our Team Says
                  </p>
                  <h2 className="text-6xl font-bold text-black m-0">
                    Our Team
                  </h2>
                </div>
                <p className="text-4xl text-black text-center">
                  Discover how BIM professionals like you built their
                  careers with Bimeco.
                </p>
              </div>

              {/* Testimonials grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {[
                  {
                    name: "Darshiini Pillai",
                    role: "BIM Lead",
                    company: "Rail Infrastructure Projects",
                    quote:
                      "Joining Bimeco was the best career decision I made. The exposure to major rail projects and the supportive team environment helped me grow tremendously as a BIM professional.",
                  },
                  {
                    name: "Ben Doctolero",
                    role: "BIM Manager",
                    company: "Industrial & Plant Projects",
                    quote:
                      "Bimeco provided me with opportunities to work on complex industrial projects and develop my leadership skills. The professional development support here is exceptional.",
                  },
                  {
                    name: "Faiz Zalani",
                    role: "BIM Coordinator",
                    company: "Infrastructure Projects",
                    quote:
                      "The learning curve at Bimeco is steep but rewarding. Working with experienced professionals on prestigious projects has accelerated my career growth significantly.",
                  },
                ].map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="p-14 bg-white rounded-3xl flex flex-col gap-2.5"
                  >
                    <div className="flex flex-col gap-11">
                      <div className="flex items-start gap-5">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold">
                          {testimonial.name
                            .split(" ")
                            .filter((n) => n)
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex flex-col flex-1">
                          <h3 className="text-2xl font-bold text-black m-0">
                            {testimonial.name}
                          </h3>
                          <p className="text-base text-black">
                            {testimonial.role}, {testimonial.company}
                          </p>
                          <div className="flex items-center gap-2.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-2xl text-black">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/portfolio"
                className="px-12 py-5 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-[50px] inline-flex justify-center items-center hover:opacity-90 transition-opacity"
              >
                <span className="text-2xl text-white">
                  View Team Portfolios
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="tw-container">
            <div className="px-6 md:px-10 lg:px-16 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-3xl md:rounded-[60px] flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white m-0">
                  Your Next Opportunity Starts Here!
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-white">
                  Don't just search—find the job that truly fits you.
                  Join hundreds of BIM professionals who have taken
                  the next step in their careers.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center md:text-left">
                  Start Your Journey Today!
                </div>
                <Link
                  to="/career/apply"
                  className="w-full md:w-auto px-6 md:px-10 lg:px-12 h-12 md:h-14 bg-white rounded-[50px] flex justify-center items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg md:text-xl lg:text-2xl text-black font-semibold">
                    Browse Jobs
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <>
    <SEO
      title="Careers - Join Our Team | Bimeco"
      description="Explore career opportunities at Bimeco, Singapore's leading BIM and digital construction consultancy. Work on major infrastructure projects with cutting-edge technology. View open positions for BIM Coordinators, BIM Managers, Project Planners, and more."
      pathname={location.pathname}
    />
    <CareersPageJsonLD />
  </>
);

export const query = graphql`
  query CareerIndexQuery {
    allCareersYaml(
      filter: { status: { eq: "active" } }
      sort: { posted: DESC }
    ) {
      nodes {
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
    }
  }
`;
