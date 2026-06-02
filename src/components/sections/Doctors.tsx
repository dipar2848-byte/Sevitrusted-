import { motion } from "framer-motion";
import { CalendarDays, Stethoscope } from "lucide-react";
import { DOCTORS } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Doctors() {
  return (
    <section id="doctors" className="relative section-pad bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Doctors"
          icon={<Stethoscope className="h-3.5 w-3.5" />}
          title={
            <>
              Experienced doctors who{" "}
              <span className="text-gradient">truly listen.</span>
            </>
          }
          subtitle="Consult experienced physicians dedicated to careful diagnosis and patient comfort."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {DOCTORS.map((doc) => (
            <motion.article
              key={doc.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="flex flex-col overflow-hidden rounded-4xl border border-slate-100 bg-surface shadow-card transition-shadow hover:shadow-premium"
            >
              <div
                className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${doc.gradient}`}
              >
                <div className="absolute inset-0 bg-grid-faint bg-grid opacity-20" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/40 bg-white/15 text-2xl font-bold text-white backdrop-blur-sm">
                  {doc.initials}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="text-lg font-bold text-ink">{doc.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary-700">
                  {doc.role}
                </p>

                <a href="#contact" className="btn-primary mt-5 w-full text-sm">
                  <CalendarDays className="h-4 w-4" />
                  Book Consultation
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
