"use client";

import { useRef } from "react";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import img from "@/assets/images/ready.png";
import { useParallax } from "@/hooks/useParallax";

const Ready = () => {
	const imgRef = useRef<HTMLDivElement>(null);

	useParallax(
		imgRef,
		typeof window !== "undefined" && window.innerWidth < 768 ? 0.2 : 0.4,
		typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 300
	);
	return (
		<section className="relative w-full min-h-screen overflow-hidden  ">
			{/* Background */}
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

			<div className="relative z-10 flex min-h-screen  items-center  bg-[#00000081]">
				<div className="container flex flex-col justify-center items-center gap-10">
					<Title className="blinking-text-shadow text-white">
						Ready to Book Your VIP Ride?
					</Title>
					<Button className="bg-white text-black">Book Now</Button>
				</div>
			</div>
		</section>
	);
};

export default Ready;
