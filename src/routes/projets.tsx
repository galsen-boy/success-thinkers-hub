import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  Wallet, HardHat, Fingerprint, MapPin, AlertTriangle, Radio,
  ShieldCheck, CircleDot, CheckCircle2, Building2,
} from "lucide-react";
import { useDocumentMeta } from "../hooks/use-document-title";
import { useIsDark } from "../hooks/use-is-dark";

export const Route = createFileRoute("/projets")({
  component: ProjectsPage,
});

const accountingData = [
  { m: "Jan", tx: 4200, balance: 12000, gap: 180 },
  { m: "Feb", tx: 4800, balance: 13400, gap: 90 },
  { m: "Mar", tx: 5300, balance: 14100, gap: 60 },
  { m: "Apr", tx: 6100, balance: 15800, gap: 40 },
  { m: "May", tx: 5700, balance: 16200, gap: 30 },
  { m: "Jun", tx: 6800, balance: 17900, gap: 15 },
];

const sites = [
  { id: "DKR-01", city: "Dakar", x: 28, y: 60, workers: 124, status: "active" as const },
  { id: "DKR-02", city: "Dakar — Plateau", x: 34, y: 62, workers: 88, status: "active" as const },
  { id: "THS-01", city: "Thiès", x: 50, y: 56, workers: 42, status: "hiring" as const },
  { id: "SLS-01", city: "Saint-Louis", x: 38, y: 28, workers: 31, status: "active" as const },
];

const guards = [
  { id: "G-014", name: "M. Sarr", x: 25, y: 55, status: "active" as const },
  { id: "G-021", name: "A. Diop", x: 45, y: 40, status: "patrol" as const },
  { id: "G-028", name: "F. Ndiaye", x: 60, y: 65, status: "incident" as const },
  { id: "G-033", name: "I. Ba", x: 70, y: 30, status: "active" as const },
  { id: "G-041", name: "K. Fall", x: 35, y: 75, status: "patrol" as const },
];

function ProjectsPage() {
  const { t } = useTranslation();
  useDocumentMeta(t("projects.meta.title"), t("projects.meta.description"));
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("projects.hero.eyebrow")}</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            {t("projects.hero.title1")} <span className="text-gradient-signal">{t("projects.hero.title2")}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg">{t("projects.hero.subtitle")}</p>
        </div>
      </section>

      <SuccessAccounting />
      <SuccessWorkers />
      <SuccessPrinting />
    </>
  );
}

