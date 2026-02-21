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

  const ProjectCard = ({ work, index }) => {
    const img = work?.imgUrl ? urlFor(work.imgUrl) : null;
    const tags = Array.isArray(work?.tags) ? work.tags : [];

    return (
      <div
        data-cursor="card"
        data-cursor-text="VIEW"
        className="group relative flex flex-col rounded-[20px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1"
        style={{
          boxShadow:
            "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 -1px 0 0 rgba(0,0,0,0.6) inset, 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        {/* Full-card image — fills entire card */}
        <div className="relative w-full h-[420px] lg:h-[460px] overflow-hidden bg-[#0d0d0d]">
          {img ? (
            <img
              src={img}
              alt={work?.title || "Project screenshot"}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-[130%] object-cover object-top transition-transform duration-700 ease-out group-hover:translate-y-[-15%]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-[#333] text-sm">
              No image
            </div>
          )}

          {/* Dark gradient at bottom so glass panel reads clearly */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            }}
            aria-hidden
          />

          {/* Index — top left */}
          <div className="absolute top-4 left-4 text-[11px] tracking-[0.2em] uppercase text-white/30">
            {formatIndex(index)}
          </div>

          {/* Arrow — top right, frosted pill */}
          <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-white/[0.14]">
            <FiArrowUpRight className="text-white/60 text-sm transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-xl m-4  rounded-[20px] border-t border-white/[0.08]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
              boxShadow:
                "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 -1px 0 0 rgba(0,0,0,0.4) inset",
            }}
          >
            {/* Tags */}
            {tags.length ? (
              <div className="mb-3 flex flex-wrap gap-2">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.12] bg-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/70 backdrop-blur-sm"
                    style={{
                      boxShadow:
                        "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 -1px 0 0 rgba(0,0,0,0.3) inset",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Title row */}
            <div className="flex items-start justify-between gap-3">
              <h3
                className="text-white font-bold leading-tight text-[clamp(18px,2vw,22px)]"
                style={{ letterSpacing: "-0.02em" }}
              >
                {work?.title}
              </h3>
            </div>

            {/* Description */}
            {work?.description ? (
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                {work.description}
              </p>
            ) : null}

            <div className="mt-auto pt-4 flex flex-wrap items-center gap-4 text-[12px] text-[#555] border-t border-white/[0.04]">
              {work?.projectLink ? (
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-1 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  View live <FiArrowUpRight className="text-[10px]" />
                </a>
              ) : null}
              {work?.codeLink ? (
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <FaGithub className="text-[#444] group-hover:text-white" />
                  Code <FiArrowUpRight className="text-[10px]" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      <Element name="works">
        <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 py-14 md:py-20">
          {/* Section header */}
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

          {/* Project grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
