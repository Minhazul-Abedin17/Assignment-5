import React from "react";
import BannerLogo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-8 container mx-auto space-y-2 pt-7 pl-3 pr-3">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-5xl text-[#0F172A]">Build Your Ideal<span className="block font-bold text-5xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span></h2>
        <p>
          Explore frontend, backend, database, and tooling options,
          <br/>
          compare them side by side, and put together the stack that fits your
          <br/>
            next project.
        </p>
        <div className="flex gap-3">
          <button className="btn bg-linear-to-r from-[#F97316] via-[#F86E24] to-[#EC4899] text-white-500 text-[14px] rounded-[9px] items-center px-6 py-3">Explore Technologies</button>
          <button className="btn font-semibold border border-[#E5E7EB] text-[#374151] text-[14px] rounded-[9px] items-center px-14 py-3">Learn More</button>
        </div>
      </div>
      <img src={BannerLogo} alt="" />
    </div>
  );
};

export default Banner;
