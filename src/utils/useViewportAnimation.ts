import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";

type AnimatableElement = HTMLElement | null;

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationDuration?: number;
  animationEase?: string;
  initialScale?: number;
}

const defaultOptions: AnimationOptions = {
  threshold: 0.25,
  rootMargin: "50px",
  animationDuration: 0.75,
  animationEase: "power3.out",
  initialScale: 0.75,
};

export const useViewportAnimation = (
  elements: RefObject<AnimatableElement>[],
  options: AnimationOptions = {},
): void => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const {
      threshold,
      rootMargin,
      animationDuration,
      animationEase,
      initialScale,
    } = { ...defaultOptions, ...options };

    observerRef.current = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              {
                opacity: 0,
                scale: initialScale,
              },
              {
                opacity: 1,
                scale: 1,
                duration: animationDuration,
                ease: animationEase,
              },
            );

            (observerRef.current as IntersectionObserver).unobserve(
              entry.target,
            );
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    // Observe all elements
    elements.forEach((elementRef) => {
      if (elementRef.current) {
        observerRef.current?.observe(elementRef.current);
      }
    });

    // Cleanup
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
};
