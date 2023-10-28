import React, { FC, ReactElement, ReactNode } from 'react';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config';

type ProviderProps = {
  children: ReactNode;
};

/**
 * Recursively build a provider tree based on the array of providers.
 * This starts with an initial component and wraps it in each provider in the array.
 *
 * @param providers List of provider components to wrap.
 */
const buildProvidersTree = (providers: ReactElement[]): FC<ProviderProps> => {
  const BaseComponent: FC<ProviderProps> = ({ children }) => <>{children}</>;

  return providers.reduce<FC<ProviderProps>>(
    (AccumulatedComponent, ProviderComponent) => {
      return ({ children }) => (
        <AccumulatedComponent>
          {React.cloneElement(ProviderComponent, {}, children)}
        </AccumulatedComponent>
      );
    },
    BaseComponent,
  );
};

// Create the tree of providers using an array of provider components.
const ProvidersTree = buildProvidersTree([
  <TamaguiProvider config={tamaguiConfig} />,
]);

export default ProvidersTree;
