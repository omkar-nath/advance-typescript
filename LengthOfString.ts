type StringToTuple<T extends string> = T extends `${infer Frist}${infer Rest}` ? [First,...StringToTuple<Rest>]:[];
type StringLength<T extends string> = StringToTuple<T>['length'];
