"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const slides = [
  {
    title: "Desarrollo Web & Soluciones Digitales",
    subtitle: "Construyendo experiencias digitales que impulsan marcas.",
    image: "/images/hero/laptop.png",
    glow: "rgba(124,58,237,0.5)",
    background: "rgba(124,58,237,0.08)",
  },
  {
    title: "Soluciones que hacen crecer tu negocio",
    subtitle: "Creamos plataformas pensadas para convertir visitas en clientes.",
    image: "/images/hero/growth.png",
    glow: "rgba(16,185,129,0.5)",
     background: "rgba(16,185,129,0.06)",
  },
  {
    title: "Te acompañamos en todo el proceso",
    subtitle: "Desde la idea hasta el crecimiento de tu producto.",
    image: "/images/hero/support.png",
    glow: "rgba(59,130,246,0.5)",
    background: "rgba(59,130,246,0.06)",
  },
];

type Props = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>; 
};

export default function HeroCarousel({ index, setIndex }: Props) {
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // autoplay
 useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  }, 6500);

  return () => clearInterval(interval);
}, [isPaused, setIndex]); 

  return (
    <div
      className="grid items-center gap-12 mx-auto max-w-[1500px] grid-cols-1 lg:grid-cols-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* TEXTO */}
      <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              {slides[index].title}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-grayText">
              {slides[index].subtitle}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* BOTONES */}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          <button className="px-6 py-3 font-semibold text-white transition bg-primary rounded-xl hover:scale-105">
            Hablemos de tu proyecto
          </button>

          <button className="px-6 py-3 transition border border-primary text-primary rounded-xl hover:bg-primary/10">
            Experiencia Interactiva
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6 lg:justify-start">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-4 h-4 rounded-full ${
                i === index ? "bg-primary scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* IMAGEN */}
      <div className="relative flex items-center justify-center h-[500px] lg:justify-end">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            className="w-[320px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1100px]"
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}