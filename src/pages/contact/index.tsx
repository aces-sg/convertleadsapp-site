import React, { useState } from "react";
import Footer from "components/Footer";
import { useForm } from "react-hook-form";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "components/Seo";
import Layout from "components/Layout";
import { ContactPageJsonLD } from "seo/Contact";
import { generateClient } from "aws-amplify/api";
import * as mutations from "graphql/mutations";
import { navigate } from "gatsby";
import Breadcrumbs from "components/Breadcrumbs";
import { useSiteMetadata } from "hooks/use-site-metadata";

const client = generateClient();

export const BusinessInfo = ({ pathname }: { pathname: string }) => {
  const { contact } = useSiteMetadata();

  // Build WhatsApp URL with pre-filled message
  const waUrl = `https://wa.me/${contact.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20BIM%20%26%20CAD%20services.%20Could%20you%20share%20more%20details%3F`;

  return (
    <div className="flex-column w-full px-6 py-8 sm:px-12 md:px-16 md:py-12">
      <div className="mb-4">
        <Breadcrumbs
          items={[
            { label: "Contact Us", path: pathname },
          ]}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
        Get in Touch
      </h2>
      <p className="mt-2 md:mt-4 text-base md:text-lg text-gray-600">
        Quality 3D and 2D CAD Services for Your Projects. Reach out to
        us today.
      </p>

      <div className="border border-gray-200 rounded-lg p-4 md:p-6 mt-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          {contact.officeLabel}
        </h3>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
          Operating Hours: {contact.hours}
        </p>
        <dl className="mt-2 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
          <div className="flex gap-x-3 md:gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">Address</span>
              <BuildingOffice2Icon
                aria-hidden="true"
                className="h-5 w-5 md:h-6 md:w-6 text-gray-400"
              />
            </dt>
            <dd>
              {contact.address.full}
            </dd>
          </div>
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() => navigate(waUrl)}
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
                {contact.phone}
              </a>
            </dd>
          </div>
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                `mailto:${contact.email}?Subject=BIM%20CAD%20Enquiry`
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
                {contact.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 md:p-6 mt-4">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">
          Technical Support
        </h3>
        <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
          Operating Hours: {contact.hours}
        </p>
        <dl className="mt-2 md:mt-4 space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
          <div
            className="flex gap-x-3 md:gap-x-4 hover:cursor-pointer"
            onClick={() =>
              navigate(
                `mailto:${contact.supportEmail}?Subject=Technical%20Support`
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
              <a className="hover:text-gray-900">
                {contact.supportEmail}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default function Contact({ location }) {
  const [enquiryType, setEnquiryType] = useState("general");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form submitted:", { ...data, enquiryType });

    try {
      // Trigger Form Response Lambda
      let res = await client.graphql({
        query: mutations.triggerNotification,
        variables: {
          input: JSON.stringify({
            ...data,
            enquiryType,
          }),
        },
      });
      console.log("Form response:", res);
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      return;
    }

    reset(); // Optional: reset the form after submission
  };

  return (
    <>
      <Layout location={location}>
        <div className="flex justify-center items-stretch">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-gray-50 flex items-center">
              <BusinessInfo pathname={location.pathname} />
            </div>
            <div
              id="contact-form"
              className="lg:w-1/2 bg-white flex items-center justify-center"
            >
                <form
                  className="w-full px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-8 lg:px-8 lg:py-10"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mx-auto max-w-xl">
                    <div className="flex mb-6 border-b border-gray-200">
                      <button
                        type="button"
                        className={`py-4 px-4 font-medium text-sm relative flex-1 text-center rounded-tl-lg rounded-bl-lg font-semibold ${
                          enquiryType === "general"
                            ? "bg-black text-[#FBDA05]"
                            : "bg-white text-black shadow-[0_1px_0_1px_rgba(0,0,0,0.2)]"
                        }`}
                        onClick={() => setEnquiryType("general")}
                      >
                        General Enquiry
                        {enquiryType === "general" && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FBDA05]"></span>
                        )}
                      </button>
                      {/* <button
                        type="button"
                        className={`py-4 px-4 font-medium text-sm relative flex-1 text-center rounded-tr-lg rounded-br-lg font-semibold ${
                          enquiryType === "quote"
                            ? "bg-black text-[#FBDA05]"
                            : "bg-white text-black shadow-[1px_1px_0_0_rgba(0,0,0,0.2)]"
                        }`}
                        onClick={() => setEnquiryType("quote")}
                      >
                        Get in Touch
                        {enquiryType === "quote" && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FBDA05]"></span>
                        )}
                      </button> */}
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            {...register("firstName", {
                              required: "First name is required",
                            })}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-xs">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            id="last-name"
                            {...register("lastName", {
                              required: "Last name is required",
                            })}
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-xs">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
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
                            <p className="text-red-500 text-xs">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="phone-number"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Phone number
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:outline-main-primary focus-within:-outline-offset-2 transition-all duration-200">
                            <input
                              id="phone-number"
                              name="phone-number"
                              {...register("phoneNumber", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^\+?[0-9\s-]+$/,
                                  message:
                                    "Invalid phone number format",
                                },
                              })}
                              type="text"
                              placeholder="+65 80834020"
                              className="block min-w-0 grow rounded-r-md py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                          {errors.phoneNumber && (
                            <p className="text-red-500 text-xs">
                              {errors.phoneNumber.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {enquiryType === "quote" && (
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="services-needed"
                            className="block text-sm/6 font-semibold text-gray-900"
                          >
                            Services you're interested in
                          </label>
                          <div className="mt-2">
                            <select
                              {...register("servicesNeeded")}
                              id="services-needed"
                              multiple
                              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                              size={4}
                            >
                              <option value="bim-modeling">
                                BIM Modeling
                              </option>
                              <option value="cad-drafting">
                                CAD Drafting
                              </option>
                              <option value="3d-visualization">
                                3D Visualization
                              </option>
                              <option value="scan-to-bim">
                                Scan to BIM
                              </option>
                              <option value="construction-documentation">
                                Construction Documentation
                              </option>
                              <option value="shop-drawings">
                                Shop Drawings
                              </option>
                            </select>
                            <p className="mt-1 text-xs text-gray-500">
                              Hold Ctrl/Cmd to select multiple options
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          How can we help you?
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="message"
                            name="message"
                            {...register("message", {
                              required: "Message is required",
                            })}
                            placeholder="Briefly describe your enquiry so we can assist you more effectively."
                            rows={4}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-main-primary"
                            defaultValue={""}
                            maxLength={500}
                          />
                          <p className="mt-1 text-right text-xs text-gray-500">
                            Max. 500 characters
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="rounded-md bg-main-primary px-6 py-2.5 text-center text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-primary hover:bg-main-primary/80 transition-colors duration-200 w-full"
                      >
                        Submit
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
    <SEO pathname={location.pathname} />
    {ContactPageJsonLD()}
  </>
);
