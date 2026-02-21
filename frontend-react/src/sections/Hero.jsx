import { Element, Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import React from "react";

const Hero = React.memo(function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">
      <Element name="hero">
        {/* Background glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden
        >
          <div
            className="w-[min(80vw,40rem)] h-[min(80vw,40rem)] rounded-full blur-[10rem]"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Ghost outline text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <div
            className="text-[clamp(60px,14vw,250px)] font-black text-transparent whitespace-nowrap tracking-tighter"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.06)",
              letterSpacing: "-0.04em",
            }}
          >
            SOFTWARE ENGINEER
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-1 flex-col px-6 sm:px-12 md:px-16 lg:px-20 pt-[clamp(6rem,15vh,10rem)] pb-24">
          {/* THIS is the stagger container — motion.div with variants */}
          <motion.div
            className="flex flex-col max-w-5xl lg:max-w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1 — Availability pill */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-10">
              <span className="inline-flex items-center rounded-full border border-lime-400/40 px-3 py-1 text-xs text-lime-400">
                <span className="relative flex h-1.5 w-1.5 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
                </span>
                Available for work
              </span>
            </motion.div>

            {/* 2 — SOFTWARE */}
            <div className="overflow-hidden">
              <motion.h1
                variants={itemVariants}
                className="text-[#FFFFFF] font-black leading-[0.9] tracking-tight text-[clamp(3.5rem,12vw,11rem)] md:text-[clamp(4rem,12vw,15rem)]"
                style={{ letterSpacing: "-0.04em" }}
              >
                <span className="block">SOFTWARE</span>
              </motion.h1>
            </div>

            {/* 3 — ENGINEER (separate motion element so it staggers after SOFTWARE) */}
            <div className="overflow-hidden">
              <motion.h1
                variants={itemVariants}
                className="text-[#FFFFFF] font-black leading-[0.9] tracking-tight text-[clamp(3.5rem,12vw,11rem)] md:text-[clamp(4rem,12vw,15rem)]"
                style={{ letterSpacing: "-0.04em" }}
              >
                <span className="block">ENGINEER</span>
              </motion.h1>
            </div>

            {/* 4 — Name */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-[#aaa] text-base md:text-lg font-light tracking-wide"
            >
              Jacobs David
            </motion.p>

            {/* 5 — Descriptor */}
            <motion.p
              variants={itemVariants}
              className="mt-2 text-[#555] text-sm md:text-[15px] font-normal"
            >
              Building scalable digital products
            </motion.p>

            {/* 6 — CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-3"
            >
              <ScrollLink
                to="works"
                smooth
                offset={-60}
                duration={400}
                data-cursor="hover"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
              >
                View My Work
              </ScrollLink>
              <ScrollLink
                to="cta"
                smooth
                offset={-60}
                duration={400}
                data-cursor="hover"
                className="inline-flex items-center rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
              >
                Get In Touch
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>

        {/* 7 — Bottom meta row (outside stagger container, animates independently) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 border-t border-white/[0.06] px-6 sm:px-12 md:px-16 lg:px-20 py-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#444]">
            <span>© 2025 Jacobs David</span>
            <span className="hidden sm:inline w-px h-3 bg-[#444]" aria-hidden />
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/developerdavid2"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-[#666] transition-colors"
              >
                Github
              </a>
              <span className="text-[#333]">·</span>
              <a
                href="https://www.linkedin.com/in/thejacobsdavid/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-[#666] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#333]">·</span>
              <a
                href="https://x.com/thejacobscodes"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-[#666] transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
});

export default Hero;
