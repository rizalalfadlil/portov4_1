"use client";
import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";

export const AboutBlock = () => {
  const [open, setOpen] = useState(false);
  const [screenwidth, setScreenwidth] = useState(0);
  const [isclient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    setScreenwidth(window.innerWidth);

    const handleResize = () => setScreenwidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    isclient && (
      <div
        className="rounded-xl hover:outline-2 px-10 p-4 md:px-20 bg-[#DBDBDB] text-[#444444] grid md:grid-cols-2"
        onClick={() => (screenwidth < 768 ? setOpen(!open) : null)}
      >
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-bold">
            {" "}
            <FiInfo className="inline me-2 mb-2" /> About
          </p>
          {(open || screenwidth > 768) && (
            <div className=" text-sm mt-4">
              <p>
                I’m Hafidz Rizal Al-Fadli. With a keen eye for design and
                usability, I aim to create visuals that communicate and inspire.
                Beyond aesthetics, my work focuses on functionality and impact.
              </p>
              <p className="mt-4">© 2025 - RizalAlfadlil</p>
            </div>
          )}
        </div>
      </div>
    )
  );
};
