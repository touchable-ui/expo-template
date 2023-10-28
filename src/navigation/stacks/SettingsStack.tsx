import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SharedAuthenticatedStackScreens } from './SharedAuthenticatedStackScreens';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      {SharedAuthenticatedStackScreens()}
    </Stack.Navigator>
  );
};
