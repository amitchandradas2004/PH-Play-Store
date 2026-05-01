import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] py-10 text-white">
      <div className="container mx-auto">
        <h3 className="text-5xl font-bold">
          Trusted by Millions, Built for You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          <div className="text-center space-y-3 border border-gray-400 rounded-2xl p-4 bg-purple-700 shadow-md shadow-purple-500 transition hover:-translate-y-0.5 select-none">
            <p className="opacity-80">Total Downloads</p>
            <h3 className="text-6xl font-bold">29.6M</h3>
            <p className="opacity-80">21% more than last month</p>
          </div>
          <div className="text-center space-y-3 border border-gray-400 rounded-2xl p-4 bg-purple-700 shadow-md shadow-purple-500 transition hover:-translate-y-0.5 select-none">
            <p className="opacity-80">Total Reviews</p>
            <h3 className="text-6xl font-bold">906K</h3>
            <p className="opacity-80">46% more than last month</p>
          </div>
          <div className="text-center space-y-3 border border-gray-400 rounded-2xl p-4 bg-purple-700 shadow-md shadow-purple-500 transition hover:-translate-y-0.5 select-none">
            <p className="opacity-80">Active Apps</p>
            <h3 className="text-6xl font-bold">132+</h3>
            <p className="opacity-80">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
