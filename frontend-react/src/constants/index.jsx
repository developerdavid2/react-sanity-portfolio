import {
  FiUser,
  FiTool,
  FiGrid,
  FiHome,
  FiMessageCircle,
} from "react-icons/fi";

import { Hero, About, Skills, Works, Reviews } from "../sections/index.jsx";

export const sections = [
  {
    title: "Home",
    slug: "hero",
    icon: <FiHome />,
    dis: "translate-x-0",
    component: Hero,
  },
  {
    title: "About",
    slug: "about",
    icon: <FiUser />,
    dis: "translate-x-16",
    component: About,
  },
  {
    title: "Works",
    slug: "works",
    icon: <FiGrid />,
    dis: "translate-x-32",
    component: Works,
  },
  {
    title: "Skills",
    slug: "skills",
    icon: <FiTool />,
    dis: "translate-x-48",
    component: Skills,
  },
  {
    title: "Reviews",
    slug: "reviews",
    icon: <FiMessageCircle />,
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
