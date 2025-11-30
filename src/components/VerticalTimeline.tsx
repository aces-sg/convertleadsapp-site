import React, { useState } from "react";
import { Link } from "gatsby";
import { TimelineProject, CATEGORY_LABELS } from "types/portfolio";
import { formatProjectDate } from "../utils/dateParser";

interface VerticalTimelineProps {
  entries: TimelineProject[];
  initialDisplayCount?: number;
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({
  entries,
  initialDisplayCount = 10,
}) => {
  const [showAll, setShowAll] = useState(false);

  if (!entries || entries.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No projects to display
      </div>
    );
  }

  const displayedEntries = showAll
    ? entries
    : entries.slice(0, initialDisplayCount);
  const hasMore = entries.length > initialDisplayCount;

  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"
        aria-hidden="true"
      />

      {/* Timeline entries */}
      <div className="space-y-8">
        {displayedEntries.map((entry, index) => {
          return (
            <div key={`${entry.id}-${index}`} className="relative pl-20 pt-6">
              {/* Date badge - positioned above the dot */}
              <div className="absolute left-3.5 -top-1 text-xs font-medium text-gray-600 whitespace-nowrap">
                {formatProjectDate(entry.date)}
              </div>

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-black border-4 border-white shadow" />

              {/* Content card - wrapped in Link */}
              <Link
                to={`/portfolio/${entry.profileSlug}`}
                className="block bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300"
              >
                {/* Project title and team member info */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {entry.projectTitle}
                  </h3>
                  <div className="text-sm font-medium text-black">
                    {entry.profileName}
                  </div>
                  <span className="text-sm text-gray-500">
                    {entry.profileRole}
                  </span>
                </div>

                {/* Role */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded">
                    {entry.role}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-4 text-gray-700 leading-relaxed">
                  {Array.isArray(entry.description) ? (
                    <ul className="list-disc list-outside ml-5 space-y-1">
                      {entry.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{entry.description}</p>
                  )}
                </div>

                {/* Skills, Badges and Categories */}
                <div className="flex flex-wrap gap-2">
                  {/* Skills badges (software-related) */}
                  {entry.skills && entry.skills.split(',').map((skill) => (
                    <span
                      key={skill.trim()}
                      className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20"
                    >
                      {skill.trim()}
                    </span>
                  ))}

                  {/* Category badges */}
                  {entry.categories?.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-800 ring-1 ring-inset ring-blue-600/20"
                    >
                      {CATEGORY_LABELS[category]}
                    </span>
                  ))}

                  {/* Discipline badges */}
                  {entry.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* View More Button */}
      {hasMore && !showAll && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-black bg-white rounded-md shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            View More Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p className="mt-3 text-sm text-gray-600">
            Showing {displayedEntries.length} of {entries.length} projects
          </p>
        </div>
      )}

      {/* Show Less Button (when expanded) */}
      {showAll && hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setShowAll(false);
              // Scroll back to the timeline section
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-gray-700 bg-white rounded-md shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200"
          >
            Show Less
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalTimeline;
