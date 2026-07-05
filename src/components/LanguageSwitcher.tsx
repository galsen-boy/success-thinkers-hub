import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const FLAGS: Record<string, string> = { en: "🇬🇧", fr: "🇫🇷" };
const LABELS: Record<string, string> = { en: "EN", fr: "FR" };

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const current = (mounted ? i18n.resolvedLanguage : "fr") || "fr";
  const langs = ["fr", "en"] as const;

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`inline-flex items-center rounded-md border border-border bg-black/60 p-0.5 ${compact ? "" : ""}`}
    >
      {langs.map((lng) => {
        const active = current.startsWith(lng);
        return (
          <button
            key={lng}
            onClick={() => {
              i18n.changeLanguage(lng);
              try {
                window.localStorage.setItem("st_lang", lng);
              } catch (e) {
                // ignore
              }
            }}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-[5px] px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors ${
              active
                ? "bg-[#E50914] text-white shadow-signal"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span aria-hidden className="text-sm leading-none">
              {FLAGS[lng]}
            </span>
            <span>{LABELS[lng]}</span>
          </button>
        );
      })}
    </div>
  );
}
