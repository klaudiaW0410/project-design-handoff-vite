import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import enTranslations from "./enArticleData.json"
import seTranslations from "./seArticleData.json"

 export const resources = {
  en: {
    translation: enTranslations,
  },
  se: {
    translation: seTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "se", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;