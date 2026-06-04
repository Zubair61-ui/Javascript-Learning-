// Arrays in JavaScript

// Creating an array
// let fruits = ['Apple', 'Banana', 'Cherry'];
// console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']
// // Accessing elements
// console.log(fruits[0]); // Output: 'Apple'
// console.log(fruits[1]); // Output: 'Banana'
// console.log(fruits[2]); // Output: 'Cherry'
// // Modifying elements
// fruits[1] = 'Blueberry';
// console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
// // Adding elements
// fruits.push('Date');
// console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date']
// // Removing elements
// fruits.pop();
// console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
// fruits.shift();
// console.log(fruits); // Output: ['Blueberry', 'Cherry']
// fruits.unshift('Apricot');
// console.log(fruits); // Output: ['Apricot', 'Blueberry', 'Cherry']
// // Length of the array
// console.log(fruits.length); // Output: 3
// // Iterating over the array
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });
// // Output:
// // 'Apricot'
// // 'Blueberry'
// // 'Cherry'
// // Using map to create a new array
// let upperCaseFruits = fruits.map(function(fruit) {
//     return fruit.toUpperCase();
// });
// console.log(upperCaseFruits); // Output: ['APRICOT', 'BLUEBERRY', 'CHERRY']
// // Using filter to create a new array with specific criteria
// let filteredFruits = fruits.filter(function(fruit) {
//     return fruit.startsWith('B');
// });
// console.log(filteredFruits); // Output: ['Blueberry']
// // Using find to get the first element that matches a condition
// let foundFruit = fruits.find(function(fruit) {
//     return fruit.length > 6;
// });
// console.log(foundFruit); // Output: 'Blueberry'
// // Using indexOf to find the index of an element
// let index = fruits.indexOf('Cherry');
// console.log(index); // Output: 2
// // Using includes to check if an element exists in the array
// let hasApple = fruits.includes('Apple');
// console.log(hasApple); // Output: false
// let hasCherry = fruits.includes('Cherry');
// console.log(hasCherry); // Output: true
// // Using slice to create a new array from a portion of the original array
// let slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); // Output: ['Blueberry', 'Cherry']
// // Using splice to modify the array by adding/removing elements
// fruits.splice(1, 1, 'Blackberry');
// console.log(fruits); // Output: ['Apricot', 'Blackberry', 'Cherry']

const myArr = [0, 3, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(typeof myArr);
console.log(typeof myArr2);
console.log(myArr2[1]);
//Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]
myArr.pop()
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]
myArr.unshift(9)
myArr.shift()
console.log(myArr); // Output: [9, 0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);