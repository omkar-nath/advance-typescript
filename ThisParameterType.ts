function Foo(this:{a:string}){}

function Bar(){}

type MyThisParam<T extends (args:any)=>any>= T extends (this: infer P, ...params: any)=>any ? P : unknown; 

type A = ThisParameterType<typeof Foo>;
console.log(A);
