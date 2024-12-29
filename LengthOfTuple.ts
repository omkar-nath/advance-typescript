type LengthOfTuple<T extends any[]> = T['length'];

const array=[1,2,3,4,5];

type len = LengthOfTuple<[1,2,3]>;
