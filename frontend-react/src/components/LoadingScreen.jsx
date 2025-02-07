import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp.jsx";

const LoadingScreen = () => {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {/* LOGO DECOR */}

        <div className="relative flex justify-center items-center h-20 w-20 md:h-40 md:w-40 rounded-full work-container-glass">
          <img
            src="/assets/images/portfolio-logo.png"
            alt="logo"
            className="lg:w-[6rem] w-[3rem] h-auto z-10 grayscale contrast-100 hover:grayscale-0 transition-all duration-300 animate-pulse"
          />
        </div>
      </motion.div>
    </LampContainer>
  );
};

export default LoadingScreen;
