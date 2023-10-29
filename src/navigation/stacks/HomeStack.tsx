import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticatedStackParamList } from './AuthenticatedStack';
import { AuthenticatedStackSharedScreens } from './StacksSharedScreens';

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {AuthenticatedStackSharedScreens()}
    </Stack.Navigator>
  );
};
