import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SharedRootStackScreens } from './SharedRootStackScreens';

const Stack = createNativeStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="SettingsScreen">
      {SharedRootStackScreens()}
    </Stack.Navigator>
  );
};
