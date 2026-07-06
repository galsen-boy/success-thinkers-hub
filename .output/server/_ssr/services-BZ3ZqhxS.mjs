import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { A as Cloud, B as CircleCheck, D as Database, F as ArrowRight, R as Layers, T as FlaskConical, s as ShieldCheck, z as CodeXml } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BZ3ZqhxS.js
var import_jsx_runtime = require_jsx_runtime();
var QUADRANT_ICONS = [
	Layers,
	Database,
	ShieldCheck,
	FlaskConical
];
var STACK_ICONS = [
	Database,
	Cloud,
	CodeXml
];
var STACK_COLORS = [
	"from-red-500/20",
	"from-blue-500/20",
	"from-emerald-500/20"
];
var STACK_KEYS = [
	"oracle",
	"microsoft",
	"platform"
];
var STACK_ITEMS = {
	oracle: [
		"RAC",
		"ASM",
		"ODI",
		"SGD",
		"Oracle VM",
		"Cloud Control EM",
		"Exadata",
		"ODA"
	],
	microsoft: [
		"Power BI Desktop / Server",
		"SQL Server",
		"Active Directory",
		"SSIS",
		"Azure Cloud",
		"Jira"
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
		"NoSQL"
	]
};
function FlowNode({ label, sub, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative rounded-lg border px-4 py-3 text-center text-xs font-semibold backdrop-blur transition-all duration-300 ${accent ? "border-signal bg-[#E50914]/10 text-black dark:text-white shadow-signal server-highlight-glow" : "border-border bg-black/60 text-foreground"}`,
		children: [label, sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-[10px] font-normal uppercase tracking-wider text-muted-foreground",
			children: sub
		})]
	});
}
function Arrow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "animate-arrow flex items-center justify-center shrink-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-[#E50914]" })
	});
}
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
		y: 20
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
function ServicesPage() {
	const { t } = useTranslation();
	const quadrants = t("services.quadrants", { returnObjects: true });
	const methodologySteps = t("services.methodology.steps", { returnObjects: true });
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
							variants: itemVariants,
							children: t("services.hero.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							className: "mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl",
							variants: itemVariants,
							children: [t("services.hero.title1"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-gradient-signal",
								children: t("services.hero.title2")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-6 max-w-2xl text-muted-foreground text-lg",
							variants: itemVariants,
							children: t("services.hero.subtitle")
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "grid md:grid-cols-2 gap-6",
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .1
				},
				variants: containerVariants,
				children: quadrants.map((q, idx) => {
					const Icon = QUADRANT_ICONS[idx];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
						variants: itemVariants,
						whileHover: { scale: 1.01 },
						className: "hover-lift rounded-xl border border-border bg-card-grad p-8 flex flex-col justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: q.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid sm:grid-cols-2 gap-x-4 gap-y-3",
							children: q.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-xs leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 mt-0.5 text-[#E50914] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: i
								})]
							}, i))
						})] })
					}, q.title);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 border-t border-border/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
							children: t("services.methodology.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-4xl font-bold",
							children: t("services.methodology.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground text-sm",
							children: t("services.methodology.subtitle")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "mt-12 grid grid-cols-1 md:grid-cols-5 gap-6 relative",
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					variants: containerVariants,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-10 left-8 right-8 h-0.5 bg-border pointer-events-none z-0" }), methodologySteps.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "relative z-10 flex flex-col items-center text-center",
						variants: itemVariants,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#E50914] text-white font-bold text-sm shadow-signal border border-white/20",
								children: idx + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-4 text-sm font-bold text-foreground",
								children: step.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[11px] text-muted-foreground leading-relaxed max-w-[180px]",
								children: step.desc
							})
						]
					}, step.name))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: { delay: .3 },
					className: "mt-12 rounded-lg bg-carbon border border-border px-6 py-4 text-center text-xs text-muted-foreground leading-relaxed",
					children: t("services.methodology.note")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-b border-border/60 bg-carbon-grad",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
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
						children: t("services.stack.eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-bold",
						children: t("services.stack.title")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "mt-12 grid md:grid-cols-3 gap-6",
					initial: "hidden",
					whileInView: "visible",
					viewport: { once: true },
					variants: containerVariants,
					children: STACK_KEYS.map((key, idx) => {
						const Icon = STACK_ICONS[idx];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: itemVariants,
							whileHover: { y: -4 },
							className: "rounded-xl border border-border bg-black/60 p-6 relative overflow-hidden flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br ${STACK_COLORS[idx]} to-transparent opacity-50 pointer-events-none` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7 text-[#E50914]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-bold",
										children: t(`services.stack.${key}`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: STACK_ITEMS[key].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-black/60 px-3 py-1 text-xs font-medium text-foreground",
											children: it
										}, it))
									})
								]
							})]
						}, key);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20 border-b border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					children: t("services.sgd.eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl font-bold",
					children: t("services.sgd.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto",
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: { duration: .7 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-[900px] grid grid-cols-5 gap-4 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.sgd.devices"),
								sub: t("services.sgd.devicesSub")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.sgd.ad"),
								sub: t("services.sgd.adSub")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, { label: t("services.sgd.gw1") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, { label: t("services.sgd.gw2") })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-5 gap-4 items-center min-w-[900px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border-signal border bg-[#E50914]/10 p-4 text-center shadow-signal cluster-pulse",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-[#E50914] font-bold",
									children: t("services.sgd.cluster")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 grid grid-cols-2 gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
										label: t("services.sgd.server1"),
										accent: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
										label: t("services.sgd.server2"),
										accent: true
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-3 gap-4 min-w-[900px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.sgd.erp"),
								sub: t("services.sgd.erpSub")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.sgd.bi"),
								sub: t("services.sgd.biSub")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.sgd.dmz"),
								sub: t("services.sgd.dmzSub")
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
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
				children: t("services.ged.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "mt-10 rounded-xl border border-border bg-card-grad p-8 overflow-x-auto",
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: { duration: .7 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-[900px] grid grid-cols-7 gap-3 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
							label: t("services.ged.auth"),
							sub: t("services.ged.authSub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
							label: t("services.ged.adf"),
							sub: t("services.ged.adfSub")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.ged.inst1"),
								accent: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
								label: t("services.ged.inst2"),
								accent: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlowNode, {
							label: t("services.ged.backup"),
							sub: t("services.ged.backupSub")
						})
					]
				})
			})]
		})
	] });
}
//#endregion
export { ServicesPage as component };
