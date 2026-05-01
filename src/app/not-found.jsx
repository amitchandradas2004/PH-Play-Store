import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Not Found Page | Ph Play Store",
  description: "This is an application management application.",
};
const NotFoundPage = () => {
  return (
    <div className="bg-red-200 h-screen flex flex-col justify-center items-center space-y-10">
      <h2 className="text-5xl font-bold text-center ">
        This page is not found. Click the Home button to enter the home page.
      </h2>
      <div>
        <Link href={"/"}>
          <button className="text-xl font-bold btn btn-warning">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
