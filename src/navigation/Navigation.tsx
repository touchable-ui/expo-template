import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './stacks';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
