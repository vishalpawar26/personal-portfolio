import { useRef, useEffect } from "react";
import useMousePosition from "@/utils/useMousePosition";
import { gsap } from "gsap";

export default function MouseFollower() {
  const mousePosition = useMousePosition();
  const followerRef = useRef(null);

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

  if (!mousePosition) return null;

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-white"
      style={{
        transform: "translate(-50%, -50%)",
        top: 0,
        left: 0,
      }}
    />
  );
}
