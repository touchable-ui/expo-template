import { t } from '../localization';
import { useStore } from '../store';

export const useTranslations = () => {
  useStore(state => state.appConfig.language);

  return { t };
};
