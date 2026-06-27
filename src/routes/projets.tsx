import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Legend,
} from "recharts";
import {
  Wallet, HardHat, Fingerprint, MapPin, AlertTriangle, Radio,
  ShieldCheck, CircleDot, CheckCircle2, Building2,
} from "lucide-react";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — SUCCESS Thinkers" },
      { name: "description", content: "Success Accounting, Success Workers, Success Printing : nos produits propriétaires." },
      { property: "og:title", content: "Nos projets — SUCCESS Thinkers" },
      { property: "og:description", content: "Trois plateformes propriétaires conçues pour les entreprises africaines exigeantes." },
    ],
  }),
  component: ProjectsPage,
});

// ===== Mock data =====
const accountingData = [
  { m: "Jan", tx: 4200, balance: 12000, gap: 180 },
  { m: "Fév", tx: 4800, balance: 13400, gap: 90 },
  { m: "Mar", tx: 5300, balance: 14100, gap: 60 },
  { m: "Avr", tx: 6100, balance: 15800, gap: 40 },
  { m: "Mai", tx: 5700, balance: 16200, gap: 30 },
  { m: "Juin", tx: 6800, balance: 17900, gap: 15 },
];

const sites = [
  { id: "DKR-01", city: "Dakar", x: 28, y: 60, workers: 124, status: "Actif" },
  { id: "DKR-02", city: "Dakar — Plateau", x: 34, y: 62, workers: 88, status: "Actif" },
  { id: "THS-01", city: "Thiès", x: 50, y: 56, workers: 42, status: "Recrutement" },
  { id: "SLS-01", city: "Saint-Louis", x: 38, y: 28, workers: 31, status: "Actif" },
];

const guards = [
  { id: "G-014", name: "M. Sarr", x: 25, y: 55, status: "Actif" },
  { id: "G-021", name: "A. Diop", x: 45, y: 40, status: "En patrouille" },
  { id: "G-028", name: "F. Ndiaye", x: 60, y: 65, status: "Incident" },
  { id: "G-033", name: "I. Ba", x: 70, y: 30, status: "Actif" },
  { id: "G-041", name: "K. Fall", x: 35, y: 75, status: "En patrouille" },
];

function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Projets propriétaires</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Trois plateformes <span className="text-gradient-signal">conçues, sécurisées, déployées.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
            Des produits propriétaires opérationnels en production, taillés pour les enjeux africains.
          </p>
        </div>
      </section>

      <SuccessAccounting />
      <SuccessWorkers />
      <SuccessPrinting />
    </>
  );
}

