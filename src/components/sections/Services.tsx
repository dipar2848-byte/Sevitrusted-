import { motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SERVICES } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Services"
          icon={<Sparkles className="h-3.5 w-3.5" />}
          title={
            <>
              Specialist care for{" "}
              <span className="text-gradient">every need.</span>
            </>
          }
          subtitle="A full spectrum of medical expertise under one roof — delivered with precision, warmth, and modern technology."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative flex flex-col overflow-hidden rounded-4xl border border-slate-100 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-premium"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-5 text-lg font-bold text-ink">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>

                <ul className="relative mt-4 space-y-1.5">
                  {service.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-xs font-medium text-ink-soft"
                    >
                      <Check className="h-3.5 w-3.5 text-accent-600" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-600"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
