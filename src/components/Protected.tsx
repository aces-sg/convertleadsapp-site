import React, { useContext } from "react";
import { navigate } from "gatsby";
import { AuthContext } from "./Auth/authContext";
import { isBrowser } from "../hooks/auth";

const ProtectedWrapper = (WrappedComponent) => {
  const WrapperComponent = (props) => {
    if (!isBrowser()) {
      // If not in a browser environment (e.g., during server-side rendering), return null.
      // Alternatively, you can choose to render a loading spinner or some other component here.
      return null;
    }

    const { user, signOut } = useContext(AuthContext);

    if (Object.keys(user).length === 0) {
      // If the user is not authenticated, store the intended path and navigate to the login page.
      const intendedPath = window.location.pathname;
      sessionStorage.setItem("intendedPath", intendedPath);
      navigate("/user/login");
      return null;
    }

    async function handleLogout() {
      await signOut();
      // Optionally, you can redirect to the login page after successful logout.
      navigate("/user/login");
    }

    // Pass the rest of the props down to the wrapped component.
    return (
      <WrappedComponent
        user={user}
        handleLogout={handleLogout}
        {...props}
      />
    );
  };

  return WrapperComponent;
};

export default ProtectedWrapper;
