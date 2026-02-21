import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { client, urlFor } from "../client";
import Reveal from "../components/Reveal.jsx";
import { containerVariants } from "../hooks/useRevealAnimation.js";

const Works = React.memo(function Works() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "works"]';
      const data = await client.fetch(query);
      setWorks(data);
    };
    fetchData();
  }, []);

  const formatIndex = (i) => String(i + 1).padStart(2, "0");

  const IMAGE_HEIGHT = 320;

  const ProjectCard = ({ work, index }) => {
    const img = work?.imgUrl ? urlFor(work.imgUrl) : null;
    const tags = Array.isArray(work?.tags) ? work.tags : [];

    return (
      <div
        data-cursor="card"
        data-cursor-text="VIEW"
        className="group flex flex-col rounded-[20px] bg-[#111] border border-[#1a1a1a] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:border-[#2a2a2a]"
      >
        {/* Fixed-height image container: image scrolls on hover */}
        <div
          className="relative w-full overflow-hidden bg-[#0d0d0d]"
          style={{ height: IMAGE_HEIGHT }}
        >
          {img ? (
            <>
              <img
                src={img}
                alt={work?.title || "Project screenshot"}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-[140%] min-h-full object-cover object-top transition-transform duration-500 ease-out group-hover:translate-y-[-20%]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"
                aria-hidden
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#333] text-sm">
              No image
            </div>
          )}
          <div className="absolute top-3 left-3 text-[11px] tracking-[0.2em] uppercase text-[#333]">
            {formatIndex(index)}
          </div>
          <div className="absolute top-3 right-3">
            <FiArrowUpRight className="text-white/70 transition-transform duration-300 group-hover:rotate-45" />
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <h3
            className="text-white font-semibold tracking-tight text-[clamp(18px,2vw,24px)]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {work?.title}
          </h3>

          {tags.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#1a1a1a] px-2.5 py-0.5 text-[11px] text-[#666]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {work?.description ? (
            <p className="mt-2 text-[13px] leading-relaxed text-[#888]">
              {work.description}
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-4 text-[12px] text-[#555]">
            {work?.projectLink ? (
              <a
                href={work.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-white transition-colors"
              >
                View live <span aria-hidden>↗</span>
              </a>
            ) : null}
            {work?.codeLink ? (
              <a
                href={work.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaGithub className="text-[#444]" />
                Code <span aria-hidden>↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      <Element name="works">
        <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 py-14 md:py-20">
          <div className="relative">
            <Reveal className="absolute right-0 top-0 text-[11px] tracking-[0.2em] uppercase text-[#555] hidden sm:block">
              02
            </Reveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Reveal className="text-[11px] tracking-[0.2em] uppercase text-[#555] sm:hidden">
                02 / WORK
              </Reveal>

              <div className="mt-2">
                <Reveal
                  as={motion.h2}
                  className="text-white font-black leading-[0.9] text-[clamp(64px,10vw,140px)]"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  SELECTED
                </Reveal>
                <Reveal
                  as={motion.h2}
                  delay={0.1}
                  className="text-white font-black leading-[0.9] text-[clamp(64px,10vw,140px)]"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  WORK
                </Reveal>
              </div>

              <Reveal className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#888]">
                A curated selection of projects built with restraint, systems
                thinking, and performance in mind.
              </Reveal>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {works.map((work, idx) => (
              <Reveal key={work?._id ?? idx}>
                <ProjectCard work={work} index={idx} />
              </Reveal>
            ))}
          </motion.div>
        </div>
      </Element>
    </section>
  );
});

export default Works;
