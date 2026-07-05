import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Zap, Facebook, Linkedin, Youtube, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Custom X (formerly Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = {
  facebook: "#",
  linkedin: "#",
  x: "#",
  youtube: "#",
};

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Inscription Newsletter - SUCCESS Thinkers");
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite m'inscrire à la newsletter de SUCCESS Thinkers avec l'adresse email suivante : ${email}\n\n(Intégration backend : TODO)`,
    );

    toast.info(t("newsletter.toastOpening"));

    setTimeout(() => {
      window.location.href = `mailto:newsletters@successthinkers.org?subject=${subject}&body=${body}`;
    }, 1200);
  };

  return (
    <footer className="border-t border-border bg-carbon-grad mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex flex-col items-end leading-none select-none w-fit">
            <span className="text-xl font-black tracking-[-0.04em] text-foreground uppercase">
              SUCCESS
            </span>
            <span className="text-xs font-extrabold text-foreground tracking-wide mt-[2px] pr-[1px]">
              Thinkers
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {t("footer.tagline")}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
            {t("footer.slogan")}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
            {t("footer.navigation")}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/techniques" className="hover:text-foreground transition-colors">
                {t("nav.techniques")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-foreground transition-colors">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link to="/projets" className="hover:text-foreground transition-colors">
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link to="/partenaires" className="hover:text-foreground transition-colors">
                {t("nav.partners")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground transition-colors">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-[#E50914]" />
              <a
                href="mailto:contact@successthinkers.org"
                className="hover:text-foreground transition-colors"
              >
                contact@successthinkers.org
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-[#E50914]" />
              <a
                href="https://wa.me/221774430606"
                className="hover:text-foreground transition-colors"
              >
                +221 77 443 06 06 (WhatsApp)
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[#E50914] shrink-0" />
              <span className="leading-snug">{t("footer.address")}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
              {t("newsletter.title")}
            </h4>
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              {t("newsletter.subtitle")}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.emailPlaceholder")}
                className="min-w-0 flex-1 rounded-md border border-border bg-black/40 px-3 py-2 text-xs text-foreground outline-none focus:border-signal transition-colors"
              />
              <button
                type="submit"
                className="rounded-md bg-[#E50914] hover:bg-[#c2080f] px-3 py-2 text-xs font-semibold text-white shadow-signal transition-colors flex items-center justify-center shrink-0"
              >
                <Send className="h-3 w-3" />
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
              {t("social.title")}
            </h4>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-foreground transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-foreground transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="hover:text-foreground transition-colors duration-200"
              >
                <XIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-foreground transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} SUCCESS Thinkers. {t("footer.rights")}
          </p>
          <p className="tracking-wider">{t("footer.ceo")}</p>
        </div>
      </div>
    </footer>
  );
}
