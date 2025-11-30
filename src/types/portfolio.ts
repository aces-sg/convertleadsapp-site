// Portfolio Types and Interfaces
// Constants imported from shared source of truth
import {
  VALID_SOFTWARE_TOOLS,
  VALID_DISCIPLINES,
  VALID_CATEGORIES,
} from "../constants/portfolio";

// Project category types (infrastructure/facility categories)
export type ProjectCategory = (typeof VALID_CATEGORIES)[number];

// Software tool types (enforces only valid software names in skills field)
export type SoftwareTool = (typeof VALID_SOFTWARE_TOOLS)[number];

// Discipline badge types (existing discipline categories)
export type DisciplineBadge = (typeof VALID_DISCIPLINES)[number];

// Project opening interface for portfolio pages
export interface ProjectOpening {
  id: number;
  projectTitle: string;
  role: string;
  description: string | string[]; // Support both single string and array format
  date: string;
  startDate?: string; // YYYY-MM format for reliable sorting
  endDate?: string; // YYYY-MM format or "Current"/"Ongoing"
  /**
   * Comma-separated list of software tools (e.g., "AutoCAD, Revit, Navisworks")
   * Must contain only valid SoftwareTool values
   * @see SoftwareTool for valid values
   */
  skills: string;
  badges?: DisciplineBadge[]; // Made optional as some profiles may not have badges
  categories?: ProjectCategory[];
}

// Badge styling configuration
export interface BadgeConfig {
  category: {
    bgColor: string;
    textColor: string;
    ringColor: string;
  };
  discipline: {
    bgColor: string;
    textColor: string;
    ringColor: string;
  };
}

// Default badge styling
export const BADGE_STYLES: BadgeConfig = {
  category: {
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    ringColor: "inset-ring-blue-600/20",
  },
  discipline: {
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-800",
    ringColor: "inset-ring-yellow-600/20",
  },
};

// Category display names (for consistent capitalization)
export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  road: "Road",
  rail: "Rail",
  airport: "Airport",
  plant: "Plant",
};

// Portfolio profile interface (from portfolio.yaml)
export interface PortfolioProfile {
  profileId: string;
  profileName: string;
  profileRole: string;
  profileSlug: string;
  projects: ProjectOpening[];
}

// Timeline project interface (project with team member info)
export interface TimelineProject extends ProjectOpening {
  profileId: string;
  profileName: string;
  profileRole: string;
  profileSlug: string;
}
