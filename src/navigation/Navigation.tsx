import { NavigationContainer } from '@react-navigation/native';

import { AuthenticatedStack } from './stacks';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
};
