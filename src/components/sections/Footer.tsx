import { Plus, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import {
  CLINIC,
  NAV_LINKS,
  telHref,
  whatsappHref,
  DEFAULT_WA_MESSAGE,
} from "../../lib/site";

export function Footer() {
  return (
    <footer className="relative bg-primary-950 text-white/80">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1.3fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-accent text-white">
                <Plus className="h-5 w-5" strokeWidth={2.6} />
              </span>
              <span className="text-lg font-bold text-white">
                CNM{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Clinic
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Reliable general and specialised treatment for the Kamothe
              community, delivered with care and patient comfort.
            </p>
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

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3.5 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-secondary" />
                <span className="leading-relaxed">{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-none text-secondary" />
                <a
                  href={telHref(CLINIC.phoneRaw)}
                  className="font-medium text-white transition-colors hover:text-secondary"
                >
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 flex-none text-secondary" />
                <a
                  href={whatsappHref(CLINIC.whatsappRaw, DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary"
                >
                  Message on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 flex-none text-secondary" />
                {CLINIC.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Kamothe, Navi Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
