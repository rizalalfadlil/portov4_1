"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiUsersThreeBold } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";

export const ContactBlock = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer select-none relative hover:outline-2 rounded-xl px-10 p-4 md:px-20 text-[#fff] flex items-center gap-4 bg-[#EEEEEE]/10"
    >
      <div className="absolute inset-0 rounded-xl "></div>
      <div className="flex flex-col justify-center  w-2/3 z-20">
        <div className="text-2xl font-bold flex items-center">
          {" "}
          <PiUsersThreeBold className="inline me-2" /> <span>Contact</span>
        </div>
        <p className="text-sm hidden md:block text-muted ${alata.className}">
          Stay connected with me on social media or reach out for
          collaborations.
        </p>
      </div>
      <div className="md:flex hidden flex-wrap items-center h-fit gap-4 p-4 z-20">
        <FaFacebook size={48} />
        <RiInstagramFill size={48} />
        <FaDiscord size={48} />
        <HiDotsHorizontal size={48} />
      </div>
    </div>
  );
};
