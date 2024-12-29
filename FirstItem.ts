type FirstItem<T extends any[]> = T extends [infer First,...infer Rest]  ? First : never;

type A = FirstItem<[string,number,boolean]>;

const myName: A = "omkar";
