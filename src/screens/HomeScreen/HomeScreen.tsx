import { Pressable, Text, View } from 'react-native';

import { useTranslations } from '@hooks';
import { RootStackParamsList } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamsList, 'HomeScreen'> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslations();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
        <Text>Go to {t('settings')}</Text>
      </Pressable>
    </View>
  );
};
