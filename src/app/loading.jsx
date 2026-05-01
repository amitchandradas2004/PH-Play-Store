import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center bg-purple-200 h-screen font-bold text-2xl">
      Global laoding........
      {/* <HashLoader color="#ad46ff" /> */}
    </div>
  );
};

export default loading;
