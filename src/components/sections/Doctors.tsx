import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Clock, Languages, CalendarDays, Stethoscope } from "lucide-react";
import { DOCTORS, DOCTOR_CATEGORIES } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Doctors() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? DOCTORS
      : DOCTORS.filter((d) => d.category === filter);

  return (
    <section id="doctors" className="relative section-pad bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Meet the Team"
          icon={<Stethoscope className="h-3.5 w-3.5" />}
          title={
            <>
              Trusted doctors who{" "}
              <span className="text-gradient">truly listen.</span>
            </>
          }
          subtitle="Board-certified specialists with verified credentials, deep experience, and a genuinely human approach to care."
        />

        {/* Filter */}
        <div className="no-scrollbar mt-9 flex gap-2 overflow-x-auto pb-1">
          {DOCTOR_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-none rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-gradient-to-br from-primary-600 to-secondary text-white shadow-glow"
                  : "border border-slate-200 bg-white text-ink-soft hover:border-primary-200 hover:text-primary-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((doc) => (
              <motion.article
                layout
                key={doc.name}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="group flex flex-col overflow-hidden rounded-4xl border border-slate-100 bg-surface shadow-card transition-shadow hover:shadow-premium"
              >
                {/* Avatar header */}
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${doc.gradient}`}
                >
                  <div className="absolute inset-0 bg-grid-faint bg-grid opacity-20" />
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/40 bg-white/15 text-2xl font-bold text-white backdrop-blur-sm">
                    {doc.initials}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {doc.availability}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-ink">{doc.name}</h3>
                  <p className="text-sm font-medium text-primary-700">
                    {doc.specialty}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-ink-muted">
                    <li className="flex items-center gap-2">
                      <Award className="h-3.5 w-3.5 text-secondary" />
                      {doc.qualifications}
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-secondary" />
                      {doc.experience} experience
                    </li>
                    <li className="flex items-center gap-2">
                      <Languages className="h-3.5 w-3.5 text-secondary" />
                      {doc.languages.join(", ")}
                    </li>
                  </ul>

                  <a
                    href="#contact"
                    className="btn-primary mt-5 w-full text-sm"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Book Consultation
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
