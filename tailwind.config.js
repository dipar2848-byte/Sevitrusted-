/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7C86",
          50: "#ECFDFB",
          100: "#D0FBF4",
          200: "#A4F4EA",
          300: "#6DE7DC",
          400: "#34CFC8",
          500: "#14B8A6",
          600: "#0E7C86",
          700: "#0C636C",
          800: "#0D4F57",
          900: "#0F4249",
          950: "#042A2F",
        },
        secondary: {
          DEFAULT: "#14B8A6",
        },
        accent: {
          DEFAULT: "#22C55E",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
          muted: "#64748B",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(14, 124, 134, 0.18)",
        premium:
          "0 24px 60px -28px rgba(14, 124, 134, 0.35), 0 8px 24px -16px rgba(15, 23, 42, 0.18)",
        glow: "0 0 0 1px rgba(20, 184, 166, 0.18), 0 18px 48px -20px rgba(20, 184, 166, 0.45)",
        card: "0 12px 40px -16px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};
