import {
  Thermometer,
  Activity,
  Wind,
  HeartPulse,
  BatteryLow,
  Scissors,
  Stethoscope,
  Droplets,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Treatments — real clinic data                                       */
/* ------------------------------------------------------------------ */

export interface TreatmentGroup {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export const GENERAL_TREATMENTS: TreatmentGroup = {
  icon: Stethoscope,
  title: "General Treatments",
  description:
    "Everyday care for common health concerns, with timely diagnosis and clear guidance.",
  items: [
    "Fever",
    "Body pain",
    "Cold & cough",
    "Stomach pain",
    "Weakness",
    "Hair fall",
    "Women's health issues",
  ],
};

export const SPECIALISED_TREATMENTS: TreatmentGroup = {
  icon: Scissors,
  title: "Specialised Treatments",
  description:
    "Focused care for specific conditions, delivered with experience and patient comfort in mind.",
  items: [
    "Piles",
    "Fissure",
    "Fistula",
    "Abscess",
    "Sexual health disorders",
    "Kidney stones",
    "Hydrocele",
  ],
};

// Small icon set used to give each general treatment a clean visual cue.
export const GENERAL_TREATMENT_ICONS: Record<string, LucideIcon> = {
  Fever: Thermometer,
  "Body pain": Activity,
  "Cold & cough": Wind,
  "Stomach pain": HeartPulse,
  Weakness: BatteryLow,
  "Hair fall": Droplets,
  "Women's health issues": HeartPulse,
};

/* ------------------------------------------------------------------ */
/* Doctors — real clinic data                                          */
/* ------------------------------------------------------------------ */

export interface Doctor {
  name: string;
  role: string;
  initials: string;
  gradient: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Nitin MS",
    role: "Consulting Physician",
    initials: "NM",
    gradient: "from-primary-600 to-secondary",
  },
  {
    name: "Dr. Ramita Rathod",
    role: "Consulting Physician",
    initials: "RR",
    gradient: "from-secondary to-accent",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ — kept factual and general                                      */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can call the clinic directly or message us on WhatsApp to book a convenient consultation time.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We treat common general conditions such as fever, body pain, cold & cough, and stomach pain, along with specialised conditions including piles, fissure, fistula, kidney stones, and hydrocele.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "We are located at Shop No. 2, Manisha Apartment, Near Ramsheth Thakur School, Sector 6A, Kamothe, Panvel, Navi Mumbai – 410209.",
  },
  {
    question: "Do I need an appointment to visit?",
    answer:
      "Walk-ins are welcome during consultation hours. Booking ahead by phone or WhatsApp helps reduce waiting time.",
  },
];
