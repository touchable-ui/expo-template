import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAppConfigSlice, type StoreState } from '@store';

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAppConfigSlice(set, get),
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => AsyncStorage),
      merge: (
        persistedState: unknown,
        currentState: StoreState,
      ): StoreState => {
        if (typeof persistedState === 'object' && persistedState !== null) {
          return {
            ...currentState,
            ...(persistedState as Partial<StoreState>),
          };
        }

        return currentState;
      },
      // Example of migration, change the default theme from light to dark
      // migrate: (persistedState: unknown, version: number): StoreState => {
      //   if (typeof persistedState === 'object' && persistedState !== null) {
      //     const state = persistedState as StoreState;
      //     if (version === 0 && state.appConfig.theme === 'light') {
      //       return {
      //         ...state,
      //         appConfig: { ...state.appConfig, theme: 'dark' },
      //       };
      //     }
      //   }

      //   return persistedState as StoreState;
      // },
      // version: 0,
    },
  ),
);
