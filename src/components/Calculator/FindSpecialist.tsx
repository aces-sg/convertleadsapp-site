import React, { useRef, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { triggerNotification } from "graphql/mutations";

const client = generateClient();

type Profile =
  | "Main Contractor"
  | "Subcontractor"
  | "Consultant/Owner";

type Expertise =
  | "Architecture"
  | "Structural"
  | "Electrical"
  | "Piping"
  | "Civil"
  | "Offshore"
  | "Rail"
  | "Plant"
  | "Airport";

const PROFILES: Profile[] = [
  "Main Contractor",
  "Subcontractor",
  "Consultant/Owner",
];

const PROFILE_ICONS: Record<Profile, string> = {
  "Main Contractor": "/icons/maincon.svg",
  Subcontractor: "/icons/subcon.svg",
  "Consultant/Owner": "/icons/consultant.svg",
};

const EXPERTISE_OPTIONS: Expertise[] = [
  "Architecture",
  "Structural",
  "Electrical",
  "Piping",
  "Civil",
  "Offshore",
  "Rail",
  "Plant",
  "Airport",
];

const EXPERTISE_ICONS: Record<Expertise, string> = {
  Architecture: "/icons/architecture.svg",
  Structural: "/icons/structural.svg",
  Electrical: "/icons/electrical.svg",
  Piping: "/icons/piping.svg",
  Civil: "/icons/civil.svg",
  Offshore: "/icons/offshore.svg",
  Rail: "/icons/rail.svg",
  Plant: "/icons/plant.svg",
  Airport: "/icons/airport.svg",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const FindSpecialistForm: React.FC = () => {
  const [profile, setProfile] = useState<Profile | "">("");
  const [expertise, setExpertise] = useState<string[]>([]);
  const [customExpertise, setCustomExpertise] = useState<string>("");
  const [projectDescription, setProjectDescription] =
    useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    null | boolean
  >(null);
  const [sending, setSending] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [errors, setErrors] = useState<{
    profile?: string;
    expertise?: string;
    projectDescription?: string;
    email?: string;
    name?: string;
  }>({});

  // Refs to focus first invalid control
  const profileGroupRef = useRef<HTMLDivElement | null>(null);
  const expertiseRef = useRef<HTMLSelectElement | null>(null);
  const projectDescriptionRef = useRef<HTMLTextAreaElement | null>(
    null
  );
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const validate = () => {
    const next: typeof errors = {};
    if (!profile) next.profile = "Please select a profile.";
    if (expertise.length === 0)
      next.expertise = "Please select at least one expertise area.";
    if (!projectDescription.trim())
      next.projectDescription = "Please describe your project needs.";
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!emailRegex.test(email))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    return next;
  };

  const focusFirstInvalid = (err: typeof errors) => {
    if (err.profile && profileGroupRef.current) {
      profileGroupRef.current.focus();
      profileGroupRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    if (err.expertise && expertiseRef.current) {
      expertiseRef.current.focus();
      expertiseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    if (err.projectDescription && projectDescriptionRef.current) {
      projectDescriptionRef.current.focus();
      projectDescriptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    if (err.name && nameRef.current) {
      nameRef.current.focus();
      nameRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    if (err.email && emailRef.current) {
      emailRef.current.focus();
      emailRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
  };

  // GraphQL submit (Amplify)
  const handleSend = async () => {
    try {
      const referer =
        typeof document !== "undefined"
          ? document.referrer ?? ""
          : "";
      const currentUrl =
        typeof window !== "undefined"
          ? window.location.href ?? ""
          : "";

      const message = [
        `Find BIM Specialist Submission`,
        `Name: ${name || "-"}`,
        `Company: ${company || "-"}`,
        `Profile: ${profile || "-"}`,
        `Expertise Needed: ${
          expertise.length > 0 ? expertise.join(", ") : "-"
        }`,
        `Project Description: ${projectDescription || "-"}`,
        `Source URL: ${currentUrl}`,
      ].join("\n");

      const variables = {
        input: JSON.stringify({
          name: name || "Find Specialist",
          email,
          phone: "",
          message,
          referrer: referer,
          category: "find-specialist",
        }),
      };

      const res = await client.graphql({
        query: triggerNotification,
        variables,
      });
      console.log("form submission success: ", res);
      setSubmissionStatus(true);
    } catch (err) {
      console.error("Failed to handle form submission", err);
      setSubmissionStatus(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    const errMap = validate();
    if (Object.keys(errMap).length > 0) {
      focusFirstInvalid(errMap);
      return;
    }

    setSubmitted(true);
    setSending(true);
    await handleSend();
    setSending(false);
  };

  const firstErrorMsg =
    (attemptedSubmit &&
      (errors.profile ||
        errors.expertise ||
        errors.projectDescription ||
        errors.name ||
        errors.email)) ||
    null;

  const toggleExpertise = (exp: string) => {
    if (expertise.includes(exp)) {
      setExpertise(expertise.filter((e) => e !== exp));
    } else {
      setExpertise([...expertise, exp]);
    }
  };

  const addCustomExpertise = () => {
    const trimmed = customExpertise.trim();
    if (trimmed && !expertise.includes(trimmed)) {
      setExpertise([...expertise, trimmed]);
      setCustomExpertise("");
    }
  };

  const handleCustomExpertiseKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomExpertise();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
      noValidate
    >
      <h2 className="text-2xl font-semibold tracking-tight mb-1">
        Find a BIM Specialist
      </h2>
      <p className="text-gray-600 mb-6">
        Tell us about your project and we'll match you with the right
        BIM specialist.
      </p>

      {/* Form-level error banner */}
      {firstErrorMsg && (
        <div
          className="mb-4 rounded-lg border border-danger-200 bg-danger-50 p-3 text-sm text-danger-800"
          role="alert"
          aria-live="assertive"
        >
          {firstErrorMsg}
        </div>
      )}

      {/* Profile (three options) */}
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-800 mb-2">
          Your Profile
        </span>
        <div
          ref={profileGroupRef}
          tabIndex={-1}
          aria-invalid={!!errors.profile}
          aria-describedby={
            errors.profile ? "profile-error" : undefined
          }
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {PROFILES.map((p) => {
            const isActive = profile === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setProfile(p)}
                aria-pressed={isActive}
                className={`group relative flex flex-col items-center justify-center rounded-xl border p-3 transition ${
                  isActive
                    ? "border-brand-500 ring-2 ring-brand-200"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={PROFILE_ICONS[p]}
                  alt={p}
                  className="h-12 w-12 object-contain mb-2"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/icons/owner.svg";
                  }}
                />
                <span className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                  {p}
                </span>
              </button>
            );
          })}
        </div>
        {errors.profile && (
          <p id="profile-error" className="mt-2 text-xs text-red-600">
            {errors.profile}
          </p>
        )}
      </div>

      {/* Expertise Area (checkboxes) */}
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-800 mb-2">
          Expertise Needed
        </span>

        {/* Selected expertise tags */}
        {expertise.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {expertise.map((exp) => (
              <span
                key={exp}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-800"
              >
                {exp}
                <button
                  type="button"
                  onClick={() => toggleExpertise(exp)}
                  className="inline-flex items-center justify-center rounded-full hover:bg-brand-200 p-0.5"
                  aria-label={`Remove ${exp}`}
                >
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}

        <div
          ref={expertiseRef as any}
          tabIndex={-1}
          aria-invalid={!!errors.expertise}
          aria-describedby={
            errors.expertise ? "expertise-error" : undefined
          }
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3"
        >
          {EXPERTISE_OPTIONS.map((exp) => {
            const isSelected = expertise.includes(exp);
            return (
              <button
                key={exp}
                type="button"
                onClick={() => toggleExpertise(exp)}
                aria-pressed={isSelected}
                className={`relative flex flex-col items-center justify-center rounded-xl border p-3 transition ${
                  isSelected
                    ? "border-brand-500 ring-2 ring-brand-200"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <img
                  src={EXPERTISE_ICONS[exp]}
                  alt={exp}
                  className="h-10 w-10 object-contain mb-1"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/icons/bim.svg";
                  }}
                />
                <span className="text-xs font-medium text-gray-800 text-center">
                  {exp}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom expertise input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={customExpertise}
            onChange={(e) => setCustomExpertise(e.target.value)}
            onKeyDown={handleCustomExpertiseKeyDown}
            placeholder="Add custom expertise (e.g., Marine, Infrastructure)"
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-brand-200"
          />
          <button
            type="button"
            onClick={addCustomExpertise}
            disabled={!customExpertise.trim()}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Add
          </button>
        </div>

        {errors.expertise && (
          <p
            id="expertise-error"
            className="mt-2 text-xs text-red-600"
          >
            {errors.expertise}
          </p>
        )}
      </div>

      {/* Project Description */}
      <div className="mb-3">
        <label
          htmlFor="projectDescription"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Project Description
        </label>
        <textarea
          ref={projectDescriptionRef}
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
          rows={2}
          className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition ${
            errors.projectDescription
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:ring-2 focus:ring-brand-200"
          }`}
          aria-invalid={!!errors.projectDescription}
          aria-describedby={
            errors.projectDescription
              ? "description-error"
              : undefined
          }
        />
        {errors.projectDescription && (
          <p
            id="description-error"
            className="mt-1 text-xs text-red-600"
          >
            {errors.projectDescription}
          </p>
        )}
      </div>

      {/* Three-column layout for Name, Email, Company */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Your Name
          </label>
          <input
            ref={nameRef}
            id="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition ${
              errors.name
                ? "border-red-400 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:ring-2 focus:ring-brand-200"
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Email
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition ${
              errors.email
                ? "border-red-400 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:ring-2 focus:ring-brand-200"
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? "email-error" : undefined
            }
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company (optional) */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-800 mb-2"
          >
            Company{" "}
            <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Your Company Ltd"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-brand-200"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-between gap-3">
        <button
          type="submit"
          disabled={sending}
          className="w-full flex justify-center rounded-lg bg-brand-400 px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 disabled:opacity-60"
        >
          {sending ? "Sending..." : "Find My Specialist"}
        </button>
      </div>

      {/* Status (only after submit) */}
      {submitted && (
        <div className="mt-6 space-y-3">
          {submissionStatus === true && (
            <div className="rounded-lg border border-success-200 bg-success-50 p-3 text-sm text-success-800">
              Thanks! We've received your request. Our team will match
              you with a specialist and be in touch shortly.
            </div>
          )}
          {submissionStatus === false && (
            <div className="rounded-lg border border-danger-200 bg-danger-50 p-3 text-sm text-danger-800">
              Sorry, something went wrong while sending your request.
              Please try again.
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default FindSpecialistForm;
