"use client";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import React, { useRef } from "react";

import img from "@/assets/images/about.png";
import logo from "@/assets/images/about-logo.png";

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
					Chicago’s Most Trusted Private Transportation Service Since 2017
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
					className="w-full max-w-[400px] flex flex-col gap-8"
					style={{ fontFamily: "Inter, sans-serif" }}>
						
					<Description data-aos="fade-up">
						We are a boutique chauffeur company based in Chicago, exclusively
						serving corporate executives, VIP clients, and those who value time,
						privacy, and flawless execution above everything else
					</Description>
					<Description data-aos="fade-up">
						Every ride is backed by 24/7 dispatch, real-time flight monitoring,
						hand-picked professional chauffeurs (background-checked and trained
						in-house), and a modern fleet of factory-fresh Cadillac,
						Mercedes-Benz, and Maybach vehicles maintained to aviation standards
					</Description>
					<Description data-aos="fade-up">
						No surge pricing. No shared rides. No compromises. Just quiet
						luxury, absolute punctuality, and complete peace of mind — from
						O’Hare or Midway to every corner of Illinois and beyond
					</Description>
				</div>
			</div>
		</section>
	);
};

export default About;