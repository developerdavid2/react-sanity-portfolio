import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function SectionDivider({ className = "" }) {
  return (
    <Reveal
      as={motion.div}
      className={`flex flex-col items-center py-3 ${className}`}
    >
      <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#222]" />
      <div className="w-1 h-1 rounded-full border border-[#333] my-1" />
      <div className="w-px h-8 bg-gradient-to-b from-[#222] to-transparent" />
    </Reveal>
  );
}

