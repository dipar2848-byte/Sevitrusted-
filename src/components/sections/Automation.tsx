import { motion } from "framer-motion";
import { Workflow, Cpu } from "lucide-react";
import { AUTOMATION } from "../../data/content";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Automation() {
  return (
    <section
      id="automation"
      className="relative overflow-hidden section-pad"
    >
      {/* Dark premium backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-page">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary/90 backdrop-blur"
          >
            <Cpu className="h-3.5 w-3.5" />
            Automation Ecosystem
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]"
          >
            A Fully Automated{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Patient Experience
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Reduce administrative workload while improving patient satisfaction
            with intelligent automation.
          </motion.p>
        </motion.div>

        {/* Central hub + interconnected cards */}
        <div className="relative mt-14">
          {/* Animated connecting lines (desktop) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#14B8A6" stopOpacity="0" />
                <stop offset="0.5" stopColor="#22C55E" stopOpacity="0.7" />
                <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.line
              x1="50%" y1="0" x2="50%" y2="100%"
              stroke="url(#line)" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE }}
            />
            <motion.line
              x1="0" y1="50%" x2="100%" y2="50%"
              stroke="url(#line)" strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
            />
          </svg>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {AUTOMATION.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center hub badge (desktop accent) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-secondary to-accent text-white shadow-premium">
              <Workflow className="h-7 w-7" />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
