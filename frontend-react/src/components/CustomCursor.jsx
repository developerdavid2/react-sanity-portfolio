import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DOT_SIZE = 6;
const RING_SIZE = 32;

export default function CustomCursor() {
  const [label, setLabel] = useState("");
  const labelTimeoutRef = useRef(null);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringTargetX = useMotionValue(-100);
  const ringTargetY = useMotionValue(-100);

  const ringX = useSpring(ringTargetX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(ringTargetY, { stiffness: 150, damping: 20 });

  const dotOpacity = useMotionValue(1);
  const ringOpacity = useMotionValue(1);
  const ringScale = useMotionValue(1);

  const ringStyle = useMemo(
    () => ({
      x: ringX,
      y: ringY,
      opacity: ringOpacity,
      scale: ringScale,
    }),
    [ringOpacity, ringScale, ringX, ringY],
  );

  useEffect(() => {
    const setPos = (e) => {
      dotX.set(e.clientX - DOT_SIZE / 2);
      dotY.set(e.clientY - DOT_SIZE / 2);
      ringTargetX.set(e.clientX - RING_SIZE / 2);
      ringTargetY.set(e.clientY - RING_SIZE / 2);
    };

    const show = () => {
      ringOpacity.set(1);
      dotOpacity.set(1);
    };

    const hide = () => {
      ringOpacity.set(0);
      dotOpacity.set(0);
      setLabel("");
    };

    const setHover = (target) => {
      const cursorType = target?.getAttribute?.("data-cursor");
      const cursorText = target?.getAttribute?.("data-cursor-text") || "";

      if (cursorType === "hover") {
        ringScale.set(1.25); // 32px -> ~40px
        ringOpacity.set(0.6);
        dotOpacity.set(0);
        setLabel(cursorText);
      } else if (cursorType === "card") {
        ringScale.set(2.5);
        ringOpacity.set(0.6);
        dotOpacity.set(0);
        setLabel(cursorText || "VIEW");
      } else {
        ringScale.set(1);
        ringOpacity.set(1);
        dotOpacity.set(1);
        setLabel("");
      }
    };

    const handleOver = (e) => {
      const el = e.target?.closest?.("[data-cursor]");
      setHover(el);
    };

    const handleOut = (e) => {
      // When leaving an element, check if we entered another interactive one.
      const next = e.relatedTarget?.closest?.("[data-cursor]");
      setHover(next);
    };

    const handleDown = () => {
      ringScale.set(0.8);
      if (labelTimeoutRef.current) clearTimeout(labelTimeoutRef.current);
      labelTimeoutRef.current = setTimeout(() => ringScale.set(1), 120);
    };

    window.addEventListener("mousemove", setPos, { passive: true });
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseover", handleOver, true);
    document.addEventListener("mouseout", handleOut, true);

    return () => {
      window.removeEventListener("mousemove", setPos);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseover", handleOver, true);
      document.removeEventListener("mouseout", handleOut, true);
      if (labelTimeoutRef.current) clearTimeout(labelTimeoutRef.current);
    };
  }, [dotOpacity, dotX, dotY, ringOpacity, ringScale, ringTargetX, ringTargetY]);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9998] max-md:hidden">
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full bg-white"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          x: dotX,
          y: dotY,
          opacity: dotOpacity,
        }}
      />

      <motion.div
        className="cursor-ring fixed top-0 left-0 rounded-full border border-white/80 flex items-center justify-center"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          ...ringStyle,
        }}
      >
        <span className="select-none text-[10px] tracking-[0.25em] text-white/80">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

