import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './app/locales/en/translation.json';
import translationPL from './app/locales/pl/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;