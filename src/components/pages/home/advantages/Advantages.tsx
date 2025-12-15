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
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* ЛЕВАЯ колонка — STICKY */}
          <div className="md:sticky top-24 self-start w-full md:w-fit">
            <TitleComponent className="text-[#FFD06B]">
              Advantages
            </TitleComponent>
          </div>

          {/* ПРАВАЯ колонка — ВЕСЬ контент */}
          <div className="w-full flex flex-col md:items-end items-start">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 gap-x-10 md:w-fit w-full">
              {data.map((el, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:w-fit w-full"
                >
                  <div className="w-[8px] h-[8px] rounded-full bg-[#FFD06B]" />
                  <Title className="text-white">{el.desc}</Title>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden w-full max-w-[895px] md:h-[560px] h-[300px] mt-20">
              <Image fill className="object-cover" src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
