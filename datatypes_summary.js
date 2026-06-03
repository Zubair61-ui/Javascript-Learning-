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

/* const score = 100
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
*/
// Stack memory : Primitive datatypes are stored in stack memory. They are accessed directly and have a fixed size. When you assign a primitive value to a variable, it creates a copy of that value in memory.
let myyoutubeChannel = "Code with Hitesh";
let anotherYoutubeChannel = myyoutubeChannel;
anotherYoutubeChannel = "Code with Harry";
console.log(myyoutubeChannel);
console.log(anotherYoutubeChannel);

// Heap memory : Non-primitive datatypes are stored in heap memory. They can have a variable size and are accessed through references. When you assign a non-primitive value to a variable, it creates a reference to that value in memory, rather than copying it.
let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "ayush@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: ayush@google.com
console.log(userTwo.email); // Output: ayush@google.com