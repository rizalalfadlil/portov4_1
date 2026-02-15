"use client";
import React from "react";

export function CTAButton({
  small,
  contactSection,
}: {
  small?: boolean;
  contactSection?: React.Ref<HTMLDivElement>;
}) {
  return (
    <>
      <button
        className={`btn btn-accent ${small ? "" : "btn-lg"}`}
        onClick={() => contactSection && "current" in contactSection && contactSection.current && contactSection.current.scrollIntoView({ behavior: "smooth" })}
      >
        Contact Me
      </button>
    </>
  );
}
