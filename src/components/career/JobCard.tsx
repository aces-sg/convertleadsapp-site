import React from "react";
import { Link } from "gatsby";
import { Career, getDepartmentDisplayName } from "types/career";

interface JobCardProps {
  job: Career;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link
      to={`/career/${job.jobId}`}
      className="block min-h-96 px-12 py-8 bg-white rounded-3xl hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col gap-12 h-full">
        <div className="flex flex-col gap-6 flex-1">
          {/* Job header */}
          <div className="flex items-start gap-6">
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-2xl font-bold text-black line-clamp-2 mb-0">
                {job.title}
              </h3>
              <p className="text-xl text-black m-0">
                {getDepartmentDisplayName(job.department)}
              </p>
            </div>
          </div>

          {/* Job details */}
          <div className="flex flex-col gap-4">
            <p className="text-xl text-black line-clamp-3">
              {job.description.substring(0, 120)}...
            </p>

            <div className="flex flex-col gap-1">
              {job.salary && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-7 h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xl font-semibold text-black">
                    {job.salary}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-xl font-semibold text-black">
                  {job.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center">
          <a
            href={job.applyUrl}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.location.href = job.applyUrl;
            }}
            className="w-full h-14 px-8 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-[50px] flex justify-center items-center hover:opacity-90 transition-opacity"
          >
            <span className="text-xl font-bold text-white">
              Apply
            </span>
          </a>
        </div>
      </div>
    </Link>
  );
}
