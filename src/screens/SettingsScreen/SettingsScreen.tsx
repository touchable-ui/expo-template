import { useStore } from '@hooks';
import { AuthenticatedStackParamList } from '@navigation/stacks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Stack, Text, XStack } from 'tamagui';

interface SettingsScreenProps
  extends NativeStackScreenProps<
    AuthenticatedStackParamList,
    'SettingsScreen'
  > {}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  const updateAppConfig = useStore(state => state.updateAppConfig);
  const appConfig = useStore(state => state.appConfig);

  const product = {
    id: 1,
    name: 'Product 1',
  };

  return (
    <Stack>
      <Text textAlign="center" fontWeight="bold">
        Current language: ({appConfig.language})
      </Text>

      <XStack justifyContent="center">
        <Button onPress={() => updateAppConfig({ language: 'es' })}>
          Spanish
        </Button>
        <Button onPress={() => updateAppConfig({ language: 'en' })}>
          English
        </Button>
      </XStack>

      <Button onPress={() => navigation.navigate('HomeStack')}>
        Go to Home stack
      </Button>

      <Button
        onPress={() => navigation.navigate('ProductDetailScreen', { product })}>
        Go to Product
      </Button>
    </Stack>
  );
};
