import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Users, Crown, Briefcase, Cpu, HeartHandshake, Megaphone, Wallet,
  Server, ShieldCheck, HardDrive, Cpu as CpuIcon,
} from "lucide-react";
import { useDocumentMeta } from "../hooks/use-document-title";

export const Route = createFileRoute("/partenaires")({
  component: PartnersPage,
});

const NODE_IDS = ["sec", "exec", "tech", "hr", "com", "dfc"] as const;
const NODE_ICONS = [Users, Briefcase, Cpu, HeartHandshake, Megaphone, Wallet];
const APPLIANCE_ICONS = [HardDrive, Server, ShieldCheck];
const APPLIANCE_BADGES = [
  ["Oracle", "Flash NVMe", "RAC"],
  ["HA", "Multi-node", "ASM"],
  ["PCI-DSS", "STIG", "Mobile Money"],
];

function PartnersPage() {
  const { t } = useTranslation();
  useDocumentMeta(t("partners.meta.title"), t("partners.meta.description"));
  const [selected, setSelected] = useState<string>("tech");

  const nodes = t("partners.org.nodes", { returnObjects: true }) as { name: string; role: string }[];
  const appliances = t("partners.appliances.items", { returnObjects: true }) as { name: string; tagline: string; desc: string }[];

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("partners.hero.eyebrow")}</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            <span className="text-gradient-signal">{t("partners.hero.title1")}</span> {t("partners.hero.title2")}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">{t("partners.org.title")}</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">{t("partners.org.subtitle")}</p>

        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={() => setSelected("ceo")}
            className={`group rounded-xl border-2 px-8 py-5 text-center transition-all ${
              selected === "ceo" ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/60"
            }`}
          >
            <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#E50914] shadow-signal">
              <Crown className="h-6 w-6 text-white" />
            </span>
            <div className="mt-3 text-lg font-bold">Pape DIENG</div>
            <div className="text-xs uppercase tracking-widest text-[#E50914]">{t("partners.org.ceoRole")}</div>
          </button>

          <div className="h-10 w-px bg-border" />
          <div className="h-px w-full max-w-4xl bg-border" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-0 pt-10 w-full">
            {NODE_IDS.map((id, idx) => {
              const Icon = NODE_ICONS[idx];
              const node = nodes[idx];
              const isActive = selected === id;
              return (
                <div key={id} className="relative flex flex-col items-center">
                  <div className="absolute -top-10 left-1/2 h-10 w-px bg-border" />
                  <button
                    onClick={() => setSelected(id)}
                    className={`w-full rounded-lg border p-4 text-center transition-all ${
                      isActive ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/50 hover:-translate-y-1"
                    }`}
                  >
                    <span className={`flex h-10 w-10 mx-auto items-center justify-center rounded-md ${isActive ? "bg-[#E50914]" : "bg-black border border-border"}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div className="mt-3 text-sm font-bold leading-tight">{node.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{node.role}</div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-carbon-grad">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("partners.appliances.eyebrow")}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("partners.appliances.title")}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">{t("partners.appliances.subtitle")}</p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {appliances.map((a, idx) => {
              const Icon = APPLIANCE_ICONS[idx];
              return (
                <article key={a.name} className="hover-lift rounded-xl border border-border bg-black/70 p-6 flex flex-col">
                  <Icon className="h-8 w-8 text-[#E50914]" />
                  <h3 className="mt-4 text-lg font-bold leading-tight">{a.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{a.tagline}</p>
                  <p className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1">{a.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {APPLIANCE_BADGES[idx].map((b) => (
                      <span key={b} className="rounded-full border border-signal/40 bg-[#E50914]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E50914]">
                        {b}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-xl border border-border bg-black/60 p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold">{t("partners.appliances.hwPartnersTitle")}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("partners.appliances.hwPartnersSub")}</p>
              </div>
              <div className="flex items-center gap-8">
                {["IBM", "DELL", "HP"].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-foreground">
                    <CpuIcon className="h-5 w-5 text-[#E50914]" />
                    <span className="text-xl font-extrabold tracking-tight">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
