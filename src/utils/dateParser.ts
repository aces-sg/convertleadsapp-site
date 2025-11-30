import { TimelineProject } from "types/portfolio";

/**
 * Parse YYYY-MM format date string to Date object
 * @param dateString - Date in YYYY-MM format (e.g., "2024-10")
 * @returns Date object or null if invalid
 */
export function parseYYYYMM(dateString: string | null | undefined): Date | null {
  if (!dateString || dateString.trim() === '') {
    return null;
  }

  const trimmed = dateString.trim();

  // Handle YYYY-MM format
  if (trimmed.match(/^\d{4}-\d{2}$/)) {
    const [year, month] = trimmed.split("-").map(Number);
    return new Date(year, month - 1);
  }

  return null;
}

/**
 * Parse date string to Date object
 * Supports formats like:
 * - "2023-01", "2023-06" (YYYY-MM)
 * - "Oct 2024 - Current", "Nov 24 - Ongoing" (ranges)
 * - "2020", "2019 – 2020" (years)
 * - "June 2024 – Ongoing", "February 2023 – April 2023" (full month names)
 */
export function parseProjectDate(dateString: string | null | undefined): Date | null {
  // Handle empty, null, or undefined dates
  if (!dateString || dateString.trim() === '') {
    return null;
  }

  const trimmed = dateString.trim();

  // Handle "YYYY-MM" format
  if (trimmed.match(/^\d{4}-\d{2}$/)) {
    const [year, month] = trimmed.split("-").map(Number);
    return new Date(year, month - 1);
  }

  // Handle date ranges - extract start date
  // Formats: "Oct 2024 - Current", "Nov 24 - Ongoing", "2019 – 2020", etc.
  if (trimmed.includes('-') || trimmed.includes('–')) {
    const separator = trimmed.includes('–') ? '–' : '-';
    const startDate = trimmed.split(separator)[0].trim();

    // Recursively parse the start date
    return parseProjectDate(startDate);
  }

  // Handle short year formats like "Nov 24", "Jun 21"
  const shortYearMatch = trimmed.match(/^(\w+)\s+(\d{2})$/);
  if (shortYearMatch) {
    const [, month, shortYear] = shortYearMatch;
    const fullYear = parseInt(shortYear) + 2000; // Assumes 20xx
    const dateStr = `${month} ${fullYear}`;
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      return date;
    }
  }

  // Handle year-only formats like "2020"
  if (trimmed.match(/^\d{4}$/)) {
    const year = parseInt(trimmed);
    return new Date(year, 0); // January of that year
  }

  // Try parsing with JavaScript Date constructor
  const date = new Date(trimmed);

  // Return null if date is invalid
  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
}

/**
 * Sort projects by date (newest first)
 * Prioritizes explicit startDate field if available, falls back to parsing date string
 */
export function sortProjectsByDate(
  projects: TimelineProject[]
): TimelineProject[] {
  return [...projects].sort((a, b) => {
    // Try to use explicit startDate first, fall back to parsing date string
    const dateA = a.startDate ? parseYYYYMM(a.startDate) : parseProjectDate(a.date);
    const dateB = b.startDate ? parseYYYYMM(b.startDate) : parseProjectDate(b.date);

    // Handle null dates (put them at the end)
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;

    // Sort descending (newest first)
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Format project date for display
 * Preserves original range format when possible, or formats parsed date
 */
export function formatProjectDate(dateString: string | null | undefined): string {
  // Handle null/undefined
  if (!dateString || dateString.trim() === '') {
    return "Date TBA";
  }

  const trimmed = dateString.trim();

  // If it's a date range or has "Current"/"Ongoing"/"Present", keep original format
  if (trimmed.match(/current|ongoing|present/i) ||
      (trimmed.includes('-') && trimmed.split(/[-–]/)[1]?.trim())) {
    return trimmed;
  }

  // Otherwise, parse and format the date
  const date = parseProjectDate(dateString);

  // Handle null/invalid dates
  if (!date) {
    return "Date TBA";
  }

  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
