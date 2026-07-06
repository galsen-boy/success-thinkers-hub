import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { D as Database, a as Terminal, c as ShieldAlert, k as Cpu } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/techniques-gECmYEs_.js
var import_jsx_runtime = require_jsx_runtime();
var CARD_ICONS = [
	Database,
	Terminal,
	Cpu,
	ShieldAlert
];
var TECH_LISTS = {
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
		"Oracle SGD"
	],
	microsoft: [
		"SQL Server",
		"Power BI",
		"Power BI Report Server",
		"SSIS",
		"Active Directory",
		"Microsoft Entra",
		"Azure",
		"Transact SQL"
	],
	redhat: [
		"Red Hat Enterprise Linux",
		"KVM",
		"Virtualisation",
		"Containers",
		"Infrastructure automation"
	],
	devops: [
		"CI/CD",
		"Git",
		"Docker",
		"Infrastructure as Code",
		"Monitoring",
		"Observability"
	]
};
var keys = [
	"oracle",
	"microsoft",
	"redhat",
	"devops"
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
function TechniquesPage() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
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
						children: t("techniques.hero.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						className: "mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl",
						variants: itemVariants,
						children: [
							t("techniques.hero.title1"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-gradient-signal",
								children: t("techniques.hero.title2")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "mt-6 max-w-2xl text-muted-foreground text-lg",
						variants: itemVariants,
						children: t("techniques.hero.subtitle")
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
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
			children: keys.map((key, idx) => {
				const Icon = CARD_ICONS[idx];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					variants: itemVariants,
					whileHover: { scale: 1.015 },
					className: "hover-lift rounded-xl border border-border bg-card-grad p-8 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-11 w-11 items-center justify-center rounded-md bg-[#E50914] shadow-signal",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold",
							children: t(`techniques.${key}.title`)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-foreground/90 leading-relaxed",
						children: t(`techniques.${key}.desc`)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-border/60 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] uppercase tracking-widest text-[#E50914] font-bold mb-3",
							children: [t("services.stack.eyebrow"), " / Mastered Technologies"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: TECH_LISTS[key].map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border bg-black/40 px-2.5 py-1 text-xs text-foreground font-medium",
								children: tech
							}, tech))
						})]
					})]
				}, key);
			})
		})
	})] });
}
//#endregion
export { TechniquesPage as component };
