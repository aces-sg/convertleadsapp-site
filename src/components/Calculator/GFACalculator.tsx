import React, { useMemo, useRef, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { triggerNotification } from "graphql/mutations";

const client = generateClient();

// ---- Pricing constants ----
const MIN_CHARGE = 2000; // SGD
const MIN_INCLUDED_SQM = 10_000; // sqm included in minimum
const RATE_PER_SQM = 0.2; // SGD per sqm above MIN_INCLUDED_SQM

// --- Use-case options (top 5) ---
type UseCase =
  | "Progress Tracking"
  | "Terrain Modelling (DTM/DSM)"
  | "Stockpile / Volumetrics"
  | "As-Built & Orthomosaic Documentation"
  | "Facade / Defect Inspection";

const USE_CASES: UseCase[] = [
  "Progress Tracking",
  "Terrain Modelling (DTM/DSM)",
  "Stockpile / Volumetrics",
  "As-Built & Orthomosaic Documentation",
  "Facade / Defect Inspection",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const sgPostalRegex = /^\d{6}$/; // Singapore postal code
const latLngRegex =
  /^\s*-?\d{1,3}(?:\.\d+)?\s*,\s*-?\d{1,3}(?:\.\d+)?\s*$/; // "lat, lon"

const CostCalculatorForm: React.FC = () => {
  // Form state
  const [siteInput, setSiteInput] = useState<string>(""); // postal code OR "lat, lon"
  const [gfa, setGfa] = useState<number>(5000); // sqm
  const [email, setEmail] = useState<string>("");
  const [useCases, setUseCases] = useState<UseCase[]>([]);

  // UX state
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    null | boolean
  >(null);
  const [sending, setSending] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [errors, setErrors] = useState<{
    siteInput?: string;
    gfa?: string;
    email?: string;
    useCases?: string;
  }>({});

  // Refs to focus invalid fields
  const siteRef = useRef<HTMLInputElement | null>(null);
  const gfaRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const useCaseRef = useRef<HTMLDivElement | null>(null);

  // Estimate with minimum charge logic (no breakdown shown)
  const estimate = useMemo(() => {
    if (!gfa || gfa < 1) return null;

    let total = MIN_CHARGE;
    if (gfa > MIN_INCLUDED_SQM) {
      const overageSqm = gfa - MIN_INCLUDED_SQM;
      total += overageSqm * RATE_PER_SQM;
    }

    return new Intl.NumberFormat("en-SG", {
      style: "currency",
      currency: "SGD",
    }).format(total);
  }, [gfa]);

  const validate = () => {
    const next: typeof errors = {};

    if (!siteInput.trim()) {
      next.siteInput = "Please enter a postal code or coordinates.";
    } else if (
      !sgPostalRegex.test(siteInput.trim()) &&
      !latLngRegex.test(siteInput.trim())
    ) {
      next.siteInput =
        "Enter a 6-digit postal code (e.g., 238801) or coordinates like '1.3521, 103.8198'.";
    }

    if (!gfa || gfa < 1) next.gfa = "Please set a valid GFA.";
    if (!email.trim())
      next.email = "Please enter your company email.";
    else if (!emailRegex.test(email))
      next.email = "Please enter a valid email address.";

    if (useCases.length === 0)
      next.useCases = "Select at least one use-case.";

    setErrors(next);
    return next;
  };

  const focusFirstInvalid = (err: typeof errors) => {
    if (err.siteInput && siteRef.current) {
      siteRef.current.focus();
      siteRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    if (err.gfa && gfaRef.current) {
      gfaRef.current.focus();
      gfaRef.current.scrollIntoView({
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
    if (err.useCases && useCaseRef.current) {
      useCaseRef.current.focus();
      useCaseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
  };

  const toggleUseCase = (uc: UseCase) => {
    setUseCases((prev) =>
      prev.includes(uc) ? prev.filter((v) => v !== uc) : [...prev, uc]
    );
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
        `Drone Survey Enquiry`,
        `Site (Postal Code / Coordinates): ${siteInput || "-"}`,
        `Total GFA (sqm): ${gfa || "-"}`,
        `Use-cases: ${useCases.length ? useCases.join(", ") : "-"}`,
        `Estimated Cost: ${estimate ?? "-"}`,
        `Pricing Model: Min ${MIN_CHARGE} covers up to ${MIN_INCLUDED_SQM} sqm, then ${RATE_PER_SQM}/sqm above.`,
        `Source URL: ${currentUrl}`,
      ].join("\n");

      const variables = {
        input: {
          name: "Drone Survey Form",
          email,
          phone: "",
          message,
          referrer: referer,
          category: "drone-survey",
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

    setSubmitted(true);
    setSending(true);
    await handleSend();
    setSending(false);
  };

  const firstErrorMsg =
    (attemptedSubmit &&
      (errors.siteInput ||
        errors.gfa ||
        errors.email ||
        errors.useCases)) ||
    null;

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8"
      noValidate
    >
      <h2 className="text-2xl font-semibold tracking-tight mb-4">
        Drone Survey Cost Calculator
      </h2>

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

      {/* Site: Postal Code / Coordinates */}
      <div className="mb-5">
        <label
          htmlFor="siteInput"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Postal Code / Coordinates of Site
        </label>
        <input
          ref={siteRef}
          id="siteInput"
          type="text"
          value={siteInput}
          onChange={(e) => setSiteInput(e.target.value)}
          placeholder="e.g., 238801 or 1.3521, 103.8198"
          className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition ${
            errors.siteInput
              ? "border-red-400 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:ring-2 focus:ring-brand-200"
          }`}
          aria-invalid={!!errors.siteInput}
          aria-describedby={
            errors.siteInput ? "site-error" : undefined
          }
        />
        <p className="mt-1 text-xs text-gray-500">
          Enter a 6-digit Singapore postal code or latitude,
          longitude.
        </p>
        {errors.siteInput && (
          <p id="site-error" className="mt-1 text-xs text-red-600">
            {errors.siteInput}
          </p>
        )}
      </div>

      {/* GFA Slider */}
      <div className="mb-5">
        <label
          htmlFor="gfa"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Total GFA (sqm)
        </label>
        <div className="flex items-center gap-3">
          <input
            ref={gfaRef}
            id="gfa"
            type="range"
            min={100}
            max={50000}
            step={50}
            value={gfa}
            onChange={(e) => setGfa(Number(e.target.value))}
            className="w-full cursor-pointer accent-brand-600"
            aria-valuemin={100}
            aria-valuemax={50000}
            aria-valuenow={gfa}
            aria-invalid={!!errors.gfa}
          />
          <div className="w-28 text-right">
            <span className="inline-block text-sm font-semibold tabular-nums">
              {gfa.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">&nbsp;sqm</span>
          </div>
        </div>
        <div className="flex justify-between mt-1 text-[11px] text-gray-500">
          <span>100</span>
          <span>50k</span>
        </div>
        {errors.gfa && (
          <p className="mt-1 text-xs text-red-600">{errors.gfa}</p>
        )}
      </div>

      {/* Company Email */}
      <div className="mb-5">
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

      {/* Use-cases (checkboxes) */}
      <div className="mb-6">
        <span className="block text-sm font-medium text-gray-800 mb-2">
          Use-case(s)
        </span>
        <div
          ref={useCaseRef}
          tabIndex={-1}
          aria-invalid={!!errors.useCases}
          aria-describedby={
            errors.useCases ? "usecase-error" : undefined
          }
          className="grid grid-cols-1 sm:grid-cols-2 gap-2"
        >
          {USE_CASES.map((uc) => {
            const checked = useCases.includes(uc);
            return (
              <label
                key={uc}
                className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition ${
                  checked
                    ? "border-brand-500 ring-2 ring-brand-200"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleUseCase(uc)}
                  className="h-4 w-4 accent-brand-600"
                />
                <span className="text-sm text-gray-800">{uc}</span>
              </label>
            );
          })}
        </div>
        {errors.useCases && (
          <p id="usecase-error" className="mt-2 text-xs text-red-600">
            {errors.useCases}
          </p>
        )}
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

      {/* Estimate + status (no breakdown) */}
      {submitted && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Estimated Cost
            </span>
            <strong
              className="text-lg font-semibold"
              aria-live="polite"
            >
              {estimate ?? "—"}
            </strong>
          </div>

          {submissionStatus === true && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
              Thanks! We’ve received your request. We’ll be in touch
              shortly.
            </div>
          )}
          {submissionStatus === false && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
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
