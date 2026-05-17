interface Props {
  children: React.ReactNode;
  variant?: "left" | "right" | "both";
}

export default function SectionWrapper({
  children,
  variant = "left",
}: Props) {
  return (
    <section className="relative px-6 overflow-hidden bg-white py-28">

      {/* FORMAS DE FONDO */}
      <div className="absolute inset-0 pointer-events-none">

      {/* IZQUIERDA */}
        {(variant === "left" || variant === "both") && (
        <svg
            className="absolute left-0 top-0 h-full w-[300px]"
            viewBox="0 0 300 800"
            preserveAspectRatio="none"
        >
            <path
            d="M0,0 C200,200 100,600 300,800 L0,800 Z"
            fill="url(#gradientLeft)"
            opacity="0.15"
            />
            <defs>
            <linearGradient id="gradientLeft" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
            </defs>
        </svg>
        )}

       {/* DERECHA */}
        {(variant === "right" || variant === "both") && (
        <svg
            className="absolute right-0 top-0 h-full w-[300px]"
            viewBox="0 0 300 800"
            preserveAspectRatio="none"
        >
            <path
            d="M300,0 C100,200 200,600 0,800 L300,800 Z"
            fill="url(#gradientRight)"
            opacity="0.15"
            />
            <defs>
            <linearGradient id="gradientRight" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            </defs>
        </svg>
        )}
      </div>
      
      {/* CONTENIDO */}
      <div className="mx-auto max-w-[1400px] xl:max-w-[1600px]">
        {children}
      </div>

    </section>
  );
}