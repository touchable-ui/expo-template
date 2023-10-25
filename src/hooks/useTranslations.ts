import { t } from '../localization';
import { useStore } from './useStore';

export const useTranslations = () => {
  useStore(state => state.appConfig.language);

  return { t };
};
