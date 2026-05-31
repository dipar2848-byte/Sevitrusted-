import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  icon?: ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  icon,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.span variants={fadeUp} className="eyebrow">
        {icon}
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-bold leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
