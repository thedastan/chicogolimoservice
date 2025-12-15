"use client";
import Hero from "./hero/Hero";
import Ready from "./ready/Ready";
import Works from "./works/Works";
import Reviews from "./reviews/Reviews";
import useAos from "@/components/ui/aos/useAos";
import Cards from "./cards/Cards";
import About from "./about/About";
import Advantages from "./advantages/Advantages";
import Fleet from "./fleet/Fleet";
import Script from "next/script";

const HomeComponents = () => {
  useAos();
  return (
    <>
      <Script id="moovs-init" strategy="afterInteractive">
        {`
          window["moovsAPI"] = window["moovsAPI"] || [];
          window["moovsAPI"].push([
            "operator",
            "53812f42-d90c-11f0-a45a-d7b179997311"
          ]);
        `}
      </Script>

      <Script src="https://static.moovs.app" strategy="afterInteractive" />

      <Hero />
      <Fleet />
      <Cards />
      <Works />
      <Advantages />
      <About />
      <Reviews />
      <Ready />
      <div className="container ">
        <iframe
          className="w-full h-[1000px] mt-20"
          src="https://customer.moovs.app/chicago-illinois-limo-service/iframe"
          title="Moovs App"
        ></iframe>
      </div>
    </>
  );
};

export default HomeComponents;
