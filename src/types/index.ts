export interface Product {
  id: number;
  name: string;
}

/**
 * Extracts keys from a type that contain a specific string.
 * @template T - The type to extract keys from.
 * @template S - The string to search for in the keys.
 */
export type KeysContain<T, S extends string> = Pick<
  T,
  /**
   * Filters the keys of the type T to only include keys that contain the string S.
   */
  {
    [K in keyof T]: K extends `${string}${S}${string}` ? K : never;
  }[keyof T]
>;
