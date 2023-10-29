import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { KeysContain } from '@types';
import { HomeStack } from './HomeStack';
import { SettingsStack } from './SettingsStack';
import { AuthenticatedStackSharedScreensParamList } from './StacksSharedScreens';

export type AuthenticatedStackParamList = {
  HomeStack: undefined;
  SettingsStack: undefined;
} & AuthenticatedStackSharedScreensParamList;

const Stack =
  createBottomTabNavigator<KeysContain<AuthenticatedStackParamList, 'Stack'>>();

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={() => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={() => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
