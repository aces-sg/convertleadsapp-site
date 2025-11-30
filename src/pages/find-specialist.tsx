import React, { useState, useRef, useEffect } from "react";
import Footer from "components/Footer";
import { useForm } from "react-hook-form";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { generateClient } from "aws-amplify/api";
import * as mutations from "graphql/mutations";
import { navigate } from "gatsby";
import Breadcrumbs from "components/Breadcrumbs";

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

export const SpecialistInfo = ({ pathname }: { pathname: string }) => {
  return (
    <div className="flex-column w-full px-6 py-8 sm:px-12 md:px-16 md:py-12">
      <div className="mb-4">
        <Breadcrumbs
          items={[
            { label: "Find a BIM Specialist", path: pathname },
          ]}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
        Find a BIM Specialist
      </h2>
      <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
        Tell us about your project and we'll match you with the right
        BIM specialist from our network of certified professionals.
      </p>

      <div className="border border-gray-200 rounded-lg p-4 md:p-6 mt-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          Why Choose Our Specialists?
        </h3>
        <ul className="mt-2 md:mt-4 space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-[#FBDA05] mt-1">✓</span>
            <span>DDM-certified with 3+ years experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#FBDA05] mt-1">✓</span>
            <span>
              Expertise in Architecture, Structural, MEP & Piping
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#FBDA05] mt-1">✓</span>
            <span>ISO 19650 and IFC+SG compliant deliverables</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#FBDA05] mt-1">✓</span>
            <span>On-site support available</span>
          </li>
        </ul>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 md:p-6 mt-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          Contact Us
        </h3>
        <dl className="mt-2 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                "https://wa.me/6580834020?text=Hi%2C%20I%27m%20interested%20in%20finding%20a%20BIM%20specialist."
              )
            }
          >
            <dt className="flex-none">
              <span className="sr-only">Telephone</span>
              <FaWhatsapp
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              <a className="text-black hover:text-gray-900">
                +65 80834020
              </a>
            </dd>
          </div>
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                "mailto:enquiry@bim.com.sg?Subject=Find%20BIM%20Specialist"
              )
            }
          >
            <dt className="flex-none">
              <span className="sr-only">Email</span>
              <EnvelopeIcon
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              <a className="text-black hover:text-gray-900">
                enquiry@bim.com.sg
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default function FindSpecialist({ location }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedProfile, setSelectedProfile] = useState<
    Profile | ""
  >("");
  const [selectedExpertise, setSelectedExpertise] = useState<
    string[]
  >([]);
  const [customExpertise, setCustomExpertise] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const customExpertiseRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        customExpertiseRef.current &&
        !customExpertiseRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addExpertise = (exp: string) => {
    if (exp && !selectedExpertise.includes(exp)) {
      setSelectedExpertise([...selectedExpertise, exp]);
    }
  };

  const removeExpertise = (exp: string) => {
    setSelectedExpertise(selectedExpertise.filter((e) => e !== exp));
  };

  const addCustomExpertise = (value?: string) => {
    const trimmed = (value || customExpertise).trim();
    if (trimmed && !selectedExpertise.includes(trimmed)) {
      setSelectedExpertise([...selectedExpertise, trimmed]);
      setCustomExpertise("");
      setShowSuggestions(false);
    }
  };

  const handleCustomExpertiseKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCustomExpertise();
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const handleCustomExpertiseChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setCustomExpertise(value);
    setShowSuggestions(true);
  };

  // Filter suggestions based on input
  const filteredSuggestions = EXPERTISE_OPTIONS.filter((exp) => {
    if (selectedExpertise.includes(exp)) return false;
    if (customExpertise.trim().length === 0) return true;
    return exp.toLowerCase().includes(customExpertise.toLowerCase().trim());
  });

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", {
      ...data,
      profile: selectedProfile,
      expertise: selectedExpertise,
    });

    if (!selectedProfile) {
      alert("Please select your profile");
      return;
    }

    if (selectedExpertise.length === 0) {
      alert("Please select at least one expertise area");
      return;
    }

    if (!data.phoneNumber) {
      alert("Please enter your phone number");
      return;
    }

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
        `Name: ${data.name}`,
        `Company: ${data.company || "-"}`,
        `Profile: ${selectedProfile || "-"}`,
        `Expertise Needed: ${selectedExpertise.join(", ")}`,
        `Project Description: ${data.message || "-"}`,
        `Source URL: ${currentUrl}`,
      ].join("\n");

      let res = await client.graphql({
        query: mutations.triggerNotification,
        variables: {
          input: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phoneNumber || "",
            message,
            referrer: referer,
            category: "find-specialist",
          }),
        },
      });
      console.log("Form response:", res);
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      return;
    }

    reset();
    setSelectedProfile("");
    setSelectedExpertise([]);
    setCustomExpertise("");
  };

  return (
    <>
      <Layout location={location}>
        <div className="flex justify-center items-stretch">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-gray-50 flex items-center">
              <SpecialistInfo pathname={location.pathname} />
            </div>
            <div
              id="specialist-form"
              className="lg:w-1/2 bg-white flex items-center justify-center"
            >
              <form
                className="w-full px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-8 lg:px-8 lg:py-10"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mx-auto max-w-xl">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                    {/* Profile Selection */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm/6 font-semibold text-gray-900 mb-2">
                        Your Profile
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {PROFILES.map((p) => {
                          const isActive = selectedProfile === p;
                          return (
                            <button
                              key={p}
                              type="button"
                              onClick={() => setSelectedProfile(p)}
                              className={`flex flex-col items-center justify-center rounded-xl border p-3 transition ${
                                isActive
                                  ? "border-main-primary ring-2 ring-main-primary/20 bg-main-primary/10"
                                  : "border-gray-300 bg-white hover:border-gray-400"
                              }`}
                            >
                              <img
                                src={PROFILE_ICONS[p]}
                                alt={p}
                                className="h-12 w-12 object-contain mb-2"
                                onError={(e) => {
                                  (
                                    e.currentTarget as HTMLImageElement
                                  ).src = "/icons/owner.svg";
                                }}
                              />
                              <span className="text-xs font-medium text-gray-800 text-center">
                                {p}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Expertise Needed */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm/6 font-semibold text-gray-900 mb-2">
                        Expertise Needed
                      </label>

                      {/* Selected Expertise Tags */}
                      {selectedExpertise.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedExpertise.map((exp) => (
                            <span
                              key={exp}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-main-primary/20 text-black text-sm rounded-full"
                            >
                              {exp}
                              <button
                                type="button"
                                onClick={() => removeExpertise(exp)}
                                className="ml-1 hover:text-red-600"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Custom Expertise Input */}
                      <div className="mt-3 relative" ref={customExpertiseRef}>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={customExpertise}
                            onChange={handleCustomExpertiseChange}
                            onKeyDown={handleCustomExpertiseKeyDown}
                            onFocus={() => setShowSuggestions(true)}
                            placeholder="Type to search or add custom expertise"
                            className="flex-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                          />
                          <button
                            type="button"
                            onClick={() => addCustomExpertise()}
                            disabled={!customExpertise.trim()}
                            className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            Add
                          </button>
                        </div>

                        {/* Suggestions Dropdown */}
                        {showSuggestions && filteredSuggestions.length > 0 && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                            {filteredSuggestions.map((exp) => (
                              <button
                                key={exp}
                                type="button"
                                onClick={() => addCustomExpertise(exp)}
                                className="w-full text-left px-3.5 py-2 text-sm text-gray-900 hover:bg-main-primary/20 transition-colors"
                              >
                                {exp}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-xs text-gray-500">
                        Click suggestions or type your own expertise
                      </p>
                    </div>

                    {/* Name and Company - Two Column */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          type="text"
                          autoComplete="name"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name.message as string}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Company (Optional)
                      </label>
                      <div className="mt-2">
                        <input
                          id="company"
                          {...register("company")}
                          type="text"
                          autoComplete="organization"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                        />
                      </div>
                    </div>

                    {/* Phone Number and Email - Two Column */}
                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Phone number
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone-number"
                          {...register("phoneNumber", {
                            required: "Phone number is required",
                          })}
                          type="text"
                          placeholder="+65 80834020"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.phoneNumber.message as string}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Invalid email address",
                            },
                          })}
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message as string}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm/6 font-semibold text-gray-900"
                      >
                        Project Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="message"
                          name="message"
                          {...register("message", {
                            required:
                              "Project description is required",
                          })}
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                          rows={4}
                          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                          defaultValue={""}
                          maxLength={500}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message.message as string}
                          </p>
                        )}
                        <p className="mt-1 text-right text-xs text-gray-500">
                          Max. 500 characters
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="rounded-md bg-main-primary px-6 py-2.5 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-primary hover:bg-main-primary/80 transition-colors duration-200 w-full"
                    >
                      Find My Specialist
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>

      <Footer />
    </>
  );
}

export const Head = ({ location }) => (
  <>
    <SEO
      title="Find a BIM Specialist - Connect with Certified BIM Professionals"
      description="Find experienced BIM specialists for your project. Our network includes DDM-certified professionals with expertise in Architecture, Structural, MEP, and Piping."
      pathname={location.pathname}
    />
  </>
);
