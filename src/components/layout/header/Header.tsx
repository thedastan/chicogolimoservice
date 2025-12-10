"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import logo from "@/assets/images/logo.png";
import { PAGE } from "@/config/pages/public-page.config";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const target = document.getElementById("hero-observer");
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// когда hero END ушёл вверх → header становится белым
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
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={25}
						/>
					</Link>
				</div>

				<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</header>
	);
};

export default Header;
