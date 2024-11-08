"use client";

import MouseFollower from "@/components/MouseFollower";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="min-w-80">
      <MouseFollower />
      <Hero />
      <div className="h-screen"></div>
    </main>
  );
}
