import { MMKV } from 'react-native-mmkv';
import { create, StoreApi } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

import { AppConfigSlice, createAppConfigSlice } from './createAppConfigSlice';

export const storage = new MMKV();

export type StoreState = AppConfigSlice;

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

export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState'],
) => T;

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
