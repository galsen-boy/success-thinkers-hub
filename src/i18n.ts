import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr/common.json";
import en from "./locales/en/common.json";

export const SUPPORTED_LANGUAGES = ["fr", "en"] as const;
export type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];

const instance = i18n.use(initReactI18next);

instance.init({
  resources: {
    fr: { common: fr },
    en: { common: en },
  },
  fallbackLng: "fr",
  lng: "fr", // force French on initial render to prevent SSR hydration mismatches
  supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  returnObjects: true,
});

export default i18n;
