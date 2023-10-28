import { AppConfig } from '.';

type DefaultStoreState = {
  appConfig: AppConfig;
};

export default {
  appConfig: {
    language: 'en',
    theme: 'light',
  },
} as DefaultStoreState;
