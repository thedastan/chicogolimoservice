"use client";

import { Description } from "@/components/ui/text/Description";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import img1 from "@/assets/images/scroll1.png";
import img2 from "@/assets/images/scroll2.png";
import img3 from "@/assets/images/scroll3.png";
import img4 from "@/assets/images/scroll4.png";
import img5 from "@/assets/images/scroll5.png";
import img6 from "@/assets/images/scroll6.png";
import img7 from "@/assets/images/scroll7.png";

import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

interface FleetItem {
  img: StaticImageData;
  title: string;
  desc: string;
}

interface FleetCardProps {
  el: FleetItem;
}

const Fleet = () => {
  const data = [
    {
      img: img1,
      title: "Luxury SUV (Cadillac Escalade)",
      desc: "The ultimate statement of presence and comfort. Spacious enough for 6–7 passengers + luggage, perfect for airport transfers, family trips or VIP groups who demand space without compromise",
    },
    {
      img: img2,
      title: "Luxury Sedan (Mercedes S-Class)",
      desc: "The pinnacle of automotive luxury. Reclining rear seats, massage functions, starlight headliner and complete privacy — designed for those who travel like royalty",
    },
    {
      img: img3,
      title: "Luxury Sedan (Mercedes S-Class)",
      desc: "The pinnacle of automotive luxury. Reclining rear seats, massage functions, starlight headliner and complete privacy — designed for those who travel like royalty",
    },
    {
      img: img4,
      title: "GMC Yukon Denali Ultimate",
      desc: "The pinnacle of American executive SUVs. Blacked-out appearance, handcrafted leather interior, magnetic ride control and 22-inch black wheels. Ideal for corporate groups, security details ",
    },
    {
      img: img5,
      title: "Lincoln Navigator",
      desc: "A Statement of Sophistication and Space. Exceptionally spacious interior, refined ride quality, and elegant detailing throughout. Designed for executive transfers, VIP transportation, and long-distance journeys where luxury and presence are essential.",
    },
    {
      img: img6,
      title: "Chevrolet Suburban",
      desc: "The Ultimate in Space and Versatility. Spacious seating for up to 7 passengers, expansive luggage capacity, and a smooth, commanding ride. Ideal for long-distance travel, airport transfers, and group transportation where comfort and reliability matter most.",
    },
    {
      img: img7,
      title: "Ford Expedition",
      desc: "Powerful Presence with Refined Comfort. A bold full-size SUV offering generous interior space, advanced ride comfort, and a quiet, confident driving experience. Perfect for executive travel, family transport, and premium group journeys.",
    },
  ];
  return (
    <section id="fleet" className="w-full  py-20 bg-[white]">
      <div className="relative pt-4">
        <div className="container">
          <TitleComponent>Fleet</TitleComponent>
        </div>

        <div
          className="flex md:gap-16 gap-4 overflow-x-auto pl-[calc((100%-85%)/3)] pr-[calc((100%-85%)/3)] mt-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((el, index) => (
            <FleetCard key={index} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;

const FleetCard = ({ el }: FleetCardProps) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useParallax(
    imgRef,
    typeof window !== "undefined" && window.innerWidth < 768 ? 0.2 : 0.2,
    typeof window !== "undefined" && window.innerWidth < 768 ? 100 : 400
  );

  return (
    <Link href="#" className="flex-shrink-0 md:w-[900px] w-[316px]">
      <div className="md:w-[900px] w-[316px] md:h-[560px] h-[184px] relative overflow-hidden flex justify-center items-center ">
        <div ref={imgRef} className="absolute inset-0 will-change-transform">
          <Image
            fill
            src={el.img}
            alt={el.title}
            className="object-cover scale-110 hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-start gap-4 mt-10">
        <TitleComponent className="max-w-[450px]">{el.title}</TitleComponent>
        <Description className="max-w-[400px]">{el.desc}</Description>
      </div>
    </Link>
  );
};
