"use client";
import React from "react";
import { works } from "@/components/gd/works";

import { useEffect, useState } from "react";

const images = works.map((work) => work.imageUrl[0]);
export const ImageSlideshow = ({
  images,
  className,
  children,
}: {
  images: string[];
  className?: string;
  children?: React.ReactNode;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((index) => (index + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={`${className} relative`}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            transition: "opacity 1s ease-in-out",
          }}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl  md:p-20 p-4 flex flex-col justify-end ${
            index === currentImageIndex ? "" : "opacity-0"
          }`}
        >
          {children}
          <div className="absolute inset-0 bg-[#272727]/75 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
};

export const WelcomeBlock = () => {
  return (
    <ImageSlideshow
      images={images}
      className="rounded-xl bg-[#EEEEEE]/10 text-[#eee] row-span-2"
    >
      <div className="md:max-w-[50%] z-20 overflow-scroll hiddenscroll">
        <p className="p-0.5 bg-[#0079DB] text-sm rounded-xs w-fit px-2">
          Hello i&apos;m RizalAlfadlil
        </p>
        <p className="text-3xl font-bold text-blue-200">
          a <span className="text-yellow-50">graphics designer</span> who likes
          to create <span className="text-yellow-50">UX friendly</span> User
          Interface, <span className="text-yellow-50">social media post</span> and <span className="text-yellow-50">banner design</span>, and any
          other <span className="text-yellow-50">digital design</span>.
        </p>
        <p className="text-muted mt-4">
          <span className="hidden md:inline">click </span>
          <span className="inline md:hidden">tap </span>
          <span className="inline">the button below to view my works</span>
        </p>
      </div>
    </ImageSlideshow>
  );
};
