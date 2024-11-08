"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "@public/logo.svg";
import menu from "@public/menu.svg";
import linkedin from "@public/linkedin.svg";
import github from "@public/github.svg";
import { navlinks } from "@/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="bg-background/50 sticky top-2 z-40 m-2 flex min-w-80 justify-between rounded-full px-6 py-2 backdrop-blur-xl">
      <Link href="/" className="p-2">
        <Image src={logo} alt="Logo" width={24} />
      </Link>
      <div className="flex items-center gap-2">
        <nav className="hidden md:block">
          <ul className="flex gap-2 font-medium">
            {navlinks.map(({ lable, link }) => (
              <li
                key={lable}
                className="rounded-lg px-4 py-2 text-base transition-colors duration-200 hover:bg-white/15"
              >
                <Link href={link}>{lable}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-2xl transition-colors duration-150 hover:bg-white/15"
          >
            <Image src={menu} alt="Menu" width={26} />
          </button>
          <div
            className={`absolute right-8 top-[60px] z-10 transform rounded-2xl border border-neutral-700 bg-neutral-900 p-2 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-2 font-medium">
              {navlinks.map(({ lable, link }) => (
                <li
                  key={lable}
                  className="rounded-lg px-4 py-2 text-base transition-colors duration-200 hover:bg-white/10"
                >
                  <Link href={link}>{lable}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between gap-12 border-t border-neutral-700 px-4 pb-2 pt-3 text-sm text-white/50">
              <span>Follow me at</span>
              <div className="flex items-center justify-center gap-1">
                <Link
                  href="https://www.linkedin.com/in/vishal-r-pawar/"
                  target="_blank"
                >
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={24}
                    className="hover:bg-neutral-800"
                  />
                </Link>
                <Link href="https://github.com/vishalpawar26" target="_blank">
                  <Image
                    src={github}
                    alt="LinkedIn"
                    width={20}
                    className="hover:bg-neutral-800"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
