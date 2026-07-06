import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/counter-DpiCBB8K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ value, duration = 1.5 }) {
	const strVal = String(value).trim();
	const cleanedVal = strVal.replace(/\s+/g, "").replace(",", ".");
	const numericMatch = cleanedVal.match(/(\d+\.?\d*)/);
	const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
	const hasComma = strVal.includes(",");
	const decimalIndex = cleanedVal.indexOf(".");
	const decimalPlaces = decimalIndex !== -1 ? cleanedVal.length - decimalIndex - 1 : 0;
	const parts = numericMatch ? cleanedVal.split(numericMatch[0]) : ["", ""];
	const prefix = parts[0];
	const suffix = parts[1];
	const [count, setCount] = (0, import_react.useState)(0);
	const elementRef = (0, import_react.useRef)(null);
	const [triggered, setTriggered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
			setCount(numericValue);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !triggered) {
				setTriggered(true);
				const end = numericValue;
				if (end === 0) return;
				const fps = 60;
				const totalFrames = Math.min(Math.floor(duration * fps), fps * 2);
				const increment = end / totalFrames;
				let frame = 0;
				const timer = setInterval(() => {
					frame++;
					const currentCount = increment * frame;
					if (frame >= totalFrames) {
						setCount(end);
						clearInterval(timer);
					} else setCount(currentCount);
				}, 1e3 / fps);
				return () => clearInterval(timer);
			}
		}, {
			threshold: .1,
			rootMargin: "0px 0px -50px 0px"
		});
		if (elementRef.current) observer.observe(elementRef.current);
		return () => observer.disconnect();
	}, [
		numericValue,
		duration,
		triggered
	]);
	if (isNaN(numericValue) || numericValue === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: strVal });
	const decimalPart = count.toFixed(decimalPlaces);
	let formattedCount = hasComma ? decimalPart.replace(".", ",") : decimalPart;
	if (numericValue >= 1e3 && !decimalPlaces) formattedCount = String(Math.floor(count)).split(/(?=(?:...)*$)/).join(" ");
	const displayValue = `${prefix}${formattedCount}${suffix}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: elementRef,
		children: triggered ? displayValue : "0"
	});
}
//#endregion
export { Counter as t };
