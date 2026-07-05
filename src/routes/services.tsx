import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Layers,
  Database,
  ShieldCheck,
  FlaskConical,
  Cloud,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import i18n from "../i18n";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: i18n.t("services.meta.title") },
      { name: "description", content: i18n.t("services.meta.description") },
    ],
  }),
});

const QUADRANT_ICONS = [Layers, Database, ShieldCheck, FlaskConical];
const STACK_ICONS = [Database, Cloud, Code2];
const STACK_COLORS = ["from-red-500/20", "from-blue-500/20", "from-emerald-500/20"];
const STACK_KEYS = ["oracle", "microsoft", "platform"] as const;
const STACK_ITEMS = {
  oracle: ["RAC", "ASM", "ODI", "SGD", "Oracle VM", "Cloud Control EM", "Exadata", "ODA"],
  microsoft: [
    "Power BI Desktop / Server",
    "SQL Server",
    "Active Directory",
    "SSIS",
    "Azure Cloud",
    "Jira",
  ],
  platform: [
    "React",
    "NodeJS",
    "Angular",
    "Python",
    "Django",
    "Java EE",
    "Android / Kotlin",
    "REST / SOAP",
    "NoSQL",
  ],
};

function FlowNode({ label, sub, accent }: { label: string; sub?: string; accent?: boolean }) {
  return (
    <div
      className={`relative rounded-lg border px-4 py-3 text-center text-xs font-semibold backdrop-blur transition-all duration-300 ${
        accent
          ? "border-signal bg-[#E50914]/10 text-black dark:text-white shadow-signal server-highlight-glow"
          : "border-border bg-black/60 text-foreground"
      }`}
    >
      {label}
      {sub && (
        <div className="mt-1 text-[10px] font-normal uppercase tracking-wider text-muted-foreground">
          {sub}
        </div>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="animate-arrow flex items-center justify-center shrink-0">
      <ArrowRight className="h-4 w-4 text-[#E50914]" />
    </div>
  );
}

// Framer Motion Animation Settings
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
  hidden: { opacity: 0, y: 20 },
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

function ServicesPage() {
  const { t } = useTranslation();

  const quadrants = t("services.quadrants", { returnObjects: true }) as {
    title: string;
    items: string[];
  }[];

  const methodologySteps = t("services.methodology.steps", { returnObjects: true }) as {
    name: string;
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
            {t("services.hero.eyebrow")}
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
            variants={itemVariants}
          >
            {t("services.hero.title1")}
            <span className="block text-gradient-signal">{t("services.hero.title2")}</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t("services.hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Quadrants Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {quadrants.map((q, idx) => {
            const Icon = QUADRANT_ICONS[idx];
            return (
              <motion.article
                key={q.title}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="hover-lift rounded-xl border border-border bg-card-grad p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <h3 className="text-xl font-bold">{q.title}</h3>
                  </div>
                  <ul className="mt-8 grid sm:grid-cols-2 gap-x-4 gap-y-3">
                    {q.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#E50914] shrink-0" />
                        <span className="text-foreground/90">{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Methodology Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
            {t("services.methodology.eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("services.methodology.title")}</h2>
          <p className="mt-4 text-muted-foreground text-sm">{t("services.methodology.subtitle")}</p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-8 right-8 h-0.5 bg-border pointer-events-none z-0" />

          {methodologySteps.map((step, idx) => (
            <motion.div
              key={step.name}
              className="relative z-10 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E50914] text-white font-bold text-sm shadow-signal border border-white/20">
                {idx + 1}
              </span>
              <h4 className="mt-4 text-sm font-bold text-foreground">{step.name}</h4>
              <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed max-w-[180px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-lg bg-carbon border border-border px-6 py-4 text-center text-xs text-muted-foreground leading-relaxed"
        >
          {t("services.methodology.note")}
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t border-b border-border/60 bg-carbon-grad">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
              {t("services.stack.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("services.stack.title")}</h2>
          </motion.div>

          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {STACK_KEYS.map((key, idx) => {
              const Icon = STACK_ICONS[idx];
              return (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border bg-black/60 p-6 relative overflow-hidden flex flex-col justify-between"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${STACK_COLORS[idx]} to-transparent opacity-50 pointer-events-none`}
                  />
                  <div className="relative z-10">
                    <Icon className="h-7 w-7 text-[#E50914]" />
                    <h3 className="mt-4 text-lg font-bold">{t(`services.stack.${key}`)}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {STACK_ITEMS[key].map((it) => (
                        <span
                          key={it}
                          className="rounded-full border border-border bg-black/60 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SGD Architecture diagram */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-b border-border/60">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">
            {t("services.sgd.eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t("services.sgd.title")}</h2>
        </motion.div>

        <motion.div
          className="mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="min-w-[900px] grid grid-cols-5 gap-4 items-center">
            <FlowNode label={t("services.sgd.devices")} sub={t("services.sgd.devicesSub")} />
            <Arrow />
            <FlowNode label={t("services.sgd.ad")} sub={t("services.sgd.adSub")} />
            <Arrow />
            <div className="flex flex-col gap-3">
              <FlowNode label={t("services.sgd.gw1")} />
              <FlowNode label={t("services.sgd.gw2")} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-4 items-center min-w-[900px]">
            <div></div>
            <div></div>
            <div></div>
            <Arrow />
            <div className="rounded-lg border-signal border bg-[#E50914]/10 p-4 text-center shadow-signal cluster-pulse">
              <div className="text-xs uppercase tracking-widest text-[#E50914] font-bold">
                {t("services.sgd.cluster")}
              </div>
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
        </motion.div>
      </section>

      {/* GED Workflow diagram */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("services.ged.title")}
        </motion.h2>
        <motion.div
          className="mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
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
        </motion.div>
      </section>
    </>
  );
}
