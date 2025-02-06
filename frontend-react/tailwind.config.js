/* eslint-disable no-undef */
import { fontFamily } from "tailwindcss/defaultTheme.js";
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: "class", // Enables dark mode with a `class` strategy
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust paths to your project files
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E0E7FF", // Lighter indigo
          300: "#A5B4FC", // Light indigo
          500: "#6366F1", // Base indigo (primary)
          700: "#4338CA", // Dark indigo
          900: "#312E81", // Darker indigo
        },
        accent: {
          200: "#A7F3D0", // Light emerald
          400: "#34D399", // Base emerald (accent)
          600: "#059669", // Dark emerald
          800: "#065F46", // Darker emerald
        },
        neutral: {
          light: colors.slate[300], // For subtle elements in light mode
          dark: colors.slate[500], // For subtle elements in dark mode
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          400: "#858EAD",
          500: "#7B8EC8",
          700: "#DCE3F1",
          800: "#F4F6F8",
          850: "#FDFDFD",
          900: "#FFFFFF",
        },
      },
      backgroundImage: {
        "dark-gradient-0":
          "linear-gradient(135deg, hsla(226, 26%, 10%, 1) 29%, hsla(0, 0%, 0%, 2) 100%)",
        "dark-gradient-1":
          "linear-gradient(135deg, hsla(218, 28%, 16%, 1) 13%, hsla(0, 0%, 6%, 1) 100%)",
        "dark-gradient-2":
          "radial-gradient(circle at center, hsla(0, 0%, 10%, 1) 0%, hsla(0, 0%, 5%, 1) 100%)",
        "dark-gradient-4":
          "linear-gradient(225deg, hsla(222, 70%, 6%, 1) 16%, hsla(228, 32%, 15%, 1) 100%)",
        "dark-gradient-5":
          "linear-gradient(to right, hsla(0, 0%, 18%, 1) 0%, hsla(0, 0%, 10%, 1) 50%, hsla(0, 0%, 12%, 1) 100%)",
        "dark-gradient-6":
          "radial-gradient(circle, hsla(176, 12%, 24%, 1) 16%, hsla(180, 10%, 6%, 1) 100%)",
        "radial-gradient":
          "radial-gradient(hsl(180, 100%, 80%), hsla(180, 100%, 80%, 0))",
      },
      fontFamily: {
        sans: [
          "var(--font-inter-google)",
          {
            fontFeatureSettings: '"cv11"',
            fontVariationSettings: "normal",
          },
        ],
        local: [
          "var(--font-inter-local)",
          // {
          //   fontFeatureSettings: '"cv11"',
          //   fontVariationSettings: "normal",
          // },
        ],
      },

      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)", // Glassmorphism-specific
        myShadow1: "#059669",
        myShadow2: "#059669",
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      gradients: {
        g1: "bg-gradient-to-r from-primary-300 to-primary-500",
        g2: "bg-gradient-to-l from-accent-200 to-accent-400",
        g3: "bg-gradient-to-r from-primary-700 to-primary-900",
        g4: "bg-gradient-to-b from-accent-600 to-accent-800",
        g5: "bg-gradient-to-t from-primary-500 to-accent-400",
        g6: "bg-gradient-to-r from-primary-300 via-accent-200 to-accent-600",
      },
      screens: {
        xs: "320px",
        "max-xs": "640px",
        sm: "640px",
        "max-sm": { max: "767px" },
        md: "768px ",
        "max-md": { max: "1023px" },
        lg: "1024px",
        "max-lg": { max: "1279px" },
        xl: "1280px ",
        "max-xl": { max: "1536px" },
        "2xl": "1536px ",
      },
      animation: {
        border: "border 4s linear infinite",
        "infinite-scroll": "infinite-scroll 6s linear infinite",
        "move-up": "move-up 10s linear infinite",
        "fade-in": "fade-in 1s ease-in-out",
        "scale-up": "scale-up 2s ease-in-out infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
        "move-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100vh)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-up": {
          "0%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.5)" },
        },
      },
    },
  },
  plugins: [
    require("@pyncz/tailwind-mask-image"),
    require("tailwind-gradient-mask-image"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
