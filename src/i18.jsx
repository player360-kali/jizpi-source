// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translation/en.json';
import ru from './translation/ru.json';
import qq from './translation/qq.json';
import uz from './translation/uz.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    qq: {
      translation: qq,
    },
    uz: {
      translation: uz,
    },
  },
  lng: 'uz', // Default language
  fallbackLng: 'en', // If language is not found
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
