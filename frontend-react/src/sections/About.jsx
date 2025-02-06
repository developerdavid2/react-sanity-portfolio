import { Element } from "react-scroll";
import { motion } from "framer-motion";
import BentoBox from "../components/BentoBox";
import { useState, useEffect } from "react";
import { client } from "../client";
import CircleComponent from "../components/CircleComponent.jsx";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "abouts"]';
      const data = await client.fetch(query);
      setAbouts(data); // Save fetched data in state
    };
    fetchData();
  }, []);

  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <section className="w-full relative flex items-center justify-center py-56 overflow-hidden flex-col text-center max-sm:py-10">
      <Element name="about">
        {/* Background SVG Container */}
        <div className="flex items-center justify-center z-0">
          <img
            className="w-full h-[40%] absolute opacity-30 gradient-mask-r-70-d"
            src="/assets/images/backgrounds/about-me-bg.svg"
            alt="About-bg"
          />
          <CircleComponent />
        </div>

        {/* Content Container */}
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={transition}
          initial="hidden"
          className="relative z-10"
        >
          <div className="flex flex-col justify-center items-center text-center">
            {/* About Me Title */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.gray.500)_86%,_theme(colors.gray.300)_90%,_theme(colors.gray.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium bg-dark-400/30 backdrop-blur-[5rem] px-2 py-1 w-fit text-center"
            >
              About Me
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              className="text-2xl text-light-700 md:text-5xl font-bold bg-clip-text mt-4"
            >
              Design. Develop. Deliver.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              className="text-base md:text-lg mt-4 text-gray-400 md:max-w-xl mx-auto text-center"
            >
              A versatile developer passionate about building modern, scalable,
              and visually stunning applications.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="flex h-full w-full items-center justify-center pt-16">
            <div className="lg:grid flex flex-col gap-4 p-2 lg:grid-cols-8 lg:grid-rows-8 w-full lg:h-[600px]">
              {abouts.map((about, index) => (
                <BentoBox
                  key={about.title + index}
                  about={about}
                  className={
                    index === 0
                      ? "lg:col-span-3 lg:row-span-9 bg-dark-gradient-2"
                      : index === 1
                        ? "lg:col-span-3 lg:row-span-4"
                        : index === 2
                          ? "lg:col-span-2 lg:row-span-9 bg-dark-400/30"
                          : "lg:col-span-3 lg:row-span-5 bg-dark-400/30"
                  }
                  blur={index < 1} // Blur only for the first two
                  isBgImage={index >= 1} // Background images for 3rd and 4th
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default About;
