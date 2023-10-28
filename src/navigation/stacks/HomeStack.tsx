import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, ProductDetailScreen } from '@screens';
import { AuthenticatedStackParamList } from './AuthenticatedStack';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
