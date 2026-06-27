import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SUCCESS Thinkers" },
      { name: "description", content: "Demandez un audit gratuit. Ouest Foire, Yoff, Dakar — Sénégal." },
      { property: "og:title", content: "Contactez SUCCESS Thinkers" },
      { property: "og:description", content: "Audit gratuit, expertise Oracle & Microsoft. Réponse sous 24h ouvrées." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(60),
  lastName: z.string().trim().min(1, "Nom requis").max(60),
  email: z.string().trim().email("Email invalide").max(160),
  company: z.string().trim().min(1, "Entreprise requise").max(120),
  sector: z.string().min(1, "Secteur requis"),
  infra: z.string().trim().min(1, "Type d'infrastructure requis").max(160),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

const SECTORS = ["Banque / Fintech", "Télécoms", "Secteur Public", "BTP", "Énergie"];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

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
          <p className="text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold">Contact</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
            Parlons de votre <span className="text-gradient-signal">infrastructure critique.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Audit gratuit conduit par nos ingénieurs Oracle certifiés. Réponse sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        {/* Form */}
        <div className="rounded-xl border border-border bg-card-grad p-8">
          {sent ? (
            <div className="flex flex-col items-center text-center py-16">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E50914] shadow-signal">
                <CheckCircle2 className="h-7 w-7 text-white" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">Demande transmise</h2>
              <p className="mt-2 text-muted-foreground max-w-md">
                Merci. Un consultant prendra contact avec vous sous 24h ouvrées.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-md border border-border px-4 py-2 text-sm hover:border-signal/60">
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <h2 className="text-xl font-bold">Formulaire de demande</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Prénom" name="firstName" error={errors.firstName} />
                <Field label="Nom" name="lastName" error={errors.lastName} />
              </div>
              <Field label="Email professionnel" name="email" type="email" error={errors.email} />
              <Field label="Entreprise" name="company" error={errors.company} />
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Secteur d'activité</label>
                <select
                  name="sector"
                  defaultValue=""
                  className="mt-2 w-full rounded-md bg-black border border-border px-4 py-3 text-sm text-foreground focus:border-signal outline-none"
                >
                  <option value="" disabled>— Sélectionner —</option>
                  {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.sector && <p className="mt-1 text-xs text-[#E50914]">{errors.sector}</p>}
              </div>
              <Field label="Type d'infrastructure" name="infra" placeholder="Ex : Oracle RAC, datacenter on-prem, hybrid OCI…" error={errors.infra} />
              <div>
                <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-md bg-black border border-border px-4 py-3 text-sm text-foreground focus:border-signal outline-none resize-none"
                  placeholder="Décrivez votre besoin, vos contraintes et vos délais."
                />
                {errors.message && <p className="mt-1 text-xs text-[#E50914]">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f]"
              >
                Envoyer la demande <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info + map */}
        <aside className="flex flex-col gap-4">
          <InfoCard icon={Mail} title="Email" value="contact@success-thinkers.com" href="mailto:contact@success-thinkers.com" />
          <InfoCard icon={Phone} title="Téléphone" value="+221 77 443 06 06" href="tel:+221774430606" />
          <InfoCard icon={MapPin} title="Adresse" value="Ouest foire lot 12805, côté Banque Agricole, Yoff Dakar, Sénégal" />
          <InfoCard icon={Clock} title="Horaires" value="Lun — Ven · 08h30 – 18h00 (GMT)" />

          {/* Map */}
          <div className="rounded-xl border border-border bg-black/80 overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Building2 className="h-4 w-4 text-[#E50914]" /> Bureau principal — Yoff
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=14.7497&mlon=-17.4914#map=17/14.7497/-17.4914"
                target="_blank" rel="noreferrer"
                className="text-xs text-[#E50914] hover:underline"
              >
                Ouvrir la carte
              </a>
            </div>
            <div className="relative aspect-[4/3]">
              <iframe
                title="Carte Yoff Dakar"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-17.503,-17.481,14.741,14.759&layer=mapnik&marker=14.7497,-17.4914"
                className="absolute inset-0 w-full h-full grayscale contrast-125 invert opacity-90"
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
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-black border border-border px-4 py-3 text-sm text-foreground focus:border-signal outline-none"
      />
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
