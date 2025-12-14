import logo from "@/assets/svg/logo.svg";
import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { document, navbar, social } from "@/lib/navbar";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  bg-white">
      <div className="container">
        <div className=" md:py-0 py-10 border-b flex md:flex-row flex-col">
          <div className="w-full max-w-[263px] md:border-r border-none  md:py-20 py-0">
            <Image width={126} height={125} src={logo} alt="logo" />
          </div>

          <div className="md:p-20 p-0 flex md:flex-row flex-col gap-20 md:mt-0 mt-20">
            <div className="">
              <Title>Sections</Title>
              <div className="flex flex-col gap-2 mt-8">
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
              <Title>Social</Title>
              <div className="flex flex-col gap-2 mt-8">
                {social.map((el, index) => (
                  <Link
                    key={index}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    href={el.link}
                    target={"_blank"}
                    className="text-[#747474] text-[12px] font-[400]"
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <Title>Documents</Title>
              <div className="flex flex-col gap-2 mt-8">
                {document.map((el, index) => (
                  <Link
                    key={index}
                    target={"_blank"}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    href={el.link}
                    className="text-[#747474] text-[12px] font-[400]"
                  >
                    {el.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Description className="text-[#747474] text-center py-4">
          © 2025 CICL, All Rights Reserved
        </Description>
      </div>
    </footer>
  );
};

export default Footer;
