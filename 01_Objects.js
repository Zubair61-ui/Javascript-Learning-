// // Singleton object is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. In JavaScript, we can create a singleton object using an object literal.
// const mySingleton = {
//     name: "Singleton Object", // Property to hold the name
//     greet: function() { // Method to greet
//         console.log(`Hello from ${this.name}!`); 
//     }
// };

// mySingleton.greet(); // Output: Hello from Singleton Object!

// Object literals are a convenient way to create objects in JavaScript. They allow us to define properties and methods directly within the object. Here's an example of an object literal:
// const person = {
//     name: "John Doe", // Property to hold the person's name
//     age: 30, // Property to hold the person's age
// }
// console.log(person["name"]); // Prefered way to access object properties using bracket notation
// console.log(person.age); // Output: 30

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(JsUser.lastLoginDays[0])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greet = function() {
    console.log("Hello, welcome to JavaScript!");
}
console.log(JsUser.greet()); // Output: Hello, welcome to JavaScript!