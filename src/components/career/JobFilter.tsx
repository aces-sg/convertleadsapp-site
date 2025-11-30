import React from "react";
import { JobFilters, JobType, JobLevel, Department } from "types/career";

interface JobFilterProps {
  filters: JobFilters;
  onFilterChange: (filters: JobFilters) => void;
  totalJobs: number;
  filteredJobs: number;
}

export default function JobFilter({
  filters,
  onFilterChange,
  totalJobs,
  filteredJobs,
}: JobFilterProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleDepartmentChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onFilterChange({
      ...filters,
      department: e.target.value
        ? (e.target.value as Department)
        : null,
    });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      type: e.target.value ? (e.target.value as JobType) : null,
    });
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({
      ...filters,
      level: e.target.value ? (e.target.value as JobLevel) : null,
    });
  };

  const clearFilters = () => {
    onFilterChange({
      department: null,
      type: null,
      level: null,
      location: null,
      searchQuery: "",
    });
  };

  const hasActiveFilters =
    filters.department ||
    filters.type ||
    filters.level ||
    filters.searchQuery;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      {/* Search bar */}
      <div className="mb-6">
        <label
          htmlFor="job-search"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Search Jobs
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
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
          </div>
          <input
            type="text"
            id="job-search"
            value={filters.searchQuery || ""}
            onChange={handleSearchChange}
            placeholder="Search by job title, skills, or keywords..."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Filter options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Department filter */}
        <div>
          <label
            htmlFor="department-filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Department
          </label>
          <select
            id="department-filter"
            value={filters.department || ""}
            onChange={handleDepartmentChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          >
            <option value="">All Departments</option>
            <option value="BIM Services">BIM Services</option>
            <option value="Engineering">Engineering</option>
            <option value="Planning">Planning</option>
            <option value="Administration">Administration</option>
          </select>
        </div>

        {/* Job type filter */}
        <div>
          <label
            htmlFor="type-filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Job Type
          </label>
          <select
            id="type-filter"
            value={filters.type || ""}
            onChange={handleTypeChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          >
            <option value="">All Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Experience level filter */}
        <div>
          <label
            htmlFor="level-filter"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Experience Level
          </label>
          <select
            id="level-filter"
            value={filters.level || ""}
            onChange={handleLevelChange}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          >
            <option value="">All Levels</option>
            <option value="Entry">Entry Level</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior">Senior</option>
            <option value="Lead">Lead</option>
          </select>
        </div>
      </div>

      {/* Results count and clear filters */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">{filteredJobs}</span> of{" "}
          <span className="font-medium">{totalJobs}</span> jobs
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm font-medium text-yellow-600 hover:text-yellow-700 focus:outline-none"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
