/*
   Keyof
   import &export
   decorators
   -class decorator
    -method decorator
*/


class DataStorage{
   private items:number[]=[];
   public addItems(items:number[]){
      this.items=items;

   }
   public getItems():number[]{
      return this.items;
   }


}
// to solve static =>dynamic 
class DataStorage2<Type>{
   private items:Type[]=[];
   public addItems(items:Type[]){
      this.items=items;

   }
   public getItems():Type[]{
      return this.items;
   }


}
class Store<Type2=string> extends DataStorage2<Type2>{

}

let obj1:DataStorage2<number>=new DataStorage2<number>()
let obj2:Store<number>=new Store();
obj2.addItems([10,20,30,40]);
console.log(obj1.addItems([10,20,30,40]));
console.log(obj1.getItems());

interface lengthWise{
   length:number;

}
function echo<Type extends lengthWise>(value:Type){
   return value.length;
}
echo<string>("shahd");

interface Person{
   name:string;
   age:number;
   address:string;
   email:string;
}
type PersonKeys="name"|"age"|"address";
type PersonKeys2=keyof Person;

let key:PersonKeys2="address"
console.log(key);

type user ={
   name:string;
   age:number;
   address:string;
   salary:1000
}
function getValue<Type,k extends keyof Type>(obj:Type,key:k):Type[k]{
   return obj[key];
}
let x:user={
   name:"shahd",
   age:21,
   address:"Giza",
   salary:1000
}
console.log(getValue(x,"address"))

//import

// import  PI,{sum as add,subtract} from "./math";
// console.log(add(2,3)*PI)
// console.log(subtract(2,3))



//decorators =>class how know function receive class

function test(constructor:Function){
   console.log("Done");
   constructor.prototype.x=90;
   constructor.prototype.myFun=function(){
      console.log("ok")
   }

}
@test
class Auth{

}

let obj:Auth=new Auth();
console.log((<any>obj).x);
(<any>obj).myFun();

function person(message:string){
   return function (constructor:Function){
      console.log(message)
   }
}

function test2(constructor:Function){
   console.log("Done2");

}
@test2
@person("hello Shahd")
class Human{}

//method decorator

function home(classProperty:object,methodName:string,descriptor:PropertyDescriptor){
   let originalMethod=descriptor.value;
   console.log(classProperty);
   console.log(methodName);
   console.log(descriptor);
   descriptor.value=function(...arr:any[]){
      console.log("Hello Decorator")
      //  return originalMethod();
       return originalMethod.call(this,...arr);
      
     
   }
}

class Home{
   @home
   public myFun2(x:number){
      console.log("method Decorator")
       return x;
   }
}
let obj4:Home=new Home();
console.log(obj4.myFun2(30))
// decorator accessor
function home2(classProperty:object,methodName:string,descriptor:PropertyDescriptor){
   
   let old=descriptor.get;
   descriptor.get=function(){
      console.log("home2");
     return old?.call(this) 
   }
   

}


class Human1{
   private _name="";
   public set name(userName:string){
      this._name=userName
   }
   @home2
   public get name(){
      return this._name;
   }
}
let obj5:Human1=new Human1();
obj5.name="mohammed";
console.log(obj5.name)

//property=>decorator
function home3(classProperty:object,propertyName:string){
   let value:string;
   let descriptor:PropertyDescriptor={
      get:()=>{
         return value;
      },
      set:(newName:string)=>{
         console.log("set")
         value=newName;

      }
   }
   //add property to class
   Object.defineProperty(classProperty,propertyName,descriptor);

}
class Human3{
   @home3
   public name="";
   
}
let user:Human3=new Human3();
user.name="shahd"
console.log(user.name)

// parameters decorator
function home4(classProperty:object,methodName:string,parameterIndex:number){
   console.log(classProperty)
   console.log(methodName)
   console.log(parameterIndex)
   
}

class Home5{
   public myFun(@home4 num:number){}
}








