// CallToAction.jsx
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { client } from "../client";
import AmbientBeam from "../components/AmbientBeam.jsx";
import Reveal from "../components/Reveal.jsx";
import { containerVariants } from "../hooks/useRevealAnimation.js";

const CallToAction = React.memo(function CallToAction() {
  const email = "hellojacobsdavid@gmail.com";
  const [resumeUrl, setResumeUrl] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "resume"][0]{file{asset->{url}}}`)
      .then((data) => {
        if (data?.file?.asset?.url) {
          setResumeUrl(data.file.asset.url);
        }
      })
      .catch((error) => console.error("Error fetching resume:", error));
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0f0f0f] overflow-hidden flex items-center justify-center">
      <Element name="cta">
        <div className="relative z-10 w-full px-5 sm:px-12 md:px-16 lg:px-20 py-14 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center"
          >
            <Reveal className="text-[11px] tracking-[0.2em] uppercase text-[#555]">
              05 / CONTACT
            </Reveal>

            <div className="mt-4">
              <Reveal
                as={motion.h2}
                className="text-white font-black leading-[0.9] text-[clamp(64px,10vw,160px)]"
                style={{ letterSpacing: "-0.04em" }}
              >
                LET&apos;S
              </Reveal>
              <Reveal
                as={motion.h2}
                delay={0.1}
                className="font-black leading-[0.9] text-[clamp(64px,10vw,160px)]"
                style={{ letterSpacing: "-0.04em", color: "#a3e635" }}
              >
                WORK
              </Reveal>
            </div>

            <Reveal className="mt-6 text-[16px] text-[#666]">
              Have a project in mind? I&apos;d love to hear about it.
            </Reveal>

            <Reveal className="mt-10">
              <a
                href={`mailto:${email}`}
                data-cursor="hover"
                className="inline-block text-white text-[clamp(18px,3vw,32px)] underline underline-offset-8 decoration-white/20 transition-all hover:decoration-white/60 hover:[text-shadow:0_0_24px_rgba(255,255,255,0.18)]"
              >
                {email}
              </a>
            </Reveal>

            {/* CTA Buttons — neumorphic bezel style */}
            <Reveal className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <a
                href={`mailto:${email}`}
                data-cursor="hover"
                className="
                  inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                  text-[13px] font-medium text-white tracking-wide
                  bg-[#141414]
                  border border-white/[0.06]
                  shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_-1px_0_0_rgba(0,0,0,0.5)_inset,0_4px_16px_rgba(0,0,0,0.4)]
                  hover:shadow-[0_1px_0_0_rgba(255,255,255,0.07)_inset,0_-1px_0_0_rgba(0,0,0,0.5)_inset,0_4px_20px_rgba(0,0,0,0.5)]
                  hover:bg-[#181818]
                  transition-all duration-300
                "
              >
                Start a Project
              </a>

              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="
                    inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                    text-[13px] font-medium text-[#888] tracking-wide
                    bg-transparent
                    border border-white/[0.06]
                    shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_-1px_0_0_rgba(0,0,0,0.4)_inset,0_2px_8px_rgba(0,0,0,0.3)]
                    hover:text-white hover:border-white/[0.1]
                    hover:shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_-1px_0_0_rgba(0,0,0,0.4)_inset,0_4px_16px_rgba(0,0,0,0.4)]
                    transition-all duration-300
                  "
                >
                  Download Résumé ↓
                </a>
              )}
            </Reveal>

            {/* Social links */}
            <Reveal className="mt-10 flex items-center justify-center gap-4 text-[12px] text-[#444]">
              <a
                href="https://github.com/developerdavid2"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-[#888] transition-colors duration-200"
              >
                Github
              </a>
              <span className="text-[#2a2a2a]">·</span>
              <a
                href="https://www.linkedin.com/in/thejacobsdavid/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-[#888] transition-colors duration-200"
              >
                LinkedIn
              </a>
              <span className="text-[#2a2a2a]">·</span>
              <a
                href="https://x.com/thejacobscodes"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="hover:text-[#888] transition-colors duration-200"
              >
                X
              </a>
            </Reveal>
          </motion.div>
        </div>
      </Element>
    </section>
  );
});

export default CallToAction;
