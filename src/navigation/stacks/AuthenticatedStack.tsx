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

const Stack = createBottomTabNavigator();

type TabBarIconProps = Parameters<
  NonNullable<BottomTabNavigationOptions['tabBarIcon']>
>[0] & { routeName: keyof AuthenticatedStackParamList };

const TabBarIcon = ({ color, size, routeName }: TabBarIconProps) => {
  switch (routeName) {
    case 'SettingsStack':
      return <MaterialCommunityIcons name="cog" color={color} size={size} />;

    default:
      return <MaterialCommunityIcons name="home" color={color} size={size} />;
  }
};

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
          tabBarIcon: props => TabBarIcon({ ...props, routeName: route.name }),
        })}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={({ route }) => ({
          tabBarLabel: 'Settings',
          tabBarIcon: props => TabBarIcon({ ...props, routeName: route.name }),
        })}
      />
    </Stack.Navigator>
  );
};
