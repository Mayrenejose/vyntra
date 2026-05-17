"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="shadow-[0_10px_30px_rgba(124,58,237,0.4)] absolute flex items-center justify-center w-20 h-20 transition-all duration-300 -translate-x-1/2 bg-white rounded-full shadow-lg left-1/2 -top-6 text-primary hover:scale-110"
    >
      <ArrowUp className="w-10 h-10" />
    </button>
  );
}