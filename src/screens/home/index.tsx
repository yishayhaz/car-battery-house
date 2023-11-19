import { component$ } from "@builder.io/qwik";
import { HeroSection, BenefitsSection } from "./parts";
import { Header } from "~/components/header";
import { Callme } from "~/components/callme";

export const HomeScreen = component$(() => {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <Callme />
    </>
  );
});
