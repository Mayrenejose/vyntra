"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function ParallaxWrapper({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // movimiento SUAVE (sin rotación)
  const moveX = useTransform(x, [-300, 300], [-20, 20]);
  const moveY = useTransform(y, [-300, 300], [-20, 20]);

  return (
    <motion.div
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        x.set(clientX - centerX);
        y.set(clientY - centerY);
      }}
      style={{
        x: moveX,
        y: moveY,
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}