import { createFileRoute } from "@tanstack/react-router";
import {
  Layers, Database, ShieldCheck, FlaskConical, Cloud, Server,
  Code2, ArrowRight, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SUCCESS Thinkers" },
      { name: "description", content: "Management, gouvernance IT, sécurité et R&D. Stack Oracle, Microsoft et plateformes applicatives." },
      { property: "og:title", content: "Nos domaines d'expertise — SUCCESS Thinkers" },
      { property: "og:description", content: "De la gouvernance au déploiement : ingénierie d'entreprise sur Oracle, Microsoft et Red Hat." },
    ],
  }),
  component: ServicesPage,
});

const QUADRANTS = [
  {
    icon: Layers,
    title: "Management des entreprises",
    items: [
      "Pilotage des politiques et gouvernance",
      "Comptabilité OHADA",
      "Gestion de projets Agile & ITIL",
      "Conduite du changement",
      "Mise en œuvre ERP",
    ],
  },
  {
    icon: Database,
    title: "Gouvernance des systèmes informatiques",
    items: [
      "Design et construction de Datacenter",
      "Administration de bases de données",
      "Fédération d'API",
      "Migrations et upgrade",
      "Virtualisation & bare metal",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Sécurité des systèmes",
    items: [
      "Oracle SGD, AD / LDAP & fédération",
      "Certificats SSL / TLS, SSO",
      "DMZ, firewalls, segmentation",
      "Dimensionnement bande passante",
      "Audits & remédiation",
    ],
  },
  {
    icon: FlaskConical,
    title: "Recherche et développement",
    items: [
      "Applications web & mobile sur mesure",
      "Big Data NoSQL",
      "Optimisation de performance",
      "Architecture micro-services",
      "Intégration continue / DevOps",
    ],
  },
];

const STACK = [
  {
    icon: Database,
    title: "Oracle (Cloud & Local)",
    color: "from-red-500/20",
    items: ["RAC", "ASM", "ODI", "SGD", "Oracle VM", "Cloud Control EM", "Exadata", "ODA"],
  },
  {
    icon: Cloud,
    title: "Microsoft (Azure & Local)",
    color: "from-blue-500/20",
    items: ["Power BI Desktop / Server", "SQL Server", "Active Directory", "SSIS", "Azure Cloud", "Jira"],
  },
  {
    icon: Code2,
    title: "Plateforme & applications",
    color: "from-emerald-500/20",
    items: ["React", "NodeJS", "Angular", "Python", "Django", "Java EE", "Android / Kotlin", "REST / SOAP", "NoSQL"],
  },
];

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
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Services</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            Nos domaines d'expertise.
            <span className="block text-gradient-signal">De la gouvernance au déploiement.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
            Une ingénierie complète couvrant le management, la gouvernance IT, la sécurité et la R&D.
          </p>
        </div>
      </section>

      {/* 4 Quadrants */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {QUADRANTS.map((q) => {
            const Icon = q.icon;
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

      {/* Technical Stack */}
      <section className="border-y border-border bg-carbon-grad">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Stack technique</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Trois piliers technologiques maîtrisés.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {STACK.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-xl border border-border bg-black/60 p-6 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} to-transparent opacity-50 pointer-events-none`} />
                  <div className="relative">
                    <Icon className="h-7 w-7 text-[#E50914]" />
                    <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.items.map((it) => (
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

      {/* Architecture Oracle SGD */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Architecture interactive</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">Oracle SGD — flux d'autorisation et de fédération</h2>

        <div className="mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-5 gap-4 items-center">
            <FlowNode label="Devices" sub="Postes & mobiles" />
            <div className="flex items-center justify-center"><Arrow /></div>
            <FlowNode label="Active Directory / LDAP" sub="Authentification" />
            <div className="flex items-center justify-center"><Arrow /></div>
            <div className="flex flex-col gap-3">
              <FlowNode label="Passerelle SGD 1" />
              <FlowNode label="Passerelle SGD 2" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-4 items-center min-w-[900px]">
            <div></div><div></div><div></div>
            <div className="flex items-center justify-center"><Arrow /></div>
            <div className="rounded-lg border-signal border bg-[#E50914]/10 p-4 text-center shadow-signal">
              <div className="text-xs uppercase tracking-widest text-[#E50914] font-bold">Cluster Array SGD</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <FlowNode label="Serveur 1" accent />
                <FlowNode label="Serveur 2" accent />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 min-w-[900px]">
            <FlowNode label="ERP" sub="Production" />
            <FlowNode label="BI" sub="Décisionnel" />
            <FlowNode label="Web zone DMZ" sub="Exposition" />
          </div>
        </div>
      </section>

      {/* Architecture GED Webcenter */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold">GED Webcenter Content — workflow documentaire</h2>
        <div className="mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-7 gap-3 items-center">
            <FlowNode label="AD Authentication" sub="SSO" />
            <Arrow />
            <FlowNode label="Validation ADF" sub="Workflow" />
            <Arrow />
            <div className="flex flex-col gap-3">
              <FlowNode label="GED Weblogic — Inst. 1" accent />
              <FlowNode label="GED Weblogic — Inst. 2" accent />
            </div>
            <Arrow />
            <FlowNode label="DB Backup" sub="Archivage sécurisé" />
          </div>
        </div>
      </section>
    </>
  );
}
