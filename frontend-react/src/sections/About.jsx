import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import AmbientBeam from "../components/AmbientBeam.jsx";
import { containerVariants } from "../hooks/useRevealAnimation.js";

const SOLUTIONS = [
  {
    title: "AI-powered solutions",
    tags: [
      "Machine Learning",
      "Automation",
      "Data Analysis",
      "AI APIs",
      "Smart Systems",
    ],
    description:
      "AI-driven systems for automation, decision-making, data intelligence, and scalable ML-powered applications.",
    variant: "dark",
    wide: true,
  },
  {
    title: "Fintech",
    tags: ["Digital Payments", "Financial Dashboards"],
    description:
      "Secure, high-performance financial platforms including digital banking, payment gateways, and investment systems.",
    variant: "lime",
  },
  {
    title: "Blockchain & Web3",
    tags: ["Smart Contracts", "DApps", "Web3 Integration"],
    description:
      "Decentralized applications, smart contracts, and blockchain-based solutions built for transparency and scalability.",
    variant: "purple",
  },
  {
    title: "MVP",
    tags: ["Product Strategy", "Rapid Development", "Validation"],
    description:
      "Fast MVP development to validate ideas, attract investors, and launch products with real market impact.",
    variant: "light",
  },
  {
    title: "Mobile development",
    tags: ["React Native", "Cross-platform", "Native APIs"],
    description:
      "Cross-platform and native mobile apps with performant UIs, offline support, and seamless integrations.",
    variant: "dark",
  },
];

// Stagger variants for the headline words
const headlineContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const wordVariant = {
  hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Headline words — each animates independently
const HEADLINE_WORDS = ["I", "engineer", "digital", "products", "that scale."];

const About = React.memo(function About() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <Element name="about">
        <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 md:py-20 flex flex-col gap-y-16">
          {/* TOP GRID — intro + stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — staggered headline */}
            <div>
              <Reveal className="text-[11px] tracking-[0.2em] uppercase text-[#555]">
                01 / ABOUT
              </Reveal>

              {/* Word-by-word stagger */}
              <motion.div
                variants={headlineContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-6 flex flex-wrap gap-x-4 gap-y-1"
              >
                {HEADLINE_WORDS.map((word) => (
                  <motion.h2
                    key={word}
                    variants={wordVariant}
                    className="text-white font-black leading-[0.95] text-[clamp(48px,6vw,72px)]"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {word}
                  </motion.h2>
                ))}
              </motion.div>

              <Reveal className="mt-6 text-[15px] leading-relaxed text-[#888] max-w-sm">
                I build fast, scalable, production-ready applications with
                React, Next.js, Node.js, Express, and modern cloud tooling.
              </Reveal>
            </div>

            {/* Right — stats bento (filled up) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Years */}
              <Reveal
                className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 flex flex-col justify-between min-h-[160px]"
                style={{
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 -1px 0 0 rgba(0,0,0,0.4) inset, 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#555]">
                  Experience
                </span>
                <div>
                  <div
                    className="text-white font-black leading-none text-[clamp(48px,6vw,72px)]"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    3+
                  </div>
                  <div className="mt-1 text-[12px] text-[#555]">
                    Years building production apps
                  </div>
                </div>
              </Reveal>

              {/* Projects */}
              <Reveal
                className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 flex flex-col justify-between min-h-[160px]"
                style={{
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 -1px 0 0 rgba(0,0,0,0.4) inset, 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#555]">
                  Shipped
                </span>
                <div>
                  <div
                    className="text-white font-black leading-none text-[clamp(48px,6vw,72px)]"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    12+
                  </div>
                  <div className="mt-1 text-[12px] text-[#555]">
                    Projects across web & mobile
                  </div>
                </div>
              </Reveal>

              {/* Stack focus — spans full width */}
              <Reveal
                className="col-span-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
                style={{
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 -1px 0 0 rgba(0,0,0,0.4) inset, 0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#555]">
                  Stack Focus
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "PostgreSQL",
                    "Docker",
                    "AWS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] px-3 py-1 text-[12px] text-[#888]"
                      style={{
                        boxShadow:
                          "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 -1px 0 0 rgba(0,0,0,0.3) inset",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Status */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
                  </span>
                  <span className="text-[12px] text-[#aaa]">
                    Available for work
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* SOLUTIONS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {SOLUTIONS.map((sol, index) => (
              <Reveal
                key={sol.title}
                className={[
                  "rounded-2xl border p-7 lg:p-8 transition-all duration-300 flex flex-col justify-between",
                  // First card spans 2 cols and has fixed height for the AI visual
                  index === 0
                    ? "lg:col-span-2 min-h-[320px] lg:min-h-[360px]"
                    : "min-h-[280px] lg:min-h-[320px]",
                  sol.variant === "dark" && "bg-[#111] border-[#1e1e1e]",
                  sol.variant === "lime" &&
                    "bg-[#a3e635] border-[#a3e635] text-black",
                  sol.variant === "purple" &&
                    "bg-[#4c1d95]/70 border-[#5b21b6]/60",
                  sol.variant === "light" &&
                    "bg-[#f5f5f0] border-[#e5e5e0] text-black",
                ].join(" ")}
                style={{
                  boxShadow:
                    sol.variant === "dark"
                      ? "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 -1px 0 0 rgba(0,0,0,0.6) inset, 0 8px 32px rgba(0,0,0,0.4)"
                      : sol.variant === "purple"
                        ? "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 -1px 0 0 rgba(0,0,0,0.5) inset, 0 8px 32px rgba(0,0,0,0.4)"
                        : "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                {/* AI card — replace the geometric div with this */}
                {index === 0 && (
                  <div
                    className="absolute top-0 bottom-0 right-0 overflow-hidden rounded-2xl pointer-events-none w-[50%]"
                    aria-hidden
                  >
                    {/* AI robot image — right-aligned, fades out left */}
                    <div className="scale-150 size-full">
                      <img
                        src="/assets/images/ai-powered.png"
                        alt="AI  Image"
                        className="lg:flex hidden absolute left-20 top-10 h-full w-full object-contain size-[120%]"
                      />
                    </div>

                    {/* Extra gradient fade on the left so text stays readable */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to right, #111 35%, transparent 70%)",
                      }}
                    />
                  </div>
                )}
                <div className="relative z-10">
                  {/* Title — large and bold */}
                  <h3
                    className={[
                      "font-black leading-tight text-[clamp(22px,2.8vw,34px)]",
                      sol.variant === "lime" || sol.variant === "light"
                        ? "text-black"
                        : "text-white",
                    ].join(" ")}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {sol.title}
                  </h3>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sol.tags.map((tag) => (
                      <span
                        key={tag}
                        className={[
                          "rounded-full border px-3 py-1 text-[11px] font-medium",
                          sol.variant === "lime" || sol.variant === "light"
                            ? "border-black/20 text-black/80"
                            : "border-white/[0.12] text-white/70",
                        ].join(" ")}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description — pushed to bottom */}
                  <p
                    className={[
                      "relative z-10 mt-6 text-[14px] lg:text-[15px] leading-relaxed max-w-md xl:max-w-xl",
                      sol.variant === "lime" || sol.variant === "light"
                        ? "text-black/70"
                        : "text-[#888]",
                    ].join(" ")}
                  >
                    {sol.description}
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

export default About;
