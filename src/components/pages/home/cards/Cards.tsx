"use client";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { Description } from "@/components/ui/text/Description";
import Image from "next/image";

import card1 from "@/assets/svg/card1.svg";
import card2 from "@/assets/svg/card2.svg";
import card3 from "@/assets/svg/card3.svg";
import card4 from "@/assets/svg/card4.svg";
import card5 from "@/assets/svg/card5.svg";
import card6 from "@/assets/svg/card6.svg";

const Cards = () => {
  const data = [
    {
      img: card1,
      title: "Airport Transfer",
      desc: "Seamless pickups, real-time flight tracking, and stress-free arrival every time",
    },
    {
      img: card2,
      title: "Corporate Transportation",
      desc: "Professional, punctual, and discreet rides tailored for business leaders",
    },
    {
      img: card3,
      title: "Business Meetings",
      desc: "Arrive prepared and on time with smooth, uninterrupted executive travel",
    },
    {
      img: card4,
      title: "VIP Chauffeur Service",
      desc: "Personalized luxury transportation designed for your highest comfort and privacy",
    },
    {
      img: card5,
      title: "Special Occasions",
      desc: "Elevate your celebrations with elegant, polished, and unforgettable rides",
    },
    {
      img: card6,
      title: "Hourly Service",
      desc: "Flexible, on-demand chauffeuring at your pace — stay in control of your schedule.",
    },
  ];

  return (
    <section id="services" className="bg-[#141414] py-20">
      <div className="container">
        <TitleComponent className="text-white text-center">
          Services
        </TitleComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {data.map((el, index) => {
            const isMobileYellow = index % 2 === 0;

            const row = Math.floor(index / 2); // 0, 0, 1, 1, 2, 2
            const col = index % 2; // 0, 1, 0, 1, 0, 1

            const isDesktopYellow = row % 2 === 0 ? col === 0 : col === 1;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className={`
    p-6 flex flex-col gap-2 border transition-all
    ${isMobileYellow ? "border-[#FFD06B]" : "border-white"}
    ${isDesktopYellow ? "md:border-[#FFD06B]" : "md:border-white"}
  `}
              >
                <h2
                  className={`
      text-[40px] font-[400] leading-[120%]
      ${isMobileYellow ? "text-[#FFD06B]" : "text-white"}
      ${isDesktopYellow ? "md:text-[#FFD06B]" : "md:text-white"}
    `}
                >
                  {el.title}
                </h2>

                <Description
                  style={{ fontFamily: "Inter, sans-serif" }}
                  className="text-white w-full max-w-[330px]"
                >
                  {el.desc}
                </Description>

                <div className="relative overflow-hidden w-full md:h-[318px] h-[207px] mt-4">
                  <Image
                    fill
                    src={el.img}
                    alt={el.title}
                    className="object-cover scale-100 hover:scale-110 transition-all duration-700"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cards;
