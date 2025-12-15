"use client";

import { TitleComponent } from "@/components/ui/text/TitleComponent";
import user from "@/assets/images/user.png";
import Image from "next/image";
import { Title } from "@/components/ui/text/Title";
import { Description } from "@/components/ui/text/Description";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IoStar } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  const data = [
    {
      img: user,
      title: "John D. Reynolds",
      text: "Chief Operating Officer, Sterling Capital Partners",
      desc: `“I’ve used private car services in New York, London, and Dubai — none come close to the consistency here.
Flight landed 40 minutes early at 5:12 AM → driver was already waiting at the gate with my name. Zero small talk unless I initiate it, perfect route, spotless Maybach, arrived downtown 18 minutes ahead of schedule.
This is now the only number I save when I’m in Chicago.”the consistency here.
Flight landed 40 minutes early at 5:12 AM → driver was already waiting at the gate with my name.”`,
    },
    {
      img: user,
      title: "John D. Reynolds",
      text: "Chief Operating Officer, Sterling Capital Partners",
      desc: `“Spotless Maybach, perfect route, zero small talk unless requested.
This is now the only number I save when I’m in Chicago.”`,
    },
    {
      img: user,
      title: "John D. Reynolds",
      text: "Chief Operating Officer, Sterling Capital Partners",
      desc: `“Discreet, punctual, reliable — exactly what executive transport should be.”`,
    },
  ];

  return (
    <section id="reviews" className="py-20 md:pb-20 pb-40">
      <div className="container">
        <TitleComponent className="text-center">Client reviews</TitleComponent>

        <div className="relative mt-10 bg-[#FAFAFA] md:p-20 p-6">
          <button className="reviews-prev p-4 absolute md:left-5 left-6 md:top-1/2 top-full md:-translate-y-1/2 mt-6 z-10">
            <GrPrevious size={24} />
          </button>

          <button className="reviews-next p-4 absolute md:right-5 right-6 md:top-1/2 top-full md:-translate-y-1/2 mt-6 z-10">
            <GrNext size={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: ".reviews-prev",
              nextEl: ".reviews-next",
            }}
            slidesPerView={1}
            spaceBetween={40}
            speed={800}
          >
            {data.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[877px] mx-auto">
                  <div className="flex md:flex-row flex-col gap-8">
                    <Image
                      width={210}
                      height={250}
                      src={el.img}
                      alt={el.title}
                    />

                    <div className="flex flex-col gap-2">
                      <Title>{el.title}</Title>

                      <Description className="font-semibold">
                        {el.text}
                      </Description>

                      <Description>{el.desc}</Description>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mt-8">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar color="#B3B3B3" />
                    <span className="pl-2">4.0 rating</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
