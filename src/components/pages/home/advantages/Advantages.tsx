import { Description } from "@/components/ui/text/Description";
import { Title } from "@/components/ui/text/Title";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import img from "@/assets/images/Advantages.png";
import Image from "next/image";

const Advantages = () => {
  const data = [
    {
      desc: "Punctuality",
    },
    {
      desc: "Privacy & Discretion",
    },
    {
      desc: "Professional Chauffeurs",
    },
    {
      desc: "Fixed Prices",
    },
    {
      desc: "Premium Comfort",
    },
    {
      desc: "24/7 Dedicated Dispatch",
    },
  ];
  return (
    <section id="advantages" className="bg-[#000000] pt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
          <TitleComponent className="text-[#FFD06B] md:w-[500px] w-full">
            Why Choose Chicago Illinois Limo Service
          </TitleComponent>

          <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 gap-x-10">
            {data.map((el, index) => (
              <div className="flex items-center gap-2">
                <div className="w-[8px] h-[8px] rounded-full bg-[#FFD06B]" />
                <Title className="text-white" key={index}>
                  {el.desc}
                </Title>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex items-end justify-end md:mt-20 mt-10">
          <div className=" relative overflow-hidden w-full max-w-[855px] md:h-[570px] h-[300px]">
            <Image
              data-aos="fade-up"
              fill
              objectFit="cover"
              src={img}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
