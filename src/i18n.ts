import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fr from "./locales/fr/common.json";
import en from "./locales/en/common.json";

export const SUPPORTED_LANGUAGES = ["fr", "en"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];

const isBrowser = typeof window !== "undefined";

const instance = i18n.use(initReactI18next);
if (isBrowser) instance.use(LanguageDetector);

instance.init({
  resources: {
    fr: { common: fr },
    en: { common: en },
  },
  fallbackLng: "fr",
  lng: isBrowser ? undefined : "fr", // server defaults to fr; detector runs in browser
  supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  detection: {
    order: ["localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
    lookupLocalStorage: "st_lang",
  },
  returnObjects: true,
});

export default i18n;
