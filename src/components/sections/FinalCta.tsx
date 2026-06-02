import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  User,
  Smartphone,
  Stethoscope,
  CalendarDays,
} from "lucide-react";
import { CLINIC, DEFAULT_WA_MESSAGE, telHref, whatsappHref } from "../../lib/site";
import {
  GENERAL_TREATMENTS,
  SPECIALISED_TREATMENTS,
} from "../../data/content";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

const TREATMENT_OPTIONS = [
  ...GENERAL_TREATMENTS.items,
  ...SPECIALISED_TREATMENTS.items,
];

interface FormState {
  name: string;
  phone: string;
  treatment: string;
  date: string;
}

const emptyForm = (): FormState => ({
  name: "",
  phone: "",
  treatment: TREATMENT_OPTIONS[0],
  date: "",
});

export function FinalCta() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!form.date) next.date = "Pick a preferred date.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint bg-grid opacity-[0.07]" />
      <div className="pointer-events-none absolute -right-20 -top-10 -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy + quick actions */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur"
            >
              Book Your Visit
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Ready to Visit CNM Clinic?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
            >
              Book your consultation today. Call us or message on WhatsApp, or
              fill in the form and we will confirm your appointment.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref(CLINIC.phoneRaw)}
                className="btn bg-white text-primary-700 hover:bg-white/90"
              >
                <Phone className="h-4 w-4" />
                Call {CLINIC.phoneDisplay}
              </a>
              <a
                href={whatsappHref(CLINIC.whatsappRaw, DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" />
                Experienced doctors
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" />
                General &amp; specialised care
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-400" />
                Easy to reach
              </span>
            </motion.div>
          </motion.div>

          {/* Booking form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-4xl border border-white/60 bg-white p-6 shadow-premium sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent-600"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.span>
                <h3 className="mt-5 text-xl font-bold text-ink">Request received</h3>
                <p className="mt-2 max-w-xs text-sm text-ink-muted">
                  Thank you, {form.name.split(" ")[0]}. The clinic will contact you
                  on the number provided to confirm your appointment.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm(emptyForm());
                  }}
                  className="btn-secondary mt-6"
                >
                  Book another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-ink">Book an Appointment</h3>
                  <p className="text-sm text-ink-muted">
                    Share a few details and we will call you back.
                  </p>
                </div>

                <Field
                  id="name"
                  label="Full name"
                  icon={<User className="h-4 w-4" />}
                  error={errors.name}
                >
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
                  />
                </Field>

                <Field
                  id="phone"
                  label="Phone number"
                  icon={<Smartphone className="h-4 w-4" />}
                  error={errors.phone}
                >
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Your mobile number"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    id="treatment"
                    label="Treatment"
                    icon={<Stethoscope className="h-4 w-4" />}
                  >
                    <select
                      id="treatment"
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="w-full bg-transparent text-sm text-ink outline-none"
                    >
                      {TREATMENT_OPTIONS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    id="date"
                    label="Preferred date"
                    icon={<CalendarDays className="h-4 w-4" />}
                    error={errors.date}
                  >
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-transparent text-sm text-ink outline-none"
                    />
                  </Field>
                </div>

                <button type="submit" className="btn-primary group w-full">
                  Request Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-ink-muted">
                  We will only use your details to contact you about your visit.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, icon, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-ink-soft">
        {label}
      </label>
      <div
        className={`flex items-center gap-2.5 rounded-2xl border bg-surface px-3.5 py-3 transition-colors focus-within:border-primary-400 focus-within:bg-white ${
          error ? "border-red-300" : "border-slate-200"
        }`}
      >
        <span className="text-primary-600">{icon}</span>
        {children}
      </div>
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}
