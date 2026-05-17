"use client";

import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import SectionWrapper from "../ui/SectionWrapper";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creamos plataformas modernas, rápidas y optimizadas para convertir visitantes en clientes.",
    image: "/images/services/web.png",
  },
  {
    title: "Agenda online para tus clientes",
    description:
        "Creamos una página simple y profesional donde tus clientes pueden agendar citas fácilmente, sin llamadas ni mensajes. Comparte tu enlace y deja que tu agenda trabaje por ti.",
    image: "/images/services/agenda.png",
    },
  {
    title: "Ecommerce",
    description:
      "Tiendas online diseñadas para vender, con experiencias fluidas y enfocadas en resultados.",
    image: "/images/services/ecommerce.png",
  },
  {
    title: "Aplicaciones a medida",
    description:
      "Soluciones personalizadas que se adaptan a tu negocio y evolucionan contigo.",
    image: "/images/services/app-medida.png",
  },
  {     
    title: "Soporte",
    description:
        "Ofrecemos mantenimiento y soporte continuo para garantizar el buen funcionamiento de tu producto.",
    image: "/images/services/soporte.png",
  },
];

export default function Services() {
  return (
  <SectionWrapper variant="right"> 
  <div className="mx-auto max-w-[1600px] relative z-10 overflow-visible">    

    {/* TITULO (FUERA DEL GRID) */}
    <div className="max-w-2xl mb-20">
         <SectionTitle
        title="¿Que podemos construir contigo?"
        description="Diseñamos y desarrollamos soluciones digitales pensadas para crecer."
        />       
    </div>

    {/* SERVICIOS */}
    <div className="space-y-24">

      {services.map((service, i) => (
        <div
          key={i}
          className={`
            group/service
            relative
            grid items-center gap-16
            grid-cols-1 md:grid-cols-2

            transition-all duration-500

           rounded-[32px]
           p-6 md:p-12

           shadow-[0_10px_30px_rgba(0,0,0,0.08)]
           hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]

            hover:bg-white/80
            backdrop-blur-sm
            hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]

            border border-transparent
            hover:border-primary/10
            `}
        >

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={i % 2 !== 0 ? "md:order-2" : ""}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              {service.title}
            </h3>

            <p className="mt-4 text-2xl text-gray-600">
              {service.description}
            </p>

            <button className="inline-flex items-center gap-2 mt-6 text-lg font-medium transition text-primary group-hover:translate-x-1">
              Saber más →
            </button>
          </motion.div>

          {/* VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${i % 2 !== 0 ? "md:order-1" : ""}`}
          >
            <div className="overflow-hidden shadow-xl rounded-2xl">
              <motion.img
                src={service.image}
                className="relative z-10 object-cover w-full h-auto"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>
      ))}
    </div>

  </div>

</SectionWrapper>
  );
}