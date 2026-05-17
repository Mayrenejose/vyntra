"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../ui/SectionTitle";
import SectionWrapper from "../ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Entendemos tu negocio",
    description:
      "Analizamos tus necesidades, objetivos y contexto para construir una solución que realmente aporte valor.",
  },
  {
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Creamos la estructura y experiencia ideal para tu negocio.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollamos tu producto con tecnología moderna y lo preparamos para crecer contigo.",
  }   
];

export default function HowWeWork() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (    
     <SectionWrapper variant="left"> 
      <div className="mx-auto max-w-[1600px]">

        {/* TITULO */}
        <SectionTitle
        title="Cómo trabajamos"
        description="Un proceso claro, pensado para crear soluciones reales."
        />

        {/* TIMELINE */}
        <div ref={ref} className="relative">

          {/* Línea horizontal (desktop) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-gray-200">
            <motion.div
                className="h-full origin-left bg-primary"
                style={{ scaleX }}
            />
          </div>
  
          {/* Línea vertical (mobile) */}
          <div className="md:hidden absolute left-4 top-0 w-[2px] h-full bg-gray-200"></div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >

                {/* PUNTO */}
               <motion.div
                className="absolute left-0 w-4 h-4 rounded-full cursor-pointer -top-2 md:top-0 md:left-1/2 bg-primary"
                style={{
                    translateX: "-50%", // 🔥 clave
                }}
                whileHover={{
                    scale: 1.4,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
                >
                <div className="absolute inset-0 rounded-full bg-primary opacity-40 blur-md"></div>
                </motion.div>

                {/* CONTENIDO */}
                <div className="pl-10 mt-8 md:mt-12 md:text-center md:pl-0">

                  <p className="text-5xl font-bold text-primary ">
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-lg leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      
      </div>

       {/* ONDA COMO BORDE */}
    <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
        viewBox="0 0 1440 120"
        className="w-full h-[120px]"
        preserveAspectRatio="none"
        >
        <path
            d="M0,40 C300,120 900,0 1440,80 L1440,120 L0,120 Z"
            fill="#F9FAFB" // color de la siguiente sección
        />
        </svg>
    </div>
      </SectionWrapper> 
  );
}