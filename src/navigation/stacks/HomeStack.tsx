import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SharedRootStackScreens} from './SharedRootStackScreens';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {SharedRootStackScreens()}
    </Stack.Navigator>
  );
};
