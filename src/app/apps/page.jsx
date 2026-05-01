import TrendingApps from "@/components/Homepage/TrendingApps";
import React from "react";
export const metadata = {
  title: "Apps Page | Ph Play Store",
  description: "This is an application management application.",
};
const Appspage = () => {
  return (
    <div>
      {" "}
      <TrendingApps from="apps"></TrendingApps>
    </div>
  );
};

export default Appspage;
