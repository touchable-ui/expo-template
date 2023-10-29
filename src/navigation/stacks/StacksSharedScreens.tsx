import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  ProductDetailScreen,
  ProductDetailScreenRouteParams,
  SettingsScreen,
} from '@screens';

export type AuthenticatedStackSharedScreensParamList = {
  HomeScreen: undefined;
  SettingsScreen: undefined;
  ProductDetailScreen: ProductDetailScreenRouteParams;
};

const Stack =
  createNativeStackNavigator<AuthenticatedStackSharedScreensParamList>();

export const AuthenticatedStackSharedScreens = () => {
  return (
    <>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </>
  );
};
