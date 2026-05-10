"use client";

import { motion } from "framer-motion";

export default function ConnectionLines() {
 const lines = [
  // 🔹 IZQUIERDA (zona del texto)
  "M-200 100 C 0 50, 200 120, 350 200",
  "M-200 180 C 0 150, 250 220, 450 300",
  "M-200 260 C 50 250, 300 300, 500 350",
  "M-200 340 C 100 350, 350 400, 600 450",
  "M-200 420 C 150 450, 400 480, 700 520",

  // 🔹 TRANSICIÓN CENTRO
  "M100 120 C 300 200, 500 250, 650 300",
  "M120 200 C 320 260, 520 300, 700 340",
  "M150 300 C 350 320, 600 350, 750 380",

  // 🔹 CONEXIONES A LAPTOP
  "M200 150 C 400 200, 600 250, 700 300",
  "M250 400 C 500 350, 600 320, 750 280",

  // 🔹 DERECHA (refuerzo)
  "M500 100 C 650 150, 750 200, 800 250",
  "M550 200 C 700 250, 780 300, 820 350",
  "M600 300 C 750 350, 800 400, 850 450",

  "M0 420 C 200 450, 400 480, 700 520",
"M0 500 C 250 520, 500 540, 800 580",
];

  return (    
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      viewBox="-300 0 1400 600"
      fill="none"
    >
      {lines.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke={`url(#gradient${i % 2})`}
          strokeWidth="1.5"
          strokeOpacity="0.30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 16 + i * 4, // más lento
            repeat: Infinity,
            ease: "easeInOut",
          }}
          filter="url(#glow)"
        />
      ))}

      <defs>
       <linearGradient id="gradient0">
            <stop offset="0%" stopColor="#6D28D9" />
            <stop offset="100%" stopColor="#4338CA" />
            </linearGradient>

            <linearGradient id="gradient1">
            <stop offset="0%" stopColor="#4C1D95" />
            <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
        <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
        </filter>
      </defs>
    </svg>
  );
}