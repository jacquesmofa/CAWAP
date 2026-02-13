import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import messages from './local/index';

// Get saved language or default to 'en'
const savedLanguage = localStorage.getItem('cawap_language') || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: 'en',
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Listen for language change events and update i18n
window.addEventListener('languageChange', (e: Event) => {
  const customEvent = e as CustomEvent<{ language: string }>;
  const newLang = customEvent.detail.language;
  i18n.changeLanguage(newLang);
  localStorage.setItem('cawap_language', newLang);
});

export default i18n;
