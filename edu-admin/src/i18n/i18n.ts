import i18n from 'i18next';
import MAINLAYOUT_EN from '@/constants/language/en/mainLayout.json';
import MAINLAYOUT_VI from '@/constants/language/vi/mainLayout.json';
import { useTranslation, initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    // 'Welcome to React': 'Welcome to React and react-i18next',
    mainLayout: MAINLAYOUT_EN,
  },

  vi: {
    // 'Welcome to React': 'Xin Chào React',
    mainLayout: MAINLAYOUT_VI,
  },
};

export const defaultNS = 'mainLayout';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi',
    ns: ['mainLayout'],
    defaultNS,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
