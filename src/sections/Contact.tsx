import React, { useRef } from "react";
import useStore from "@/store/store";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

const Contact = () => {
  const { setIsContactFormOpen } = useStore();

  const headingRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useViewportAnimation([headingRef, subHeadingRef, buttonRef]);

  return (
    <section className="flex w-full items-center justify-center bg-background px-4 py-12 sm:px-12">
      <div className="flex flex-col items-center gap-4 sm:gap-8 lg:w-[1024px]">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-center text-4xl font-light leading-snug opacity-0 sm:pt-12 sm:text-5xl md:text-6xl"
        >
          Let&apos;s Explore New <br /> Possibilities.
        </h2>

        {/* Sub-Heading */}
        <p
          ref={subHeadingRef}
          className="text-center text-lg font-light text-neutral-400 opacity-0 sm:w-3/4 md:w-2/3 md:text-xl"
        >
          Reach out by filling out the form below, and let&apos;s start turning
          your ideas into reality!
        </p>

        {/* Contact Button */}
        <button
          ref={buttonRef}
          type="submit"
          onClick={setIsContactFormOpen}
          className="mt-2 gap-4 rounded-full border border-blue-600 bg-blue-600 px-16 py-3 opacity-0 transition-colors duration-500 hover:bg-neutral-900 disabled:cursor-wait"
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default Contact;
