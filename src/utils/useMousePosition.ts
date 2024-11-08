import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    // Detect if device has mouse capability
    const checkMouseDevice = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMouseDevice(!hasTouch);
    };

    checkMouseDevice();
    window.addEventListener("resize", checkMouseDevice);

    return () => window.removeEventListener("resize", checkMouseDevice);
  }, []);

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (isMouseDevice) {
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, [isMouseDevice]);

  return isMouseDevice ? mousePosition : null;
}
