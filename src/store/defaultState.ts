import { AppConfig } from './createAppConfigSlice';

type DefaultStoreState = {
  appConfig: AppConfig;
};

export default {
  appConfig: {
    language: 'en',
  },
} as DefaultStoreState;
