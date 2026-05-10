"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <motion.div
      className="absolute inset-0 -z-10 blur-[140px] opacity-30"
     style={{
        background: `
            radial-gradient(circle at 20% 40%, #6D28D9 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, #1E1B4B 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, #312E81 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, #4C1D95 0%, transparent 50%)
        `,
        }}
      animate={{
        backgroundPosition: [
          "20% 40%, 80% 60%, 60% 20%",
          "30% 50%, 70% 50%, 50% 30%",
          "20% 40%, 80% 60%, 60% 20%",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}