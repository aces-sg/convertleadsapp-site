import React, { useMemo, useRef, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { triggerNotification } from "graphql/mutations";

const client = generateClient();

type Profile =
  | "Main Contractor"
  | "Subcontractor"
  | "Consultant/Owner";

const PROFILES: Profile[] = [
  "Main Contractor",
  "Subcontractor",
  "Consultant/Owner",
];

const PROFILE_ICONS: Record<Profile, string> = {
  "Main Contractor": "/icons/maincon.svg",
  Subcontractor: "/icons/subcon.svg",
  "Consultant/Owner": "/icons/consultant.svg", // falls back to owner.svg if missing
};

const MONTHLY_RATES: Record<Profile, number> = {
  "Main Contractor": 3 * 4000,
  Subcontractor: 1 * 4000,
  "Consultant/Owner": 2 * 4000,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const CostCalculatorForm: React.FC = () => {
  const [profile, setProfile] = useState<Profile | "">("");
  const [months, setMonths] = useState<number>(12);
  const [email, setEmail] = useState<string>("");

  const [interested, setInterested] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    null | boolean
  >(null);
  const [sending, setSending] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [errors, setErrors] = useState<{
    profile?: string;
    months?: string;
    email?: string;
  }>({});

  // Refs to focus first invalid control
  const profileGroupRef = useRef<HTMLDivElement | null>(null);
  const monthsRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const estimate = useMemo(() => {
    if (!profile || !months) return null;
    const total = MONTHLY_RATES[profile as Profile] * months;
    return new Intl.NumberFormat("en-SG", {
      style: "currency",
      currency: "SGD",
    }).format(total);
  }, [profile, months]);

  const validate = () => {
    const next: typeof errors = {};
    if (!profile) next.profile = "Please select a profile.";
    if (!months || months < 1)
      next.months = "Please choose a project duration.";
    if (!email.trim())
      next.email = "Please enter your company email.";
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
    if (err.months && monthsRef.current) {
      monthsRef.current.focus();
      monthsRef.current.scrollIntoView({
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

  // GraphQL submit (Amplify) – follows your triggerNotification pattern
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
        `Cost Calculator Submission`,
        `Profile: ${profile || "-"}`,
        `Months: ${months || "-"}`,
        `Interested in BIM implementation provider: ${
          interested ? "Yes" : "No"
        }`,
        `Estimated Cost: ${estimate ?? "-"}`,
        `Source URL: ${currentUrl}`,
      ].join("\n");

      const variables = {
        input: {
          name: "Cost Calculator",
          email,
          phone: "",
          message,
          referrer: referer,
          category: "cost-calculator",
        },
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

    setSubmitted(true); // reveal estimate
    setSending(true);
    await handleSend();
    setSending(false);
  };

  const firstErrorMsg =
    (attemptedSubmit &&
      (errors.profile || errors.months || errors.email)) ||
    null;

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
      noValidate
    >
      <h2 className="text-2xl font-semibold tracking-tight mb-1">
        BIM Cost Calculator
      </h2>
      <p className="text-gray-600 mb-6">
        Get a quick estimate by selecting your profile, project
        period, and entering your company email.
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
      <div className="mb-5">
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

      {/* Project Period (Slider) — max 36 */}
      <div className="mb-5">
        <label
          htmlFor="months"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Project Period (Months)
        </label>
        <div className="flex items-center gap-3">
          <input
            ref={monthsRef}
            id="months"
            type="range"
            min={1}
            max={36}
            step={1}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full cursor-pointer accent-brand-600"
            aria-valuemin={1}
            aria-valuemax={36}
            aria-valuenow={months}
            aria-invalid={!!errors.months}
          />
          <div className="w-20 text-right">
            <span className="inline-block text-sm font-semibold tabular-nums">
              {months}
            </span>
            <span className="text-sm text-gray-500">&nbsp;mo</span>
          </div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>1</span>
          <span>36</span>
        </div>
        {errors.months && (
          <p className="mt-1 text-xs text-red-600">{errors.months}</p>
        )}
      </div>

      {/* Company Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Company Email
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
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Checkbox (default checked) */}
      <div className="mb-6">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-brand-600"
            checked={interested}
            onChange={(e) => setInterested(e.target.checked)}
          />
          <span className="text-sm text-gray-800">
            I'm interested to work with a service provider for BIM
            implementation
          </span>
        </label>
      </div>

      {/* Submit */}
      <div className="flex justify-between gap-3">
        <button
          type="submit"
          disabled={sending}
          className="w-full flex justify-center rounded-lg bg-brand-400 px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 disabled:opacity-60"
        >
          {sending ? "Sending..." : "Calculate Now"}
        </button>
      </div>

      {/* Estimate + status (only after submit) */}
      {submitted && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Estimated Project Cost
            </span>
            <strong
              className="text-lg font-semibold"
              aria-live="polite"
            >
              {estimate ?? "—"}
            </strong>
          </div>

          {submissionStatus === true && (
            <div className="rounded-lg border border-success-200 bg-success-50 p-3 text-sm text-success-800">
              Thanks! We’ve received your request. We’ll be in touch
              shortly.
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

export default CostCalculatorForm;
