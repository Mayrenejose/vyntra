"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  delay?: number;
};

export default function FeatureCard({
  icon,
  label,
  title,
  description,
}: Props) {
  return (
    <motion.div
      className="relative p-4 overflow-hidden transition-none bg-white shadow-lg cursor-pointer group rounded-2xl"      
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1.05, y: 6 }}
      viewport={{ once: true }}
      transition={{
      type: "spring",
      stiffness: 180,
      damping: 15
    }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Glow interno */}
      <div className="absolute inset-0 transition-none opacity-0 pointer-events-none group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,58,237,0.15), transparent 70%)",
        }}
      />

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-3">
        
        {/* Icono */}
        <div className="p-2 transition rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110">
          {icon}
        </div>

        <p className="text-xl font-medium text-gray-900">{label}</p>
      </div>

      {/* CONTENIDO */}
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-lg text-gray-800">
        {description}
      </p>

      {/* CTA sutil */}
      {/* <p className="mt-3 text-sm transition opacity-0 text-primary group-hover:opacity-100">
        Saber más →
      </p> */}
    </motion.div>
  );
}