function SectionHeader({ icon: Icon, name, slogan, features }: { icon: any; name: string; slogan: string; features: string[] }) {
  return (
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
            <Icon className="h-6 w-6 text-white" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Produit</p>
            <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
          </div>
        </div>
        <p className="mt-6 text-lg italic text-foreground leading-relaxed">« {slogan} »</p>
        <ul className="mt-8 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SuccessAccounting() {
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
                <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Produit · Fintech</p>
                <h2 className="text-2xl md:text-3xl font-bold">Success Accounting</h2>
              </div>
            </div>
            <p className="mt-6 text-lg italic text-foreground leading-relaxed">
              « L'interopérabilité financière temps réel. Zéro traitement manuel. »
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Conformité OHADA native",
                "Transfert bidirectionnel temps réel avec les banques",
                "Réconciliation bancaire automatisée",
                "Audit trail complet et signatures cryptographiques",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-xl border border-border bg-black/80 p-6 shadow-elevated">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Tableau de bord financier</div>
                <div className="text-sm font-semibold">Q2 — Exercice en cours</div>
              </div>
              <div className="flex gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-[#E50914]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { l: "Transactions", v: "32 900", d: "+12,4%" },
                { l: "Solde consolidé", v: "17,9 M$", d: "+8,1%" },
                { l: "Écarts détectés", v: "15", d: "-67%" },
              ].map((k) => (
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
                  <Line type="monotone" dataKey="tx" name="Transactions" stroke="#E50914" strokeWidth={2.5} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="balance" name="Solde (k$)" stroke="#60A5FA" strokeWidth={2} dot={{ r: 3 }} />
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
                  <Bar dataKey="gap" name="Écarts" fill="#E50914" radius={[4,4,0,0]} />
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
  const [sel, setSel] = useState<string | null>("DKR-01");
  const active = sites.find((s) => s.id === sel);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
              <HardHat className="h-6 w-6 text-white" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Produit · BTP</p>
              <h2 className="text-2xl md:text-3xl font-bold">Success Workers</h2>
            </div>
          </div>
          <p className="mt-6 text-lg italic text-foreground leading-relaxed">
            « Optimiser le capital humain opérationnel sur vos chantiers BTP. »
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Suivi temps réel des chantiers",
              "Mise en relation géolocalisée des ouvriers",
              "Lutte contre le chômage des jeunes au Sénégal",
              "Monétisation via taxe transactionnelle",
            ].map((f) => (
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
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Carte opérationnelle — Sénégal</div>
              <div className="text-sm font-semibold">{sites.length} chantiers · {sites.reduce((a, s) => a + s.workers, 0)} ouvriers actifs</div>
            </div>
            <Building2 className="h-5 w-5 text-[#E50914]" />
          </div>

          <div className="mt-5 grid md:grid-cols-[1.4fr_1fr] gap-4">
            {/* Mock map */}
            <div className="relative aspect-[4/3] rounded-lg border border-border bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.15),transparent_60%),linear-gradient(180deg,#0a0a0a,#161616)] overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              {/* Senegal silhouette approximation */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path
                  d="M10 35 L18 22 L40 18 L55 22 L72 18 L88 30 L86 50 L72 62 L60 70 L45 78 L30 76 L18 68 L8 55 Z"
                  fill="rgba(229,9,20,0.04)"
                  stroke="rgba(229,9,20,0.4)"
                  strokeWidth="0.4"
                />
              </svg>
              {sites.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSel(s.id)}
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group ${sel === s.id ? "z-10" : ""}`}
                >
                  <span className={`block h-3 w-3 rounded-full ring-2 ring-black ${sel === s.id ? "bg-[#E50914] animate-pulse" : "bg-white"}`} />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold text-white bg-black/80 border border-border rounded px-1.5 py-0.5">
                    {s.city}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {sites.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSel(s.id)}
                  className={`w-full text-left rounded-md border p-3 transition-all ${
                    sel === s.id ? "border-signal bg-[#E50914]/10" : "border-border bg-carbon hover:border-signal/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">{s.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.status === "Actif" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`}>
                      {s.status}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-semibold">{s.city}</div>
                  <div className="text-[11px] text-muted-foreground">{s.workers} ouvriers</div>
                </button>
              ))}
            </div>
          </div>

          {active && (
            <div className="mt-4 rounded-md border border-signal/40 bg-card-grad p-4 text-sm">
              <div className="flex items-center gap-2 text-[#E50914] font-semibold"><MapPin className="h-4 w-4" /> {active.city} — {active.id}</div>
              <div className="mt-2 grid grid-cols-3 gap-3 text-xs">
                <div><div className="text-muted-foreground">Ouvriers</div><div className="font-bold text-base">{active.workers}</div></div>
                <div><div className="text-muted-foreground">Statut</div><div className="font-bold text-base">{active.status}</div></div>
                <div><div className="text-muted-foreground">Productivité</div><div className="font-bold text-base text-emerald-400">94%</div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SuccessPrinting() {
  const [alert, setAlert] = useState(false);
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
                <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Produit · Sécurité privée</p>
                <h2 className="text-2xl md:text-3xl font-bold">Success Printing</h2>
              </div>
            </div>
            <p className="mt-6 text-lg italic text-foreground leading-relaxed">
              « Sécurité privée : traçabilité biométrique et réactivité d'urgence. »
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Pointage biométrique automatisé (empreintes)",
                "Géolocalisation temps réel des agents",
                "Alertes anti-cambriolage instantanées",
                "Versement des salaires via Mobile Money",
              ].map((f) => (
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
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Console superviseur</div>
                <div className="text-sm font-semibold flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#E50914]" /> 5 agents · zone Dakar
                </div>
              </div>
              <button
                onClick={() => setAlert((a) => !a)}
                className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  alert ? "bg-white text-black" : "bg-[#E50914] text-white shadow-signal hover:bg-[#c2080f]"
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
                {alert ? "Arrêter l'alerte" : "Déclencher alerte"}
              </button>
            </div>

            <div className="mt-5 grid md:grid-cols-[1.4fr_1fr] gap-4">
              <div className={`relative aspect-[4/3] rounded-lg border overflow-hidden ${alert ? "border-[#E50914]" : "border-border"}`}>
                <div className={`absolute inset-0 ${alert ? "bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.35),transparent_70%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.12),transparent_70%)]"}`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                {alert && <div className="absolute inset-0 border-4 border-[#E50914] animate-pulse" />}
                {guards.map((g) => {
                  const color =
                    g.status === "Incident" || alert ? "bg-[#E50914]" :
                    g.status === "Actif" ? "bg-emerald-400" : "bg-amber-400";
                  return (
                    <div key={g.id} style={{ left: `${g.x}%`, top: `${g.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2">
                      <span className={`block h-3 w-3 rounded-full ring-2 ring-black ${color} ${g.status === "Incident" || alert ? "animate-pulse" : ""}`} />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold bg-black/80 border border-border rounded px-1.5 py-0.5">
                        {g.id}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 max-h-[300px] overflow-auto pr-1">
                {guards.map((g) => {
                  const status = alert ? "Incident" : g.status;
                  const badge =
                    status === "Incident" ? "bg-[#E50914]/20 text-[#E50914] border-[#E50914]/40" :
                    status === "Actif" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" :
                    "bg-amber-500/20 text-amber-300 border-amber-500/40";
                  return (
                    <div key={g.id} className="rounded-md border border-border bg-carbon p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{g.id}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${badge}`}>{status}</span>
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
                <span>Alerte cambriolage déclenchée — équipes d'intervention notifiées.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
