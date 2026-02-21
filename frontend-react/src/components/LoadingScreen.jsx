import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ filter: "blur(20px)", opacity: 0, scale: 0.95 }}
          animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-white font-black leading-none tracking-tight text-[120px] sm:text-[140px]"
          style={{ letterSpacing: "-0.04em" }}
        >
          JD
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0.8 }}
          animate={{ width: 60, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-px bg-[#333] mt-4"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#555]"
        >
          jacobs david
        </motion.div>
      </div>
    </motion.div>
  );
}
