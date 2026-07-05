import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Users,
  Crown,
  Briefcase,
  Cpu,
  HeartHandshake,
  Megaphone,
  Wallet,
  Server,
  ShieldCheck,
  HardDrive,
  Cpu as CpuIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useDocumentMeta } from "../hooks/use-document-title";
import i18n from "../i18n";

export const Route = createFileRoute("/partenaires")({
  component: PartnersPage,
  head: () => ({
    meta: [
      { title: i18n.t("partners.meta.title") },
      { name: "description", content: i18n.t("partners.meta.description") },
    ],
  }),
});

const NODE_IDS = ["sec", "exec", "tech", "hr", "com", "dfc"] as const;
const NODE_ICONS = [Users, Briefcase, Cpu, HeartHandshake, Megaphone, Wallet];
const APPLIANCE_ICONS = [HardDrive, Server, ShieldCheck];
const APPLIANCE_BADGES = [
  ["Oracle", "Flash NVMe", "RAC"],
  ["HA", "Multi-node", "ASM"],
  ["PCI-DSS", "STIG", "Mobile Money"],
];

// Unified Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

function PartnersPage() {
  const { t } = useTranslation();
  useDocumentMeta(t("partners.meta.title"), t("partners.meta.description"));
  const [selected, setSelected] = useState<string>("tech");

  const nodes = t("partners.org.nodes", { returnObjects: true }) as {
    name: string;
    role: string;
  }[];
  const appliances = t("partners.appliances.items", { returnObjects: true }) as {
    name: string;
    tagline: string;
    desc: string;
  }[];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" />

        <motion.div
          className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold"
            variants={itemVariants}
          >
            {t("partners.hero.eyebrow")}
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
            variants={itemVariants}
          >
            <span className="text-gradient-signal">{t("partners.hero.title1")}</span>{" "}
            {t("partners.hero.title2")}
          </motion.h1>
        </motion.div>
      </section>

      {/* Organization Chart */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("partners.org.title")}
        </motion.h2>
        <motion.p
          className="mt-3 text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("partners.org.subtitle")}
        </motion.p>

        <div className="mt-12 flex flex-col items-center">
          <motion.button
            onClick={() => setSelected("ceo")}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`group rounded-xl border-2 px-8 py-5 text-center transition-all ${
              selected === "ceo"
                ? "border-signal bg-card-grad shadow-signal"
                : "border-border bg-carbon hover:border-signal/60"
            }`}
          >
            <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#E50914] shadow-signal group-hover:scale-110 transition-transform">
              <Crown className="h-6 w-6 text-white" />
            </span>
            <div className="mt-3 text-lg font-bold">Pape DIENG</div>
            <div className="text-xs uppercase tracking-widest text-[#E50914] font-semibold">
              {t("partners.org.ceoRole")}
            </div>
          </motion.button>

          <div className="h-10 w-px bg-border" />
          <div className="h-px w-full max-w-4xl bg-border animate-width" />

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-0 pt-10 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {NODE_IDS.map((id, idx) => {
              const Icon = NODE_ICONS[idx];
              const node = nodes[idx];
              const isActive = selected === id;
              return (
                <motion.div
                  key={id}
                  className="relative flex flex-col items-center"
                  variants={itemVariants}
                >
                  <div className="absolute -top-10 left-1/2 h-10 w-px bg-border" />
                  <button
                    onClick={() => setSelected(id)}
                    className={`w-full rounded-lg border p-4 text-center transition-all duration-300 hover:scale-[1.01] ${
                      isActive
                        ? "border-signal bg-card-grad shadow-signal"
                        : "border-border bg-carbon hover:border-signal/50 hover:-translate-y-1"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 mx-auto items-center justify-center rounded-md transition-transform duration-300 ${isActive ? "bg-[#E50914] scale-105" : "bg-black border border-border"}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div className="mt-3 text-sm font-bold leading-tight">{node.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{node.role}</div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Appliances / Materials Section */}
      <section className="border-t border-b border-border/60 bg-carbon-grad">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.p
            className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("partners.appliances.eyebrow")}
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("partners.appliances.title")}
          </motion.h2>
          <motion.p
            className="mt-3 text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("partners.appliances.subtitle")}
          </motion.p>

          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {appliances.map((a, idx) => {
              const Icon = APPLIANCE_ICONS[idx];
              return (
                <motion.article
                  key={a.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.015 }}
                  className="hover-lift rounded-xl border border-border bg-black/70 p-6 flex flex-col justify-between"
                >
                  <div>
                    <Icon className="h-8 w-8 text-[#E50914] transition-transform duration-300 hover:rotate-3" />
                    <h3 className="mt-4 text-lg font-bold leading-tight">{a.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {a.tagline}
                    </p>
                    <p className="mt-4 text-sm text-foreground/90 leading-relaxed">{a.desc}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {APPLIANCE_BADGES[idx].map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-signal/40 bg-[#E50914]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black dark:text-white"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Mastered Technologies / Logo grid */}
          <motion.div
            className="mt-14 rounded-xl border border-border bg-black/60 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold">{t("partners.appliances.hwPartnersTitle")}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("partners.appliances.hwPartnersSub")}
                </p>
              </div>
              <div className="flex items-center gap-8">
                {["IBM", "DELL", "HP"].map((p) => (
                  <motion.div
                    key={p}
                    className="flex items-center gap-2 text-foreground cursor-pointer group"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <CpuIcon className="h-5 w-5 text-[#E50914] group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-extrabold tracking-tight">{p}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
