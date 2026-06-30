import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-carbon-grad mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-red border border-signal/40">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-base font-bold tracking-wide">
              SUCCESS<span className="text-[#E50914]">.</span>Thinkers
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
            {t("footer.tagline")}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
            {t("footer.slogan")}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">{t("footer.navigation")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">{t("nav.home")}</Link></li>
            <li><Link to="/services" className="hover:text-foreground">{t("nav.services")}</Link></li>
            <li><Link to="/projets" className="hover:text-foreground">{t("nav.projects")}</Link></li>
            <li><Link to="/partenaires" className="hover:text-foreground">{t("nav.partners")}</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[#E50914]" /> contact@success-thinkers.com</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[#E50914]" /> +221 77 443 06 06</li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[#E50914]" />
              <a
                href="https://www.openstreetmap.org/?mlat=14.7497&mlon=-17.4914#map=17/14.7497/-17.4914"
                target="_blank" rel="noreferrer"
                className="hover:text-foreground"
              >
                {t("footer.address")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SUCCESS Thinkers. {t("footer.rights")}</p>
          <p className="tracking-wider">{t("footer.ceo")}</p>
        </div>
      </div>
    </footer>
  );
}
