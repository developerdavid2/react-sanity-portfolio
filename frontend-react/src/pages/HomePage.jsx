import React from "react";
import {
  Hero,
  About,
  Works,
  Skills,
  Reviews,
  CallToAction,
} from "../sections/index.jsx";
import SectionDivider from "../components/SectionDivider.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="relative">
        <div className="absolute -top-[10%] left-[20%] -rotate-[35deg] w-16 h-[100%] bg-gradient-to-b from-slate-200 via-slate-400 to-transparent blur-[100px] sm:blur-[120px] opacity-60 z-[50]"></div>
        <SectionDivider />
        <About />
      </div>
      <SectionDivider />
      <Works />
      <SectionDivider />
      <Skills />
      <SectionDivider />

      <div className="relative overflow-hidden">
        <div className="absolute -top-[20%] left-[50%] -rotate-[30deg] w-16 h-[100%] bg-gradient-to-b from-slate-200 via-slate-400 to-transparent blur-[100px] sm:blur-[120px] opacity-40 z-[50]"></div>
        <Reviews />
        <CallToAction />
      </div>
    </div>
  );
};

export default HomePage;
