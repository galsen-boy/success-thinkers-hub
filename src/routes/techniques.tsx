import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Database, Terminal, ShieldAlert, Cpu, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import i18n from "../i18n";

export const Route = createFileRoute("/techniques")({
  component: TechniquesPage,
  head: () => ({
    meta: [
      { title: i18n.t("techniques.meta.title") },
      { name: "description", content: i18n.t("techniques.meta.description") },
    ],
  }),
});

const CARD_ICONS = [Database, Terminal, Cpu, ShieldAlert];

const TECH_LISTS = {
  oracle: [
    "Oracle Database",
    "Oracle RAC",
    "Oracle Data Guard",
    "Oracle ASM",
    "Oracle Enterprise Manager",
    "Oracle ODA",
    "Oracle Exadata",
    "Oracle WebCenter",
    "Oracle Analytics Server",
    "Oracle ODI",
    "Oracle NoSQL",
    "Oracle SGD",
  ],
  microsoft: [
    "SQL Server",
    "Power BI",
    "Power BI Report Server",
    "SSIS",
    "Active Directory",
    "Microsoft Entra",
    "Azure",
    "Transact SQL",
  ],
  redhat: [
    "Red Hat Enterprise Linux",
    "KVM",
    "Virtualisation",
    "Containers",
    "Infrastructure automation",
  ],
  devops: ["CI/CD", "Git", "Docker", "Infrastructure as Code", "Monitoring", "Observability"],
};

const keys = ["oracle", "microsoft", "redhat", "devops"] as const;

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

function TechniquesPage() {
  const { t } = useTranslation();

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
            {t("techniques.hero.eyebrow")}
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
            variants={itemVariants}
          >
            {t("techniques.hero.title1")}{" "}
            <span className="block text-gradient-signal">{t("techniques.hero.title2")}</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-muted-foreground text-lg"
            variants={itemVariants}
          >
            {t("techniques.hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Grid of expertise */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {keys.map((key, idx) => {
            const Icon = CARD_ICONS[idx];
            return (
              <motion.article
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                className="hover-lift rounded-xl border border-border bg-card-grad p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <h3 className="text-xl font-bold">{t(`techniques.${key}.title`)}</h3>
                  </div>
                  <p className="mt-5 text-sm text-foreground/90 leading-relaxed">
                    {t(`techniques.${key}.desc`)}
                  </p>
                </div>

                <div className="mt-8 border-t border-border/60 pt-6">
                  <div className="text-[10px] uppercase tracking-widest text-[#E50914] font-bold mb-3">
                    {t("services.stack.eyebrow")} / Mastered Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {TECH_LISTS[key].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-black/40 px-2.5 py-1 text-xs text-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
