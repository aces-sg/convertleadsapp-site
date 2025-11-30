import React from "react";

const BlankLayout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {children}
    </div>
  );
};

export default BlankLayout;
