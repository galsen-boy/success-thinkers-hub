import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { B as CircleCheck, C as HardHat, H as FingerprintPattern, L as TriangleAlert, M as CircleDot, N as Building2, d as Radio, r as Wallet, s as ShieldCheck, v as MapPin } from "../_libs/lucide-react.mjs";
import { t as Counter } from "./counter-DpiCBB8K.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart, u as Legend } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets-ByfvGIXN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Reactively tracks whether the <html> element carries the `.dark` class.
* Used by chart components that need explicit color values (Recharts, etc.)
* because CSS custom properties cannot be passed into SVG stroke/fill props.
*/
function useIsDark() {
	const [isDark, setIsDark] = (0, import_react.useState)(() => {
		if (typeof document === "undefined") return false;
		return document.documentElement.classList.contains("dark");
	});
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		const html = document.documentElement;
		const update = () => setIsDark(html.classList.contains("dark"));
		update();
		const obs = new MutationObserver(update);
		obs.observe(html, {
			attributes: true,
			attributeFilter: ["class"]
		});
		return () => obs.disconnect();
	}, []);
	return isDark;
}
var accountingData = [
	{
		m: "Jan",
		tx: 4200,
		balance: 12e3,
		gap: 180
	},
	{
		m: "Feb",
		tx: 4800,
		balance: 13400,
		gap: 90
	},
	{
		m: "Mar",
		tx: 5300,
		balance: 14100,
		gap: 60
	},
	{
		m: "Apr",
		tx: 6100,
		balance: 15800,
		gap: 40
	},
	{
		m: "May",
		tx: 5700,
		balance: 16200,
		gap: 30
	},
	{
		m: "Jun",
		tx: 6800,
		balance: 17900,
		gap: 15
	}
];
var sites = [
	{
		id: "DKR-01",
		city: "Dakar",
		x: 28,
		y: 60,
		workers: 124,
		status: "active"
	},
	{
		id: "DKR-02",
		city: "Dakar — Plateau",
		x: 34,
		y: 62,
		workers: 88,
		status: "active"
	},
	{
		id: "THS-01",
		city: "Thiès",
		x: 50,
		y: 56,
		workers: 42,
		status: "hiring"
	},
	{
		id: "SLS-01",
		city: "Saint-Louis",
		x: 38,
		y: 28,
		workers: 31,
		status: "active"
	}
];
var guards = [
	{
		id: "G-014",
		name: "M. Sarr",
		x: 25,
		y: 55,
		status: "active"
	},
	{
		id: "G-021",
		name: "A. Diop",
		x: 45,
		y: 40,
		status: "patrol"
	},
	{
		id: "G-028",
		name: "F. Ndiaye",
		x: 60,
		y: 65,
		status: "incident"
	},
	{
		id: "G-033",
		name: "I. Ba",
		x: 70,
		y: 30,
		status: "active"
	},
	{
		id: "G-041",
		name: "K. Fall",
		x: 35,
		y: 75,
		status: "patrol"
	}
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
function ProjectsPage() {
	const { t } = useTranslation();
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
							children: t("projects.hero.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							className: "mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl",
							variants: itemVariants,
							children: [
								t("projects.hero.title1"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-signal",
									children: t("projects.hero.title2")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: "mt-6 max-w-2xl text-muted-foreground text-lg",
							variants: itemVariants,
							children: t("projects.hero.subtitle")
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessAccounting, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessWorkers, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessPrinting, {})
	] });
}
function SuccessAccounting() {
	const { t } = useTranslation();
	const isDark = useIsDark();
	const grid = isDark ? "#222" : "#E2E8F0";
	const axis = isDark ? "#9CA3AF" : "#475569";
	const tooltipBg = isDark ? "#0a0a0a" : "#ffffff";
	const tooltipText = isDark ? "#F1F5F9" : "#0F172A";
	const features = t("projects.accounting.features", { returnObjects: true });
	const kpis = t("projects.accounting.kpis", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-carbon-grad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start",
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .1
				},
				variants: containerVariants,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal animate-pulse",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-6 w-6 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
								children: t("projects.accounting.label")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl md:text-3xl font-bold",
								children: t("projects.accounting.name")
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-lg italic text-foreground leading-relaxed",
							children: [
								"« ",
								t("projects.accounting.slogan"),
								" »"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 mt-0.5 text-[#E50914] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, f))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					className: "rounded-xl border border-border bg-black/80 p-6 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: t("projects.accounting.dashboard")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold",
								children: t("projects.accounting.period")
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-amber-400" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#E50914]" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-3 mt-5",
							children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-border bg-carbon p-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: k.l
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-bold mt-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: k.v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-emerald-400",
										children: k.d
									})
								]
							}, k.l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: accountingData,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: grid
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "m",
											stroke: axis,
											fontSize: 11
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: axis,
											fontSize: 11
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											background: tooltipBg,
											border: "1px solid #E50914",
											borderRadius: 8,
											fontSize: 12,
											color: tooltipText
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: {
											fontSize: 11,
											color: axis
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "tx",
											name: t("projects.accounting.series.tx"),
											stroke: "#E50914",
											strokeWidth: 2.5,
											dot: { r: 3 }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "balance",
											name: t("projects.accounting.series.balance"),
											stroke: isDark ? "#60A5FA" : "#2563EB",
											strokeWidth: 2,
											dot: { r: 3 }
										})
									]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-32",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: accountingData,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: grid
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "m",
											stroke: axis,
											fontSize: 11
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											stroke: axis,
											fontSize: 11
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
											background: tooltipBg,
											border: "1px solid #E50914",
											borderRadius: 8,
											fontSize: 12,
											color: tooltipText
										} }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "gap",
											name: t("projects.accounting.series.gap"),
											fill: "#E50914",
											radius: [
												4,
												4,
												0,
												0
											]
										})
									]
								})
							})
						})
					]
				})]
			})
		})
	});
}
function SuccessWorkers() {
	const { t } = useTranslation();
	const [sel, setSel] = (0, import_react.useState)("DKR-01");
	const active = sites.find((s) => s.id === sel);
	const features = t("projects.workers.features", { returnObjects: true });
	const statusLabel = (k) => k === "active" ? t("projects.workers.statusActive") : t("projects.workers.statusHiring");
	const totalWorkers = sites.reduce((a, s) => a + s.workers, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start",
			initial: "hidden",
			whileInView: "visible",
			viewport: {
				once: true,
				amount: .1
			},
			variants: containerVariants,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: itemVariants,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardHat, { className: "h-6 w-6 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
							children: t("projects.workers.label")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl md:text-3xl font-bold",
							children: t("projects.workers.name")
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-lg italic text-foreground leading-relaxed",
						children: [
							"« ",
							t("projects.workers.slogan"),
							" »"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 mt-0.5 text-[#E50914] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
						}, f))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: itemVariants,
				className: "rounded-xl border border-border bg-black/80 p-6 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: t("projects.workers.mapTitle")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: sites.length }),
								" ",
								t("projects.workers.summary").split("chantiers")[0].includes("sites") ? "sites" : "chantiers",
								" ",
								"· ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: totalWorkers }),
								" ",
								t("projects.workers.workersLabel")
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 text-[#E50914]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid md:grid-cols-[1.4fr_1fr] gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] rounded-lg border border-border bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.15),transparent_60%),linear-gradient(180deg,#0a0a0a,#161616)] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 100 100",
									className: "absolute inset-0 w-full h-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M10 35 L18 22 L40 18 L55 22 L72 18 L88 30 L86 50 L72 62 L60 70 L45 78 L30 76 L18 68 L8 55 Z",
										fill: "rgba(229,9,20,0.04)",
										stroke: "rgba(229,9,20,0.4)",
										strokeWidth: "0.4"
									})
								}),
								sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSel(s.id),
									style: {
										left: `${s.x}%`,
										top: `${s.y}%`
									},
									className: `absolute -translate-x-1/2 -translate-y-1/2 group marker-pulse ${sel === s.id ? "z-10" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-3 w-3 rounded-full ring-2 ring-black ${sel === s.id ? "bg-[#E50914] animate-pulse" : "bg-white"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold text-white bg-black/80 border border-border rounded px-1.5 py-0.5",
										children: s.city
									})]
								}, s.id))
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSel(s.id),
								className: `w-full text-left rounded-md border p-3 transition-all ${sel === s.id ? "border-signal bg-[#E50914]/10" : "border-border bg-carbon hover:border-signal/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold",
											children: s.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[10px] px-2 py-0.5 rounded-full ${s.status === "active" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"}`,
											children: statusLabel(s.status)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm font-semibold",
										children: s.city
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: s.workers }),
											" ",
											t("projects.workers.workersLabel")
										]
									})
								]
							}, s.id))
						})]
					}),
					active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-md border border-signal/40 bg-card-grad p-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[#E50914] font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
								" ",
								active.city,
								" — ",
								active.id
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-3 gap-3 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: t("projects.workers.siteWorkers")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-base",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: active.workers })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: t("projects.workers.siteStatus")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-base",
									children: statusLabel(active.status)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: t("projects.workers.siteProductivity")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-base text-emerald-400",
									children: "94%"
								})] })
							]
						})]
					})
				]
			})]
		})
	});
}
function SuccessPrinting() {
	const { t } = useTranslation();
	const [alert, setAlert] = (0, import_react.useState)(false);
	const features = t("projects.printing.features", { returnObjects: true });
	const statusLabel = (k) => k === "active" ? t("projects.printing.statusActive") : k === "patrol" ? t("projects.printing.statusPatrol") : t("projects.printing.statusIncident");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-carbon-grad",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start",
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					amount: .1
				},
				variants: containerVariants,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, { className: "h-6 w-6 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.28em] text-[#E50914] font-semibold",
								children: t("projects.printing.label")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl md:text-3xl font-bold",
								children: t("projects.printing.name")
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-lg italic text-foreground leading-relaxed",
							children: [
								"« ",
								t("projects.printing.slogan"),
								" »"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-md border border-border/60 bg-black/40 p-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 mt-0.5 text-[#E50914] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, f))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: itemVariants,
					className: `rounded-xl border bg-black/80 p-6 shadow-elevated transition-colors ${alert ? "border-[#E50914] shadow-signal" : "border-border"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: t("projects.printing.console")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-semibold flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-[#E50914]" }),
									" ",
									t("projects.printing.agents")
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setAlert((a) => !a),
								className: `inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${alert ? "bg-slate-900 text-white border border-white/20 dark:bg-white dark:text-black dark:border-transparent" : "bg-[#E50914] text-white shadow-signal hover:bg-[#c2080f]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), alert ? t("projects.printing.stop") : t("projects.printing.trigger")]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid md:grid-cols-[1.4fr_1fr] gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative aspect-[4/3] rounded-lg border overflow-hidden ${alert ? "border-[#E50914]" : "border-border"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 ${alert ? "bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.35),transparent_70%)]" : "bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.12),transparent_70%)]"}` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-30" }),
									alert && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border-4 border-[#E50914] animate-pulse" }),
									guards.map((g) => {
										const color = g.status === "incident" || alert ? "bg-[#E50914]" : g.status === "active" ? "bg-emerald-400" : "bg-amber-400";
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: {
												left: `${g.x}%`,
												top: `${g.y}%`
											},
											className: "absolute -translate-x-1/2 -translate-y-1/2 marker-pulse",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-3 w-3 rounded-full ring-2 ring-black ${color} ${g.status === "incident" || alert ? "animate-pulse" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold bg-black/80 border border-border rounded px-1.5 py-0.5",
												children: g.id
											})]
										}, g.id);
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2 max-h-[300px] overflow-auto pr-1",
								children: guards.map((g) => {
									const status = alert ? "incident" : g.status;
									const badge = status === "incident" ? "bg-[#E50914]/20 text-[#E50914] border-[#E50914]/40" : status === "active" ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" : "bg-amber-500/20 text-amber-300 border-amber-500/40";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-md border border-border bg-carbon p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold",
												children: g.id
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[10px] px-2 py-0.5 rounded-full border ${badge}`,
												children: statusLabel(status)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-sm font-semibold mt-1 flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "h-3 w-3 text-[#E50914]" }),
												" ",
												g.name
											]
										})]
									}, g.id);
								})
							})]
						}),
						alert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-md border border-[#E50914] bg-[#E50914]/10 p-3 flex items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "h-5 w-5 text-[#E50914] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("projects.printing.alertMsg") })]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { ProjectsPage as component };
