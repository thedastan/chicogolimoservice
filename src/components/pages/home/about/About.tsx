"use client";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import React, { useRef } from "react";

import img from "@/assets/images/about.png";
import logo from "@/assets/images/logo_about.png";

const About = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useParallax(
    imgRef,
    typeof window !== "undefined" && window.innerWidth < 768 ? 0.2 : 0.2,
    typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 300
  );

  return (
    <section id="about" className="py-20">
      <div className="container flex flex-col gap-10 justify-center items-center text-center">
        <TitleComponent className="w-full max-w-[900px]">
          Chicago’s Most Trusted Private Chauffeur Service Since 2017
        </TitleComponent>

        <div className=" relative h-[655px] w-full  overflow-hidden flex justify-center">
          <Image
            width={180}
            height={180}
            className="absolute z-10 mt-20"
            src={logo}
            alt="logo"
          />
          <div
            ref={imgRef}
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "translate3d(0,0,0)",
            }}
          />
        </div>

        <div
          className="w-full max-w-[500px] flex flex-col gap-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <Description data-aos="fade-up">
            Private chauffeur service for executives and VIP clients in Chicago.
            Quiet luxury, absolute punctuality, complete peace of mind.
          </Description>
          <Description data-aos="fade-up">
            Serving Chicago Since 2017 • Licensed & Insured • 24/7 Service
          </Description>
        </div>
      </div>
    </section>
  );
};

export default About;
