import { Button, Text, View } from 'react-native';

import { t } from '../../localization';
import { useStore } from '../../store';
import { AppConfig } from '../../store/createAppConfigSlice';

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({}) => {
  const updateAppConfig = useStore(state => state.updateAppConfig);
  const appConfig = useStore(state => state.appConfig);

  const onChangeLanguage = (language: AppConfig['language']) => {
    updateAppConfig({ language });
  };

  return (
    <View>
      <Text>
        {t('settings')} Current language: ({appConfig.language})
      </Text>
      <Button
        title="Change language to Spanish"
        onPress={() => onChangeLanguage('es')}
      />
      <Button
        title="Change language to English"
        onPress={() => onChangeLanguage('en')}
      />
    </View>
  );
};
