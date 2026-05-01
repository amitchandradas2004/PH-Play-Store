import Banner from "@/components/Homepage/Banner";
import Stats from "@/components/Homepage/Stats";
import TrendingApps from "@/components/Homepage/TrendingApps";
import React from "react";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <TrendingApps from="homepage"></TrendingApps>
    </div>
  );
}
