import {
  Stethoscope,
  Baby,
  HeartPulse,
  Sparkles,
  Bone,
  Activity,
  FlaskConical,
  ShieldCheck,
  Bot,
  CalendarCheck,
  MessageCircle,
  Magnet,
  Database,
  ClipboardList,
  Repeat,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Comprehensive primary care for everyday health concerns and long-term wellbeing.",
    benefits: ["Same-day visits", "Chronic care plans", "Lab integration"],
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Gentle, expert care for infants, children, and adolescents at every stage.",
    benefits: ["Growth tracking", "Vaccination plans", "Parent guidance"],
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    description:
      "Advanced heart care with diagnostics, monitoring, and prevention.",
    benefits: ["ECG & echo", "Risk screening", "Specialist team"],
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    description:
      "Skin, hair, and aesthetic treatments backed by clinical expertise.",
    benefits: ["Skin analysis", "Acne & eczema", "Aesthetic care"],
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Restore movement with joint, bone, and sports-injury specialists.",
    benefits: ["Joint care", "Sports injury", "Rehab plans"],
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description:
      "Personalized recovery programs to rebuild strength and mobility.",
    benefits: ["1-on-1 therapy", "Pain relief", "Recovery plans"],
  },
  {
    icon: FlaskConical,
    title: "Diagnostics",
    description:
      "Fast, accurate lab and imaging with digital results delivery.",
    benefits: ["Rapid results", "Digital reports", "On-site labs"],
  },
  {
    icon: ShieldCheck,
    title: "Preventive Checkups",
    description:
      "Proactive health screenings tailored to your age and lifestyle.",
    benefits: ["Full body check", "Tailored plans", "Early detection"],
  },
];

export interface Doctor {
  name: string;
  specialty: string;
  category: string;
  qualifications: string;
  experience: string;
  languages: string[];
  availability: string;
  initials: string;
  gradient: string;
}

export const DOCTOR_CATEGORIES = [
  "All",
  "General",
  "Pediatrics",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
] as const;

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Aisha Rahman",
    specialty: "General Physician",
    category: "General",
    qualifications: "MBBS, MD (Internal Medicine)",
    experience: "12+ years",
    languages: ["English", "Arabic", "French"],
    availability: "Mon–Fri",
    initials: "AR",
    gradient: "from-primary-500 to-secondary",
  },
  {
    name: "Dr. Daniel Okafor",
    specialty: "Pediatric Specialist",
    category: "Pediatrics",
    qualifications: "MBBS, DCH, MD (Pediatrics)",
    experience: "10+ years",
    languages: ["English", "Spanish"],
    availability: "Tue–Sat",
    initials: "DO",
    gradient: "from-secondary to-accent",
  },
  {
    name: "Dr. Mei Lin Chen",
    specialty: "Consultant Cardiologist",
    category: "Cardiology",
    qualifications: "MD, DM (Cardiology), FACC",
    experience: "16+ years",
    languages: ["English", "Mandarin"],
    availability: "Mon–Thu",
    initials: "MC",
    gradient: "from-primary-600 to-primary-400",
  },
  {
    name: "Dr. Sofia Almeida",
    specialty: "Dermatologist",
    category: "Dermatology",
    qualifications: "MBBS, MD (Dermatology)",
    experience: "9+ years",
    languages: ["English", "Portuguese", "Spanish"],
    availability: "Wed–Sun",
    initials: "SA",
    gradient: "from-accent to-secondary",
  },
  {
    name: "Dr. James Whitaker",
    specialty: "Orthopedic Surgeon",
    category: "Orthopedics",
    qualifications: "MBBS, MS (Ortho), FRCS",
    experience: "18+ years",
    languages: ["English"],
    availability: "Mon–Fri",
    initials: "JW",
    gradient: "from-primary-700 to-secondary",
  },
  {
    name: "Dr. Priya Nair",
    specialty: "Family Medicine",
    category: "General",
    qualifications: "MBBS, MRCGP",
    experience: "11+ years",
    languages: ["English", "Hindi", "Tamil"],
    availability: "Tue–Sat",
    initials: "PN",
    gradient: "from-secondary to-primary-500",
  },
];

