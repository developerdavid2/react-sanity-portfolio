// Footer.jsx
import React from "react";

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-[#0a0a0a] overflow-hidden">
      {/* Big bold name — bleeds edge to edge like the hero */}
      <div className="relative flex items-end justify-center overflow-hidden pt-10 select-none pointer-events-none">
        <span
          className="block font-black leading-[0.82] text-[clamp(80px,18vw,200px)] text-[#111]"
          style={{ letterSpacing: "-0.04em" }}
          aria-hidden="true"
        >
          JACOBS DAVID
        </span>
        {/* Fade out toward bottom so it bleeds into nothing */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      {/* Meta row */}
      <div className="border-t border-[#111] px-5 sm:px-12 md:px-16 lg:px-20 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#333]">
          <span>© 2025 Jacobs David. All rights reserved.</span>
          <span className="tracking-[0.15em] uppercase">Software Engineer</span>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
