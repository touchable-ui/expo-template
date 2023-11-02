import { translations } from '@localization';

import { StoreSlice } from '.';

interface AppConfig {
  language: keyof typeof translations;
  theme: 'dark' | 'light';
}

export interface AppConfigSlice {
  appConfig: AppConfig;
  updateAppConfig: (appConfig: Partial<AppConfig>) => void;
}

const defaultState: AppConfig = {
  language: 'en',
  theme: 'light',
};

export const createAppConfigSlice: StoreSlice<AppConfigSlice> = (set, get) => ({
  appConfig: {
    ...defaultState,
  },
  updateAppConfig: (appConfig: Partial<AppConfig>) =>
    set({ appConfig: { ...get().appConfig, ...appConfig } }),
});
