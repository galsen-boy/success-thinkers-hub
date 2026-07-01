import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building2 } from "lucide-react";
import { useDocumentMeta } from "../hooks/use-document-title";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  useDocumentMeta(t("contact.meta.title"), t("contact.meta.description"));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

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
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">{t("contact.hero.eyebrow")}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
            {t("contact.hero.title1")} <span className="text-gradient-signal">{t("contact.hero.title2")}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">{t("contact.hero.subtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="rounded-xl border border-border bg-card-grad p-8">
          {sent ? (
            <div className="flex flex-col items-center text-center py-16">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E50914] shadow-signal">
                <CheckCircle2 className="h-7 w-7 text-white" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">{t("contact.form.sentTitle")}</h2>
              <p className="mt-2 text-muted-foreground max-w-md">{t("contact.form.sentBody")}</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-md border border-border px-4 py-2 text-sm hover:border-signal/60">
                {t("contact.form.again")}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <h2 className="text-xl font-bold">{t("contact.form.title")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={t("contact.form.firstName")} name="firstName" error={errors.firstName} />
                <Field label={t("contact.form.lastName")} name="lastName" error={errors.lastName} />
              </div>
              <Field label={t("contact.form.email")} name="email" type="email" error={errors.email} />
              <Field label={t("contact.form.company")} name="company" error={errors.company} />
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{t("contact.form.sector")}</label>
                <select name="sector" defaultValue=""
                  className="mt-2 w-full rounded-md bg-black border border-border px-4 py-3 text-sm text-foreground focus:border-signal outline-none">
                  <option value="" disabled>{t("contact.form.sectorPlaceholder")}</option>
                  {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.sector && <p className="mt-1 text-xs text-[#E50914]">{errors.sector}</p>}
              </div>
              <Field label={t("contact.form.infra")} name="infra" placeholder={t("contact.form.infraPlaceholder")} error={errors.infra} />
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{t("contact.form.message")}</label>
                <textarea name="message" rows={5}
                  className="mt-2 w-full rounded-md bg-black border border-border px-4 py-3 text-sm text-foreground focus:border-signal outline-none resize-none"
                  placeholder={t("contact.form.messagePlaceholder")} />
                {errors.message && <p className="mt-1 text-xs text-[#E50914]">{errors.message}</p>}
              </div>
              <button type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]">
                {t("contact.form.submit")} <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="flex flex-col gap-4">
          <InfoCard icon={Mail} title={t("contact.info.email")} value="contact@success-thinkers.com" href="mailto:contact@success-thinkers.com" />
          <InfoCard icon={Phone} title={t("contact.info.phone")} value="+221 77 443 06 06" href="tel:+221774430606" />
          <InfoCard icon={MapPin} title={t("contact.info.address")} value={t("contact.info.addressValue")} />
          <InfoCard icon={Clock} title={t("contact.info.hours")} value={t("contact.info.hoursValue")} />

          <div className="rounded-xl border border-border bg-black/80 overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Building2 className="h-4 w-4 text-[#E50914]" /> {t("contact.info.office")}
              </div>
              <a href="https://www.openstreetmap.org/?mlat=14.7497&mlon=-17.4914#map=17/14.7497/-17.4914"
                target="_blank" rel="noreferrer" className="text-xs text-[#E50914] hover:underline">
                {t("contact.info.openMap")}
              </a>
            </div>
            <div className="relative aspect-[4/3]">
              <iframe
                title="Map Yoff Dakar"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.503,-17.481,14.741,14.759&layer=mapnik&marker=14.7497,-17.4914"
                className="map-tile-invert absolute inset-0 w-full h-full grayscale contrast-125 invert opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-signal/30" />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, error }: {
  label: string; name: string; type?: string; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{label}</label>
      <input type={type} name={name} placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-black border border-border px-4 py-3 text-sm text-foreground focus:border-signal outline-none" />
      {error && <p className="mt-1 text-xs text-[#E50914]">{error}</p>}
    </div>
  );
}

function InfoCard({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const Inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E50914] shadow-signal shrink-0">
        <Icon className="h-5 w-5 text-white" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{title}</div>
        <div className="text-sm font-semibold mt-0.5 leading-snug">{value}</div>
      </div>
    </>
  );
  const cls = "flex items-start gap-3 rounded-xl border border-border bg-card-grad p-4 hover:border-signal/50 transition-colors";
  return href ? <a href={href} className={cls}>{Inner}</a> : <div className={cls}>{Inner}</div>;
}
