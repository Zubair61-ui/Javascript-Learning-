// const userEmail = {} // Empty brackets show the truthy values

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN Expect these all values are considered as true

//truthy values
// "0", 'false', " ", [], {}, function(){}
// Checking if array is empty
//  if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// // Checking if object is empty
// const emptyObj = {name: "Zubair"}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// else
// {
//     console.log("Object is not empty");
    
// }


// Nullish Coalescing Operator (??): null undefined
/* The null coalescence operator ( ??) is a logical operator that returns its right operand
 when its left operand is true nullor false, undefinedand returns its left operand otherwise. */
// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 890")