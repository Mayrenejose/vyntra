"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, X } from "lucide-react";
import emailjs from "emailjs-com";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const shake = {
  initial: { x: 0 },
  animate: { x: [0, -6, 6, -4, 4, 0] },
  transition: { duration: 0.4 },
};

export default function ContactModal({ isOpen, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [errors, setErrors] = useState<any>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Tu nombre es requerido";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Correo inválido";
    }

    if (form.message.length < 10) {
      newErrors.message = "Cuéntanos un poco más (mínimo 10 caracteres)";
    }

    return newErrors;
  };

  // Cerrar DRAG
  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y > 120) {
      handleCloseModal();
    }
  };

  // Cerrar MODAL
  const handleCloseModal = () => {
    onClose();
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  // Cerrar AL DAR CLICK FUERA
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };

  if (!isOpen) return null;

  // ENVIO DE FORMULARIO
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("loading");
    setErrors({});


    try {
      await emailjs.sendForm(
        "service_pwu0biv",
        "template_4diqb1g",
        e.currentTarget as HTMLFormElement,
        "NeQzzZfVCPAnOSHNK"
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 3000);

    } catch {
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed inset-0 z-50 flex items-end justify-center md:items-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* CONTENEDOR */}
          <motion.div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}

            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag={typeof window !== "undefined" && window.innerWidth < 768 ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}

            className="
            fixed bottom-0 left-0 right-0
            w-full

            bg-white

            p-6
            rounded-t-3xl

            max-h-[90vh]
            overflow-y-auto

            md:relative md:max-w-2xl md:p-8 md:rounded-2xl
          "
          >
            {/* BARRA DRAG */}
            <div className="flex justify-center mb-4 md:hidden">
              <div className="w-10 h-1.5 bg-gray-300 rounded-full"></div>
            </div>

            {/* HEADER */}
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Hablemos 💜
              </h3>

              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-700"
              >
                <X className="w-10 h-10 text-primary" />
              </button>
            </div>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-xl text-center text-green-900"
                >
                  🚀 Mensaje enviado con éxito
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-xl text-center text-red-500"
                >
                  ❌ Ocurrió un error, intenta nuevamente
                </motion.div>
              )}
            </AnimatePresence>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              <motion.div
                {...(errors.name ? shake : {})}
              >
                <input
                  name="user_name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });

                    if (errors.name) {
                      setErrors({ ...errors, name: undefined });
                    }
                  }}
                  placeholder="Tu nombre"
                  className={`
                  w-full px-4 py-3 rounded-xl border transition-all duration-300

                ${errors.name
                      ? "border-red-400 focus:ring-red-400 bg-red-50"
                      : "border-gray-200 focus:ring-primary"
                    }

                focus:outline-none focus:ring-2
              `}
                />

                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-lg text-red-500"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                {...(errors.email ? shake : {})}
              >
                <input
                  name="user_email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });

                    if (errors.email) {
                      setErrors({ ...errors, email: undefined });
                    }
                  }}
                  placeholder="Tu correo"
                  className={`
                  w-full px-4 py-3 rounded-xl border transition-all duration-300

                ${errors.email
                      ? "border-red-400 focus:ring-red-400 bg-red-50"
                      : "border-gray-200 focus:ring-primary"
                    }

                focus:outline-none focus:ring-2
              `}
                />

                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-lg text-red-500"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                {...(errors.message ? shake : {})}
              >
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });

                    if (errors.message) {
                      setErrors({ ...errors, message: undefined });
                    }
                  }}
                  placeholder="Tu mensaje"
                  className={`
                  w-full px-4 py-3 rounded-xl border transition-all duration-300

                ${errors.message
                      ? "border-red-400 focus:ring-red-400 bg-red-50"
                      : "border-gray-200 focus:ring-primary"
                    }

                focus:outline-none focus:ring-2
              `}
                />

                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-1 text-lg text-red-500"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3 text-xl font-semibold text-white rounded-xl bg-primary  transition-all duration-300
                hover:scale-100 
                hover:shadow-[0_15px_40px_rgba(124,58,237,0.5)]
                hover:-translate-y-1"
              >
                {status === "loading" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>

            {/* DIVISOR */}
            <div className="my-6 border-t"></div>

            {/* CONTACTO DIRECTO */}
            <div className="space-y-3 text-center">

              <p className="text-lg text-gray-600">
                O contáctanos directamente:
              </p>

              <div className="flex justify-center gap-6 text-gray-500">

                <a href="https://wa.me/56936522558" target="_blank">
                  <FaWhatsapp className="w-10 h-10 transition hover:text-green-500" />
                </a>

                <a href="https://www.instagram.com/vyntrachile/" target="_blank">
                  <FaInstagram className="w-10 h-10 transition hover:text-pink-500" />
                </a>

                <a href="https://www.linkedin.com/company/vyntrachile/" target="_blank">
                  <FaLinkedin className="w-10 h-10 transition hover:text-blue-500" />
                </a>

                <a href="mailto:contacto@vyntra.cl">
                  <Mail className="w-10 h-10 transition hover:text-primary" />
                </a>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}