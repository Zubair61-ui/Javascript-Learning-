// `for of` loop used to get values 

// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
//     console.log(typeof num);
    
// }
// const greetings = "Hello world!"

// for (const greet of greetings) {
//     // If the character is a space, skip the rest of this turn
//     if (greet === " ") {
//         continue;
//     }
    
//     console.log(`Each char is ${greet}`);
// }

// Maps  The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// //console.log(map);
// // We can get each value of map with the help of `for of` loop
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

// const myObject = {  Objects are not iterable with the help of `for of` loop
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }