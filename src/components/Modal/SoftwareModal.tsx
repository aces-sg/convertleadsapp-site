import React, { useState, useContext } from "react";
import { generateClient } from "aws-amplify/api";
import * as mutations from "graphql/mutations";
import { triggerNotification } from "graphql/mutations";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import CustomModal from "./CustomModal";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { set, useForm } from "react-hook-form";
import { FcCustomerSupport } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";
import Modal from "../UI/Modal";
import { getReferrer } from "hooks/utils";
import { FaCheckCircle } from "react-icons/fa";
interface SoftwareModalInput {
  formTitle: string;
  category?: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  sku?: string;
}

const client = generateClient();

const SoftwareModal = ({
  formTitle,
  setShowModal,
  category,
  sku,
}: SoftwareModalInput) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const referer = getReferrer();

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
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: sku,
      referrer: referer,
      category: category, // Add default value for the new dropdown field
    },
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSend = async (data: FormData) => {
    try {
      let res = await client.graphql({
        query: triggerNotification,
        variables: {
          input: {
            name: getValues("name"),
            email: getValues("email"),
            message: getValues("message"),
            referrer: referer,
            category: category,
          },
        },
      });
      console.log("form submission success: ", res);
      setSubmissionStatus(true);
    } catch (err) {
      console.error("Failed to handle form submission", err);
      setSubmissionStatus(false);
    }
  };

  return (
    <Modal isOpen={true} onClose={handleClose} size="small">
      <div className="w-full">
        <div className="bg-[#fddb00] flex items-center justify-between px-[20px] ">
          <div className="flex items-center">
            <FcCustomerSupport size={28} className="mr-2" />
            <h5 className="font-sans font-semibold text-[20px] text-[#121212]">
              {formTitle}
            </h5>
          </div>
          <MdOutlineClose
            className="cursor-pointer"
            size={28}
            onClick={handleClose}
          />
        </div>
        {!submissionStatus && (
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
                  defaultValue: category,
                })}
              >
                <option value="software-enquiry">Software</option>
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
                defaultValue={"Buy " + sku}
                {...register("message", {
                  required: "Message is required",
                })}
              />
              {errors.message && (
                <p className="text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-[56px] text-center bg-[#fddb00] rounded-full font-sans font-semibold text-[16px] leading-[24px] text-[#121212]"
            >
              Submit
            </button>
          </form>
        )}
        {submissionStatus === true && (
          <div className="bg-white p-[20px]">
            <div className="flex items-center justify-center">
              <FaCheckCircle className="text-[#00b140] text-6xl max-w-8" />
            </div>
            <p className="mt-0 pt-0 text-center w-full">
              We have received your submission and will reply shortly.
            </p>
          </div>
        )}
        {submissionStatus === false && (
          <p className="p-8 text-red-600 text-center w-full">
            There were some issues with your submission. Please
            contact{" "}
            <a href="mailto:enquiry@bim.com.sg">enquiry@bim.com.sg</a>{" "}
            or try again later.
          </p>
        )}
      </div>
    </Modal>
  );
};

export default SoftwareModal;
