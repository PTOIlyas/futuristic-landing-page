'use client'

import { PATHS } from "@/constants/path";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { SOCIAL_ICONS } from "@/constants/icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent">
        <nav className="max-w-[1440px] mx-auto px-8 h-[80px] flex items-center justify-between">

          <Link
            href="/"
            className="text-white text-xl font-semibold tracking-wide hover:opacity-80 transition"
          >
            SITE NAME
          </Link>

          <ul className="hidden md:flex items-center gap-10 text-white text-sm font-medium">
            {PATHS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-5">
            {SOCIAL_ICONS.map((icon) => (
              <Link
                key={icon.alt}
                href="#"
                className="opacity-80 hover:opacity-100 hover:scale-110 transition"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
          <button
            className="fixed top-6 right-6 flex flex-col justify-between w-6 h-5 md:hidden z-[1000]"
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-[8.8px]" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-opacity duration-300  ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[8.8px]" : ""
                }`}
            />
          </button>
        </nav>
      </header >
      <MobileNavbar
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
