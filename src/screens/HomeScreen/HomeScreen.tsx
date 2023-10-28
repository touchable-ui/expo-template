import { View } from 'react-native';

import { useTranslations } from '@hooks';
import { AuthenticatedStackParamList } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product } from '@types';
import { Button } from 'tamagui';

interface HomeScreenProps
  extends NativeStackScreenProps<AuthenticatedStackParamList, 'HomeScreen'> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslations();

  const product: Product = {
    id: 1,
    name: 'Product 1',
  };

  return (
    <View>
      <Button onPress={() => navigation.navigate('SettingsStack')}>
        Go to{t('settings')}
      </Button>
      <Button
        onPress={() => navigation.navigate('ProductDetailScreen', product)}>
        Open product
      </Button>
    </View>
  );
};
