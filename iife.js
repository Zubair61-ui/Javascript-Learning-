// Immediately-invoked function expression (IIFE)  are functions that are executed immediately after they are defined. They are often used to create a new scope and avoid polluting the global namespace.
// (function() { // This code runs immediately
//     console.log("This function runs immediately!");
// })();
// // IIFE with parameters
// (function(name) { // This function takes a parameter and runs immediately
//     console.log("Hello, " + name + "!"); // Output: Hello, Alice!
// })("Alice"); 
// // IIFE with return value
// var result = (function(a, b) { // This function takes parameters and returns a value
//     return a + b; // Return the sum of a and b
// })(5, 10);
// console.log(result); // Output: 15

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // This IIFE is named "chai" and it runs immediately, logging "DB CONNECTED" to the console.

( (name) => { // This IIFE is an arrow function that takes a parameter "name" and logs "DB CONNECTED TWO hitesh" to the console when called with the argument "hitesh"
    console.log(`DB CONNECTED TWO ${name}`); // This IIFE is an arrow function that takes a parameter "name" and logs "DB CONNECTED TWO hitesh" to the console when called with the argument "hitesh"
} )('hitesh')