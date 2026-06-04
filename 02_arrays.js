// Array Concatenation

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  // push adds the whole array as a single element to the end of marvel_heros which is not what we want

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat(Preffered) method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// console.log(allHeros);
// console.log(allHeros[5]);

// const all_new_heros = [...marvel_heros, ...dc_heros] // Spread operator is used to expand the elements of an array. It is a more modern and concise way to concatenate arrays compared to the concat method.

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) // flat method is used to flatten an array. It takes a parameter which is the depth level specifying how deep a nested array structure should be flattened. If we pass Infinity as the parameter, it will flatten the array to any depth.
// console.log(real_another_array); // Used in rear cases when we have a deeply nested array and we want to flatten it completely.

console.log(Array.isArray("Hitesh")) // IsArray method is used to check if the given value is an array or not. It returns true if the value is an array, otherwise it returns false.
console.log(Array.from("Hitesh")) // From method is used to create an array from an iterable object.
console.log(Array.from({name: "hitesh"})) // From method can also be used to create an array from an array-like object. An array-like object is an object that has a length property and indexed elements, but does not have array methods. In this case, the from method will create an array with the values of the indexed elements of the object.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Of method is used to create a new array instance with a variable number of arguments, regardless of number or type of the arguments. It is a more concise way to create an array compared to the Array constructor.