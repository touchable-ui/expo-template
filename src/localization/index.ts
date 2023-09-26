import * as Localization from 'expo-localization';
import { I18n, TranslateOptions } from 'i18n-js';

import translations from './translations';

const i18n = new I18n(translations);

export const initLocalization = (language: keyof typeof translations) => {
  i18n.locale = Localization.locale;
  i18n.enableFallback = true;
  i18n.locale = language;
};

export const t = (
  scope: keyof (typeof translations)['en'],
  options?: TranslateOptions,
) => {
  return i18n.t(scope, options);
};
