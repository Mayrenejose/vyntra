"use client";

import { motion } from "framer-motion";
import GradientBackground from "../ui/GradientBackground";
import ConnectionLines from "../ui/ConnectionLines";
import { useMotionValue, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";
import Particles from "../ui/Particles";
import HeroCarousel, { slides } from "./HeroCarousel";
import { useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  //efectos del mouse para glow
  const glowX = useSpring(useTransform(mouseX, [-300, 300], [-500, 500]), {
    stiffness: 120,
    damping: 18,
  });

  const glowY = useSpring(useTransform(mouseY, [-300, 300], [-300, 300]), {
    stiffness: 120,
    damping: 18,
  });

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">         
      <GradientBackground />     
      <motion.div
      key={slides[index].background}
      className="absolute inset-0 -z-10"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      transition={{ duration: 0.8 }}

      style={{
        background: `radial-gradient(circle at ${
        index === 0 ? "50% 30%" : index === 1 ? "60% 40%" : "40% 50%"
      }, ${slides[index].background}, transparent 70%)`
      }}
    /> 
      {/* <ConnectionLines />    */}
      <Particles />     
      <div className="grid items-center gap-12  mx-auto max-w-[1500px] grid-cols-1 lg:grid-cols-2">
         {/* Glow dinámico */}
           <motion.div
            key={slides[index].glow}
            className="pointer-events-none absolute z-10 w-[750px] h-[750px] rounded-full blur-[120px]"

            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.7,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}

            transition={{ duration: 0.8 }}

            style={{
              background: `radial-gradient(circle, ${slides[index].glow} 0%, transparent 70%)`,
              x: glowX,
              y: glowY,
            }}
          />
          </div>
        <HeroCarousel index={index} setIndex={setIndex} />
        <div className="absolute bottom-0 left-0 z-30 w-full h-48 pointer-events-none  bg-gradient-to-b from-transparent via-white/60 to-white"></div>
    </section>
  );
}