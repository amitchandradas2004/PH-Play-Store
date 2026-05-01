"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { children } from "react";

const Mylink = ({ href, children }) => {
  const pathName = usePathname();
  console.log(pathName, href, "PathName");

  return (
    <Link
      href={href}
      className={`pb-1 ${pathName === href ? "border-b-2 border-purple-600 text-purple-600" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Mylink;
