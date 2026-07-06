import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { A as Cloud, B as CircleCheck, D as Database, F as ArrowRight, I as Activity, N as Building2, P as Briefcase, V as ChartColumn, b as Lock, k as Cpu, l as Server, p as Network, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as useDocumentMeta } from "./use-document-title-TyAo861-.mjs";
import { t as Counter } from "./counter-DpiCBB8K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgoySw3m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAB_KEYS = [
	"tech",
	"partners",
	"sec",
	"company"
];
var TAB_ICONS = {
	tech: Cpu,
	partners: Building2,
	sec: ShieldCheck,
	company: Briefcase
};
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
function Home() {
	const { t } = useTranslation();
	useDocumentMeta(t("home.meta.title"), t("home.meta.description"));
	const [tab, setTab] = (0, import_react.useState)("tech");
	const rawStats = t("home.stats", { returnObjects: true });
	const stats = Array.isArray(rawStats) ? rawStats : [];
	const activeTitle = t(`home.tabs.${tab}.title`);
	const rawActiveItems = t(`home.tabs.${tab}.items`, { returnObjects: true });
	const activeItems = Array.isArray(rawActiveItems) ? rawActiveItems : [];
	const ActiveIcon = TAB_ICONS[tab];
	const rawDeciderItems = t("home.personas.deciders.items", { returnObjects: true });
	const deciderItems = Array.isArray(rawDeciderItems) ? rawDeciderItems : [];
	const rawTechItems = t("home.personas.tech.items", { returnObjects: true });
	const techItems = Array.isArray(rawTechItems) ? rawTechItems : [];
	const deciderIcons = [
		Activity,
		ChartColumn,
		ShieldCheck,
		Briefcase
	];
	const techIcons = [
		Database,
		Lock,
		Network,
		Cloud
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "relative mx-auto max-w-7xl px-6 pt-24 pb-28 lg:pt-32 lg:pb-36",
					initial: "hidden",
					animate: "visible",
					variants: containerVariants,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "inline-flex items-center gap-2 rounded-full border border-signal/40 bg-[#E50914]/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-black dark:text-white font-semibold",
							variants: itemVariants,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[#E50914] animate-pulse" }), t("home.hero.badge")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							className: "mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight",
							variants: itemVariants,
							children: [
								t("home.hero.title1"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-signal",
									children: t("home.hero.title2")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-6 max-w-2xl text-lg text-muted-foreground whitespace-pre-line",
							variants: itemVariants,
							children: t("home.hero.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "mt-10 flex flex-wrap gap-4",
							variants: itemVariants,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-md bg-[#E50914] px-6 py-3.5 text-sm font-semibold text-white shadow-signal hover:bg-[#c2080f] transition-colors",
								children: [
									t("home.hero.cta1"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/techniques",
								className: "inline-flex items-center gap-2 rounded-md border border-border bg-black/40 px-6 py-3.5 text-sm font-semibold text-foreground hover:border-signal/60 hover:text-[#E50914] transition-colors",
								children: t("home.hero.cta2")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-border bg-border",
							variants: itemVariants,
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-carbon p-6 md:p-8 hover:bg-carbon/95 transition-colors group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl md:text-4xl font-bold text-gradient-signal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: s.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold group-hover:text-foreground transition-colors",
									children: s.label
								})]
							}, s.label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "max-w-2xl",
				initial: {
					opacity: 0,
					y: 15
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
					children: t("home.tabs.eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl font-bold",
					children: t("home.tabs.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid lg:grid-cols-[280px_1fr] gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex flex-col gap-2",
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					variants: containerVariants,
					children: TAB_KEYS.map((k) => {
						const TIcon = TAB_ICONS[k];
						const isActive = tab === k;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							onClick: () => setTab(k),
							variants: itemVariants,
							whileHover: { scale: 1.01 },
							className: `group flex items-center gap-3 rounded-lg border px-4 py-4 text-left transition-all ${isActive ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/40"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `flex h-9 w-9 items-center justify-center rounded-md transition-colors ${isActive ? "bg-[#E50914]" : "bg-black border border-border"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TIcon, { className: "h-4 w-4 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-sm font-semibold transition-colors ${isActive ? "text-black dark:text-white" : "text-muted-foreground group-hover:text-foreground"}`,
								children: t(`home.tabs.${k}.title`)
							})]
						}, k);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "rounded-xl border border-border bg-card-grad p-8 min-h-[360px]",
					layout: true,
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { duration: .3 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-10 w-10 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActiveIcon, { className: "h-5 w-5 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold",
							children: activeTitle
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid md:grid-cols-2 gap-4",
						children: activeItems.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 mt-0.5 text-[#E50914] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground",
								children: i
							})]
						}, i))
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-carbon-grad border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "max-w-2xl",
					initial: {
						opacity: 0,
						y: 15
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .5 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
							children: t("home.personas.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-4xl font-bold",
							children: t("home.personas.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: t("home.personas.subtitle")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "mt-12 grid md:grid-cols-2 gap-6",
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					variants: containerVariants,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						variants: itemVariants,
						whileHover: { scale: 1.01 },
						className: "hover-lift rounded-xl border border-border bg-card-grad p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xl font-bold",
								children: [
									t("home.personas.deciders.title"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-medium text-sm",
										children: t("home.personas.deciders.audience")
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: deciderItems.map((txt, idx) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 rounded-md bg-black/40 border border-border/60 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(deciderIcons[idx] || CircleCheck, { className: "h-4 w-4 mt-0.5 text-[#E50914]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: txt
									})]
								}, txt);
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						variants: itemVariants,
						whileHover: { scale: 1.01 },
						className: "hover-lift rounded-xl border border-border bg-card-grad p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xl font-bold",
								children: [
									t("home.personas.tech.title"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground font-medium text-sm",
										children: t("home.personas.tech.audience")
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: techItems.map((txt, idx) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 rounded-md bg-black/40 border border-border/60 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(techIcons[idx] || CircleCheck, { className: "h-4 w-4 mt-0.5 text-[#E50914]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: txt
									})]
								}, txt);
							})
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative overflow-hidden rounded-2xl border border-signal/40 bg-gradient-red p-10 md:p-14",
				initial: {
					opacity: 0,
					scale: .98
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: { once: true },
				transition: { duration: .6 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl md:text-3xl font-bold max-w-xl text-white",
						children: t("home.ctaBand.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/80 max-w-xl",
						children: t("home.ctaBand.subtitle")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-md bg-black px-6 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black transition-colors shrink-0",
						children: [
							t("home.ctaBand.btn"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
