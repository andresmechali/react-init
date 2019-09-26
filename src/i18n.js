import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import en from 'translations/en/common';
import es from 'translations/es/common';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['common'],
    defaultNS: 'common',
    resources: {
      en: {
        common: en,
      },
      es: {
        common: es,
      },
    },
  });

export default i18n;
