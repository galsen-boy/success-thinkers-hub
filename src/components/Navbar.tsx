import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Zap } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/techniques", label: t("nav.techniques") },
    { to: "/services", label: t("nav.services") },
    { to: "/projets", label: t("nav.projects") },
    { to: "/partenaires", label: t("nav.partners") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border/60 bg-black/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
      >
        <Link to="/" className="flex flex-col items-end group leading-none select-none">
          <span className="text-xl md:text-2xl font-black tracking-[-0.04em] text-foreground uppercase">
            SUCCESS
          </span>
          <span className="text-xs md:text-sm font-extrabold text-foreground tracking-wide mt-[2px] pr-[1px]">
            Thinkers
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
                    <motion.span
                      layoutId="navbarActiveUnderline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-[#E50914] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-[#E50914] px-4 py-2 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-colors"
          >
            {t("nav.audit")}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeToggle />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
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
              {t("nav.audit")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
