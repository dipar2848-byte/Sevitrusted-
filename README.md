# SeviTrusted Clinic — Premium Healthcare Website

A production-ready, **mobile-first**, conversion-optimized clinic website built to feel closer to Apple, Stripe, Linear, and Vercel than a traditional hospital site.

Designed to maximize **appointment bookings, consultation requests, WhatsApp inquiries, phone calls, trust, and lead generation**.

---

## ✨ Tech Stack

- **Vite** — lightning-fast build tooling
- **React 18 + TypeScript** — type-safe, component-driven architecture
- **Tailwind CSS** — custom premium design system
- **Framer Motion** — cinematic, scroll-triggered animations
- **Lucide React** — modern iconography

---

## 🎨 Design System

| Token       | Value     |
| ----------- | --------- |
| Primary     | `#0E7C86` |
| Secondary   | `#14B8A6` |
| Accent      | `#22C55E` |
| Background  | `#F8FAFC` |
| Text        | `#0F172A` |

Features soft gradients, glassmorphism, large rounded corners, premium shadows,
layered depth, strong typographic hierarchy, and spacious layouts.

---

## 🧩 Sections

1. **Hero** — headline, dual CTAs, floating trust cards, parallax, animated portrait
2. **Trust Indicators** — animated counting stats (10,000+ patients, 50+ specialists, 98% satisfaction, 15+ years)
3. **Services** — 8 premium animated service cards with benefits + CTA
4. **Doctor Showcase** — filterable specialist profiles with credentials & availability
5. **Automation Ecosystem** — animated interconnected workflow (AI receptionist, WhatsApp, CRM, analytics…)
6. **How It Works** — animated 4-step timeline
7. **Testimonials** — auto-rotating, touch-friendly carousel
8. **Facility Showcase** — masonry gallery with lightbox
9. **FAQ** — animated accordion
10. **Final CTA** — high-converting lead-capture form with smart validation + Call / WhatsApp buttons
11. **Footer** — address, contact, social, legal, emergency, quick links

---

## 🚀 Conversion Features

- Sticky mobile booking action bar
- Floating WhatsApp + persistent call buttons (with pulse animation)
- Lead-capture booking form with live validation
- Trust badges, doctor credentials, review indicators
- Conversion-focused CTAs throughout

---

## 📱 Mobile-First

Optimized for `320 / 360 / 390 / 412 / 430 / 768px`. No horizontal scroll,
large tap targets (≥48px), safe-area aware, thumb-friendly navigation.

---

## 🔍 SEO & Performance

- Full metadata, Open Graph & Twitter cards
- `MedicalClinic` + `LocalBusiness` structured data (JSON-LD)
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, SVG favicon & social preview
- Code splitting (vendor / motion / icons chunks), lazy reveals, reduced-motion support
- Accessible focus states, semantic HTML, ARIA labels

---

## 🛠️ Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:3000)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

---

## 📂 Structure

```
src/
├── components/
│   ├── sections/      # Hero, Stats, Services, Doctors, Automation, …
│   ├── ui/            # Reveal, SectionHeader, Counter
│   ├── Navbar.tsx
│   ├── FloatingActions.tsx
│   └── ScrollProgress.tsx
├── data/content.ts    # all editable content (services, doctors, FAQs…)
├── lib/               # site config + motion presets
├── App.tsx
└── main.tsx
```

> Edit clinic contact details in `src/lib/site.ts` and content in `src/data/content.ts`.

---

© SeviTrusted Clinic. Built for a real healthcare business, production-ready.
