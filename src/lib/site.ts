// Central place for clinic contact details + conversion links.
export const CLINIC = {
  name: "SeviTrusted Clinic",
  shortName: "SeviTrusted",
  tagline: "Healthcare Built Around You",
  phoneDisplay: "+1 (800) 738-487",
  phoneRaw: "+1800738487",
  whatsappRaw: "1800738487",
  email: "care@sevitrusted.com",
  address: "221 Wellness Avenue, Suite 400, San Francisco, CA 94107",
  emergencyDisplay: "+1 (800) 911-4357",
  emergencyRaw: "+18009114357",
  hours: "Mon–Fri 8:00–20:00 · Sat–Sun 9:00–17:00",
} as const;

export const telHref = (raw: string) => `tel:${raw}`;

export const whatsappHref = (raw: string, message?: string) =>
  `https://wa.me/${raw}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const DEFAULT_WA_MESSAGE =
  "Hi SeviTrusted Clinic 👋 I'd like to book an appointment.";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
