"use client";

import AboutMeCard from "@/components/AboutMeCard";
import ContactForm from "@/components/ContactForm";
import MouseFollower from "@/components/MouseFollower";
import BentoGrid from "@/sections/BentoGrid";
import Hero from "@/sections/Hero";
import MockupCards from "@/sections/MockupCards";

export default function Home() {
  return (
    <main className={`min-w-80`}>
      <MouseFollower />
      <AboutMeCard />
      <ContactForm />
      <Hero />
      <MockupCards />
      <BentoGrid />
    </main>
  );
}
