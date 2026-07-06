import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { O as Crown, P as Briefcase, S as HeartHandshake, _ as Megaphone, i as Users, k as Cpu, l as Server, r as Wallet, s as ShieldCheck, w as HardDrive } from "../_libs/lucide-react.mjs";
import { t as useDocumentMeta } from "./use-document-title-TyAo861-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partenaires-oe46X2E6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NODE_IDS = [
	"sec",
	"exec",
	"tech",
	"hr",
	"com",
	"dfc"
];
var NODE_ICONS = [
	Users,
	Briefcase,
	Cpu,
	HeartHandshake,
	Megaphone,
	Wallet
];
var APPLIANCE_ICONS = [
	HardDrive,
	Server,
	ShieldCheck
];
var APPLIANCE_BADGES = [
	[
		"Oracle",
		"Flash NVMe",
		"RAC"
	],
	[
		"HA",
		"Multi-node",
		"ASM"
	],
	[
		"PCI-DSS",
		"STIG",
		"Mobile Money"
	]
];
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
function PartnersPage() {
	const { t } = useTranslation();
	useDocumentMeta(t("partners.meta.title"), t("partners.meta.description"));
	const [selected, setSelected] = (0, import_react.useState)("tech");
	const nodes = t("partners.org.nodes", { returnObjects: true });
	const appliances = t("partners.appliances.items", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-hero",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#E50914]/10 blur-3xl pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "relative mx-auto max-w-7xl px-6 py-20 lg:py-28",
					initial: "hidden",
					animate: "visible",
					variants: containerVariants,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
						variants: itemVariants,
						children: t("partners.hero.eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						className: "mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl",
						variants: itemVariants,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-signal",
								children: t("partners.hero.title1")
							}),
							" ",
							t("partners.hero.title2")
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					className: "text-3xl md:text-4xl font-bold",
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
					children: t("partners.org.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					className: "mt-3 text-muted-foreground max-w-2xl",
					initial: {
						opacity: 0,
						y: 15
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: .1
					},
					children: t("partners.org.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							onClick: () => setSelected("ceo"),
							whileHover: { scale: 1.02 },
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .5,
								type: "spring"
							},
							className: `group rounded-xl border-2 px-8 py-5 text-center transition-all ${selected === "ceo" ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/60"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#E50914] shadow-signal group-hover:scale-110 transition-transform",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-6 w-6 text-white" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-lg font-bold",
									children: "Pape DIENG"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-[#E50914] font-semibold",
									children: t("partners.org.ceoRole")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full max-w-4xl bg-border animate-width" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-0 pt-10 w-full",
							initial: "hidden",
							whileInView: "visible",
							viewport: { once: true },
							variants: containerVariants,
							children: NODE_IDS.map((id, idx) => {
								const Icon = NODE_ICONS[idx];
								const node = nodes[idx];
								const isActive = selected === id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "relative flex flex-col items-center",
									variants: itemVariants,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 left-1/2 h-10 w-px bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setSelected(id),
										className: `w-full rounded-lg border p-4 text-center transition-all duration-300 hover:scale-[1.01] ${isActive ? "border-signal bg-card-grad shadow-signal" : "border-border bg-carbon hover:border-signal/50 hover:-translate-y-1"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `flex h-10 w-10 mx-auto items-center justify-center rounded-md transition-transform duration-300 ${isActive ? "bg-[#E50914] scale-105" : "bg-black border border-border"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-white" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 text-sm font-bold leading-tight",
												children: node.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-[11px] text-muted-foreground",
												children: node.role
											})
										]
									})]
								}, id);
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-b border-border/60 bg-carbon-grad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
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
						children: t("partners.appliances.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
						className: "mt-3 text-3xl md:text-4xl font-bold",
						initial: {
							opacity: 0,
							y: 15
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: .1
						},
						children: t("partners.appliances.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-3 text-muted-foreground max-w-2xl",
						initial: {
							opacity: 0,
							y: 15
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: .2
						},
						children: t("partners.appliances.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "mt-12 grid md:grid-cols-3 gap-6",
						initial: "hidden",
						whileInView: "visible",
						viewport: { once: true },
						variants: containerVariants,
						children: appliances.map((a, idx) => {
							const Icon = APPLIANCE_ICONS[idx];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
								variants: itemVariants,
								whileHover: { scale: 1.015 },
								className: "hover-lift rounded-xl border border-border bg-black/70 p-6 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-[#E50914] transition-transform duration-300 hover:rotate-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-bold leading-tight",
										children: a.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
										children: a.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-foreground/90 leading-relaxed",
										children: a.desc
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: APPLIANCE_BADGES[idx].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-signal/40 bg-[#E50914]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black dark:text-white",
										children: b
									}, b))
								})]
							}, a.name);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "mt-14 rounded-xl border border-border bg-black/60 p-8",
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .6 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold",
								children: t("partners.appliances.hwPartnersTitle")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t("partners.appliances.hwPartnersSub")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-8",
								children: [
									"IBM",
									"DELL",
									"HP"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									className: "flex items-center gap-2 text-foreground cursor-pointer group",
									whileHover: { y: -2 },
									transition: {
										type: "spring",
										stiffness: 300,
										damping: 10
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-5 w-5 text-[#E50914] group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl font-extrabold tracking-tight",
										children: p
									})]
								}, p))
							})]
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { PartnersPage as component };
