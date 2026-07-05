import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  Server,
  Cpu,
  Building2,
  ArrowRight,
  CheckCircle2,
  Activity,
  BarChart3,
  Database,
  Cloud,
  Network,
  Lock,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "../components/ui/counter";
import { useDocumentMeta } from "../hooks/use-document-title";
import i18n from "../i18n";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: i18n.t("home.meta.title") },
      { name: "description", content: i18n.t("home.meta.description") },
    ],
  }),
});

const TAB_KEYS = ["tech", "partners", "sec", "company"] as const;
const TAB_ICONS = { tech: Cpu, partners: Building2, sec: ShieldCheck, company: Briefcase };

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

function Home() {
  const { t } = useTranslation();
  useDocumentMeta(t("home.meta.title"), t("home.meta.description"));
  const [tab, setTab] = useState<(typeof TAB_KEYS)[number]>("tech");

  const rawStats = t("home.stats", { returnObjects: true });
  const stats = Array.isArray(rawStats) ? rawStats : ([] as { value: string; label: string }[]);
  const activeTitle = t(`home.tabs.${tab}.title`);
  const rawActiveItems = t(`home.tabs.${tab}.items`, { returnObjects: true });
  const activeItems = Array.isArray(rawActiveItems) ? rawActiveItems : ([] as string[]);
  const ActiveIcon = TAB_ICONS[tab];

  const rawDeciderItems = t("home.personas.deciders.items", { returnObjects: true });
  const deciderItems = Array.isArray(rawDeciderItems) ? rawDeciderItems : ([] as string[]);
  const rawTechItems = t("home.personas.tech.items", { returnObjects: true });
  const techItems = Array.isArray(rawTechItems) ? rawTechItems : ([] as string[]);
  const deciderIcons = [Activity, BarChart3, ShieldCheck, Briefcase];
  const techIcons = [Database, Lock, Network, Cloud];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" />

        <motion.div
          className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:pt-32 lg:pb-36"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-[#E50914]/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-black dark:text-white font-semibold"
            variants={itemVariants}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] animate-pulse" />
            {t("home.hero.badge")}
          </motion.div>

          <motion.h1
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            variants={itemVariants}
          >
            {t("home.hero.title1")}
            <br />
            <span className="text-gradient-signal">{t("home.hero.title2")}</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-muted-foreground whitespace-pre-line"
            variants={itemVariants}
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-4" variants={itemVariants}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-colors"
            >
              {t("home.hero.cta1")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/techniques"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-black/40 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-signal/60 hover:text-[#E50914] transition-colors"
            >
              {t("home.hero.cta2")}
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-border bg-border"
            variants={itemVariants}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-carbon p-6 md:p-8 hover:bg-carbon/95 transition-colors group"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-signal">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold group-hover:text-foreground transition-colors">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Tabs / Capabilities Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
            {t("home.tabs.eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("home.tabs.title")}</h2>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6">
          <motion.div
            className="flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {TAB_KEYS.map((k) => {
              const TIcon = TAB_ICONS[k];
              const isActive = tab === k;
              return (
                <motion.button
                  key={k}
                  onClick={() => setTab(k)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className={`group flex items-center gap-3 rounded-lg border px-4 py-4 text-left transition-all ${
                    isActive
                      ? "border-signal bg-card-grad shadow-signal"
                      : "border-border bg-carbon hover:border-signal/40"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors ${isActive ? "bg-[#E50914]" : "bg-black border border-border"}`}
                  >
                    <TIcon className="h-4 w-4 text-white" />
                  </span>
                  <span
                    className={`text-sm font-semibold transition-colors ${isActive ? "text-black dark:text-white" : "text-muted-foreground group-hover:text-foreground"}`}
                  >
                    {t(`home.tabs.${k}.title`)}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="rounded-xl border border-border bg-card-grad p-8 min-h-[360px]"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                <ActiveIcon className="h-5 w-5 text-white" />
              </span>
              <h3 className="text-2xl font-bold">{activeTitle}</h3>
            </div>
            <ul className="mt-6 grid md:grid-cols-2 gap-4">
              {activeItems.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#E50914] shrink-0" />
                  <span className="text-sm text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Personas / Audiences Section */}
      <section className="bg-carbon-grad border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
              {t("home.personas.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("home.personas.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.personas.subtitle")}</p>
          </motion.div>

          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.article
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="hover-lift rounded-xl border border-border bg-card-grad p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                  <BarChart3 className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-xl font-bold">
                  {t("home.personas.deciders.title")}{" "}
                  <span className="text-muted-foreground font-medium text-sm">
                    {t("home.personas.deciders.audience")}
                  </span>
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {deciderItems.map((txt, idx) => {
                  const IC = deciderIcons[idx] || CheckCircle2;
                  return (
                    <li
                      key={txt}
                      className="flex items-start gap-3 rounded-md bg-black/40 border border-border/60 p-3"
                    >
                      <IC className="h-4 w-4 mt-0.5 text-[#E50914]" />
                      <span className="text-foreground">{txt}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>

            <motion.article
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="hover-lift rounded-xl border border-border bg-card-grad p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                  <Server className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-xl font-bold">
                  {t("home.personas.tech.title")}{" "}
                  <span className="text-muted-foreground font-medium text-sm">
                    {t("home.personas.tech.audience")}
                  </span>
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {techItems.map((txt, idx) => {
                  const IC = techIcons[idx] || CheckCircle2;
                  return (
                    <li
                      key={txt}
                      className="flex items-start gap-3 rounded-md bg-black/40 border border-border/60 p-3"
                    >
                      <IC className="h-4 w-4 mt-0.5 text-[#E50914]" />
                      <span className="text-foreground">{txt}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* CTA Band Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-signal/40 bg-gradient-red p-10 md:p-14"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold max-w-xl text-white">
                {t("home.ctaBand.title")}
              </h3>
              <p className="mt-3 text-sm text-white/80 max-w-xl">{t("home.ctaBand.subtitle")}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black transition-colors shrink-0"
            >
              {t("home.ctaBand.btn")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
