import React, { useContext, useState, useEffect } from "react";
import Button from "components/UI/Button";
import { useForm } from "react-hook-form";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import AuthLayout from "components/AuthLayout";
import { generateClient } from "aws-amplify/api";
import { createExternalUser } from "../../graphql/mutations";
import { externalUserByEmail } from "../../graphql/queries";
import { navigate } from "gatsby";

const client = generateClient();

export default function Signup() {
  const dispatch = useContext(GlobalDispatchContext);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    reset,
  } = useForm();

  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [submitted]);

  async function onSubmit() {
    const {
      email,
      company,
      role,
      telephone,
      registration_date,
      registration_branch,
      registration_number,
    } = getValues();

    const lowerCaseEmail = email.toLowerCase();

    try {
      const checkResult = await client.graphql({
        query: externalUserByEmail,
        variables: { email: lowerCaseEmail },
      });

      const existingUsers =
        checkResult?.data?.externalUserByEmail?.items || [];

      if (existingUsers.length > 0) {
        setError("A user with this email already exists.");
        return;
      }

      const input = {
        name: "",
        email: lowerCaseEmail,
        role,
        company,
        discipline: "",
        registration_date,
        registration_branch,
        registration_number,
        linkedin: "https://www.linkedin.com/in/yourprofile",
        telephone,
        skills: registration_branch,
        status: false,
      };

      const result = await client.graphql({
        query: createExternalUser,
        variables: { input },
      });

      const createdUser = result.data.createExternalUser;

      dispatch({
        type: "SET_USER",
        payload: {
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
        },
      });

      reset();
      setSubmitted(true);
      setError("");
    } catch (err) {
      console.error("Error creating user:", err);
      setError(err.errors?.[0]?.message || "Something went wrong.");
    }
  }

  return (
    <AuthLayout>
      <>
        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <div className="flex justify-center w-full">
            <div className="w-full flex flex-col items-center gap-2">
              <div className="w-full">
                {/* Company */}
                <div className="field_row">
                  <label htmlFor="company">Company</label>
                  <div className="input_wrapper">
                    <input
                      id="company"
                      aria-invalid={errors.company ? "true" : "false"}
                      className={errors.company ? "error" : ""}
                      {...register("company", {
                        required: "This field is required.",
                      })}
                      name="company"
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                  {errors.company && (
                    <div className="msg-error">
                      {errors.company.message}
                    </div>
                  )}
                </div>

                {/* Role */}
                <div className="field_row">
                  <label htmlFor="role">Role</label>
                  <div className="input_wrapper">
                    <input
                      id="role"
                      {...register("role", {
                        required: "This field is required.",
                      })}
                      name="role"
                      type="text"
                      placeholder="e.g. Senior Engineer"
                    />
                  </div>
                  {errors.role && (
                    <div className="msg-error">
                      {errors.role.message}
                    </div>
                  )}
                </div>

                {/* Telephone */}
                <div className="field_row">
                  <label htmlFor="telephone">Telephone</label>
                  <div className="input_wrapper">
                    <input
                      id="telephone"
                      {...register("telephone", {
                        required: "This field is required.",
                      })}
                      name="telephone"
                      type="text"
                      placeholder="e.g. +65 9123 4567"
                    />
                  </div>
                  {errors.telephone && (
                    <div className="msg-error">
                      {errors.telephone.message}
                    </div>
                  )}
                </div>

                {/* Registration Date */}
                <div className="field_row">
                  <label htmlFor="registration_date">
                    Registration Date
                  </label>
                  <div className="input_wrapper">
                    <input
                      id="registration_date"
                      {...register("registration_date", {
                        required: "This field is required.",
                      })}
                      name="registration_date"
                      type="date"
                    />
                  </div>
                  {errors.registration_date && (
                    <div className="msg-error">
                      {errors.registration_date.message}
                    </div>
                  )}
                </div>

                {/* Registration Branch */}
                <div className="field_row">
                  <label htmlFor="registration_branch">
                    Registration Branch
                  </label>
                  <div className="input_wrapper">
                    <input
                      id="registration_branch"
                      {...register("registration_branch", {
                        required: "This field is required.",
                      })}
                      name="registration_branch"
                      type="text"
                      placeholder="e.g. Civil, Mechanical"
                    />
                  </div>
                  {errors.registration_branch && (
                    <div className="msg-error">
                      {errors.registration_branch.message}
                    </div>
                  )}
                </div>

                {/* Registration Number */}
                <div className="field_row">
                  <label htmlFor="registration_number">
                    Registration Number
                  </label>
                  <div className="input_wrapper">
                    <input
                      id="registration_number"
                      {...register("registration_number", {
                        required: "This field is required.",
                      })}
                      name="registration_number"
                      type="text"
                      placeholder="e.g. 4669"
                    />
                  </div>
                  {errors.registration_number && (
                    <div className="msg-error">
                      {errors.registration_number.message}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="field_row">
                  <label htmlFor="email">Email</label>
                  <div className="input_wrapper">
                    <input
                      id="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      className={errors.email ? "error" : ""}
                      {...register("email", {
                        required: "This field is required.",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message:
                            "Must be a valid email. example@yourdomain.com",
                        },
                      })}
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      onInput={(e) =>
                        (e.target.value =
                          e.target.value.toLowerCase())
                      }
                    />
                  </div>
                  {errors.email && (
                    <div className="msg-error">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="msg-error mb-4">
                    <span className="text-danger-600">
                      {error.message || error}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Button
              className="primary_button"
              label="Register Profile"
              size="large"
              primary
              type="submit"
            />
          </div>

          {submitted && (
            <div className="mt-4">
              <span className="text-green-600">
                ✔️ User was created. Approval is pending.
              </span>
            </div>
          )}
        </form>

        <div className="mt-8">
          <button
            className="switch_page"
            onClick={() => navigate("/user/login")}
          >
            Already registered? Sign in instead.
          </button>
        </div>
      </>
    </AuthLayout>
  );
}
