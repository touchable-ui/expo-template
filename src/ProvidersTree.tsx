import React from 'react';
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui';
import tamaguiConfig from '../tamagui.config';

type Providers = [React.ElementType, React.ComponentProps<any>];
type Children = {
  children: React.ElementType[];
};

const buildProvidersTree = (componentsWithProps: Providers[]) => {
  const initialComponent = ({ children }: Children) => <>{children}</>;

  return componentsWithProps.reduce(
    (
      AccumulatedComponents: React.ElementType,
      [Provider, props = {}]: Providers,
    ) =>
      ({ children }: Children) => (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      ),
    initialComponent,
  );
};

const ProvidersTree = buildProvidersTree([
  [TamaguiProvider, { config: tamaguiConfig } as TamaguiProviderProps],
]);

export default ProvidersTree;
