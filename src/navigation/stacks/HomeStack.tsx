import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SharedAuthenticatedStackScreens } from './SharedAuthenticatedStackScreens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {SharedAuthenticatedStackScreens()}
    </Stack.Navigator>
  );
};
