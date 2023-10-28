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
    },
  ),
);
