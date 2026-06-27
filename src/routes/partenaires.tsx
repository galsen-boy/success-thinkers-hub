import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users, Crown, Briefcase, Cpu, HeartHandshake, Megaphone, Wallet,
  Server, ShieldCheck, HardDrive, Cpu as CpuIcon,
} from "lucide-react";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Partenaires & Organisation — SUCCESS Thinkers" },
      { name: "description", content: "Notre organigramme, nos partenariats Oracle, IBM, DELL, HP." },
      { property: "og:title", content: "Partenaires & Organisation — SUCCESS Thinkers" },
      { property: "og:description", content: "Des partenariats bâtis sur la confiance et l'expertise." },
    ],
  }),
  component: PartnersPage,
});

type Node = {
  id: string;
  name: string;
  role: string;
  count?: string;
  icon: any;
  children?: Node[];
};

const ORG: Node = {
  id: "ceo",
  name: "Pape DIENG",
  role: "Directeur Général & Fondateur",
  icon: Crown,
  children: [
    { id: "sec", name: "Secrétariat & Accueil", role: "5 personnel", icon: Users },
    { id: "exec", name: "Conseil Exécutif", role: "6 membres", icon: Briefcase },
    { id: "tech", name: "Direction Technique", role: "50+ ingénieurs IT", icon: Cpu },
    { id: "hr", name: "Direction RH & Gestion", role: "10+ collaborateurs", icon: HeartHandshake },
    { id: "com", name: "Direction Commerciale & Marketing", role: "5 collaborateurs", icon: Megaphone },
    { id: "dfc", name: "Direction Finance & Comptabilité (DFC)", role: "7 collaborateurs", icon: Wallet },
  ],
};

const APPLIANCES = [
  {
    icon: HardDrive,
    name: "Exadata Database Machine",
    tagline: "Mémoire flash nanoseconde",
    desc: "Performance extrême pour bases Oracle critiques. Idéale pour datawarehouses et OLTP intensifs.",
    badges: ["Oracle", "Flash NVMe", "RAC"],
  },
  {
    icon: Server,
    name: "Oracle Database Appliance — ODA X7-HA",
    tagline: "Multi-nœud abordable",
    desc: "Serveur bancaire haut de gamme pour PME/ETI. Architecture multi-nœud à coût maîtrisé.",
    badges: ["HA", "Multi-node", "ASM"],
  },
  {
    icon: ShieldCheck,
    name: "Oracle MiniCluster S7-2",
    tagline: "Processeur sécurité PCI-DSS / STIG",
    desc: "Conçu pour paiements et Mobile Money. Conformité réglementaire native au niveau du silicium.",
    badges: ["PCI-DSS", "STIG", "Mobile Money"],
  },
];

function PartnersPage() {
  const [selected, setSelected] = useState<string>("tech");
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Partenaires & Organisation</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            <span className="text-gradient-signal">Des partenariats bâtis</span> sur la confiance et l'expertise.
          </h1>
        </div>
      </section>

      {/* Organigramme */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Organigramme du Groupe SUCCESS Thinkers</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Cliquez sur un département pour explorer sa composition.
        </p>

        <div className="mt-12 flex flex-col items-center">
          {/* CEO */}
          <button
            onClick={() => setSelected(ORG.id)}
            className={`group rounded-xl border-2 px-8 py-5 text-center transition-all ${
              selected === ORG.id ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/60"
            }`}
          >
            <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#E50914] shadow-signal">
              <Crown className="h-6 w-6 text-white" />
            </span>
            <div className="mt-3 text-lg font-bold">{ORG.name}</div>
            <div className="text-xs uppercase tracking-widest text-[#E50914]">{ORG.role}</div>
          </button>

          {/* Connector */}
          <div className="h-10 w-px bg-border" />
          <div className="h-px w-full max-w-4xl bg-border" />

          {/* Children */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-0 pt-10 w-full">
            {ORG.children!.map((c) => {
              const Icon = c.icon;
              const isActive = selected === c.id;
              return (
                <div key={c.id} className="relative flex flex-col items-center">
                  <div className="absolute -top-10 left-1/2 h-10 w-px bg-border" />
                  <button
                    onClick={() => setSelected(c.id)}
                    className={`w-full rounded-lg border p-4 text-center transition-all ${
                      isActive ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/50 hover:-translate-y-1"
                    }`}
                  >
                    <span className={`flex h-10 w-10 mx-auto items-center justify-center rounded-md ${isActive ? "bg-[#E50914]" : "bg-black border border-border"}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div className="mt-3 text-sm font-bold leading-tight">{c.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{c.role}</div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hardware catalog */}
      <section className="border-y border-border bg-carbon-grad">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Catalogue Hardware</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Oracle Appliances commercialisés</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Solutions matérielles certifiées, livrées et maintenues par SUCCESS Thinkers.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {APPLIANCES.map((a) => {
              const Icon = a.icon;
              return (
                <article key={a.name} className="hover-lift rounded-xl border border-border bg-black/70 p-6 flex flex-col">
                  <Icon className="h-8 w-8 text-[#E50914]" />
                  <h3 className="mt-4 text-lg font-bold leading-tight">{a.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{a.tagline}</p>
                  <p className="mt-4 text-sm text-foreground/90 leading-relaxed flex-1">{a.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {a.badges.map((b) => (
                      <span key={b} className="rounded-full border border-signal/40 bg-[#E50914]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E50914]">
                        {b}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Hardware partners */}
          <div className="mt-14 rounded-xl border border-border bg-black/60 p-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold">Partenariats commerciaux complémentaires</h3>
                <p className="mt-1 text-sm text-muted-foreground">Serveurs et infrastructures certifiés par nos équipes.</p>
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
