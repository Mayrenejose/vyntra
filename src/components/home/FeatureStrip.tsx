"use client";

import FeatureCard from "../ui/FeatureCard";
import { Code2, HeartHandshake, Sparkles } from "lucide-react";

export default function FeatureStrip() {
  return (
    <section className="relative z-40 px-6 -mt-20">
      
      {/* FRANJA */}
      <div className="
        max-w-7xl mx-auto rounded-3xl p-4
        bg-gradient-to-r from-primary to-[#1E1B4B]
        shadow-[0_20px_60px_rgba(0,0,0,0.2)]

        grid grid-cols-1 md:grid-cols-3
        gap-6
      ">
          {/* CARDS DENTRO DE FRANJA*/}
        <FeatureCard
            icon={<Code2 className="w-5 h-5 text-primary" />}
            label="Desarrollo"
            title="A tu medida"
            description="Creamos soluciones pensadas para tu negocio."
            delay={0.1}
        />

        <FeatureCard
            icon={<HeartHandshake className="w-5 h-5 text-primary" />}
            label="Acompañamiento"
            title="Te guiamos"
            description="Te acompañamos en cada paso del proceso."
            delay={0.3}
        />

        <FeatureCard
            icon={<Sparkles className="w-5 h-5 text-primary" />}
            label="Personalización"
            title="Experiencias únicas"
            description="Diseñamos plataformas alineadas a tu marca."
            delay={0.5}
        />
      </div> 
    </section>
  );
}