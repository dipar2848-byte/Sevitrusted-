import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Expand, X } from "lucide-react";
import { FACILITIES } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Facility() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="relative section-pad bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Facility"
          icon={<Building2 className="h-3.5 w-3.5" />}
          title={
            <>
              Spaces designed for{" "}
              <span className="text-gradient">calm and care.</span>
            </>
          }
          subtitle="Modern, spotless, and welcoming environments equipped with advanced medical technology."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:grid-cols-4"
        >
          {FACILITIES.map((item, i) => (
            <motion.button
              key={item.title}
              variants={fadeUp}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.015 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} ${item.span} text-left shadow-card`}
            >
              <span className="absolute inset-0 bg-grid-faint bg-grid opacity-15" />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
              <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-sm font-bold text-white drop-shadow">
                  {item.title}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-5"
          >
            <button
              aria-label="Close gallery"
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-ink/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ ease: EASE }}
              className={`relative aspect-video w-full max-w-3xl overflow-hidden rounded-4xl bg-gradient-to-br ${FACILITIES[active].gradient} shadow-premium`}
            >
              <span className="absolute inset-0 bg-grid-faint bg-grid opacity-15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold text-white drop-shadow sm:text-3xl">
                  {FACILITIES[active].title}
                </p>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
