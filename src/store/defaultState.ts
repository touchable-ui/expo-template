import { AppConfig } from '.';

type DefaultStoreState = {
  appConfig: AppConfig;
};

export default {
  appConfig: {
    language: 'en',
  },
} as DefaultStoreState;
