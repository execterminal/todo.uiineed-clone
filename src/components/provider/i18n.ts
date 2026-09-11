import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "chinese"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    debug: true,

    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend(
          (language: string) => import(`/public/locales/${language}.json`),
        ),
      ],
      backendOptions: [
        {
          loadPath: "/public/locales/{{lng}}.json",
        },
      ],
    },
  });

export const enToChinese = () => {
  i18n.changeLanguage("chinese");
};
export const chineseToEn = () => {
  i18n.changeLanguage("en");
};

export default i18n;
