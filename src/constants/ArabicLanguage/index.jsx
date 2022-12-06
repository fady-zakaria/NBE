import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import enTranslations from './Translations/en.json';
import arTranslations from './Translations/ar.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: getLocales()[0].languageCode,
  compatibilityJSON: 'v3',
  resources: resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
