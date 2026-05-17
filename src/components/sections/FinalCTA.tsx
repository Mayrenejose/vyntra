"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative px-6 overflow-hidden bg-violet-200 py-28">

      {/* Glow sutil */}
      <div className="
        absolute inset-0 -z-10 pointer-events-none
        bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.15),_transparent_60%)]
      " />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >

        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
          ¿Listo para llevar tu idea al siguiente nivel?
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Creamos soluciones digitales pensadas para crecer contigo.
        </p>

        <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">

          <button className="
            px-16 py-6
            bg-primary text-white
            rounded-xl font-semibold
            text-xl
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_15px_40px_rgba(124,58,237,0.4)]
          ">
            Hablemos
          </button>

          <a
            href="mailto:contacto@vyntra.cl"
            className="content-center px-6 py-3 text-xl font-semibold transition-all duration-300 border border-primary/40 text-primary rounded-xl hover:bg-primary/10 hover:scale-105"
          >
            contacto@vyntra.cl
          </a>

        </div>

      </motion.div>
    </section>
  );
}