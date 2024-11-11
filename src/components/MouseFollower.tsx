import { useState, useRef, useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";
import { gsap } from "gsap";
import Image from "next/image";

import arrowRight from "@public/icons/arrow-right.svg";

export default function MouseFollower() {
  const mousePosition = useMousePosition();
  const followerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (mousePosition && followerRef.current) {
      gsap.to(followerRef.current, {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [mousePosition]);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      projectCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        scale: isHovered ? 7 : 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  if (!mousePosition) return null;

  return (
    <div
      ref={followerRef}
      className={`pointer-events-none fixed z-50 rounded-full transition-colors ${isHovered ? "bg-white/25 backdrop-blur-[2px]" : "bg-white/25"} flex items-center justify-center`}
      style={{
        transform: "translate(-50%, -50%)",
        top: 0,
        left: 0,
        width: "12px",
        height: "12px",
      }}
    >
      {isHovered && <Image src={arrowRight} alt="click" width={4} />}
    </div>
  );
}
