"use client";
import InstallAppContext from "@/context/install.context";
import React, { useContext } from "react";

const InstallToggleButton = () => {
  const something = useContext(InstallAppContext);
  console.log(something , 'something');

  const handleInstallNow = () => {
    console.log("Handle Install Button");
    // logic
  };

  return (
    <button
      onClick={handleInstallNow}
      className="btn btn-success text-white font-bold"
    >
      Install Now
    </button>
  );
};

export default InstallToggleButton;
