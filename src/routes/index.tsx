import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck, Server, Cpu, Building2, ArrowRight, CheckCircle2,
  Activity, BarChart3, Database, Cloud, Network, Lock, Users, Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUCCESS Thinkers — 100% Disponibilité, 0% Interruption" },
      { name: "description", content: "Architectures critiques Oracle, Microsoft & Red Hat pour banques, télécoms et gouvernements." },
      { property: "og:title", content: "SUCCESS Thinkers — Certitude opérationnelle" },
      { property: "og:description", content: "Conception, sécurisation et déploiement d'infrastructures critiques durables." },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "15+", label: "Années d'expertise Oracle" },
  { value: "50+", label: "Projets délivrés" },
  { value: "09", label: "Secteurs critiques" },
  { value: "24/7", label: "Disponibilité" },
];

const TABS = [
  {
    key: "tech",
    title: "Technologies",
    icon: Cpu,
    items: [
      "Oracle Database, RAC, ASM, Exadata, ODA",
      "Microsoft SQL Server, Azure, Power BI",
      "Red Hat Enterprise Linux & virtualisation",
      "Cloud OCI et Azure (hybride / multi-cloud)",
      "Développement applicatif multi-plateforme",
    ],
  },
  {
    key: "partners",
    title: "Partenariats",
    icon: Building2,
    items: [
      "Banques & institutions financières",
      "Opérateurs Télécoms",
      "Réseaux sociaux & plateformes",
      "Mobile Money & transfert d'argent",
      "BTP, Énergie & services publics",
    ],
  },
  {
    key: "sec",
    title: "Sécurité & Networking",
    icon: ShieldCheck,
    items: [
      "Cybersécurité offensive et défensive",
      "Sécurisation des infrastructures critiques",
      "Contrôle d'accès AD / LDAP / SSO",
      "Audit, durcissement et conformité",
      "Architecture réseau, DMZ, segmentation",
    ],
  },
  {
    key: "company",
    title: "Entreprise SUCCESS Thinkers",
    icon: Briefcase,
    items: [
      "Conformité ITIL & ISO",
      "Exécution rigoureuse dans les délais",
      "Équipes d'ingénieurs experts certifiés",
      "Méthodologie Agile pilotée par la valeur",
      "Engagement de résultat opérationnel",
    ],
  },
];

function Home() {
  const [tab, setTab] = useState("tech");
  const active = TABS.find((t) => t.key === tab)!;
  const Icon = active.icon;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-[#E50914]/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-[#E50914] font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] animate-pulse" />
            Infrastructure critique
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            100% DISPONIBILITÉ.<br />
            <span className="text-gradient-signal">0% INTERRUPTION.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            La certitude opérationnelle pour vos infrastructures critiques. SUCCESS Thinkers
            conçoit, sécurise et déploie des architectures d'entreprise durables et résilientes
            basées sur Oracle, Microsoft et Red&nbsp;Hat.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-colors"
            >
              Demander un audit gratuit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-black/40 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-signal/60 hover:text-white transition-colors"
            >
              Découvrir notre plateforme
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-border bg-border">
            {STATS.map((s) => (
              <div key={s.label} className="bg-carbon p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-bold text-gradient-signal">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY & COMPETENCE TABS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Politique & Compétences</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Une expertise structurée, prouvée, opérationnelle.</h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6">
          <div className="flex flex-col gap-2">
            {TABS.map((t) => {
              const TIcon = t.icon;
              const isActive = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`group flex items-center gap-3 rounded-lg border px-4 py-4 text-left transition-all ${
                    isActive
                      ? "border-signal bg-card-grad shadow-signal"
                      : "border-border bg-carbon hover:border-signal/40"
                  }`}
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-md ${isActive ? "bg-[#E50914]" : "bg-black"}`}>
                    <TIcon className="h-4 w-4 text-white" />
                  </span>
                  <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-muted-foreground group-hover:text-white"}`}>
                    {t.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-xl border border-border bg-card-grad p-8 min-h-[360px]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                <Icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="text-2xl font-bold">{active.title}</h3>
            </div>
            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {active.items.map((i) => (
                <li key={i} className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-4">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
                  <span className="text-sm text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="bg-carbon-grad border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Notre approche</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Deux langages, une même rigueur d'exécution.</h2>
            <p className="mt-4 text-muted-foreground">
              Nous parlons à la fois la langue du business et celle de l'ingénierie.
              Chaque livrable adresse simultanément la valeur économique et la robustesse technique.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <article className="hover-lift rounded-xl border border-border bg-card-grad p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                  <BarChart3 className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-xl font-bold">Pour les Décideurs <span className="text-muted-foreground font-medium">(CEO / CFO)</span></h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  { i: Activity, t: "Réduction structurelle des coûts d'exploitation IT" },
                  { i: BarChart3, t: "Tableaux de bord Oracle Analytics & Power BI temps réel" },
                  { i: ShieldCheck, t: "Conformité OHADA et reporting réglementaire" },
                  { i: Briefcase, t: "ROI mesurable dès le premier exercice" },
                ].map(({ i: IC, t }) => (
                  <li key={t} className="flex items-start gap-3 rounded-md bg-black/40 border border-border/60 p-3">
                    <IC className="h-4 w-4 mt-0.5 text-[#E50914]" />
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="hover-lift rounded-xl border border-border bg-card-grad p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                  <Server className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-xl font-bold">Pour les Directions Techniques <span className="text-muted-foreground font-medium">(DSI / SecOps)</span></h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  { i: Database, t: "Haute disponibilité Oracle RAC / ASM" },
                  { i: Lock, t: "Sécurité SGD et durcissement infrastructure" },
                  { i: Network, t: "Architecture multi-site avec failover automatique" },
                  { i: Cloud, t: "Supervision proactive via Enterprise Manager Cloud Control" },
                ].map(({ i: IC, t }) => (
                  <li key={t} className="flex items-start gap-3 rounded-md bg-black/40 border border-border/60 p-3">
                    <IC className="h-4 w-4 mt-0.5 text-[#E50914]" />
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-2xl border border-signal/40 bg-gradient-red p-10 md:p-14">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold max-w-xl">
                Sécurisez vos opérations critiques en moins de 30 jours.
              </h3>
              <p className="mt-3 text-sm text-white/80 max-w-xl">
                Un audit gratuit conduit par nos ingénieurs Oracle certifiés. Diagnostic, plan d'action et roadmap.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black transition-colors">
              Planifier l'audit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
