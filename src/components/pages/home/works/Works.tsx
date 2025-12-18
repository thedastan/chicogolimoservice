import { TitleComponent } from "@/components/ui/text/TitleComponent";
import img1 from "@/assets/images/work1.png";
import img2 from "@/assets/images/work2.png";
import img3 from "@/assets/images/work3.png";
import Image from "next/image";
import { Description } from "@/components/ui/text/Description";
import Button from "@/components/ui/button/Button";
import Link from "next/link";

const Works = () => {
  const data = [
    {
      img: img1,
      title: "Choose your ride",
    },
    {
      img: img2,
      title: "Set Pickup Details",
    },
    {
      img: img3,
      title: "Confirm & Ride",
    },
  ];
  return (
    <section id="works" className="py-20">
      <div className="container flex flex-col justify-center items-center gap-20">
        <TitleComponent className="text-start w-full">
          How it works
        </TitleComponent>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 w-full">
          {data.map((el, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex flex-col  gap-4"
            >
              <Description className="!text-[24px]">
                {index + 1}. {el.title}
              </Description>
              <div className=" relative overflow-hidden w-full h-[210px]">
                <Image
                  className="scale-100 hover:scale-110 transition-all duration-700"
                  fill
                  objectFit="cover"
                  src={el.img}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>

        <Link
          target="_blank"
          href="https://customer.moovs.app/chicago-illinois-limo-service/new/info"
        >
          <Button className="bg-black text-white">Book Online</Button>
        </Link>
      </div>
    </section>
  );
};

export default Works;
