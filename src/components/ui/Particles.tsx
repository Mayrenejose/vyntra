"use client";

export default function Particles() {
  return (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      
      {/* partículas */}
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

    </div>
  );
}