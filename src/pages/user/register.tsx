import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import { navigate } from "gatsby";
import urlpaths from "./urlpaths.json";
import { signUp } from "aws-amplify/auth";
import AuthLayout from "components/AuthLayout";
import Button from "components/UI/Button";

const options = ["Singapore", "USA", "UK", "Australia", "Others"];

export default function Signup() {
  const dispatch = useContext(GlobalDispatchContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
    getValues,
    watch,
  } = useForm();

  const handlePasswordIcon = () => {
    setHidePassword(!hidePassword);
  };

  async function onSubmit() {
    let { email, password, confirmPassword, company } = getValues();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      dispatch({
        type: "SET_USER",
        payload: {
          id: null,
          name: "",
          email: email,
        },
      });

      const { isSignUpComplete, userId, nextStep } = await signUp({
        username: email,
        password: password,
        options: {
          userAttributes: {
            "custom:company": company,
          },
        },
      });
      console.log(userId, nextStep);
      if (nextStep) {
        navigate(urlpaths.confirm);
      }
    } catch (err) {
      console.log("error signing up user", err);
      setError(err);
      return;
    }
    // navigate(urlpaths.confirm);
  }

  return (
    <AuthLayout>
      <>
        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <div className="flex flex-col items-center w-full">
            <div className="w-full flex flex-col items-center gap-2">
              <div className="w-full">
                {/* Country Selector */}
                <div className="field_row">
                  <label htmlFor="email-sign-up-simple">
                    Country/Area of Residence
                  </label>
                  <div className="input_wrapper">
                    <select
                      className="select_container"
                      {...register("country")}
                    >
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Company Field */}
                <div className="field_row">
                  <label htmlFor="email-sign-up-simple">
                    Company
                  </label>
                  <div className="input_wrapper">
                    <input
                      id="company"
                      aria-invalid={errors.company ? "true" : "false"}
                      className={errors.company ? "error" : ""}
                      {...register("company", {
                        required: "This field is required.",
                      })}
                      name="company"
                      type="company"
                      placeholder="Company Name"
                    />
                  </div>
                  {errors.company && (
                    <div className="msg-error">
                      {errors.company.message}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="field_row">
                  <label htmlFor="email-sign-up-simple">Email</label>
                  <div className="input_wrapper">
                    <input
                      id="email-sign-up-simple"
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

                {/* Password Field */}
                <div className="field_row">
                  <label htmlFor="password">Password</label>
                  <div className="input_wrapper">
                    <input
                      id="password"
                      aria-invalid={
                        errors.password ? "true" : "false"
                      }
                      className={errors.password ? "error" : ""}
                      {...register("password", {
                        required: "This field is required.",
                      })}
                      name="password"
                      type={hidePassword ? "password" : "text"}
                      placeholder="Enter your password"
                    />
                  </div>
                  {errors.password && (
                    <div className="msg-error">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="field_row">
                  <label htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="input_wrapper">
                    <input
                      id="confirmPassword"
                      aria-invalid={
                        errors.confirmPassword ? "true" : "false"
                      }
                      className={
                        errors.confirmPassword ? "error" : ""
                      }
                      {...register("confirmPassword", {
                        required: "Please confirm your password.",
                      })}
                      name="confirmPassword"
                      type={hidePassword ? "password" : "text"}
                      placeholder="Re-enter your password"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <div className="msg-error">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                {/* Display error message */}
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
              label="Create an account"
              size="large"
              primary
              type="submit"
            />
          </div>
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
