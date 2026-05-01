import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/img/hero.png";

import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" pt-10 container mx-auto">
      <div className="text-center space-y-4">
        <h3 className="text-7xl font-bold ">
          We Build <br />{" "}
          <span className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h3>
        <p className="text-[#627382] text-xl">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center gap-2 py-5">
        <button className="flex items-center btn btn-outline gap-2 font-bold">
          <FaGooglePlay />
          <h4>Google Play</h4>
        </button>
        <button className="flex items-center btn btn-outline gap-2 font-bold">
          <FaAppStoreIos />
          <h4>App Store</h4>
        </button>
      </div>
      <div>
        <Image src={BannerImage} alt="This is the Banner Image of PH Hero Apps" className="mx-auto w-100"></Image>
      </div>
    </div>
  );
};

export default Banner;
