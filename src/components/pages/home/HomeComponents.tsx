"use client";
import Hero from "./hero/Hero";
import Ready from "./ready/Ready";
import Works from "./works/Works";
import Reviews from "./reviews/Reviews";
import useAos from "@/components/ui/aos/useAos";
import Cards from "./cards/Cards";

const HomeComponents = () => {
  useAos();
  return (
    <>
      <Hero />
      <Works />
      <Cards />
      <Reviews />
      <Ready />
    </>
  );
};

export default HomeComponents;
