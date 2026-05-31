import { motion } from "framer-motion";
import { STATS } from "../../data/content";
import { Counter } from "../ui/Counter";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export function Stats() {
  return (
    <section className="relative section-pad">
      <div className="container-page">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-3 rounded-4xl border border-white/60 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary p-6 shadow-premium sm:gap-4 sm:p-8 lg:grid-cols-4 lg:p-10"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-3xl bg-white/10 p-5 text-center backdrop-blur-sm"
            >
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-xs font-medium text-white/80 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
