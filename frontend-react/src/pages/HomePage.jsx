import React from "react";
import {
  Hero,
  About,
  Works,
  Skills,
  Reviews,
  LogoSlider,
  CallToAction,
} from "../sections/index.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Works />
      <Skills />
      <Reviews />
      <LogoSlider />
      <CallToAction />
    </div>
  );
};

export default HomePage;
