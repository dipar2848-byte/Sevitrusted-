import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  MapPin,
  Clock,
} from "lucide-react";
import { CLINIC } from "../../lib/site";
import { EASE, fadeUp, staggerContainer } from "../../lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-surface to-surface" />
        <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <motion.div
          style={{ y: yGlow }}
          className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-secondary/25 blur-3xl"
        />
        <motion.div
          style={{ y: yGlow }}
          className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              CNM Clinic · Kamothe, Navi Mumbai
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl"
            >
              Trusted Care, <span className="text-gradient">Close to Home.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              Reliable general and specialised treatment for you and your family,
              delivered with care, clarity, and comfort by experienced doctors.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary group w-full sm:w-auto">
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-secondary w-full sm:w-auto">
                View Treatments
              </a>
            </motion.div>

            {/* Honest clinic info indicators */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-2.5 text-sm text-ink-soft"
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 flex-none text-primary-600" />
                Sector 6A, Kamothe, Panvel, Navi Mumbai
              </span>
              <span className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-none text-primary-600" />
                {CLINIC.hours}
              </span>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ y: yImg }} className="relative mx-auto max-w-md">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary shadow-premium">
                <div className="aspect-[4/5] w-full">
                  <DoctorPortrait />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900/70 to-transparent p-6">
                  <p className="text-sm font-semibold text-white/90">
                    Experienced Consulting Physicians
                  </p>
                  <p className="text-xs text-white/70">
                    General &amp; specialised care
                  </p>
                </div>
              </div>

              {/* Floating info card — top */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-10 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 p-3 shadow-card backdrop-blur-xl sm:-left-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-600">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Caring</p>
                  <p className="text-xs text-ink-muted">Patient-first</p>
                </div>
              </motion.div>

              {/* Floating info card — bottom */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 p-3 shadow-card backdrop-blur-xl sm:-right-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <Stethoscope className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Two Doctors</p>
                  <p className="text-xs text-ink-muted">On consultation</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Lightweight inline SVG portrait — no external image, crisp on every device. */
function DoctorPortrait() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a clinic doctor"
    >
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FCD9C0" />
          <stop offset="1" stopColor="#F1B894" />
        </linearGradient>
        <linearGradient id="coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E9FBF7" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="rgba(255,255,255,0.06)" />
      <circle cx="200" cy="150" r="120" fill="rgba(255,255,255,0.08)" />
      <path
        d="M70 500 C70 360 130 320 200 320 C270 320 330 360 330 500 Z"
        fill="url(#coat)"
      />
      <rect x="178" y="250" width="44" height="70" rx="20" fill="url(#skin)" />
      <circle cx="200" cy="190" r="78" fill="url(#skin)" />
      <path
        d="M122 180 C122 120 160 96 200 96 C240 96 278 120 278 180 C262 150 232 140 200 140 C168 140 138 150 122 180 Z"
        fill="#2B2B33"
      />
      <path
        d="M180 322 C168 380 150 400 150 430"
        stroke="#0E7C86"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M220 322 C232 380 250 400 250 430"
        stroke="#0E7C86"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="250" cy="440" r="16" fill="#14B8A6" stroke="#0E7C86" strokeWidth="6" />
      <path d="M178 320 L200 360 L168 372 Z" fill="#D7F6F0" />
      <path d="M222 320 L200 360 L232 372 Z" fill="#D7F6F0" />
      <circle cx="176" cy="186" r="6" fill="#2B2B33" />
      <circle cx="224" cy="186" r="6" fill="#2B2B33" />
      <path
        d="M182 220 Q200 234 218 220"
        stroke="#B97A57"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
