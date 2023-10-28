import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsScreen } from '@screens';
import { AuthenticatedStackParamList } from './AuthenticatedStack';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
