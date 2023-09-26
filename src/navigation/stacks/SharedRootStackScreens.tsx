import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SettingsScreen} from '../../screens';

export type SharedRootStackScreensParamsList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<SharedRootStackScreensParamsList>();

export const SharedRootStackScreens = () => {
  return (
    <>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </>
  );
};
