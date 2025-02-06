import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { client, urlFor } from "../client";
import CircleComponent from "../components/CircleComponent.jsx";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const query = "*[_type == 'skills'] | order(order asc)";
      const data = await client.fetch(query);
      setSkills(data);
    };
    fetchSkills();
  }, []);
  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  return (
    <section className="py-16 md:py-40  relative">
      <Element name="skills">
        <div className="blur-[10rem] h-40 w-40 bg-primary-300/50 absolute top-[10%] left-1/2 -translate-x-1/2 rounded-full -z-40" />
        <div className="flex items-center justify-center z-0 mt-10">
          <img
            className="w-full h-[40%] absolute mask-radial mask-shape-ellipse mask-reach-closest-corner"
            src="/assets/images/backgrounds/about-back.png"
            alt="About-bg"
          />
          <CircleComponent />
        </div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={transition}
          initial="hidden"
        >
          <div className="container mx-auto px-4 md:px-8 lg:max-w-screen-lg">
            <div className="flex flex-col justify-center items-center text-center">
              {/* Badge */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                className="[background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.gray.500)_86%,_theme(colors.gray.300)_90%,_theme(colors.gray.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent animate-border text-base capitalize inline-flex justify-center whitespace-nowrap font-medium bg-dark-400/30 backdrop-blur-[5rem] px-2 py-1 w-fit text-center"
              >
                My Skills
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                className="text-2xl text-light-700 md:text-5xl font-bold bg-clip-text mt-4"
              >
                Stacked for Success
              </motion.h2>

              {/* Caption */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                className="text-base md:text-lg mt-4 text-gray-400 md:max-w-xl mx-auto text-center"
              >
                The tools and technologies that fuel my development journey.
              </motion.p>
            </div>

            {/* Skills Grid */}
            <div className="mt-12 mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                className="grid max-sm:grid-cols-3 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 lg:gap-6 place-items-center justify-items-center w-full"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="text-center cursor-pointer transition-all flex flex-col items-center group"
                  >
                    <div className="p-4 size-[90px] max-sm:size-[60px] rounded-full flex items-center justify-center skill-glass-container group-hover:skill-hover-bg shadow-md">
                      <img
                        src={urlFor(skill.icon)}
                        alt={skill.name}
                        className="size-[50px] max-sm:size-[30px]"
                      />
                    </div>
                    <p className="text-base text-center sm:text-lg font-medium text-gray-400 group-hover:text-light-700 mt-4">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Skills;
