# CNM Clinic — Clinic Website

A clean, **mobile-first**, professional website for **CNM Clinic**, Kamothe, Navi Mumbai.
Built to clearly present the clinic's real treatments, doctors, and contact details
and to make booking an appointment simple.

---

## ✨ Tech Stack

- **Vite** — fast build tooling
- **React 18 + TypeScript** — type-safe, component-driven architecture
- **Tailwind CSS** — custom, minimal design system
- **Framer Motion** — subtle, professional animations
- **Lucide React** — clean iconography

---

## 🎨 Design System

| Token       | Value     |
| ----------- | --------- |
| Primary     | `#0E7C86` |
| Secondary   | `#14B8A6` |
| Accent      | `#22C55E` |
| Background  | `#F8FAFC` |
| Text        | `#0F172A` |

---

## 🧩 Sections

1. **Hero** — clinic intro, location & hours, primary CTAs (honest, no inflated claims)
2. **Treatments** — two clearly grouped, real lists:
   - **General Treatments:** Fever · Body pain · Cold & cough · Stomach pain · Weakness · Hair fall · Women's health issues
   - **Specialised Treatments:** Piles · Fissure · Fistula · Abscess · Sexual health disorders · Kidney stones · Hydrocele
3. **Doctors** — the real consulting physicians: **Dr. Nitin MS** and **Dr. Ramita Rathod**
4. **About** — honest, value-based description of the clinic
5. **FAQ** — factual answers about booking, treatments, and location
6. **Contact / Book** — appointment request form (name, phone, treatment, date) + Call & WhatsApp
7. **Footer** — structured contact details:
   - **Address:** Shop No. 2, Manisha Apartment, Near Ramsheth Thakur School, Sector 6A, Kamothe, Panvel, Navi Mumbai – 410209
   - **Phone:** 07738078241 (clickable `tel:` link)

---

## 📞 Contact

All contact details live in **`src/lib/site.ts`** and treatment/doctor content in
**`src/data/content.ts`** — edit these two files to update the site.

- Phone: `07738078241` → dials `+917738078241`
- WhatsApp: opens chat to `+917738078241`

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
│   ├── sections/      # Hero, Services (treatments), Doctors, About, Faq, FinalCta, Footer
│   ├── ui/            # SectionHeader, Reveal
│   ├── Navbar.tsx
│   ├── FloatingActions.tsx
│   └── ScrollProgress.tsx
├── data/content.ts    # real treatments, doctors, FAQs
├── lib/               # site config (contact) + motion presets
├── App.tsx
└── main.tsx
```

---

© CNM Clinic, Kamothe, Navi Mumbai.
