import React from "react";
import BIMLOGO from "../../assets/svgs/bim_logo.svg";
import { navigate } from "gatsby";

const AuthHeader = () => {
  return (
    <div>
      <BIMLOGO
        style={{ height: "60px", cursor: "pointer" }}
        className="logo"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default AuthHeader;
