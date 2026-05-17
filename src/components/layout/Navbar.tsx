"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-md py-3"
            : "bg-transparent py-5"}
        `}
      >
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">

          {/* LOGO */}
          <motion.img
            src="/images/header/vyntra1.png"
            className="object-contain w-auto h-24 sm:h-8 md:h-24"
            alt="Vyntra"
          />

          {/* NAV DESKTOP */}
          <nav className="items-center hidden gap-8 text-sm text-gray-700 md:flex">
            <a href="#" className="text-xl font-semibold hover:text-primary">Inicio</a>
            <a href="#" className="text-xl font-semibold hover:text-primary">Experiencia Interactiva</a>
            <a href="#" className="text-xl font-semibold hover:text-primary">Servicios</a>
            <button onClick={onOpenContact} className="text-xl font-semibold hover:text-primary">
              Contacto
            </button>
          </nav>

          {/* CTA DESKTOP */}
          <button className="
              px-6 py-3 
              bg-primary text-white 
              rounded-xl 
              font-semibold

              shadow-[0_10px_25px_rgba(124,58,237,0.35)]
              
              transition-all duration-300

              hover:scale-105 
              hover:shadow-[0_15px_40px_rgba(124,58,237,0.5)]
              hover:-translate-y-1
            ">
            Hablemos
          </button>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>
      </header>

      {/* MENÚ MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-screen gap-8 text-lg bg-white/90 backdrop-blur-xl"
          >
            <a href="#" onClick={() => setOpen(false)}>Inicio</a>
            <a href="#" onClick={() => setOpen(false)}>Experiencia Interactiva</a>
            <a href="#" onClick={() => setOpen(false)}>Servicios</a>
            <button onClick={onOpenContact} className="text-lg hover:text-primary">
              Contacto
            </button>

            <button className="
              px-6 py-3 
              bg-primary text-white 
              rounded-xl 
              font-semibold

              shadow-[0_10px_25px_rgba(124,58,237,0.35)]
              
              transition-all duration-300

              hover:scale-105 
              hover:shadow-[0_15px_40px_rgba(124,58,237,0.5)]
              hover:-translate-y-1
            ">
              Hablemos
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}