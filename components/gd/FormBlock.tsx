"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const FormBlock = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="relative hover:outline-2 rounded-xl md:px-20 p-4 flex justify-between  text-[#EEEBF5] md:px-20"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#71BFFF] to-[#20A1C9] rounded-xl opacity-50"></div>
      <div className="flex flex-col gap-2 justify-center z-20">
        <p className="text-2xl font-bold">Form</p>
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta
          necessitatibus doloremque quam, illum facilis sunt quos eveniet
          corrupti laboriosam!
        </p>
      </div>
      <div className="flex items-center justify-end min-w-1/3">
        <FaArrowRight size={24} />
      </div>
    </div>
  );
};
