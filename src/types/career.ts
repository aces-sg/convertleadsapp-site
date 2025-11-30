// Career and Job Posting Types

export type JobType = "Full-Time" | "Part-Time" | "Contract" | "Internship";
export type JobLevel = "Entry" | "Mid-Level" | "Senior" | "Lead";
export type JobStatus = "active" | "closed" | "filled";
export type Department = "digital-delivery" | "devops" | "sales";

export interface Career {
  jobId: string;
  title: string;
  department: Department;
  location: string;
  type: JobType;
  level: JobLevel;
  salary?: string;
  posted: string;
  expires?: string;
  status: JobStatus;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits?: string[];
  applyUrl: string;
  featured?: boolean;
  categories?: string[];
}

export interface JobApplication {
  jobId: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl?: string;
  coverLetter?: string;
  linkedinUrl?: string;
  yearsExperience: number;
  currentLocation: string;
  noticePeriod: string;
  submittedAt: string;
}

// Filter options for job search
export interface JobFilters {
  department?: Department | null;
  type?: JobType | null;
  level?: JobLevel | null;
  location?: string | null;
  searchQuery?: string;
}

// Helper function to convert department slugs to display names
export const getDepartmentDisplayName = (department: Department): string => {
  const displayNames: Record<Department, string> = {
    "digital-delivery": "Digital Delivery",
    "devops": "DevOps",
    "sales": "Sales",
  };
  return displayNames[department];
};

// Helper function to convert display name or slug to department slug
export const getDepartmentSlug = (value: string): Department | null => {
  const normalized = value.toLowerCase().replace(/\s+/g, "-");
  const validDepartments: Department[] = ["digital-delivery", "devops", "sales"];
  return validDepartments.find((dept) => dept === normalized) || null;
};
