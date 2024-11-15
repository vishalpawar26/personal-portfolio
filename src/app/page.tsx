"use client";

import AboutMeCard from "@/components/AboutMeCard";
import ContactForm from "@/components/ContactForm";
import MouseFollower from "@/components/MouseFollower";
import BentoGrid from "@/sections/BentoGrid";
import Hero from "@/sections/Hero";
import MockupCards from "@/sections/MockupCards";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-w-80 flex-col items-center justify-center">
      <MouseFollower />
      <AboutMeCard />
      <ContactForm />
      <Hero />
      <MockupCards />
      <BentoGrid />
      <Projects />
    </main>
  );
}
