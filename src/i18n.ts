import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import jaTranslation from './translations/ja';
import enTranslation from './translations/en';

export interface Language {
  name: string;
  displayName: string;
}

export type Languages = Language[];

export const supportedLanguages: Languages = [
  {
    name: 'ja',
    displayName: '日本語',
  },
  {
    name: 'en',
    displayName: 'English',
  },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: jaTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    supportedLngs: supportedLanguages.map((language) => language.name),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS.
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'p', 'div'],
    },
  });

document.documentElement.lang = i18n.language;
i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language;
});
