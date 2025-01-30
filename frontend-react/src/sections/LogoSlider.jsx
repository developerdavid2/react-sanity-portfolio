import React from "react";
import LogoCarousel from "../components/LogoCarousel";

const LogoSlider = () => {
  return (
    <section className="pt-10 bg-gradient-to-b from-transparent to-transparent relative overflow-hidden">
      {/* Radial Gradient Line */}
      <div
        className="bg-[radial-gradient(ellipse_at_center,_#CAC6DD_0%,_rgba(14,12,21,0)_40%)] 
          h-px absolute inset-x-0 top-0 z-[1] pointer-events-none"
      />
      {/* Blurred Radial Gradient 1 */}
      <div className="md:h-40 md:w-40 h-20 w-20 blur-[8rem] md:blur-[5rem] bg-[#FFFFFF] absolute top-[-30%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 opacity-50" />
      {/* Blurred Radial Gradient 2 */}
      <div className="md:h-52 md:w-52 h-20 w-20 blur-[7rem] md:blur-[6rem] bg-[radial-gradient(27.3%_35.9%_at_50%_50%,#9fa8da_0%,#5c6bc0_100%)] absolute top-[-30%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1 opacity-50" />

      {/* Content Container */}
      <div className="container relative overflow-hidden text-center flex flex-col items-center">
        <h5 className="headline-glow text-base max-sm:leading-none md:h5 mb-7 pt-20">
          Trusted by thousands across the world
        </h5>
        {/* Logo Carousel */}
        <div className="pb-20 max-md:pb-15 relative z-20 mask-reach-[40%_150%] mask-radial w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
