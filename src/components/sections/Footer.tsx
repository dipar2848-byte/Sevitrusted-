import {
  Plus,
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { CLINIC, NAV_LINKS, telHref } from "../../lib/site";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-primary-950 text-white/80">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                <Plus className="h-5 w-5" strokeWidth={2.6} />
              </span>
              <span className="text-lg font-bold text-white">
                Sevi
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Trusted
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Premium, technology-enabled healthcare designed around you.
              Personalized care, trusted doctors, smarter health management.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-secondary/40 hover:bg-secondary/15 hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-secondary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-secondary">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-secondary">
                  Patient Charter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-secondary">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-secondary" />
                {CLINIC.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-none text-secondary" />
                <a href={telHref(CLINIC.phoneRaw)} className="hover:text-secondary">
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-none text-secondary" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-secondary">
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-none text-secondary" />
                {CLINIC.hours}
              </li>
            </ul>

            {/* Emergency */}
            <a
              href={telHref(CLINIC.emergencyRaw)}
              className="mt-4 flex items-center gap-2.5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200 transition-colors hover:bg-red-500/20"
            >
              <AlertTriangle className="h-4 w-4 flex-none" />
              Emergency: {CLINIC.emergencyDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Crafted for a premium patient experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