function SuccessAccounting() {
  const { t } = useTranslation();
  const features = t("projects.accounting.features", { returnObjects: true }) as string[];
  const kpis = t("projects.accounting.kpis", { returnObjects: true }) as { l: string; v: string; d: string }[];
  return (
    <section className="border-y border-border bg-carbon-grad">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                <Wallet className="h-6 w-6 text-white" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("projects.accounting.label")}</p>
                <h2 className="text-2xl md:text-3xl font-bold">{t("projects.accounting.name")}</h2>
              </div>
            </div>
            <p className="mt-6 text-lg italic text-foreground leading-relaxed">« {t("projects.accounting.slogan")} »</p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-black/80 p-6 shadow-elevated">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("projects.accounting.dashboard")}</div>
                <div className="text-sm font-semibold">{t("projects.accounting.period")}</div>
              </div>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-[#E50914]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {kpis.map((k) => (
                <div key={k.l} className="rounded-md border border-border bg-carbon p-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
                  <div className="text-lg font-bold mt-1">{k.v}</div>
                  <div className="text-[11px] text-emerald-400">{k.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={accountingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="m" stroke="#9CA3AF" fontSize={11} />
                  <YAxis stroke="#9CA3AF" fontSize={11} />
                  <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #E50914", borderRadius: 8, fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 11, color: "#9CA3AF" }} />
                  <Line type="monotone" dataKey="tx" name={t("projects.accounting.series.tx")} stroke="#E50914" strokeWidth={2.5} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="balance" name={t("projects.accounting.series.balance")} stroke="#60A5FA" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={accountingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="m" stroke="#9CA3AF" fontSize={11} />
                  <YAxis stroke="#9CA3AF" fontSize={11} />
                  <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #E50914", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="gap" name={t("projects.accounting.series.gap")} fill="#E50914" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessWorkers() {
  const { t } = useTranslation();
  const [sel, setSel] = useState<string | null>("DKR-01");
  const active = sites.find((s) => s.id === sel);
  const features = t("projects.workers.features", { returnObjects: true }) as string[];
  const statusLabel = (k: "active" | "hiring") =>
    k === "active" ? t("projects.workers.statusActive") : t("projects.workers.statusHiring");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
              <HardHat className="h-6 w-6 text-white" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("projects.workers.label")}</p>
              <h2 className="text-2xl md:text-3xl font-bold">{t("projects.workers.name")}</h2>
            </div>
          </div>
          <p className="mt-6 text-lg italic text-foreground leading-relaxed">« {t("projects.workers.slogan")} »</p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-black/80 p-6 shadow-elevated">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("projects.workers.mapTitle")}</div>
              <div className="text-sm font-semibold">
                {t("projects.workers.summary", { sites: sites.length, workers: sites.reduce((a, s) => a + s.workers, 0) })}
              </div>
            </div>
            <Building2 className="h-5 w-5 text-[#E50914]" />
          </div>

          <div className="mt-5 grid md:grid-cols-[1.4fr_1fr] gap-4">
            <div className="relative aspect-[4/3] rounded-lg border border-border bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.15),transparent_60%),linear-gradient(180deg,#0a0a0a,#161616)] overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path d="M10 35 L18 22 L40 18 L55 22 L72 18 L88 30 L86 50 L72 62 L60 70 L45 78 L30 76 L18 68 L8 55 Z"
                  fill="rgba(229,9,20,0.04)" stroke="rgba(229,9,20,0.4)" strokeWidth="0.4" />
              </svg>
              {sites.map((s) => (
                <button key={s.id} onClick={() => setSel(s.id)}
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group ${sel === s.id ? "z-10" : ""}`}>
                  <span className={`block h-3 w-3 rounded-full ring-2 ring-black ${sel === s.id ? "bg-[#E50914] animate-pulse" : "bg-white"}`} />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold text-white bg-black/80 border border-border rounded px-1.5 py-0.5">
                    {s.city}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {sites.map((s) => (
                <button key={s.id} onClick={() => setSel(s.id)}
                  className={`w-full text-left rounded-md border p-3 transition-all ${
                    sel === s.id ? "border-signal bg-[#E50914]/10" : "border-border bg-carbon hover:border-signal/40"
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{s.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.status === "active" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>
                      {statusLabel(s.status)}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">{s.city}</div>
                  <div className="text-[11px] text-muted-foreground">{s.workers} {t("projects.workers.workersLabel")}</div>
                </button>
              ))}
            </div>
          </div>

          {active && (
            <div className="mt-4 rounded-md border border-signal/40 bg-card-grad p-4 text-sm">
              <div className="flex items-center gap-2 text-[#E50914] font-semibold"><MapPin className="h-4 w-4" /> {active.city} — {active.id}</div>
              <div className="mt-2 grid grid-cols-3 gap-3 text-xs">
                <div><div className="text-muted-foreground">{t("projects.workers.siteWorkers")}</div><div className="font-bold text-base">{active.workers}</div></div>
                <div><div className="text-muted-foreground">{t("projects.workers.siteStatus")}</div><div className="font-bold text-base">{statusLabel(active.status)}</div></div>
                <div><div className="text-muted-foreground">{t("projects.workers.siteProductivity")}</div><div className="font-bold text-base text-emerald-400">94%</div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessPrinting() {
  const { t } = useTranslation();
  const [alert, setAlert] = useState(false);
  const features = t("projects.printing.features", { returnObjects: true }) as string[];
  const statusLabel = (k: "active" | "patrol" | "incident") =>
    k === "active" ? t("projects.printing.statusActive") :
    k === "patrol" ? t("projects.printing.statusPatrol") :
    t("projects.printing.statusIncident");

  return (
    <section className="border-t border-border bg-carbon-grad">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                <Fingerprint className="h-6 w-6 text-white" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("projects.printing.label")}</p>
                <h2 className="text-2xl md:text-3xl font-bold">{t("projects.printing.name")}</h2>
              </div>
            </div>
            <p className="mt-6 text-lg italic text-foreground leading-relaxed">« {t("projects.printing.slogan")} »</p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-xl border bg-black/80 p-6 shadow-elevated transition-colors ${alert ? "border-[#E50914] shadow-signal" : "border-border"}`}>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("projects.printing.console")}</div>
                <div className="text-sm font-semibold flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#E50914]" /> {t("projects.printing.agents")}
                </div>
              </div>
              <button onClick={() => setAlert((a) => !a)}
                className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  alert ? "bg-white text-black" : "bg-[#E50914] text-white shadow-signal hover:bg-[#c2080f]"
                }`}>
                <AlertTriangle className="h-4 w-4" />
                {alert ? t("projects.printing.stop") : t("projects.printing.trigger")}
              </button>
            </div>

            <div className="mt-5 grid md:grid-cols-[1.4fr_1fr] gap-4">
              <div className={`relative aspect-[4/3] rounded-lg border overflow-hidden ${alert ? "border-[#E50914]" : "border-border"}`}>
                <div className={`absolute inset-0 ${alert ? "bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.35),transparent_70%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.12),transparent_70%)]"}`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                {alert && <div className="absolute inset-0 border-4 border-[#E50914] animate-pulse" />}
                {guards.map((g) => {
                  const color =
                    g.status === "incident" || alert ? "bg-[#E50914]" :
                    g.status === "active" ? "bg-emerald-400" : "bg-amber-400";
                  return (
                    <div key={g.id} style={{ left: `${g.x}%`, top: `${g.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                      <span className={`block h-3 w-3 rounded-full ring-2 ring-black ${color} ${g.status === "incident" || alert ? "animate-pulse" : ""}`} />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold bg-black/80 border border-border rounded px-1.5 py-0.5">
                        {g.id}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 max-h-[300px] overflow-auto pr-1">
                {guards.map((g) => {
                  const status = alert ? "incident" : g.status;
                  const badge =
                    status === "incident" ? "bg-[#E50914]/20 text-[#E50914] border-[#E50914]/40" :
                    status === "active" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" :
                    "bg-amber-500/20 text-amber-300 border-amber-500/40";
                  return (
                    <div key={g.id} className="rounded-md border border-border bg-carbon p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{g.id}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${badge}`}>{statusLabel(status)}</span>
                      </div>
                      <div className="text-sm font-semibold mt-1 flex items-center gap-1">
                        <CircleDot className="h-3 w-3 text-[#E50914]" /> {g.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {alert && (
              <div className="mt-4 rounded-md border border-[#E50914] bg-[#E50914]/10 p-3 flex items-center gap-3 text-sm">
                <Radio className="h-5 w-5 text-[#E50914] animate-pulse" />
                <span>{t("projects.printing.alertMsg")}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
