import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import { FAQS } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="FAQ"
          icon={<HelpCircle className="h-3.5 w-3.5" />}
          title={
            <>
              Questions?{" "}
              <span className="text-gradient">We've got answers.</span>
            </>
          }
          subtitle="Everything you need to know about appointments, insurance, and care."
        />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-10 max-w-3xl space-y-3"
        >
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.question}
                variants={fadeUp}
                className={`overflow-hidden rounded-3xl border bg-white transition-colors ${
                  isOpen
                    ? "border-primary-200 shadow-card"
                    : "border-slate-100"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ ease: EASE }}
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-gradient-to-br from-primary-600 to-secondary text-white"
                        : "bg-primary-50 text-primary-700"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
