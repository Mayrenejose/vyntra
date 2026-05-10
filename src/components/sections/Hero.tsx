"use client";

import { motion } from "framer-motion";
import GradientBackground from "../ui/GradientBackground";
import { Code2, Rocket, Heart } from "lucide-react";
import ConnectionLines from "../ui/ConnectionLines";
import { useMotionValue, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";
import Particles from "../ui/Particles";

export default function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  //const rawX = useTransform(mouseX, [-300, 300], [-15, 15]);
  //const rawY = useTransform(mouseY, [-300, 300], [-15, 15]);

  //const moveX = useSpring(rawX, { stiffness: 50, damping: 20 });
  //const moveY = useSpring(rawY, { stiffness: 50, damping: 20 });

  const rawXStrong = useTransform(mouseX, [-300, 300], [-25, 25]);
  const rawYStrong = useTransform(mouseY, [-300, 300], [-25, 25]);

  const moveXStrong = useSpring(rawXStrong, { stiffness: 50, damping: 20 });
  const moveYStrong = useSpring(rawYStrong, { stiffness: 50, damping: 20 });

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
      <ConnectionLines />   
      <Particles />     
      <div className="grid items-center gap-12  mx-auto max-w-[1500px] grid-cols-1 lg:grid-cols-2">
         {/* Glow dinámico */}
            <motion.div
           className="pointer-events-none absolute z-10 w-[750px] h-[750px] rounded-full blur-[120px] opacity-80"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(124,58,237,0.4) 30%, rgba(30,27,75,0.2) 60%, transparent 80%)",     
              x: glowX,
              y: glowY,              
            }}
          />
        {/* TEXTO */}
        <div className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
         <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Desarrollo Web{" "}
            <span className="text-primary">& </span>{" "}
            Soluciones Digitales
          </h1>

         <h2 className="max-w-xl mt-6 text-2xl text-grayText">
          Construyendo experiencias digitales que impulsan marcas.
        </h2>

         <div className="flex flex-col gap-4 mt-8 sm:flex-row">
        <button className="px-6 py-3 text-white transition bg-primary rounded-xl shadow-soft hover:shadow-lg">
          Hablemos de tu proyecto
        </button>

        <button className="px-6 py-3 transition border border-primary text-primary rounded-xl hover:bg-primary/10">
          Ver cómo trabajamos
        </button>
        </div>
        </div>

        {/* VISUAL */}
          <div
            className="relative h-[500px] flex items-center justify-center lg:justify-end"
            onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            mouseX.set(x - centerX);
            mouseY.set(y - centerY);
          }}
          >
            {/* Laptop */}
           <motion.img
            src="/images/hero/laptop.png"
            className="w-[320px] sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1100px] max-w-none rounded-xl relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            //style={{ x: moveX, y: moveY }}
          />
            <div className="absolute w-[400px] h-[400px] bg-primary opacity-30 blur-[120px] rounded-full top-10 left-10"></div>
            {/* INICIO DE CARDS */}
            {/* Card flotante 1 */}
            <motion.div
              className="group hidden -top-10 -right-[200px] lg:block absolute z-20 w-[220px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl px-4 py-3 shadow-md transition overflow-hidden"
              
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.08,
                y: -5
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* HEADER */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="w-4 h-4 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Desarrollo</p>
                  <h3 className="text-sm font-semibold text-gray-900">
                    A tu medida
                  </h3>
                </div>
              </div>

              {/* CONTENIDO OCULTO */}
              <div className="mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-300 overflow-hidden">
                <p className="text-xs text-gray-600">
                  Creamos soluciones pensadas para tu negocio.
                </p>

                <p className="mt-2 text-xs text-primary">
                  Saber más →
                </p>
              </div>
            </motion.div>
            {/* Card flotante 2 */}
        <motion.div
          className="group hidden top-70 -right-[200px] lg:block absolute z-20 w-[220px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl px-4 py-3 shadow-md transition overflow-hidden"
          
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.08,
            y: -5
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* HEADER */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="w-4 h-4 text-primary" />
            </div>

            <div>
              <p className="text-xs text-gray-400">Desarrollo</p>
              <h3 className="text-sm font-semibold text-gray-900">
                A tu medida
              </h3>
            </div>
          </div>

          {/* CONTENIDO OCULTO */}
          <div className="mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-300 overflow-hidden">
            <p className="text-xs text-gray-600">
              Creamos soluciones pensadas para tu negocio, no plantillas genéricas.
            </p>

            <p className="mt-2 text-xs text-primary">
              Saber más →
            </p>
          </div>
        </motion.div>

            {/* Card flotante 3 */}
         <motion.div
          className="group -bottom-10 -right-[200px] hidden lg:block absolute z-20 w-[220px] rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl px-4 py-3 shadow-md transition overflow-hidden"
          
          initial={{ scale: 1 }}
          whileHover={{ 
            scale: 1.08,
            y: -5
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* HEADER */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="w-4 h-4 text-primary" />
            </div>

            <div>
              <p className="text-xs text-gray-400">Desarrollo</p>
              <h3 className="text-sm font-semibold text-gray-900">
                A tu medida
              </h3>
            </div>
          </div>

          {/* CONTENIDO OCULTO */}
          <div className="mt-3 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-300 overflow-hidden">
            <p className="text-xs text-gray-600">
              Creamos soluciones pensadas para tu negocio, no plantillas genéricas.
            </p>

            <p className="mt-2 text-xs text-primary">
              Saber más →
            </p>
          </div>
        </motion.div>
        {/* Glow */}
        <div className="absolute w-[300px] h-[300px] bg-primary opacity-20 blur-[120px] rounded-full top-20 right-20"></div>
          </div>
      </div>
    </section>
  );
}