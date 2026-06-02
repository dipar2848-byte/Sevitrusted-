// Central place for clinic contact details + conversion links.
export const CLINIC = {
  name: "CNM Clinic",
  shortName: "CNM",
  tagline: "Trusted Care, Close to Home",
  phoneDisplay: "07738078241",
  phoneRaw: "+917738078241",
  whatsappRaw: "917738078241",
  address:
    "Shop No. 2, Manisha Apartment, Near Ramsheth Thakur School, Sector 6A, Kamothe, Panvel, Navi Mumbai – 410209",
  hours: "Open Daily · Morning & Evening Consultations",
} as const;

export const telHref = (raw: string) => `tel:${raw}`;

export const whatsappHref = (raw: string, message?: string) =>
  `https://wa.me/${raw}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const DEFAULT_WA_MESSAGE =
  "Hello CNM Clinic, I would like to book an appointment.";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
