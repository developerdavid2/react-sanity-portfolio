import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import AmbientBeam from "../components/AmbientBeam.jsx";
import Reveal from "../components/Reveal.jsx";
import { ScrollVelocity } from "../components/ScrollVelocity.jsx";
import { containerVariants } from "../hooks/useRevealAnimation.js";

const SKILL_ROWS = [
  {
    label: "Frontend Engineering",
    items:
      "React, Next.js, React Native, TypeScript, Tailwind, Framer Motion, GSAP. Responsive UIs, lazy loading, memoization, code-splitting, component systems.",
  },
  {
    label: "Backend & API",
    items:
      "Node.js, Express, tRPC, Convex, REST APIs, WebSockets. JWT, OAuth, caching. MongoDB, PostgreSQL, Prisma.",
  },
  {
    label: "Full-Stack Product",
    items:
      "End-to-end features, dashboards, admin panels, SaaS. E-commerce, real-time apps, data visualization. CI/CD, containerization, cloud deployments.",
  },
  {
    label: "DevOps & Tools",
    items:
      "Docker · GitHub Actions · CI/CD · Vercel · AWS (EC2/S3) · Cloudinary · Firebase · Git",
  },
];

const SCROLL_LINE_1 =
  "REACT ✦ NEXT.JS ✦ TYPESCRIPT ✦ TAILWIND ✦ NODE.JS ✦ EXPRESS ✦ tRPC ✦ MONGODB ✦ POSTGRESQL ✦ PRISMA ✦ DOCKER ✦ VERCEL ✦ AWS ✦ ";
const SCROLL_LINE_2 =
  "FRONTEND ✦ BACKEND ✦ WEB3 ✦ AI SOLUTIONS ✦ MOBILE ✦ MVP ✦ FINTECH ✦ FULL-STACK ✦ ";

const Skills = React.memo(function Skills() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      <AmbientBeam
        color="#717171"
        opacity={0.06}
        position={{ top: "30px", right: "50%" }}
        className="hidden sm:block translate-x-1/2"
      />
      <Element name="skills">
        <div
          className="absolute top-0 right-20 pointer-events-none select-none overflow-hidden flex items-center justify-center"
          aria-hidden
        >
          <div
            className="text-[clamp(80px,18vw,220px)] font-black text-transparent whitespace-nowrap"
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.04)",
              letterSpacing: "-0.04em",
            }}
          >
            STACK
          </div>
        </div>

        <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 py-14 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Reveal className="text-[11px] tracking-[0.2em] uppercase text-[#555]">
              03 / SKILLS
            </Reveal>

            <div className="mt-3">
              <Reveal
                as={motion.h2}
                className="text-white font-black leading-[0.9] text-[clamp(56px,9vw,120px)]"
                style={{ letterSpacing: "-0.04em" }}
              >
                TOOLS &
              </Reveal>
              <Reveal
                as={motion.h2}
                delay={0.1}
                className="text-white font-black leading-[0.9] text-[clamp(56px,9vw,120px)]"
                style={{ letterSpacing: "-0.04em" }}
              >
                EXPERTISE
              </Reveal>
            </div>

            <Reveal className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#888]">
              Fast, scalable, production-ready applications—from frontend and
              backend to DevOps and cloud.
            </Reveal>
          </motion.div>

          {/* Scroll velocity marquee */}
          <div className="relative overflow-x-hidden mt-12 py-4 opacity-50">
            <div className="absolute left-0 top-0 w-24 h-full pointer-events-none z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
            <div className="absolute right-0 top-0 w-24 h-full pointer-events-none z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
            <div className="rotate-[-0.5deg]">
              <div className="h-px bg-[#222] mb-2" />
              <ScrollVelocity
                texts={[SCROLL_LINE_1]}
                velocity={45}
                className="text-[#666] font-bold tracking-tight"
              />
              <div className="h-px bg-[#222] mt-2" />
            </div>
            <div className="relative overflow-x-hidden mt-4 rotate-[0.5deg]">
              <div className="h-px bg-[#333] mb-2" />
              <ScrollVelocity
                texts={[SCROLL_LINE_2]}
                velocity={-40}
                className="text-[#555] font-bold tracking-tight"
              />
              <div className="h-px bg-[#333] mt-2" />
            </div>
          </div>

          {/* Skill rows — full width, large editorial style */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 w-full"
          >
            {SKILL_ROWS.map((row, i) => (
              <Reveal key={row.label}>
                <div className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-8 md:py-10 border-b border-[#1a1a1a] w-full items-start transition-colors duration-300 hover:border-[#2a2a2a]">
                  {/* Left — index + label */}
                  <div className="flex items-start gap-5 md:gap-8">
                    {/* Row number */}
                    <span
                      className="text-[clamp(40px,5vw,72px)] font-black text-[#1e1e1e] leading-none select-none group-hover:text-[#252525] transition-colors duration-300 shrink-0"
                      style={{ letterSpacing: "-0.04em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Label */}
                    <h3
                      className="text-white font-bold text-[clamp(18px,2.5vw,28px)] leading-tight mt-1"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {row.label}
                    </h3>
                  </div>

                  {/* Right — description, full width of its column */}
                  <p className="text-[#888] text-[clamp(14px,1.4vw,17px)] leading-relaxed md:pt-1 md:max-w-none">
                    {row.items}
                  </p>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </Element>
    </section>
  );
});

export default Skills;
