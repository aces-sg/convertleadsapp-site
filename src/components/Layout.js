import React from "react";
import DefaultHeader from "./Header/DefaultHeader";
import Footer from "./Footer";
import { AuthProvider } from "components/Auth/authContext";
import SEO from "components/Seo";
import "../../styles.css";

const BodyContainer = ({ children }) => {
  return <div>{children}</div>;
};

const Layout = ({ children, location }) => {
  const emptyLayoutPaths = ["projectCosting", "submit", "user", "partners", "thankyou"];

  const isEmptyLayout = emptyLayoutPaths.some((path) =>
    location?.pathname.includes(path)
  );
  if (location?.pathname === "/software") {
    return (
      <>
        <AuthProvider>
          {isEmptyLayout ? (
            <>
              <BodyContainer>{children}</BodyContainer>
              {/* <Footer /> */}
            </>
          ) : (
            <>
              <DefaultHeader />
              <BodyContainer>{children}</BodyContainer>
            </>
          )}
        </AuthProvider>
      </>
    );
  } else {
    return (
      <>
        <AuthProvider>
          {isEmptyLayout ? (
            <>
              <BodyContainer>{children}</BodyContainer>
              {/* <Footer /> */}
            </>
          ) : (
            <>
              <DefaultHeader />
              <BodyContainer>{children}</BodyContainer>
            </>
          )}
        </AuthProvider>
      </>
    );
  }
};

export default Layout;
