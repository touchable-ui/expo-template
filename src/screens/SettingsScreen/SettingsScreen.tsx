import { Button, Text, View } from 'react-native';

import { useTranslations, useStore } from '@hooks';

interface SettingsScreenProps {}

export const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const updateAppConfig = useStore(state => state.updateAppConfig);
  const appConfig = useStore(state => state.appConfig);
  const { t } = useTranslations();

  return (
    <View>
      <Text>
        {t('settings')} Current language: ({appConfig.language})
      </Text>
      <Button
        title="Change language to Spanish"
        onPress={() => updateAppConfig({ language: 'es' })}
      />
      <Button
        title="Change language to English"
        onPress={() => updateAppConfig({ language: 'en' })}
      />
    </View>
  );
};
