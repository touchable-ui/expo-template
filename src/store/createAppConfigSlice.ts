import {StoreSlice} from '.';
import translations from '../localization/translations';

import defaultState from './defaultState';

export interface AppConfig {
  language: keyof typeof translations;
}

export interface AppConfigSlice {
  appConfig: AppConfig;
  updateAppConfig: (appConfig: Partial<AppConfig>) => void;
}

export const createAppConfigSlice: StoreSlice<AppConfigSlice> = (set, get) => ({
  appConfig: {
    ...defaultState.appConfig,
  },
  updateAppConfig: (appConfig: Partial<AppConfig>) =>
    set({appConfig: {...get().appConfig, ...appConfig}}),
});
