"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import logo from "@public/icons/logo.svg";
import menu from "@public/icons/menu.svg";
import linkedin from "@public/icons/linkedin.svg";
import github from "@public/icons/github.svg";
import { navlinks, urls } from "@/constants";
import useStore from "@/store/store";
import HeaderButton from "@/components/HeaderButton";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useStore();
  const { setIsAboutMeCardOpen } = useStore();
  const { setIsContactFormOpen } = useStore();

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen();
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  const showAboutMeCard = () => {
    setIsAboutMeCardOpen();
  };

  const showContactForm = () => {
    setIsContactFormOpen();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section className="fixed inset-x-0 top-0 z-40 mx-auto flex justify-between">
      <div className="bg-headerBackground/05 relative w-screen border-b border-b-white/10 px-4 py-1 backdrop-blur-3xl sm:px-12">
        <div className="mx-auto flex max-w-[1200px] justify-between">
          {/* Logo */}
          <Link href="/" className="p-2">
            <Image src={logo} alt="Logo" width={24} />
          </Link>

          {/* Navbar */}
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex md:gap-2">
              <ul className="flex items-center justify-center gap-2 font-medium">
                {navlinks.map(({ lable, link }) => (
                  <li key={lable}>
                    <Link
                      href={link}
                      className="h-full rounded-lg px-4 py-[10px] text-left text-base font-light transition-colors duration-300 hover:bg-white/10"
                    >
                      {lable}
                    </Link>
                  </li>
                ))}
                <li>
                  <HeaderButton label="About me" onClick={showAboutMeCard} />
                </li>
                <li>
                  <HeaderButton label="Contact" onClick={showContactForm} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Menu */}
      <div
        ref={menuRef}
        className="absolute right-4 top-1 block sm:right-12 md:hidden"
      >
        <button
          onClick={toggleMenu}
          className="rounded-lg p-2 text-2xl transition-colors duration-150 hover:bg-white/10"
        >
          <Image src={menu} alt="Menu" width={26} />
        </button>
        <div
          className={`absolute right-0 top-14 z-10 flex w-60 transform flex-col rounded-2xl border border-neutral-700 bg-neutral-900/5 py-2 backdrop-blur-3xl transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ul className="flex w-full flex-col gap-1 px-2 pb-2 font-medium">
            {navlinks.map(({ lable, link }) => (
              <li key={lable}>
                <Link
                  href={link}
                  className="block rounded-lg px-4 py-2 text-base font-light transition-colors duration-200 hover:bg-white/10"
                >
                  {lable}
                </Link>
              </li>
            ))}
            <li>
              <HeaderButton label="About me" onClick={showAboutMeCard} />
            </li>
            <li>
              <HeaderButton label="Contact" onClick={showContactForm} />
            </li>
          </ul>
          <div className="flex items-center justify-between border-t border-neutral-700 px-6 pb-2 pt-4 text-sm text-white/50">
            <span>Follow me at</span>
            <div className="flex items-center justify-center gap-1">
              <Link href={urls.linkedIn} target="_blank">
                <Image src={linkedin} alt="LinkedIn" width={22} />
              </Link>
              <Link href={urls.github} target="_blank">
                <Image src={github} alt="GitHub" width={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
