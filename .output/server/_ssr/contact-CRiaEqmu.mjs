import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { B as CircleCheck, N as Building2, f as Phone, h as MessageCircle, j as Clock, u as Send, v as MapPin, y as Mail } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CRiaEqmu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .15 }
	}
};
var itemVariants = {
	hidden: {
		opacity: 0,
		y: 25
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15
		}
	}
};
function ContactPage() {
	const { t } = useTranslation();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [mailtoUrl, setMailtoUrl] = (0, import_react.useState)("");
	const sectors = t("contact.form.sectors", { returnObjects: true });
	const errMsg = t("contact.form.errors", { returnObjects: true });
	const schema = objectType({
		firstName: stringType().trim().min(1, errMsg.firstName).max(60),
		lastName: stringType().trim().min(1, errMsg.lastName).max(60),
		email: stringType().trim().email(errMsg.email).max(160),
		company: stringType().trim().min(1, errMsg.company).max(120),
		sector: stringType().min(1, errMsg.sector),
		infra: stringType().trim().min(1, errMsg.infra).max(160),
		message: stringType().trim().min(10, errMsg.message).max(2e3)
	});
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd.entries());
		const r = schema.safeParse(data);
		if (!r.success) {
			const errs = {};
			r.error.issues.forEach((i) => {
				errs[i.path[0]] = i.message;
			});
			setErrors(errs);
			return;
		}
		setErrors({});
		const url = `mailto:contact@successthinkers.org?subject=${encodeURIComponent(`Demande de diagnostic SUCCESS Thinkers - ${data.company}`)}&body=${encodeURIComponent(`Prénom : ${data.firstName}\nNom : ${data.lastName}\nEmail professionnel : ${data.email}\nEntreprise : ${data.company}\nSecteur d'activité : ${data.sector}\nType d'infrastructure : ${data.infra}\n\nMessage :\n${data.message}`)}`;
		setMailtoUrl(url);
		setSent(true);
		window.location.href = url;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative mx-auto max-w-7xl px-6 py-20 lg:py-24",
				initial: "hidden",
				animate: "visible",
				variants: containerVariants,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
						variants: itemVariants,
						children: t("contact.hero.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						className: "mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl",
						variants: itemVariants,
						children: [
							t("contact.hero.title1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-signal",
								children: t("contact.hero.title2")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-5 max-w-2xl text-muted-foreground",
						variants: itemVariants,
						children: t("contact.hero.subtitle")
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-[1.4fr_1fr] gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "rounded-xl border border-border bg-card-grad p-8",
			initial: {
				opacity: 0,
				x: -20
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: { once: true },
			transition: { duration: .5 },
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#E50914] shadow-signal animate-bounce",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7 text-white" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-2xl font-bold",
						children: t("contact.form.sentTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground max-w-md",
						children: t("contact.form.sentBody")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: mailtoUrl,
							className: "inline-flex items-center gap-2 rounded-md bg-[#E50914] px-5 py-2.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
								" ",
								t("contact.form.submit"),
								" (Mailto)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSent(false),
							className: "rounded-md border border-border bg-carbon px-5 py-2.5 text-sm hover:border-signal/60",
							children: t("contact.form.again")
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "grid gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: t("contact.form.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("contact.form.firstName"),
							name: "firstName",
							error: errors.firstName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("contact.form.lastName"),
							name: "lastName",
							error: errors.lastName
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("contact.form.email"),
						name: "email",
						type: "email",
						error: errors.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("contact.form.company"),
						name: "company",
						error: errors.company
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground",
							children: t("contact.form.sector")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "sector",
							defaultValue: "",
							className: "mt-2 w-full rounded-md bg-white dark:bg-black border border-slate-300 dark:border-border px-4 py-3 text-sm text-black dark:text-foreground focus:border-signal outline-none transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: t("contact.form.sectorPlaceholder")
							}), sectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: s,
								children: s
							}, s))]
						}),
						errors.sector && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[#E50914]",
							children: errors.sector
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("contact.form.infra"),
						name: "infra",
						placeholder: t("contact.form.infraPlaceholder"),
						error: errors.infra
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground",
							children: t("contact.form.message")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							className: "mt-2 w-full rounded-md bg-white dark:bg-black border border-slate-300 dark:border-border px-4 py-3 text-sm text-black dark:text-foreground focus:border-signal outline-none resize-none transition-colors placeholder-slate-400 dark:placeholder-muted-foreground",
							placeholder: t("contact.form.messagePlaceholder")
						}),
						errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-[#E50914]",
							children: errors.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex items-center justify-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-all duration-200 active:scale-95 cursor-pointer",
						children: [
							t("contact.form.submit"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
						]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			className: "flex flex-col gap-4",
			initial: {
				opacity: 0,
				x: 20
			},
			whileInView: {
				opacity: 1,
				x: 0
			},
			viewport: { once: true },
			transition: { duration: .5 },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Mail,
					title: t("contact.info.email"),
					value: "contact@successthinkers.org",
					href: "mailto:contact@successthinkers.org"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: MessageCircle,
					title: "WhatsApp",
					value: t("contact.info.whatsappLabel"),
					href: "https://wa.me/221774430606"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Phone,
					title: t("contact.info.phone"),
					value: "+221 77 443 06 06",
					href: "tel:+221774430606"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: MapPin,
					title: t("contact.info.address"),
					value: t("contact.info.addressValue")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Clock,
					title: t("contact.info.hours"),
					value: t("contact.info.hoursValue")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-black/80 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-3 border-b border-border flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-[#E50914]" }),
								" ",
								t("contact.info.office")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.openstreetmap.org/?mlat=14.7497&mlon=-17.4914#map=17/14.7497/-17.4914",
							target: "_blank",
							rel: "noreferrer",
							className: "text-xs text-[#E50914] hover:underline",
							children: t("contact.info.openMap")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map Yoff Dakar",
							src: "https://www.openstreetmap.org/export/embed.html?bbox=-17.503,14.741,-17.481,14.759&layer=mapnik&marker=14.7497,-17.4914",
							className: "map-tile-invert absolute top-0 left-0 w-full h-[calc(100%+36px)] grayscale contrast-125 invert opacity-90",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none ring-1 ring-inset ring-signal/30" })]
					})]
				})
			]
		})]
	})] });
}
function Field({ label, name, type = "text", placeholder, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			placeholder,
			className: "mt-2 w-full rounded-md bg-white dark:bg-black border border-slate-300 dark:border-border px-4 py-3 text-sm text-black dark:text-foreground focus:border-signal outline-none transition-colors placeholder-slate-400 dark:placeholder-muted-foreground"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-[#E50914]",
			children: error
		})
	] });
}
function InfoCard({ icon: Icon, title, value, href }) {
	const Inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex h-10 w-10 items-center justify-center rounded-md bg-[#E50914] shadow-signal shrink-0 transition-transform duration-300 group-hover:scale-110",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-white" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest font-bold text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-semibold mt-0.5 leading-snug",
			children: value
		})]
	})] });
	const cls = "group flex items-start gap-3 rounded-xl border border-border bg-card-grad p-4 hover:border-signal/50 transition-all duration-300 hover:scale-[1.01]";
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cls,
		children: Inner
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cls,
		children: Inner
	});
}
//#endregion
export { ContactPage as component };
