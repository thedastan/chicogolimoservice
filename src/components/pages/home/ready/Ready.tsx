"use client";

import { useRef } from "react";
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import img from "@/assets/images/ready.png";
import { useParallax } from "@/hooks/useParallax";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "alert-go";
import "alert-go/dist/notifier.css";

interface IFormTelegram {
  name: string;
  email: string;
  number: number;
  message: string;
}

const Ready = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset } = useForm<IFormTelegram>();

  const messageModel = (data: IFormTelegram) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email Addres:   <b>${data.email}</b>\n`;
    messageTG += `Number:  <b>${data.number} </b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;
    return messageTG;
  };

  const onSubmit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(
        `https://api.telegram.org/bot${"8118384368:AAEdU0A6Hgq4fwDms8uF4poPn1_CZ_sQkDY"}/sendMessage`,
        {
          chat_id: -1003553593022,
          parse_mode: "html",
          text: messageModel(data),
        }
      );
      reset();
      toast.success("Message sent successfully", {
        position: "top-center",
      });
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };

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

      <div className="relative z-10 min-h-screen flex justify-center items-center flex-col md:flex-row gap-[50px]  bg-[#00000081] md:p-[70px] p-[10px] py-[100px]">
        <div
          data-aos="fade-up"
          className="md:min-w-[600px] w-full h-full text-[#ffffff]"
        >
          <Title className="text-[#DCB67D] !text-[20px]">GET STARTED</Title>
          <TitleComponent className="!text-[36px] blinking-text-shadow h-[70px] flex items-center mt-2   md:w-[500px] w-full">
            Request a Quote
          </TitleComponent>

          <Description className="font-sans mt-2 md:w-[500px] w-full">
            Let us tailor a transportation solution that perfectly meets your
            corporate needs. Fill out the form and our team will contact you
            promptly.
          </Description>
          <div className="flex flex-col gap-[20px] mt-4 md:ml-6 ml-0">
            <div className="flex gap-[20px]">
              <h4 className="text-black w-[50px] h-[50px] bg-[#DCB67D] text-[25px] flex items-center justify-center rounded-[25px]">
                <MdOutlineMailOutline />
              </h4>
              <div className="font-sans flex flex-col justify-between">
                <Title className="font-[600] !text-[16px]">Email</Title>
                <div className="md:max-w-none max-w-[250px] overflow-hidden sm:max-w-[180px]">
                  <Link
                    target="_blank"
                    className="text-[#DCB67D] border-b border-[#DCB67D] truncate block"
                    href="mailto:info@chicogolimoservice.us"
                  >
                    info@chicogolimoservice.us
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex gap-[20px]">
              <h4 className="text-black w-[50px] h-[50px] bg-[#DCB67D] text-[25px] flex items-center justify-center rounded-[25px]">
                <LuPhone />
              </h4>
              <div className="font-sans flex flex-col gap-[10px]">
                <Title className="font-[600] !text-[16px]">Phone</Title>
                <Description className="text-[#ffffff]">
                  Mon-Sun 24/7
                </Description>
                <Description className="text-[#DCB67D]">
                  <Link href="tell:+1 206 341-2631">+1 206 341-2631</Link>
                </Description>
              </div>
            </div>

            <div className="flex gap-[20px]">
              <h4 className="text-black w-[50px] h-[50px] bg-[#DCB67D] text-[25px] flex items-center justify-center rounded-[25px]">
                <SlLocationPin />
              </h4>
              <div className="font-sans flex flex-col justify-between">
                <Title className="font-[600] !text-[16px]">Location</Title>
                <Description className="text-[#DCB67D]">
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps/place/3910+N+California+Ave,+Chicago,+IL+60618,+%D0%A1%D0%A8%D0%90/@41.9526208,-87.7011106,17z/data=!4m6!3m5!1s0x880fcd8a6b750e39:0x9a91828bb491c38c!8m2!3d41.9526208!4d-87.6985357!16s%2Fg%2F11c13p59n4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                  >
                    3910 N California Ave, Chicago, IL
                  </Link>
                </Description>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="md:min-w-[600px] w-full h-full bg-[#001539] border border-[#DCB67D] rounded-[15px]"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full gap-[25px] flex flex-col justify-between p-[40px] rounded-[15px]"
            style={{
              background: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.30) 20%,
        rgba(0, 0, 0, 0.55) 40%,
		 rgba(0, 0, 0, 0.70) 60%,
        rgba(0, 0, 0, 0.90) 80%,
        rgba(0, 0, 0, 100) 100%
      )
    `,
            }}
            aria-hidden="true"
          >
            <div className="w-full flex flex-col gap-[15px]">
              <div className="w-full flex flex-col gap-1">
                <Description className="text-[#DCB67D] font-sans">
                  Book Your Luxury Ride Today*
                </Description>
                <input
                  className="border-l-[2px] border-t-[2px] border-b-[2px] border-black w-full h-[40px] p-[10px] bg-[#00153900] font-sans text-white placeholder:text-[#646464] outline-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Full Name Here"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Description className="text-[#DCB67D] font-sans">
                  Get in Touch With Us*
                </Description>
                <input
                  className="border-l-[2px] border-t-[2px] border-b-[2px] border-black w-full h-[40px] p-[10px] bg-[#00153900] font-sans text-white placeholder:text-[#646464] outline-none"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email Address"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Description className="text-[#DCB67D] font-sans">
                  How can we call you
                </Description>
                <input
                  className="border-[2px] border-black md:w-[160px] w-full h-[40px] p-[10px] bg-[#00153900] font-sans text-white placeholder:text-[#646464] outline-none"
                  type="number"
                  {...register("number", { required: true })}
                  placeholder="Phone number"
                />
              </div>

              <div className="w-full flex flex-col gap-1">
                <Description className="text-[#DCB67D] font-sans">
                  Tell Us About Your Event*
                </Description>
                <textarea
                  className="border-l-[2px] border-t-[2px] border-b-[2px] w-full h-[80px] border-black p-[10px] bg-[#00153900] font-sans text-white placeholder:text-[#646464] outline-none"
                  {...register("message", { required: true })}
                  placeholder="Enter Your Message Here"
                ></textarea>
              </div>
            </div>

            <div className="w-full">
              <Button
                type="submit"
                className="bg-white rounded-[5px] md:px-[15px] px-[3px] w-full md:w-fit"
              >
                Submit Your Request Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Ready;
