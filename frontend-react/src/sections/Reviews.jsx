import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { client, urlFor } from "../client";
import Reveal from "../components/Reveal.jsx";
import { containerVariants } from "../hooks/useRevealAnimation.js";

const DECO_ICONS = [
  <svg
    key="1"
    className="w-8 h-8 text-white/60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
    />
  </svg>,
  <svg
    key="2"
    className="w-8 h-8 text-white/60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>,
  <svg
    key="3"
    className="w-8 h-8 text-white/60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
];

function getInitials(name) {
  if (!name || typeof name !== "string") return "?";
  return name
    .trim()
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

const Reviews = React.memo(function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch('*[_type == "reviews"]');
        setReviews(Array.isArray(data) ? data : []);
      } catch {
        setReviews([]);
      }
    };
    fetchData();
  }, []);

  const displayReviews = reviews.slice(0, 6);
  const hasReviews = displayReviews.length > 0;

  return (
    <section className="relative bg-[#0f0f0f] overflow-hidden">
      <div className="size-10 lg:size-32 rounded-full bg-gradient-to-br from-white to-zinc-900/15 absolute top-52 right-[10%] will-change-transform" />
      <Element name="reviews">
        <div className="relative z-10 px-5 sm:px-12 md:px-16 lg:px-20 py-14 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <Reveal className="text-[11px] tracking-[0.2em] uppercase text-[#555]">
              TESTIMONIALS
            </Reveal>
            <Reveal
              as={motion.h2}
              className="text-white font-black leading-[0.95] text-[clamp(40px,8vw,80px)] mt-2"
              style={{ letterSpacing: "-0.04em" }}
            >
              Feedback
            </Reveal>
            <Reveal
              as={motion.h2}
              delay={0.08}
              className="text-white font-black leading-[0.95] text-[clamp(40px,8vw,80px)]"
              style={{ letterSpacing: "-0.04em" }}
            >
              that inspires
            </Reveal>
            <Reveal className="mt-4 text-[15px] text-[#888] max-w-xl mx-auto">
              What clients and collaborators say about working together.
            </Reveal>
          </motion.div>

          {hasReviews ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {displayReviews.map((review, index) => (
                  <Reveal
                    key={review._id ?? index}
                    className={
                      index === 1 ? "md:mt-8" : index === 2 ? "md:mt-4" : ""
                    }
                  >
                    <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 shadow-lg min-h-[200px] flex flex-col">
                      <p className="text-[#ccc] text-[15px] leading-relaxed flex-1">
                        &ldquo;{review.feedback || "No feedback provided."}
                        &rdquo;
                      </p>
                      <div className="mt-5 flex items-center gap-3">
                        {review.imageUrl ? (
                          <img
                            src={urlFor(review.imageUrl)}
                            alt=""
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-full object-cover bg-[#222]"
                          />
                        ) : (
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium text-white bg-[#333]"
                            style={{
                              backgroundColor: [
                                "#c2410c",
                                "#0369a1",
                                "#15803d",
                              ][index % 3],
                            }}
                          >
                            {getInitials(review.name)}
                          </div>
                        )}
                        <div>
                          <div className="text-white font-medium text-sm">
                            {review.name || "Anonymous"}
                          </div>
                          <div className="text-[#666] text-xs">
                            {review.company || "Client"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="hidden md:flex justify-center gap-4 mt-8">
                {DECO_ICONS.map((icon, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-2xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center"
                    aria-hidden
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-12 text-[#555] text-sm">
              Testimonials will appear here once added.
            </div>
          )}
        </div>
      </Element>
    </section>
  );
});

export default Reviews;
