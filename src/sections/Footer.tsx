import React from "react";
import Link from "next/link";

import { urls } from "@/constants";

const Footer = () => {
  return (
    <section className="flex w-full justify-center px-4 py-10 sm:px-12 md:pr-2">
      <div className="flex w-[1200px] flex-col-reverse items-center justify-between gap-2 md:flex-row md:gap-6">
        <div>
          <p className="text-sm text-neutral-400">
            © 2024 Vishal Pawar. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={urls.linkedIn}
            target="_blank"
            className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 hover:bg-white/10"
          >
            LinkedIn
          </Link>
          <Link
            href={urls.github}
            target="_blank"
            className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 hover:bg-white/10"
          >
            GitHub
          </Link>
          <Link
            target="_blank"
            href="mailto:vishalpawar1784@gmail.com"
            className="rounded-lg px-4 py-2 text-sm text-neutral-400 transition-colors duration-300 hover:bg-white/10"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
