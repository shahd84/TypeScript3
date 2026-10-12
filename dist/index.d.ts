declare class DataStorage {
    private items;
    addItems(items: number[]): void;
    getItems(): number[];
}
declare class DataStorage2<Type> {
    private items;
    addItems(items: Type[]): void;
    getItems(): Type[];
}
declare class Store<Type2 = string> extends DataStorage2<Type2> {
}
declare let obj1: DataStorage2<number>;
declare let obj2: Store<number>;
interface lengthWise {
    length: number;
}
declare function echo<Type extends lengthWise>(value: Type): number;
interface Person {
    name: string;
    age: number;
    address: string;
    email: string;
}
type PersonKeys = "name" | "age" | "address";
type PersonKeys2 = keyof Person;
declare let key: PersonKeys2;
type user = {
    name: string;
    age: number;
    address: string;
    salary: 1000;
};
declare function getValue<Type, k extends keyof Type>(obj: Type, key: k): Type[k];
declare let x: user;
declare function test(constructor: Function): void;
declare class Auth {
}
declare let obj: Auth;
declare function person(message: string): (constructor: Function) => void;
declare function test2(constructor: Function): void;
declare class Human {
}
declare function home(classProperty: object, methodName: string, descriptor: PropertyDescriptor): void;
declare class Home {
    myFun2(x: number): number;
}
declare let obj4: Home;
declare function home2(classProperty: object, methodName: string, descriptor: PropertyDescriptor): void;
declare class Human1 {
    private _name;
    set name(userName: string);
    get name(): string;
}
declare let obj5: Human1;
declare function home3(classProperty: object, propertyName: string): void;
declare class Human3 {
    name: string;
}
declare let user: Human3;
declare function home4(classProperty: object, methodName: string, parameterIndex: number): void;
declare class Home5 {
    myFun(num: number): void;
}
//# sourceMappingURL=index.d.ts.map