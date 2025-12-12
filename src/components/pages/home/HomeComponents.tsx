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

const HomeComponents = () => {
  useAos();
  return (
    <>
      <Hero />
      <Fleet />
      <Cards />
      <Works />
      <Advantages />
      <About />
      <Reviews />
      <Ready />
    </>
  );
};

export default HomeComponents;
