type ExtractFirstChar<T extends string> = T extends `${infer F}${infer R}` ? F:never;

let s1="omkar";

type First=ExtractFirstChar<"omkar">;


let c:First="o";
