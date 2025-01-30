import React from "react";
import Slider from "react-infinite-logo-slider";
import { logoSlides } from "../constants";

const LogoCarousel = () => {
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={"#fff"}>
      {logoSlides.map((logo, index) => (
        <Slider.Slide key={index}>
          <img src={logo.src} alt={logo.alt} className="w-36" />
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default LogoCarousel;
