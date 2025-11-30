import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import urlpaths from "./urlpaths.json";
import { confirmSignUp } from "components/Auth/auth";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import AuthLayout from "components/AuthLayout";
import Button from "components/UI/Button";

export default function ConfirmSignUp() {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
  } = useForm({
    defaultValues: {
      email: state?.user.email,
    },
  });

  const verifyAccount = async () => {
    setError("");
    let { email, otp } = getValues();

    try {
      let res = await confirmSignUp(email, otp);
      setSuccess(true);
      dispatch({
        type: "SET_USER",
        payload: {
          email: email,
        },
      });
    } catch (err) {
      console.log("error confirming user", err);
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          error: true,
          message: err.message,
        },
      });
      return;
    }
  };

  if (success) {
    navigate(urlpaths.login);
    dispatch({
      type: "SET_MESSAGE",
      payload: {
        error: false,
        message: "Account verified. Please login",
      },
    });
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(verifyAccount)} id="loginForm">
        <div className="text-center mb-6">
          <h1 className="text-center">Verify</h1>
          <p className="text-center">
            Your one-time password has been sent to your inbox
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-lg">
            <div className="w-full flex flex-col items-center gap-2">
              <div className="w-full">
                <div className="field_row">
                  <label className="flex align-left">Email</label>
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
                            "Must be valid email. example@yourdomain.com",
                        },
                      })}
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      form="novalidatedform"
                    />
                    <svg
                      className="icon"
                      width="16"
                      height="16"
                      viewdiv="0 0 16 16"
                    >
                      <path d="M13.344 5.344V4L8 7.344 2.656 4v1.344L8 8.656l5.344-3.312zm0-2.688c.354 0 .656.135.906.406.271.271.406.583.406.938v8c0 .354-.135.667-.406.938-.25.271-.552.406-.906.406H2.656c-.354 0-.667-.135-.937-.406A1.34 1.34 0 0 1 1.344 12V4a1.34 1.34 0 0 1 .375-.937c.271-.271.583-.406.937-.406h10.688z"></path>
                    </svg>
                  </div>
                  {errors.email && (
                    <div className="msg-error">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="field_row">
                  <label
                    className="flex align-left"
                    htmlFor="email-sign-up-simple"
                  >
                    Enter the OTP
                  </label>
                  <div className="input_wrapper">
                    <input
                      aria-invalid={errors.otp ? "true" : "false"}
                      className={errors.otp ? "error" : ""}
                      {...register("otp", {
                        required: "This field is required.",
                      })}
                      name="otp"
                      type="text"
                      placeholder="Enter your otp"
                      form="novalidatedform"
                    />
                  </div>
                  {errors.otp && (
                    <div className="msg-error">
                      {errors.otp.message}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Button
              className="primary_button"
              label="Verify"
              size="large"
              primary
              type="submit"
            />
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
