// Arrow functions are a more concise syntax for writing functions in JavaScript. They also have some differences in behavior compared to traditional function expressions, such as not having their own 'this' context.

// Traditional function expression
// function add(a, b) {
//     return a + b;
// }

// // Arrow function expression
// const addArrow = (a, b) => { // The curly braces are optional if the function body is a single expression
//     return a + b;
// };
// console.log(addArrow(2, 3)); // Returns 5

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); // The 'this' keyword always refers to the current object, which is the 'user' object in this case.
//         //console.log(this); // The 'this' keyword refers to the object that is calling the function, which in this case is the 'user' object.
//     }

// }
// user.welcomeMessage(); // Output: "hitesh , welcome to website" and the 'user' object
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this only works for objects, not for variables or functions. In this case, 'this' refers to the global object (window in browsers), which does not have a 'username' property, so it will log 'undefined'.
// }

// chai()

// const chai =  function()  {
//     let username = "hitesh"
//     console.log(this.username); // this only works for objects, not for variables or functions. In this case, 'this' refers to the global object (window in browsers), which does not have a 'username' property, so it will log 'undefined'.
// }


// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// const addTwo = (num1, num2) => {  // Arrow function with a block body, which requires an explicit 'return' statement to return a value.
//     return num1 + num2
// }
// console.log(addTwo(3, 4)) // Output: 7
// const addTwo = (num1, num2) =>  num1 + num2  // Implicit return, no need for curly braces or the 'return' keyword when the function body is a single expression
// console.log(addTwo(3, 4)) // Output: 7
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // When returning an object literal from an arrow function, you need to wrap the object in parentheses to avoid syntax errors, as the curly braces are interpreted as the start of a function body.
console.log(addTwo(3, 4)) // Output: { username: 'hitesh' }

// myArray = [2, 5, 3, 7, 8]
const myArray = [2, 5, 3, 7, 8]
myArray.forEach()
