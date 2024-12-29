
class Person {
    constructor(name:string,lastName:string){
        this.name=name;
        this.lastName=lastName;
    }
}

type MyInstancetype<T extends new (args:any)=>any> = T extnds new (args:any)=>infer R? R: any;

type PersonInstanceType=MyInstancetype<Person>;



