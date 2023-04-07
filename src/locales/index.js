// import React from "react";
// import ReactDOM from "react-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en";
import jp from "../locales/jp";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: en,
      jp: jp,
    },
    lng: "jp", // if you're using a language detector, do not define the lng option
    fallbackLng: localStorage.getItem("language"),
    debug: true,

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
