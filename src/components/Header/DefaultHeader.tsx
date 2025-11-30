import React from "react";
import ServicesMenu from "./ServicesMenu";

interface HeaderProps {
  fullWidth?: Boolean;
  noMenu?: Boolean;
}

const DefaultHeader: React.FC<HeaderProps> = (props) => {
  return <ServicesMenu />;
};

export default DefaultHeader;
