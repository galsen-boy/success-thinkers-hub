import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

export function Footer() {
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
            Architectures d'entreprise durables et résilientes — Oracle, Microsoft & Red Hat.
            Pour les banques, télécoms, gouvernements et grandes corporations BTP / Énergie.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
            Design, build and deploy
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/projets" className="hover:text-foreground">Projets</Link></li>
            <li><Link to="/partenaires" className="hover:text-foreground">Partenaires</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-foreground font-semibold mb-4">Contact</h4>
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
                Ouest foire lot 12805, Yoff, Dakar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SUCCESS Thinkers. Tous droits réservés.</p>
          <p className="tracking-wider">Pape DIENG — Directeur Général & Fondateur · Oracle IT Consultant Expert</p>
        </div>
      </div>
    </footer>
  );
}