export interface AutomationItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const AUTOMATION: AutomationItem[] = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "Answers patient questions 24/7 with instant, accurate replies.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Automation",
    description: "Automatically schedules and manages bookings in real time.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Sends confirmations, reminders, and updates instantly.",
  },
  {
    icon: Magnet,
    title: "Lead Capture System",
    description: "Converts website visitors into booked patients.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Centralized, secure patient management in one place.",
  },
  {
    icon: ClipboardList,
    title: "Online Patient Forms",
    description: "Frictionless digital onboarding before every visit.",
  },
  {
    icon: Repeat,
    title: "Follow-Up Automation",
    description: "Automated post-visit communication and care nudges.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track clinic performance and patient flow at a glance.",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  initials: string;
  gradient: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Hannah Brooks",
    role: "Patient · Cardiology",
    rating: 5,
    quote:
      "Booking took 30 seconds and I got a WhatsApp confirmation instantly. The cardiologist was thorough and genuinely caring. Best clinic experience I've ever had.",
    initials: "HB",
    gradient: "from-primary-500 to-secondary",
  },
  {
    name: "Marcus Lee",
    role: "Parent · Pediatrics",
    rating: 5,
    quote:
      "The team made my daughter feel completely at ease. Automated reminders meant we never missed a vaccination. Truly modern, human-centered care.",
    initials: "ML",
    gradient: "from-secondary to-accent",
  },
  {
    name: "Elena Rossi",
    role: "Patient · Dermatology",
    rating: 5,
    quote:
      "Clean facilities, friendly staff, and digital reports delivered the same day. It feels like the future of healthcare — but warm and personal.",
    initials: "ER",
    gradient: "from-accent to-primary-500",
  },
  {
    name: "David Kim",
    role: "Patient · Orthopedics",
    rating: 5,
    quote:
      "After my knee surgery, the follow-up automation kept me on track with rehab. I felt supported every single step of the recovery.",
    initials: "DK",
    gradient: "from-primary-600 to-secondary",
  },
];

export interface FacilityItem {
  title: string;
  span: string;
  gradient: string;
}

export const FACILITIES: FacilityItem[] = [
  {
    title: "Consultation Rooms",
    span: "sm:col-span-2 sm:row-span-2",
    gradient: "from-primary-600 via-primary-500 to-secondary",
  },
  {
    title: "Medical Equipment",
    span: "",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Reception Area",
    span: "",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    title: "Treatment Rooms",
    span: "sm:col-span-2",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Diagnostic Facilities",
    span: "sm:col-span-1",
    gradient: "from-primary-700 to-secondary",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "Tap “Book Appointment” anywhere on the site or message us on WhatsApp. You'll receive an instant confirmation and reminders before your visit.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with most major insurance providers and offer transparent self-pay pricing. Our team verifies your coverage before your appointment.",
  },
  {
    question: "Are your doctors board-certified?",
    answer:
      "Every specialist is fully credentialed and board-certified, with verified qualifications and years of clinical experience displayed on their profiles.",
  },
  {
    question: "Can I have an online consultation?",
    answer:
      "Yes. Secure video consultations are available for many specialties, with digital prescriptions and reports delivered straight to your phone.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major cards, digital wallets, bank transfers, and insurance direct billing for a smooth, flexible checkout.",
  },
  {
    question: "Do you offer emergency support?",
    answer:
      "Our emergency line is available with rapid-response coordination. For life-threatening situations, always call your local emergency number first.",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 10000, suffix: "+", label: "Patients Served" },
  { value: 50, suffix: "+", label: "Medical Specialists" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 15, suffix: "+", label: "Years Experience" },
];
