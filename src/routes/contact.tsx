import { createFileRoute } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import i18n from "../i18n";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: i18n.t("contact.meta.title") },
      { name: "description", content: i18n.t("contact.meta.description") },
    ],
  }),
});

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

function ContactPage() {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("");

  const sectors = t("contact.form.sectors", { returnObjects: true }) as string[];
  const errMsg = t("contact.form.errors", { returnObjects: true }) as Record<string, string>;

  const schema = z.object({
    firstName: z.string().trim().min(1, errMsg.firstName).max(60),
    lastName: z.string().trim().min(1, errMsg.lastName).max(60),
    email: z.string().trim().email(errMsg.email).max(160),
    company: z.string().trim().min(1, errMsg.company).max(120),
    sector: z.string().min(1, errMsg.sector),
    infra: z.string().trim().min(1, errMsg.infra).max(160),
    message: z.string().trim().min(10, errMsg.message).max(2000),
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});

    // Construct standard professional mailto link
    const subject = encodeURIComponent(`Demande de diagnostic SUCCESS Thinkers - ${data.company}`);
    const body = encodeURIComponent(
      `Prénom : ${data.firstName}\nNom : ${data.lastName}\nEmail professionnel : ${data.email}\nEntreprise : ${data.company}\nSecteur d'activité : ${data.sector}\nType d'infrastructure : ${data.infra}\n\nMessage :\n${data.message}`,
    );
    const url = `mailto:contact@successthinkers.org?subject=${subject}&body=${body}`;
    setMailtoUrl(url);
    setSent(true);

    // Redirect to local mail client
    window.location.href = url;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" />

        <motion.div
          className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold"
            variants={itemVariants}
          >
            {t("contact.hero.eyebrow")}
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl"
            variants={itemVariants}
          >
            {t("contact.hero.title1")}{" "}
            <span className="text-gradient-signal">{t("contact.hero.title2")}</span>
          </motion.h1>
          <motion.p className="mt-5 max-w-2xl text-muted-foreground" variants={itemVariants}>
            {t("contact.hero.subtitle")}
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <motion.div
          className="rounded-xl border border-border bg-card-grad p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {sent ? (
            <div className="flex flex-col items-center text-center py-16">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E50914] shadow-signal animate-bounce">
                <CheckCircle2 className="h-7 w-7 text-white" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">{t("contact.form.sentTitle")}</h2>
              <p className="mt-2 text-muted-foreground max-w-md">{t("contact.form.sentBody")}</p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-2 rounded-md bg-[#E50914] px-5 py-2.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-all"
                >
                  <Send className="h-4 w-4" /> {t("contact.form.submit")} (Mailto)
                </a>
                <button
                  onClick={() => setSent(false)}
                  className="rounded-md border border-border bg-carbon px-5 py-2.5 text-sm hover:border-signal/60"
                >
                  {t("contact.form.again")}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <h2 className="text-xl font-bold">{t("contact.form.title")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label={t("contact.form.firstName")}
                  name="firstName"
                  error={errors.firstName}
                />
                <Field label={t("contact.form.lastName")} name="lastName" error={errors.lastName} />
              </div>
              <Field
                label={t("contact.form.email")}
                name="email"
                type="email"
                error={errors.email}
              />
              <Field label={t("contact.form.company")} name="company" error={errors.company} />
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {t("contact.form.sector")}
                </label>
                <select
                  name="sector"
                  defaultValue=""
                  className="mt-2 w-full rounded-md bg-white dark:bg-black border border-slate-300 dark:border-border px-4 py-3 text-sm text-black dark:text-foreground focus:border-signal outline-none transition-colors"
                >
                  <option value="" disabled>
                    {t("contact.form.sectorPlaceholder")}
                  </option>
                  {sectors.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.sector && <p className="mt-1 text-xs text-[#E50914]">{errors.sector}</p>}
              </div>
              <Field
                label={t("contact.form.infra")}
                name="infra"
                placeholder={t("contact.form.infraPlaceholder")}
                error={errors.infra}
              />
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-md bg-white dark:bg-black border border-slate-300 dark:border-border px-4 py-3 text-sm text-black dark:text-foreground focus:border-signal outline-none resize-none transition-colors placeholder-slate-400 dark:placeholder-muted-foreground"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
                {errors.message && <p className="mt-1 text-xs text-[#E50914]">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-all duration-200 active:scale-95 cursor-pointer"
              >
                {t("contact.form.submit")} <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </motion.div>

        <motion.aside
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <InfoCard
            icon={Mail}
            title={t("contact.info.email")}
            value="contact@successthinkers.org"
            href="mailto:contact@successthinkers.org"
          />
          <InfoCard
            icon={MessageCircle}
            title="WhatsApp"
            value={t("contact.info.whatsappLabel")}
            href="https://wa.me/221774430606"
          />
          <InfoCard
            icon={Phone}
            title={t("contact.info.phone")}
            value="+221 77 443 06 06"
            href="tel:+221774430606"
          />
          <InfoCard
            icon={MapPin}
            title={t("contact.info.address")}
            value={t("contact.info.addressValue")}
          />
          <InfoCard
            icon={Clock}
            title={t("contact.info.hours")}
            value={t("contact.info.hoursValue")}
          />

          <div className="rounded-xl border border-border bg-black/80 overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Building2 className="h-4 w-4 text-[#E50914]" /> {t("contact.info.office")}
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=14.7497&mlon=-17.4914#map=17/14.7497/-17.4914"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#E50914] hover:underline"
              >
                {t("contact.info.openMap")}
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <iframe
                title="Map Yoff Dakar"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.503,14.741,-17.481,14.759&layer=mapnik&marker=14.7497,-17.4914"
                className="map-tile-invert absolute top-0 left-0 w-full h-[calc(100%+36px)] grayscale contrast-125 invert opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-signal/30" />
            </div>
          </div>
        </motion.aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-white dark:bg-black border border-slate-300 dark:border-border px-4 py-3 text-sm text-black dark:text-foreground focus:border-signal outline-none transition-colors placeholder-slate-400 dark:placeholder-muted-foreground"
      />
      {error && <p className="mt-1 text-xs text-[#E50914]">{error}</p>}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E50914] shadow-signal shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5 text-white" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
          {title}
        </div>
        <div className="text-sm font-semibold mt-0.5 leading-snug">{value}</div>
      </div>
    </>
  );
  const cls =
    "group flex items-start gap-3 rounded-xl border border-border bg-card-grad p-4 hover:border-signal/50 transition-all duration-300 hover:scale-[1.01]";
  return href ? (
    <a href={href} className={cls}>
      {Inner}
    </a>
  ) : (
    <div className={cls}>{Inner}</div>
  );
}
