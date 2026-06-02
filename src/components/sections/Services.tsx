import { motion } from "framer-motion";
import { Check, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  GENERAL_TREATMENTS,
  SPECIALISED_TREATMENTS,
  GENERAL_TREATMENT_ICONS,
  type TreatmentGroup,
} from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Treatments"
          icon={<Stethoscope className="h-3.5 w-3.5" />}
          title={
            <>
              Care for everyday and{" "}
              <span className="text-gradient">specialised needs.</span>
            </>
          }
          subtitle="Clear, professional treatment for common conditions as well as focused specialised care — all in one trusted clinic."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 lg:grid-cols-2">
          <TreatmentCard group={GENERAL_TREATMENTS} withIcons />
          <TreatmentCard group={SPECIALISED_TREATMENTS} />
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({
  group,
  withIcons = false,
}: {
  group: TreatmentGroup;
  withIcons?: boolean;
}) {
  const HeaderIcon = group.icon;

  return (
    <motion.div
      variants={staggerContainer(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-col rounded-4xl border border-slate-100 bg-white p-6 shadow-card sm:p-7"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary text-white shadow-glow">
          <HeaderIcon className="h-6 w-6" />
        </span>
        <h3 className="text-xl font-bold text-ink">{group.title}</h3>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-3 text-sm leading-relaxed text-ink-muted"
      >
        {group.description}
      </motion.p>

      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {group.items.map((item) => {
          const ItemIcon: LucideIcon | undefined = withIcons
            ? GENERAL_TREATMENT_ICONS[item]
            : undefined;
          return (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-surface px-3.5 py-2.5"
            >
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                {ItemIcon ? (
                  <ItemIcon className="h-4 w-4" />
                ) : (
                  <Check className="h-4 w-4" />
                )}
              </span>
              <span className="text-sm font-medium text-ink">{item}</span>
            </motion.li>
          );
        })}
      </ul>

      <a href="#contact" className="btn-primary mt-6 w-full text-sm">
        Book a Consultation
      </a>
    </motion.div>
  );
}
