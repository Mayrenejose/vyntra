"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import ScrollToTop from "../ui/ScrollToTop";

export default function Footer() {
  return (
    <footer className="relative px-6 pt-24 pb-10 overflow-hidden text-white bg-[#0F0F1A] ">    
      {/* Glow sutil */}
      <div className="
        absolute inset-0 -z-10 pointer-events-none
        bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_transparent_60%)]
      " />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1400px]"
      >

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* MARCA */}
          <div>
             {/* LOGO */}
         <motion.img
          src="/images/footer/vyntra-fondo-negro.png"
          className="object-contain w-auto h-32 sm:h-8 md:h-32"
          alt="Vyntra"
        />


            <p className="mt-4 text-gray-400">
              Creamos experiencias digitales que impulsan negocios.
            </p>

            {/* Redes */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/vyntrachile/" target="_blank">
                <FaInstagram className="w-8 h-8 text-gray-400 transition hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/company/vyntrachile/" target="_blank">
                <FaLinkedin className="w-8 h-8 text-gray-400 transition hover:text-white" />
                </a>
            </div>
          </div>

          {/* SERVICIOS */}
          <div>
            <h4 className="mb-4 font-semibold">Servicios</h4>

            <ul className="space-y-2 text-gray-400">
              <li className="transition cursor-pointer hover:text-white">Desarrollo web</li>
              <li className="transition cursor-pointer hover:text-white">Agenda online</li>
              <li className="transition cursor-pointer hover:text-white">Ecommerce</li>
              <li className="transition cursor-pointer hover:text-white">Aplicaciones a medida</li>
              <li className="transition cursor-pointer hover:text-white">Soporte a tu Web</li>
            </ul>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="mb-4 font-semibold">Navegación</h4>

            <ul className="space-y-2 text-gray-400">
              <li className="transition cursor-pointer hover:text-white">Inicio</li>
               <li className="transition cursor-pointer hover:text-white">Cómo trabajamos</li>
              <li className="transition cursor-pointer hover:text-white">Servicios</li>             
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>

            <div className="space-y-3 text-gray-400">

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contacto@vyntra.cl" className="hover:text-white">
                  contacto@vyntra.cl
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+56 9 1234 5678</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span>Santiago, Chile</span>
              </div>

            </div>

            <button className="
              mt-6 px-5 py-2
              bg-primary rounded-lg font-medium

              transition
              hover:scale-105
              hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)]
            ">
              Hablemos
            </button>
          </div>

        </div>

        {/* DIVISOR */}
        <div className="relative my-10">
        <div className="h-[1px] w-full bg-white/10"></div>   
        <ScrollToTop />     
      </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Vyntra</p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-white">Privacidad</span>
            <span className="cursor-pointer hover:text-white">Términos</span>
          </div>
        </div>

      </motion.div>
    </footer>
  );
}