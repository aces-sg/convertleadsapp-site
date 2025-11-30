import React, { useState, useContext } from "react";
import Button from "components/UI/Button";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import urlpaths from "./urlpaths.json";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider";
import { confirmPassword } from "components/Auth/auth";
import AuthLayout from "components/AuthLayout";

export default function ResetPassword() {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const useremail = state?.user.email;
  const [hidePassword, setHidePassword] = useState(true);
  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
  } = useForm();

  const handlePasswordIcon = () => {
    setHidePassword(!hidePassword);
  };

  async function onSubmit() {
    let { email, newPassword, confirmationCode } = getValues();
    try {
      await confirmPassword(email, confirmationCode, newPassword);
    } catch (err) {
      dispatch({
        type: "SET_MESSAGE",
        payload: {
          centerLayerType: "message",
          error: true,
          message: err.message,
        },
      });
      return;
    }
    navigate(urlpaths.login);
  }

  return (
    <AuthLayout>
      <>
        <p>Your one-time password has been sent to your inbox</p>

        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full">
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
                          "Must be valid email. example@yourdomain.com",
                      },
                    })}
                    name="email"
                    type="email"
                    defaultValue={useremail}
                    placeholder="Enter your email"
                  />
                  <svg
                    className="icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
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
                <label htmlFor="email-sign-up-simple">Code</label>
                <div className="input_wrapper">
                  <input
                    id="email-sign-up-simple"
                    aria-invalid={
                      errors.confirmationCode ? "true" : "false"
                    }
                    className={errors.confirmationCode ? "error" : ""}
                    {...register("confirmationCode", {
                      required: "This field is required.",
                    })}
                    name="confirmationCode"
                    type="text"
                    placeholder="Enter your code"
                    form="novalidatedform"
                  />
                </div>
                {errors.email && (
                  <div className="msg-error">
                    {errors.confirmationCode.message}
                  </div>
                )}
              </div>

              <div className="field_row">
                <label htmlFor="email-sign-up-simple">
                  New Password
                </label>
                <div className="input_wrapper">
                  <input
                    aria-invalid={
                      errors.newPassword ? "true" : "false"
                    }
                    className={errors.newPassword ? "error" : ""}
                    {...register("newPassword", {
                      required: "This field is required.",
                      // pattern: {
                      //   value: /\S+@\S+\.\S+/,
                      //   message: "Must be valid email. example@yourdomain.com"
                      // }
                    })}
                    name="newPassword"
                    type={hidePassword ? "password" : "text"}
                    form="novalidatedform"
                    placeholder="Enter your password"
                  />
                  {hidePassword ? (
                    <svg
                      className="icon password"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      onClick={handlePasswordIcon}
                    >
                      <path d="M7.922 5.672h.094a1.92 1.92 0 0 1 1.406.594 1.92 1.92 0 0 1 .594 1.406v.125L7.922 5.672zm-2.875.531c-.25.5-.375.99-.375 1.469 0 .917.323 1.708.969 2.375.667.646 1.458.969 2.375.969.479 0 .969-.125 1.469-.375L8.453 9.61c-.167.042-.313.062-.438.062a1.92 1.92 0 0 1-1.406-.594 1.92 1.92 0 0 1-.594-1.406c0-.125.021-.271.062-.438L5.047 6.203zM1.36 2.516l.844-.844 11.812 11.812-.844.844-1-.969-1.25-1.25a7.45 7.45 0 0 1-2.906.562c-1.646 0-3.135-.458-4.469-1.375S1.255 9.172.672 7.672c.229-.542.583-1.135 1.063-1.781.5-.667.979-1.177 1.437-1.531L2.11 3.297l-.75-.781zm6.656 1.812c-.417 0-.823.083-1.219.25L5.36 3.141c.812-.313 1.698-.469 2.656-.469 1.646 0 3.125.458 4.438 1.375 1.333.917 2.292 2.125 2.875 3.625-.5 1.229-1.26 2.281-2.281 3.156L11.11 8.891c.167-.396.25-.802.25-1.219a3.14 3.14 0 0 0-1-2.344 3.14 3.14 0 0 0-2.344-1z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="icon password"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      onClick={handlePasswordIcon}
                    >
                      <path d="M7.993 2.7c3.333 0 6.18 2.073 7.333 5-1.153 2.927-4 5-7.333 5s-6.18-2.073-7.333-5c1.153-2.927 4-5 7.333-5zm0 1.667C6.153 4.367 4.66 5.86 4.66 7.7s1.493 3.333 3.333 3.333S11.326 9.54 11.326 7.7 9.833 4.367 7.993 4.367zm0 1.333a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
                    </svg>
                  )}
                </div>
                {errors.newPassword && (
                  <div className="msg-error">
                    {errors.newPassword.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Button
            className="primary_button"
            label="Submit"
            size="large"
            primary
            type="submit"
          />
        </form>
        <div className="mt-8">
          <button
            className="switch_page"
            onClick={() => navigate("/user/login")}
          >
            Sign in to your account
          </button>
        </div>
      </>
    </AuthLayout>
  );
}
