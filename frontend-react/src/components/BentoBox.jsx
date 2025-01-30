import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";

const BentoBox = ({ about, className, blur, isBgImage }) => {
  const blurClass = blur
    ? "blur-[6rem] h-28 w-28 bg-light-700 rounded-full absolute top-4 left-1/2"
    : "";
  return (
    <motion.div
      className={`p-1.5 rounded-3xl border border-gray-400/20 lg:h-auto ${className}`}>
      <div
        className={`rounded-3xl shadow-2xl flex flex-col items-center p-8 relative overflow-hidden border border-gray-400/20 h-[400px] lg:h-full `}>
        {/* Blur Effect */}

        {blur && <div className={blurClass} />}

        {/* Background Image */}
        {isBgImage && (
          <div
            className="absolute inset-0 bg-cover bg-center mask-radial"
            style={{ backgroundImage: `url(${urlFor(about.imgUrl)})` }}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />

        <div className="z-10 text-start text-light-700">
          {/* Render <img> only if it's NOT a background image */}
          {!isBgImage && (
            <img
              src={urlFor(about.imgUrl)}
              alt={about.title}
              className="size-fit absolute top-1/2 right-0 lg:top-[30%] lg:-right-1/4 mb-4 rounded-3xl gradient-mask-bl-10 shadow-dark-200"
            />
          )}
          <h3 className="text-[22px] font-semibold ">{about.title}</h3>
          <p className="text-sm text-gray-400 mt-3">{about.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BentoBox;
