import React from "react";

const ApplyLayout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden">
      {children}
    </div>
  );
};

export default ApplyLayout;
