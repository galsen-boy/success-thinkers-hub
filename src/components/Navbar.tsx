import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-red border border-signal/40 shadow-signal">
            <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide text-foreground">
              SUCCESS<span className="text-[#E50914]">.</span>Thinkers
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Design · Build · Deploy
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-[#E50914] rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-colors"
        >
          Audit gratuit
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-black">
          <nav className="flex flex-col p-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-carbon hover:text-foreground"
                activeProps={{ className: "bg-carbon text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#E50914] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Audit gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
