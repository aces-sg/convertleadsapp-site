import React from "react";
import SoftwareServices from "./SoftwareServices";

interface HeaderProps {
  fullWidth?: Boolean;
  noMenu?: Boolean;
}

const DefaultHeader: React.FC<HeaderProps> = (props) => {
  return <SoftwareServices />;
};

export default DefaultHeader;
