"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import logo from "@/assets/images/СL.png";
import { PAGE } from "@/config/pages/public-page.config";
import BurgerMenu from "./BurgerMenu";
import { navbar } from "@/lib/navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lineColor = isOpen || scrolled ? "bg-black" : "bg-white";

  useEffect(() => {
    const target = document.getElementById("hero-observer");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div
        className={`fixed top-0 left-0 z-50 w-full   py-2 transition-all duration-500 ${
          scrolled
            ? "bg-white border-b border-gray-200"
            : "bg-transparent border-b border-[#a8a8a8]/30"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href={PAGE.HOME}>
            <Image src={logo} alt="logo" className="w-[34px]" />
          </Link>

          <div className="hidden text-[14px] text-[#ffffff] md:flex gap-[24px]">
            {navbar.map((el, index) => (
              <Link key={index} href={el.href}>
                {el.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden items-center justify-end">
            <button
              aria-label="Menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-[60] w-6 h-6 flex flex-col justify-center items-center"
            >
              {/* Line 1 */}
              <span
                className={`absolute h-[2px] transition-all duration-300 ${
                  isOpen
                    ? "w-5 rotate-45 bg-black"
                    : "w-6 -translate-y-2 bg-white"
                }`}
              />

              {/* Line 2 */}
              <span
                className={`absolute h-[2px] w-6 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100 bg-white"
                }`}
              />

              {/* Line 3 */}
              <span
                className={`absolute h-[2px] transition-all duration-300 ${
                  isOpen
                    ? "w-5 -rotate-45 bg-black"
                    : "w-6 translate-y-2 bg-white"
                }`}
              />
            </button>
          </div>

          <div className="md:flex hidden"></div>
        </div>

        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
