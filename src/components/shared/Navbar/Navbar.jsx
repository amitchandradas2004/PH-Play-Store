import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import LogoImage from "../../../assets/img/logo.png";
import Mylink from "./Mylink";
const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];
  return (
    <nav className="shadow">
      <div className="flex justify-between gap-4 items-center  py-[8px] container mx-auto">
        <div className="flex items-center gap-2 font-bold">
          <Image src={LogoImage} alt="PH Play Store" className="w-5"></Image>
          <h2>HERO.IO</h2>
        </div>
        <ul className="flex justify-between gap-3 font-semibold items-center">
          {navItems.map((item, index) => (
            // Client Side
            <Mylink key={index} href={item.path}>
              {item.text}
            </Mylink>
          ))}
        </ul>{" "}
        <button className="flex items-center p-2 text-white gap-2 btn btn-secondary">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
