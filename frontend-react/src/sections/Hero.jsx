import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Spotlight } from "../components/ui/spotlight-new.jsx";

const Hero = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  const blurVariants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  return (
    <section className="relative flex justify-center items-center lg:py-28 py-20 overflow-hidden border-b border-slate-800 rounded-b-[100px]">
      <Element name="hero">
        <div className="container flex flex-col relative z-2 max-sm:px-0 mx-auto">
          {/* Decorations */}
          {/* Other content and decorations */}
          <div className="blur-[8rem] h-28 w-28 bg-primary-300 absolute top-4 left-1/4" />
          {/* Shadow reflections */}
          <div className="h-32 w-32 md:bg-dark-200/35 md:shadow-lg md:shadow-black/20 z-10 absolute top-3 right-[50%] blur-[2rem]" />
          <div className="h-32 w-32 md:bg-dark-200/35 md:shadow-lg shadow-black/20 z-10 absolute top-3 right-[28%] blur-[2rem] max-sm:hidden" />

          {/* Glass Morphism */}
          <div className="h-6 w-6 md:h-12 md:w-12 bg-accent-200 blur-[1px] rounded-full absolute top-2 right-[18%]" />
          <div className="h-6 w-6 md:h-16 md:w-16 rounded-full bg-gray-800/10 shadow-lg shadow-black/20 backdrop-blur-sm border border-gray-300/30 z-10 absolute -top-2 right-[14%]" />

          {/* Content */}
          <div>
            <div className="px-5 sm:px-12 flex flex-col items-center relative z-2 md:max-w-full text-center">
              <div>
                <p className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.gray.500)_86%,_theme(colors.gray.300)_90%,_theme(colors.gray.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium bg-dark-400/30 backdrop-blur-[5rem] px-2 py-1">
                  Hello, I&apos;m
                </p>
              </div>
              <motion.div>
                <h1 className="relative h4 sm:h2 md:h1 lg:h-num text-transparent bg-clip-text text-shadow-bevel">
                  Jacobs David
                </h1>
              </motion.div>
              {/* Grid Container */}
              <div className="w-full relative grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-[auto_auto] max-md:grid-rows-[auto] gap-8 pt-10">
                {/* Column/Row 1 - Left Side */}
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={transition}
                  variants={blurVariants}
                  className="hidden lg:flex lg:flex-col lg:items-center gap-8 justify-center"
                >
                  <div className="flex flex-col px-4 py-5 items-start rounded-xl shadow-lg bg-dark-400/30 border animate-border border-gray-300/30 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-gray-100">
                    <p>A Fullstack MERN</p>
                    <h4 className="h4">Developer</h4>
                  </div>

                  <div className="flex flex-col p-4 items-start rounded-xl shadow-lg bg-dark-400/30 border animate-border border-gray-300/30 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-gray-100 bg-gradient-to-r from-slate-800 to-slate-700">
                    <p>DESIGNER</p>
                    <p>FREELANCER</p>
                  </div>
                </motion.div>

                {/* Column/Row 2 - Middle Section */}
                <motion.div
                  variants={blurVariants}
                  transition={transition}
                  className="relative flex items-center justify-center flex-col"
                >
                  {/* Glowing Pulsating Ring */}
                  <motion.div
                    variants={scaleVariants}
                    className="h-10 w-16 rotate-[180deg] rounded-[50%] scale-x-[1.5] bg-transparent ring-8 ring-light-700 shadow-[0_0_20px_4px_#F4F6F8,0_0_20px_#F4F6F8_inset] animate-pulse absolute left-1/2 -translate-x-1/2 top-0 z-30 max-sm:h-6 max-sm:w-10"
                  />

                  {/* Faded circular Background Decoration */}
                  <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className="absolute top-[40%] w-[600px] h-[600px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-50 max-sm:size-[400px]"
                  />
                  <div className="gradient-mask-b-40 mask-linear mask-dir-to-b mask-via-40 relative flex justify-center z-40 max-sm:gradient-mask-b-50 overflow-visible w-[700px] h-[700px] max-sm:h-[600px]">
                    <img
                      src="/assets/images/david-hero-shot.png"
                      className="w-[120%] h-[120%] object-cover transition-opacity duration-300 p-[8rem_8rem_0_8rem] max-sm:p-[12rem] max-sm:pt-0 max-sm:absolute max-sm:top-[20%]"
                      alt="HeroImage"
                    />
                  </div>
                </motion.div>

                {/* Third Column */}
                <motion.div
                  variants={scaleVariants}
                  whileInView={scaleVariants.whileInView}
                  transition={transition}
                  className="max-md:pb-15 flex flex-wrap items-start lg:items-center gap-8 lg:gap-20 justify-center lg:flex-col max-md:flex-row"
                >
                  <div className="p-4 max-h-[80px] max-w-[80px] flex-center rounded-full shadow-lg bg-dark-400/30 border border-gray-300/30 max-sm:max-h-[60px] max-sm:max-w-[60px]">
                    <motion.img
                      src="/assets/images/skills-stack/react.png"
                      alt="React"
                    />
                  </div>
                  <div className="p-4 max-h-[90px] max-w-[90px] flex-center rounded-full shadow-lg bg-dark-400/30 border border-gray-300/30 max-sm:max-h-[60px] max-sm:max-w-[60px]">
                    <img
                      src="/assets/images/skills-stack/redux.png"
                      alt="Redux"
                    />
                  </div>
                  <div className="p-4 max-h-[70px] max-w-[70px] flex-center rounded-full shadow-lg bg-dark-400/30 border border-gray-300/30 max-sm:max-h-[60px] max-sm:max-w-[60px]">
                    <img
                      src="/assets/images/skills-stack/nodejs.png"
                      alt="NodeJS"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
