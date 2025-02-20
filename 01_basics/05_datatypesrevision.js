//DATA TYPES
// concept of call by value and reference
//Based on the logic that a how a data type is stored in the memory and how it can be accesed, data types are classified into two types

//Primitive--->user gets a copy while accessing it
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 300
const scorevalue= 300.5

const isLoggedIn = false;
const temp = null;    //object type
let username; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')  //return type symbol
console.log(id==anotherId)

const bignum = 9889423519n  
console.log(typeof bignum)  //return type bigint

//Non primitive(refernce type)---->
// Arrays, Objects, Functions
//genrally their return type is function, but function return tyep is object function

const heros = ["ironman", "spiderman", "captainamerica"]; //arrays
let myObj = {
    name : "aditya",
    age : 19,
} // objects

const myFunction = function(){
    console.log("hello world");
}//function


//memory management in js
//primitive(stack) and non-primitive(heap)

//satck
let x = 10;
let y = x;
x = 5;
console.log(x,y);

//heap
let user_1 = {
    name: "adi",
    age :19,
}
let user_2 = user_1;
user_2.name = "tanay";

console.log(user_1.name);
console.log(user_2.name);



