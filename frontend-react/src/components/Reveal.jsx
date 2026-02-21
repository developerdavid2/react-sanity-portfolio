import { useRef } from "react";
import { motion } from "framer-motion";
import { revealVariants } from "../hooks/useRevealAnimation.js";

export default function Reveal({
  children,
  className,
  delay = 0,
  as: As = motion.div,
  viewportMargin = "-100px",
  ...props
}) {
  const ref = useRef(null);

  return (
    <As
      ref={ref}
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      style={{ willChange: "transform, opacity, filter" }}
      onAnimationComplete={() => {
        if (ref.current) ref.current.style.willChange = "auto";
      }}
      {...props}
    >
      {children}
    </As>
  );
}

