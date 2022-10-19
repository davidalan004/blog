import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
		  loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",	// translation file path
		},
    debug: true,
    fallbackLng: 'en', //disabled in production
    ns: ["common", "home", "profile"], // can have multiple namespaces, in case you want to divide a huge
    interpolation: {                  // translation into smaller pieces and load them on demand
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
			wait: true,
		},

    
  });

export default i18n;
