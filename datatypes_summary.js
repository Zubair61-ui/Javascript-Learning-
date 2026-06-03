// // Primitive Datatypes
// let myString = "Hello, World!";
// let myNumber = 42;
// let myBoolean = true;
// let myNull = null;
// let myUndefined;
// // Non-Primitive  Datatypes
// let myObject = { name: "Alice", age: 30 };
// let myArray = [1, 2, 3, 4, 5];
// let myFunction = function() {
//     console.log("This is a function.");
// }
// Summary Primitive datatypes include strings, numbers, booleans, null, and undefined. They are immutable and hold a single value. Complex datatypes include objects, arrays, and functions. They can hold multiple values and are mutable. Understanding these datatypes is essential for effective programming in JavaScript.
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3