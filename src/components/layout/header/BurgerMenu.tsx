"use client";

import { navbar } from "@/lib/navbar";
import Link from "next/link";
import logo2 from "@/assets/images/logo.png";
import Image from "next/image";

const BurgerMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white pt-3 p-6 shadow-xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Верхний блок: только Logo */}
          <div className="flex  justify-start items-center">
            <Image src={logo2} alt="logo2" className="w-[34px]" />
          </div>

          {/* Навигация */}
          <div className="flex flex-col items-center gap-[24px] mt-[20px]">
            {navbar.map((el, index) => (
              <Link
                key={index}
                href={el.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  opacity: isOpen ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  transitionDelay: isOpen ? `${index * 0.1}s` : "0s",
                }}
                className="text-black text-[14px] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {el.label}
              </Link>
            ))}
          </div>

          {/* Кнопки прижаты вниз */}
          <div className="mt-auto w-full flex flex-col gap-[8px]">
            <button
              style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full h-[48px] text-[16px] text-white bg-black font-[600]"
            >
              Book Now
            </button>
            <button
              style={{ fontFamily: "Inter, sans-serif" }}
              className="w-full h-[48px] text-[16px] text-black border border-black"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
