"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import img from "@/assets/images/hero.png";

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
		<section className="relative w-full min-h-screen overflow-hidden  ">
			{/* Background */}
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

			<div className="relative z-10 flex min-h-screen  items-center  ">
				<div className="container">
					<div className="flex flex-col gap-6 text-white md:text-start text-center">
						<TitleComponent>
							VIP Transportation Service in Chicago
						</TitleComponent>
						<Title>Airport Meet & Greet / Business Trips / VIP Clients</Title>
						<div className="flex items-center gap-4 md:justify-start justify-center">
							<Button className="text-black bg-white">Book Now</Button>
							<Button className="bg-transparent text-white border border-white px-6">
								Discover more
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
