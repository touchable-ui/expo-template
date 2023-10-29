import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticatedStackParamList } from './AuthenticatedStack';
import { AuthenticatedStackSharedScreens } from './StacksSharedScreens';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      {AuthenticatedStackSharedScreens()}
    </Stack.Navigator>
  );
};
