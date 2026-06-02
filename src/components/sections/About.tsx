import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Stethoscope,
  MapPin,
  BadgeCheck,
} from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const VALUES = [
  {
    icon: Heart,
    title: "Patient-First Care",
    text: "We take time to listen and explain your treatment clearly.",
  },
  {
    icon: Stethoscope,
    title: "General & Specialised",
    text: "Everyday conditions and focused specialised treatment in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Trust",
    text: "A calm, clean, and welcoming clinic environment for every visit.",
  },
  {
    icon: MapPin,
    title: "Easy to Reach",
    text: "Conveniently located in Sector 6A, Kamothe, Navi Mumbai.",
  },
];

export function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              align="left"
              eyebrow="About CNM Clinic"
              icon={<BadgeCheck className="h-3.5 w-3.5" />}
              title={
                <>
                  Dependable healthcare with a{" "}
                  <span className="text-gradient">human touch.</span>
                </>
              }
              subtitle="CNM Clinic provides reliable general and specialised treatment for the Kamothe community, focused on careful diagnosis, clear guidance, and patient comfort."
            />

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    variants={fadeUp}
                    className="flex gap-3 rounded-3xl border border-slate-100 bg-white p-4 shadow-card"
                  >
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-ink">{v.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                        {v.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Visual collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="aspect-square rounded-4xl bg-gradient-to-br from-primary-600 to-secondary shadow-premium" />
                <div className="aspect-[4/5] rounded-4xl bg-gradient-to-br from-accent to-secondary shadow-card" />
              </div>
              <div className="space-y-3 pt-8">
                <div className="aspect-[4/5] rounded-4xl bg-gradient-to-br from-secondary to-primary-700 shadow-card" />
                <div className="aspect-square rounded-4xl bg-gradient-to-br from-primary-500 to-accent shadow-premium" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 text-center shadow-premium backdrop-blur-xl"
            >
              <p className="text-lg font-extrabold text-gradient">CNM Clinic</p>
              <p className="text-xs text-ink-muted">Kamothe, Navi Mumbai</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
