import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Layers, Database, ShieldCheck, FlaskConical, Cloud,
  Code2, ArrowRight, CheckCircle2,
} from "lucide-react";
import { useDocumentMeta } from "../hooks/use-document-title";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const QUADRANT_ICONS = [Layers, Database, ShieldCheck, FlaskConical];
const STACK_ICONS = [Database, Cloud, Code2];
const STACK_COLORS = ["from-red-500/20", "from-blue-500/20", "from-emerald-500/20"];
const STACK_KEYS = ["oracle", "microsoft", "platform"] as const;
const STACK_ITEMS = {
  oracle: ["RAC", "ASM", "ODI", "SGD", "Oracle VM", "Cloud Control EM", "Exadata", "ODA"],
  microsoft: ["Power BI Desktop / Server", "SQL Server", "Active Directory", "SSIS", "Azure Cloud", "Jira"],
  platform: ["React", "NodeJS", "Angular", "Python", "Django", "Java EE", "Android / Kotlin", "REST / SOAP", "NoSQL"],
};

function FlowNode({ label, sub, accent }: { label: string; sub?: string; accent?: boolean }) {
  return (
    <div className={`relative rounded-lg border px-4 py-3 text-center text-xs font-semibold backdrop-blur ${
      accent ? "border-signal bg-[#E50914]/10 text-white shadow-signal" : "border-border bg-black/60 text-foreground"
    }`}>
      {label}
      {sub && <div className="mt-1 text-[10px] font-normal uppercase tracking-wider text-muted-foreground">{sub}</div>}
    </div>
  );
}

function Arrow() {
  return <ArrowRight className="h-4 w-4 text-[#E50914] shrink-0" />;
}

function ServicesPage() {
  const { t } = useTranslation();
  useDocumentMeta(t("services.meta.title"), t("services.meta.description"));
  const quadrants = t("services.quadrants", { returnObjects: true }) as { title: string; items: string[] }[];

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("services.hero.eyebrow")}</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            {t("services.hero.title1")}
            <span className="block text-gradient-signal">{t("services.hero.title2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg">{t("services.hero.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {quadrants.map((q, idx) => {
            const Icon = QUADRANT_ICONS[idx];
            return (
              <article key={q.title} className="hover-lift rounded-xl border border-border bg-card-grad p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="text-xl font-bold">{q.title}</h3>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {q.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#E50914] shrink-0" />
                      <span className="text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-carbon-grad">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("services.stack.eyebrow")}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("services.stack.title")}</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {STACK_KEYS.map((key, idx) => {
              const Icon = STACK_ICONS[idx];
              return (
                <div key={key} className="rounded-xl border border-border bg-black/60 p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${STACK_COLORS[idx]} to-transparent opacity-50 pointer-events-none`} />
                  <div className="relative">
                    <Icon className="h-7 w-7 text-[#E50914]" />
                    <h3 className="mt-4 text-lg font-bold">{t(`services.stack.${key}`)}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {STACK_ITEMS[key].map((it) => (
                        <span key={it} className="rounded-full border border-border bg-black/60 px-3 py-1 text-xs font-medium text-foreground">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("services.sgd.eyebrow")}</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("services.sgd.title")}</h2>

        <div className="mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-5 gap-4 items-center">
            <FlowNode label={t("services.sgd.devices")} sub={t("services.sgd.devicesSub")} />
            <div className="flex items-center justify-center"><Arrow /></div>
            <FlowNode label={t("services.sgd.ad")} sub={t("services.sgd.adSub")} />
            <div className="flex items-center justify-center"><Arrow /></div>
            <div className="flex flex-col gap-3">
              <FlowNode label={t("services.sgd.gw1")} />
              <FlowNode label={t("services.sgd.gw2")} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-4 items-center min-w-[900px]">
            <div></div><div></div><div></div>
            <div className="flex items-center justify-center"><Arrow /></div>
            <div className="rounded-lg border-signal border bg-[#E50914]/10 p-4 text-center shadow-signal">
              <div className="text-xs uppercase tracking-widest text-[#E50914] font-bold">{t("services.sgd.cluster")}</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <FlowNode label={t("services.sgd.server1")} accent />
                <FlowNode label={t("services.sgd.server2")} accent />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 min-w-[900px]">
            <FlowNode label={t("services.sgd.erp")} sub={t("services.sgd.erpSub")} />
            <FlowNode label={t("services.sgd.bi")} sub={t("services.sgd.biSub")} />
            <FlowNode label={t("services.sgd.dmz")} sub={t("services.sgd.dmzSub")} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold">{t("services.ged.title")}</h2>
        <div className="mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-7 gap-3 items-center">
            <FlowNode label={t("services.ged.auth")} sub={t("services.ged.authSub")} />
            <Arrow />
            <FlowNode label={t("services.ged.adf")} sub={t("services.ged.adfSub")} />
            <Arrow />
            <div className="flex flex-col gap-3">
              <FlowNode label={t("services.ged.inst1")} accent />
              <FlowNode label={t("services.ged.inst2")} accent />
            </div>
            <Arrow />
            <FlowNode label={t("services.ged.backup")} sub={t("services.ged.backupSub")} />
          </div>
        </div>
      </section>
    </>
  );
}
