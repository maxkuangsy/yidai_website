import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '/public/locales/en/translation.json';
import zhTranslation from '/public/locales/zh/translation.json';
import arTranslation from '/public/locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;