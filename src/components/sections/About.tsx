import { motion } from "framer-motion";
import { Heart, ShieldCheck, Microscope, Users, BadgeCheck } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const VALUES = [
  {
    icon: Heart,
    title: "Human-Centered Care",
    text: "Every plan is built around your life, not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Certified",
    text: "Board-certified specialists and rigorous safety standards.",
  },
  {
    icon: Microscope,
    title: "Modern Technology",
    text: "Digital records, fast diagnostics, and seamless follow-ups.",
  },
  {
    icon: Users,
    title: "Whole-Family Health",
    text: "From pediatrics to senior care — one trusted home for everyone.",
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
              eyebrow="About SeviTrusted"
              icon={<BadgeCheck className="h-3.5 w-3.5" />}
              title={
                <>
                  Premium healthcare with a{" "}
                  <span className="text-gradient">human touch.</span>
                </>
              }
              subtitle="For over 15 years, we've combined leading medical expertise with technology that removes friction — so you spend less time waiting and more time healing."
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
              <p className="text-xl font-extrabold text-gradient">15+ Years</p>
              <p className="text-xs text-ink-muted">Caring for our community</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
