import React, { useContext, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import landing from "assets/images/landing.jpg";
import AuthHeader from "./Auth/AuthHeader";
import { AuthProvider } from "./Auth/authContext";

import "./authLayout.scss";

const AuthLayout = ({ children }) => {
  const imageSrc = landing;
  return (
    <div className="full_wrapper">
      <div className="auth_container">
        <AuthHeader />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
