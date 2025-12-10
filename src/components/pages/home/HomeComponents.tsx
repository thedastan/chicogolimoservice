"use client";
import Hero from "./hero/Hero";
import Ready from "./ready/Ready";
import Works from "./works/Works";
import Reviews from "./reviews/Reviews";
import useAos from "@/components/ui/aos/useAos";

const HomeComponents = () => {
  useAos();
  return (
    <>
      <Hero />
      <Works />
      <Reviews />
      <Ready />
    </>
  );
};

export default HomeComponents;
