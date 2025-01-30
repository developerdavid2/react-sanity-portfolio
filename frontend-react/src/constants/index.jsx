import { FiUser, FiTool, FiGrid, FiPenTool, FiHome } from "react-icons/fi";

import { Hero, About, Skills, Works, Reviews } from "../sections/index.jsx";

export const sections = [
  {
    title: "Home",
    slug: "hero",
    icon: "home-outline",
    dis: "translate-x-0",
    component: Hero, // Specific component for About section
  },
  {
    title: "About",
    slug: "about",
    icon: "person-outline",
    dis: "translate-x-16",
    component: About, // Specific component for About section
  },
  {
    title: "Works",
    slug: "works",
    icon: "briefcase-outline",
    dis: "translate-x-32",
    component: Works,
  },
  {
    title: "Skills",
    slug: "skills",
    icon: "construct-outline",
    dis: "translate-x-48",
    component: Skills,
  },
  {
    title: "Reviews",
    slug: "reviews",
    icon: "chatbubbles-outline",
    dis: "translate-x-64",
    component: Reviews,
  },
];

export const logoSlides = [
  { src: "assets/images/logos/afterpay.svg", alt: "afterpay" },
  { src: "assets/images/logos/sonos.svg", alt: "sonos" },
  { src: "assets/images/logos/amplitude.svg", alt: "amplitude" },
  { src: "assets/images/logos/drips.svg", alt: "drips" },
  { src: "assets/images/logos/maze.svg", alt: "maze" },
];
