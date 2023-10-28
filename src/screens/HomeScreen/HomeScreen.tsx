import { View } from 'react-native';

import { useTranslations } from '@hooks';
import { AuthenticatedStackParamList } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'tamagui';

interface HomeScreenProps
  extends NativeStackScreenProps<AuthenticatedStackParamList, 'HomeScreen'> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslations();

  return (
    <View>
      <Button onPress={() => navigation.navigate('SettingsStack')}>
        Go to{t('settings')}
      </Button>
    </View>
  );
};
