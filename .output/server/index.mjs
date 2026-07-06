globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"4c-HNP/fldD1KrpFPGbcEmnqH19i3E\"",
		"mtime": "2026-07-06T01:37:03.922Z",
		"size": 76,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"3ab-wv3DEi4gcmybyp55Qm13dPVNJG0\"",
		"mtime": "2026-07-06T01:37:03.922Z",
		"size": 939,
		"path": "../public/sitemap.xml"
	},
	"/assets/building-2-Dfa9KSAF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174-wQev0CG/ibN7WEzI13RtHOIBFGo\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 372,
		"path": "../public/assets/building-2-Dfa9KSAF.js"
	},
	"/assets/circle-check-slr5kc_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-raJa+Mp8UV6xLqnJTX76ojxEhPk\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 167,
		"path": "../public/assets/circle-check-slr5kc_Y.js"
	},
	"/assets/cloud-BBenfJ5B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-Aq+0QIbKlxKrHqrMEf2pQoWN5II\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 261,
		"path": "../public/assets/cloud-BBenfJ5B.js"
	},
	"/assets/contact-DADGnO_Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"101a5-w91+40qYpisoWQhE2/UOcK9mSdI\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 65957,
		"path": "../public/assets/contact-DADGnO_Y.js"
	},
	"/assets/counter-D923tUHQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44b-mlXvCAkuOyKa/BPT+5kbIHizJLY\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 1099,
		"path": "../public/assets/counter-D923tUHQ.js"
	},
	"/assets/cpu-D1kQf5bL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"277-4337Zljencid30ci3Yr1TkDidqk\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 631,
		"path": "../public/assets/cpu-D1kQf5bL.js"
	},
	"/assets/database-BsA-y6nV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-5ZdLs6thTbmp/TvGSw32Hb+63Ww\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 232,
		"path": "../public/assets/database-BsA-y6nV.js"
	},
	"/assets/partenaires-BwA7uVVR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21bc-RPbc7R8z96folWQLTlOHQXFGW7k\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 8636,
		"path": "../public/assets/partenaires-BwA7uVVR.js"
	},
	"/assets/projets-DRIikvlQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61204-5cbIHhqqKFODtcPWeees4miSj9o\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 397828,
		"path": "../public/assets/projets-DRIikvlQ.js"
	},
	"/assets/routes-Bhk0kjX1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"280c-8J7dYKcDKfEgbex3DVrmpffCiQ4\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 10252,
		"path": "../public/assets/routes-Bhk0kjX1.js"
	},
	"/assets/services-BanDn4NC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2923-xcXdi2ZuY1jjWDuTXR++/sftHGM\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 10531,
		"path": "../public/assets/services-BanDn4NC.js"
	},
	"/assets/shield-check-DfNDLCG0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-V934vttyCn+GDJNdmojxaeTrJHU\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 309,
		"path": "../public/assets/shield-check-DfNDLCG0.js"
	},
	"/assets/styles-DRbnfQs5.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16cc8-C3tiwg+EmzyWVbIF1PPqnY6ieQE\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 93384,
		"path": "../public/assets/styles-DRbnfQs5.css"
	},
	"/assets/techniques-C03WrbkT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6b-3SUIeOdoo0UKVJ0t5pLZ/bY/aLQ\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 3691,
		"path": "../public/assets/techniques-C03WrbkT.js"
	},
	"/assets/use-document-title-DZXtGE9y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32a-9Fk8Zu4BV+56il4UrdoOHjQlOZA\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 810,
		"path": "../public/assets/use-document-title-DZXtGE9y.js"
	},
	"/assets/wallet-CIk1ZXaf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"113-e4HBVoVKqkCbVit8IlMqDJXCZ8Y\"",
		"mtime": "2026-07-06T01:37:03.296Z",
		"size": 275,
		"path": "../public/assets/wallet-CIk1ZXaf.js"
	},
	"/assets/index-CfegW-G4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e5c0-4sv0QyP4N6oOynMREqWJaEBao+o\"",
		"mtime": "2026-07-06T01:37:03.295Z",
		"size": 583104,
		"path": "../public/assets/index-CfegW-G4.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_eMTF8J = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_eMTF8J
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
