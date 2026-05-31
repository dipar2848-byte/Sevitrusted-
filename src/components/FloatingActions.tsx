import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, CalendarPlus } from "lucide-react";
import {
  CLINIC,
  DEFAULT_WA_MESSAGE,
  telHref,
  whatsappHref,
} from "../lib/site";
import { EASE } from "../lib/motion";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp + Call (right side) */}
      <div className="pointer-events-none fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-3 lg:flex">
        <AnimatePresence>
          {visible && (
            <>
              <motion.a
                key="wa"
                href={whatsappHref(CLINIC.whatsappRaw, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.6, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 16 }}
                transition={{ ease: EASE }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Chat on WhatsApp"
                className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-premium"
              >
                <span className="absolute inset-0 rounded-2xl bg-[#25D366] opacity-60 animate-pulse-ring" />
                <MessageCircle className="relative h-6 w-6" />
              </motion.a>
              <motion.a
                key="call"
                href={telHref(CLINIC.phoneRaw)}
                initial={{ opacity: 0, scale: 0.6, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: 16 }}
                transition={{ ease: EASE, delay: 0.05 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Call the clinic"
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary text-white shadow-premium"
              >
                <Phone className="h-6 w-6" />
              </motion.a>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile sticky bottom action bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ ease: EASE }}
            className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
            style={{ paddingBottom: "var(--safe-bottom)" }}
          >
            <div className="mx-3 mb-3 flex items-center gap-2 rounded-3xl border border-white/60 bg-white/85 p-2 shadow-premium backdrop-blur-xl">
              <a
                href={telHref(CLINIC.phoneRaw)}
                aria-label="Call the clinic"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-slate-200 bg-white text-primary-700 active:scale-95"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href={whatsappHref(CLINIC.whatsappRaw, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#25D366] text-white active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary text-sm font-semibold text-white shadow-glow active:scale-95"
              >
                <CalendarPlus className="h-5 w-5" />
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
