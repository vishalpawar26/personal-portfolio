"use client";

import React, { useState, useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";

const Spotlight = () => {
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const spotlightGrids = document.querySelectorAll(".spotlight-grid");

    spotlightGrids.forEach((grid) => {
      grid.addEventListener("mouseenter", handleMouseEnter);
      grid.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      spotlightGrids.forEach((grid) => {
        grid.removeEventListener("mouseenter", handleMouseEnter);
        grid.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!mousePosition) return;

  return (
    <div
      className={`pointer-events-none fixed inset-0 transform ${isHovered ? "opacity-100" : "opacity-0"} z-10 transition-all duration-500`}
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255,255,255,0.03), 
            rgba(255,255,255,0) 60%)`,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default Spotlight;
