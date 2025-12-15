// import logo from "@/assets/svg/logo.svg";
import logo from "@/assets/images/logo_about.png";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { navbar } from "@/lib/navbar";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  bg-white">
      <div className="container">
        <div className=" md:py-0 py-10 border-b flex md:flex-row flex-col">
          <div className="w-full max-w-[63px] md:max-w-[263px] md:border-r border-none">
            <Image width={126} height={125} src={logo} alt="logo" />
          </div>

          <div className="md:p-20 p-0 flex md:flex-row flex-col md:gap-20 gap-6 md:mt-0 mt-20 md:border-l">
            <div className="">
              <Title className="!text-[16px]">Sections</Title>
              <div className="flex flex-col gap-2 md:mt-4">
                {navbar.map((el, index) => (
                  <Link
                    key={index}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    href={el.href}
                    className="text-[#747474] text-[12px] font-[400]"
                  >
                    {el.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <Title className="!text-[16px]">Conact us</Title>
              <div className="flex flex-col gap-2 md:mt-4">
                <Link
                  style={{ fontFamily: "Inter, sans-serif" }}
                  href="/"
                  className="text-[#747474] text-[12px] font-[400]"
                >
                  206 341-2631
                </Link>
              </div>
            </div>

            <div className="">
              <Title className="!text-[16px]">Documents</Title>
              <div className="flex flex-col gap-2 md:mt-4">
                <Link
                  style={{ fontFamily: "Inter, sans-serif" }}
                  href="/"
                  className="text-[#747474] text-[12px] font-[400]"
                >
                  Privacy Policy
                </Link>
                <Link
                  style={{ fontFamily: "Inter, sans-serif" }}
                  href="/"
                  className="text-[#747474] text-[12px] font-[400]"
                >
                  Public offer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Description className="text-[#747474] text-center py-4 border-b">
          © 2025 CICL, All Rights Reserved
        </Description>
        <Description className="text-[#747474] text-center py-4">
          Разработал ИП Мукеев Дастан Ракымович
        </Description>
      </div>
    </footer>
  );
};

export default Footer;
