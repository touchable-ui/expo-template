import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SettingsScreen } from '@screens';

export type SharedAuthenticatedStackScreensParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const Stack =
  createNativeStackNavigator<SharedAuthenticatedStackScreensParamList>();

export const SharedAuthenticatedStackScreens = () => {
  return (
    <>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </>
  );
};
