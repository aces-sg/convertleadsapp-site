import React, { useState, useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import CustomModal from "./CustomModal";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import { FcCustomerSupport } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";
import AWS from "aws-sdk";

const SESConfig: AWS.ConfigurationOptions = {
  accessKeyId: "AKIAXREEDWQQXTJKCTE4",
  secretAccessKey: "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",
  region: "ap-southeast-1",
};

AWS.config.update(SESConfig);

const lambda = new AWS.Lambda();

const ContactModal = ({ setShowModal, category, setCategory }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const [submissionStatus, setSubmissionStatus] =
    useState<Boolean | null>(null);

  const modalRef = useOutsideClick(() => {
    handleClose();
  });

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: state.message,
      category: "service-enquiry", // Add default value for the new dropdown field
    },
  });

  const handleClose = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        contactLayer: false,
      },
    });
  };

  const handleSend = async (data: FormData) => {
    let functionName = `sendFormInput-test`;
    let params = {
      FunctionName: functionName,
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(data),
    };

    try {
      let res = await lambda.invoke(params).promise();
      if (res.FunctionError) {
        console.error("Failed to send form input", res);
        setSubmissionStatus("error");
      } else {
        setSubmissionStatus("received");
      }
    } catch (err) {
      console.error("Failed to handle form submission", err);
      setSubmissionStatus("error");
    }
  };

  return (
    <CustomModal>
      <div className="sm:w-full md:w-[400px] lg:w-[400px]">
        <div className="bg-[#fddb00] flex items-center justify-between px-[20px] ">
          <div className="flex items-center">
            <FcCustomerSupport size={28} className="mr-2" />
            <h5 className="font-sans font-semibold text-[20px] text-[#121212]">
              Get in Touch
            </h5>
          </div>
          <MdOutlineClose
            className="cursor-pointer"
            size={28}
            onClick={handleClose}
          />
        </div>
        <form
          className="bg-white p-[20px]"
          onSubmit={handleSubmit(handleSend)}
        >
          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#000] mb-[8px]">
            Category
          </p>
          <div className="mb-[16px]">
            <select
              className="rounded-[8px] p-[10px] border-[1px] border-solid border-[#aaa] w-full h-[44px]"
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option value={category}>Select a Category</option>
              <option value="service-enquiry">Service Enquiry</option>
              <option value="feedback">Feedback</option>
              <option value="issue">Issue</option>
              <option value="question">Question</option>
            </select>
            {errors.category && (
              <p className="text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>
          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#000] mb-[8px]">
            Name
          </p>
          <div className="mb-[16px]">
            <input
              type="text"
              className="rounded-[8px] p-[10px] border-[1px] border-solid border-[#aaa] w-full box-border"
              placeholder="First Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#000] mb-[8px]">
            Email
          </p>
          <div className="mb-[16px]">
            <input
              type="text"
              className="rounded-[8px] p-[10px] border-[1px] border-solid border-[#aaa] w-full box-border"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  notGmail: (value) =>
                    !value.endsWith("@gmail.com") ||
                    "Please use a non-Gmail email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <p className="font-sans font-normal text-[16px] leading-[24px] text-[#000] mb-[8px]">
            How can we help?
          </p>
          <div className="mb-[16px] break-words">
            <textarea
              className="rounded-[8px] p-[10px] border-[1px] border-solid border-[#aaa] w-full h-40 box-border"
              placeholder="Tell us more about your project"
              {...register("message", {
                required: "Message is required",
              })}
            />
            {errors.message && (
              <p className="text-red-600">{errors.message.message}</p>
            )}
          </div>

          {!submissionStatus && (
            <button
              type="submit"
              className="w-full h-[56px] text-center bg-[#fddb00] rounded-full font-sans font-semibold text-[16px] leading-[24px] text-[#121212]"
            >
              Ask Now
            </button>
          )}
          {submissionStatus === "received" && (
            <p className="mt-4 text-green-600 text-center w-full">
              Received
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="mt-4 text-red-600 text-center w-full">
              Submission failed
            </p>
          )}
        </form>
      </div>
    </CustomModal>
  );
};

export default ContactModal;
