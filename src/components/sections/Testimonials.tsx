import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareHeart } from "lucide-react";
import { TESTIMONIALS } from "../../data/content";
import { SectionHeader } from "../ui/SectionHeader";
import { EASE } from "../../lib/motion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [paused, count]);

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Patient Stories"
          icon={<MessageSquareHeart className="h-3.5 w-3.5" />}
          title={
            <>
              Loved by patients,{" "}
              <span className="text-gradient">trusted by families.</span>
            </>
          }
          subtitle="Real experiences from people who chose care that revolves around them."
        />

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <div className="relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-7 shadow-premium sm:p-10">
            <Quote className="absolute right-6 top-6 h-12 w-12 text-primary-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="flex">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mt-5 text-lg font-medium leading-relaxed text-ink sm:text-xl">
                  “{active.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${active.gradient} font-bold text-white`}
                  >
                    {active.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{active.name}</p>
                    <p className="text-xs text-ink-muted">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-soft transition-colors hover:border-primary-200 hover:text-primary-700 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-7 bg-gradient-to-r from-primary-600 to-secondary"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-soft transition-colors hover:border-primary-200 hover:text-primary-700 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
