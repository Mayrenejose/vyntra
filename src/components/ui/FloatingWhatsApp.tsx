"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

  const messages = [
  "💬 ¿Te ayudamos?",
  "🚀 Podemos crear tu web",
  "✨ Hablemos de tu idea",
];

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [randomMessage] = useState(() => {
  return messages[Math.floor(Math.random() * messages.length)];
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);

      // se oculta solo después
      setTimeout(() => setShowTooltip(false), 4000);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed z-50 bottom-6 right-6">

      {/* TOOLTIP */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}

            className="absolute right-0 px-10 py-6 text-xl font-bold text-white shadow-lg bg-primary bottom-24 rounded-xl whitespace-nowrap"
          >
            {randomMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÓN */}
      <motion.a
        href="https://wa.me/56936522558?text=Hola%20quiero%20crear%20mi%20web"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}

        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: [1, 1.04, 1],
        }}
        transition={{
          opacity: { duration: 0.4 },
          scale: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          },
        }}

        whileHover={{ scale: 1.1 }}

        className="
          flex items-center justify-center

          w-20 h-20
          bg-[#25D366] text-white
          rounded-full

          shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        "
      >
        <FaWhatsapp className="w-10 h-10" />
      </motion.a>
    </div>
  );
}