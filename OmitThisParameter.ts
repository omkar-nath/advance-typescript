type MyOmitThisParameter<T extends (args:any)=>any> =  T extends (this:any,...params: infer P) => infer R ? (...params:P)=>R ? unknown;


