import { translations } from '@localization';

import { StoreSlice } from '.';
import defaultState from './defaultState';

interface AppConfig {
  language: keyof typeof translations;
  theme: 'dark' | 'light';
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
    set({ appConfig: { ...get().appConfig, ...appConfig } }),
});
