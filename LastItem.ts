type LastItem<T extends any[]> =  T extends [infer First, ...infer Rest] ? Rest extends [] ? First : LastItem<Rest> : never;
