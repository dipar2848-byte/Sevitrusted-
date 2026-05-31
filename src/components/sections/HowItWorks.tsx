import { motion } from "framer-motion";
import {
  CalendarPlus,
  BellRing,
  UserCheck,
  HeartHandshake,
  Route,
} from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const STEPS = [
  {
    icon: CalendarPlus,
    title: "Book Appointment",
    text: "Choose your specialist and a time that suits you — in under a minute.",
  },
  {
    icon: BellRing,
    title: "Receive Confirmation",
    text: "Get instant confirmation and reminders via WhatsApp and email.",
  },
  {
    icon: UserCheck,
    title: "Consult Specialist",
    text: "Meet your doctor in-person or online with full digital records.",
  },
  {
    icon: HeartHandshake,
    title: "Automated Follow-Up",
    text: "Stay supported with automated check-ins and personalized care plans.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative section-pad bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="How It Works"
          icon={<Route className="h-3.5 w-3.5" />}
          title={
            <>
              Four simple steps to{" "}
              <span className="text-gradient">better health.</span>
            </>
          }
          subtitle="A seamless journey from first click to ongoing care — designed to feel effortless."
        />

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-14"
        >
          {/* Connecting timeline line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-300 via-secondary to-accent lg:left-0 lg:right-0 lg:top-[34px] lg:h-px lg:w-auto lg:bg-gradient-to-r" />

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-4 lg:gap-5">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center"
                >
                  <div className="relative z-10 flex-none">
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-secondary text-white shadow-glow ring-4 ring-white"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.span>
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white ring-2 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <div className="lg:mt-4">
                    <h3 className="text-base font-bold text-ink">{step.title}</h3>
                    <p className="mt-1.5 max-w-[14rem] text-sm leading-relaxed text-ink-muted">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
