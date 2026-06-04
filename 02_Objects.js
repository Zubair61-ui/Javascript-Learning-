//const tinderUser = new Object(); // This is singleton object
const tinderUser = {}; // This is object literal syntax
tinderUser.id = '123456';
tinderUser.name = 'John Doe';
tinderUser.isLoggedIn = false;
console.log(tinderUser.isLoggedIn);
console.log(typeof tinderUser);
// Object literal syntax is more used in real world applications
// Object is a collection of key value pairs
// Objects can have properties and methods
// Objects can be created using object literal syntax or using constructor function
// Objects can be nested(object inside object)
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: "John Doe",
        firstName: "John",
        lastName: "Doe"
    }
}
console.log(regularUser.fullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {...obj1, ...obj2} // Spread operator
// const obj3 = Object.assign({}, obj1, obj2) // Object.assign() method
console.log(obj3);

// Array of objects
// const users = [
//     {userId: 1, userName: "John"},
//     {userId: 2, userName: "Jane"},
//     {userId: 3, userName: "Doe"}
// ]
// console.log(users[2].userName);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Returns an array of keys
console.log(Object.values(tinderUser)); // Returns an array of values
console.log(Object.entries(tinderUser)); // Returns an array of key value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object destructuring is a convenient way of extracting multiple values from an object and assigning them to variables. It allows us to unpack properties from objects into distinct variables. Here's an example of object destructuring:
const course = {
    coursename: "js in hindi", // Property to hold the course name
    price: "999", // Property to hold the course price
    courseInstructor: "hitesh"
}

course.courseInstructor // const courseInstructor = course.courseInstructor

const {courseInstructor: instructor} = course // Object destructuring with renaming

// console.log(courseInstructor);
console.log(instructor); // Output: hitesh

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// JSON api is used to convert JavaScript objects to JSON string and JSON string to JavaScript objects
[
    {},
    {},
    {}
]