import { StoreApi } from 'zustand';

import { AppConfigSlice } from './createAppConfigSlice';

export * from './createAppConfigSlice';
export type StoreState = AppConfigSlice;
export type AppConfig = AppConfigSlice['appConfig'];
export type UpdateAppConfig = AppConfigSlice['updateAppConfig'];
export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState'],
) => T;
