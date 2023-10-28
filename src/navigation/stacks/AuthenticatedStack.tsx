import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { HomeStack } from './HomeStack';
import { SettingsStack } from './SettingsStack';

export type AuthenticatedStackParamList = {
  HomeStack: undefined;
  SettingsStack: undefined;
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const Stack =
  createBottomTabNavigator<StacksOnly<AuthenticatedStackParamList>>();

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
        options={({ route }) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={({ route }) => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
