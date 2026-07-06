import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-document-title-TyAo861-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useDocumentMeta(title, description) {
	(0, import_react.useEffect)(() => {
		if (typeof document === "undefined") return;
		if (title) document.title = title;
		if (description) {
			let m = document.querySelector("meta[name=\"description\"]");
			if (!m) {
				m = document.createElement("meta");
				m.setAttribute("name", "description");
				document.head.appendChild(m);
			}
			m.setAttribute("content", description);
		}
	}, [title, description]);
}
//#endregion
export { useDocumentMeta as t };
