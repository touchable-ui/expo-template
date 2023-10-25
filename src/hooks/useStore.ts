import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

import { type StoreState, createAppConfigSlice } from '@store';

export const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);

    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createAppConfigSlice(set, get),
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
