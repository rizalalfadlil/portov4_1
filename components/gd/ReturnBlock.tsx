"use client";
import React from "react";
import { FaCode } from "react-icons/fa6";
export const ReturnBlock = () => {
  return (
    <div
      onClick={() => (window.location.href = "/developer")}
      className="cursor-pointer select-none rounded-xl hover:outline-2 px-10 p-4 md:px-20 bg-[#EEEEEE]/10 flex flex-col justify-center items-start text-center md:grow-0!"
    >
      <p className="text-2xl font-bold">
        {" "}
        <FaCode className="inline me-2" /> Developer
      </p>
      <p className="text-muted text-sm hidden md:block">
        Visit My Developer Portfolio
      </p>
    </div>
  );
};
