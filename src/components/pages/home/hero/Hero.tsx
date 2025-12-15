"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import img from "@/assets/images/hero_fone.png";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            const scrollY = window.scrollY;
            bgRef.current.style.transform = `translate3d(0, ${
              scrollY * 0.4
            }px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#000000]">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translate3d(0,0,0)",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0.50) 30%,
        rgba(0, 0, 0, 0.35) 60%,
        rgba(0, 0, 0, 0) 100%
      )
    `,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-screen items-center md:mt-[-150px]">
        <div className="container">
          <div className="flex flex-col gap-6 text-white md:text-start text-center">
            <TitleComponent>
              VIP Transportation Service in Chicago
            </TitleComponent>
            <Title>
              Airport Transfers • Corporate & VIP Transportation • 24/7 Service
            </Title>
            <div className="flex items-center flex-col md:flex-row w-full gap-4 md:justify-start justify-center">
              <Button className="text-black bg-white w-full md:w-fit">
                Book Now
              </Button>
              <Button className="bg-transparent text-white w-full md:w-fit border border-white px-6">
                Call Now
              </Button>
            </div>
            <Title className="flex items-center w-full flex-wrap text-[24px] md:text-[32px] text-wrap">
              <span className="text-gray-600 md:text-[42px] text-[32px]">
                ✔
              </span>{" "}
              Fixed Pricing •{" "}
              <span className="text-gray-600 md:text-[42px] text-[32px]">
                ✔
              </span>
              <span>Professional</span> Chauffeurs •
              <span className="text-gray-600 md:text-[42px] text-[32px]">
                ✔
              </span>{" "}
              Online Booking
            </Title>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
