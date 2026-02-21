export const revealVariants = {
  hidden: {
    y: 40,
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    },
  }),
};

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

