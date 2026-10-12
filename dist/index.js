"use strict";
/*
   Keyof
   import &export
   decorators
   -class decorator
    -method decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class DataStorage {
    constructor() {
        this.items = [];
    }
    addItems(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
}
// to solve static =>dynamic 
class DataStorage2 {
    constructor() {
        this.items = [];
    }
    addItems(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
}
class Store extends DataStorage2 {
}
let obj1 = new DataStorage2();
let obj2 = new Store();
obj2.addItems([10, 20, 30, 40]);
console.log(obj1.addItems([10, 20, 30, 40]));
console.log(obj1.getItems());
function echo(value) {
    return value.length;
}
echo("shahd");
let key = "address";
console.log(key);
function getValue(obj, key) {
    return obj[key];
}
let x = {
    name: "shahd",
    age: 21,
    address: "Giza",
    salary: 1000
};
console.log(getValue(x, "address"));
//import
// import  PI,{sum as add,subtract} from "./math";
// console.log(add(2,3)*PI)
// console.log(subtract(2,3))
//decorators =>class how know function receive class
function test(constructor) {
    console.log("Done");
    constructor.prototype.x = 90;
    constructor.prototype.myFun = function () {
        console.log("ok");
    };
}
let Auth = class Auth {
};
Auth = __decorate([
    test
], Auth);
let obj = new Auth();
console.log(obj.x);
obj.myFun();
function person(message) {
    return function (constructor) {
        console.log(message);
    };
}
function test2(constructor) {
    console.log("Done2");
}
let Human = class Human {
};
Human = __decorate([
    test2,
    person("hello Shahd")
], Human);
//method decorator
function home(classProperty, methodName, descriptor) {
    let originalMethod = descriptor.value;
    console.log(classProperty);
    console.log(methodName);
    console.log(descriptor);
    descriptor.value = function (...arr) {
        console.log("Hello Decorator");
        //  return originalMethod();
        return originalMethod.call(this, ...arr);
    };
}
class Home {
    myFun2(x) {
        console.log("method Decorator");
        return x;
    }
}
__decorate([
    home,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Home.prototype, "myFun2", null);
let obj4 = new Home();
console.log(obj4.myFun2(30));
// decorator accessor
function home2(classProperty, methodName, descriptor) {
    let old = descriptor.get;
    descriptor.get = function () {
        console.log("home2");
        return old === null || old === void 0 ? void 0 : old.call(this);
    };
}
class Human1 {
    constructor() {
        this._name = "";
    }
    set name(userName) {
        this._name = userName;
    }
    get name() {
        return this._name;
    }
}
__decorate([
    home2,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Human1.prototype, "name", null);
let obj5 = new Human1();
obj5.name = "mohammed";
console.log(obj5.name);
//property=>decorator
function home3(classProperty, propertyName) {
    let value;
    let descriptor = {
        get: () => {
            return value;
        },
        set: (newName) => {
            console.log("set");
            value = newName;
        }
    };
    //add property to class
    Object.defineProperty(classProperty, propertyName, descriptor);
}
class Human3 {
    constructor() {
        this.name = "";
    }
}
__decorate([
    home3,
    __metadata("design:type", Object)
], Human3.prototype, "name", void 0);
let user = new Human3();
user.name = "shahd";
console.log(user.name);
// parameters decorator
function home4(classProperty, methodName, parameterIndex) {
    console.log(classProperty);
    console.log(methodName);
    console.log(parameterIndex);
}
class Home5 {
    myFun(num) { }
}
__decorate([
    __param(0, home4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Home5.prototype, "myFun", null);
//# sourceMappingURL=index.js.map