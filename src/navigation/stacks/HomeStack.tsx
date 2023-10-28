import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens';
import { AuthenticatedStackParamList } from './AuthenticatedStack';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
